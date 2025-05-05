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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Link, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const colorFormats = [
  { label: "HEX", value: "hex" },
  { label: "RGB", value: "rgb" },
  { label: "HSL", value: "hsl" },
  { label: "HSV", value: "hsv" },
  { label: "CMYK", value: "cmyk" },
];

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
    r /= 255; g /= 255; b /= 255;
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
      h *= 60;
    }
    return `hsl(${h.toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%)`;
  };

  const hslToRgb = (h: number, s: number, l: number) => {
    s /= 100; l /= 100;
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

  const rgbToCmyk = (r: number, g: number, b: number) => {
    const rF = r / 255, gF = g / 255, bF = b / 255;
    const k = 1 - Math.max(rF, gF, bF);
    const c = (1 - rF - k) / (1 - k) || 0;
    const m = (1 - gF - k) / (1 - k) || 0;
    const y = (1 - bF - k) / (1 - k) || 0;
    return `cmyk(${(c * 100).toFixed(0)}, ${(m * 100).toFixed(0)}, ${(y * 100).toFixed(0)}, ${(k * 100).toFixed(0)})`;
  };

  const cmykToRgb = (c: number, m: number, y: number, k: number) => {
    const r = 255 * (1 - c / 100) * (1 - k / 100);
    const g = 255 * (1 - m / 100) * (1 - k / 100);
    const b = 255 * (1 - y / 100) * (1 - k / 100);
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
  };

  const rgbToHsv = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const d = max - min;
    const s = max === 0 ? 0 : d / max;
    let h = 0;
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
      case g: h = ((b - r) / d + 2); break;
      case b: h = ((r - g) / d + 4); break;
    }
    h *= 60;
    return `hsv(${h.toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(max * 100).toFixed(0)}%)`;
  };

  const hsvToRgb = (h: number, s: number, v: number) => {
    s /= 100; v /= 100;
    const c = v * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = v - c;
    let r = 0, g = 0, b = 0;
    if (h < 60) [r, g, b] = [c, x, 0];
    else if (h < 120) [r, g, b] = [x, c, 0];
    else if (h < 180) [r, g, b] = [0, c, x];
    else if (h < 240) [r, g, b] = [0, x, c];
    else if (h < 300) [r, g, b] = [x, 0, c];
    else [r, g, b] = [c, 0, x];
    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
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

  const parseHSV = (input: string) => {
    const [h, s, v] = input.replace(/[^\d,]/g, "").split(",").map(Number);
    return { h, s, v };
  };

  const parseCMYK = (input: string) => {
    const [c, m, y, k] = input.replace(/[^\d,]/g, "").split(",").map(Number);
    return { c, m, y, k };
  };

  let rgb;
  if (from === "hex") rgb = parseHex(value);
  else if (from === "rgb") rgb = parseRGB(value);
  else if (from === "hsl") rgb = hslToRgb(...Object.values(parseHSL(value)));
  else if (from === "hsv") rgb = hsvToRgb(...Object.values(parseHSV(value)));
  else if (from === "cmyk") rgb = cmykToRgb(...Object.values(parseCMYK(value)));
  else throw new Error("Unsupported format");

  if (to === "hex") return rgbToHex(rgb.r, rgb.g, rgb.b);
  if (to === "rgb") return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  if (to === "hsl") return rgbToHsl(rgb.r, rgb.g, rgb.b);
  if (to === "hsv") return rgbToHsv(rgb.r, rgb.g, rgb.b);
  if (to === "cmyk") return rgbToCmyk(rgb.r, rgb.g, rgb.b);

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
          <BreadcrumbPage>Color Convertor</BreadcrumbPage>
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
                  <SelectTrigger disabled>
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
                  <SelectTrigger disabled>
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
                    : fromFormat === "hsl"
                    ? "14,100,60"
                    : fromFormat === "hsv"
                    ? "14,80,100"
                    : "0,66,80,0"
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
                <div className="mt-2 h-10 w-full rounded" style={{ backgroundColor: fromFormat === "cmyk" ? "" : result }}></div>
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
          <p>
            Convert <code>#ff5733</code> (HEX) to RGB:
          </p>
          <div className="bg-background p-2 rounded my-2">
            <p>#ff5733 = rgb(255, 87, 51)</p>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};
