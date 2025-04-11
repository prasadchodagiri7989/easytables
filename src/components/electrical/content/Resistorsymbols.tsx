// ResistorSymbols.jsx
import React from "react";

const resistorSymbols = [
  {
    name: "Resistor (IEEE)",
    description: "Resistor reduces the current flow.",
    image: "/symbols/resistor-ieee.png",
  },
  {
    name: "Resistor (IEC)",
    description: "Resistor reduces the current flow.",
    image: "/symbols/resistor-iec.png",
  },
  {
    name: "Potentiometer (IEEE)",
    description: "Adjustable resistor - has 3 terminals.",
    image: "/symbols/potentiometer-ieee.png",
  },
  {
    name: "Potentiometer (IEC)",
    description: "Adjustable resistor - has 3 terminals.",
    image: "/symbols/potentiometer-iec.png",
  },
  {
    name: "Variable Resistor / Rheostat (IEEE)",
    description: "Adjustable resistor - has 2 terminals.",
    image: "/symbols/variable-resistor-ieee.png",
  },
  {
    name: "Variable Resistor / Rheostat (IEC)",
    description: "Adjustable resistor - has 2 terminals.",
    image: "/symbols/variable-resistor-iec.png",
  },
  {
    name: "Trimmer Resistor",
    description: "Preset resistor",
    image: "/symbols/trimmer-resistor.png",
  },
  {
    name: "Thermistor",
    description: "Thermal resistor - change resistance when temperature changes",
    image: "/symbols/thermistor.png",
  },
  {
    name: "Photoresistor / LDR",
    description: "Photo-resistor - change resistance with light intensity change",
    image: "/symbols/photoresistor.png",
  },
];

const ResistorSymbols = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Resistor Symbols</h1>
      <p className="mb-6">
        Resistor symbols of electrical & electronic circuit diagram - resistor,
        potentiometer, variable resistor.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resistorSymbols.map((symbol, index) => (
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

export default ResistorSymbols;
