import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


export default function FaradInfo() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Farad (F)</h1>
      <p>
        Farad is the unit of capacitance. It is named after Michael Faraday.
        The farad measures how much electric charge is accumulated on the capacitor.
      </p>
      <p>
        1 farad is the capacitance of a capacitor that has a charge of 1 coulomb when a voltage drop of 1 volt is applied.
      </p>
      <p className="font-semibold">1F = 1C / 1V</p>

      <h2 className="text-2xl font-semibold mt-8">Table of capacitance values in Farad</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 dark:text-black">Name</th>
            <th className="border px-4 py-2 dark:text-black">Symbol</th>
            <th className="border px-4 py-2 dark:text-black">Conversion</th>
            <th className="border px-4 py-2 dark:text-black">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">picofarad</td>
            <td className="border px-4 py-2">pF</td>
            <td className="border px-4 py-2">1pF = 10⁻¹²F</td>
            <td className="border px-4 py-2">C = 10pF</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">nanofarad</td>
            <td className="border px-4 py-2">nF</td>
            <td className="border px-4 py-2">1nF = 10⁻⁹F</td>
            <td className="border px-4 py-2">C = 10nF</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">microfarad</td>
            <td className="border px-4 py-2">μF</td>
            <td className="border px-4 py-2">1μF = 10⁻⁶F</td>
            <td className="border px-4 py-2">C = 10μF</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">millifarad</td>
            <td className="border px-4 py-2">mF</td>
            <td className="border px-4 py-2">1mF = 10⁻³F</td>
            <td className="border px-4 py-2">C = 10mF</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">farad</td>
            <td className="border px-4 py-2">F</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">C = 10F</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">kilofarad</td>
            <td className="border px-4 py-2">kF</td>
            <td className="border px-4 py-2">1kF = 10³F</td>
            <td className="border px-4 py-2">C = 10kF</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">megafarad</td>
            <td className="border px-4 py-2">MF</td>
            <td className="border px-4 py-2">1MF = 10⁶F</td>
            <td className="border px-4 py-2">C = 10MF</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8">Capacitance Conversions</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Picofarad (pF) to Farad (F)</h3>
          <p>C(F) = C(pF) × 10⁻¹²</p>
          <p>Example: 30pF = 30 × 10⁻¹² F</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Nanofarad (nF) to Farad (F)</h3>
          <p>C(F) = C(nF) × 10⁻⁹</p>
          <p>Example: 5nF = 5 × 10⁻⁹ F</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Microfarad (μF) to Farad (F)</h3>
          <p>C(F) = C(μF) × 10⁻⁶</p>
          <p>Example: 30μF = 30 × 10⁻⁶ F = 0.00003 F</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8">See also</h2>
      <ul className="list-disc list-inside">
        <li>Capacitor</li>
        <li>Volt</li>
        <li>Watt</li>
        <li>Ampere</li>
        <li>Ohm</li>
        <li>Voltage</li>
        <li>Electric power</li>
        <li>Electrical current</li>
        <li>Electronics units</li>
      </ul>
    </div>
  );
}
