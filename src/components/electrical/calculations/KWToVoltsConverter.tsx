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

const KWToVoltsConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [current, setCurrent] = useState<number>(1);  // Current in amps (A)
  const [powerFactor, setPowerFactor] = useState<number>(1);  // Power factor (PF)
  const [voltage, setVoltage] = useState<number | string>('—');  // Output voltage in volts (V)
  const [systemType, setSystemType] = useState<string>('dc');  // Type of system (DC, AC Single-phase, AC Three-phase)

  // DC Conversion function
  const convertDCToVolts = (power: number, current: number) => {
    return (1000 * power) / current;  // V = 1000 × P / I
  };

  // AC Single-phase Conversion function
  const convertACSinglePhaseToVolts = (power: number, powerFactor: number, current: number) => {
    return (1000 * power) / (powerFactor * current);  // V = 1000 × P / (PF × I)
  };

  // AC Three-phase Conversion function
  const convertACThreePhaseToVolts = (power: number, powerFactor: number, current: number) => {
    return (1000 * power) / (Math.sqrt(3) * powerFactor * current);  // V = 1000 × P / (√3 × PF × I)
  };

  const handleConvert = () => {
    let result;
    if (systemType === 'dc') {
      result = convertDCToVolts(power, current);
    } else if (systemType === 'ac-single-phase') {
      result = convertACSinglePhaseToVolts(power, powerFactor, current);
    } else if (systemType === 'ac-three-phase') {
      result = convertACThreePhaseToVolts(power, powerFactor, current);
    }
    setVoltage(result);
  };

  // Example scenarios for better understanding
  const examples = [
    { systemType: 'dc', power: 4, current: 3, expectedResult: 1333.333, description: 'DC Example: Power is 4 kW, Current is 3 A' },
    { systemType: 'ac-single-phase', power: 4, powerFactor: 0.8, current: 3.75, expectedResult: 1333.333, description: 'AC Single-phase Example: Power is 4 kW, PF is 0.8, Current is 3.75 A' },
    { systemType: 'ac-three-phase', power: 4, powerFactor: 0.8, current: 2.165, expectedResult: 1333, description: 'AC Three-phase Example: Power is 4 kW, PF is 0.8, Current is 2.165 A' },
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
            <BreadcrumbPage>KW to Volts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>KW to Volts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert power in kilowatts (kW) to voltage in volts (V) depending on the system type.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power in Kilowatts (kW):</label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Current in Amps (A):</label>
              <input
                type="number"
                value={current}
                onChange={(e) => setCurrent(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Power Factor (PF):</label>
              <input
                type="number"
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">System Type:</label>
              <select
                value={systemType}
                onChange={(e) => setSystemType(e.target.value)}
                className="w-full border px-3 py-2 rounded dark:text-black"
              >
                <option value="dc">DC</option>
                <option value="ac-single-phase">AC Single-phase</option>
                <option value="ac-three-phase">AC Three-phase</option>
              </select>
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Voltage:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{voltage} V</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Power: {example.power} kW, Current: {example.current} A, Power Factor: {example.powerFactor}</p>
                    <p>Converted Voltage: {example.expectedResult} V</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>DC: V = 1000 × P / I</strong><br />
                <strong>AC Single-phase: V = 1000 × P / (PF × I)</strong><br />
                <strong>AC Three-phase: V = 1000 × P / (√3 × PF × I)</strong>
              </p>
              <p>
                Where:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>V = Voltage in volts (V)</li>
                  <li>P = Power in kilowatts (kW)</li>
                  <li>I = Current in amps (A)</li>
                  <li>PF = Power factor (PF)</li>
                </ul>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatts (kW) to volts (V) depends on the type of system (DC or AC) and the formula:
                <br />
                - For *DC*, the formula is: <strong>V = 1000 × P / I</strong>
                <br />
                - For *AC Single-phase*, the formula is: <strong>V = 1000 × P / (PF × I)</strong>
                <br />
                - For *AC Three-phase*, the formula is: <strong>V = 1000 × P / (√3 × PF × I)</strong>
                <br />
                The power factor (PF) adjusts for the phase difference between voltage and current in AC systems, affecting the calculated voltage.
              </p>
            </div>
          </div>

          <p className="mt-4">
  Converting kilowatts (kW) to volts (V) is a fundamental task in designing and operating electrical systems. Voltage is a key parameter that defines how electrical power is distributed and managed. By understanding the relationship between power, current, and voltage — especially across different systems such as DC, AC single-phase, and AC three-phase — users can ensure their systems are safe, efficient, and compatible with all components.
</p>

<p className="mt-4">
  The core formula for this conversion varies based on the system type:
</p>

<ul className="list-disc list-inside ml-4">
  <li><strong>DC:</strong> V = (1000 × P) / I</li>
  <li><strong>AC Single-phase:</strong> V = (1000 × P) / (PF × I)</li>
  <li><strong>AC Three-phase:</strong> V = (1000 × P) / (√3 × PF × I)</li>
</ul>

<p className="mt-4">
  These equations make it possible to determine the voltage required to deliver a specific power level at a known current and power factor. Voltage not only determines the design of your cabling, insulation, and protective equipment — it also influences overall energy losses, safety, and equipment compatibility.
</p>

<p className="mt-4">
  In **DC systems**, such as battery-powered devices, off-grid solar systems, or electric vehicles, the conversion is straightforward. There’s no power factor to consider because current and voltage are always in phase. For example, a 5 kW DC motor drawing 20 A would operate at:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  V = (1000 × 5) / 20 = 250 V
</p>

<p className="mt-4">
  For **AC systems**, especially in industrial and commercial settings, the power factor (PF) becomes essential. It accounts for inefficiencies and phase displacement between current and voltage caused by inductive or capacitive loads. Most modern appliances have a PF around 0.9, but older motors or fluorescent lighting systems may operate closer to 0.7 or lower.
</p>

<p className="mt-4">
  In **AC single-phase systems**, such as typical residential supplies, using the correct PF ensures that the voltage calculation accurately reflects the real energy usage. If the power factor is ignored, the voltage derived may be unsafe or result in mismatched equipment.
</p>

<p className="mt-4">
  **AC three-phase systems** are used in heavy machinery, large buildings, and utility-scale systems. These are more efficient than single-phase systems because power is distributed over three conductors, reducing current and voltage drops. The √3 factor (approximately 1.732) arises from the geometry of the three-phase waveform relationship. A generator supplying 15 kW at 40 A and a PF of 0.9 would output:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  V = (1000 × 15) / (1.732 × 0.9 × 40) ≈ 240.56 V
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Industry Applications:</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Solar Systems:</strong> Inverters must be matched to the voltage levels of panels and batteries.</li>
    <li><strong>Electric Vehicles:</strong> Chargers require specific voltages for safe charging.</li>
    <li><strong>Generators:</strong> Must produce correct voltages for given power and load demands.</li>
    <li><strong>Control Panels:</strong> Voltage ratings define insulation, contactors, and cable sizing.</li>
    <li><strong>Battery Systems:</strong> DC bus voltage must be known to interface with power conversion equipment.</li>
  </ul>
</div>

<p className="mt-4">
  In **data centers**, voltage consistency is vital for preventing downtime. Knowing how much power (in kW) is needed and converting it to voltage ensures that rack-mounted equipment runs within safe thresholds, preventing overheating or undervoltage conditions. UPS systems and PDUs are often configured based on these calculations.
</p>

<p className="mt-4">
  In **industrial automation**, where dozens of motors, relays, and sensors run in sync, voltage matching is crucial. A miscalculation can lead to equipment malfunction, efficiency loss, or even electrical hazards. Correct voltage also helps reduce copper losses (I²R), making the system more energy-efficient.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Design Considerations:</h2>
  <ul className="list-disc list-inside ml-4">
    <li>Always ensure that voltage values comply with equipment and code limits (e.g., 230V, 415V).</li>
    <li>Use derating factors when operating under high ambient temperatures or long cable runs.</li>
    <li>For safety, account for voltage drop — especially in large installations.</li>
    <li>Voltage calculated should be within ±5% of nominal to avoid performance issues.</li>
  </ul>
</div>

<p className="mt-4">
  In countries with different grid standards (e.g., 120V vs. 230V systems), using this converter allows multinational businesses and engineers to adapt equipment specifications across projects and borders. Whether planning an off-grid farm in India or a data center in Germany, knowing how to convert kW to V ensures compatibility and performance.
</p>

<p className="mt-4">
  Additionally, this tool is invaluable for **education**. Students studying electrical engineering, renewable energy, or automation technology use these conversions in labs to verify real-world measurements. Understanding this relationship prepares them for designing safe, efficient systems in their careers.
</p>

<p className="mt-4">
  For **facility managers and electricians**, using this converter helps with troubleshooting. If a load isn’t performing as expected, calculating the expected voltage based on known power and current can quickly reveal if there’s a supply issue, connection fault, or undersized cable.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Common Mistakes to Avoid:</h2>
  <ul className="list-disc list-inside ml-4">
    <li>Entering current in milliamps instead of amps (should always be in A)</li>
    <li>Forgetting to include the power factor for AC systems</li>
    <li>Using the DC formula for an AC system (and vice versa)</li>
    <li>Not converting kilowatts to watts by multiplying with 1000</li>
  </ul>
</div>

<p className="mt-4">
  Lastly, voltage levels influence **electrical insulation, cable selection, and safety protocols**. Higher voltages require thicker insulation, stricter clearances, and more robust protective equipment. Thus, having an accurate conversion from power to voltage isn't just good engineering — it's a matter of compliance and personal safety.
</p>

<p className="mt-4">
  As energy systems become more distributed, electrified, and digitally managed, understanding how to convert kilowatts (kW) to volts (V) plays a central role in planning for reliability, flexibility, and regulatory compliance. Whether in power system design, installation, or fault diagnostics, voltage is the core metric that guides protective coordination, load capacity, equipment compatibility, and even energy efficiency.
</p>

<p className="mt-4">
  Let’s explore how this conversion impacts real-world decisions in sectors like construction, electric mobility, renewable energy, and smart grid infrastructure — all of which rely on precise voltage calculations derived from known power levels and current flows.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Voltage Drop in Distribution Systems:</h2>
  <p>
    One of the most practical reasons to convert from kW to volts is to calculate expected voltage drops across long cable runs. When a load is located far from its power source, even slight resistance in the conductor can cause voltage losses. By knowing the intended voltage at the load, engineers can size cables to prevent excessive drop and ensure devices operate efficiently.
  </p>
  <p className="mt-2">
    For instance, a 10 kW three-phase motor located 100 meters from the panel and running at 0.85 PF may require a 400V supply. By calculating the required voltage from the known current and power, and comparing it to actual measured voltage, electricians can verify whether cable cross-section needs to be increased or if voltage regulators are required.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Cable Sizing and Overload Prevention:</h2>
  <p>
    Conductors are rated for both current (A) and voltage (V). When sizing cables based on a known power rating (kW), converting that power into the required voltage for the given current allows electricians to choose the appropriate cable size. Oversized cables waste copper and cost more, while undersized cables can overheat and become fire hazards.
  </p>
</div>

<p className="mt-4">
  In **battery storage systems** and **off-grid setups**, especially in remote telecom towers or agricultural pump sets, this conversion ensures correct DC bus voltages. If a solar-powered pump needs 3.5 kW and operates at 48V, the required current will be high:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  I = (1000 × 3.5) / 48 = 72.9 A
</p>

<p className="mt-4">
  This informs decisions on cable thickness, fuse size, and controller ratings. By reversing the formula to calculate volts from power and current, system designers can assess whether a higher-voltage system (e.g., 96V or 120V) would reduce current and improve system longevity.
</p>

<p className="mt-4">
  In **electric vehicle (EV) charging**, this conversion is equally vital. EV chargers operate at different power levels (3.3 kW, 7.2 kW, 22 kW), and voltage varies based on region and vehicle design. Converting kW to volts allows charging stations to determine required supply current, validate cable sizing, and ensure compatibility with grid voltage standards (230V/400V/480V).
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Grid Compliance and Safety Regulations:</h2>
  <p>
    Many national codes and global standards set voltage tolerance limits to protect equipment and users. IEC, IEEE, and NEC define nominal voltage bands (±5% or ±10%) and require that voltage be maintained within these ranges at the point of connection. Converting kW to volts helps design systems that stay within these regulatory limits, even under variable load conditions.
  </p>
</div>

<p className="mt-4">
  In **renewable integration**, such as solar PV or wind turbines, voltage levels must match the inverter and grid interface requirements. For example, a 6 kW solar array producing 8.5 A on a three-phase system at 0.95 PF would require:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  V = (1000 × 6) / (1.732 × 0.95 × 8.5) ≈ 432.6 V
</p>

<p className="mt-4">
  This confirms that a 415V inverter is appropriate and helps avoid reverse flow issues or relay misoperation.
</p>

<p className="mt-4">
  In **UPS and generator sizing**, this conversion ensures that backup systems can deliver the correct voltage for a defined power load. A 10 kW UPS system operating at 0.9 PF and 25 A load would need:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  V = (1000 × 10) / (0.9 × 25) = 444.4 V
</p>

<p className="mt-4">
  If the generator outputs only 415V, engineers might adjust the current or improve the power factor using correction devices to match output requirements.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Smart Systems and Voltage Analytics:</h2>
  <p>
    In modern **smart grids**, voltage data is logged and analyzed constantly. When demand surges, power consumption (kW) increases, and real-time converters use known current values to predict expected voltage levels at each node. Sudden voltage deviations indicate overloads or faults. This is why kW-to-volts conversion is embedded in real-time energy management software and SCADA platforms.
  </p>
</div>

<p className="mt-4">
  Additionally, in **medical facilities and laboratories**, where sensitive equipment like MRI machines or centrifuges must operate within precise voltage limits, converting power draw to voltage ensures stable, regulated supply. Life-saving equipment must remain within ±2% voltage tolerance to avoid calibration issues or failures.
</p>

<p className="mt-4">
  In educational labs and vocational training, introducing students to kW-to-volts conversion builds foundational understanding of Ohm’s Law, AC vs. DC principles, and energy conversion systems. It supports learning outcomes in electrical design, renewable energy certification, and power electronics.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Voltage Scaling and System Efficiency:</h2>
  <p>
    Higher voltage systems (e.g., 600V, 1000V DC) are becoming more popular because they reduce current, thus minimizing resistive losses (I²R). Converting kW to volts allows system designers to visualize trade-offs: higher voltage means lower current and smaller conductors, but it also requires better insulation, spacing, and switchgear.
  </p>
</div>

<p className="mt-4">
  Finally, many industrial automation systems now include voltage-monitoring PLCs (programmable logic controllers). These monitor voltage derived from power values and trigger alarms or corrective actions if they detect undervoltage or overvoltage events based on conversion results. This enhances predictive maintenance and improves system uptime.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Wrap-Up:</h2>
  <p>
    Whether you are sizing a power supply, designing a microgrid, installing an EV charger, or validating industrial control voltage, converting kilowatts to volts is at the core of electrical decision-making. This converter empowers you to visualize and validate your power system, improve its reliability, and meet safety and design expectations across any application.
  </p>
</div>


<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p>
    Converting kW to volts bridges the gap between power design and safe operation. Whether you're powering a solar array, calculating loads for a generator, or managing an industrial control system, knowing the correct voltage ensures performance, safety, and compliance. Use this tool to plan smarter, troubleshoot faster, and build with confidence.
  </p>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default KWToVoltsConverter;
