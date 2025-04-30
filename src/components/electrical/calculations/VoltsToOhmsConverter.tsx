import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; 
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; 

const VoltsToOhmsConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default 1V
  const [current, setCurrent] = useState<number>(1); // Default 1A
  const [resistance, setResistance] = useState<number | string>("—"); // Output resistance

  // Function to calculate resistance in Ohms
  const calculateResistance = (volts: number, current: number): number => {
    if (current === 0) {
      return 0; // Handle division by zero if current is 0A
    }
    return volts / current; // Ohm's law: R = V / I
  };

  const handleConvert = () => {
    const result = calculateResistance(volts, current);
    setResistance(result);
  };

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
              <Link to="/electrical-conversions">Electrical Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Volts to Ohms Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Volts to Ohms Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert voltage (V) and current (A) to resistance (Ω) using Ohm's law.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Voltage in Volts (V):</label>
              <input
                type="number"
                value={volts}
                onChange={(e) => setVolts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Current in Amperes (A):</label>
              <input
                type="number"
                value={current}
                onChange={(e) => setCurrent(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Resistance:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{resistance} Ω</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>R = V / I</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>R</strong>: Resistance in ohms (Ω)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>I</strong>: Current in amperes (A)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                Suppose you have a voltage of 10V and a current of 2A:
              </p>
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <p className="font-semibold">R = V / I</p>
                <p className="mt-2">
                  R = 10V / 2A = 5 Ω
                </p>
              </div>
              <p className="mt-2">
                Therefore, with 10V and 2A, the resistance is 5 Ω.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">More Practical Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <p><strong>Example 1:</strong> For a voltage of 1V and a current of 1A: R = 1V / 1A = 1 Ω</p>
                </li>
                <li>
                  <p><strong>Example 2:</strong> For a voltage of 5V and a current of 2A: R = 5V / 2A = 2.5 Ω</p>
                </li>
                <li>
                  <p><strong>Example 3:</strong> For a voltage of 10V and a current of 5A: R = 10V / 5A = 2 Ω</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Important Notes:</h2>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Ensure the current is non-zero when using Ohm's law, as division by zero is undefined.</li>
                <li>Ohm's law is crucial for analyzing electrical circuits and understanding the relationship between voltage, current, and resistance.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
              <p>
                The conversion from volts to ohms using Ohm's law is a fundamental concept in electrical engineering. By dividing voltage by current, you can determine the resistance in an electrical circuit.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToOhmsConverter;
