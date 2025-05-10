import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import chroma from "chroma-js";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js
import { GuidanceSection } from "@/components/GuidanceSection";

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
              <Link to="/web/colors">Color Tools</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Color Scheme Generator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
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
          <GuidanceSection title="How to Use the Color Scheme Generator">
  <p>
    This tool helps you generate harmonious color palettes based on a single base color using popular color theory models.
  </p>

  <h4 className="font-medium mt-3 mb-1">Steps to Generate a Color Scheme</h4>
  <ol className="list-decimal pl-5 space-y-1">
    <li>Select a base color using the color picker</li>
    <li>Choose a color scheme type (e.g., Analogous, Complementary)</li>
    <li>Click "Generate" to view a palette of colors</li>
    <li>Use the colors in your UI designs, illustrations, or branding</li>
  </ol>

  <h4 className="font-medium mt-3 mb-1">Supported Color Schemes</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li><strong>Monochromatic:</strong> Variations in lightness and saturation of one hue</li>
    <li><strong>Analogous:</strong> Colors adjacent to the base hue on the color wheel</li>
    <li><strong>Triadic:</strong> Three colors evenly spaced around the color wheel</li>
    <li><strong>Complementary:</strong> Colors opposite each other on the color wheel</li>
    <li><strong>Split-Complementary:</strong> Base color plus two adjacent to its complement</li>
    <li><strong>Tetradic:</strong> A double-complementary rectangle (four hues)</li>
  </ul>

  <h4 className="font-medium mt-3 mb-1">Color Theory in Practice</h4>
  <p>
    Effective color use improves readability, accessibility, and emotional resonance. Each scheme offers a unique visual balance:
  </p>
  <ul className="list-disc pl-5 space-y-1">
    <li>Use complementary schemes for high contrast (e.g., buttons, CTAs)</li>
    <li>Analogous schemes are calming and cohesive—great for backgrounds and branding</li>
    <li>Monochromatic schemes are clean and professional, often used in minimal designs</li>
  </ul>

  <h4 className="font-medium mt-3 mb-1">Example</h4>
  <div className="space-y-1">
    <p><strong>Base Color:</strong> #3498db (a soft blue)</p>
    <p><strong>Scheme:</strong> Triadic</p>
    <p><strong>Generated Colors:</strong></p>
    <ul className="list-disc pl-5">
      <li>#3498db (Blue)</li>
      <li>#db3498 (Pink/Purple)</li>
      <li>#98db34 (Green)</li>
    </ul>
    <p>These colors form a vibrant, balanced palette suitable for a playful UI or dashboard.</p>
  </div>

  <h4 className="font-medium mt-3 mb-1">Tips for Designers</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li>Test palettes for accessibility using contrast checkers</li>
    <li>Use lighter shades for backgrounds, darker tones for text</li>
    <li>Maintain brand consistency by defining a base palette</li>
    <li>Apply the 60-30-10 rule for color proportions in layouts</li>
  </ul>

  <p className="mt-2 text-sm text-muted-foreground">
    Note: This generator uses the HSL color space via <code>chroma-js</code> for accurate hue manipulation.
  </p>
</GuidanceSection>

          
        </CardContent>
      </Card>
    </div>
  );
};

export default ColorSchemeGenerator;