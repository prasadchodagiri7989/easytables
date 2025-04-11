// DiodeSymbols.jsx
import React from "react";

const diodeSymbols = [
  {
    name: "Diode",
    description: "Diode allows current flow in one direction only (left to right).",
    image: "/symbols/diode.png",
  },
  {
    name: "Zener Diode",
    description:
      "Allows current flow in one direction, but also can flow in the reverse direction when above breakdown voltage.",
    image: "/symbols/zener-diode.png",
  },
  {
    name: "Schottky Diode",
    description: "Schottky diode is a diode with low voltage drop.",
    image: "/symbols/schottky-diode.png",
  },
  {
    name: "Varactor / Varicap Diode",
    description: "Variable capacitance diode.",
    image: "/symbols/varactor-diode.png",
  },
  {
    name: "Tunnel Diode",
    description: "A diode with quantum mechanical properties.",
    image: "/symbols/tunnel-diode.png",
  },
  {
    name: "Light Emitting Diode (LED)",
    description: "LED emits light when current flows through.",
    image: "/symbols/led.png",
  },
  {
    name: "Photodiode",
    description: "Photodiode allows current flow when exposed to light.",
    image: "/symbols/photodiode.png",
  },
];

const DiodeSymbols = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Diode Symbols</h1>
      <p className="mb-6">
        Diode schematic symbols of electronic circuit - Diode, LED, Zener diode, Schottky diode, photodiode, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {diodeSymbols.map((symbol, index) => (
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

export default DiodeSymbols;

