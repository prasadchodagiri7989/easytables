import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WhToWattsConverter: React.FC = () => {
  const [wh, setWh] = useState<number>(100); // Default 100 Wh
  const [hours, setHours] = useState<number>(5); // Default 5 hours

  const calculateWatts = (wh: number, hours: number) => {
    return wh / hours;
  };

  const watts = calculateWatts(wh, hours);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Watt-hours (Wh) to Watts (W)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert energy in watt-hours (Wh) to power in watts (W). 
            Understanding this conversion is important when working with batteries, solar panels, and energy systems.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Wh to W Calculation</h3>
            <p className="mt-2">
              To calculate watts, you divide the energy (Wh) by the time (hours).
            </p>
          </div>

          {/* Wh to W Calculation Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The power \( P \) in watts is calculated as the energy \( E \) in watt-hours divided by the time \( t \) in hours:
            </p>
            <p className="mt-2">
              <code>W = Wh ÷ h</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>W</strong> = Power (watts)</li>
              <li><strong>Wh</strong> = Energy (watt-hours)</li>
              <li><strong>h</strong> = Time (hours)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have {wh} watt-hours of energy and you want to use it over {hours} hours. 
              The power required would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">W = Wh ÷ h</p>
              <p className="mt-2">
                W = {wh} Wh ÷ {hours} h = {watts.toFixed(2)} W
              </p>
            </div>
            <p className="mt-2">
              Therefore, {wh} Wh consumed over {hours} hours equals a power output of {watts.toFixed(2)} watts.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* A 500 Wh battery used over 10 hours:
                <p className="bg-gray-100 p-2">W = 500 Wh ÷ 10 h = 50 W</p>
              </li>
              <li>
                *Example 2:* A solar system produces 1200 Wh over 6 hours:
                <p className="bg-gray-100 p-2">W = 1200 Wh ÷ 6 h = 200 W</p>
              </li>
              <li>
                *Example 3:* An appliance uses 300 Wh over 3 hours:
                <p className="bg-gray-100 p-2">W = 300 Wh ÷ 3 h = 100 W</p>
              </li>
              <li>
                *Example 4:* A battery backup provides 150 Wh over 2 hours:
                <p className="bg-gray-100 p-2">W = 150 Wh ÷ 2 h = 75 W</p>
              </li>
            </ul>
          </div>

          {/* Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Watt-hours (Wh) measure total energy over time, while watts (W) measure the rate of energy use at any moment.</li>
              <li>This conversion assumes a constant power output over the given time.</li>
              <li>Knowing either value helps when designing battery systems or sizing solar panels and inverters.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert watt-hours to watts, simply divide the energy by the time in hours.
              This easy calculation is essential for understanding power requirements and managing energy resources effectively.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WhToWattsConverter;
