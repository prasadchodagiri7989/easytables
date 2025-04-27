import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; // Adjust the path to your component library if necessary

const VoltsToOhmsConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default 1V
  const [current, setCurrent] = useState<number>(1); // Default 1A

  // Function to calculate resistance in Ohms
  const calculateResistance = (volts: number, current: number): number => {
    if (current === 0) {
      return 0; // Handle division by zero if current is 0A
    }
    return volts / current; // Ohm's law: R = V / I
  };

  const resistance = calculateResistance(volts, current);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Volts to Ohms (Resistance)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert voltage in volts (V) to resistance in ohms (Ω) using Ohm's law. This conversion is important in electrical engineering and circuit analysis.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Volts to Ohms Calculation</h3>
            <p className="mt-2">
              The resistance (R) in ohms (Ω) is calculated using Ohm's law:
            </p>
          </div>

          {/* Volts to Ohms Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The resistance in ohms \(R\) is calculated as:
            </p>
            <p className="mt-2">
              <code>R = V / I</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Voltage (V)</strong> = Voltage in volts</li>
              <li><strong>Current (I)</strong> = Current in amperes (A)</li>
              <li><strong>Resistance (R)</strong> = Resistance in ohms (Ω)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a voltage of {volts}V and a current of {current}A. To convert this to resistance in ohms:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">R = V / I</p>
              <p className="mt-2">
                R = {volts}V / {current}A = {resistance} Ω
              </p>
            </div>
            <p className="mt-2">
              Therefore, with {volts}V and {current}A, the resistance is {resistance} Ω.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For a voltage of 1V and a current of 1A:
                <p className="bg-gray-100 p-2">R = 1V / 1A = 1 Ω</p>
              </li>
              <li>
                *Example 2:* For a voltage of 5V and a current of 2A:
                <p className="bg-gray-100 p-2">R = 5V / 2A = 2.5 Ω</p>
              </li>
              <li>
                *Example 3:* For a voltage of 10V and a current of 5A:
                <p className="bg-gray-100 p-2">R = 10V / 5A = 2 Ω</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Ensure the current is non-zero when using Ohm's law, as division by zero is undefined.</li>
              <li>Ohm's law is crucial for analyzing electrical circuits and understanding the relationship between voltage, current, and resistance.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              The conversion from volts to ohms using Ohm's law is a fundamental concept in electrical engineering. By dividing voltage by current, you can determine the resistance in an electrical circuit.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToOhmsConverter;
