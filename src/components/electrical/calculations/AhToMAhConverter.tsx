import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const AhToMAhConverter: React.FC = () => {
  const [ampHours, setAmpHours] = useState<number>(3); // Default 3Ah

  const calculateMilliAmpHours = (ampHours: number) => {
    return ampHours * 1000;
  };

  const milliAmpHours = calculateMilliAmpHours(ampHours);

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
                    <BreadcrumbPage>Ah to mAh</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
             </Breadcrumb>
      <Card className="bg-white shadow-lg dark:bg-transparent dark:text-white">
        <CardHeader>
          <CardTitle>How to Convert Ah to mAh</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">

          {/* Introduction */}
          <p>
            Converting electric charge from ampere-hours (Ah) to milliampere-hours (mAh) is a simple process that involves multiplying by 1000. This conversion is commonly used when dealing with electric batteries, especially for portable electronics, where milliampere-hours are often a more practical unit.
          </p>

          {/* Formula */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Formula</h3>
            <p className="mt-2">
              To convert from Ah to mAh, use the formula:
            </p>
            <p className="mt-2">
              <code>mAh = Ah × 1000</code>
            </p>
          </div>

          {/* Example 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example 1: Convert 3Ah to mAh</h2>
            <p>
              If you have a charge of 3 amp-hours (Ah), you can calculate the equivalent milliampere-hours (mAh) by multiplying 3 by 1000:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
              <p className="font-semibold">mAh = Ah × 1000</p>
              <p className="mt-2">
                mAh = {ampHours}Ah × 1000 = {milliAmpHours}mAh
              </p>
            </div>
            <p className="mt-2">
              So, an electric charge of {ampHours} amp-hours is equal to {milliAmpHours} milliampere-hours.
            </p>
          </div>

          {/* Example 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example 2: Convert 5Ah to mAh</h2>
            <p>
              If you have a larger battery, say 5 amp-hours (Ah), the conversion to milliampere-hours (mAh) would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
              <p className="font-semibold">mAh = Ah × 1000</p>
              <p className="mt-2">
                mAh = 5Ah × 1000 = 5000mAh
              </p>
            </div>
            <p className="mt-2">
              Thus, a battery with 5 amp-hours of charge holds 5000 milliampere-hours of charge.
            </p>
          </div>

          {/* Example 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example 3: Convert 0.5Ah to mAh</h2>
            <p>
              If your battery charge is only 0.5 amp-hours (Ah), the conversion will be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
              <p className="font-semibold">mAh = Ah × 1000</p>
              <p className="mt-2">
                mAh = 0.5Ah × 1000 = 500mAh
              </p>
            </div>
            <p className="mt-2">
              A battery with 0.5 amp-hours of charge holds 500 milliampere-hours of charge.
            </p>
          </div>

          {/* Example 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example 4: Convert 10Ah to mAh</h2>
            <p>
              For a very large battery, say 10 amp-hours (Ah), the conversion would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
              <p className="font-semibold">mAh = Ah × 1000</p>
              <p className="mt-2">
                mAh = 10Ah × 1000 = 10000mAh
              </p>
            </div>
            <p className="mt-2">
              A 10Ah battery holds 10,000mAh of charge, which is a large amount, typically used for high-capacity devices like power banks or electric vehicles.
            </p>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              The conversion from ampere-hours (Ah) to milliampere-hours (mAh) is as simple as multiplying the value in Ah by 1000. This is a straightforward way to convert between two units of electric charge. Understanding this conversion is particularly helpful when dealing with batteries for devices like smartphones, tablets, and other portable electronics.
            </p>
            <p>
              To summarize:
            </p>
            <ul className="list-disc ml-6">
              <li>1 Ah = 1000 mAh</li>
              <li>5 Ah = 5000 mAh</li>
              <li>0.5 Ah = 500 mAh</li>
              <li>10 Ah = 10000 mAh</li>
            </ul>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AhToMAhConverter;