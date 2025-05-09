import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const JoulesToVoltsConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);
  const [charge, setCharge] = useState<number>(0);
  const [voltage, setVoltage] = useState<number | string>('—');

  const convertToVolts = (energy: number, charge: number) => {
    if (charge === 0) return "Charge cannot be zero";
    return (energy / charge).toFixed(5);
  };

  const handleConvert = () => {
    const result = convertToVolts(energy, charge);
    setVoltage(result);
  };

  const examples = [
    { energy: 60, charge: 4, expectedResult: 15, description: '60 joules with 4 coulombs charge' },
    { energy: 100, charge: 10, expectedResult: 10, description: '100 joules with 10 coulombs charge' },
    { energy: 150, charge: 5, expectedResult: 30, description: '150 joules with 5 coulombs charge' },
    { energy: 200, charge: 20, expectedResult: 10, description: '200 joules with 20 coulombs charge' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
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
              <Link to="/electrical-calculations">Electrical Calculations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Joules to Volts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Joules to Volts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Calculate voltage (V) from energy (J) and charge (C). Voltage is the energy per unit charge.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Energy (Joules):</label>
              <input
                type="number"
                value={energy}
                onChange={(e) => setEnergy(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Charge (Coulombs):</label>
              <input
                type="number"
                value={charge}
                onChange={(e) => setCharge(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{voltage} V</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Energy: {example.energy} J, Charge: {example.charge} C</p>
                    <p>Expected Voltage: {example.expectedResult} V</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>V = J / C</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>V</strong>: Voltage in volts</li>
                <li><strong>J</strong>: Energy in joules</li>
                <li><strong>C</strong>: Charge in coulombs</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                Voltage is the measure of electric potential. It is calculated as the energy (in joules) divided by the electric charge (in coulombs).
                <br />
                - 1 volt = 1 joule per coulomb (J/C).
                <br />
                - This relationship is fundamental in understanding how electrical energy is transferred.
              </p>
            </div>
          </div>

          {/* Extra Content Section: About Joules to Volts Conversion */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Conversion from Joules (J) to Volts (V)</h2>
            <p>
              The **Joule (J)** and **Volt (V)** are both fundamental units in physics, but they measure different quantities. Joules measure the amount of energy, while Volts measure the electric potential difference between two points. Converting between these two units is necessary when you're working with electrical systems, especially in energy storage and transfer.
            </p>
            
            <hr className="my-4 border-t-2 border-gray-200"/>

            <h3 className="font-semibold text-base mt-4 mb-2">What is a Joule (J)?</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Joule (J)**: A unit of energy in the SI system, representing the amount of energy transferred when applying a force of one newton over one meter.
              </li>
              <li>
                **Formula**: 1 J = 1 N·m (Newton meter). It is commonly used to quantify energy in mechanical, electrical, and thermal systems.
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200"/>

            <h3 className="font-semibold text-base mt-4 mb-2">What is a Volt (V)?</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Volt (V)**: A unit of electric potential difference, also known as electromotive force (EMF). It measures the potential energy per unit charge in an electric circuit.
              </li>
              <li>
                **Formula**: 1 V = 1 J/C (Joule per Coulomb), meaning that 1 volt is the potential difference that will move 1 coulomb of charge using 1 joule of energy.
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200"/>

            <h3 className="font-semibold text-base mt-4 mb-2">Relationship Between Joules and Volts</h3>
            <p>
              To convert from **Joules (J)** to **Volts (V)**, we need to consider the charge (C) involved. Since **Volts** are related to energy per unit charge, the formula for the conversion between Joules and Volts is derived from the relationship:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Energy (J) = Voltage (V) × Charge (C)**
              </li>
              <li>
                To find the voltage, we rearrange the formula: **Voltage (V) = Energy (J) / Charge (C)**
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200"/>

            <h3 className="font-semibold text-base mt-4 mb-2">Converting Joules to Volts</h3>
            <p>
              The conversion from Joules to Volts depends on the amount of electric charge involved in the system. For example, if 10 Joules of energy is used to move 5 Coulombs of charge, the voltage would be:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Volts = 10 J / 5 C = 2 V**
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200"/>

            <h3 className="font-semibold text-base mt-4 mb-2">Practical Examples of Joules to Volts Conversion</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Example 1**: If 20 Joules of energy are used to move 4 Coulombs of charge, the voltage is:
                <br />
                **Volts = 20 J / 4 C = 5 V**
              </li>
              <li>
                **Example 2**: For 50 Joules of energy and 10 Coulombs of charge, the voltage is:
                <br />
                **Volts = 50 J / 10 C = 5 V**
              </li>
              <li>
                **Example 3**: If 100 Joules of energy are used to move 25 Coulombs of charge, the voltage is:
                <br />
                **Volts = 100 J / 25 C = 4 V**
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200"/>

            <h3 className="font-semibold text-base mt-4 mb-2">Conclusion</h3>
            <p>
              Converting from **Joules** to **Volts** is important in understanding the electric potential difference when dealing with energy transfer in electrical systems. The conversion depends on the charge in the system, as voltage is a measure of energy per unit charge. This relationship allows for easier design and analysis of electrical circuits, ensuring proper energy distribution and usage in a system.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default JoulesToVoltsConverter;
