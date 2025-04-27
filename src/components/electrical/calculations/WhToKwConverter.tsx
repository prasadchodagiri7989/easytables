import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WhToKwConverter: React.FC = () => {
  const [wh, setWh] = useState<number>(5000); // Default 5000 Wh

  const calculateKw = (wh: number) => {
    return wh / 1000;
  };

  const kw = calculateKw(wh);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Watt-hours (Wh) to Kilowatts (kW)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert energy in watt-hours (Wh) into power in kilowatts (kW). 
            This is especially useful for understanding larger energy systems such as home batteries, solar panels, and generators.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Wh to kW Calculation</h3>
            <p className="mt-2">
              To convert Wh to kW, simply divide the energy value in watt-hours by 1000.
            </p>
          </div>

          {/* Wh to kW Calculation Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The power \( P \) in kilowatts is calculated as the energy \( E \) in watt-hours divided by 1000:
            </p>
            <p className="mt-2">
              <code>kW = Wh ÷ 1000</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>kW</strong> = Power (kilowatts)</li>
              <li><strong>Wh</strong> = Energy (watt-hours)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have {wh} Wh of energy. 
              The power in kilowatts would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">kW = Wh ÷ 1000</p>
              <p className="mt-2">
                kW = {wh} Wh ÷ 1000 = {kw.toFixed(2)} kW
              </p>
            </div>
            <p className="mt-2">
              Therefore, {wh} watt-hours is equal to {kw.toFixed(2)} kilowatts.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* 1000 Wh:
                <p className="bg-gray-100 p-2">kW = 1000 ÷ 1000 = 1 kW</p>
              </li>
              <li>
                *Example 2:* 1500 Wh:
                <p className="bg-gray-100 p-2">kW = 1500 ÷ 1000 = 1.5 kW</p>
              </li>
              <li>
                *Example 3:* 2500 Wh:
                <p className="bg-gray-100 p-2">kW = 2500 ÷ 1000 = 2.5 kW</p>
              </li>
              <li>
                *Example 4:* 7500 Wh:
                <p className="bg-gray-100 p-2">kW = 7500 ÷ 1000 = 7.5 kW</p>
              </li>
            </ul>
          </div>

          {/* Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Watt-hours (Wh) measure energy over time, while kilowatts (kW) measure instantaneous power.</li>
              <li>This simple division is valid because 1 kilowatt equals 1000 watts.</li>
              <li>If you have a time period (like hours), you might also need to consider that separately for power rating calculations.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert watt-hours (Wh) to kilowatts (kW), divide the energy value by 1000. 
              This conversion helps when dealing with larger electrical systems where energy capacity needs to be expressed in kilowatts.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WhToKwConverter;
