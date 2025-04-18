import React from "react";

const GroundSymbolsTable = () => {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Electrical Ground Symbols</h1>
      <p className="mb-6">
        Below is a table of common electrical ground symbols used in circuit diagrams, including earth ground, chassis ground, and digital ground.
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
            {/* Earth Ground */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/earth_ground_symbol.png" alt="Earth Ground" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Earth Ground</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Used for zero potential reference and electrical shock protection.</td>
            </tr>

            {/* Chassis Ground */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/chassis_ground_symbol.png" alt="Chassis Ground" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Chassis Ground</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Connected to the chassis of the circuit.</td>
            </tr>

            {/* Digital / Common Ground */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/digital_ground_symbol.png" alt="Digital Ground" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Digital / Common Ground</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Serves as the reference point for digital circuits.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroundSymbolsTable;
