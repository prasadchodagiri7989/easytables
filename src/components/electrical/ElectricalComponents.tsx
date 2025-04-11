import React from "react";
import { Link } from "react-router-dom";

const components = [
  { name: "Resistor", path: "/components/resistor" },
  { name: "Capacitor", path: "/components/capacitor" },
  { name: "Inductor", path: "/components/inductor" },
  { name: "DIP Switch", path: "/components/dip-switch" },
  { name: "Solder Bridge", path: "/components/solder-bridge" },
];

const ElectronicComponents = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Electronic Components</h1>
      <ul className="space-y-3">
        {components.map((component) => (
          <li key={component.path}>
            <Link
              to={component.path}
              className="block text-blue-600 hover:underline text-lg"
            >
              {component.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElectronicComponents;
