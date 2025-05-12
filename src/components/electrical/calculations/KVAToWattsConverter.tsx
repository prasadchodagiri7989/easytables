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

const KVAToWattsConverter: React.FC = () => {
  const [apparentPowerKVA, setApparentPowerKVA] = useState<number>(0);
  const [powerFactor, setPowerFactor] = useState<number>(1);
  const [realPower, setRealPower] = useState<number | string>('—');

  const convertToWatts = (apparentPowerKVA: number, powerFactor: number) => {
    return (1000 * apparentPowerKVA * powerFactor).toFixed(3);  // W = 1000 × S(kVA) × PF
  };

  const handleConvert = () => {
    const result = convertToWatts(apparentPowerKVA, powerFactor);
    setRealPower(result);
  };

  const examples = [
    { apparentPowerKVA: 3, powerFactor: 0.8, expectedResult: 2400, description: 'Example 1: 3 kVA with Power Factor 0.8' },
    { apparentPowerKVA: 5, powerFactor: 0.9, expectedResult: 4500, description: 'Example 2: 5 kVA with Power Factor 0.9' },
    { apparentPowerKVA: 2, powerFactor: 1, expectedResult: 2000, description: 'Example 3: 2 kVA with Power Factor 1' },
    { apparentPowerKVA: 1.5, powerFactor: 0.75, expectedResult: 1125, description: 'Example 4: 1.5 kVA with Power Factor 0.75' },
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
            <BreadcrumbPage>kVA to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>kVA to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert apparent power in kilovolt-amps (kVA) to real power in watts (W) using the power factor.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Apparent Power in kVA:</label>
              <input
                type="number"
                value={apparentPowerKVA}
                onChange={(e) => setApparentPowerKVA(Number(e.target.value))}
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
                step="0.01"
                min="0"
                max="1"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{realPower} W</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Apparent Power: {example.apparentPowerKVA} kVA, Power Factor: {example.powerFactor}</p>
                    <p>Expected Real Power: {example.expectedResult} W</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p><strong>W = 1000 × kVA × PF</strong></p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>W</strong>: Real power in watts (W)</li>
                <li><strong>kVA</strong>: Apparent power in kilovolt-amps (kVA)</li>
                <li><strong>PF</strong>: Power factor (PF)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilovolt-amps (kVA) to watts (W) is based on the formula:<br />
                W = 1000 × kVA × PF<br />
                The power factor (PF) accounts for the efficiency of power conversion. A power factor of 1 means 100% efficiency.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Power Factor (PF) Explained:</h2>
              <p>
                The power factor (PF) is a measure of how efficiently electrical power is used. A PF of 1 indicates perfect efficiency. A PF below 1 means some power is wasted due to factors like inductive loads.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Types of Electrical Systems:</h2>
              <p>
                - <strong>Single-phase AC:</strong> For smaller systems. Use the formula as is.<br />
                - <strong>Three-phase AC:</strong> For larger systems. The formula may involve adjustments for three-phase power (S / √3).
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Visualizing the Formula:</h2>
              <p>Here's a visual representation of the kVA to Watts conversion:</p>
              <div>
                <img src="https://via.placeholder.com/400x200.png?text=kVA+to+Watts+Formula" alt="kVA to Watts Formula" />
              </div>
            </div>
          </div>
          <p className="mt-4">
  Understanding the conversion between kilovolt-amps (kVA) and watts (W) is fundamental in power system engineering and energy management. This conversion is vital for determining how much of the apparent power (kVA) is actually available for use as real power (W) in practical applications. Since power factor (PF) represents the efficiency of power usage, it plays a crucial role in this conversion. In a perfectly efficient system, PF equals 1, meaning all the power drawn from the source is used effectively. However, most real-world systems operate with a power factor less than 1 due to inductive or capacitive components.
</p>

<p className="mt-4">
  This tool is especially valuable for electrical engineers, system designers, technicians, and facility managers who need to match power requirements with supply capabilities. For example, if you're planning to install a backup generator for a commercial building, knowing the expected real power demand in watts helps you size the generator accurately. An undersized generator could result in power drops or system failure, while an oversized one wastes resources and increases operating costs.
</p>

<p className="mt-4">
  It's also important when designing systems that integrate variable loads, such as motors, HVAC units, or data centers, where loads fluctuate and often operate at varying power factors. By inputting different PF values, you can simulate worst-case and typical load scenarios. This ensures you build enough capacity into your system while maintaining efficiency and budget.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Where This Conversion Is Used:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>Industrial and commercial load calculations</li>
    <li>UPS and generator sizing</li>
    <li>Solar inverter and battery capacity estimation</li>
    <li>Energy efficiency audits and performance reviews</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Tips for Accurate Conversion:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>Always use the actual power factor of your load — do not assume 1 unless specified.</li>
    <li>Account for voltage drops and harmonics in large systems when estimating real power.</li>
    <li>Recalculate PF periodically in dynamic or inductive environments like factories or server rooms.</li>
  </ul>
</div>

<p className="mt-4">
  In modern energy systems, especially those using renewables or variable-speed drives, maintaining a good power factor is essential for efficiency. Devices such as capacitor banks, synchronous condensers, or automatic PF correction panels are often installed to improve poor power factor. Knowing the relationship between kVA and W helps in evaluating the benefit of these upgrades.
</p>

<p className="mt-4">
  Additionally, this conversion is useful in grid-tied systems where utilities charge based on real power consumed (kWh) but monitor the total load in apparent power (kVA). In some regions, a poor power factor can lead to penalties. By converting and analyzing usage patterns with tools like this converter, businesses can take proactive steps to improve their electrical performance and reduce costs.
</p>

<p className="mt-4">
  Whether you're working on a small single-phase load or a complex three-phase industrial setup, this kVA to W converter offers quick, accurate results to help you make better design and operational decisions. It's a must-have for anyone involved in power system analysis, design, or optimization.
</p>
<p className="mt-4">
  One of the most important considerations when converting kVA to watts is how load characteristics affect the power factor. Real-world loads such as motors, air conditioners, transformers, and fluorescent lighting introduce inefficiencies due to reactive components. These inefficiencies reduce the power factor and increase the amount of apparent power required to achieve a specific level of real power. This means your electrical system needs to draw more current, which increases line losses and can overload cables or protective equipment.
</p>

<p className="mt-4">
  Many businesses overlook the impact of poor power factor on their operations until it begins to reflect in their electricity bills or system performance. Utility companies often apply surcharges if a facility consistently operates below a certain power factor threshold (e.g., 0.9). Therefore, converting kVA to watts and understanding how much usable power you're getting helps optimize energy consumption, reduce costs, and maintain regulatory compliance.
</p>

<p className="mt-4">
  Power quality and load balancing are also closely related to this conversion. In balanced systems, the power factor is typically stable and predictable. However, unbalanced or nonlinear loads can introduce distortions, causing fluctuations in the PF and making real-time monitoring essential. This is why advanced energy monitoring systems often display real power (watts), apparent power (kVA), and power factor together, giving facility managers complete visibility into system performance.
</p>

<p className="mt-4">
  Another scenario where this conversion becomes essential is in renewable energy systems. When designing solar power installations with inverters and battery backups, the inverter is often rated in kVA. However, the actual wattage it can deliver depends on the power factor. For example, a 5 kVA inverter with a PF of 0.8 delivers only 4000 watts. Misjudging this can lead to underpowered systems, inefficient energy storage, and equipment mismatch.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Common Causes of Low Power Factor:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>Inductive loads like motors and transformers</li>
    <li>Lightly loaded equipment operating below rated capacity</li>
    <li>Long transmission distances and undersized cables</li>
    <li>Inadequate power factor correction equipment</li>
  </ul>
</div>

<p className="mt-4">
  In residential and small commercial environments, PF may not be monitored closely, but in industrial setups, power factor is often tracked and improved using capacitor banks or active filters. When designing such solutions, the first step is often converting total kVA usage to actual watts to determine what portion of power is real and what portion is reactive.
</p>

<p className="mt-4">
  On top of that, energy management systems and building automation platforms often display both kVA and wattage to give operators the ability to fine-tune operations. By combining kVA to watts conversions with data logging, trends can be analyzed to identify peak demand periods, system imbalances, and opportunities for load shifting or equipment upgrades.
</p>

<p className="mt-4">
  In conclusion, while the formula for converting kVA to watts is straightforward, the implications of that calculation are significant. Whether you're evaluating backup power capacity, preparing for an energy audit, or managing a high-load industrial process, this converter is a practical tool that bridges technical accuracy with everyday application. Always ensure you're factoring in power factor correctly, and leverage this tool as a first step toward building smarter, safer, and more cost-effective electrical systems.
</p>

{/* Deep Dive: Power Triangle Visualization */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Power Triangle</h2>
  <p>
    In AC circuits, power can be visualized as a triangle with three components:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Real Power (Watts):</strong> The usable power (horizontal leg).</li>
    <li><strong>Reactive Power (VARs):</strong> Power that oscillates and doesn’t perform work (vertical leg).</li>
    <li><strong>Apparent Power (kVA):</strong> Vector sum of real and reactive power (hypotenuse).</li>
  </ul>
  <p className="mt-2">
    The power factor is the cosine of the angle between the real and apparent power. As reactive power increases, the angle widens and the power factor decreases.
  </p>
</div>

{/* Diagram Placeholder */}
<div className="mt-4">
  <img
    src="https://via.placeholder.com/400x250.png?text=Power+Triangle"
    alt="Power Triangle"
    className="rounded border"
  />
</div>

{/* Section: Importance of Power Factor Correction */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Power Factor Correction</h2>
  <p>
    Correcting poor power factor can lead to significant energy savings. This is typically done by installing capacitor banks, which reduce the reactive power demand and increase the power factor. This means your facility will draw less apparent power (kVA) for the same real power usage (W), leading to lower utility bills.
  </p>
  <p>
    Example: If a 100 kVA system operates at 0.7 PF, it delivers only 70 kW of usable power. By improving the PF to 0.95, the same system delivers 95 kW — a 35% gain in efficiency.
  </p>
</div>

{/* Section: Application by Industry */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">kVA to W Conversion by Industry</h2>
  <table className="table-auto w-full border-collapse border text-sm">
    <thead>
      <tr>
        <th className="border p-2 text-left">Industry</th>
        <th className="border p-2 text-left">Typical Load</th>
        <th className="border p-2 text-left">Estimated PF</th>
        <th className="border p-2 text-left">Use Case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-2">Manufacturing</td>
        <td className="border p-2">Motors, welders</td>
        <td className="border p-2">0.75</td>
        <td className="border p-2">Machine sizing, PF penalty avoidance</td>
      </tr>
      <tr>
        <td className="border p-2">Data Centers</td>
        <td className="border p-2">Servers, cooling</td>
        <td className="border p-2">0.95</td>
        <td className="border p-2">Generator backup sizing</td>
      </tr>
      <tr>
        <td className="border p-2">Retail & Commercial</td>
        <td className="border p-2">Lighting, HVAC</td>
        <td className="border p-2">0.85</td>
        <td className="border p-2">Utility billing accuracy</td>
      </tr>
      <tr>
        <td className="border p-2">Renewables</td>
        <td className="border p-2">Inverters, batteries</td>
        <td className="border p-2">0.90</td>
        <td className="border p-2">Solar system sizing</td>
      </tr>
    </tbody>
  </table>
</div>

{/* Real-World Problem Solving */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Example Scenario</h2>
  <p>
    A facility has a 120 kVA UPS system. The typical load power factor is 0.82. To calculate how much real power (watts) this system supports:
  </p>
  <p className="bg-gray-100 p-3 rounded font-mono dark:text-black">
    Real Power = 1000 × kVA × PF = 1000 × 120 × 0.82 = <strong>98,400 W</strong>
  </p>
  <p>
    This means the UPS can support up to 98.4 kW of real, usable power. Operating beyond this would lead to overloads or potential failures.
  </p>
</div>

{/* Impact on Infrastructure */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Infrastructure Impacts</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Cabling:</strong> Larger kVA means more current, requiring thicker cables.</li>
    <li><strong>Transformers:</strong> Sized in kVA, but must meet real power demand in W.</li>
    <li><strong>Switchgear:</strong> Breakers and fuses are rated for current, which rises with low PF.</li>
    <li><strong>Generators:</strong> Must handle peak apparent power, not just average wattage.</li>
  </ul>
</div>

{/* Summary Card */}
<div className="bg-blue-50 dark:bg-gray-800 p-4 rounded mt-6 border">
  <h2 className="font-semibold text-base mb-2">Summary</h2>
  <p>
    The kVA to W conversion is essential when sizing systems, budgeting energy, and optimizing electrical efficiency.
    Use the formula <strong>W = 1000 × kVA × PF</strong> to get quick and reliable results.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default KVAToWattsConverter;
