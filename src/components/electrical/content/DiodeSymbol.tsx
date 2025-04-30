import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const DiodeSymbols = () => {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Diode Symbols</h1>
      <p className="mb-6">
        Diode schematic symbols used in electronic circuit diagrams represent components that allow current flow primarily in one direction (from left: Anode, to right: Cathode). Below is a list of common diode types and their symbols.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Symbol</th>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Diode */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/diode_symbol.png" alt="Diode" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Diode</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Allows current flow in one direction only (left to right).</td>
            </tr>

            {/* Zener Diode */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/zener_diode_symbol.png" alt="Zener Diode" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Zener Diode</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Can conduct in reverse when above breakdown voltage.</td>
            </tr>

            {/* Schottky Diode */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/schottky_diode_symbol.png" alt="Schottky Diode" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Schottky Diode</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Diode with low forward voltage drop.</td>
            </tr>

            {/* Varicap Diode */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/varicap_diode_symbol.png" alt="Varicap Diode" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Varactor / Varicap Diode</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Diode with variable capacitance.</td>
            </tr>

            {/* Tunnel Diode */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/tunnel_diode_symbol.png" alt="Tunnel Diode" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Tunnel Diode</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Diode with negative resistance characteristics.</td>
            </tr>

            {/* LED */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/led_symbol.png" alt="LED" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Light Emitting Diode (LED)</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Emits light when current flows through it.</td>
            </tr>

            {/* Photodiode */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/photodiode_symbol.png" alt="Photodiode" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Photodiode</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Conducts when exposed to light.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiodeSymbols;
