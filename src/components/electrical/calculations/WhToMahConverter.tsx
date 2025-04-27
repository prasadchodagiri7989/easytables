import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WhToMahConverter: React.FC = () => {
  const [wh, setWh] = useState<number>(10); // Default 10 Wh
  const [voltage, setVoltage] = useState<number>(3.7); // Default 3.7V (common for Li-ion batteries)

  const calculateMah = (wh: number, voltage: number) => {
    return (wh * 1000) / voltage;
  };

  const mah = calculateMah(wh, voltage);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Watt-hours (Wh) to Milliamp-hours (mAh)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">

          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert energy in watt-hours (Wh) to electric charge in milliamp-hours (mAh). 
            This is especially useful for understanding battery capacities and performance.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Wh to mAh Calculation</h3>
            <p className="mt-2">
              To calculate milliamp-hours (mAh), you multiply watt-hours (Wh) by 1000 and then divide by the voltage (V).
            </p>
          </div>

          {/* Wh to mAh Calculation Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The electric charge \( Q \) in milliamp-hours is calculated as the energy \( E \) in watt-hours times 1000, divided by the voltage \( V \) in volts:
            </p>
            <p className="mt-2">
              <code>mAh = (Wh × 1000) ÷ V</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>mAh</strong> = Electric charge (milliamp-hours)</li>
              <li><strong>Wh</strong> = Energy (watt-hours)</li>
              <li><strong>V</strong> = Voltage (volts)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have {wh} Wh of energy and a voltage of {voltage}V. 
              The battery capacity would be:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">mAh = (Wh × 1000) ÷ V</p>
              <p className="mt-2">
                mAh = ({wh} Wh × 1000) ÷ {voltage} V = {mah.toFixed(2)} mAh
              </p>
            </div>
            <p className="mt-2">
              Therefore, {wh} Wh at {voltage}V is equivalent to {mah.toFixed(2)} mAh.
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* A 5 Wh battery at 3.7V:
                <p className="bg-gray-100 p-2">mAh = (5 × 1000) ÷ 3.7 ≈ 1351.35 mAh</p>
              </li>
              <li>
                *Example 2:* A 10 Wh battery at 7.4V:
                <p className="bg-gray-100 p-2">mAh = (10 × 1000) ÷ 7.4 ≈ 1351.35 mAh</p>
              </li>
              <li>
                *Example 3:* A 15 Wh battery at 11.1V:
                <p className="bg-gray-100 p-2">mAh = (15 × 1000) ÷ 11.1 ≈ 1351.35 mAh</p>
              </li>
              <li>
                *Example 4:* A 20 Wh battery at 14.8V:
                <p className="bg-gray-100 p-2">mAh = (20 × 1000) ÷ 14.8 ≈ 1351.35 mAh</p>
              </li>
            </ul>
          </div>

          {/* Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Always make sure you use the correct voltage of the battery when doing this conversion.</li>
              <li>The result gives the theoretical mAh value; real-world performance can vary slightly due to efficiency and temperature.</li>
              <li>This calculation assumes a constant voltage; some batteries have variable voltages during discharge.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              To convert watt-hours (Wh) to milliamp-hours (mAh), simply multiply the watt-hours by 1000 and divide by the voltage.
              This is a crucial conversion for understanding and comparing battery capacities.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WhToMahConverter;
