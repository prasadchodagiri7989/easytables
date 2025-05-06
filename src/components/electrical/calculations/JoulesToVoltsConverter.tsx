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
        </CardContent>
      </Card>
    </div>
  );
};

export default JoulesToVoltsConverter;
