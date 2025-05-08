import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"; // Adjust the path to your component library if needed
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const VAToKVAConverter: React.FC = () => {
  const [apparentPower, setApparentPower] = useState<number>(1000); // Default apparent power (VA)

  // Function to calculate apparent power in kVA
  const calculatePowerKVA = (apparentPower: number): number => {
    return apparentPower / 1000; // Formula to convert VA to kVA
  };

  const powerKVA = calculatePowerKVA(apparentPower);

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
              <Link to="/electrical-conversions">Electrical Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>VA to kVA Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>VA to kVA Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          {/* Introduction */}
          <p>
            Convert apparent power in volt-amperes (<code>VA</code>) to kilovolt-amperes (<code>kVA</code>) by using a simple calculation. This is commonly used for larger-scale electrical systems.
          </p>

          {/* Explanation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">VA to Kilovolt-Amperes Calculation</h3>
            <p className="mt-2">
              The apparent power (<code>S</code>) in kilovolt-amperes is calculated using the formula:
            </p>
          </div>

          {/* VA to kVA Formula */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Formula</h2>
            <p>
              The apparent power in kilovolt-amperes (<code>S<sub>kVA</sub></code>) is calculated as:
            </p>
            <p className="mt-2">
              <code>S<sub>kVA</sub> = S<sub>VA</sub> / 1000</code>
            </p>
            <p className="mt-4">
              Where:
            </p>
            <ul className="list-disc ml-6">
              <li><strong>Apparent Power (<code>S<sub>VA</sub></code>)</strong> = Apparent power in volt-amperes (<code>VA</code>)</li>
              <li><strong>Apparent Power (<code>S<sub>kVA</sub></code>)</strong> = Apparent power in kilovolt-amperes (<code>kVA</code>)</li>
            </ul>
          </div>

          {/* Example Calculation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Calculation</h2>
            <p>
              Suppose you have an apparent power of {apparentPower} <code>VA</code>. To convert this to apparent power in kilovolt-amperes:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
              <p className="font-semibold">S<sub>kVA</sub> = S<sub>VA</sub> / 1000</p>
              <p className="mt-2">
                S<sub>kVA</sub> = {apparentPower} <code>VA</code> / 1000 = {powerKVA} <code>kVA</code>
              </p>
            </div>
            <p className="mt-2">
              Therefore, with {apparentPower} <code>VA</code>, the apparent power is {powerKVA} kilovolt-amperes (<code>kVA</code>).
            </p>
          </div>

          {/* More Practical Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Practical Examples</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                *Example 1:* For an apparent power of 1000 <code>VA</code>:
                <p className="bg-gray-100 p-2 dark:text-black">S<sub>kVA</sub> = 1000 <code>VA</code> / 1000 = 1 <code>kVA</code></p>
              </li>
              <li>
                *Example 2:* For an apparent power of 5000 <code>VA</code>:
                <p className="bg-gray-100 p-2 dark:text-black">S<sub>kVA</sub> = 5000 <code>VA</code> / 1000 = 5 <code>kVA</code></p>
              </li>
              <li>
                *Example 3:* For an apparent power of 2500 <code>VA</code>:
                <p className="bg-gray-100 p-2 dark:text-black">S<sub>kVA</sub> = 2500 <code>VA</code> / 1000 = 2.5 <code>kVA</code></p>
              </li>
            </ul>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Important Notes</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>One kilovolt-ampere (<code>kVA</code>) is equal to 1000 volt-amperes (<code>VA</code>).</li>
              <li>This calculation is important for scaling apparent power values in large systems, where the use of kilovolt-amperes is more common.</li>
              <li>Ensure that the apparent power is in volt-amperes (<code>VA</code>) when performing this calculation.</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              Converting apparent power (<code>VA</code>) to kilovolt-amperes (<code>kVA</code>) is simple: divide the apparent power by 1000 to get the value in kilovolt-amperes.
            </p>
          </div>
          <div className="space-y-6 text-sm text-gray-700 dark:text-white leading-relaxed mt-10">

  <h2 className="font-semibold text-base mt-6 mb-2">When to Use VA and kVA Ratings</h2>
  <p>
    Volt-amperes (VA) and kilovolt-amperes (kVA) are especially important in the context of **AC (alternating current)** power systems. These units are used to measure **apparent power**, which is the total power in a system, including both real (watts) and reactive power. When designing systems for:
  </p>
  <ul className="list-disc ml-4">
    <li>Generators and transformers</li>
    <li>UPS (Uninterruptible Power Supply) systems</li>
    <li>Electrical panels and switchgear</li>
    <li>Motor-driven HVAC or pumping systems</li>
  </ul>
  <p>
    kVA ratings are more suitable because they give a broader picture of electrical load capacity regardless of load type.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Why kVA Instead of kW?</h2>
  <p>
    Electrical equipment is rated in kVA when it must support a variety of loads—some with poor power factors. The relationship between kW (real power) and kVA (apparent power) is defined by:
  </p>
  <p className="bg-gray-100 p-3 rounded font-mono dark:text-black">
    kW = kVA × Power Factor
  </p>
  <p>
    If the power factor is <code>1</code> (purely resistive load), then 1 kW = 1 kVA. But for inductive loads (motors, air conditioners, etc.), the power factor is less than 1, and more kVA is required to deliver the same kW.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">How kVA Helps in Electrical Planning</h2>
  <p>
    Suppose you're selecting a transformer for a commercial building expected to consume 60,000 VA. Rather than specifying this in VA, you would order a 60 kVA transformer. This makes documentation, sizing, and procurement simpler in large systems.
  </p>
  <p>
    Similarly, when engineers work with utility companies, demand is often metered and billed in kVA or kVAh (kilovolt-ampere-hours), especially for industrial customers.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Use Cases by Industry</h2>
  <ul className="list-disc ml-4">
    <li><strong>Industrial:</strong> Equipment loads with varying power factors—requiring kVA ratings for load balancing.</li>
    <li><strong>Healthcare:</strong> MRI and CT equipment often rated in kVA for accurate load provisioning.</li>
    <li><strong>Data Centers:</strong> UPS systems and PDUs (Power Distribution Units) are specified in kVA to handle mixed IT loads.</li>
    <li><strong>Marine and Aviation:</strong> Onboard generators and converters use kVA ratings for electrical reliability.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions (FAQs)</h2>

  <h3 className="font-medium mt-2">Is 1 kVA equal to 1 kW?</h3>
  <p>
    Only if the power factor is 1. Most real-world loads have a power factor between 0.7 and 0.95, so 1 kVA &gt; 1 kW in those cases.
  </p>

  <h3 className="font-medium mt-2">Can I use a kW-rated generator for a kVA-rated system?</h3>
  <p>
    You must calculate the required kW based on the system's kVA and power factor. Otherwise, your generator may be undersized and overheat.
  </p>

  <h3 className="font-medium mt-2">Is kVA used for DC systems?</h3>
  <p>
    No. In DC systems, there's no reactive power, so **VA = W** and **kVA = kW**. The distinction only applies to AC systems.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Pro Tip</h2>
  <p>
    When dealing with large-scale projects, always check:
  </p>
  <ul className="list-disc ml-4">
    <li>Load diversity</li>
    <li>Expected power factor</li>
    <li>Future load expansions</li>
  </ul>
  <p>
    This helps determine if your equipment is correctly rated in **kVA**, avoiding future upgrades or failures.
  </p>
</div>
<div className="space-y-6 text-sm text-gray-700 dark:text-white leading-relaxed mt-10">

  <h2 className="font-semibold text-base mt-6 mb-2">What is Apparent Power?</h2>
  <p>
    Apparent power is the combination of real power (watts) and reactive power (vars) in an AC system. It's measured in volt-amperes (VA) and represents the total power flowing through a circuit—whether it’s being effectively used or just circulating between components. Converting it to kilovolt-amperes (kVA) is especially helpful in large-scale systems where measurements are often in the thousands.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">VA vs kVA – Key Difference</h2>
  <ul className="list-disc ml-4">
    <li><strong>VA</strong> stands for volt-amperes, commonly used in smaller devices.</li>
    <li><strong>kVA</strong> is simply 1000 VA, and is used for larger installations and equipment ratings.</li>
    <li>Both are units of apparent power, but kVA helps simplify large numerical values.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Common Equipment Rated in kVA</h2>
  <ul className="list-disc ml-4">
    <li>Generators and alternators</li>
    <li>Transformers (e.g., 500 kVA transformer)</li>
    <li>UPS backup systems</li>
    <li>HVAC motor units</li>
    <li>Large commercial kitchen appliances</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Quick Reference Chart</h2>
  <table className="table-auto w-full border-collapse border text-sm">
    <thead>
      <tr>
        <th className="border px-2 py-1 text-left">Apparent Power (VA)</th>
        <th className="border px-2 py-1 text-left">Equivalent Power (kVA)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border px-2 py-1">500 VA</td><td className="border px-2 py-1">0.5 kVA</td></tr>
      <tr><td className="border px-2 py-1">1000 VA</td><td className="border px-2 py-1">1.0 kVA</td></tr>
      <tr><td className="border px-2 py-1">2500 VA</td><td className="border px-2 py-1">2.5 kVA</td></tr>
      <tr><td className="border px-2 py-1">5000 VA</td><td className="border px-2 py-1">5.0 kVA</td></tr>
      <tr><td className="border px-2 py-1">10000 VA</td><td className="border px-2 py-1">10.0 kVA</td></tr>
    </tbody>
  </table>

  <h2 className="font-semibold text-base mt-6 mb-2">Did You Know?</h2>
  <p>
    Utility companies often use kVA instead of kW because it reflects the full load they must support, including inefficiencies caused by the power factor. Even if you're not using all the real power (kW), the grid still has to be capable of delivering the total kVA.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Where This Conversion is Useful</h2>
  <ul className="list-disc ml-4">
    <li>Determining transformer capacity for a building or data center</li>
    <li>Calculating UPS size requirements in kVA for continuous operation</li>
    <li>Estimating power demand before purchasing large electrical equipment</li>
  </ul>
</div>

<div className="space-y-6 text-sm text-gray-700 dark:text-white leading-relaxed mt-10">

  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Apparent Power</h2>
  <p>
    Apparent power is an essential concept in AC electrical systems. Unlike real power (measured in watts), which accounts only for the usable energy, apparent power (measured in volt-amperes or VA) includes both real power and reactive power. This makes VA a more complete representation of the total load on an electrical system.
  </p>

  <p>
    When dealing with large-scale systems such as hospitals, industrial machines, or data centers, the power demands are often so high that measuring in VA becomes cumbersome. That’s where the kilovolt-ampere (kVA) unit becomes useful—it simplifies the values for clarity and easier planning.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Why Convert VA to kVA?</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Scalability:</strong> Engineers and technicians working on large projects prefer using kVA for clean, readable values.</li>
    <li><strong>Compliance:</strong> Most electrical devices above 1000 VA are labeled in kVA.</li>
    <li><strong>Equipment Ratings:</strong> Electrical equipment like transformers, generators, and UPS systems are typically specified in kVA.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">How to Read VA and kVA on Equipment</h2>
  <p>
    On your device label or datasheet, you’ll often find the power rating listed as:
  </p>
  <ul className="list-disc ml-4">
    <li><strong>VA (Volt-Amperes):</strong> For small to medium appliances or electronics</li>
    <li><strong>kVA (Kilovolt-Amperes):</strong> For larger power systems and commercial-grade devices</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Real-World Example</h2>
  <p>
    You are managing a commercial kitchen that operates a walk-in freezer, HVAC, and a food processing unit. The total apparent power drawn by the system is 18,000 VA. Rather than logging each reading in VA, converting to kVA simplifies this:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    18,000 VA ÷ 1000 = 18 kVA
  </p>
  <p>
    Now, you can size your generator or UPS based on this 18 kVA load, which is how most manufacturers rate their equipment.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Visual Guide for Quick Conversion</h2>
  <table className="table-auto w-full border-collapse border text-sm mt-4">
    <thead>
      <tr>
        <th className="border px-2 py-1">VA</th>
        <th className="border px-2 py-1">kVA</th>
        <th className="border px-2 py-1">Use Case</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border px-2 py-1">1000 VA</td><td className="border px-2 py-1">1.0 kVA</td><td className="border px-2 py-1">Small server</td></tr>
      <tr><td className="border px-2 py-1">5000 VA</td><td className="border px-2 py-1">5.0 kVA</td><td className="border px-2 py-1">Office equipment</td></tr>
      <tr><td className="border px-2 py-1">10000 VA</td><td className="border px-2 py-1">10.0 kVA</td><td className="border px-2 py-1">HVAC unit</td></tr>
      <tr><td className="border px-2 py-1">15000 VA</td><td className="border px-2 py-1">15.0 kVA</td><td className="border px-2 py-1">Backup generator sizing</td></tr>
    </tbody>
  </table>

  <h2 className="font-semibold text-base mt-6 mb-2">Tips for Electrical Designers</h2>
  <ul className="list-disc ml-4">
    <li>Always check the voltage level when working with VA values—it affects how equipment should be rated.</li>
    <li>Use kVA ratings when documenting high-power systems in building plans or technical reports.</li>
    <li>When ordering transformers, always compare your calculated kVA against the device's efficiency rating.</li>
  </ul>
</div>
<div className="space-y-6 text-sm text-gray-700 dark:text-white leading-relaxed mt-10">

  <h2 className="font-semibold text-base mt-6 mb-2">What Is Apparent Power?</h2>
  <p>
    Apparent power is the combination of real power and reactive power in an electrical system. It is measured in volt-amperes (VA) and represents the total power supplied by a source regardless of whether all of it is used efficiently. The VA rating helps engineers and technicians evaluate the load capacity and electrical safety of systems, especially in AC circuits.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Difference Between VA and kVA</h2>
  <p>
    The main difference between VA and kVA is simply the magnitude of the value. 1 kVA equals 1000 VA. Converting to kVA is useful when working with large systems, such as commercial buildings, hospitals, or factories, where total power demand can easily exceed thousands of VA. Using kVA keeps the numbers clean and easy to read.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Common Use Cases for VA to kVA Conversion</h2>
  <ul className="list-disc ml-4">
    <li><strong>Generator Sizing:</strong> Power systems are rated in kVA, and knowing your load in kVA is crucial for sizing backup generators accurately.</li>
    <li><strong>Transformer Design:</strong> Transformers are designed based on kVA ratings rather than just wattage.</li>
    <li><strong>UPS Systems:</strong> Most UPS systems are rated in kVA for clarity and industry standardization.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Power Factor Consideration</h2>
  <p>
    While converting VA to kVA only involves scaling by 1000, in real-world applications you might also need to factor in power factor (PF) when switching to real power (watts). However, for apparent power, PF is not applied directly—it’s purely a scaling between units.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Conversion Chart</h2>
  <table className="table-auto w-full border-collapse border">
    <thead>
      <tr>
        <th className="border px-2 py-1">VA</th>
        <th className="border px-2 py-1">kVA</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border px-2 py-1">500 VA</td><td className="border px-2 py-1">0.5 kVA</td></tr>
      <tr><td className="border px-2 py-1">1000 VA</td><td className="border px-2 py-1">1.0 kVA</td></tr>
      <tr><td className="border px-2 py-1">2500 VA</td><td className="border px-2 py-1">2.5 kVA</td></tr>
      <tr><td className="border px-2 py-1">10,000 VA</td><td className="border px-2 py-1">10.0 kVA</td></tr>
    </tbody>
  </table>

  <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions (FAQ)</h2>
  <ul className="list-disc ml-4">
    <li><strong>Is VA the same as watts?</strong> No, VA includes both real and reactive power, whereas watts only include usable power.</li>
    <li><strong>Why is my transformer rated in kVA?</strong> Because it handles both the real and reactive components of power, and kVA offers a standard for sizing.</li>
    <li><strong>What does 1 kVA mean in amps?</strong> That depends on the voltage. Use the formula: Amps = kVA × 1000 / Voltage.</li>
  </ul>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion</h2>
  <p>
    Converting from VA to kVA may seem simple, but it's a crucial part of planning and scaling electrical systems. This converter simplifies that process, ensuring accurate planning whether you're powering a small office or an industrial plant.
  </p>
</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VAToKVAConverter;
