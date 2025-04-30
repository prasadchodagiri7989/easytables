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
        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlColorCode;
