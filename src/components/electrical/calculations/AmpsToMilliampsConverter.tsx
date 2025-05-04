import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const AmpsToMilliampsConverter: React.FC = () => {
  const [amps, setAmps] = useState<number>(3); // Default 3A

  // Calculate milliamps
  const calculateMilliamps = (amps: number) => {
    return amps * 1000;
  };

  const milliamps = calculateMilliamps(amps);

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
                            <BreadcrumbPage>Amps to Milliamps</BreadcrumbPage>
                          </BreadcrumbItem>
                        </BreadcrumbList>
                     </Breadcrumb>
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Amps to Milliamps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            Learn how to convert electric current from amps (A) to milliamps (mA). The conversion is simple and straightforward using the formula below.
          </p>

          {/* Formula */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Formula</h3>
            <p className="mt-2">
              The current I in milliamps (mA) is equal to the current I in amps (A) times 1000 milliamps per amp:
            </p>
            <p className="mt-2">
              <code>mA = A × 1000</code>
            </p>
          </div>

          {/* Example */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example: Convert 3A to mA</h2>
            <p>
              The current I in milliamps (mA) is equal to 3 amps (A) times 1000 milliamps per amp:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">mA = A × 1000</p>
              <p className="mt-2">
                mA = {amps}A × 1000 = {milliamps}mA
              </p>
            </div>
            <p className="mt-2">
              So, a current of {amps} amps is equal to {milliamps} milliamps.
            </p>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              The conversion from amps (A) to milliamps (mA) is simple: multiply the value in amps by 1000 to get milliamps. This is useful when dealing with smaller units of current, especially in electronic circuits and low-power devices.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToMilliampsConverter;