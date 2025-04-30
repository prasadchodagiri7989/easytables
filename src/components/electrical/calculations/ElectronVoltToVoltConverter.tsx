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

const ElectronVoltToVoltConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);
  const [charge, setCharge] = useState<number>(0);
  const [voltage, setVoltage] = useState<number | string>('—');
  const [method, setMethod] = useState<string>('elementaryCharge');

  const elementaryCharge = 1.602e-19;

  const convertToVoltageWithElementaryCharge = (energy: number, charge: number) => {
    return energy / charge;
  };

  const convertToVoltageWithCoulombs = (energy: number, charge: number) => {
    return (elementaryCharge * energy) / charge;
  };

  const handleConvert = () => {
    if (charge === 0) {
      setVoltage("Charge cannot be zero");
      return;
    }
    let result = 0;
    if (method === 'elementaryCharge') {
      result = convertToVoltageWithElementaryCharge(energy, charge);
    } else {
      result = convertToVoltageWithCoulombs(energy, charge);
    }
    setVoltage(result.toExponential(5));
  };

  const examples = [
    {
      energy: 800,
      charge: 40,
      method: 'elementaryCharge',
      expectedResult: 20,
      description: 'Using 800 eV energy and 40 elementary charges',
    },
    {
      energy: 800,
      charge: 2,
      method: 'coulombs',
      expectedResult: 6.408e-17,
      description: 'Using 800 eV energy and 2 Coulombs of charge',
    },
    {
      energy: 1000,
      charge: 10,
      method: 'elementaryCharge',
      expectedResult: 100,
      description: 'Using 1000 eV energy and 10 elementary charges',
    },
    {
      energy: 1500,
      charge: 1,
      method: 'coulombs',
      expectedResult: 2.403e-16,
      description: 'Using 1500 eV energy and 1 Coulomb of charge',
    },
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
            <BreadcrumbPage>Electron-Volt to Volt Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Electron-Volt to Volt Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            This tool converts energy in electron-volts (eV) into volts (V) using either the elementary charge or actual charge in coulombs.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Energy (eV):</label>
              <input
                type="number"
                value={energy}
                onChange={(e) => setEnergy(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Charge:</label>
              <input
                type="number"
                value={charge}
                onChange={(e) => setCharge(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Method:</label>
              <select
                onChange={(e) => setMethod(e.target.value)}
                value={method}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="elementaryCharge">Using Elementary Charge (e)</option>
                <option value="coulombs">Using Coulombs (C)</option>
              </select>
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{voltage} V</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Energy: {example.energy} eV, Charge: {example.charge} C</p>
                    <p>Expected Voltage: {example.expectedResult} V</p>
                    <p>Method: {example.method === 'elementaryCharge' ? 'Elementary Charge' : 'Coulombs'}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formulae:</h2>
              <p>
                <strong>1. Using Elementary Charge (e):</strong><br />
                V = eV / e<br />
                Where e = 1.602 × 10⁻¹⁹ C
              </p>
              <p className="mt-2">
                <strong>2. Using Coulombs (C):</strong><br />
                V = (1.602 × 10⁻¹⁹ × eV) / C
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ElectronVoltToVoltConverter;
