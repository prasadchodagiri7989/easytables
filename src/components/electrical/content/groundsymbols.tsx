// ElectricalGroundSymbols.jsx
import React from "react";

const groundSymbols = [
  {
    name: "Earth Ground",
    description:
      "Used for zero potential reference and electrical shock protection.",
    image: "/symbols/earth-ground.png",
  },
  {
    name: "Chassis Ground",
    description: "Connected to the chassis of the circuit",
    image: "/symbols/chassis-ground.png",
  },
  {
    name: "Digital / Common Ground",
    description: "",
    image: "/symbols/digital-ground.png",
  },
];

const ElectricalGroundSymbols = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Electrical Ground Symbols</h1>
      <p className="mb-6">
        Electrical ground symbols of circuit diagram - earth ground, chassis
        ground, digital ground.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groundSymbols.map((symbol, index) => (
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

export default ElectricalGroundSymbols;
