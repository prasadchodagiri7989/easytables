import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const AhToMAhGuide: React.FC = () => {
  const [ampHours, setAmpHours] = useState<number>(1);
  const calculateMilliAmpHours = (ah: number) => ah * 1000;
  const milliAmpHours = calculateMilliAmpHours(ampHours);

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
            <BreadcrumbPage>Ah to mAh Guide</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-white shadow-lg dark:bg-transparent dark:text-white">
        <CardHeader>
          <CardTitle>Ampere-Hours (Ah) to Milliampere-Hours (mAh): The Complete Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            In today's battery-driven world, understanding how to measure and compare battery capacities is more important than ever. Whether you're evaluating the performance of a smartphone battery, calculating how long a power bank will last, or designing a solar power system, knowing how to convert between ampere-hours (Ah) and milliampere-hours (mAh) is essential. This guide will walk you through the fundamentals of Ah and mAh, how they relate to each other, and why this conversion matters in real-world applications.
          </p>

          <h3 className="text-lg font-semibold">What is an Ampere-Hour (Ah)?</h3>
          <p>
            An ampere-hour (Ah) is a unit of electric charge. It tells us how much electric current a battery can provide over time. Specifically, 1 Ah means a battery can supply 1 ampere of current for one hour.
          </p>
          <p>For example:</p>
          <ul className="list-disc ml-6">
            <li>A 2Ah battery can deliver 2 amperes for 1 hour.</li>
            <li>Or 1 ampere for 2 hours.</li>
            <li>Or 0.5 amperes for 4 hours.</li>
          </ul>
          <p>
            This measurement is crucial in understanding how long a battery will last before it needs to be recharged. Ah is often used for medium to large battery systems, such as those in electric vehicles, solar energy storage units, UPS systems, and power tools.
          </p>

          <h3 className="text-lg font-semibold">What is a Milliampere-Hour (mAh)?</h3>
          <p>
            A milliampere-hour (mAh) is a smaller unit of electric charge. It's simply one-thousandth of an ampere-hour:
          </p>
          <p className="font-bold">1 Ah = 1000 mAh</p>
          <p>This unit is commonly used for smaller batteries — especially in portable electronics like:</p>
          <ul className="list-disc ml-6">
            <li>Smartphones</li>
            <li>Bluetooth headphones</li>
            <li>Smartwatches</li>
            <li>Remote controls</li>
            <li>Fitness bands</li>
          </ul>
          <p>
            So, if your smartphone has a battery rated at 5000mAh, it means the same as 5Ah — it's just scaled for easier readability.
          </p>

          <h3 className="text-lg font-semibold">The Formula for Conversion</h3>
          <p>The conversion is simple:</p>
          <p className="font-bold">mAh = Ah × 1000</p>
          <p className="font-bold">Ah = mAh ÷ 1000</p>
          <p>Let's look at a few examples:</p>

          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border px-4 py-2">Ah Value</th>
                  <th className="border px-4 py-2">Conversion Formula</th>
                  <th className="border px-4 py-2">Result in mAh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1 Ah</td>
                  <td className="border px-4 py-2">1 × 1000</td>
                  <td className="border px-4 py-2">1000 mAh</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border px-4 py-2">2.5 Ah</td>
                  <td className="border px-4 py-2">2.5 × 1000</td>
                  <td className="border px-4 py-2">2500 mAh</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">0.75 Ah</td>
                  <td className="border px-4 py-2">0.75 × 1000</td>
                  <td className="border px-4 py-2">750 mAh</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border px-4 py-2">10 Ah</td>
                  <td className="border px-4 py-2">10 × 1000</td>
                  <td className="border px-4 py-2">10,000 mAh</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold">Why Convert Between Ah and mAh?</h3>
          <p>
            You may wonder, "Why not just stick to one unit?" The reason lies in scale and readability. Using mAh for larger systems would result in needlessly large numbers (e.g., 100,000mAh for a car battery), while using Ah for small devices would result in tiny decimals (e.g., 0.002Ah for an earbud).
          </p>
          <p>
            By converting between them, engineers, technicians, and even consumers can easily compare batteries across different sizes and types of equipment.
          </p>

          <h3 className="text-lg font-semibold">Real-World Examples</h3>
          <p>Let's explore how this conversion helps in real-life scenarios:</p>

          <h4 className="font-semibold">1. Smartphone Battery</h4>
          <p>
            A typical phone might have a 4000mAh battery. That's equal to 4Ah. If your phone consumes about 500mA during normal use, then:
          </p>
          <p className="font-bold">Runtime = 4000mAh ÷ 500mA = 8 hours</p>

          <h4 className="font-semibold">2. Power Bank</h4>
          <p>
            Say you have a 10Ah (10,000mAh) power bank. If your device draws 1A (1000mA), the power bank could theoretically run it for:
          </p>
          <p className="font-bold">Runtime = 10,000mAh ÷ 1000mA = 10 hours</p>

          <h4 className="font-semibold">3. Solar System Battery</h4>
          <p>
            A 100Ah deep-cycle battery stores 100,000mAh of charge. This is typically paired with inverters and solar panels and is too large to be discussed in mAh, which shows the importance of scaling.
          </p>

          <h3 className="text-lg font-semibold">How Voltage Affects the Conversion</h3>
          <p>
            It's essential to remember that Ah and mAh measure charge, not energy. If you want to calculate energy stored, you need the voltage too:
          </p>
          <p className="font-bold">Energy (Wh) = Ah × Voltage</p>
          <p>
            So, a 2Ah battery at 3.7V provides:
          </p>
          <p className="font-bold">2 × 3.7 = 7.4 Wh (watt-hours)</p>
          <p>
            This is especially relevant when comparing different battery chemistries like lithium-ion (3.6–3.7V) vs. lead-acid (12V). Two batteries might have the same Ah, but their total energy will differ based on voltage.
          </p>

          <h3 className="text-lg font-semibold">C-Rating and Discharge Rate</h3>
          <p>
            The C-rating of a battery defines how fast it can safely discharge. A 1C rating means the battery can discharge in one hour. So:
          </p>
          <ul className="list-disc ml-6">
            <li>A 2000mAh battery at 1C can deliver 2000mA (2A).</li>
            <li>At 2C, it can deliver 4000mA (4A).</li>
          </ul>
          <p>
            High C-ratings are essential in applications like drones, RC cars, and power tools where quick bursts of energy are needed.
          </p>

          <h3 className="text-lg font-semibold">How mAh Affects Charging and Battery Life</h3>
          <h4 className="font-semibold">Higher mAh = Longer Runtime?</h4>
          <p>
            Generally yes — if the device's power draw remains constant. But there are other factors:
          </p>
          <ul className="list-disc ml-6">
            <li>Battery chemistry</li>
            <li>Voltage</li>
            <li>Efficiency losses</li>
            <li>Battery age</li>
          </ul>

          <h4 className="font-semibold">Higher mAh = Longer Charging Time?</h4>
          <p>
            Also yes — unless you're using a fast charger. Charging time depends on:
          </p>
          <p className="font-bold">Charging Time = mAh ÷ Charger Output (mA)</p>
          <p>
            So a 5000mAh battery with a 1000mA charger would take approximately 5 hours.
          </p>

          <h3 className="text-lg font-semibold">Choosing the Right Battery: Ah vs mAh</h3>
          <p>When shopping for batteries:</p>
          <ul className="list-disc ml-6">
            <li>For phones, cameras, and earbuds, look for mAh values.</li>
            <li>For laptops, inverters, and vehicles, Ah is more common.</li>
            <li>Match voltage and connector type to avoid damage.</li>
            <li>Don't mix batteries of different capacities in one device.</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Myths About mAh</h3>
          <ul className="list-disc ml-6">
            <li><span className="font-bold">"Higher mAh means faster charging."</span> False. Charging speed is based on the charger's current, not the battery capacity.</li>
            <li><span className="font-bold">"All 5000mAh batteries are the same."</span> False. Voltage, chemistry, brand quality, and efficiency make a huge difference.</li>
            <li><span className="font-bold">"mAh = battery power."</span> False. mAh measures charge; power = voltage × current.</li>
          </ul>

          <h3 className="text-lg font-semibold">FAQs</h3>
          <ul className="list-disc ml-6">
            <li><span className="font-bold">Q:</span> Can I replace a 1500mAh battery with a 2500mAh one? <span className="font-bold">A:</span> Yes — if the voltage and size match. You'll get longer runtime.</li>
            <li><span className="font-bold">Q:</span> Why do some batteries have both Ah and Wh ratings? <span className="font-bold">A:</span> Ah tells you charge. Wh tells you energy. For energy storage systems, Wh is more informative.</li>
            <li><span className="font-bold">Q:</span> Can a power bank with 20,000mAh charge my 4000mAh phone 5 times? <span className="font-bold">A:</span> In theory, yes — but expect 10–20% loss due to inefficiency.</li>
            <li><span className="font-bold">Q:</span> Does mAh degrade over time? <span className="font-bold">A:</span> Yes. Batteries lose capacity with each charging cycle.</li>
          </ul>

          <h3 className="text-lg font-semibold">Summary Table</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border px-4 py-2">Unit</th>
                  <th className="border px-4 py-2">Stands For</th>
                  <th className="border px-4 py-2">Scale</th>
                  <th className="border px-4 py-2">Used In</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Ah</td>
                  <td className="border px-4 py-2">Ampere-Hour</td>
                  <td className="border px-4 py-2">Larger batteries</td>
                  <td className="border px-4 py-2">EVs, Solar, UPS, Power Tools</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border px-4 py-2">mAh</td>
                  <td className="border px-4 py-2">Milliampere-Hour</td>
                  <td className="border px-4 py-2">Smaller batteries</td>
                  <td className="border px-4 py-2">Phones, Earbuds, Cameras, Remotes</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Wh</td>
                  <td className="border px-4 py-2">Watt-Hour</td>
                  <td className="border px-4 py-2">Energy</td>
                  <td className="border px-4 py-2">Laptops, Inverters, Solar Batteries</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4">
    <h3 className="text-xl font-semibold">What Are Ampere-Hours (Ah)?</h3>
    <p>
      Ampere-hours (Ah) are a measure of electric charge. It represents the amount of current (in amperes) a battery can supply over a specific period (in hours). For instance, a 2 Ah battery can deliver 2 amps of current for 1 hour or 1 amp for 2 hours.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">What Are Milliampere-Hours (mAh)?</h3>
    <p>
      Milliampere-hours (mAh) are a smaller unit of electric charge, commonly used in small electronics like phones, wearables, and handheld devices. 1 Ah is equal to 1000 mAh, so a 2 Ah battery is also a 2000 mAh battery.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Ah to mAh Conversion Formula</h3>
    <p>
      To convert ampere-hours (Ah) to milliampere-hours (mAh), multiply by 1000.
    </p>
    <div className="bg-gray-100 dark:bg-gray-800 rounded p-4">
      <code className="block text-center font-semibold">mAh = Ah × 1000</code>
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Example Conversions</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>0.5 Ah = 500 mAh</li>
      <li>1 Ah = 1000 mAh</li>
      <li>2.5 Ah = 2500 mAh</li>
      <li>5 Ah = 5000 mAh</li>
      <li>10 Ah = 10000 mAh</li>
    </ul>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Conversion Table</h3>
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="border px-4 py-2">Ampere-Hours (Ah)</th>
            <th className="border px-4 py-2">Milliampere-Hours (mAh)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-gray-50 even:dark:bg-gray-900">
            <td className="border px-4 py-2">0.1 Ah</td>
            <td className="border px-4 py-2">100 mAh</td>
          </tr>
          <tr className="even:bg-gray-50 even:dark:bg-gray-900">
            <td className="border px-4 py-2">0.5 Ah</td>
            <td className="border px-4 py-2">500 mAh</td>
          </tr>
          <tr className="even:bg-gray-50 even:dark:bg-gray-900">
            <td className="border px-4 py-2">1 Ah</td>
            <td className="border px-4 py-2">1000 mAh</td>
          </tr>
          <tr className="even:bg-gray-50 even:dark:bg-gray-900">
            <td className="border px-4 py-2">2.5 Ah</td>
            <td className="border px-4 py-2">2,500 mAh</td>
          </tr>
          <tr className="even:bg-gray-50 even:dark:bg-gray-900">
            <td className="border px-4 py-2">5 Ah</td>
            <td className="border px-4 py-2">5,000 mAh</td>
          </tr>
          <tr className="even:bg-gray-50 even:dark:bg-gray-900">
            <td className="border px-4 py-2">10 Ah</td>
            <td className="border px-4 py-2">10,000 mAh</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Why Convert Ah to mAh?</h3>
    <p>
      Devices like smartphones, cameras, and power banks often specify battery capacity in mAh, while manufacturers may provide specs in Ah. Converting helps in comparing batteries, calculating runtime, and selecting replacements or upgrades.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Real-Life Example</h3>
    <p>
      Suppose you have a drone that requires a 2200 mAh battery. If you're shopping for batteries labeled in Ah, you'd look for one that's approximately 2.2 Ah.
    </p>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Common Mistakes to Avoid</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Confusing Ah with mAh—always multiply or divide by 1000.</li>
      <li>Ignoring voltage—Ah/mAh only tells part of the energy story.</li>
      <li>Assuming higher mAh always means better performance—it depends on the device and usage.</li>
    </ul>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
    <ul className="space-y-4">
      <li>
        <p><strong>Q: Is 1000 mAh the same as 1 Ah?</strong></p>
        <p>A: Yes. 1 Ah = 1000 mAh.</p>
      </li>
      <li>
        <p><strong>Q: Can I replace a 2000 mAh battery with a 2500 mAh one?</strong></p>
        <p>A: Yes, as long as the voltage and size are compatible.</p>
      </li>
      <li>
        <p><strong>Q: How do I convert mAh back to Ah?</strong></p>
        <p>A: Divide mAh by 1000. For example, 1500 mAh = 1.5 Ah.</p>
      </li>
    </ul>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Ah vs. mAh: Key Differences</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Ah</strong>: Used in larger batteries (e.g., car batteries, solar systems).</li>
      <li><strong>mAh</strong>: Used in smaller electronics (e.g., phones, remotes).</li>
      <li><strong>Relation</strong>: 1 Ah = 1000 mAh.</li>
    </ul>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Battery Capacity Myths</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><span className="font-bold">"Higher mAh means faster charging."</span> False. Charging speed depends on amperage and charger quality.</li>
      <li><span className="font-bold">"mAh determines battery lifespan."</span> Not exactly. Lifespan is more influenced by charge cycles, temperature, and usage patterns.</li>
      <li><span className="font-bold">"All 5000mAh batteries are the same."</span> False. Voltage, chemistry, build quality, and brand affect real-world performance.</li>
      <li><span className="font-bold">"You can mix batteries with different mAh."</span> Not recommended. It may cause uneven discharge and damage, especially in series setups.</li>
    </ul>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Summary</h3>
    <p>
      Converting Ah to mAh is simple—just multiply by 1000. Understanding this conversion helps when comparing or replacing batteries, especially across different product specifications. Always ensure you consider voltage and device requirements before choosing a battery.
    </p>
  </div>

          <h3 className="text-lg font-semibold">Final Thoughts</h3>
          <p>
            Whether you're an engineer designing a power supply, a tech enthusiast comparing smartphones, or just someone trying to buy the best power bank, understanding the difference between Ah and mAh is empowering. The conversion is simple, but the knowledge behind it gives you control — helping you make informed choices about battery life, performance, and reliability.
          </p>
          <p>
            So next time you see a battery rating, don't just read it — understand it. And remember: 1 Ah = 1000 mAh — a small formula with big applications.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AhToMAhGuide;