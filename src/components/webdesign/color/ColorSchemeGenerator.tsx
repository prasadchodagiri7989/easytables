import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import chroma from "chroma-js";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const colorSchemes = [
  "monochromatic",
  "analogous",
  "triadic",
  "complementary",
  "split-complementary",
  "tetradic"
];

const generateColorScheme = (baseColor: string, scheme: string): string[] => {
  try {
    const base = chroma(baseColor);
    switch (scheme) {
      case "monochromatic":
        return base.set("hsl.l", 0.2).brighten(2).colors(5);
      case "analogous":
        return chroma.scale([base.set("hsl.h", "+30"), base.set("hsl.h", "-30")]).mode("lab").colors(5);
      case "triadic":
        return [0, 120, 240].map(angle => base.set("hsl.h", `+${angle}`).hex());
      case "complementary":
        return [base.hex(), base.set("hsl.h", "+180").hex()];
      case "split-complementary":
        return [base.hex(), base.set("hsl.h", "+150").hex(), base.set("hsl.h", "+210").hex()];
      case "tetradic":
        return [0, 90, 180, 270].map(angle => base.set("hsl.h", `+${angle}`).hex());
      default:
        return [];
    }
  } catch {
    return [];
  }
};

export const ColorSchemeGenerator = () => {
  const [baseColor, setBaseColor] = useState("#3498db");
  const [schemeType, setSchemeType] = useState("monochromatic");
  const [colors, setColors] = useState<string[]>(generateColorScheme("#3498db", "monochromatic"));

  const handleGenerate = () => {
    const scheme = generateColorScheme(baseColor, schemeType);
    setColors(scheme);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Color Scheme Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block mb-1 font-medium">Base Color</label>
              <Input type="color" value={baseColor} onChange={(e) => setBaseColor(e.target.value)} />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">Scheme</label>
              <Select value={schemeType} onValueChange={setSchemeType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select scheme" />
                </SelectTrigger>
                <SelectContent>
                  {colorSchemes.map(scheme => (
                    <SelectItem key={scheme} value={scheme}>{scheme}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-md" onClick={handleGenerate}>Generate</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-4">
            {colors.map((color, index) => (
              <div key={index} className="rounded h-20 w-full" style={{ backgroundColor: color }}>
                <div className="text-xs text-center text-white bg-black bg-opacity-40 py-1">
                  {color}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColorSchemeGenerator;