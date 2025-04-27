import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WattsToVAConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(1000); // Default 1000 Watts
  const [voltage, setVoltage] = useState<number>(220); // Default voltage 220V
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // Default power factor 0.8

  const calculateVA = (watts: number, voltage: number, powerFactor: number) => {
    return watts / powerFactor; // Conversion to VA
  };

  const va = calculateVA(watts, voltage, powerFactor);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Watts (W) to Volt-amperes (VA)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert electrical power in watts (W) to apparent power in volt-amperes (VA). This conversion is important when dealing with alternating current (AC) systems, as VA represents the total power used in the system, including both active and reactive power.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Watts to Volt-amperes Calculation</h3>
            <p className="mt-2">
              To convert watts to VA, you need to know the power factor of the device or system. The formula used is based on the relationship between real power (watts) and apparent power (volt-amperes).
            </p>
          </div>

          {/* Watts to VA Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The apparent power \( S \) in volt-amperes (VA) is calculated as:
            </p>
            <p className="mt-2">
              <code>S = P / pf</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Watts (P)</strong> = Real power in watts</li>
              <li><strong>Power Factor (pf)</strong> = Power factor of the system (a value between 0 and 1)</li>
              <li><strong>Volt-amperes (VA)</strong> = Apparent power in VA</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a device using {watts}W of real power with a power factor of {powerFactor}. The apparent power in volt-amperes would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">S = P / pf</p>
              <p className="mt-2">
                S = {watts}W / {powerFactor} = {va} VA
              </p>
            </div>
            <p className="mt-2">
              Therefore, a device using {watts}W of power with a power factor of {powerFactor} will have an apparent power of {va} VA.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* A 1000W device with a power factor of 0.9:
                <p className="bg-gray-100 p-2">S = 1000W / 0.9 = 1111.11 VA</p>
              </li>
              <li>
                *Example 2:* A 1500W device with a power factor of 0.8:
                <p className="bg-gray-100 p-2">S = 1500W / 0.8 = 1875 VA</p>
              </li>
              <li>
                *Example 3:* A 2000W device with a power factor of 0.85:
                <p className="bg-gray-100 p-2">S = 2000W / 0.85 = 2352.94 VA</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>The power factor (pf) represents the efficiency of the power usage. It is typically less than 1 for most electrical devices, especially inductive loads like motors.</li>
              <li>The formula gives you the apparent power in VA, which is the total power in the system, including both real power and reactive power.</li>
              <li>The power factor typically varies between 0 and 1, with 1 representing a purely resistive load where all the supplied power is used effectively.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert watts to volt-amperes (VA), you need to know the real power (in watts) and the power factor. This conversion helps in understanding the total apparent power needed in an electrical system, especially in AC circuits where reactive power plays a role.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToVAConverter;
