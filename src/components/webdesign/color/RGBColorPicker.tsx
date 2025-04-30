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
        <p>This tool helps you build colors using RGB (Red, Green, Blue) values:</p>
        <ul className="list-disc pl-5 my-2">
          <li>Each color component ranges from 0 to 255.</li>
          <li>Use the sliders or input fields to adjust each value.</li>
          <li>The box below previews the resulting color.</li>
          <li>Copy the RGB or HEX code for use in your design or development work.</li>
        </ul>
      </GuidanceSection>
    </div>
  );
};

export default RGBColorPicker;
