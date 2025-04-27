import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WattsToWhConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(100); // Default 100 Watts
  const [hours, setHours] = useState<number>(5); // Default 5 Hours

  const calculateWh = (watts: number, hours: number) => {
    return watts * hours;
  };

  const wh = calculateWh(watts, hours);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Watts (W) to Watt-hours (Wh)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert power in watts (W) to energy in watt-hours (Wh). 
            This is helpful when you want to know how much energy is used over a period of time.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Watts to Wh Calculation</h3>
            <p className="mt-2">
              To convert watts into watt-hours, you multiply the power value in watts by the time in hours.
            </p>
          </div>

          {/* Watts to Wh Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The energy \( E \) in watt-hours is calculated as the power \( P \) in watts multiplied by the time \( t \) in hours:
            </p>
            <p className="mt-2">
              <code>Wh = W × h</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Wh</strong> = Energy (watt-hours)</li>
              <li><strong>W</strong> = Power (watts)</li>
              <li><strong>h</strong> = Time (hours)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a device that uses {watts}W of power and it runs for {hours} hours. 
              The energy consumed would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">Wh = W × h</p>
              <p className="mt-2">
                Wh = {watts} W × {hours} h = {wh} Wh
              </p>
            </div>
            <p className="mt-2">
              Therefore, {watts} watts running for {hours} hours equals {wh} watt-hours of energy used.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* 200 W device running for 3 hours:
                <p className="bg-gray-100 p-2">Wh = 200 × 3 = 600 Wh</p>
              </li>
              <li>
                *Example 2:* 150 W light operating for 5 hours:
                <p className="bg-gray-100 p-2">Wh = 150 × 5 = 750 Wh</p>
              </li>
              <li>
                *Example 3:* 75 W fan used for 8 hours:
                <p className="bg-gray-100 p-2">Wh = 75 × 8 = 600 Wh</p>
              </li>
              <li>
                *Example 4:* 1000 W heater running for 2 hours:
                <p className="bg-gray-100 p-2">Wh = 1000 × 2 = 2000 Wh</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Watts measure instantaneous power, while watt-hours measure accumulated energy use over time.</li>
              <li>Always make sure the time is in hours. If given in minutes, first convert minutes to hours.</li>
              <li>This formula assumes a constant power draw during the time period.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert watts (W) into watt-hours (Wh), multiply the power rating by the time in hours. 
              This simple calculation helps you estimate the energy consumption of devices over a given period.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToWhConverter;
