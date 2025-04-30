import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; 
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VAToAmpsConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(1000); // Default apparent power (VA)
  const [voltage, setVoltage] = useState<number>(230); // Default voltage (V)
  const [currentAmps, setCurrentAmps] = useState<number | string>("—");

  // Function to calculate current in amps
  const calculateCurrentAmps = (apparentPower: number, voltage: number): number => {
    return apparentPower / voltage; // Formula to convert VA to Amps
  };

  const handleConvert = () => {
    const result = calculateCurrentAmps(apparentPower, voltage);
    setCurrentAmps(result);
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
            <BreadcrumbPage>VA to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>VA to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert apparent power in volt-amperes (VA) and voltage in volts (V) to current in amps (A).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Apparent Power in VA:</label>
              <input
                type="number"
                value={apparentPower}
                onChange={(e) => setApparentPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Voltage in V:</label>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
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
              <strong>Converted Current:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{currentAmps} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>I = S<sub>VA</sub> / V</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>I</strong>: Current in amps (A)</li>
                <li><strong>S<sub>VA</sub></strong>: Apparent power in volt-amperes (VA)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To convert apparent power (VA) to current (A), simply divide the apparent power (S<sub>VA</sub>) by the voltage (V) using the formula:
                <br />
                <strong>I = S<sub>VA</sub> / V</strong>.
                <br />
                This will give the current (I) in amps.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Example 1:</strong> For an apparent power of 1000 VA and a voltage of 230 V:
                  <p className="bg-white p-2">I = 1000 VA / 230 V = 4.35 A</p>
                </li>
                <li>
                  <strong>Example 2:</strong> For an apparent power of 5000 VA and a voltage of 120 V:
                  <p className="bg-white p-2">I = 5000 VA / 120 V = 41.67 A</p>
                </li>
                <li>
                  <strong>Example 3:</strong> For an apparent power of 2500 VA and a voltage of 480 V:
                  <p className="bg-white p-2">I = 2500 VA / 480 V = 5.21 A</p>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VAToAmpsConverter;
