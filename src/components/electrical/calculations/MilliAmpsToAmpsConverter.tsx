import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const MilliAmpsToAmpsConverter: React.FC = () => {
  const [milliAmps, setMilliAmps] = useState<number>(0);  // Input current in milliamps (mA)
  const [amps, setAmps] = useState<number | string>('');  // Output current in amps (A)
  const [error, setError] = useState<string>('');  // Error message for invalid input

  // Conversion function to calculate amps
  const convertToAmps = (milliAmps: number) => {
    return milliAmps / 1000;  // Formula to convert milliamps to amps
  };

  const handleConvert = () => {
    if (milliAmps < 0) {
      setError('Please enter a positive value for milliamps.');
      setAmps('');
      return;
    }
    setError('');
    const result = convertToAmps(milliAmps);
    setAmps(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      milliAmps: 300,
      expectedResult: 0.3,
      description: 'Example: Convert 300 milliamps to amps',
    },
    {
      milliAmps: 5000,
      expectedResult: 5,
      description: 'Example: Convert 5000 milliamps to amps',
    },
    {
      milliAmps: 150,
      expectedResult: 0.15,
      description: 'Example: Convert 150 milliamps to amps',
    },
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
            <BreadcrumbPage>MilliAmps to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>MilliAmps to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert current in milliamps (mA) to amps (A) using the formula A = mA / 1000.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Enter Current in Milliamps (mA):</label>
              <input
                type="number"
                value={milliAmps}
                onChange={(e) => setMilliAmps(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
                placeholder="Enter value in milliamps"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            {error && <p className="text-red-500">{error}</p>}

            <div>
              <strong>Converted Current (Amps):</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{amps} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Milliamps: {example.milliAmps} mA</p>
                    <p>Converted Amps: {example.expectedResult} A</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>A = mA / 1000</strong>
              </p>
              <p>
                Where:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>A = Current in amps (A)</li>
                  <li>mA = Current in milliamps (mA)</li>
                </ul>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from milliamps (mA) to amps (A) is straightforward. Since there are 1000 milliamps in one amp, you divide the value in milliamps by 1000 to get the value in amps.
              </p>
              <p>
                - *1 milliamp (mA) = 1/1000 amp (A)*<br />
                - *Example: 300 mA = 0.3 A*
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                What is the current in amps if the current is 300 milliamps? 
                <br />
                Using the formula: A = mA / 1000, we get A = 300 / 1000 = 0.3 A.
              </p>
            </div>
          </div>

          <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Why MilliAmps to Amps Conversion Matters:</h2>
  <p className="mt-4">
    Understanding how to convert milliamps (mA) to amps (A) is vital for working with electronic circuits, battery-powered devices, and electrical systems. While most household appliances list power in amps, small electronics often measure in milliamps. This converter bridges the gap, helping you easily switch between units to assess compatibility, safety, or design requirements.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Real-Life Applications:</h2>
  <p className="mt-4">
    This conversion is commonly used in the following fields:
  </p>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li><strong>Smartphones:</strong> Battery ratings are often listed in mAh. Understanding their equivalent in amps helps evaluate charging current and usage efficiency.</li>
    <li><strong>Arduino/Raspberry Pi:</strong> These microcontrollers and their sensors often operate in the range of 5–500 mA, and knowledge of conversion helps prevent overload.</li>
    <li><strong>Circuit Design:</strong> Engineers must match component current ratings (typically in amps) with small signal devices listed in milliamps.</li>
    <li><strong>Solar Energy Systems:</strong> Panel outputs, inverters, and storage devices involve various current ratings—mA for sensors and A for main supply lines.</li>
    <li><strong>Battery Chargers:</strong> Whether charging AA batteries or lithium cells, matching the current output in amps with input in milliamps is critical.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Safety Tips When Dealing with Current:</h2>
  <p className="mt-4">
    Electrical safety is paramount when working with any form of current, even low values in milliamps. Here are a few best practices:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Always check device ratings:</strong> Never exceed the maximum current a device or component can handle.</li>
    <li><strong>Fuse protection:</strong> For mA-rated circuits, use appropriately sized fuses or resettable polyfuses to prevent damage.</li>
    <li><strong>Ground properly:</strong> Avoid current leakage and static discharge with proper grounding, especially in lab or industrial setups.</li>
    <li><strong>Isolate control vs. power circuits:</strong> Use optoisolators or relays to prevent mA-range signal lines from exposure to amp-range power currents.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Common Conversion Values (Reference Table):</h2>
  <table className="table-auto w-full border-collapse border text-left">
    <thead>
      <tr>
        <th className="border p-2">MilliAmps (mA)</th>
        <th className="border p-2">Amps (A)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border p-2">1 mA</td><td className="border p-2">0.001 A</td></tr>
      <tr><td className="border p-2">100 mA</td><td className="border p-2">0.1 A</td></tr>
      <tr><td className="border p-2">250 mA</td><td className="border p-2">0.25 A</td></tr>
      <tr><td className="border p-2">500 mA</td><td className="border p-2">0.5 A</td></tr>
      <tr><td className="border p-2">750 mA</td><td className="border p-2">0.75 A</td></tr>
      <tr><td className="border p-2">1000 mA</td><td className="border p-2">1 A</td></tr>
      <tr><td className="border p-2">1500 mA</td><td className="border p-2">1.5 A</td></tr>
    </tbody>
  </table>

  <h2 className="font-semibold text-base mt-6 mb-2">Helpful Mnemonics:</h2>
  <p className="mt-4">
    Think of "milli" as "mini"—a milliamp is a miniature amp. Since there are 1000 milliamps in an amp, remember:
  </p>
  <p className="mt-2 font-mono bg-gray-100 p-3 rounded dark:text-black">
    Divide by 1000 to go from milliamps to amps.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">When to Use mA Instead of A:</h2>
  <p className="mt-4">
    Engineers and technicians often choose between amps and milliamps depending on context. Use mA for:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Small signal electronics</li>
    <li>Battery life calculations</li>
    <li>Sensor output ratings</li>
    <li>USB and low-current circuits</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Why This Calculator Helps:</h2>
  <p className="mt-4">
    Doing mental math or manually converting large mA values to A can lead to errors, especially in time-sensitive tasks like prototyping, troubleshooting, or submitting specifications. With this converter, you're only one input and one click away from accuracy.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p className="mt-4">
    Understanding and converting milliamps to amps empowers you to work smarter with electronics and electrical systems. From classroom learning to field installations, this knowledge ensures better circuit design, safer operations, and more accurate specifications. Bookmark this tool for quick access and keep your electrical projects current — and correct.
  </p>
</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Deeper Understanding of Electric Current Units</h2>
  <p className="mt-4">
    The ampere (A) is the SI base unit of electric current, representing the flow of one coulomb of charge per second. In practical applications, it's often necessary to work with smaller units of current such as milliamps (mA), especially when dealing with low-power devices and electronics. A milliamp is one-thousandth of an ampere, or 0.001 A. 
  </p>
  <p className="mt-4">
    Understanding this relationship helps professionals and hobbyists make accurate calculations when selecting components such as resistors, transistors, and regulators. For instance, knowing how much current a sensor or LED draws in mA allows you to choose a proper power source and ensures your microcontroller operates within safe limits.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">The Physics Behind Current</h2>
  <p className="mt-4">
    Electric current is fundamentally the movement of electrons through a conductor. The greater the current (in amps), the more electrons are moving past a given point each second. Even milliamps can be significant in sensitive electronics, as excessive current—even at small levels—can damage delicate components or alter their expected behavior.
  </p>
  <p className="mt-4">
    Electrical current is governed by Ohm’s Law, which relates voltage (V), current (I), and resistance (R): 
    <span className="font-mono bg-gray-100 p-1 rounded mx-2 dark:text-black">I = V / R</span>. In many cases, you may know the voltage and resistance, and use this formula to determine the current, then convert it between amps and milliamps as needed.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Power Considerations: Watts, Volts, and Amps</h2>
  <p className="mt-4">
    Power (in watts) is another crucial concept when dealing with current. The formula 
    <span className="font-mono bg-gray-100 p-1 rounded mx-2 dark:text-black">P = V × I</span> shows that power equals voltage times current. For example, if a device runs at 5V and draws 500 mA (0.5 A), it consumes 2.5 watts of power. This is especially relevant for USB-powered devices and power supply planning.
  </p>
  <p className="mt-4">
    When you convert from milliamps to amps, you may also want to calculate the power usage to assess heat dissipation, energy efficiency, or battery life. The correct unit conversions are foundational for these advanced assessments.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Measuring Current Accurately</h2>
  <p className="mt-4">
    Measuring current in milliamps or amps requires precision instruments like digital multimeters. When measuring small current (under 1 A), it is typical to use the mA range on the meter for better resolution. Always connect the meter in series with the load, and select the correct range to avoid blowing an internal fuse.
  </p>
  <p className="mt-4">
    In embedded systems and robotics, current monitoring is often implemented using shunt resistors and current sensors like ACS712 or INA219, which provide millivolt outputs proportional to current. These analog or digital readings can then be scaled and converted to milliamps or amps as required.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Unit Prefixes and Metric Scaling</h2>
  <p className="mt-4">
    The “milli-” prefix represents one-thousandth (1/1000) of a base unit. It’s part of the International System of Units (SI) prefixes. Understanding these prefixes can make unit conversions second nature:
  </p>
  <ul className="list-disc list-inside ml-4 mt-2">
    <li><strong>kilo- (k)</strong> = 1,000</li>
    <li><strong>milli- (m)</strong> = 0.001</li>
    <li><strong>micro- (µ)</strong> = 0.000001</li>
    <li><strong>nano- (n)</strong> = 0.000000001</li>
  </ul>
  <p className="mt-4">
    When dealing with electrical current, mA is typically used for low-current circuits, while A is used for high-current circuits. Having a mental model of the scaling helps in interpreting datasheets and designing reliable systems.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Historical Note on the Ampere</h2>
  <p className="mt-4">
    The ampere is named after André-Marie Ampère, a French physicist and mathematician who was one of the founders of the science of electromagnetism. His pioneering work laid the foundation for how we understand electric currents today. The definition of an ampere was recently redefined in 2019 in terms of fundamental physical constants for improved precision and universality.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">How Milliamps Affect Battery Life</h2>
  <p className="mt-4">
    Battery capacity is often rated in milliamp-hours (mAh), which represents the total charge the battery can deliver over time. For example, a 2000 mAh battery theoretically provides 200 mA for 10 hours. Converting from mA to A is essential for calculating runtime when the device current consumption is specified in amps.
  </p>
  <p className="mt-4">
    Suppose your device consumes 0.5 A (500 mA) and you use a 3000 mAh battery. The expected runtime would be:
    <span className="font-mono bg-gray-100 p-1 rounded mx-2 dark:text-black">3000 mAh / 500 mA = 6 hours</span>.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Troubleshooting Electrical Systems</h2>
  <p className="mt-4">
    Diagnosing faults in electrical circuits often involves measuring current. If a device isn't turning on, checking whether current is flowing (in mA or A) can isolate the problem. Likewise, if a fuse blows, it may be because the current in amps exceeded the circuit design.
  </p>
  <p className="mt-4">
    In these scenarios, having a reliable converter that helps interpret milliamps as amps can aid in identifying issues like overcurrent, short circuits, or incorrect component sizing.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Combining This Tool With Other Calculators</h2>
  <p className="mt-4">
    For advanced applications, you might chain this converter with other tools:
  </p>
  <ul className="list-disc list-inside ml-4 mt-2">
    <li>Use a voltage calculator to find expected voltages given certain loads.</li>
    <li>Use a power calculator (Watts = Volts × Amps) for total energy analysis.</li>
    <li>Use Ohm's Law to determine resistance needed based on desired current.</li>
  </ul>
  <p className="mt-4">
    These tools form the backbone of electrical engineering, prototyping, and system diagnostics.
  </p>
</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Milliamps and Amps in More Depth:</h2>
  <p className="mt-4">
    To truly understand the conversion between milliamps and amps, it's important to grasp the concept of electric current itself. Electric current is the flow of electric charge—typically through a conductor like a wire. The unit of electric current is the ampere (A), named after André-Marie Ampère, a pioneer in electromagnetism. When we say that a current is 1 ampere, it means that one coulomb of charge passes through a point in a circuit per second.
  </p>
  <p className="mt-2">
    However, in practical scenarios, especially in electronics, we often deal with much smaller currents. That's where milliamps (mA) come in. A milliamp is one-thousandth of an amp. This is why converting from milliamps to amps involves dividing by 1000.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Mathematical Perspective:</h2>
  <p className="mt-4">
    The conversion is not just a simple scaling operation—it reflects a shift in measurement granularity. Mathematically:
  </p>
  <p className="mt-2 font-mono bg-gray-100 p-3 rounded dark:text-black">
    1 A = 1000 mA<br />
    Therefore,<br />
    x mA = x ÷ 1000 A
  </p>
  <p className="mt-2">
    This conversion is linear, meaning every increase in mA results in a proportional increase in A. This linearity helps with scaling current values up or down depending on the application context.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Historical Context of Units:</h2>
  <p className="mt-4">
    The ampere as a unit of current has been in use since the 19th century. It is one of the seven SI base units and plays a fundamental role in the International System of Units (SI). The milliampere, introduced for convenience, is widely used in applications involving smaller currents, such as telecommunications, consumer electronics, and computing devices.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">MilliAmps in Portable Technology:</h2>
  <p className="mt-4">
    Milliamps are especially important in battery-powered devices. For instance, smartphone batteries are usually rated in milliamp-hours (mAh). This rating tells you how much current a battery can supply over a specific period. If your device draws 500 mA of current continuously, and your battery is rated at 2000 mAh, you can expect about 4 hours of usage.
  </p>
  <p>
    Understanding this relationship helps not only in estimating battery life but also in selecting chargers and designing efficient energy usage systems.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Amps in High-Power Systems:</h2>
  <p className="mt-4">
    Amps are more commonly seen in high-power applications such as household wiring, industrial machinery, and electrical distribution systems. In these systems, currents can range from a few amps to hundreds of amps. For example, a typical household circuit in the US might be rated for 15 or 20 amps. Knowing when to use amps or milliamps depends on the application’s scale and power requirements.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Engineering Use Cases for mA & A:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li><strong>Embedded Systems:</strong> These often use sensors and modules operating in the micro to milliamp range to reduce energy consumption.</li>
    <li><strong>Power Supplies:</strong> Engineers need to measure and manage amp-level currents for powering multiple systems from a single source.</li>
    <li><strong>IoT Devices:</strong> Internet of Things sensors and wearables often measure in mA to ensure energy efficiency and longer battery life.</li>
    <li><strong>PCBs:</strong> Printed circuit boards are designed based on current requirements; mA is used to calculate copper trace width and heat dissipation.</li>
    <li><strong>Electric Vehicles:</strong> While charging may be rated in amps or kilowatts, auxiliary electronics often operate at milliamps.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Common Pitfalls in mA to A Conversion:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li><strong>Decimal Misplacement:</strong> Forgetting to divide by 1000 or misplacing the decimal point can result in design flaws or dangerous overcurrents.</li>
    <li><strong>Confusing Units:</strong> Some datasheets list current in mA while others use A, which can lead to misinterpretation if the units aren’t converted properly.</li>
    <li><strong>Power Calculations:</strong> Since P = IV, if current is in mA and voltage is in V, it’s essential to convert to A to get power in watts (W).</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Voltage, Current, and Resistance Relationship:</h2>
  <p className="mt-4">
    Using Ohm’s Law (V = IR), it’s often necessary to convert between mA and A when solving for voltage or resistance. For example:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    V = 1000 mA × 5 Ω = 5000 mV = 5 V
  </p>
  <p>
    If current was given in amps instead:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    V = 1 A × 5 Ω = 5 V
  </p>
  <p>
    Same result, but note how the units determine the appropriate scale.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Programming and Automation Applications:</h2>
  <p className="mt-4">
    In microcontroller firmware (Arduino, ESP32, etc.), developers often log current draw in milliamps for monitoring and diagnostics. Many APIs and current sensors (like INA219 or ACS712) return values in mA. Converting these values programmatically to amps is necessary for integration with systems that expect amps as input, such as dashboards or cloud-based monitoring services.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">User-Centric Conversion Tools:</h2>
  <p className="mt-4">
    This tool simplifies the mA to A conversion process, making it accessible to non-engineers, students, and hobbyists. It removes the need for manual calculation and ensures precision. For educational platforms, including such tools alongside theory helps in experiential learning—students can test what they learn instantly.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Global Relevance and Measurement Standards:</h2>
  <p className="mt-4">
    Different countries and industries may use different units depending on the scale of operation. However, SI units such as amperes and milliamperes are globally recognized and standard in scientific and engineering disciplines. Hence, converting between them is not just useful—it’s necessary for international collaboration and product development.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Final Thoughts:</h2>
  <p className="mt-4">
    Whether you're an electronics hobbyist, a student, or a professional engineer, understanding the milliamp to amp conversion equips you with essential insight into how circuits function and how current behaves. Knowing when and how to convert helps in designing safe, functional, and efficient electronic systems.
  </p>
  <p className="mt-2">
    Always keep in mind the conversion rule: <strong>divide by 1000</strong>. It’s a simple step that can make a big difference in calculations, safety, and performance.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default MilliAmpsToAmpsConverter;
