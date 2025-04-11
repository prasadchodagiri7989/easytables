import React from "react";
import { Link } from "react-router-dom";

const symbols = [
  { name: "Switch Symbols", path: "/symbols/switch" },
  { name: "Ground Symbols", path: "/symbols/ground" },
  { name: "Resistor Symbols", path: "/symbols/resistor" },
  { name: "Capacitor Symbols", path: "/symbols/capacitor" },
  { name: "Diode Symbols", path: "/symbols/diode" },
  { name: "Transistor Symbols", path: "/symbols/transistor" },
];

const ElectricalSymbols = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Electrical & Electronic Symbols</h1>
      <ul className="space-y-3">
        {symbols.map((symbol) => (
          <li key={symbol.path}>
            <Link
              to={symbol.path}
              className="block text-blue-600 hover:underline text-lg"
            >
              {symbol.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElectricalSymbols;
