import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; // Adjust the path to your component library if needed

const VAToAmpsConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(1000); // Default apparent power (VA)
  const [voltage, setVoltage] = useState<number>(230); // Default voltage (V)

  // Function to calculate current in amps
  const calculateCurrentAmps = (apparentPower: number, voltage: number): number => {
    return apparentPower / voltage; // Formula to convert VA to Amps
  };

  const currentAmps = calculateCurrentAmps(apparentPower, voltage);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert VA to Amps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert apparent power in volt-amperes (<code>VA</code>) to current in amps (<code>A</code>) by using the voltage.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">VA to Amps Calculation</h3>
            <p className="mt-2">
              The current (<code>I</code>) in amps is calculated using the formula:
            </p>
          </div>

          {/* VA to Amps Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The current in amps (<code>I</code>) is calculated as:
            </p>
            <p className="mt-2">
              <code>I = S<sub>VA</sub> / V</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Apparent Power (<code>S<sub>VA</sub></code>)</strong> = Apparent power in volt-amperes (<code>VA</code>)</li>
              <li><strong>Voltage (<code>V</code>)</strong> = Voltage in volts (<code>V</code>)</li>
              <li><strong>Current (<code>I</code>)</strong> = Current in amps (<code>A</code>)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have an apparent power of {apparentPower} <code>VA</code> and a voltage of {voltage} <code>V</code>. To convert this to current in amps:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">I = S<sub>VA</sub> / V</p>
              <p className="mt-2">
                I = {apparentPower} <code>VA</code> / {voltage} <code>V</code> = {currentAmps} <code>A</code>
              </p>
            </div>
            <p className="mt-2">
              Therefore, with {apparentPower} <code>VA</code> and {voltage} <code>V</code>, the current is {currentAmps} amps (<code>A</code>).
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For an apparent power of 1000 <code>VA</code> and a voltage of 230 <code>V</code>:
                <p className="bg-gray-100 p-2">I = 1000 <code>VA</code> / 230 <code>V</code> = 4.35 <code>A</code></p>
              </li>
              <li>
                *Example 2:* For an apparent power of 5000 <code>VA</code> and a voltage of 120 <code>V</code>:
                <p className="bg-gray-100 p-2">I = 5000 <code>VA</code> / 120 <code>V</code> = 41.67 <code>A</code></p>
              </li>
              <li>
                *Example 3:* For an apparent power of 2500 <code>VA</code> and a voltage of 480 <code>V</code>:
                <p className="bg-gray-100 p-2">I = 2500 <code>VA</code> / 480 <code>V</code> = 5.21 <code>A</code></p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>The voltage should be in volts (V) and must be known for the conversion to amps.</li>
              <li>Ensure that the apparent power is in volt-amperes (VA) when using the formula.</li>
              <li>This calculation helps determine how much current is drawn by an electrical system based on its apparent power and the voltage supplied.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Converting apparent power (VA) to current (A) requires knowing the voltage (V). Divide the apparent power by the voltage to find the current in amps.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VAToAmpsConverter;
