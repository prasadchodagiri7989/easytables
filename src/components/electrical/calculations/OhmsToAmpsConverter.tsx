import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; // Adjust the path to your component library if needed

const OhmsToAmpsConverter: React.FC = () => {
  const [voltage, setVoltage] = useState<number>(230); // Default voltage (Volts)
  const [resistance, setResistance] = useState<number>(10); // Default resistance (Ohms)

  // Function to calculate current in amps
  const calculateCurrentAmps = (voltage: number, resistance: number): number => {
    return voltage / resistance; // Formula to convert Ohms to Amps
  };

  const currentAmps = calculateCurrentAmps(voltage, resistance);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Ohms to Amps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert resistance in ohms (<code>Ω</code>) and voltage in volts (<code>V</code>) to current in amps (<code>A</code>).
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Ohms to Amps Calculation</h3>
            <p className="mt-2">
              The current (<code>I</code>) in amps is calculated using the formula:
            </p>
          </div>

          {/* Ohms to Amps Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The current in amps (<code>I</code>) is calculated as:
            </p>
            <p className="mt-2">
              <code>I = V / R</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Voltage (<code>V</code>)</strong> = Voltage in volts (<code>V</code>)</li>
              <li><strong>Resistance (<code>R</code>)</strong> = Resistance in ohms (<code>Ω</code>)</li>
              <li><strong>Current (<code>I</code>)</strong> = Current in amps (<code>A</code>)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a voltage of {voltage} <code>V</code> and a resistance of {resistance} <code>Ω</code>. To convert this to current in amps:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">I = V / R</p>
              <p className="mt-2">
                I = {voltage} <code>V</code> / {resistance} <code>Ω</code> = {currentAmps} <code>A</code>
              </p>
            </div>
            <p className="mt-2">
              Therefore, with {voltage} <code>V</code> and {resistance} <code>Ω</code>, the current is {currentAmps} amps (<code>A</code>).
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For a voltage of 230 <code>V</code> and a resistance of 10 <code>Ω</code>:
                <p className="bg-gray-100 p-2">I = 230 <code>V</code> / 10 <code>Ω</code> = 23 <code>A</code></p>
              </li>
              <li>
                *Example 2:* For a voltage of 120 <code>V</code> and a resistance of 60 <code>Ω</code>:
                <p className="bg-gray-100 p-2">I = 120 <code>V</code> / 60 <code>Ω</code> = 2 <code>A</code></p>
              </li>
              <li>
                *Example 3:* For a voltage of 480 <code>V</code> and a resistance of 240 <code>Ω</code>:
                <p className="bg-gray-100 p-2">I = 480 <code>V</code> / 240 <code>Ω</code> = 2 <code>A</code></p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>The voltage should be in volts (V) and the resistance in ohms (Ω) for the conversion to amps.</li>
              <li>Ensure that the units of voltage and resistance are correct for the current calculation.</li>
              <li>This calculation helps determine how much current flows through a resistor given the voltage across it.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Converting voltage (V) and resistance (Ω) to current (A) requires dividing the voltage by the resistance. Use the formula <code>I = V / R</code>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OhmsToAmpsConverter;
