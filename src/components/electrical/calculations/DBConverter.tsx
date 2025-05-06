import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const DBConverter: React.FC = () => {
  const [quantity, setQuantity] = useState("Power");
  const [dBUnit, setDbUnit] = useState("dBm");
  const [inputValue, setInputValue] = useState<number>(0);
  const [outputValue, setOutputValue] = useState<string | number>("—");

  const convertPower = (dBValue: number, unit: string): number | string => {
    switch (unit) {
      case "dBm":
        return Math.pow(10, (dBValue - 30) / 10).toFixed(6) + " W";
      case "dBW":
        return Math.pow(10, dBValue / 10).toFixed(6) + " W";
      case "dBmV":
        return Math.pow(10, (dBValue - 60) / 20).toFixed(6) + " V";
      default:
        return "Unsupported unit";
    }
  };

  const handleConvert = () => {
    if (quantity === "Power") {
      setOutputValue(convertPower(inputValue, dBUnit));
    } else {
      setOutputValue("Conversion for this quantity is coming soon.");
    }
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
              <Link to="/electrical-calculations">Electrical Calculations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Decibel Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Decibel (dB) Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert decibel values (dBm, dBW, etc.) into linear units like watts or volts. This is useful in RF engineering,
            audio systems, and electrical calculations.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Quantity:</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border px-3 py-2 rounded dark:text-black"
              >
                <option value="Power">Power</option>
                <option value="Voltage">Voltage</option>
                <option value="Current">Current</option>
                <option value="Sound Pressure">Sound Pressure</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Decibel Unit:</label>
              <select
                value={dBUnit}
                onChange={(e) => setDbUnit(e.target.value)}
                className="w-full border px-3 py-2 rounded dark:text-black"
              >
                <option value="dBm">dBm</option>
                <option value="dBW">dBW</option>
                <option value="dBmV">dBmV</option>
                <option value="dBμV">dBμV</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Enter dB Value:</label>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{outputValue}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DBConverter;
