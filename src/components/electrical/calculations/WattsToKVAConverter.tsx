
import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WattsToKVAConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(1000); // Default 1000 Watts
  const [voltage, setVoltage] = useState<number>(220); // Default voltage 220V
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // Default power factor 0.8

  const calculateKVA = (watts: number, voltage: number, powerFactor: number) => {
    return (watts / (voltage * powerFactor)) / 1000; // Conversion to kVA
  };

  const kVA = calculateKVA(watts, voltage, powerFactor);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Watts (W) to Kilovolt-amperes (kVA)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert electrical power in watts (W) to apparent power in kilovolt-amperes (kVA). This conversion is essential for understanding the apparent power consumed by electrical devices, which is especially important in industrial and commercial electrical systems.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Watts to Kilovolt-amperes Calculation</h3>
            <p className="mt-2">
              To convert watts to kVA, you need to know the voltage and the power factor of the device or system. The formula used is based on the relationship between real power (watts), apparent power (kVA), and power factor.
            </p>
          </div>

          {/* Watts to kVA Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The apparent power \( S \) in kilovolt-amperes (kVA) is calculated as:
            </p>
            <p className="mt-2">
              <code>S = (P / (V × pf)) / 1000</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Watts (P)</strong> = Real power in watts</li>
              <li><strong>Voltage (V)</strong> = Voltage in volts</li>
              <li><strong>Power Factor (pf)</strong> = Power factor of the system (a value between 0 and 1)</li>
              <li><strong>Kilovolt-amperes (kVA)</strong> = Apparent power in kVA</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a device using {watts}W of real power, operating at a voltage of {voltage}V and with a power factor of {powerFactor}. The apparent power in kilovolt-amperes would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">S = (P / (V × pf)) / 1000</p>
              <p className="mt-2">
                S = ({watts} / ({voltage} × {powerFactor})) / 1000 = {kVA} kVA
              </p>
            </div>
            <p className="mt-2">
              Therefore, a device using {watts}W of power, running at {voltage}V with a power factor of {powerFactor}, will have an apparent power of {kVA} kVA.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* A 1000W device running at 220V with a power factor of 0.9:
                <p className="bg-gray-100 p-2">S = (1000 / (220 × 0.9)) / 1000 = 5.06 kVA</p>
              </li>
              <li>
                *Example 2:* A 1500W device running at 110V with a power factor of 0.8:
                <p className="bg-gray-100 p-2">S = (1500 / (110 × 0.8)) / 1000 = 17.05 kVA</p>
              </li>
              <li>
                *Example 3:* A 2000W device running at 480V with a power factor of 0.85:
                <p className="bg-gray-100 p-2">S = (2000 / (480 × 0.85)) / 1000 = 4.92 kVA</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>The power factor (pf) represents the efficiency of the power usage. It is typically less than 1 for most electrical devices, especially inductive loads like motors.</li>
              <li>The formula gives you the apparent power in kVA, which includes both the real power (watts) and reactive power in the system.</li>
              <li>In most cases, electrical equipment will have a power factor close to 1 for efficient operation, but it can vary depending on the type of load.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert watts to kilovolt-amperes (kVA), you need to know the real power (in watts), the voltage (in volts), and the power factor. This conversion is essential for understanding the total apparent power required by electrical devices or systems.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToKVAConverter;
