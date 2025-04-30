import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const TransistorSymbols = () => {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Transistor Symbols</h1>
      <p className="mb-6">
        Transistor schematic symbols represent electronic components that control the flow of current and can amplify signals. Below are the most commonly used transistor symbols.
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
            {/* NPN Transistor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/npn_transistor_symbol.png" alt="NPN Transistor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">NPN Bipolar Transistor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Allows current flow when high potential is applied at the base (middle terminal).</td>
            </tr>

            {/* PNP Transistor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/pnp_transistor_symbol.png" alt="PNP Transistor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">PNP Bipolar Transistor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Allows current flow when low potential is applied at the base (middle terminal).</td>
            </tr>

            {/* Darlington Transistor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/darlington_transistor_symbol.png" alt="Darlington Transistor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Darlington Transistor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Formed by two bipolar transistors. Provides high current gain.</td>
            </tr>

            {/* JFET-N Transistor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/jfet_n_symbol.png" alt="JFET-N Transistor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">JFET-N Transistor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">N-channel junction field effect transistor.</td>
            </tr>

            {/* JFET-P Transistor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/jfet_p_symbol.png" alt="JFET-P Transistor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">JFET-P Transistor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">P-channel junction field effect transistor.</td>
            </tr>

            {/* NMOS Transistor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/nmos_symbol.png" alt="NMOS Transistor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">NMOS Transistor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">N-channel metal-oxide-semiconductor field effect transistor.</td>
            </tr>

            {/* PMOS Transistor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/pmos_symbol.png" alt="PMOS Transistor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">PMOS Transistor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">P-channel metal-oxide-semiconductor field effect transistor.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransistorSymbols;
