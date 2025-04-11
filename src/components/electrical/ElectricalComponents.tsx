import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Update the import path as needed
import { Card, CardContent } from "@/components/ui/card";

const components = [
    { name: "Resistor", path: "/electrical/components/resistor" },
    { name: "Capacitor", path: "/electrical/components/capacitor" },
    { name: "Inductor", path: "/electrical/components/inductor" },
    { name: "DIP Switch", path: "/electrical/components/dip-switch" },
    { name: "Solder Bridge", path: "/electrical/components/solder-bridge" },
  ];
  

const ElectronicComponents = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Electronic Components</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-6 mb-4">Electronic Components</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {components.map((component) => (
          <Card key={component.path}>
            <CardContent className="p-4">
              <Link
                to={component.path}
                className="text-blue-600 hover:underline text-lg font-medium"
              >
                {component.name}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ElectronicComponents;
