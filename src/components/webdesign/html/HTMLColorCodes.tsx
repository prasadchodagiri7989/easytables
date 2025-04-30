import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const HTMLColorCodes: React.FC = () => {
  const hexColors = [
    { code: "#000000", name: "Black" },
    { code: "#FFFFFF", name: "White" },
    { code: "#FF0000", name: "Red" },
    { code: "#00FF00", name: "Lime" },
    { code: "#0000FF", name: "Blue" },
    { code: "#FFFF00", name: "Yellow" },
    { code: "#00FFFF", name: "Aqua" },
    { code: "#FF00FF", name: "Fuchsia" },
    { code: "#C0C0C0", name: "Silver" },
    { code: "#808080", name: "Gray" },
  ];

  const rgbColors = [
    { code: "rgb(255, 0, 0)", name: "Red" },
    { code: "rgb(0, 255, 0)", name: "Lime" },
    { code: "rgb(0, 0, 255)", name: "Blue" },
    { code: "rgb(255, 255, 0)", name: "Yellow" },
    { code: "rgb(0, 255, 255)", name: "Aqua" },
    { code: "rgb(255, 0, 255)", name: "Fuchsia" },
  ];

  const colorNames = [
    "Red", "Green", "Blue", "Yellow", "Aqua", "Fuchsia", "Gray", "Silver", "Black", "White",
  ];

  const extendedColors = [
    "AliceBlue", "AntiqueWhite", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "BlueViolet", "Brown",
  ];

  const otherColors = [
    { code: "rgb(139, 69, 19)", name: "Brown" },
    { code: "rgb(255, 99, 71)", name: "Tomato" },
    { code: "rgb(0, 128, 0)", name: "Green" },
    { code: "rgb(255, 105, 180)", name: "HotPink" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/web/html">HTML Tools</Link>
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
            HTML color codes define colors for web pages using hex, RGB, or color names.
          </p>

          {/* Hexadecimal Color Codes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Hexadecimal Color Codes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {hexColors.map((color, idx) => (
                <div key={idx} className="text-center text-xs">
                  <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: color.code }} />
                  <span className="block mt-1">{color.code} - {color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RGB Color Codes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">RGB Color Codes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {rgbColors.map((color, idx) => (
                <div key={idx} className="text-center text-xs">
                  <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: color.code }} />
                  <span className="block mt-1">{color.code} - {color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HTML Color Names */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">HTML Color Names</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {colorNames.map((name, idx) => (
                <div key={idx} className="text-center text-xs">
                  <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: name.toLowerCase() }} />
                  <span className="block mt-1">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extended Color Names */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Extended Color Names</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {extendedColors.map((name, idx) => (
                <div key={idx} className="text-center text-xs">
                  <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: name.toLowerCase() }} />
                  <span className="block mt-1">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other Color Codes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Other Color Codes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {otherColors.map((color, idx) => (
                <div key={idx} className="text-center text-xs">
                  <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: color.code }} />
                  <span className="block mt-1">{color.code} - {color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* External Resource Link */}
          <div className="mt-6">
            <a
              href="https://www.rapidtables.com/web/color/html-color-codes.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Visit HTML Color Codes Resource
            </a>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default HTMLColorCodes;
