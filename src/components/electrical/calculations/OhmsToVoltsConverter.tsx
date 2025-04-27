import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; // Adjust the path to your component library if needed

const OhmsToVoltsConverter: React.FC = () => {
  const [current, setCurrent] = useState<number>(5); // Default current (Amps)
  const [resistance, setResistance] = useState<number>(10); // Default resistance (Ohms)

  // Function to calculate voltage in volts
  const calculateVoltage = (current: number, resistance: number): number => {
    return current * resistance; // Formula to convert Ohms to Volts
  };

  const voltage = calculateVoltage(current, resistance);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Ohms to Volts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert resistance in ohms (<code>Ω</code>) and current in amps (<code>A</code>) to voltage in volts (<code>V</code>).
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Ohms to Volts Calculation</h3>
            <p className="mt-2">
              The voltage (<code>V</code>) in volts is calculated using the formula:
            </p>
          </div>

          {/* Ohms to Volts Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The voltage in volts (<code>V</code>) is calculated as:
            </p>
            <p className="mt-2">
              <code>V = I × R</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Current (<code>I</code>)</strong> = Current in amps (<code>A</code>)</li>
              <li><strong>Resistance (<code>R</code>)</strong> = Resistance in ohms (<code>Ω</code>)</li>
              <li><strong>Voltage (<code>V</code>)</strong> = Voltage in volts (<code>V</code>)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a current of {current} <code>A</code> and a resistance of {resistance} <code>Ω</code>. To convert this to voltage in volts:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">V = I × R</p>
              <p className="mt-2">
                V = {current} <code>A</code> × {resistance} <code>Ω</code> = {voltage} <code>V</code>
              </p>
            </div>
            <p className="mt-2">
              Therefore, with {current} <code>A</code> and {resistance} <code>Ω</code>, the voltage is {voltage} volts (<code>V</code>).
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For a current of 5 <code>A</code> and a resistance of 10 <code>Ω</code>:
                <p className="bg-gray-100 p-2">V = 5 <code>A</code> × 10 <code>Ω</code> = 50 <code>V</code></p>
              </li>
              <li>
                *Example 2:* For a current of 2 <code>A</code> and a resistance of 20 <code>Ω</code>:
                <p className="bg-gray-100 p-2">V = 2 <code>A</code> × 20 <code>Ω</code> = 40 <code>V</code></p>
              </li>
              <li>
                *Example 3:* For a current of 10 <code>A</code> and a resistance of 5 <code>Ω</code>:
                <p className="bg-gray-100 p-2">V = 10 <code>A</code> × 5 <code>Ω</code> = 50 <code>V</code></p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>The current should be in amps (A) and the resistance should be in ohms (Ω) for the conversion to volts.</li>
              <li>Ensure that the units of current and resistance are correct for the voltage calculation.</li>
              <li>This calculation helps you determine how much voltage is required to drive a given current through a resistor.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Converting current (A) and resistance (Ω) to voltage (V) requires multiplying the current by the resistance. Use the formula <code>V = I × R</code>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OhmsToVoltsConverter;
