// TransistorSymbols.jsx
import React from "react";

const transistorSymbols = [
  {
    name: "NPN Bipolar Transistor",
    description:
      "Allows current flow when high potential at base (middle).",
    image: "/symbols/npn-transistor.png",
  },
  {
    name: "PNP Bipolar Transistor",
    description:
      "Allows current flow when low potential at base (middle).",
    image: "/symbols/pnp-transistor.png",
  },
  {
    name: "Darlington Transistor",
    description:
      "Made from 2 bipolar transistors. Has total gain of the product of each gain.",
    image: "/symbols/darlington-transistor.png",
  },
  {
    name: "JFET-N Transistor",
    description: "N-channel field effect transistor.",
    image: "/symbols/jfet-n-transistor.png",
  },
  {
    name: "JFET-P Transistor",
    description: "P-channel field effect transistor.",
    image: "/symbols/jfet-p-transistor.png",
  },
  {
    name: "NMOS Transistor",
    description: "N-channel MOSFET transistor.",
    image: "/symbols/nmos-transistor.png",
  },
  {
    name: "PMOS Transistor",
    description: "P-channel MOSFET transistor.",
    image: "/symbols/pmos-transistor.png",
  },
];

const TransistorSymbols = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transistor Symbols</h1>
      <p className="mb-6">
        Transistor schematic symbols of electronic circuit - NPN, PNP, Darlington, JFET-N, JFET-P, NMOS, PMOS.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {transistorSymbols.map((symbol, index) => (
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

export default TransistorSymbols;
