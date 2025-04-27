import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; // Adjust the path to your component library if needed

const VAToKWConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(1000); // Default apparent power (VA)
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // Default power factor

  // Function to calculate power in kW
  const calculatePowerKW = (apparentPower: number, powerFactor: number): number => {
    return (apparentPower * powerFactor) / 1000; // Formula to convert VA to kW
  };

  const powerKW = calculatePowerKW(apparentPower, powerFactor);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert VA to Kilowatts (<code>kW</code>)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert apparent power in volt-amperes (<code>VA</code>) to real power in kilowatts (<code>kW</code>). This is an important calculation to determine the effective power usage, accounting for the power factor.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">VA to Kilowatts Calculation</h3>
            <p className="mt-2">
              The real power (<code>P</code>) in kilowatts is calculated using the formula:
            </p>
          </div>

          {/* VA to Kilowatts Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The real power in kilowatts <code>P<sub>kW</sub></code> is calculated as:
            </p>
            <p className="mt-2">
              <code>P<sub>kW</sub> = (S<sub>VA</sub> × PF) / 1000</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Apparent Power (<code>S<sub>VA</sub></code>)</strong> = Apparent power in volt-amperes (<code>VA</code>)</li>
              <li><strong>Power Factor (<code>PF</code>)</strong> = The power factor (a value between 0 and 1)</li>
              <li><strong>Real Power (<code>P<sub>kW</sub></code>)</strong> = Real power in kilowatts (<code>kW</code>)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have an apparent power of {apparentPower} <code>VA</code> and a power factor of {powerFactor}. To convert this to real power in kilowatts:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">P<sub>kW</sub> = (S<sub>VA</sub> × PF) / 1000</p>
              <p className="mt-2">
                P<sub>kW</sub> = {apparentPower} <code>VA</code> × {powerFactor} / 1000 = {powerKW} <code>kW</code>
              </p>
            </div>
            <p className="mt-2">
              Therefore, with {apparentPower} <code>VA</code> and a power factor of {powerFactor}, the real power is {powerKW} kilowatts (<code>kW</code>).
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For an apparent power of 1000 <code>VA</code> and a power factor of 0.8:
                <p className="bg-gray-100 p-2">P<sub>kW</sub> = (1000 <code>VA</code> × 0.8) / 1000 = 0.8 <code>kW</code></p>
              </li>
              <li>
                *Example 2:* For an apparent power of 5000 <code>VA</code> and a power factor of 0.9:
                <p className="bg-gray-100 p-2">P<sub>kW</sub> = (5000 <code>VA</code> × 0.9) / 1000 = 4.5 <code>kW</code></p>
              </li>
              <li>
                *Example 3:* For an apparent power of 2500 <code>VA</code> and a power factor of 0.6:
                <p className="bg-gray-100 p-2">P<sub>kW</sub> = (2500 <code>VA</code> × 0.6) / 1000 = 1.5 <code>kW</code></p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>The power factor (<code>PF</code>) is a measure of how effectively the electrical power is being used. It ranges from 0 to 1, with 1 indicating perfect efficiency.</li>
              <li>Ensure that the apparent power is in volt-amperes (<code>VA</code>) and that the power factor is provided to calculate real power in kilowatts (<code>kW</code>).</li>
              <li>This calculation is useful for electrical systems to understand real power consumption or output, considering the phase difference between voltage and current.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Converting apparent power (<code>VA</code>) to real power (<code>kW</code>) involves considering the power factor. Multiply the apparent power by the power factor, then divide by 1000 to get the value in kilowatts.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VAToKWConverter;
