import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; // Adjust the path to your component library if necessary

const VoltsToEVConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default 1V

  // Function to calculate electronvolts
  const calculateEV = (volts: number): number => {
    // 1 Volt = 1 Joule/Coulomb, and 1 eV = 1.60218 × 10^(-19) Joules
    return volts / (1.60218 * Math.pow(10, -19)); // Formula to convert Volts to eV
  };

  const electronVolts = calculateEV(volts);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Volts to Electronvolts (eV)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert voltage in volts (V) to energy in electronvolts (eV). This conversion is important in fields like particle physics and semiconductor physics.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Volts to Electronvolts Calculation</h3>
            <p className="mt-2">
              The electronvolt (eV) is a unit of energy commonly used in atomic and particle physics. It represents the energy gained by an electron moving through a potential difference of one volt.
            </p>
          </div>

          {/* Volts to Electronvolt Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The energy in electronvolts <span className="font-mono">E<sub>eV</sub></span> is calculated as:
            </p>
            <p className="mt-2">
              <code>E<sub>eV</sub> = V / (1.60218 × 10<sup>-19</sup>)</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Volts (V)</strong> = Voltage in volts</li>
              <li><strong>Electronvolts (eV)</strong> = Energy in electronvolts</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a voltage of {volts}V. To convert this to electronvolts:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">E<sub>eV</sub> = V / (1.60218 × 10<sup>-19</sup>)</p>
              <p className="mt-2">
                E<sub>eV</sub> = {volts}V / (1.60218 × 10<sup>-19</sup>) = {electronVolts} eV
              </p>
            </div>
            <p className="mt-2">
              Therefore, a voltage of {volts}V is equal to {electronVolts} eV.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For a voltage of 1V:
                <p className="bg-gray-100 p-2">E<sub>eV</sub> = 1V / (1.60218 × 10<sup>-19</sup>) ≈ 6.242 × 10<sup>18</sup> eV</p>
              </li>
              <li>
                *Example 2:* For a voltage of 5V:
                <p className="bg-gray-100 p-2">E<sub>eV</sub> = 5V / (1.60218 × 10<sup>-19</sup>) ≈ 3.121 × 10<sup>19</sup> eV</p>
              </li>
              <li>
                *Example 3:* For a voltage of 0.1V:
                <p className="bg-gray-100 p-2">E<sub>eV</sub> = 0.1V / (1.60218 × 10<sup>-19</sup>) ≈ 6.242 × 10<sup>17</sup> eV</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Electronvolt is often used in atomic, nuclear, and particle physics to measure small amounts of energy.</li>
              <li>1 eV corresponds to the energy gained by an electron when it is accelerated by a potential difference of 1 volt.</li>
              <li>Ensure that the voltage is in volts when performing the calculation.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              The conversion from volts to electronvolts is crucial in high-energy physics. You simply divide the voltage in volts by \( 1.60218 \times 10^{-19} \) to get the energy in electronvolts (eV).
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToEVConverter;
