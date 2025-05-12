import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; 

const WhToKwConverter: React.FC = () => {
  const [wh, setWh] = useState<number>(5000); // Default 5000 Wh
  const calculateKw = (wh: number) => wh / 1000;
  const kw = calculateKw(wh);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Breadcrumb */}
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
              <Link to="/energy-conversions">Energy Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Wh to Kw Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Card Content */}
      <Card>
        <CardHeader>
          <CardTitle>Wh to Kw Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert energy in watt-hours (Wh) to power in kilowatts (kW).</p>

          {/* Wh Input */}
          <div>
            <label className="block font-medium mb-1">Energy in Watt-hours (Wh):</label>
            <input
              type="number"
              value={wh}
              onChange={(e) => setWh(Number(e.target.value))}
              className="w-full border px-3 py-2 rounded dark:text-black"
            />
          </div>

          {/* Converted Value Display */}
          <div>
            <strong>Converted Power:</strong>
            <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{kw.toFixed(2)} kW</p>
          </div>

          {/* Examples */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
            <ul className="space-y-2 list-disc list-inside">
              {[1000, 1500, 2500, 7500].map((exampleWh, index) => (
                <li key={index}>
                  <p>Energy: {exampleWh} Wh</p>
                  <p>Converted Power: {exampleWh / 1000} kW</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Formula Explanation */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
            <p>
              <strong>kW = Wh ÷ 1000</strong><br />
              Where:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li><strong>kW</strong>: Power in kilowatts (kW)</li>
              <li><strong>Wh</strong>: Energy in watt-hours (Wh)</li>
            </ul>
          </div>

          {/* Notes */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Important Notes:</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Watt-hours (Wh) measure energy over time, while kilowatts (kW) measure instantaneous power.</li>
              <li>This simple division is valid because 1 kilowatt equals 1000 watts.</li>
            </ul>
          </div>

          {/* Practical Applications */}
        <div>
          <h2 className="font-semibold text-base mt-6 mb-2">Real-World Applications:</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Solar Power Systems:</strong> Homeowners and businesses use this conversion to evaluate solar panel output. For example, if solar panels generate 6000 Wh in one hour, the power output is 6 kW.</li>
            <li><strong>Battery Storage:</strong> Batteries are rated in Wh, while appliances consume kW. Converting helps determine how long a battery can power a load.</li>
            <li><strong>Electric Vehicle Charging:</strong> EV charging stations show power in kW, while battery capacity is in Wh or kWh. This helps estimate charging times and range.</li>
            <li><strong>Generator Sizing:</strong> To back up energy in Wh, the generator size in kW must be calculated to handle the load efficiently.</li>
          </ul>
        </div>

        {/* Conversion Tips */}
        <div>
          <h2 className="font-semibold text-base mt-6 mb-2">Conversion Tips:</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Use this conversion only when dealing with energy produced or consumed over a 1-hour period.</li>
            <li>If the time is different, you may need to consider energy per unit time to get accurate power ratings.</li>
            <li>Always double-check whether your values are in Wh or kWh before applying the formula.</li>
            <li>Use this formula only for direct current or steady state scenarios unless specified otherwise.</li>
          </ul>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions:</h2>
          <div className="space-y-3">
            <div>
              <strong>Q: Can I use this tool for alternating current (AC) systems?</strong>
              <p>A: Yes, but ensure that the energy measurement (Wh) represents total usage or generation over time, and power factor is not needed for this basic calculation.</p>
            </div>
            <div>
              <strong>Q: How is this different from kWh?</strong>
              <p>A: Kilowatt-hours (kWh) measure total energy, while kilowatts (kW) measure power. This tool converts Wh to kW assuming a 1-hour period.</p>
            </div>
            <div>
              <strong>Q: What happens if the time is not one hour?</strong>
              <p>A: In that case, you would need to divide Wh by the actual number of hours to get the average kW (e.g., 6000 Wh over 2 hours = 3 kW).</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div>
          <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
          <p>
            Understanding how to convert Wh to kW enables you to make smarter decisions about electricity usage, battery storage, generator capacity, and solar panel output. 
            It’s a foundational concept for anyone working with or studying energy systems. Always remember: energy tells you how much work can be done, and power tells you how fast it can be done. 
            This converter provides an easy way to make the connection between those two.
          </p>
        </div>
        {/* In-Depth Use Case: Home Energy Audit */}
        <div>
          <h2 className="font-semibold text-base mt-6 mb-2">Use Case: Home Energy Audit Example</h2>
          <p>
            Suppose you’re conducting a home energy audit to understand how much power your household uses. You measure your energy consumption over a day and find that your devices consumed 24,000 Wh. 
            To understand your power usage, you can divide this value by the number of hours those devices were used. If your total consumption was over 8 hours:
          </p>
          <p className="mt-2"><strong>Average Power = 24,000 Wh ÷ 8 h = 3,000 W or 3 kW</strong></p>
          <p>
            This means your home was using power at an average rate of 3 kilowatts. Knowing this, you can evaluate whether your current energy plan, solar setup, or backup generator is sufficient.
          </p>
        </div>

        {/* Related Conversions */}
        <div>
          <h2 className="font-semibold text-base mt-6 mb-2">Related Conversions:</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>kWh to kW:</strong> Divide kWh by the number of hours.</li>
            <li><strong>kW to Wh:</strong> Multiply kW by 1000.</li>
            <li><strong>Wh to kWh:</strong> Divide Wh by 1000 (same as this tool, but output in kWh).</li>
            <li><strong>kW to Amps:</strong> Use the formula: <em>Amps = kW × 1000 / Voltage</em>.</li>
          </ul>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="font-semibold text-base mt-6 mb-2">Comparison Table:</h2>
          <table className="w-full table-auto border border-gray-300 text-left text-sm mt-2">
            <thead>
              <tr className="bg-gray-800">
                <th className="border px-2 py-1">Wh</th>
                <th className="border px-2 py-1">kW (for 1 hour)</th>
                <th className="border px-2 py-1">kW (for 2 hours)</th>
                <th className="border px-2 py-1">kW (for 4 hours)</th>
              </tr>
            </thead>
            <tbody>
              {[1000, 2000, 4000, 8000].map((val, idx) => (
                <tr key={idx}>
                  <td className="border px-2 py-1">{val}</td>
                  <td className="border px-2 py-1">{(val / 1_000).toFixed(2)}</td>
                  <td className="border px-2 py-1">{(val / 2_000).toFixed(2)}</td>
                  <td className="border px-2 py-1">{(val / 4_000).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Educational Insight */}
        <div>
          <h2 className="font-semibold text-base mt-6 mb-2">Why This Matters:</h2>
          <p>
            Understanding the distinction between energy and power is essential. When you get your electricity bill, it’s based on energy consumed (kWh), but when choosing an appliance or generator, you're more concerned with how much power (kW) it uses or produces at any given moment.
          </p>
          <p className="mt-2">
            This conversion is especially useful for people involved in sustainable energy planning, students studying physics or electrical engineering, and professionals managing power systems.
          </p>
        </div>
        {/* Myth Busting & Clarifications */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Myth Busting & Clarifications:</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Myth:</strong> "1 Wh is the same as 1 W." <br /> 
      <span className="ml-2">❌ Incorrect. Wh measures energy (amount used), while W measures power (rate of use).</span>
    </li>
    <li><strong>Myth:</strong> "You can always convert Wh to kW directly."</li>
    <li>
      ✅ <strong>Clarification:</strong> Only if you’re referring to energy over exactly one hour. If time differs, use the full formula: <em>kW = Wh ÷ hours ÷ 1000</em>.
    </li>
    <li><strong>Myth:</strong> "kWh and kW are interchangeable." <br />
      <span className="ml-2">❌ Not true. kWh is cumulative energy. kW is the rate of energy transfer at a given moment.</span>
    </li>
    <li><strong>Tip:</strong> Think of kWh as your monthly water usage, and kW as the size of the pipe delivering it.</li>
  </ul>
</div>
{/* Glossary of Terms */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Glossary of Terms:</h2>
  <ul className="list-disc list-inside ml-4">
    <li>
      <strong>Watt (W):</strong> The basic unit of power, representing the rate of energy transfer equivalent to 1 joule per second.
    </li>
    <li>
      <strong>Watt-hour (Wh):</strong> A unit of energy equal to one watt (1 W) of power used for one hour. Measures the total energy consumed or produced.
    </li>
    <li>
      <strong>Kilowatt (kW):</strong> 1000 watts. A larger unit of power typically used to measure the rate at which energy is consumed or produced.
    </li>
    <li>
      <strong>Kilowatt-hour (kWh):</strong> A unit of energy equal to one kilowatt (1 kW) of power used for one hour. This is commonly found on utility bills.
    </li>
    <li>
      <strong>Power:</strong> The rate at which energy is used or generated (measured in watts or kilowatts).
    </li>
    <li>
      <strong>Energy:</strong> The total amount of work done or heat transferred (measured in Wh or kWh).
    </li>
    <li>
      <strong>Conversion Factor:</strong> In this context, 1000 (because 1 kW = 1000 W and 1 kWh = 1000 Wh).
    </li>
  </ul>
</div>
{/* Common Mistakes and How to Avoid Them */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Common Mistakes and How to Avoid Them:</h2>
  <ul className="list-disc list-inside ml-4">
    <li>
      <strong>Confusing Wh with kW:</strong> Wh measures energy, while kW measures power. They are not interchangeable. Always divide by 1000 to convert Wh to kW (assuming a 1-hour period).
    </li>
    <li>
      <strong>Ignoring Time:</strong> Power (kW) is a rate. If the energy (Wh) was used over more or less than one hour, divide by the number of hours to get the correct average kW.
    </li>
    <li>
      <strong>Using kW when kWh is needed:</strong> When calculating energy bills, use kWh (not kW). kW only tells you how fast energy is used, not how much in total.
    </li>
    <li>
      <strong>Incorrect Units:</strong> Always check your unit labels. Converting between kW, kWh, and Wh incorrectly leads to misinterpretation of device capabilities or energy costs.
    </li>
    <li>
      <strong>Forgetting Power Factor in AC Systems:</strong> While this tool simplifies conversion by ignoring power factor, in real-world AC applications with motors or inductive loads, power factor affects actual power consumption.
    </li>
  </ul>
</div>
{/* Advanced Insights and Energy Efficiency Considerations */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Advanced Insights and Energy Efficiency Considerations:</h2>
  <p>
    While the basic conversion from Wh to kW is mathematically simple, its real-world applications can be quite complex. Power ratings and energy consumption data are not always linear, especially in systems with fluctuating loads or variable power factors. 
    For example, an air conditioner may draw different amounts of power depending on external temperature, humidity, and usage patterns, so calculating average power using Wh data requires careful consideration of the time period.
  </p>

  <p className="mt-2">
    Another important factor is <strong>energy efficiency</strong>. Devices that use energy more efficiently can deliver the same performance with fewer watt-hours, meaning lower power requirements (in kW). 
    When auditing systems or designing electrical setups, converting Wh to kW allows users to compare appliances, size electrical circuits, and plan battery or solar capacity accordingly.
  </p>

  <p className="mt-2">
    Furthermore, in industrial applications or large-scale energy grids, conversions between Wh, kWh, and kW are often part of load forecasting, demand response planning, and tariff calculations. 
    Utilities may charge based on peak demand (kW) or total energy consumed (kWh), making it essential to understand how energy and power relate.
  </p>

  <p className="mt-2">
    Lastly, integrating this understanding into daily habits can drive significant savings. For instance, knowing how many Wh your appliances use and converting that to kW can reveal how much each device contributes to your overall load, 
    helping you identify energy hogs and reduce unnecessary consumption.
  </p>
</div>
{/* Contextual Applications of Wh to kW Conversion */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Contextual Applications of Wh to kW Conversion:</h2>

  <p>
    The Wh to kW conversion has wide-reaching applications across various industries and environments beyond residential use. Understanding these helps in making informed decisions regarding energy planning, budgeting, and efficiency improvements.
  </p>

  <h3 className="font-semibold mt-4">1. Commercial Facilities:</h3>
  <p>
    In commercial buildings like offices, hotels, and data centers, energy audits often require converting Wh (total energy use) into average kW (power demand). This informs decisions like upgrading HVAC systems or optimizing lighting schedules.
  </p>

  <h3 className="font-semibold mt-4">2. Off-Grid Systems:</h3>
  <p>
    For cabins, RVs, or remote telecom towers running on batteries and solar panels, power availability is critical. Knowing how many Wh are stored and converting it into kW helps users decide how many and which appliances can run simultaneously without depleting the battery too quickly.
  </p>

  <h3 className="font-semibold mt-4">3. Smart Grid Integration:</h3>
  <p>
    Smart meters and energy management systems track consumption in Wh or kWh, and use this data to forecast power demand in kW. This supports load balancing, demand-response strategies, and even dynamic pricing based on real-time usage trends.
  </p>

  <h3 className="font-semibold mt-4">4. Industrial Machinery:</h3>
  <p>
    Factories and manufacturing units track energy consumption of motors, compressors, and conveyor belts. Engineers convert Wh to kW to calculate load profiles, schedule operation cycles efficiently, and determine if backup generators can handle peak loads.
  </p>

  <h3 className="font-semibold mt-4">5. Educational Demonstrations:</h3>
  <p>
    Teachers and professors often use Wh to kW conversion to help students understand the relationship between energy and power in physics or electrical engineering. It's a foundational concept taught in renewable energy, electronics, and even economics courses related to utility billing.
  </p>

  <p className="mt-4">
    Whether you're managing a small off-grid system or a corporate energy dashboard, converting watt-hours to kilowatts plays a vital role in quantifying, optimizing, and forecasting energy performance.
  </p>
</div>

{/* Final Thoughts and Conclusion */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Final Thoughts and Conclusion:</h2>
  <p>
    Converting watt-hours (Wh) to kilowatts (kW) is a fundamental concept in energy management, enabling a clear understanding of how much power is being used or generated in a given context. 
    By simply dividing the energy (Wh) by 1000, users can gauge the equivalent power in kilowatts for a one-hour usage window.
  </p>
  <p className="mt-2">
    This conversion is especially helpful for evaluating energy systems like solar installations, battery storage, electric vehicles, and generator setups. Whether you're a student, homeowner, technician, or engineer, 
    mastering this relationship empowers better decisions and more efficient energy use.
  </p>
  <p className="mt-2">
    Always ensure you consider the duration over which energy is consumed, as this impacts the final power calculation. With a strong grasp of these basics, you'll be well-equipped to interpret, plan, and optimize your energy needs effectively.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default WhToKwConverter;
