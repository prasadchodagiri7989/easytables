import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Use next/link if you're using Next.js

const WhToWattsConverter: React.FC = () => {
  const [wh, setWh] = useState<number>(100);
  const [hours, setHours] = useState<number>(5);
  const [watts, setWatts] = useState<number | string>("—");

  const calculateWatts = (wh: number, hours: number) => {
    return wh / hours;
  };

  const handleConvert = () => {
    if (hours === 0) {
      setWatts("Invalid (divide by zero)");
      return;
    }
    const result = calculateWatts(wh, hours);
    setWatts(result.toFixed(2));
  };

  const examples = [
    { wh: 500, hours: 10, expectedResult: 50, description: "500 Wh used over 10 hours" },
    { wh: 1200, hours: 6, expectedResult: 200, description: "1200 Wh used over 6 hours" },
    { wh: 300, hours: 3, expectedResult: 100, description: "300 Wh used over 3 hours" },
    { wh: 150, hours: 2, expectedResult: 75, description: "150 Wh used over 2 hours" },
    { wh: 1000, hours: 4, expectedResult: 250, description: "1000 Wh used over 4 hours" },
    { wh: 240, hours: 8, expectedResult: 30, description: "240 Wh used over 8 hours" },
    { wh: 360, hours: 3, expectedResult: 120, description: "360 Wh used over 3 hours" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mb-6">
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
            <BreadcrumbPage>Wh to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Card Container */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Watt-hours to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-base text-gray-700 dark:text-white">
          {/* Introduction */}
          <p>
            This tool converts energy measured in watt-hours (Wh) into power measured in watts (W) based on the amount of time
            the energy is used over. This is useful for evaluating battery performance, power loads, and energy consumption.
          </p>

          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Energy (Wh):</label>
              <input
                type="number"
                value={wh}
                onChange={(e) => setWh(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Time (hours):</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded dark:text-black"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
            >
              Convert
            </button>

            {/* Result */}
            <div>
              <strong className="text-lg">Converted Power:</strong>
              <p className="mt-2 p-3 bg-gray-100 rounded font-mono text-lg dark:text-black">{watts} W</p>
            </div>
          </div>

          {/* Formula */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Formula</h2>
            <p className="text-base">
              The formula to convert watt-hours to watts is:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-black dark:text-black font-mono mt-2">
              Watts (W) = Watt-hours (Wh) / Time (hours)
            </pre>
            <p className="mt-2">
              Where:
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>W</strong> is the power in watts</li>
                <li><strong>Wh</strong> is the energy in watt-hours</li>
                <li><strong>h</strong> is the time in hours</li>
              </ul>
            </p>
          </section>

          {/* Examples */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Examples</h2>
            <ul className="space-y-4 list-disc list-inside">
              {examples.map((ex, idx) => (
                <li key={idx}>
                  <p><strong>{ex.description}</strong></p>
                  <p>Input: {ex.wh} Wh over {ex.hours} hours</p>
                  <p>Output: <span className="font-mono">{ex.expectedResult} W</span></p>
                </li>
              ))}
            </ul>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Use Cases</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Estimate the power load from a battery over time</li>
              <li>Design solar panel systems with optimal discharge rates</li>
              <li>Determine power draw for energy efficiency analysis</li>
              <li>Assist in generator capacity planning</li>
              <li>Calculate average appliance usage</li>
            </ul>
          </section>

          {/* Explanation */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Explanation</h2>
            <p>
              Watt-hours represent the amount of energy consumed or stored. When you divide this by time, you get the rate
              at which the energy was used — which is power (in watts). For instance, if a device uses 500 Wh over 10 hours,
              it consumes power at a rate of 50 W.
            </p>
          </section>

          {/* Educational Tip */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Energy vs. Power</h2>
            <p>
              <strong>Energy</strong> (Wh) is the capacity to do work — it accumulates over time.<br />
              <strong>Power</strong> (W) is the rate of using that energy.
            </p>
            <p className="mt-2 italic">Analogy: Think of Wh like the fuel in a tank and W like how fast you're burning it.</p>
          </section>

          {/* Tips */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Tips</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Never divide by 0 — time must be greater than 0</li>
              <li>Use realistic energy and time values to get meaningful results</li>
              <li>Check the battery label or datasheet for accurate Wh capacity</li>
              <li>Use decimal input for fractional hours (e.g. 1.5 hours)</li>
            </ul>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">FAQs</h2>
            <div className="space-y-4">
              <div>
                <strong>Q: What is a watt-hour?</strong>
                <p>A watt-hour (Wh) is a measure of energy — the amount of power consumed over one hour.</p>
              </div>
              <div>
                <strong>Q: Can I use this to size my solar panel?</strong>
                <p>Yes, by estimating your daily energy need in Wh and dividing by sunlight hours, you get required wattage.</p>
              </div>
              <div>
                <strong>Q: Is this tool accurate?</strong>
                <p>Yes, if you enter correct Wh and time values. The formula is based on physics fundamentals.</p>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhToWattsConverter;
