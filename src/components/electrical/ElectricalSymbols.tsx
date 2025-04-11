import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Adjust path as needed
import { Card, CardContent } from "@/components/ui/card";

const symbols = [
    { name: "Switch Symbols", path: "/electrical/symbols/switch" },
    { name: "Ground Symbols", path: "/electrical/symbols/ground" },
    { name: "Resistor Symbols", path: "/electrical/symbols/resistor" },
    { name: "Capacitor Symbols", path: "/electrical/symbols/capacitor" },
    { name: "Diode Symbols", path: "/electrical/symbols/diode" },
    { name: "Transistor Symbols", path: "/electrical/symbols/transistor" },
  ];
  

const ElectricalSymbols = () => {
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
            <BreadcrumbPage>Electrical Symbols</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-6 mb-4">Electrical & Electronic Symbols</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {symbols.map((symbol) => (
          <Card key={symbol.path}>
            <CardContent className="p-4">
              <Link
                to={symbol.path}
                className="text-blue-600 hover:underline text-lg font-medium"
              >
                {symbol.name}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ElectricalSymbols;
