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

const AhToMAhConverter: React.FC = () => {
  const [ampHours, setAmpHours] = useState<number>(3);
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
            <BreadcrumbPage>Ah to mAh</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-white shadow-lg dark:bg-transparent dark:text-white">
        <CardHeader>
          <CardTitle>Ampere-Hours (Ah) to Milliampere-Hours (mAh): The Complete Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            In today’s battery-driven world, understanding how to measure and compare battery capacities is more important than ever. Whether you're evaluating the performance of a smartphone battery, calculating how long a power bank will last, or designing a solar power system, knowing how to convert between ampere-hours (Ah) and milliampere-hours (mAh) is essential.
          </p>

          <h3 className="text-lg font-semibold">What is an Ampere-Hour (Ah)?</h3>
          <p>
            An ampere-hour (Ah) is a unit of electric charge. It tells us how much electric current a battery can provide over time. Specifically, 1 Ah means a battery can supply 1 ampere of current for one hour.
          </p>
          <ul className="list-disc ml-6">
            <li>A 2Ah battery can deliver 2 amperes for 1 hour.</li>
            <li>Or 1 ampere for 2 hours.</li>
            <li>Or 0.5 amperes for 4 hours.</li>
          </ul>

          <h3 className="text-lg font-semibold">What is a Milliampere-Hour (mAh)?</h3>
          <p>
            A milliampere-hour (mAh) is a smaller unit of electric charge. It’s simply one-thousandth of an ampere-hour:
            <strong>1 Ah = 1000 mAh</strong>
          </p>
          <p>This unit is commonly used for smaller batteries — especially in portable electronics like:</p>
          <ul className="list-disc ml-6">
            <li>Smartphones</li>
            <li>Bluetooth headphones</li>
            <li>Smartwatches</li>
            <li>Remote controls</li>
            <li>Fitness bands</li>
          </ul>

          <h3 className="text-lg font-semibold">The Formula for Conversion</h3>
          <p>mAh = Ah × 1000</p>
          <p>Ah = mAh ÷ 1000</p>

          <h3 className="text-lg font-semibold">Example Conversion Table</h3>
          <ul className="list-disc ml-6">
            <li>1 Ah = 1000 mAh</li>
            <li>2.5 Ah = 2500 mAh</li>
            <li>0.75 Ah = 750 mAh</li>
            <li>10 Ah = 10,000 mAh</li>
          </ul>

          <h3 className="text-lg font-semibold">Why Convert Between Ah and mAh?</h3>
          <p>
            Using mAh for large batteries creates huge numbers, while using Ah for small devices results in tiny decimals. Converting helps compare batteries more clearly across various scales.
          </p>

          <h3 className="text-lg font-semibold">Real-World Examples</h3>
          <p><strong>1. Smartphone Battery</strong></p>
          <p>4000mAh = 4Ah. If the phone uses 500mA: 4000 ÷ 500 = 8 hours.</p>
          <p><strong>2. Power Bank</strong></p>
          <p>10Ah = 10,000mAh. If your device draws 1000mA: 10,000 ÷ 1000 = 10 hours.</p>
          <p><strong>3. Solar Battery</strong></p>
          <p>100Ah = 100,000mAh. This illustrates why Ah is better for large systems.</p>

          <h3 className="text-lg font-semibold">Voltage & Energy</h3>
          <p>Energy (Wh) = Ah × Voltage. A 2Ah battery at 3.7V = 7.4Wh.</p>

          <h3 className="text-lg font-semibold">C-Rating & Discharge</h3>
          <p>
            A 1C rated 2000mAh battery can deliver 2000mA. A 2C battery can deliver 4000mA. This matters in tools, drones, etc.
          </p>

          <h3 className="text-lg font-semibold">How mAh Affects Charging</h3>
          <p>
            Higher mAh means longer usage, but also longer charging unless using a fast charger.
            Charging Time = mAh ÷ Charger Output (mA)
          </p>

          <h3 className="text-lg font-semibold">Choosing the Right Battery</h3>
          <ul className="list-disc ml-6">
            <li>Use mAh for small gadgets; Ah for large systems.</li>
            <li>Match voltage and size before replacing a battery.</li>
            <li>Don’t mix different capacity batteries in one device.</li>
          </ul>

          <h3 className="text-lg font-semibold">Common Myths About mAh</h3>
          <ul className="list-disc ml-6">
            <li>“Higher mAh means faster charging” – False.</li>
            <li>“All 5000mAh batteries are equal” – False. Chemistry matters.</li>
            <li>“mAh = Power” – False. Power = Voltage × Current.</li>
          </ul>

          <h3 className="text-lg font-semibold">FAQs</h3>
          <ul className="list-disc ml-6">
            <li><strong>Q:</strong> Can I use 2500mAh instead of 1500mAh? <strong>A:</strong> Yes, if voltage and size match.</li>
            <li><strong>Q:</strong> Why Ah and Wh? <strong>A:</strong> Ah = charge; Wh = energy.</li>
            <li><strong>Q:</strong> Can a 20,000mAh bank charge a 4000mAh phone 5 times? <strong>A:</strong> Theoretically yes, but expect 10–20% loss.</li>
            <li><strong>Q:</strong> Does mAh degrade over time? <strong>A:</strong> Yes. All batteries lose capacity gradually.</li>
          </ul>

          <h3 className="text-lg font-semibold">Summary Table</h3>
          <ul className="list-disc ml-6">
            <li><strong>Ah</strong> – Ampere-Hour – Large batteries – EVs, Solar, UPS</li>
            <li><strong>mAh</strong> – Milliampere-Hour – Small batteries – Phones, Cameras</li>
            <li><strong>Wh</strong> – Watt-Hour – Energy unit – Laptops, Inverters</li>
          </ul>

          <h3 className="text-lg font-semibold">Final Thoughts</h3>
          <p>
            Whether you're comparing power banks or configuring a solar battery, understanding the difference between Ah and mAh empowers you to make informed decisions. Remember: 1 Ah = 1000 mAh.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AhToMAhConverter;
