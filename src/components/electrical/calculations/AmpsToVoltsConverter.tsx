import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const AmpsToVoltsConverter: React.FC = () => {
  const [amps, setAmps] = useState<number>(3); // Default 3A
  const [watts, setWatts] = useState<number>(45); // Default power 45W
  const [resistance, setResistance] = useState<number>(10); // Default resistance 10Ω

  const calculateVoltsWithWatts = (watts: number, amps: number) => {
    if (amps === 0) {
      return Infinity; // Avoid division by zero
    }
    return watts / amps;
  };

  const calculateVoltsWithOhms = (amps: number, resistance: number) => {
    return amps * resistance;
  };

  const voltsWithWatts = calculateVoltsWithWatts(watts, amps);
  const voltsWithOhms = calculateVoltsWithOhms(amps, resistance);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Breadcrumb className="mb-6">
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
            <BreadcrumbPage>Amps to Volts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-white shadow-lg dark:bg-transparent dark:text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold tracking-tight">Understanding the Conversion: Amps to Volts (V)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 text-sm text-gray-700 leading-relaxed dark:text-white">

          {/* Introduction: The Significance of Voltage in Electrical Circuits */}
          <div>
            <p className="leading-relaxed">
              In the study and application of electricity, voltage stands as a fundamental concept, representing the electrical potential difference that drives the flow of current. Converting between different electrical units is a common task for electricians, engineers, and anyone working with electrical systems. This guide focuses on the conversion from amperes (amps), the unit of electrical current, to volts (V), the unit of electrical potential difference. It's important to understand that this conversion isn't direct and requires additional information about the circuit, specifically either the power in watts or the resistance in ohms. We will explore both methods in detail, providing clear explanations and illustrative examples.
            </p>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* The Fundamental Electrical Quantities: Amps, Volts, and Watts */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">Understanding Key Electrical Units</h2>
            <p className="leading-relaxed">
              To effectively convert amps to volts, it's crucial to have a solid understanding of the basic electrical quantities involved:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong className="font-medium">Amps (A):</strong> Amperes measure the rate at which electrical charge flows through a conductor. One amp is defined as one coulomb of charge passing a point in one second. In simpler terms, it's the "volume" of electricity flowing.
              </li>
              <li>
                <strong className="font-medium">Volts (V):</strong> Volts measure the electrical potential difference, or the "pressure," that pushes the electrical current through a circuit. A higher voltage means a greater force driving the electrons.
              </li>
              <li>
                <strong className="font-medium">Watts (W):</strong> Watts measure the rate at which electrical energy is transferred or used. It's the "power" consumed by a device. The relationship between power, voltage, and current is fundamental: \( P = V \times I \), where \( P \) is power in watts, \( V \) is voltage in volts, and \( I \) is current in amps.
              </li>
              <li>
                <strong className="font-medium">Ohms (Ω):</strong> Ohms measure electrical resistance, which is the opposition to the flow of current in a circuit. Components like resistors are designed to provide a specific amount of resistance. Ohm's Law describes the relationship between voltage, current, and resistance: \( V = I \times R \), where \( R \) is resistance in ohms.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              The conversion from amps to volts necessitates leveraging these fundamental relationships, either through the power equation or Ohm's Law.
            </p>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Method 1: Converting Amps to Volts Using Watts (Power) */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">Amps to Volts Conversion via Power</h2>
            <p className="leading-relaxed">
              If you know the power \( P \) in watts and the current \( I \) in amps flowing through a component or circuit, you can calculate the voltage \( V \) in volts using the power formula rearranged to solve for voltage:
            </p>
            <p>
              <code>V = W / A</code>
            </p>
            <p className="mt-3 leading-relaxed">
              This formula is derived directly from the power equation \( P = V \times I \). By dividing both sides of the equation by the current \( I \), we isolate the voltage \( V \).
            </p>
            <p className="mt-3 leading-relaxed">
              Consider our initial example: if a device consumes {watts}W of power and draws a current of {amps}A, the voltage across the device can be calculated as:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
              <p className="font-semibold tracking-tight">Voltage (V) = Power (W) / Current (A)</p>
              <p className="mt-2">
                V = {watts}W / {amps}A = {voltsWithWatts}V
              </p>
            </div>
            <p className="mt-3 leading-relaxed">
              Therefore, the voltage in this scenario is {voltsWithWatts}V. This calculation is particularly useful when dealing with appliances or devices where the power rating and current draw are typically provided.
            </p>
            <p className="mt-3 leading-relaxed">
              For instance, if a light bulb is rated at 60 watts and draws 0.5 amps of current, the voltage at which it operates is \( V = 60W / 0.5A = 120V \). This aligns with standard household voltage in many regions.
            </p>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Method 2: Converting Amps to Volts Using Ohms (Resistance) */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">Amps to Volts Conversion via Resistance (Ohm's Law)</h2>
            <p className="leading-relaxed">
              Another way to determine voltage from current is by using Ohm's Law, which states that the voltage \( V \) across a resistor is directly proportional to the current \( I \) flowing through it and the resistance \( R \) of the resistor. The formula is:
            </p>
            <p>
              <code>V = A × Ω</code>
            </p>
            <p className="mt-3 leading-relaxed">
              This law is fundamental to the analysis of electrical circuits. If you know the current passing through a component with a known resistance, you can easily calculate the voltage drop across that component.
            </p>
            <p className="mt-3 leading-relaxed">
              Using our default values, if a current of {amps}A flows through a resistor with a resistance of {resistance}Ω, the voltage drop across the resistor is:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
              <p className="font-semibold tracking-tight">Voltage (V) = Current (A) × Resistance (Ω)</p>
              <p className="mt-2">
                V = {amps}A × {resistance}Ω = {voltsWithOhms}V
              </p>
            </div>
            <p className="mt-3 leading-relaxed">
              In this case, the voltage across the resistor is {voltsWithOhms}V. This method is particularly useful when analyzing circuits containing resistors or components with a known impedance (in AC circuits, impedance is the AC equivalent of resistance).
            </p>
            <p className="mt-3 leading-relaxed">
              For example, if a heating element in a toaster has a resistance of 20 ohms and draws a current of 5 amps, the voltage across the heating element is \( V = 5A \times 20Ω = 100V \).
            </p>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Practical Scenarios and Applications */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">Real-World Applications of Amps to Volts Conversion</h2>
            <p className="leading-relaxed">
              The ability to convert amps to volts is essential in various electrical and electronic contexts:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong className="font-medium">Circuit Design and Analysis:</strong> Engineers frequently use these conversions to determine voltage drops across components, ensure proper biasing of transistors, and analyze the behavior of complex circuits.
              </li>
              <li>
                <strong className="font-medium">Troubleshooting Electrical Systems:</strong> When diagnosing electrical faults, technicians might measure current and, knowing the resistance of a component, calculate the expected voltage to identify discrepancies.
              </li>
              <li>
                <strong className="font-medium">Power Supply Design:</strong> Designing power supplies involves ensuring that the output voltage is stable under varying current loads. Understanding the relationship between current, voltage, and the internal resistance of the supply is crucial.
              </li>
              <li>
                <strong className="font-medium">Sensor Interfacing:</strong> Many sensors output a current signal proportional to a physical quantity. To interface these sensors with microcontrollers or data acquisition systems, the current signal is often converted to a voltage signal using a known resistance (a "sense resistor").
              </li>
              <li>
                <strong className="font-medium">Electrical Safety:</strong> Understanding the voltage levels in a circuit based on current and resistance or power consumption is vital for ensuring electrical safety and preventing shocks.
              </li>
            </ul>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Further Examples to Enhance Comprehension */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">More Illustrative Examples</h2>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                <strong className="font-medium">Example 3 (Using Watts):</strong> A small electronic device is rated at 15 watts and draws 1.25 amps. The operating voltage is:
                <p className="bg-gray-100 p-2 dark:text-black mt-1">V = 15W / 1.25A = 12V</p>
                <p className="mt-1 leading-relaxed">This indicates the device is designed to operate on a 12V power supply.</p>
              </li>
              <li>
                <strong className="font-medium">Example 4 (Using Ohms):</strong> A current of 0.5 amps flows through a 100-ohm resistor. The voltage drop across the resistor is:
                <p className="bg-gray-100 p-2 dark:text-black mt-1">V = 0.5A × 100Ω = 50V</p>
                <p className="mt-1 leading-relaxed">This shows the potential difference across the resistor.</p>
              </li>
              <li>
                <strong className="font-medium">Example 5 (Using Watts):</strong> A high-power LED consumes 30 watts and draws 3.75 amps. The forward voltage of the LED is:
                <p className="bg-gray-100 p-2 dark:text-black mt-1">V = 30W / 3.75A = 8V</p>
                <p className="mt-1 leading-relaxed">This is an important parameter for driving the LED correctly.</p>
              </li>
              <li>
                <strong className="font-medium">Example 6 (Using Ohms):</strong> A heating coil with a resistance of 50 ohms draws a current of 4 amps. The voltage across the coil is:
                <p className="bg-gray-100 p-2 dark:text-black mt-1">V = 4A × 50Ω = 200V</p>
                <p className="mt-1 leading-relaxed">This voltage is necessary to produce the required heat.</p>
              </li>
            </ul>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Conclusion: The Interplay of Electrical Quantities */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">Concluding Thoughts on Amps to Volts Conversion</h2>
            <p className="leading-relaxed">
              Converting amps to volts is not a direct process but rather a calculation that relies on knowing either the power in watts or the resistance in ohms within the electrical circuit or component under consideration. The fundamental relationships described by the power equation (\( P = V \times I \)) and Ohm's Law (\( V = I \times R \)) provide the necessary tools for these conversions.
            </p>
            <p className="mt-3 leading-relaxed">
              Understanding these conversions is crucial for anyone involved in electrical work, from basic circuit analysis to complex system design and troubleshooting. By grasping the interplay between current, voltage, power, and resistance, one can effectively analyze and manipulate electrical circuits for a wide range of applications while ensuring safety and efficiency.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToVoltsConverter;