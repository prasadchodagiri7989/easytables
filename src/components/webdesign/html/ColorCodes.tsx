import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import colorVariations from "@/data/colorCodes";  // Assuming the color data is in this file

const ColorCodes: React.FC = () => {
  const location = useLocation();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [colorData, setColorData] = useState<any>(null);

  // Get the color query parameter from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const color = queryParams.get("color");
    if (color) {
      // Capitalize the first letter and leave the rest as is
      const formattedColor = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
      setSelectedColor(formattedColor);

      // Find the color data that matches the query color
      const selected = colorVariations.find((colorItem) => colorItem.name === formattedColor);
      setColorData(selected || null);
    }
  }, [location]);

  // Function to filter and return the color variations based on the selected color
  const getColorVariations = (colorName: string) => {
    const colorItem = colorVariations.find((item) => item.name === colorName);
    return colorItem ? colorItem.variations : [];
  };

  const variationsToDisplay = selectedColor ? getColorVariations(selectedColor) : [];

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

          {/* Display selected color and its variations */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              {selectedColor ? `${selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)} Color Variations` : "Select a Color"}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {variationsToDisplay.length > 0 ? (
                variationsToDisplay.map((color, idx) => (
                  <div key={idx} className="text-center text-xs">
                    <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: color.hex }} />
                    <span className="block mt-1">{color.hex} - {color.name}</span>
                  </div>
                ))
              ) : (
                <div className="text-center text-xs">No color variations available</div>
              )}
            </div>
          </div>

          {/* Additional content and links */}
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

export default ColorCodes;
