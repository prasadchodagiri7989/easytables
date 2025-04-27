import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; // Adjust the path to your component library if needed

const VoltsToJoulesConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default voltage value
  const [current, setCurrent] = useState<number>(1); // Default current value
  const [time, setTime] = useState<number>(1); // Default time value (in seconds)

  // Function to calculate energy in Joules
  const calculateEnergyJoules = (volts: number, current: number, time: number): number => {
    return volts * current * time; // Formula to convert volts, current, and time to energy in joules (J)
  };

  const energyJoules = calculateEnergyJoules(volts, current, time);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle>How to Convert Volts to Joules (J)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p>
            In this guide, you'll learn how to convert voltage in volts (V), current in amperes (A), and time in seconds (s) to energy in joules (J). This is essential for calculating energy usage in electrical circuits.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Volts to Joules Calculation</h3>
            <p className="mt-2">
              The energy (E) in joules is calculated using the formula:
            </p>
          </div>

          {/* Volts to Joules Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The energy in joules <span className="font-semibold">E(J)</span> is calculated as:
            </p>
            <p className="mt-2">
              <code>E(J) = V × I × t</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Voltage (V)</strong> = Voltage in volts</li>
              <li><strong>Current (I)</strong> = Current in amperes (A)</li>
              <li><strong>Time (t)</strong> = Time in seconds (s)</li>
              <li><strong>Energy (E)</strong> = Energy in joules (J)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have a voltage of {volts}V, a current of {current}A, and a time of {time} seconds. To convert this to energy in joules:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-semibold">E(J) = V × I × t</p>
              <p className="mt-2">
                E(J) = {volts}V × {current}A × {time}s = {energyJoules} J
              </p>
            </div>
            <p className="mt-2">
              Therefore, with {volts}V, {current}A, and {time}s, the energy is {energyJoules} joules (J).
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For a voltage of 1V, a current of 1A, and a time of 1 second:
                <p className="bg-gray-100 p-2">E(J) = 1V × 1A × 1s = 1 J</p>
              </li>
              <li>
                *Example 2:* For a voltage of 120V, a current of 10A, and a time of 2 seconds:
                <p className="bg-gray-100 p-2">E(J) = 120V × 10A × 2s = 2400 J</p>
              </li>
              <li>
                *Example 3:* For a voltage of 240V, a current of 5A, and a time of 0.5 seconds:
                <p className="bg-gray-100 p-2">E(J) = 240V × 5A × 0.5s = 600 J</p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Ensure that voltage is in volts (V), current is in amperes (A), and time is in seconds (s) when performing the calculation.</li>
              <li>Energy in joules is commonly used to measure electrical energy usage or the energy stored in systems.</li>
              <li>Joules are the standard SI unit of energy and are used in various scientific and engineering fields.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Converting voltage, current, and time into energy in joules is crucial for understanding energy usage in electrical systems. Simply multiply the voltage, current, and time to calculate the energy in joules.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToJoulesConverter;
