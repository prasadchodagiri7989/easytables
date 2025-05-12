import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const KilowattsToAmpsConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);
  const [voltage, setVoltage] = useState<number>(0);
  const [powerFactor, setPowerFactor] = useState<number>(1);
  const [current, setCurrent] = useState<number | string>('—');
  const [phaseType, setPhaseType] = useState<'DC' | 'AC Single Phase' | 'AC Three Phase'>('DC');

  const convertToAmpsDC = (power: number, voltage: number) => voltage === 0 ? "Voltage cannot be zero" : (1000 * power / voltage).toFixed(3);
  const convertToAmpsACSinglePhase = (power: number, voltage: number, powerFactor: number) => (voltage === 0 || powerFactor === 0) ? "Invalid input" : (1000 * power / (powerFactor * voltage)).toFixed(3);
  const convertToAmpsACThreePhase = (power: number, voltage: number, powerFactor: number) => (voltage === 0 || powerFactor === 0) ? "Invalid input" : (1000 * power / (Math.sqrt(3) * powerFactor * voltage)).toFixed(3);

  const handleConvert = () => {
    let result: string | number = 0;
    if (phaseType === 'DC') {
      result = convertToAmpsDC(power, voltage);
    } else if (phaseType === 'AC Single Phase') {
      result = convertToAmpsACSinglePhase(power, voltage, powerFactor);
    } else {
      result = convertToAmpsACThreePhase(power, voltage, powerFactor);
    }
    setCurrent(result);
  };

  const examples = [
    { power: 0.33, voltage: 110, powerFactor: 1, expectedResult: 3, description: 'DC Example: 0.33 kW, 110 V', phaseType: 'DC' },
    { power: 0.33, voltage: 110, powerFactor: 0.8, expectedResult: 3.75, description: 'AC Single Phase Example: 0.33 kW, 110 V, PF 0.8', phaseType: 'AC Single Phase' },
    { power: 0.33, voltage: 110, powerFactor: 0.8, expectedResult: 2.165, description: 'AC Three Phase Example: 0.33 kW, 110 V, PF 0.8', phaseType: 'AC Three Phase' }
  ];

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
            <BreadcrumbPage>Kilowatts to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Kilowatts to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert power in kilowatts (kW) to current in amps (A) by selecting the phase type and entering voltage and power factor if needed.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power (kW):</label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Voltage (V):</label>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Phase Type:</label>
              <select
                value={phaseType}
                onChange={(e) => setPhaseType(e.target.value as any)}
                className="w-full border px-3 py-2 rounded dark:text-black"
              >
                <option value="DC">DC</option>
                <option value="AC Single Phase">AC Single Phase</option>
                <option value="AC Three Phase">AC Three Phase</option>
              </select>
            </div>

            {phaseType !== 'DC' && (
              <div>
                <label className="block font-medium mb-1">Power Factor:</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={powerFactor}
                  onChange={(e) => setPowerFactor(Number(e.target.value))}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            )}

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{current} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((ex, i) => (
                  <li key={i}>
                    <p><strong>{ex.description}</strong></p>
                    <p>Power: {ex.power} kW, Voltage: {ex.voltage} V, PF: {ex.powerFactor ?? 'N/A'}</p>
                    <p>Expected Current: {ex.expectedResult} A</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formulas:</h2>
              <p>
                <strong>DC:</strong> I = 1000 × kW / V<br />
                <strong>AC Single Phase:</strong> I = 1000 × kW / (PF × V)<br />
                <strong>AC Three Phase:</strong> I = 1000 × kW / (√3 × PF × V)
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>I</strong>: Current in amps</li>
                <li><strong>kW</strong>: Power in kilowatts</li>
                <li><strong>V</strong>: Voltage in volts</li>
                <li><strong>PF</strong>: Power factor</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatts to amps depends on whether the current is DC or AC and, in the case of AC, whether it’s single-phase or three-phase.
                The formulas account for the differences in how power is delivered in each case.
              </p>
            </div>
          </div>
          {/* Extra Content Section: About Kilowatts to Amps Conversion */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Conversion from Kilowatts (kW) to Amps (A)</h2>
            <p>
              The conversion from **Kilowatts (kW)** to **Amperes (A)** is a crucial calculation in electrical systems. Kilowatts represent the power consumed or produced by a device, while amperes (or amps) measure the electric current. Knowing how to convert between these two helps in sizing electrical components like wires, circuit breakers, and transformers.
            </p>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">What is a Kilowatt (kW)?</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Kilowatt (kW)** is a unit of power equal to 1,000 watts. It is widely used to express the output power of engines, electrical devices, and heating systems.
              </li>
              <li>
                **Formula**: 1 kW = 1,000 Watts = Voltage (V) × Current (A) × Power Factor (pf)
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">What is an Ampere (A)?</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Ampere (A)**, or amp, is the unit of electric current in the International System of Units (SI). It represents the amount of electric charge passing a point in a circuit per second.
              </li>
              <li>
                1 Amp = 1 Coulomb per second.
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">Conversion Formula</h3>
            <p>
              To convert kilowatts to amps, the formula varies depending on the type of electrical system:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Single-phase AC**: Amps = (kW × 1000) / (Voltage × Power Factor)
              </li>
              <li>
                **Three-phase AC**: Amps = (kW × 1000) / (√3 × Voltage × Power Factor)
              </li>
              <li>
                **DC**: Amps = (kW × 1000) / Voltage
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">Power Factor Consideration</h3>
            <p>
              In AC circuits, the **power factor (pf)** plays an important role in the conversion. It accounts for the phase difference between voltage and current. If not specified, a typical default value of 0.8 is often used for general calculations.
            </p>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">Example Calculations</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                **Example 1** (Single-phase): Convert 5 kW at 230V with pf = 0.9  
                <br />
                Amps = (5 × 1000) / (230 × 0.9) ≈ 24.15 A
              </li>
              <li>
                **Example 2** (Three-phase): Convert 10 kW at 400V with pf = 0.8  
                <br />
                Amps = (10 × 1000) / (√3 × 400 × 0.8) ≈ 18.04 A
              </li>
              <li>
                **Example 3** (DC): Convert 2 kW at 120V  
                <br />
                Amps = (2 × 1000) / 120 ≈ 16.67 A
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">Why This Conversion Matters</h3>
            <p>
              Accurate conversion from kW to Amps helps in selecting the correct wire size, circuit breaker rating, and ensuring system safety. It’s also useful for load balancing in power distribution and for estimating electricity usage based on appliance ratings.
            </p>
            <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Advanced Concepts in Kilowatt to Amp Conversion</h2>
  <p>
    While the basic conversion from kilowatts (kW) to amperes (A) involves voltage and power factor, there are some additional factors and advanced concepts that should be considered when performing this conversion. For example, considering the electrical load, temperature variations, and conductor types can all influence the calculations and the selection of electrical components.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Electrical Load and Its Impact</h3>
  <p>
    The electrical load refers to the amount of power (in kilowatts) consumed by devices in an electrical system. The total load on a system must be carefully managed to avoid overloading circuits and to ensure that all components (wires, switches, transformers) are appropriately rated. In systems with varying loads, it may be necessary to adjust the power factor or even to use equipment like power factor correction capacitors to optimize the system’s efficiency.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Temperature Considerations</h3>
  <p>
    Temperature can affect the current-carrying capacity of electrical conductors. As the temperature increases, the resistance of wires and cables typically increases, which in turn can reduce the amount of current that can safely flow through them. For example, in high-temperature environments, conductors may need to be oversized to prevent overheating. This is why temperature ratings for wires and circuit breakers are critical in design and installation.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Conductor Type and Size</h3>
  <p>
    The type and size of the conductor (cable or wire) used in the circuit significantly affect the current capacity. Copper and aluminum are the most common materials used for electrical conductors, and their capacity to carry current is determined by their gauge (thickness). Smaller gauges may overheat under high current loads, while larger gauges can safely carry more current. Additionally, different insulation types can affect how much current a conductor can handle.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Safety Considerations</h3>
  <p>
    When converting kilowatts to amperes and designing electrical systems, safety must always be a priority. Always ensure that the current drawn by electrical devices does not exceed the rating of the wires, circuit breakers, or fuses in place. Proper grounding and short-circuit protection are essential for preventing electrical fires or equipment damage. It's also important to regularly inspect and maintain electrical installations to avoid deterioration or failure due to aging or environmental factors.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Common Mistakes in Conversion Calculations</h3>
  <p>
    A few common mistakes can lead to incorrect results in the kilowatt to amp conversion. Some of these include:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>**Forgetting to include the power factor (PF)**: In AC circuits, omitting the PF can lead to inaccurate results. Always ensure the PF is included, particularly in systems where the load is not purely resistive.</li>
    <li>**Misunderstanding of AC phase types**: Using the wrong formula for single-phase versus three-phase AC can lead to significant errors. Be sure to differentiate between these systems correctly.</li>
    <li>**Using incorrect voltage values**: Voltage values can fluctuate, and using nominal values can sometimes lead to errors. Always ensure you’re using the actual operating voltage for the system.</li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Additional Resources for Electrical Calculations</h3>
  <p>
    For those who wish to learn more about electrical calculations and power systems, there are many additional resources available. Some valuable topics include:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li><strong>Power Factor Correction:</strong> Learn how to optimize the efficiency of AC power systems by correcting the power factor to avoid inefficiencies in energy use.</li>
    <li><strong>Wire Sizing and Overcurrent Protection:</strong> Understand the basics of wire sizing based on current, voltage, and environment, as well as the importance of circuit breakers and fuses for system protection.</li>
    <li><strong>Advanced Electrical Load Analysis:</strong> Explore the complexities of electrical load forecasting and how to balance loads across multiple circuits to prevent system overloads.</li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Industry Standards and Codes</h3>
  <p>
    Electrical systems are designed and maintained according to strict safety codes and standards. These standards, such as the National Electrical Code (NEC) in the United States, provide guidelines for electrical installations, including wire sizing, grounding, overcurrent protection, and other factors that affect the safety and efficiency of electrical systems. Always ensure that any electrical work is compliant with local regulations and industry standards.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">In Summary</h3>
  <p>
    Converting kilowatts to amperes is an essential skill for anyone working with electrical systems. Whether you are designing a new installation, maintaining an existing system, or simply troubleshooting, understanding how to convert these units accurately can prevent costly mistakes and ensure safety. In addition to the basic conversion formulas, consider the environmental factors and system parameters that can influence your calculations. Proper design, installation, and maintenance, backed by accurate calculations, will help ensure the efficiency and safety of your electrical systems.
  </p>

</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Conversion from Kilowatts (kW) to Amps (A)</h2>
  <p>
    The conversion from **Kilowatts (kW)** to **Amperes (A)** is essential in electrical engineering and helps in determining the current that flows through electrical components in a circuit. In power systems, understanding how much current will be drawn is vital for ensuring that wires, circuit breakers, and other equipment are appropriately sized.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">The Role of Kilowatts (kW) in Electrical Systems</h3>
  <p>
    **Kilowatts (kW)** measure the rate of energy consumption or generation. It represents how much power is used per unit of time. For example, an electric motor rated at 1 kW will consume 1,000 watts of power every hour. The **Kilowatt (kW)** is used to rate the power of electrical devices, such as heaters, air conditioners, motors, and generators.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Why Voltage and Power Factor Matter</h3>
  <p>
    When performing the conversion, the **voltage (V)** and **power factor (pf)** significantly impact the results. Voltage refers to the electrical potential that drives current through a circuit, and a higher voltage results in a higher current for the same power. The **power factor (pf)** is crucial in AC circuits because it reflects the phase difference between voltage and current. The closer the power factor is to 1, the more efficiently power is being used. 
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">How Does AC vs DC Affect the Conversion?</h3>
  <p>
    The key difference between **DC (Direct Current)** and **AC (Alternating Current)** in the context of power conversion lies in the behavior of current flow. 
    - **DC**: In DC circuits, current flows in a constant direction, so the calculation is straightforward and does not require a power factor.
    - **AC**: In AC circuits, the current alternates direction periodically. For **single-phase** AC, the current fluctuates between zero and a maximum value, which means that the power factor comes into play to account for the phase difference between current and voltage. In **three-phase** AC systems, the current alternates in three phases, which reduces the power loss and improves efficiency.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Power Factor and Its Effect on the Calculation</h3>
  <p>
    **Power factor (pf)** is a measure of how effectively the current is being used in an AC circuit. A power factor of 1 means that all the power supplied is being effectively used, while a power factor less than 1 indicates that some power is lost due to inefficiencies like resistance and reactance. The power factor can range from 0 to 1 and typically varies with the type of electrical load. A typical power factor for many electrical systems is around 0.8.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Practical Use Cases for Kilowatts to Amps Conversion</h3>
  <p>
    Knowing how to convert kilowatts to amps is helpful in various real-world scenarios:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li><strong>Electrical Wiring and Circuit Design:</strong> Calculating the current allows you to choose the appropriate wire size for circuits and avoid overheating or potential fire hazards.</li>
    <li><strong>Power Distribution Systems:</strong> Properly sizing transformers and circuit breakers ensures that electrical distribution systems are both safe and efficient.</li>
    <li><strong>Electric Motors and Appliances:</strong> Engineers use this conversion to determine the necessary electrical components for running industrial machinery and household appliances.</li>
    <li><strong>Renewable Energy Systems:</strong> In solar, wind, and other renewable energy systems, engineers calculate the amount of current required for charging batteries or powering equipment.</li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Advanced Calculations for Special Applications</h3>
  <p>
    In certain cases, such as designing large electrical systems or troubleshooting complex power grids, additional factors may be taken into account when converting kilowatts to amps:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li><strong>Efficiency:</strong> For systems where efficiency is a concern, engineers may adjust the power calculation based on system losses or heating effects.</li>
    <li><strong>Temperature:</strong> High temperatures can cause a reduction in conductor capacity, which may need to be accounted for in the conversion process for safety purposes.</li>
    <li><strong>Harmonics:</strong> In circuits with high harmonic distortion, power factor calculations may need to be adjusted for non-linear loads, as these can affect the accuracy of the conversion.</li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Additional Resources for Understanding Electrical Conversions</h3>
  <p>
    To deepen your understanding of electrical systems and conversions, the following resources can be helpful:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li><Link to="/electrical-theory" className="text-blue-600 hover:underline">Electrical Theory and Basics</Link>: Learn the foundational principles of electrical systems, including Ohm’s Law, Kirchhoff’s Law, and more.</li>
    <li><Link to="/circuit-design" className="text-blue-600 hover:underline">Circuit Design and Analysis</Link>: Explore the design of circuits, including series, parallel, and complex configurations.</li>
    <li><Link to="/energy-efficiency" className="text-blue-600 hover:underline">Energy Efficiency Practices</Link>: Discover how to optimize energy usage, reduce waste, and design efficient electrical systems.</li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Final Thoughts</h3>
  <p>
    Converting kilowatts to amps is a simple but essential calculation for anyone involved in electrical engineering, from technicians and electricians to engineers designing large systems. Whether you are working with DC or AC circuits, understanding how to perform this conversion ensures you can design, analyze, and troubleshoot electrical systems safely and effectively.
  </p>
</div>


            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">Conclusion</h3>
            <p>
              Converting kilowatts to amperes bridges the gap between understanding how much power a system uses and how much current it draws. By applying the appropriate formula based on your system type (AC or DC), voltage, and power factor, you can ensure efficient and safe operation of electrical installations.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default KilowattsToAmpsConverter;
