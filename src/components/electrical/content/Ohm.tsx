import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


export default function OhmLaw() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Ohm (Ω)</h1>

      <p>
        Ohm (symbol: Ω) is the electrical unit of resistance. The Ohm unit was named after George Simon Ohm.
      </p>

      <p>
        The Ohm unit is defined by the relationship: 1Ω = 1V / 1A = 1J ⋅ 1s / 1C².
      </p>

      <h2 className="text-2xl font-semibold mt-6">Table of Resistance Values of Ohm</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Symbol</th>
            <th className="border px-4 py-2">Conversion</th>
            <th className="border px-4 py-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">milli-ohm</td>
            <td className="border px-4 py-2">mΩ</td>
            <td className="border px-4 py-2">1mΩ = 10⁻³Ω</td>
            <td className="border px-4 py-2">R₀ = 10mΩ</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">ohm</td>
            <td className="border px-4 py-2">Ω</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">R₁ = 10Ω</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">kilo-ohm</td>
            <td className="border px-4 py-2">kΩ</td>
            <td className="border px-4 py-2">1kΩ = 10³Ω</td>
            <td className="border px-4 py-2">R₂ = 2kΩ</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">mega-ohm</td>
            <td className="border px-4 py-2">MΩ</td>
            <td className="border px-4 py-2">1MΩ = 10⁶Ω</td>
            <td className="border px-4 py-2">R₃ = 5MΩ</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6">Ohmmeter</h2>
      <p>An Ohmmeter is a measurement device that measures resistance.</p>

      <h2 className="text-2xl font-semibold mt-6">See Also</h2>
      <ul className="list-disc list-inside">
        <li>Electrical resistance</li>
        <li>Resistor</li>
        <li>Ohm's law</li>
        <li>Electrical units</li>
        <li>Volt</li>
        <li>Ampere (amps)</li>
        <li>Watt</li>
      </ul>
    </div>
  );
}
