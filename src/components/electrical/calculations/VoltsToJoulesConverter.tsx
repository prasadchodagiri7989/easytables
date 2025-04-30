import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VoltsToJoulesConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default voltage value
  const [current, setCurrent] = useState<number>(1); // Default current value
  const [time, setTime] = useState<number>(1); // Default time value (in seconds)
  const [energyJoules, setEnergyJoules] = useState<number>(1); // Default energy value

  const calculateEnergyJoules = (volts: number, current: number, time: number): number => {
    return volts * current * time; // Formula to convert volts, current, and time to energy in joules (J)
  };

  const handleConvert = () => {
    const result = calculateEnergyJoules(volts, current, time);
    setEnergyJoules(result);
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
              <Link to="/energy-conversions">Energy Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Volts to Joules Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Volts to Joules Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>Convert voltage (V), current (A), and time (s) to energy in joules (J).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Voltage (V):</label>
              <input
                type="number"
                value={volts}
                onChange={(e) => setVolts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Current (A):</label>
              <input
                type="number"
                value={current}
                onChange={(e) => setCurrent(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time (s):</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
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
              <strong>Converted Energy:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{energyJoules} J</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E(J) = V × I × t</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E(J)</strong>: Energy in joules (J)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>I</strong>: Current in amperes (A)</li>
                <li><strong>t</strong>: Time in seconds (s)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from volts, current, and time to joules is based on the formula:
                <br />
                - Energy (E) is equal to voltage (V) multiplied by current (I) and time (t).
                <br />
                - This conversion helps us calculate the energy (in joules) consumed or stored in an electrical system over a given time.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Practical Example:</h2>
              <p>For a voltage of {volts}V, a current of {current}A, and a time of {time}s, the energy is:</p>
              <p className="bg-gray-100 p-2">E(J) = {volts}V × {current}A × {time}s = {energyJoules} J</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToJoulesConverter;
