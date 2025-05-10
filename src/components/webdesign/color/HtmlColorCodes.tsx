import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { GuidanceSection } from "@/components/GuidanceSection";

const htmlColors = [
  { name: "Black", hex: "#000000", rgb: "rgb(0, 0, 0)" },
  { name: "White", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)" },
  { name: "Red", hex: "#FF0000", rgb: "rgb(255, 0, 0)" },
  { name: "Lime", hex: "#00FF00", rgb: "rgb(0, 255, 0)" },
  { name: "Blue", hex: "#0000FF", rgb: "rgb(0, 0, 255)" },
  { name: "Yellow", hex: "#FFFF00", rgb: "rgb(255, 255, 0)" },
  { name: "Cyan", hex: "#00FFFF", rgb: "rgb(0, 255, 255)" },
  { name: "Magenta", hex: "#FF00FF", rgb: "rgb(255, 0, 255)" },
  { name: "Silver", hex: "#C0C0C0", rgb: "rgb(192, 192, 192)" },
  { name: "Gray", hex: "#808080", rgb: "rgb(128, 128, 128)" },
  { name: "Maroon", hex: "#800000", rgb: "rgb(128, 0, 0)" },
  { name: "Olive", hex: "#808000", rgb: "rgb(128, 128, 0)" },
  { name: "Green", hex: "#008000", rgb: "rgb(0, 128, 0)" },
  { name: "Purple", hex: "#800080", rgb: "rgb(128, 0, 128)" },
  { name: "Teal", hex: "#008080", rgb: "rgb(0, 128, 128)" },
  { name: "Navy", hex: "#000080", rgb: "rgb(0, 0, 128)" },
  // Add more as needed
];

const HtmlColorCode = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
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
            <BreadcrumbPage>HTML Color Codes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">HTML Color Codes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Standard HTML color names with their HEX and RGB values.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {htmlColors.map((color) => (
              <div key={color.name} className="text-xs text-center">
                <div
                  className="w-full h-12 rounded border"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="mt-1 font-medium">{color.name}</div>
                <div className="text-muted-foreground">{color.hex}</div>
                <div className="text-muted-foreground">{color.rgb}</div>
              </div>
            ))}
          </div>
          <GuidanceSection title="How to Use the HTML Color Codes Reference">
  <p>This section provides a reference for standard HTML color names along with their HEX and RGB representations.</p>

  <h4 className="font-medium mt-3 mb-1">What Are HTML Color Codes?</h4>
  <p>
    HTML color codes are used to specify colors in web design using predefined names or numerical representations in HEX or RGB formats.
  </p>

  <h4 className="font-medium mt-3 mb-1">Common Color Code Formats</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li><strong>HEX:</strong> A 6-digit code starting with <code>#</code> representing red, green, and blue (e.g., <code>#FF0000</code>)</li>
    <li><strong>RGB:</strong> Uses red, green, and blue values between 0 and 255 (e.g., <code>rgb(255, 0, 0)</code>)</li>
    <li><strong>Named Colors:</strong> Human-readable color names predefined in HTML (e.g., <code>red</code>, <code>blue</code>, <code>teal</code>)</li>
  </ul>

  <h4 className="font-medium mt-3 mb-1">How to Use This Tool</h4>
  <ol className="list-decimal pl-5 space-y-1">
    <li>Browse through the grid of color swatches</li>
    <li>View the name, HEX code, and RGB value for each color</li>
    <li>Click to copy (if functionality added) or manually use the code in your CSS or design</li>
  </ol>

  <h4 className="font-medium mt-3 mb-1">Example Usage in CSS</h4>
  <div className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
    <code>
      {`body {
  background-color: #f0f0f0;
  color: navy;
}

.button {
  background-color: #FF0000; /* Red */
  color: white;
}`}
    </code>
  </div>

  <h4 className="font-medium mt-3 mb-1">Tips for Designers and Developers</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li>Use named colors for quick prototyping or when readability matters</li>
    <li>Prefer HEX or RGB for more precise control over color shades</li>
    <li>Consistently use the same format across your project for maintainability</li>
    <li>Ensure adequate color contrast for accessibility compliance (WCAG)</li>
  </ul>

  <p className="mt-2 text-sm text-muted-foreground">
    Note: These are standard web-safe colors recognized by all major browsers.
  </p>
</GuidanceSection>

        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlColorCode;
