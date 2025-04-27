import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WattsToVoltsConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(1000); // Default 1000 Watts
  const [current, setCurrent] = useState<number>(5); // Default current 5A

  const calculateVolts = (watts: number, current: number) => {
    return watts / current; // Conversion to Volts
  };

  const volts = calculateVolts(watts, current);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Watts (W) to Volts (V)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert electrical power in watts (W) to voltage in volts (V). This conversion is essential in understanding the voltage needed to deliver a certain power at a given current.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Watts to Volts Calculation</h3>
            <p className="mt-2">
              To convert watts to volts, you need to know the current in the circuit. The formula used for this conversion is based on the relationship between power, voltage, and current.
            </p>
          </div>

          {/* Watts to Volts Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The voltage \( V \) in volts is calculated as:
            </p>
            <p className="mt-2">
              <code>V = P / I</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Watts (P)</strong> = Power in watts</li>
              <li><strong>Current (I)</strong> = Current in amperes (A)</li>
              <li><strong>Volts (V)</strong> = Voltage in volts</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a device using {watts}W of power with a current of {current}A. The voltage required to deliver this power would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">V = P / I</p>
              <p className="mt-2">
                V = {watts}W / {current}A = {volts}V
              </p>
            </div>
            <p className="mt-2">
              Therefore, to supply {watts}W of power with a current of {current}A, the voltage would be {volts}V.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For a 1000W device with a current of 5A:
                <p className="bg-gray-100 p-2">V = 1000W / 5A = 200V</p>
              </li>
              <li>
                *Example 2:* For a 2000W device with a current of 4A:
                <p className="bg-gray-100 p-2">V = 2000W / 4A = 500V</p>
              </li>
              <li>
                *Example 3:* For a 500W device with a current of 2A:
                <p className="bg-gray-100 p-2">V = 500W / 2A = 250V</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>The formula assumes that the power is purely real and does not account for reactive power in AC circuits.</li>
              <li>If you're working with an AC system, you may need to account for the power factor.</li>
              <li>The relationship between power, current, and voltage is central to understanding energy consumption and system design.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert watts to volts, simply divide the power in watts by the current in amperes. This simple calculation is essential for determining the voltage required to deliver a certain amount of power in a circuit.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToVoltsConverter;
