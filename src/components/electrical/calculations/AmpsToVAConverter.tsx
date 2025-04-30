import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const AmpsToVAConverter: React.FC = () => {
  const [amps, setAmps] = useState<number>(12); // Default 12A
  const [voltage, setVoltage] = useState<number>(110); // Default voltage 110V
  const [lineVoltage, setLineVoltage] = useState<number>(110); // Default line voltage 110V for 3-phase
  const [phaseCurrent, setPhaseCurrent] = useState<number>(12); // Default 3-phase current 12A

  const calculateVA = (amps: number, voltage: number) => {
    return amps * voltage;
  };

  const calculateThreePhaseVA = (amps: number, voltage: number) => {
    return Math.sqrt(3) * amps * voltage;
  };

  const va = calculateVA(amps, voltage);
  const threePhaseVA = calculateThreePhaseVA(phaseCurrent, lineVoltage);

  return (
    <div className="w-full max-w-3xl mx-auto">
                      <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                          <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                              <Link to="/">Home</Link>
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
                          <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                              <Link to="/electrical-calculations">Electrical Calculations</Link>
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
                          <BreadcrumbItem>
                            <BreadcrumbPage>kVA to VA Calculator</BreadcrumbPage>
                          </BreadcrumbItem>
                        </BreadcrumbList>
                     </Breadcrumb>
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Amps to VA</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            Learn how to convert electric current from amps (A) to apparent power in volt-amps (VA).
            You can calculate volt-amps from amps and volts, but you can't directly convert amps to volt-amps because amps and volt-amps measure different quantities.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Amps to Volt-Amps (VA)</h3>
            <p className="mt-2">
              The apparent power in volt-amps (VA) is equal to the current in amps (A) multiplied by the voltage in volts (V):
            </p>
            <p className="mt-2">
              <code>VA = A × V</code>
            </p>
          </div>

          {/* Amps to Volt-Amps Calculation for Single Phase */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Amps to VA Calculation (Single Phase)</h2>
            <p>
              For a single-phase system, the apparent power (S) in volt-amps (VA) can be calculated using the formula:
            </p>
            <p>
              <code>S(VA) = I(A) × V(V)</code>
            </p>
            <p className="mt-2">
              For example, if the current is {amps}A and the voltage supply is {voltage}V, the apparent power would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">VA = A × V</p>
              <p className="mt-2">
                VA = {amps}A × {voltage}V = {va}VA
              </p>
            </div>
            <p className="mt-2">
              So, with a current of {amps}A and a voltage supply of {voltage}V, the apparent power is {va} volt-amps.
            </p>
          </div>

          {/* Amps to Volt-Amps Calculation for 3 Phase */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Amps to VA Calculation (Three Phase)</h2>
            <p>
              For a three-phase system, the apparent power (S) in volt-amps (VA) is calculated using the formula:
            </p>
            <p>
              <code>S(VA) = √3 × I(A) × V<sub>line-line</sub>(V)</code>
            </p>
            <p className="mt-2">
              For example, if the current is {phaseCurrent}A and the line-to-line voltage is {lineVoltage}V, the apparent power would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">VA = √3 × A × V</p>
              <p className="mt-2">
                VA = √3 × {phaseCurrent}A × {lineVoltage}V = {threePhaseVA.toFixed(2)}VA
              </p>
            </div>
            <p className="mt-2">
              So, with a current of {phaseCurrent}A and a line-to-line voltage of {lineVoltage}V, the apparent power is {threePhaseVA.toFixed(2)} volt-amps.
            </p>
          </div>

          {/* More Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6">
              <li>
                *Example 1:* If the current is 10A and the voltage is 220V, the apparent power in a single-phase system would be:
                <p className="bg-gray-100 p-2">S(VA) = 10A × 220V = 2200VA</p>
              </li>
              <li>
                *Example 2:* For a 3-phase system with a current of 5A and a line-to-line voltage of 400V, the apparent power would be:
                <p className="bg-gray-100 p-2">S(VA) = √3 × 5A × 400V = 3464.1VA</p>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              The conversion from amps to volt-amps depends on the system type. For single-phase systems, simply multiply the current by the voltage. For three-phase systems, multiply by the square root of 3 to account for the phase difference.
            </p>
            <p>
              This calculation is crucial for understanding power demands and for designing electrical systems efficiently.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToVAConverter;