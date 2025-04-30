import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const ResistorSymbols = () => {
  return (
    <>
       <Breadcrumb className="mb-4">
                          <BreadcrumbList>
                            <BreadcrumbItem>
                              <BreadcrumbLink asChild>
                                <Link to="/">Home</Link>
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                              <BreadcrumbLink asChild>
                                <Link to="/electrical/symbols">Electronic Symbols</Link>
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                              <BreadcrumbPage>Resistor Symbols</BreadcrumbPage>
                            </BreadcrumbItem>
                          </BreadcrumbList>
                        </Breadcrumb>
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Resistor Symbols</h1>
      <p className="mb-6">
        Below is a table of resistor symbols commonly used in electrical and electronic circuit diagrams, including fixed, variable, and special-purpose resistors.
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
            {/* Resistor (IEEE) */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/resistor_symbol.png" alt="Resistor IEEE" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Resistor (IEEE)</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Resistor reduces the current flow.</td>
            </tr>

            {/* Resistor (IEC) */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/resistor_symbol_IEC.png" alt="Resistor IEC" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Resistor (IEC)</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Resistor reduces the current flow.</td>
            </tr>

            {/* Potentiometer (IEEE) */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/potentiometer_symbol.png" alt="Potentiometer IEEE" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Potentiometer (IEEE)</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Adjustable resistor - has 3 terminals.</td>
            </tr>

            {/* Potentiometer (IEC) */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/potentiometer_symbol_IEC.png" alt="Potentiometer IEC" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Potentiometer (IEC)</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Adjustable resistor - has 3 terminals.</td>
            </tr>

            {/* Variable Resistor / Rheostat (IEEE) */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/rheostat_symbol.png" alt="Rheostat IEEE" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Variable Resistor / Rheostat (IEEE)</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Adjustable resistor - has 2 terminals.</td>
            </tr>

            {/* Variable Resistor / Rheostat (IEC) */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/rheostat_symbol_IEC.png" alt="Rheostat IEC" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Variable Resistor / Rheostat (IEC)</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Adjustable resistor - has 2 terminals.</td>
            </tr>

            {/* Trimmer Resistor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/trimmer_resistor_symbol.png" alt="Trimmer Resistor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Trimmer Resistor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Preset resistor for fine-tuning circuit parameters.</td>
            </tr>

            {/* Thermistor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/thermistor_symbol.png" alt="Thermistor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Thermistor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Changes resistance with temperature variation.</td>
            </tr>

            {/* Photoresistor / LDR */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/photoresistor_symbol.png" alt="Photoresistor / LDR" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Photoresistor / Light Dependent Resistor (LDR)</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Changes resistance with light intensity.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default ResistorSymbols;
