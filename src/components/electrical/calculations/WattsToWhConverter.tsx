import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WattsToWhConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(100);
  const [hours, setHours] = useState<number>(5);

  const calculateWh = (watts: number, hours: number) => watts * hours;
  const wh = calculateWh(watts, hours);

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
              <Link to="/energy-conversions">Energy Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Watts to Watt-hours Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Watt-hours Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Use this simple and effective converter to calculate energy consumption in watt-hours (Wh) from power in watts (W) over a period of time in hours (h).
            Watt-hours measure the total amount of energy used by an electrical device. Whether you're comparing appliances, estimating battery capacity needs, or calculating utility costs, this tool provides clarity and precision.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power in Watts (W):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time in Hours (h):</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <strong>Converted Energy:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{wh} Wh</p>
            </div>
          </div>

          <section>
            <h2 className="font-semibold text-base mt-6 mb-2">What Are Watt-hours?</h2>
            <p>
              Watt-hours (Wh) represent a unit of energy. It's the total energy consumed or produced when a device uses one watt of power for one hour.
              For instance, if a 100-watt bulb runs for 10 hours, it consumes 100 × 10 = 1000 Wh, or 1 kilowatt-hour (kWh).
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
            <p><strong>Wh = W × h</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li><strong>Wh</strong>: Energy in watt-hours</li>
              <li><strong>W</strong>: Power in watts</li>
              <li><strong>h</strong>: Time in hours</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base mt-6 mb-2">Real-Life Examples:</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Example 1:</strong> A 100W fan running for 8 hours = 100 × 8 = 800 Wh</li>
              <li><strong>Example 2:</strong> A 1200W hair dryer used for 0.5 hours = 1200 × 0.5 = 600 Wh</li>
              <li><strong>Example 3:</strong> A 50W laptop charger used for 4 hours = 50 × 4 = 200 Wh</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base mt-6 mb-2">Why It Matters:</h2>
            <p>
              Understanding energy consumption helps:
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Estimate electricity bills</li>
                <li>Choose energy-efficient devices</li>
                <li>Calculate battery capacity needs</li>
                <li>Design solar panel systems</li>
                <li>Monitor and reduce energy usage</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base mt-6 mb-2">Energy Consumption Table:</h2>
            <table className="table-auto w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Device</th>
                  <th className="border p-2 text-left">Power (W)</th>
                  <th className="border p-2 text-left">Time (h)</th>
                  <th className="border p-2 text-left">Energy (Wh)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border p-2">LED Bulb</td><td className="border p-2">10</td><td className="border p-2">6</td><td className="border p-2">60</td></tr>
                <tr><td className="border p-2">TV</td><td className="border p-2">120</td><td className="border p-2">4</td><td className="border p-2">480</td></tr>
                <tr><td className="border p-2">Microwave</td><td className="border p-2">1000</td><td className="border p-2">0.2</td><td className="border p-2">200</td></tr>
                <tr><td className="border p-2">Air Conditioner</td><td className="border p-2">1500</td><td className="border p-2">8</td><td className="border p-2">12000</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-semibold text-base mt-6 mb-2">Battery Storage Context:</h2>
            <p>
              When evaluating batteries, especially in solar setups or portable electronics, watt-hours indicate how much energy a battery can store or deliver.
              For instance, a 500 Wh battery can run a 100W device for 5 hours.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base mt-6 mb-2">Energy Saving Tips:</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Switch to LED lighting</li>
              <li>Unplug devices when not in use</li>
              <li>Use energy-efficient appliances</li>
              <li>Limit heating/cooling runtime</li>
              <li>Invest in solar or renewable energy systems</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base mt-6 mb-2">FAQs:</h2>
            <div>
              <p><strong>1. What's the difference between watts and watt-hours?</strong><br />
              Watts measure power (rate of energy use), watt-hours measure energy (total consumption).</p>

              <p><strong>2. Is Wh the same as kWh?</strong><br />
              1 kWh = 1000 Wh. It's a larger unit commonly used in electricity billing.</p>

              <p><strong>3. Can I convert Wh to watts?</strong><br />
              Only if you know the time. Watts = Wh ÷ hours.</p>

              <p><strong>4. How do I calculate cost from Wh?</strong><br />
              Convert Wh to kWh and multiply by your local rate (e.g., $/kWh).</p>
            </div>
          </section>

          <section>
            <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
            <p>
              Knowing how to convert watts to watt-hours empowers you to make smarter energy decisions at home, work, or in industrial settings.
              Whether you're reducing your carbon footprint, sizing a solar panel array, or managing backup power systems, this basic yet powerful calculation helps guide your choices.
              Use this tool frequently to estimate, monitor, and optimize your energy use.
            </p>
          </section>
          <p>
    The conversion from watts (W) to watt-hours (Wh) plays a crucial role in understanding how much energy a device consumes over time. While watts represent the rate of energy consumption (power), watt-hours reflect the total amount of energy used. By multiplying power in watts by the number of hours the device is running, you get the total energy consumed in watt-hours.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Formula</h2>
  <p><strong>Wh = W × h</strong></p>
  <p>Where:</p>
  <ul className="list-disc list-inside">
    <li><strong>W</strong> = Power in watts</li>
    <li><strong>h</strong> = Time in hours</li>
    <li><strong>Wh</strong> = Energy in watt-hours</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Example</h2>
  <p>
    If a laptop uses 60 watts and runs for 5 hours:
    <br />
    Wh = 60 × 5 = <strong>300 Wh</strong>
  </p>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Consumption of Common Appliances</h2>
    <table className="table-auto w-full border-collapse border">
      <thead>
        <tr>
          <th className="border p-2 text-left">Appliance</th>
          <th className="border p-2 text-left">Power (W)</th>
          <th className="border p-2 text-left">Time (h)</th>
          <th className="border p-2 text-left">Energy (Wh)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border p-2">Refrigerator</td><td className="border p-2">150</td><td className="border p-2">24</td><td className="border p-2">3600</td></tr>
        <tr><td className="border p-2">Laptop</td><td className="border p-2">60</td><td className="border p-2">8</td><td className="border p-2">480</td></tr>
        <tr><td className="border p-2">TV</td><td className="border p-2">100</td><td className="border p-2">5</td><td className="border p-2">500</td></tr>
        <tr><td className="border p-2">Microwave</td><td className="border p-2">1200</td><td className="border p-2">0.5</td><td className="border p-2">600</td></tr>
      </tbody>
    </table>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions</h2>
    <ul className="space-y-3 list-disc list-inside">
      <li>
        <strong>Is watt-hour the same as kilowatt-hour?</strong><br />
        Not quite. 1 kilowatt-hour (kWh) equals 1000 watt-hours (Wh). Your electricity bill is calculated in kWh.
      </li>
      <li>
        <strong>Why is it important to convert watts to watt-hours?</strong><br />
        This helps you understand how much energy a device uses over time, which is vital for planning power consumption or battery sizing.
      </li>
      <li>
        <strong>Do I need to convert watts to Wh for solar panels?</strong><br />
        Yes. Solar energy systems are rated in watt-hours or kilowatt-hours. Knowing Wh lets you match consumption to solar panel output.
      </li>
      <li>
        <strong>Is lower Wh always better?</strong><br />
        It depends. Lower Wh means less energy used, but the device still must meet your needs. Efficiency is key, not just lower numbers.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Tips to Save Energy and Reduce Wh Usage</h2>
    <ol className="list-decimal list-inside ml-4">
      <li>Switch to energy-efficient LED lighting.</li>
      <li>Unplug devices when not in use to avoid phantom loads.</li>
      <li>Use smart thermostats and timers to automate savings.</li>
      <li>Enable power-saving modes on computers and TVs.</li>
      <li>Regularly maintain appliances to keep them running efficiently.</li>
    </ol>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Conclusion</h2>
    <p>
      The ability to convert watts to watt-hours is more than just academic—it's a practical skill for managing energy use in our homes, businesses, and even off-grid systems. This knowledge allows users to size batteries, plan for solar installations, or simply monitor electricity bills. Using this calculator helps you make smart, energy-conscious decisions every day. The more you understand your power consumption in Wh, the more control you gain over your energy habits and costs.
    </p>
  </div>
  <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Detailed Real-World Example</h2>
  <p>
    Let’s say you have a desktop computer that consumes 250 watts of power. You work 8 hours a day. To calculate its energy usage:
  </p>
  <p className="mt-2">
    <strong>Wh = 250 W × 8 h = 2000 Wh or 2 kWh</strong>
  </p>
  <p className="mt-2">
    If your electricity provider charges $0.15 per kWh, then the cost for running your desktop for a day is:
  </p>
  <p className="mt-2">
    <strong>2 kWh × $0.15 = $0.30/day</strong>
  </p>
  <p>
    Over 30 days, that’s approximately $9/month just for your desktop usage. This showcases how small devices add up over time.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Applications in Industry</h2>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Manufacturing:</strong> Plant managers estimate machinery energy usage by converting watts to Wh to optimize processes and reduce downtime.</li>
    <li><strong>Data Centers:</strong> Power usage of servers is monitored in watt-hours to manage heat, cooling, and capacity.</li>
    <li><strong>Construction:</strong> Battery-operated tools and lights use Wh ratings to determine how long they’ll operate on a charge.</li>
    <li><strong>Telecom:</strong> Telecom towers powered by batteries or solar panels rely on precise Wh calculations for uninterrupted operation.</li>
  </ul>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Battery Backup Estimation</h2>
  <p>
    If you want to power a 100 W light using a battery, and want it to last for 10 hours:
    <br />
    Required energy = <strong>100 W × 10 h = 1000 Wh</strong>
  </p>
  <p className="mt-2">
    If you're using a 12V battery, convert Wh to Ah using: <strong>Ah = Wh / V</strong>
    <br />
    So, <strong>Ah = 1000 / 12 = 83.33 Ah</strong>
  </p>
  <p>
    This means you’d need a 12V battery rated for at least 83.33 Ah capacity to run your light for 10 hours.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Watt-hours vs Amp-hours</h2>
  <p>
    While watt-hours (Wh) and amp-hours (Ah) both measure energy, they do so in different ways. Wh accounts for voltage and is more comprehensive:
  </p>
  <ul className="list-disc list-inside mt-2">
    <li><strong>Watt-hours (Wh):</strong> Total energy (includes voltage)</li>
    <li><strong>Amp-hours (Ah):</strong> Current over time, voltage-dependent</li>
  </ul>
  <p className="mt-2">
    The formula <strong>Wh = Ah × V</strong> helps you move between these units.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Using Wh in Solar Energy Systems</h2>
  <p>
    Planning solar setups requires matching your total daily energy needs (in Wh or kWh) with your solar panel output. If your home uses 6,000 Wh per day:
  </p>
  <ul className="list-disc list-inside mt-2">
    <li>And if you get 5 hours of sunlight daily,</li>
    <li>You’d need panels that produce <strong>6,000 ÷ 5 = 1,200 W</strong></li>
    <li>This could mean 4 x 300W panels, or 6 x 200W panels</li>
  </ul>
  <p>
    Battery capacity should also cover your expected Wh usage when sunlight isn't available.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Billing Impact of Energy Usage</h2>
  <p>
    Utility companies bill you based on kilowatt-hours (kWh), which is just 1,000 watt-hours. By knowing your Wh usage, you can:
  </p>
  <ul className="list-disc list-inside">
    <li>Estimate future energy bills</li>
    <li>Calculate cost savings from more efficient devices</li>
    <li>Identify appliances that consume the most power</li>
  </ul>
  <p className="mt-2">
    For example, if your air conditioner runs 6 hours a day at 1500 W:
    <br />
    1500 × 6 = 9000 Wh = 9 kWh
    <br />
    If the rate is $0.18/kWh → <strong>$1.62/day × 30 = $48.60/month</strong>
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Summary</h2>
  <p>
    Converting watts to watt-hours is essential for energy planning, appliance management, solar system sizing, and cost prediction. By using this calculator, you can:
  </p>
  <ul className="list-disc list-inside">
    <li>Gain insight into device energy consumption</li>
    <li>Plan battery and inverter needs</li>
    <li>Understand your monthly energy bills</li>
    <li>Choose more efficient electronics</li>
  </ul>
  <p className="mt-2">
    This tool is a practical bridge between technical specs and real-world understanding. Whether you're a student, a homeowner, a solar installer, or an engineer—accurate Wh knowledge puts power back in your hands.
  </p>
</div>
{/* Renewable Energy Context */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Watts to Wh in Renewable Energy</h2>
  <p>
    In renewable energy systems, especially solar and wind setups, calculating watt-hours is essential to determine how much energy can be stored and used later. For example, a 200W solar panel producing power for 5 hours generates:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>Wh = 200 W × 5 h = 1000 Wh</code>
  </pre>
  <p>
    If your daily household consumption is 5,000 Wh, you would need at least five such panels working under optimal sunlight. Knowing this helps in solar panel sizing and storage planning.
  </p>
</div>

{/* Graphical Representation */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding with Charts</h2>
  <p>
    Visualizing energy use across hours helps identify peak consumption times. Here’s a simplified energy consumption pattern across a typical day:
  </p>
  <ul className="list-disc list-inside mt-2">
    <li><strong>6 AM – 9 AM:</strong> 500 Wh (kitchen, lights)</li>
    <li><strong>9 AM – 5 PM:</strong> 700 Wh (work devices, fans)</li>
    <li><strong>5 PM – 9 PM:</strong> 1200 Wh (AC, entertainment)</li>
    <li><strong>9 PM – 6 AM:</strong> 300 Wh (standby devices)</li>
  </ul>
  <p>
    Total daily usage = <strong>2700 Wh</strong>. These values can be graphed dynamically for better insights in future versions.
  </p>
</div>

{/* Commercial Usage Examples */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Commercial Application Scenarios</h2>
  <ul className="list-disc list-inside space-y-2">
    <li>
      <strong>Retail Shops:</strong> Calculate Wh for lighting + POS + AC to size UPS backup.
    </li>
    <li>
      <strong>Event Management:</strong> Estimate total load (e.g., stage lighting, sound systems) for temporary power setups.
    </li>
    <li>
      <strong>Outdoor Exhibits:</strong> Portable solar kits often state their output in Wh; use this converter to match device needs.
    </li>
  </ul>
</div>

{/* Load Duration Chart Concept */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Matching Load with Time</h2>
  <p>
    It’s essential not just to know total Wh but also to understand how long a given load will run:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>Runtime (hours) = Battery Wh ÷ Device Watts</code>
  </pre>
  <p>
    Example: A 600 Wh battery can power a 100W light for 6 hours. This helps users plan emergency kits or remote setups.
  </p>
</div>

{/* Multiple Device Calculation */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Calculating Total Load</h2>
  <p>
    To calculate energy needs for multiple devices, add all wattages and multiply by hours used:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>(Bulb: 10W × 4h) + (Fan: 75W × 6h) = 40 + 450 = 490 Wh</code>
  </pre>
  <p>
    This total helps size inverters, batteries, and solar panel requirements efficiently.
  </p>
</div>

{/* Quick Quiz Section */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Try It Yourself (Quick Quiz)</h2>
  <ul className="list-decimal list-inside space-y-2">
    <li>You have a blender that consumes 500W. You use it for 15 minutes. How many Wh?</li>
    <li>A camping light uses 15W. You run it for 10 hours. What’s the energy consumed?</li>
    <li>If your desktop consumes 180W and you use it 5 hours daily, what is the monthly energy usage?</li>
  </ul>
  <p className="mt-2">Use this calculator to verify your answers and build confidence in energy math!</p>
</div>

{/* Interactive Suggestion */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Future Improvements (User Feedback)</h2>
  <p>
    We’re working on allowing multiple inputs for batch calculation. If you'd like to see features like energy cost calculator,
    solar offset estimator, or runtime predictions for devices—let us know!
  </p>
</div>

{/* Safety Tips */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Safety Considerations</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>Always check the rated power before plugging appliances into limited power sources like inverters or portable batteries.</li>
    <li>Ensure cables and sockets can handle the power load (W).</li>
    <li>Don’t overload devices beyond their wattage—check Wh calculations to estimate safe run durations.</li>
  </ul>
</div>

{/* Closing Educational Message */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Why It’s Worth Knowing</h2>
  <p>
    Understanding watts and watt-hours is essential for personal energy literacy. From optimizing bills to selecting
    gadgets, or even planning off-grid travel, this simple math can guide responsible and sustainable energy choices.
    Try using this tool daily and start comparing devices you use — the results might surprise you!
  </p>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToWhConverter;
