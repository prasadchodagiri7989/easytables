import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRightLeft } from "lucide-react";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import { Link, useLocation } from "react-router-dom";

// Hook to parse query parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Available color formats
const colorFormats = [
  { label: "HEX", value: "hex" },
  { label: "RGB", value: "rgb" },
  { label: "HSL", value: "hsl" },
];

// Utility function to convert color
const convertColor = (value: string, from: string, to: string): string => {
  const parseHex = (hex: string) => {
    let cleaned = hex.replace("#", "");
    if (cleaned.length === 3) cleaned = cleaned.split("").map(c => c + c).join("");
    const bigint = parseInt(cleaned, 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
  };

  const rgbToHex = (r: number, g: number, b: number) =>
    `#${[r, g, b].map(x => x.toString(16).padStart(2, "0")).join("")}`;

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return `hsl(${(h * 360).toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%)`;
  };

  const hslToRgb = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return {
      r: Math.round(255 * f(0)),
      g: Math.round(255 * f(8)),
      b: Math.round(255 * f(4)),
    };
  };

  const parseRGB = (input: string) => {
    const [r, g, b] = input.replace(/[^\d,]/g, "").split(",").map(Number);
    return { r, g, b };
  };

  const parseHSL = (input: string) => {
    const [h, s, l] = input.replace(/[^\d,]/g, "").split(",").map(Number);
    return { h, s, l };
  };

  let rgb;
  if (from === "hex") {
    rgb = parseHex(value);
  } else if (from === "rgb") {
    rgb = parseRGB(value);
  } else if (from === "hsl") {
    const { h, s, l } = parseHSL(value);
    rgb = hslToRgb(h, s, l);
  } else {
    throw new Error("Unsupported format");
  }

  if (to === "hex") return rgbToHex(rgb.r, rgb.g, rgb.b);
  if (to === "rgb") return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  if (to === "hsl") return rgbToHsl(rgb.r, rgb.g, rgb.b);

  return "Invalid conversion";
};

export const ColorConverter = () => {
  const query = useQuery();
  const [fromFormat, setFromFormat] = useState("hex");
  const [toFormat, setToFormat] = useState("rgb");
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const from = query.get("from");
    const to = query.get("to");
    if (from && to && colorFormats.some(f => f.value === from) && colorFormats.some(f => f.value === to)) {
      setFromFormat(from);
      setToFormat(to);
    }
  }, [query]);

  const handleConvert = () => {
    try {
      const output = convertColor(value, fromFormat, toFormat);
      setResult(output);
    } catch {
      setResult("Invalid input");
    }
  };

  const handleSwap = () => {
    setFromFormat(toFormat);
    setToFormat(fromFormat);
    setResult(null);
  };

  return (
    <>
<Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/all-conversions">All Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Angle Convertor</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full max-w-4xl mx-auto">
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Color Converter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-end">
              <div className="space-y-2">
                <Label>From</Label>
                <Select value={fromFormat} onValueChange={setFromFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="From format" />
                  </SelectTrigger>
                  <SelectContent>
                    {colorFormats.map((fmt) => (
                      <SelectItem key={fmt.value} value={fmt.value}>
                        {fmt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button variant="ghost" className="self-center ml-1 px-2" onClick={handleSwap}>
                <ArrowRightLeft className="h-4 w-4" />
              </Button>

              <div className="space-y-2">
                <Label>To</Label>
                <Select value={toFormat} onValueChange={setToFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="To format" />
                  </SelectTrigger>
                  <SelectContent>
                    {colorFormats.map((fmt) => (
                      <SelectItem key={fmt.value} value={fmt.value}>
                        {fmt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="color-value">Value</Label>
              <Input
                id="color-value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={
                  fromFormat === "hex"
                    ? "#ff5733"
                    : fromFormat === "rgb"
                    ? "255,87,51"
                    : "14,100,60"
                }
              />
            </div>

            <Button className="w-full" onClick={handleConvert}>
              Convert
            </Button>

            {result && (
              <div className="mt-4 p-4 rounded-md bg-muted">
                <p className="text-sm font-medium mb-1">Result:</p>
                <p className="text-lg font-bold break-words">{result}</p>
                <div className="mt-2 h-10 w-full rounded" style={{ backgroundColor: result }}></div>
              </div>
            )}
          </CardContent>
        </Card>

        <GuidanceSection title={`How to Convert ${fromFormat.toUpperCase()} to ${toFormat.toUpperCase()}`}>
          <p>Use the format guide and example below:</p>
          <ol className="list-decimal pl-5 my-2">
            <li>Select "{fromFormat.toUpperCase()}" from the "From" dropdown</li>
            <li>Select "{toFormat.toUpperCase()}" from the "To" dropdown</li>
            <li>Enter your color code (e.g., #ff5733 or 255,87,51)</li>
            <li>Click "Convert" to get the result</li>
          </ol>

          <h4 className="font-medium mt-4 mb-1">Example</h4>
          <p>Convert <code>#ff5733</code> (HEX) to RGB:</p>
          <div className="bg-background p-2 rounded my-2">
            <p>#ff5733 = rgb(255, 87, 51)</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
