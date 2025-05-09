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

const KilowattsToJoulesConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [energy, setEnergy] = useState<number | string>('—');

  const convertToJoules = (power: number, time: number) => {
    return (1000 * power * time).toFixed(5);
  };

  const handleConvert = () => {
    const result = convertToJoules(power, time);
    setEnergy(result);
  };

  const examples = [
    { power: 3, time: 3, expectedResult: 9000, description: '3 kW for 3 seconds' },
    { power: 5, time: 2, expectedResult: 10000, description: '5 kW for 2 seconds' },
    { power: 10, time: 4, expectedResult: 40000, description: '10 kW for 4 seconds' },
    { power: 2, time: 10, expectedResult: 20000, description: '2 kW for 10 seconds' },
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
            <BreadcrumbPage>Kilowatts to Joules Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Kilowatts to Joules Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert power in kilowatts (kW) and time in seconds (s) into energy in joules (J).
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power (Kilowatts):</label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time (Seconds):</label>
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
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base">{energy} J</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Power: {example.power} kW, Time: {example.time} s</p>
                    <p>Expected Energy: {example.expectedResult} J</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E = 1000 × kW × s</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E</strong>: Energy in joules (J)</li>
                <li><strong>kW</strong>: Power in kilowatts (kW)</li>
                <li><strong>s</strong>: Time in seconds</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion uses the formula: energy (J) = 1000 × power (kW) × time (s).
                <br />
                - Since 1 kilowatt equals 1000 watts, we multiply by 1000 to get the result in joules.
                <br />
                - This tells us how much energy is transferred over a duration at a given power level.
              </p>
            </div>
          </div>

          {/* Extra Content Section: About Kilowatts to Joules Conversion */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Conversion from Kilowatts (kW) to Joules (J)</h2>
  <p>
    Converting **Kilowatts (kW)** to **Joules (J)** helps in understanding how much energy is delivered over a period of time. Kilowatts represent the rate of energy usage or generation (power), while Joules measure the total amount of energy used.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">What is a Kilowatt?</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      1 kilowatt = 1,000 watts
    </li>
    <li>
      Kilowatts represent the rate of doing work or using energy, often seen in electrical appliances and machinery.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">What is a Joule?</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      1 joule is the energy transferred when one watt of power is applied for one second.
    </li>
    <li>
      It is the SI unit of energy, widely used in physics and engineering.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Conversion Formula</h3>
  <p>
    To convert kilowatts to joules, you also need to know the time in seconds:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Joules = Kilowatts × 1,000 × Time (in seconds)**
    </li>
    <li>
      For example, 2 kW used for 60 seconds = 2 × 1,000 × 60 = 120,000 J
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Why This Conversion Matters</h3>
  <p>
    This conversion is essential for energy budgeting, battery calculations, and analyzing energy efficiency in systems where both power and duration are key factors. It helps translate power ratings into actual energy consumption.
  </p>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default KilowattsToJoulesConverter;
