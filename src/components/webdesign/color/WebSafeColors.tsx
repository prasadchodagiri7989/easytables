import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

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
        </CardContent>
      </Card>
    </div>
  );
};

export default WebSafeColors;
