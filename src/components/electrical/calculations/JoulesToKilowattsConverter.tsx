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

const JoulesToKilowattsConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [power, setPower] = useState<number | string>('—');

  const convertToKilowatts = (energy: number, time: number) => {
    if (time === 0) return "Time cannot be zero";
    return (energy / (1000 * time)).toFixed(5);
  };

  const handleConvert = () => {
    const result = convertToKilowatts(energy, time);
    setPower(result);
  };

  const examples = [
    { energy: 90, time: 3, expectedResult: 0.03, description: '90 joules over 3 seconds' },
    { energy: 150, time: 5, expectedResult: 0.03, description: '150 joules over 5 seconds' },
    { energy: 500, time: 10, expectedResult: 0.05, description: '500 joules over 10 seconds' },
    { energy: 1200, time: 20, expectedResult: 0.06, description: '1200 joules over 20 seconds' },
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
            <BreadcrumbPage>Joules to Kilowatts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Joules to Kilowatts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert energy in joules (J) to power in kilowatts (kW) by entering the energy and time values below.
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
              <label className="block font-medium mb-1">Time (Seconds):</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{power} kW</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Energy: {example.energy} J, Time: {example.time} s</p>
                    <p>Expected Power: {example.expectedResult} kW</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>kW = J / (1000 × s)</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>kW</strong>: Power in kilowatts</li>
                <li><strong>J</strong>: Energy in joules</li>
                <li><strong>s</strong>: Time in seconds</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                1 kilowatt (kW) equals 1000 joules per second (J/s). To compute power, divide the total energy (J) by the time (s), then divide the result by 1000 to convert watts to kilowatts.
              </p>
            </div>
          </div>

                    {/* Extra Content Section: About Joules to Kilowatts Conversion */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Conversion from Joules (J) to Kilowatts (kW)</h2>
            <p>
              **Joules (J)** and **Kilowatts (kW)** are both units used to measure energy, but they represent different physical quantities and are used in different contexts. The Joule is a unit of energy, while the Kilowatt is a unit of power. Understanding the conversion between these two units is crucial in fields such as energy management, electricity generation, and electrical engineering.
            </p>

            <h3 className="font-semibold text-base mt-4 mb-2">What is a Joule (J)?</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Joule (J)**: A unit of energy in the International System of Units (SI). It is the amount of energy transferred when a force of one newton moves an object one meter.
              </li>
              <li>
                **Formula**: 1 J = 1 N·m (Newton meter), which means the energy required to move a 1 kg object by 1 meter using a force of 1 N.
              </li>
              <li>
                Joules are commonly used to measure energy in various contexts, such as the energy required to heat water or the energy in electrical circuits.
              </li>
            </ul>

            <h3 className="font-semibold text-base mt-4 mb-2">What is a Kilowatt (kW)?</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Kilowatt (kW)**: A unit of power equivalent to 1,000 watts. Power is the rate at which energy is used, produced, or transferred.
              </li>
              <li>
                **Formula**: 1 kW = 1,000 W. A watt (W) is the rate of energy transfer, so 1 kW represents the energy consumed or produced per second.
              </li>
              <li>
                Kilowatts are typically used in larger-scale energy systems, such as power plants, electrical grids, and appliances, to indicate the rate of energy usage or generation.
              </li>
            </ul>

            <h3 className="font-semibold text-base mt-4 mb-2">Relationship Between Joules and Kilowatts</h3>
            <p>
              While **Joules** measure the amount of energy, **Kilowatts** measure the rate at which energy is used or produced. To convert from **Joules** to **Kilowatts**, we must consider the time factor. Power is energy divided by time, so we need to know the amount of time in which the energy is consumed or produced.
            </p>
            <p>
              The general formula for power is:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Power (W) = Energy (J) / Time (s)**
              </li>
              <li>
                To convert **Joules** to **Kilowatts**, use the formula:
              </li>
              <li>
                **Kilowatts (kW) = Joules (J) / (1,000 × Time (s))**
              </li>
            </ul>

            <h3 className="font-semibold text-base mt-4 mb-2">Converting Joules to Kilowatts</h3>
            <p>
              To convert from **Joules** to **Kilowatts**, you need to divide the energy in **Joules** by 1,000 and the time in seconds. This will give you the power in **Kilowatts**. For example, if you have 10,000 Joules of energy transferred in 5 seconds, the power in Kilowatts would be:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Kilowatts = 10,000 J / (1,000 × 5 s) = 2 kW**
              </li>
            </ul>

            <h3 className="font-semibold text-base mt-4 mb-2">Practical Examples of Joules to Kilowatts Conversion</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Example 1**: If 100,000 Joules of energy are used over 50 seconds, the power consumption is:
                <br />
                **Kilowatts = 100,000 J / (1,000 × 50 s) = 2 kW**.
              </li>
              <li>
                **Example 2**: For 1,000,000 Joules of energy used in 500 seconds, the power is:
                <br />
                **Kilowatts = 1,000,000 J / (1,000 × 500 s) = 2 kW**.
              </li>
              <li>
                **Example 3**: A device consumes 2,500 Joules of energy over 10 seconds. The power consumption in kilowatts is:
                <br />
                **Kilowatts = 2,500 J / (1,000 × 10 s) = 0.25 kW**.
              </li>
            </ul>

            <h3 className="font-semibold text-base mt-4 mb-2">Conclusion</h3>
            <p>
              Converting **Joules** to **Kilowatts** is essential for understanding how energy is used or produced over time. Kilowatts represent the rate at which energy is transferred, while Joules measure the total amount of energy. By understanding this conversion, you can assess the power consumption of electrical devices and better understand energy efficiency in various systems. The conversion formula involves dividing the energy in Joules by 1,000 and the time in seconds to obtain the power in Kilowatts.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default JoulesToKilowattsConverter;
