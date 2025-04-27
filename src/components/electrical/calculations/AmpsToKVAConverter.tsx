import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const AmpsToKVAConverter: React.FC = () => {
  const [amps, setAmps] = useState<number>(12); // Default 12A
  const [volts, setVolts] = useState<number>(110); // Default 110V for single-phase

  // Calculate kVA for single-phase
  const calculateSinglePhaseKVA = (amps: number, volts: number) => {
    return (amps * volts) / 1000;
  };

  // Calculate kVA for 3-phase (line to line voltage)
  const calculateThreePhaseLineToLineKVA = (amps: number, volts: number) => {
    return (Math.sqrt(3) * amps * volts) / 1000;
  };

  // Calculate kVA for 3-phase (line to neutral voltage)
  const calculateThreePhaseLineToNeutralKVA = (amps: number, volts: number) => {
    return (3 * amps * volts) / 1000;
  };

  const singlePhaseKVA = calculateSinglePhaseKVA(amps, volts);
  const threePhaseLineToLineKVA = calculateThreePhaseLineToLineKVA(amps, volts);
  const threePhaseLineToNeutralKVA = calculateThreePhaseLineToNeutralKVA(amps, volts);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Amps to kVA</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            Converting amps (A) to kilovolt-amperes (kVA) depends on the type of electrical system you're working with. In this guide, we'll go over the conversion formulas for both single-phase and three-phase systems.
          </p>

          {/* Single-phase formula */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Single-Phase Amps to kVA</h3>
            <p className="mt-2">
              The apparent power in kilovolt-amperes (kVA) for a single-phase system is calculated using the formula:
            </p>
            <p className="mt-2">
              <code>kVA = Amps × Volts / 1000</code>
            </p>
          </div>

          {/* Example 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example 1: Single-Phase (12A, 110V)</h2>
            <p>
              If the phase current is 12 amps (A) and the RMS voltage is 110 volts (V), the apparent power in kVA is:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">kVA = Amps × Volts / 1000</p>
              <p className="mt-2">
                kVA = {amps}A × {volts}V / 1000 = {singlePhaseKVA.toFixed(3)} kVA
              </p>
            </div>
          </div>

          {/* Three-phase formula */}
          <div className="text-center mt-8">
            <h3 className="text-lg font-semibold">Three-Phase Amps to kVA</h3>
            <p className="mt-2">
              For three-phase systems, the formula depends on the voltage type: line to line or line to neutral.
            </p>
          </div>

          {/* Line to line formula */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Three-Phase (Line to Line) Amps to kVA</h3>
            <p className="mt-2">
              The apparent power in kilovolt-amperes (kVA) for a three-phase system with line to line voltage is:
            </p>
            <p className="mt-2">
              <code>kVA = √3 × Amps × Volts / 1000</code>
            </p>
          </div>

          {/* Example 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example 2: Three-Phase (Line to Line) (12A, 190V)</h2>
            <p>
              If the phase current is 12 amps (A) and the line-to-line RMS voltage is 190 volts (V), the apparent power in kVA is:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">kVA = √3 × Amps × Volts / 1000</p>
              <p className="mt-2">
                kVA = √3 × {amps}A × {volts}V / 1000 = {threePhaseLineToLineKVA.toFixed(3)} kVA
              </p>
            </div>
          </div>

          {/* Line to neutral formula */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Three-Phase (Line to Neutral) Amps to kVA</h3>
            <p className="mt-2">
              The apparent power in kilovolt-amperes (kVA) for a three-phase system with line to neutral voltage is:
            </p>
            <p className="mt-2">
              <code>kVA = 3 × Amps × Volts / 1000</code>
            </p>
          </div>

          {/* Example 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example 3: Three-Phase (Line to Neutral) (12A, 120V)</h2>
            <p>
              If the phase current is 12 amps (A) and the line-to-neutral RMS voltage is 120 volts (V), the apparent power in kVA is:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">kVA = 3 × Amps × Volts / 1000</p>
              <p className="mt-2">
                kVA = 3 × {amps}A × {volts}V / 1000 = {threePhaseLineToNeutralKVA.toFixed(3)} kVA
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Converting from amps to kilovolt-amperes (kVA) depends on whether you're working with a single-phase or three-phase system and what type of voltage is provided (line to line or line to neutral).
            </p>
            <p>
              To summarize:
            </p>
            <ul className="list-disc ml-6">
              <li>Single-phase kVA = Amps × Volts / 1000</li>
              <li>Three-phase (Line to Line) kVA = √3 × Amps × Volts / 1000</li>
              <li>Three-phase (Line to Neutral) kVA = 3 × Amps × Volts / 1000</li>
            </ul>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToKVAConverter;