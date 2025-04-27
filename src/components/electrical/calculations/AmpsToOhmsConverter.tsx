import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const AmpsToOhmsConverter: React.FC = () => {
  const [amps, setAmps] = useState<number>(3); // Default 3A
  const [voltage, setVoltage] = useState<number>(12); // Default voltage 12V
  const [power, setPower] = useState<number>(30); // Default power 30W

  const calculateResistanceWithVoltage = (amps: number, voltage: number) => {
    return voltage / amps;
  };

  const calculateResistanceWithPower = (amps: number, power: number) => {
    return power / Math.pow(amps, 2);
  };

  const resistanceVoltage = calculateResistanceWithVoltage(amps, voltage);
  const resistancePower = calculateResistanceWithPower(amps, power);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Amps to Ohms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            Learn how to convert electric current from amps (A) to resistance in ohms (Ω).
            You can calculate resistance from amps and voltage or power, but you can't directly convert amps to ohms, as these units measure different quantities.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">What is Ohm's Law?</h3>
            <p className="mt-2">
              Ohm's Law relates voltage (V), current (I), and resistance (R) with the formula:
            </p>
            <p className="mt-2">
              <code>V = I × R</code>
            </p>
            <p className="mt-2">
              To calculate resistance (R), we rearrange the formula to:
            </p>
            <p className="mt-2">
              <code>R = V / I</code>
            </p>
          </div>

          {/* Amps to Ohms Calculation with Voltage */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Amps to Ohms Calculation with Voltage</h2>
            <p>
              If you know the voltage and current, you can calculate resistance using the formula:
            </p>
            <p>
              <code>R(Ω) = V(V) / I(A)</code>
            </p>
            <p className="mt-2">
              For example, if the voltage is {voltage}V and the current is {amps}A, the resistance would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">R = V / I</p>
              <p className="mt-2">
                R = {voltage}V / {amps}A = {resistanceVoltage}Ω
              </p>
            </div>
            <p className="mt-2">
              So, with a voltage supply of {voltage}V and a current of {amps}A, the resistance is {resistanceVoltage} ohms.
            </p>
          </div>

          {/* Amps to Ohms Calculation with Power */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Amps to Ohms Calculation with Power</h2>
            <p>
              If you know the power and current, you can calculate resistance using the formula:
            </p>
            <p>
              <code>R(Ω) = P(W) / I(A)^2</code>
            </p>
            <p className="mt-2">
              For example, if the power is {power}W and the current is {amps}A, the resistance would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">R = P / I^2</p>
              <p className="mt-2">
                R = {power}W / ({amps}A)^2 = {resistancePower}Ω
              </p>
            </div>
            <p className="mt-2">
              So, with a power consumption of {power}W and a current of {amps}A, the resistance is {resistancePower} ohms.
            </p>
          </div>

          {/* Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Practical Examples</h2>
            <ul className="list-disc ml-6">
              <li>
                *Example 1:* If the voltage across a resistor is 24V and the current flowing through it is 2A, the resistance is:
                <p className="bg-gray-100 p-2">R = 24V / 2A = 12Ω</p>
              </li>
              <li>
                *Example 2:* If a circuit consumes 30W of power and the current is 0.5A, the resistance is:
                <p className="bg-gray-100 p-2">R = 30W / (0.5A)^2 = 120Ω</p>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              The conversion from amps to ohms can be done using either voltage or power. Depending on the information available, you can use either formula to calculate the resistance.
              Understanding this concept is essential for designing and analyzing electrical circuits.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToOhmsConverter;