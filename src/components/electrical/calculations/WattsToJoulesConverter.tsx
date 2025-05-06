import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WattsToJoulesConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(30); // Default 30 watts
  const [seconds, setSeconds] = useState<number>(3); // Default 3 seconds
  const [joules, setJoules] = useState<number | string>("—");

  const calculateJoules = (watts: number, seconds: number) => {
    return watts * seconds;
  };

  const handleConvert = () => {
    const result = calculateJoules(watts, seconds);
    setJoules(result);
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
            <BreadcrumbPage>Watts to Joules Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Joules Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert electric power in watts (W) to energy in joules (J) using the time in seconds (s).
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power in Watts (W):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time in Seconds (s):</label>
              <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
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
              <strong>Energy in Joules:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{joules} J</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E (J) = P (W) × t (s)</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E</strong>: Energy in joules (J)</li>
                <li><strong>P</strong>: Power in watts (W)</li>
                <li><strong>t</strong>: Time in seconds (s)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                You can’t directly convert watts to joules since they represent different physical quantities:
                <br />
                – Watts measure **power** (rate of energy per second).
                <br />
                – Joules measure **energy** (total work done).
              </p>
              <p className="mt-2">
                To convert watts to joules, you must multiply by time (in seconds).
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example:</h2>
              <p>
                What is the energy consumed by a device using <strong>30 watts</strong> of power for <strong>3 seconds</strong>?
              </p>
              <p className="mt-2 font-mono bg-gray-100 p-2 rounded dark:text-black">
                E = 30W × 3s = <strong>90J</strong>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToJoulesConverter;
