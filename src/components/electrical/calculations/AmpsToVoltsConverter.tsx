import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const AmpsToVoltsConverter: React.FC = () => {
  const [amps, setAmps] = useState<number>(3); // Default 3A
  const [watts, setWatts] = useState<number>(45); // Default power 45W
  const [resistance, setResistance] = useState<number>(10); // Default resistance 10Ω

  const calculateVoltsWithWatts = (watts: number, amps: number) => {
    return watts / amps;
  };

  const calculateVoltsWithOhms = (amps: number, resistance: number) => {
    return amps * resistance;
  };

  const voltsWithWatts = calculateVoltsWithWatts(watts, amps);
  const voltsWithOhms = calculateVoltsWithOhms(amps, resistance);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Amps to Volts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert electric current in amps (A) to voltage in volts (V). You can calculate volts from amps using either the power in watts or the resistance in ohms.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Amps to Volts Calculation</h3>
            <p className="mt-2">
              To calculate voltage, we have two methods: using watts or using resistance.
            </p>
          </div>

          {/* Amps to Volts Calculation using Watts */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Amps to Volts Calculation (Using Watts)</h2>
            <p>
              The voltage \( V \) in volts is calculated as the power \( P \) in watts divided by the current \( I \) in amps:
            </p>
            <p>
              <code>V = W / A</code>
            </p>
            <p className="mt-2">
              For example, if the power consumption is {watts}W and the current is {amps}A, the voltage would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">V = W / A</p>
              <p className="mt-2">
                V = {watts}W / {amps}A = {voltsWithWatts}V
              </p>
            </div>
            <p className="mt-2">
              So, with a power consumption of {watts}W and a current flow of {amps}A, the voltage supply is {voltsWithWatts}V.
            </p>
          </div>

          {/* Amps to Volts Calculation using Ohms */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Amps to Volts Calculation (Using Ohms)</h2>
            <p>
              The voltage \( V \) in volts is calculated as the current \( I \) in amps multiplied by the resistance \( R \) in ohms:
            </p>
            <p>
              <code>V = A × Ω</code>
            </p>
            <p className="mt-2">
              For example, if the current is {amps}A and the resistance is {resistance}Ω, the voltage would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">V = A × Ω</p>
              <p className="mt-2">
                V = {amps}A × {resistance}Ω = {voltsWithOhms}V
              </p>
            </div>
            <p className="mt-2">
              So, with a current of {amps}A and a resistance of {resistance}Ω, the voltage supply is {voltsWithOhms}V.
            </p>
          </div>

          {/* More Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6">
              <li>
                *Example 1:* If the power consumption is 45W and the current is 3A, the voltage supply would be:
                <p className="bg-gray-100 p-2">V = 45W / 3A = 15V</p>
              </li>
              <li>
                *Example 2:* For a circuit with a current of 3A and a resistance of 10Ω, the voltage would be:
                <p className="bg-gray-100 p-2">V = 3A × 10Ω = 30V</p>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              The conversion from amps to volts depends on how you approach the calculation: using either the power in watts or the resistance in ohms. Both methods are based on fundamental electrical laws such as Ohm’s Law and the relationship between power, voltage, and current.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToVoltsConverter;