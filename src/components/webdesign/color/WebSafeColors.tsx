import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { GuidanceSection } from "@/components/GuidanceSection";

const generateWebSafeColors = () => {
  const steps = [0x00, 0x33, 0x66, 0x99, 0xCC, 0xFF];
  const colors: string[] = [];

  for (let r of steps) {
    for (let g of steps) {
      for (let b of steps) {
        colors.push(`#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`);
      }
    }
  }

  return colors;
};

const webSafeColors = generateWebSafeColors();

const WebSafeColors: React.FC = () => {
  return (
    
    <div className="w-full max-w-6xl mx-auto px-4">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/web/colors">Color Tools</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Web Safe Colors</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Web Safe Colors</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            These are the 216 web-safe colors that were traditionally considered safe to use on all monitors.
          </p>

          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2">
            {webSafeColors.map((color, idx) => (
              <div key={idx} className="text-center text-xs">
                <div
                  className="w-12 h-12 rounded border"
                  style={{ backgroundColor: color }}
                />
                <span className="block mt-1">{color.toUpperCase()}</span>
              </div>
            ))}
          </div>
          <GuidanceSection title="Understanding and Using Web Safe Colors">
  <p>
    Web Safe Colors refer to a palette of 216 colors that were originally considered safe to display consistently across all web browsers and operating systems, especially in the early days of the internet.
  </p>

  <h4 className="font-medium mt-3 mb-1">What Are Web Safe Colors?</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li>Web safe colors use combinations of red, green, and blue values in increments of <strong>00</strong>, <strong>33</strong>, <strong>66</strong>, <strong>99</strong>, <strong>CC</strong>, and <strong>FF</strong>.</li>
    <li>This results in exactly <strong>216 distinct colors</strong> that display consistently across 8-bit (256 color) monitors.</li>
    <li>Each color code is represented in hexadecimal format (e.g., <code>#336699</code>).</li>
  </ul>

  <h4 className="font-medium mt-3 mb-1">When Should You Use Them?</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li>Use them when you want to ensure maximum compatibility with older systems or legacy web applications.</li>
    <li>They can serve as a compact color palette for design systems or constrained UIs.</li>
    <li>Web safe colors can also be useful for creating retro or nostalgic aesthetics.</li>
  </ul>

  <h4 className="font-medium mt-3 mb-1">Tips for Working with Web Safe Colors</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li>Most modern devices support millions of colors—so web safe colors are no longer mandatory, but still reliable.</li>
    <li>You can copy any HEX code from the grid and use it in your CSS or design tools.</li>
    <li>Try grouping similar hues or brightness levels to build coherent color palettes.</li>
  </ul>

  <p className="mt-2 text-sm text-muted-foreground">
    Note: This palette is mainly of historical relevance today. However, it remains a useful reference for limited palettes, digital art, or educational purposes.
  </p>
</GuidanceSection>

        </CardContent>
      </Card>
    </div>
  );
};

export default WebSafeColors;
