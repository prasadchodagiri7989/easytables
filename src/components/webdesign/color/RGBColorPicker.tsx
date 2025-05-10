import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { GuidanceSection } from "@/components/GuidanceSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const clamp = (value: number, min = 0, max = 255) => Math.max(min, Math.min(max, value));

export const RGBColorPicker: React.FC = () => {
  const [r, setR] = useState(255);
  const [g, setG] = useState(255);
  const [b, setB] = useState(255);

  const hex = `#${[r, g, b]
    .map((val) => clamp(val).toString(16).padStart(2, "0"))
    .join("")}`;

  const rgb = `rgb(${clamp(r)}, ${clamp(g)}, ${clamp(b)})`;

  const handleInputChange = (setter: (val: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setter(isNaN(val) ? 0 : clamp(val));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
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
                  <BreadcrumbPage>RGB Color Picker</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">RGB Color Picker</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {["Red", "Green", "Blue"].map((label, index) => {
              const val = [r, g, b][index];
              const setVal = [setR, setG, setB][index];
              const id = label.toLowerCase();

              return (
                <div key={label}>
                  <Label htmlFor={id}>{label}</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id={id}
                      type="range"
                      min={0}
                      max={255}
                      value={val}
                      onChange={(e) => setVal(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <Input
                      type="number"
                      min={0}
                      max={255}
                      value={val}
                      onChange={handleInputChange(setVal)}
                      className="w-[70px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full h-24 rounded-md border" style={{ backgroundColor: rgb }} />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>RGB</Label>
              <Input readOnly value={rgb} />
            </div>
            <div>
              <Label>HEX</Label>
              <Input readOnly value={hex} />
            </div>
          </div>
        </CardContent>
      </Card>

      <GuidanceSection title="How to Use the RGB Color Picker">
  <p>This tool helps you build and preview custom colors using RGB (Red, Green, Blue) values:</p>

  <ul className="list-disc pl-5 my-2 space-y-1">
    <li>Each color component—Red, Green, and Blue—ranges from 0 to 255.</li>
    <li>Use the sliders or input fields to adjust the intensity of each color channel.</li>
    <li>The combined RGB values determine the final color shown in the preview box.</li>
    <li>The corresponding HEX code is automatically calculated from the RGB values.</li>
    <li>Click on the RGB or HEX field to copy the color code to your clipboard.</li>
    <li>Experiment with combinations to find the perfect color for your project.</li>
    <li>Use this tool to match brand colors, UI themes, or custom palette creation.</li>
    <li>Real-time feedback makes it easy to fine-tune exact shades and tones.</li>
    <li>Works great for CSS, graphic design, web development, and prototyping.</li>
    <li>The preview area can be used to quickly test how colors appear against light or dark backgrounds.</li>
  </ul>

  <h4 className="font-medium mt-3 mb-1">Tip for Designers</h4>
  <p>To create muted or pastel tones, keep RGB values closer to the mid-range (e.g., 150–200). For bold, saturated colors, push values closer to 255.</p>

  <p className="mt-2 text-sm text-muted-foreground">
    Note: RGB is an additive color model used for screens—avoid using it directly for print design, which relies on CMYK.
  </p>
</GuidanceSection>

    </div>
  );
};

export default RGBColorPicker;
