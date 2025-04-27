import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; // Adjust the import path if needed

const VoltsToKWConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default voltage value
  const [current, setCurrent] = useState<number>(1); // Default current value

  // Function to calculate power in kW
  const calculatePowerKW = (volts: number, current: number): number => {
    return (volts * current) / 1000; // Formula to convert volts and current to kilowatts
  };

  const powerKW = calculatePowerKW(volts, current);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Volts to Kilowatts (kW)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert voltage in volts (V) and current in amperes (A) to power in kilowatts (kW). This calculation is crucial for understanding electrical power consumption and system efficiency.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Volts to Kilowatts Calculation</h3>
            <p className="mt-2">
              The power (P) in kilowatts is calculated using the formula:
            </p>
          </div>

          {/* Volts to Kilowatts Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The power in kilowatts <span className="font-semibold">P(kW)</span> is calculated as:
            </p>
            <p className="mt-2">
              <code>P(kW) = (V × I) / 1000</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Voltage (V)</strong> = Voltage in volts</li>
              <li><strong>Current (I)</strong> = Current in amperes (A)</li>
              <li><strong>Power (P)</strong> = Power in kilowatts (kW)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a voltage of {volts}V and a current of {current}A. To convert this to power in kilowatts:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">P(kW) = (V × I) / 1000</p>
              <p className="mt-2">
                P(kW) = {volts}V × {current}A / 1000 = {powerKW} kW
              </p>
            </div>
            <p className="mt-2">
              Therefore, with {volts}V and {current}A, the power is {powerKW} kW.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For a voltage of 1V and a current of 1A:
                <p className="bg-gray-100 p-2">P(kW) = (1V × 1A) / 1000 = 0.001 kW</p>
              </li>
              <li>
                *Example 2:* For a voltage of 120V and a current of 10A:
                <p className="bg-gray-100 p-2">P(kW) = (120V × 10A) / 1000 = 1.2 kW</p>
              </li>
              <li>
                *Example 3:* For a voltage of 240V and a current of 5A:
                <p className="bg-gray-100 p-2">P(kW) = (240V × 5A) / 1000 = 1.2 kW</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Ensure the current is in amperes (A) and voltage is in volts (V) when performing the calculation.</li>
              <li>Power in kilowatts is often used to measure the energy consumption or output of electrical devices.</li>
              <li>1 kW = 1000 W (watts), so this conversion is useful for understanding larger power values in more practical units.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Converting voltage and current into power in kilowatts is essential for understanding the electrical consumption of devices. Simply multiply voltage and current, then divide by 1000 to convert watts to kilowatts.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToKWConverter;
