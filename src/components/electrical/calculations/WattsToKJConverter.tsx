import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WattsToKJConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(10); // Default 10 Watts
  const [time, setTime] = useState<number>(1); // Default time 1 second

  const calculateKJ = (watts: number, time: number) => {
    return (watts * time) / 1000; // 1 watt = 1 joule/second, so for time in seconds, we divide by 1000 to get kJ
  };

  const energyInKJ = calculateKJ(watts, time);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Watts (W) to Kilojoules (kJ)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert electrical power in watts (W) to energy in kilojoules (kJ). 
            This conversion is helpful when calculating energy consumption over a period of time.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Watts to Kilojoules Calculation</h3>
            <p className="mt-2">
              Energy in kilojoules can be calculated by multiplying power in watts by time in seconds and dividing by 1000.
            </p>
          </div>

          {/* Watts to Kilojoules Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The energy \( E \) in kilojoules (kJ) is calculated as the power \( P \) in watts (W) multiplied by the time \( t \) in seconds, divided by 1000:
            </p>
            <p className="mt-2">
              <code>E = (P × t) / 1000</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Watts (W)</strong> = Power in watts</li>
              <li><strong>Time (t)</strong> = Time in seconds</li>
              <li><strong>Kilojoules (kJ)</strong> = Energy in kilojoules</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a device using {watts}W of power for {time} second(s). The total energy in kilojoules would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">Energy = (Power × Time) / 1000</p>
              <p className="mt-2">
                Energy = ({watts} W × {time} s) / 1000 = {energyInKJ} kJ
              </p>
            </div>
            <p className="mt-2">
              Therefore, a {watts}W device running for {time} second(s) consumes {energyInKJ} kJ of energy.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* A 10 W device running for 5 seconds:
                <p className="bg-gray-100 p-2">Energy = (10 × 5) / 1000 = 0.05 kJ</p>
              </li>
              <li>
                *Example 2:* A 100 W device running for 20 seconds:
                <p className="bg-gray-100 p-2">Energy = (100 × 20) / 1000 = 2 kJ</p>
              </li>
              <li>
                *Example 3:* A 500 W device running for 1 second:
                <p className="bg-gray-100 p-2">Energy = (500 × 1) / 1000 = 0.5 kJ</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>1 watt = 1 joule/second, so time must be in seconds for this calculation.</li>
              <li>Energy values are usually small when the time is short, so they are often given in kilojoules.</li>
              <li>This formula assumes constant power usage. Variations in power over time require additional calculations.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert watts to kilojoules, simply multiply the power in watts by the time in seconds and divide by 1000. This helps you understand the total energy consumption of a device.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToKJConverter;
