import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; // Adjust the path to your component library if needed

const VAToKVAConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(1000); // Default apparent power (VA)

  // Function to calculate apparent power in kVA
  const calculatePowerKVA = (apparentPower: number): number => {
    return apparentPower / 1000; // Formula to convert VA to kVA
  };

  const powerKVA = calculatePowerKVA(apparentPower);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert VA to Kilovolt-Amperes (<code>kVA</code>)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert apparent power in volt-amperes (<code>VA</code>) to kilovolt-amperes (<code>kVA</code>), a common unit for larger-scale electrical systems.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">VA to Kilovolt-Amperes Calculation</h3>
            <p className="mt-2">
              The apparent power (<code>S</code>) in kilovolt-amperes is calculated using the formula:
            </p>
          </div>

          {/* VA to kVA Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The apparent power in kilovolt-amperes (<code>S<sub>kVA</sub></code>) is calculated as:
            </p>
            <p className="mt-2">
              <code>S<sub>kVA</sub> = S<sub>VA</sub> / 1000</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Apparent Power (<code>S<sub>VA</sub></code>)</strong> = Apparent power in volt-amperes (<code>VA</code>)</li>
              <li><strong>Apparent Power (<code>S<sub>kVA</sub></code>)</strong> = Apparent power in kilovolt-amperes (<code>kVA</code>)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have an apparent power of {apparentPower} <code>VA</code>. To convert this to apparent power in kilovolt-amperes:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">S<sub>kVA</sub> = S<sub>VA</sub> / 1000</p>
              <p className="mt-2">
                S<sub>kVA</sub> = {apparentPower} <code>VA</code> / 1000 = {powerKVA} <code>kVA</code>
              </p>
            </div>
            <p className="mt-2">
              Therefore, with {apparentPower} <code>VA</code>, the apparent power is {powerKVA} kilovolt-amperes (<code>kVA</code>).
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For an apparent power of 1000 <code>VA</code>:
                <p className="bg-gray-100 p-2">S<sub>kVA</sub> = 1000 <code>VA</code> / 1000 = 1 <code>kVA</code></p>
              </li>
              <li>
                *Example 2:* For an apparent power of 5000 <code>VA</code>:
                <p className="bg-gray-100 p-2">S<sub>kVA</sub> = 5000 <code>VA</code> / 1000 = 5 <code>kVA</code></p>
              </li>
              <li>
                *Example 3:* For an apparent power of 2500 <code>VA</code>:
                <p className="bg-gray-100 p-2">S<sub>kVA</sub> = 2500 <code>VA</code> / 1000 = 2.5 <code>kVA</code></p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>One kilovolt-ampere (<code>kVA</code>) is equal to 1000 volt-amperes (<code>VA</code>).</li>
              <li>This calculation is important for scaling apparent power values in large systems, where the use of kilovolt-amperes is more common.</li>
              <li>Ensure that the apparent power is in volt-amperes (<code>VA</code>) when performing this calculation.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Converting apparent power (<code>VA</code>) to kilovolt-amperes (<code>kVA</code>) is simple: divide the apparent power by 1000 to get the value in kilovolt-amperes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VAToKVAConverter;
