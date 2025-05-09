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
            <BreadcrumbPage>Amps to VA</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-white shadow-lg dark:bg-transparent dark:text-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold tracking-tight">Understanding the Conversion: Amps to Volt-Amps (VA)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 text-sm text-gray-700 leading-relaxed dark:text-white">

          {/* Introduction: The Nuances of Electrical Measurement */}
          <div>
            <p className="leading-relaxed">
              In the realm of electrical engineering and practical applications, understanding the relationship between different electrical units is paramount. While seemingly straightforward, the conversion between amps (A), the unit of electrical current, and volt-amps (VA), the unit of apparent power, requires a clear grasp of the underlying concepts. It's crucial to recognize that amps and volt-amps represent distinct aspects of electrical power, and a direct conversion without considering voltage is not feasible. This guide aims to illuminate the process of converting amps to VA, providing detailed explanations and practical examples for both single-phase and three-phase electrical systems.
            </p>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* The Fundamental Difference: Current vs. Apparent Power */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">Deciphering Amps and Volt-Amps</h2>
            <p className="leading-relaxed">
              Before delving into the conversion process, it's essential to differentiate between electrical current and apparent power.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong className="font-medium">Amps (A):</strong> Amperes measure the rate of flow of electrical charge. Think of it as the volume of water flowing through a pipe per unit of time. A higher amperage indicates a greater amount of electrical charge moving through a circuit.
              </li>
              <li>
                <strong className="font-medium">Volts (V):</strong> Volts measure the electrical potential difference or pressure that drives the current. Analogous to water pressure in a pipe, voltage is the force that pushes the electrons through the conductor.
              </li>
              <li>
                <strong className="font-medium">Volt-Amps (VA):</strong> Volt-amps represent the apparent power in an AC (alternating current) circuit. It is the product of the RMS (root mean square) voltage and the RMS current. Apparent power is particularly important in AC circuits because the voltage and current waveforms may not be perfectly in phase due to the presence of reactive components like inductors and capacitors.
              </li>
              <li>
                <strong className="font-medium">Watts (W):</strong> Watts, in contrast to volt-amps, measure the real or active power, which is the actual power consumed by the load and converted into another form of energy, such as heat or mechanical work. In purely resistive circuits, VA is equal to Watts. However, in circuits with reactive components, VA is greater than Watts, and the difference is accounted for by the power factor.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Therefore, to convert amps to volt-amps, you invariably need to know the voltage of the electrical system. The relationship is multiplicative, as we will explore further.
            </p>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* The Core Formula: Amps and Volts to VA */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3 tracking-tight">The Basic Relationship</h3>
            <p className="mt-2 leading-relaxed">
              The fundamental formula linking amps, volts, and volt-amps is:
            </p>
            <p className="mt-2">
              <code>Apparent Power (VA) = Current (A) × Voltage (V)</code>
            </p>
            <p className="mt-3 leading-relaxed">
              This simple equation forms the basis for calculating the apparent power in electrical circuits. However, the application of this formula differs slightly between single-phase and three-phase systems.
            </p>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Single-Phase Systems: A Detailed Look */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">Single-Phase Amps to VA: Direct Multiplication</h2>
            <p className="leading-relaxed">
              In a single-phase AC circuit, there is a single sinusoidal voltage waveform. The apparent power is calculated by directly multiplying the RMS current flowing through the circuit by the RMS voltage across it.
            </p>
            <p className="leading-relaxed">
              The formula remains:
            </p>
            <p>
              <code>S(VA) = I(A) × V(V)</code>
            </p>
            <p className="mt-3 leading-relaxed">
              Let's revisit our initial example with more context. If a device draws a current of {amps}A when connected to a single-phase power supply of {voltage}V, the apparent power consumed by the device is:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
              <p className="font-semibold tracking-tight">Apparent Power (S) = Current (I) × Voltage (V)</p>
              <p className="mt-2">
                S = {amps}A × {voltage}V = {va}VA
              </p>
            </div>
            <p className="mt-3 leading-relaxed">
              This {va}VA represents the total apparent power that the power source must be capable of supplying to this device. It's a crucial value for sizing transformers, generators, and wiring in single-phase electrical installations.
            </p>
            <p className="mt-3 leading-relaxed">
              Consider another scenario: a household appliance rated at 5 amps operating on a 230V single-phase supply. The apparent power would be 5A × 230V = 1150VA. This tells us the apparent power demand of the appliance.
            </p>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Three-Phase Systems: Incorporating the √3 Factor */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">Three-Phase Amps to VA: The Influence of Phase Difference</h2>
            <p className="leading-relaxed">
              Three-phase electrical systems are commonly used for industrial and high-power applications due to their efficiency in delivering power. In a three-phase system, there are three AC voltage waveforms that are offset by 120 electrical degrees. This phase difference affects the calculation of apparent power.
            </p>
            <p className="leading-relaxed">
              The formula for calculating the total apparent power (S) in a balanced three-phase system is:
            </p>
            <p>
              <code>S(VA) = √3 × I<sub>line</sub>(A) × V<sub>line-line</sub>(V)</code>
            </p>
            <p className="mt-3 leading-relaxed">
              Where:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <code>√3</code> (approximately 1.732) is the square root of 3, a factor that arises from the phase relationships in a three-phase system.
              </li>
              <li>
                <code>I<sub>line</sub>(A)</code> is the line current, which is the current flowing through each of the three conductors.
              </li>
              <li>
                <code>V<sub>line-line</sub>(V)</code> is the line-to-line voltage, which is the voltage measured between any two of the three conductors.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Using the provided default values, if a three-phase load has a line current of {phaseCurrent}A and the line-to-line voltage is {lineVoltage}V, the total apparent power is:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
              <p className="font-semibold tracking-tight">Apparent Power (S) = √3 × Line Current (I<sub>line</sub>) × Line-to-Line Voltage (V<sub>line-line</sub>)</p>
              <p className="mt-2">
                S = √3 × {phaseCurrent}A × {lineVoltage}V = {threePhaseVA.toFixed(2)}VA
              </p>
            </div>
            <p className="mt-3 leading-relaxed">
              This {threePhaseVA.toFixed(2)}VA represents the total apparent power supplied to the three-phase load. It's crucial for selecting appropriate circuit breakers, cables, and power generation equipment for three-phase installations.
            </p>
            <p className="mt-3 leading-relaxed">
              It's important to note that in some three-phase configurations (like delta or wye), the relationship between line current and phase current, and line-to-line voltage and phase voltage, can differ. However, the formula using line current and line-to-line voltage provides the total apparent power regardless of the specific configuration of a balanced three-phase system.
            </p>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Practical Applications and Considerations */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">Real-World Relevance of Amps to VA Conversion</h2>
            <p className="leading-relaxed">
              Understanding how to convert amps to VA is essential in various electrical applications:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong className="font-medium">Load Sizing:</strong> When planning electrical installations, it's crucial to determine the total apparent power demand of all connected devices to ensure the power supply (e.g., transformer, generator) is adequately sized. Overloading the power supply can lead to overheating, voltage drops, and potential equipment damage.
              </li>
              <li>
                <strong className="font-medium">Circuit Protection:</strong> Circuit breakers and fuses are rated in amps, but the overall load they protect needs to be considered in terms of apparent power to ensure the entire system operates safely within its limits.
              </li>
              <li>
                <strong className="font-medium">Power Factor Correction:</strong> In AC circuits with inductive loads (like motors) or capacitive loads, the current and voltage waveforms are out of phase. This is quantified by the power factor (PF), which is the ratio of real power (Watts) to apparent power (VA) (PF = W / VA). A low power factor means a larger apparent power is required to deliver the same amount of real power, leading to increased energy losses and higher utility bills. Power factor correction techniques aim to bring the power factor closer to 1, reducing the apparent power demand.
              </li>
              <li>
                <strong className="font-medium">Equipment Selection:</strong> When choosing electrical equipment like UPS (Uninterruptible Power Supplies) or inverters, their capacity is often specified in VA. It's important to calculate the total apparent power of the connected loads to select a device with sufficient capacity.
              </li>
              <li>
                <strong className="font-medium">Troubleshooting:</strong> In electrical troubleshooting, understanding the relationship between amps, volts, and VA can help identify issues such as overloads or inefficiencies in the system.
              </li>
            </ul>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Further Examples to Solidify Understanding */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">Expanding on Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-4">
              <li>
                <strong className="font-medium">Example 3:</strong> A small office has several computers and peripherals that collectively draw 8 amps from a 230V single-phase circuit. The total apparent power demand is:
                <p className="bg-gray-100 p-2 dark:text-black mt-1">S(VA) = 8A × 230V = 1840VA</p>
                <p className="mt-1 leading-relaxed">This information is vital for ensuring the office's electrical panel and wiring can handle the load.</p>
              </li>
              <li>
                <strong className="font-medium">Example 4:</strong> An industrial motor operating on a 480V three-phase system draws a line current of 15A. The apparent power consumed by the motor is:
                <p className="bg-gray-100 p-2 dark:text-black mt-1">S(VA) = √3 × 15A × 480V ≈ 12470.6VA</p>
                <p className="mt-1 leading-relaxed">This value is crucial for selecting appropriate motor starters and power distribution equipment.</p>
              </li>
              <li>
                <strong className="font-medium">Example 5:</strong> A UPS system is rated at 3000VA. If the connected equipment operates at 120V, the maximum current the UPS can supply is:
                <p className="bg-gray-100 p-2 dark:text-black mt-1">I(A) = S(VA) / V(V) = 3000VA / 120V = 25A</p>
                <p className="mt-1 leading-relaxed">This helps in determining how many devices can be safely powered by the UPS.</p>
              </li>
              <li>
                <strong className="font-medium">Example 6:</strong> A large air conditioning unit in a commercial building operates on a 208V three-phase system and has an apparent power consumption of 10kVA (10000VA). To find the line current drawn by the unit:
                <p className="bg-gray-100 p-2 dark:text-black mt-1">I(A) = S(VA) / (√3 × V<sub>line-line</sub>) = 10000VA / (√3 × 208V) ≈ 27.76A</p>
                <p className="mt-1 leading-relaxed">This current value is important for selecting the correct circuit breaker for the AC unit.</p>
              </li>
            </ul>
          </div>
          <hr className="border-gray-300 dark:border-gray-600" />

          {/* Conclusion: A Foundational Concept in Electrical Systems */}
          <div>
            <h2 className="text-lg font-semibold mb-3 tracking-tight">Final Thoughts on Amps to VA Conversion</h2>
            <p className="leading-relaxed">
              The conversion of amps to volt-amps, while seemingly simple, is a fundamental concept in understanding and working with electrical systems. It highlights the crucial role of voltage in determining the apparent power and underscores the differences between single-phase and three-phase power distribution.
            </p>
            <p className="mt-3 leading-relaxed">
              By accurately calculating the apparent power requirements of electrical loads, engineers, electricians, and even homeowners can make informed decisions about circuit design, equipment selection, and overall electrical safety and efficiency. Remember that while amps measure the flow of electrical charge, volt-amps represent the apparent power that the electrical system must handle, a key factor in ensuring reliable and safe operation.
            </p>
          </div>

          </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToVAConverter;