import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const AmpsToKilowattsConverter: React.FC = () => {
  const [amps, setAmps] = useState<number>(3); // Default 3A
  const [volts, setVolts] = useState<number>(110); // Default 110V
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // Default PF for AC power

  // DC calculation
  const calculateDCKilowatts = (amps: number, volts: number) => {
    return (amps * volts) / 1000;
  };

  // AC Single-phase calculation
  const calculateACKilowatts = (amps: number, volts: number, pf: number) => {
    return (pf * amps * volts) / 1000;
  };

  // AC Three-phase calculation
  const calculateACThreePhaseKilowatts = (amps: number, volts: number, pf: number) => {
    return (Math.sqrt(3) * pf * amps * volts) / 1000;
  };

  const dcKilowatts = calculateDCKilowatts(amps, volts);
  const acSinglePhaseKilowatts = calculateACKilowatts(amps, volts, powerFactor);
  const acThreePhaseKilowatts = calculateACThreePhaseKilowatts(amps, volts, powerFactor);

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
                            <BreadcrumbPage>Amps to Kilowatts</BreadcrumbPage>
                          </BreadcrumbItem>
                        </BreadcrumbList>
                     </Breadcrumb>
      <Card className="bg-white shadow-lg dark:bg-transparent dark:text-white">
        <CardHeader>
          <CardTitle>How to Convert Amps to Kilowatts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">

          {/* Introduction */}
          <p>
            Learn how to convert electric current from amps (A) to electric power in kilowatts (kW). The conversion depends on the voltage and, in the case of AC circuits, the power factor.
          </p>

          {/* DC Formula */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">DC Amps to Kilowatts</h3>
            <p className="mt-2">
              The formula for converting amps to kilowatts in a DC circuit is:
            </p>
            <p className="mt-2">
              <code>kW = A × V / 1000</code>
            </p>
            <p>
              Example: Convert 3A and 110V to kW:
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">kW = 3A × 110V / 1000</p>
                <p className="mt-2">kW = {amps}A × {volts}V / 1000 = {dcKilowatts}kW</p>
              </div>
            </p>
          </div>

          {/* AC Single-phase Formula */}
          <div>
            <h3 className="text-lg font-semibold mt-6">AC Single-Phase Amps to Kilowatts</h3>
            <p className="mt-2">
              The formula for converting amps to kilowatts in a single-phase AC circuit is:
            </p>
            <p className="mt-2">
              <code>kW = PF × A × V / 1000</code>
            </p>
            <p>
              Example: Convert 3A, 110V with a power factor of 0.8 to kW:
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">kW = 0.8 × 3A × 110V / 1000</p>
                <p className="mt-2">kW = {powerFactor} × {amps}A × {volts}V / 1000 = {acSinglePhaseKilowatts}kW</p>
              </div>
            </p>
          </div>

          {/* AC Three-phase Formula */}
          <div>
            <h3 className="text-lg font-semibold mt-6">AC Three-Phase Amps to Kilowatts</h3>
            <p className="mt-2">
              The formula for converting amps to kilowatts in a three-phase AC circuit is:
            </p>
            <p className="mt-2">
              <code>kW = √3 × PF × A × V / 1000</code>
            </p>
            <p>
              Example: Convert 3A, 110V with a power factor of 0.8 to kW for a three-phase system:
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">kW = √3 × 0.8 × 3A × 110V / 1000</p>
                <p className="mt-2">kW = √3 × {powerFactor} × {amps}A × {volts}V / 1000 = {acThreePhaseKilowatts}kW</p>
              </div>
            </p>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert amps to kilowatts, you'll need to know the voltage and, in the case of AC circuits, the power factor. The conversion formula differs based on whether the system is DC, single-phase AC, or three-phase AC.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToKilowattsConverter;