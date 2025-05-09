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

        </CardContent>
      </Card>
    </div>
  );
};

export default WhToKwConverter;
