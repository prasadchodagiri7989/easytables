import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WattsToKWhConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(100); // Default 100 Watts
  const [hours, setHours] = useState<number>(1); // Default 1 hour

  const calculateKWh = (watts: number, hours: number) => {
    return (watts * hours) / 1000; // 1 watt-hour (Wh) = 1 watt × 1 hour, then divide by 1000 to get kWh
  };

  const energyInKWh = calculateKWh(watts, hours);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Watts (W) to Kilowatt-hours (kWh)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert electrical power in watts (W) to energy consumption in kilowatt-hours (kWh). 
            This conversion is useful for calculating the energy usage of appliances or devices over time, typically for billing purposes.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Watts to Kilowatt-hours Calculation</h3>
            <p className="mt-2">
              Energy consumption in kilowatt-hours can be calculated by multiplying power in watts by time in hours and dividing by 1000.
            </p>
          </div>

          {/* Watts to Kilowatt-hours Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The energy \( E \) in kilowatt-hours (kWh) is calculated as the power \( P \) in watts (W) multiplied by the time \( t \) in hours, divided by 1000:
            </p>
            <p className="mt-2">
              <code>E = (P × t) / 1000</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Watts (W)</strong> = Power in watts</li>
              <li><strong>Time (t)</strong> = Time in hours</li>
              <li><strong>Kilowatt-hours (kWh)</strong> = Energy in kilowatt-hours</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a device using {watts}W of power for {hours} hour(s). The total energy consumption in kilowatt-hours would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">Energy = (Power × Time) / 1000</p>
              <p className="mt-2">
                Energy = ({watts} W × {hours} h) / 1000 = {energyInKWh} kWh
              </p>
            </div>
            <p className="mt-2">
              Therefore, a {watts}W device running for {hours} hour(s) consumes {energyInKWh} kWh of energy.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* A 100 W device running for 1 hour:
                <p className="bg-gray-100 p-2">Energy = (100 × 1) / 1000 = 0.1 kWh</p>
              </li>
              <li>
                *Example 2:* A 150 W device running for 3 hours:
                <p className="bg-gray-100 p-2">Energy = (150 × 3) / 1000 = 0.45 kWh</p>
              </li>
              <li>
                *Example 3:* A 200 W device running for 0.5 hours:
                <p className="bg-gray-100 p-2">Energy = (200 × 0.5) / 1000 = 0.1 kWh</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>1 watt-hour (Wh) = 1 watt × 1 hour. Dividing by 1000 converts it to kilowatt-hours (kWh).</li>
              <li>Energy consumption is typically measured in kWh on electricity bills, so this conversion is useful for household and business energy tracking.</li>
              <li>This formula assumes constant power usage over the entire time period. Variable power consumption requires more complex calculations.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert watts to kilowatt-hours, multiply the power in watts by the time in hours and divide by 1000. This will give you the energy usage in kilowatt-hours, which is a common unit for measuring energy consumption.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToKWhConverter;
