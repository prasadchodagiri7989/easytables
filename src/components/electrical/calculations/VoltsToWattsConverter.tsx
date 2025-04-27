import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const VoltsToWattsConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(220); // Default 220V
  const [amps, setAmps] = useState<number>(5); // Default 5A

  const calculateWatts = (volts: number, amps: number) => {
    return volts * amps; // Conversion to Watts
  };

  const watts = calculateWatts(volts, amps);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Volts (V) to Watts (W)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert voltage in volts (V) to power in watts (W). This conversion is useful to determine the power consumed by a device based on its voltage and current.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Volts to Watts Calculation</h3>
            <p className="mt-2">
              To calculate watts from volts, you need to know the current in amperes (A) in the circuit. The formula is based on the relationship between voltage, current, and power.
            </p>
          </div>

          {/* Volts to Watts Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The power \( P \) in watts is calculated as:
            </p>
            <p className="mt-2">
              <code>P = V × I</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Volts (V)</strong> = Voltage in volts</li>
              <li><strong>Amps (I)</strong> = Current in amperes</li>
              <li><strong>Watts (P)</strong> = Power in watts</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a device operating at {volts}V and drawing {amps}A of current. The power consumed would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">P = V × I</p>
              <p className="mt-2">
                P = {volts}V × {amps}A = {watts}W
              </p>
            </div>
            <p className="mt-2">
              Therefore, to operate at {volts}V and draw {amps}A, the power consumed would be {watts}W.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For a device operating at 220V and drawing 5A:
                <p className="bg-gray-100 p-2">P = 220V × 5A = 1100W</p>
              </li>
              <li>
                *Example 2:* For a device operating at 110V and drawing 3A:
                <p className="bg-gray-100 p-2">P = 110V × 3A = 330W</p>
              </li>
              <li>
                *Example 3:* For a device operating at 12V and drawing 10A:
                <p className="bg-gray-100 p-2">P = 12V × 10A = 120W</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>The formula assumes that the power is purely real and does not account for reactive power in AC circuits.</li>
              <li>If you're working with an AC system, you may need to account for the power factor.</li>
              <li>Make sure to use consistent units for voltage and current when calculating watts.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert volts to watts, simply multiply the voltage by the current in amperes. This formula is essential for determining the power consumption of devices in electrical circuits.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToWattsConverter;
