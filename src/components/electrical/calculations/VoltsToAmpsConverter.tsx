import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; // Adjust the path to your component library if needed

const VoltsToAmpsConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default voltage value
  const [resistance, setResistance] = useState<number>(1); // Default resistance value

  // Function to calculate current in amperes
  const calculateCurrentAmps = (volts: number, resistance: number): number => {
    return volts / resistance; // Ohm's law: I = V / R
  };

  const currentAmps = calculateCurrentAmps(volts, resistance);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Volts to Amps (A)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert voltage in volts (V) and resistance in ohms (Ω) to current in amperes (A). This calculation is important for understanding how much current flows through a circuit given a specific voltage and resistance.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Volts to Amps Calculation</h3>
            <p className="mt-2">
              The current (I) in amperes is calculated using Ohm’s Law:
            </p>
          </div>

          {/* Volts to Amps Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The current in amperes <span className="font-semibold">I(A)</span> is calculated as:
            </p>
            <p className="mt-2">
              <code>I(A) = V / R</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Voltage (V)</strong> = Voltage in volts</li>
              <li><strong>Resistance (R)</strong> = Resistance in ohms (Ω)</li>
              <li><strong>Current (I)</strong> = Current in amperes (A)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a voltage of {volts}V and a resistance of {resistance}Ω. To convert this to current in amperes:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">I(A) = V / R</p>
              <p className="mt-2">
                I(A) = {volts}V / {resistance}Ω = {currentAmps} A
              </p>
            </div>
            <p className="mt-2">
              Therefore, with {volts}V and {resistance}Ω, the current is {currentAmps} amperes (A).
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For a voltage of 1V and a resistance of 1Ω:
                <p className="bg-gray-100 p-2">I(A) = 1V / 1Ω = 1 A</p>
              </li>
              <li>
                *Example 2:* For a voltage of 120V and a resistance of 12Ω:
                <p className="bg-gray-100 p-2">I(A) = 120V / 12Ω = 10 A</p>
              </li>
              <li>
                *Example 3:* For a voltage of 240V and a resistance of 24Ω:
                <p className="bg-gray-100 p-2">I(A) = 240V / 24Ω = 10 A</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Ensure that voltage is in volts (V) and resistance is in ohms (Ω) when performing the calculation.</li>
              <li>Ohm’s Law is a fundamental principle in electrical engineering and is used to calculate current in circuits.</li>
              <li>Current is measured in amperes (A) and indicates the flow of electric charge in a circuit.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Converting voltage and resistance into current in amperes is essential for understanding the behavior of circuits. Simply divide the voltage by the resistance to calculate the current in amperes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToAmpsConverter;
