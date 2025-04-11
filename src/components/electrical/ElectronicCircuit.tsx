import React from "react";
import { Link } from "react-router-dom";

const laws = [
  { name: "Ohm's Law", path: "/circuit-laws/ohm" },
  { name: "Voltage Divider Rule", path: "/circuit-laws/voltage-divider" },
  { name: "Kirchhoff's Laws (KVL / KCL)", path: "/circuit-laws/kirchhoff" },
  { name: "Coulomb's Law", path: "/circuit-laws/coulomb" },
];

const ElectronicCircuit = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Electronic Circuit Laws</h1>
      <ul className="space-y-3">
        {laws.map((law) => (
          <li key={law.path}>
            <Link
              to={law.path}
              className="block text-blue-600 hover:underline text-lg"
            >
              {law.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElectronicCircuit;
