import React from "react";

const CapacitorSymbols = () => {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Capacitor Symbols</h1>
      <p className="mb-6">
        The following table lists commonly used capacitor symbols in electrical and electronic circuit diagrams. Capacitors store electrical charge and behave differently in AC and DC circuits.
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
            {/* Capacitor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/capacitor_symbol.png" alt="Capacitor Symbol" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Capacitor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Stores electric charge. Acts as a short circuit for AC and open circuit for DC.</td>
            </tr>

            {/* Polarized Capacitor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/polarized_capacitor_symbol.png" alt="Polarized Capacitor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Polarized Capacitor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Electrolytic capacitor with polarity sensitivity.</td>
            </tr>

            {/* Duplicate Polarized Capacitor (optional to keep for completeness) */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/polarized_capacitor_symbol.png" alt="Polarized Capacitor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Polarized Capacitor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Electrolytic capacitor with polarity sensitivity.</td>
            </tr>

            {/* Variable Capacitor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/variable_capacitor_symbol.png" alt="Variable Capacitor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Variable Capacitor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Adjustable capacitance used in tuning circuits.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CapacitorSymbols;
