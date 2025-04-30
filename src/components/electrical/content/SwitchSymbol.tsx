import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const SwitchSymbols = () => {
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
                          <BreadcrumbPage>Switch Symbols</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Electronic Switch Symbols</h1>
      <p className="mb-6">
        Below is a table of common electronic switch symbols used in schematic diagrams, along with their names and descriptions.
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
            {/* SPST Toggle Switch */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/SPST_switch_symbol.png" alt="SPST Toggle Switch" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">SPST Toggle Switch</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Disconnects current when open.</td>
            </tr>

            {/* SPDT Toggle Switch */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/SPDT_switch_symbol.png" alt="SPDT Toggle Switch" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">SPDT Toggle Switch</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Selects between two connections.</td>
            </tr>

            {/* Pushbutton Switch (N.O) */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/push_button_symbol_NO.png" alt="Pushbutton N.O." className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Pushbutton Switch (N.O)</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Momentary switch - normally open.</td>
            </tr>

            {/* Pushbutton Switch (N.C) */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/push_button_symbol_NC.png" alt="Pushbutton N.C." className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Pushbutton Switch (N.C)</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Momentary switch - normally closed.</td>
            </tr>

            {/* DIP Switch */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/dip_switch_symbol.png" alt="DIP Switch" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">DIP Switch</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Used for onboard configuration.</td>
            </tr>

            {/* SPST Relay */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/SPST_relay_symbol.png" alt="SPST Relay" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">SPST Relay</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Relay opens/closes connection by electromagnet.</td>
            </tr>

            {/* SPDT Relay */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/SPDT_relay_symbol.png" alt="SPDT Relay" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">SPDT Relay</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Selects between two circuits using a relay.</td>
            </tr>

            {/* Jumper */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/jumper_symbol.png" alt="Jumper" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Jumper</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Closes connection by jumper insertion on pins.</td>
            </tr>

            {/* Solder Bridge */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/solder_bridge_symbol.png" alt="Solder Bridge" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Solder Bridge</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Solder to close a permanent connection on PCB.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default SwitchSymbols;
