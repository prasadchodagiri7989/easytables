// CapacitorSymbols.jsx
import React from "react";

const capacitorSymbols = [
  {
    name: "Capacitor",
    description:
      "Capacitor is used to store electric charge. It acts as short circuit with AC and open circuit with DC.",
    image: "/symbols/capacitor.png",
  },
  {
    name: "Polarized Capacitor",
    description: "Electrolytic capacitor",
    image: "/symbols/polarized-capacitor.png",
  },
  {
    name: "Variable Capacitor",
    description: "Adjustable capacitance",
    image: "/symbols/variable-capacitor.png",
  },
];

const CapacitorSymbols = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Capacitor Symbols</h1>
      <p className="mb-6">
        Capacitor schematic symbols - capacitor, polarized capacitor, variable
        capacitor.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {capacitorSymbols.map((symbol, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md p-4 flex items-center gap-4"
          >
            <img
              src={symbol.image}
              alt={symbol.name}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h2 className="text-xl font-semibold">{symbol.name}</h2>
              <p className="text-gray-700 text-sm">{symbol.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapacitorSymbols;
