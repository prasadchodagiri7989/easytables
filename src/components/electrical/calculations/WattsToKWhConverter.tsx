import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const WattsToKWhConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(100); // Default 100 Watts
  const [hours, setHours] = useState<number>(1); // Default 1 hour
  const [energyInKWh, setEnergyInKWh] = useState<number>(0); // Calculated energy in kWh

  const calculateKWh = (watts: number, hours: number) => {
    return (watts * hours) / 1000; // 1 watt-hour (Wh) = 1 watt × 1 hour, then divide by 1000 to get kWh
  };

  const handleConvert = () => {
    const result = calculateKWh(watts, hours);
    setEnergyInKWh(result);
  };

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
            <BreadcrumbPage>Watts to Kilowatt-hours Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Kilowatt-hours Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert electrical power in watts (W) to energy consumption in kilowatt-hours (kWh).</p>

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

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Energy:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{energyInKWh} kWh</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E = (P × t) / 1000</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E</strong>: Energy in kilowatt-hours (kWh)</li>
                <li><strong>P</strong>: Power in watts (W)</li>
                <li><strong>t</strong>: Time in hours (h)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from watts to kilowatt-hours is based on the formula:
                <br />
                - Energy in kWh is equal to the power in watts multiplied by the time in hours, divided by 1000.
                <br />
                - This calculation helps determine how much energy a device consumes based on its power usage and the amount of time it operates.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                If you have a device using {watts}W of power for {hours} hour(s), the total energy consumption in kilowatt-hours will be:
              </p>
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">Energy = (Power × Time) / 1000</p>
                <p className="mt-2">
                  Energy = ({watts} W × {hours} h) / 1000 = {energyInKWh} kWh
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Practical Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Example 1: A 100W device running for 1 hour consumes 0.1 kWh</li>
                <li>Example 2: A 200W device running for 3 hours consumes 0.6 kWh</li>
                <li>Example 3: A 500W device running for 5 hours consumes 2.5 kWh</li>
              </ul>
            </div>
          </div>
          <h2 className="font-semibold text-base mt-6 mb-2">Understanding Energy Efficiency</h2>
      <p>
        Energy efficiency refers to using less energy to perform the same task or activity. For example, a more energy-efficient appliance can produce the same output (e.g., lighting or heating) while consuming less electricity. Knowing the energy consumption of devices in kilowatt-hours (kWh) allows you to make informed decisions about which products are more efficient, potentially lowering your energy bills.
      </p>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Why Energy Efficiency Matters</h3>
        <p>
          Energy efficiency can help you reduce your electricity consumption, which not only lowers your energy costs but also reduces your carbon footprint. Efficient appliances use less power, which reduces the strain on power plants and lowers greenhouse gas emissions. For instance, switching from an incandescent bulb (60W) to an LED bulb (10W) can reduce energy usage by up to 80%.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">How to Improve Energy Efficiency in Your Home</h3>
        <p>
          Below are some practical tips to help improve the energy efficiency of your home and reduce energy consumption:
        </p>
        <ul className="list-disc list-inside ml-4 mt-1">
          <li><strong>Switch to LED bulbs:</strong> Replace incandescent or halogen bulbs with energy-efficient LED bulbs, which consume less power and last longer.</li>
          <li><strong>Unplug unused electronics:</strong> Electronics that are plugged in but not in use still consume "phantom" energy. Unplug them when not in use, or use a power strip to easily turn off multiple devices at once.</li>
          <li><strong>Upgrade insulation:</strong> Proper insulation in your home reduces the need for heating and cooling, improving energy efficiency.</li>
          <li><strong>Use energy-efficient appliances:</strong> Choose appliances that have an Energy Star rating to ensure they consume less energy while providing the same level of performance.</li>
          <li><strong>Switch to programmable thermostats:</strong> A programmable thermostat can help you manage the heating and cooling in your home more efficiently, reducing energy waste.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-base mt-6 mb-2">How to Estimate Energy Costs Based on kWh</h2>
        <p>
          Once you know the energy consumption of your appliances in kilowatt-hours (kWh), you can estimate the cost of running these devices. The formula for estimating energy costs is:
        </p>
        <pre className="bg-gray-100 p-2 rounded font-mono text-sm dark:text-black">
          Cost = kWh × Energy Rate
        </pre>
        <p>
          Where:
        </p>
        <ul className="list-disc list-inside ml-4 mt-1">
          <li><strong>Cost:</strong> The total cost to operate the device</li>
          <li><strong>kWh:</strong> The energy consumption in kilowatt-hours</li>
          <li><strong>Energy Rate:</strong> The price per kilowatt-hour charged by your utility company</li>
        </ul>

        <div className="bg-gray-100 p-4 rounded-md text-center mt-4 dark:text-black">
          <h3 className="font-semibold">Example Calculation:</h3>
          <p className="mt-2">
            If you have a device that uses 2 kWh and your energy rate is $0.12 per kWh, the cost of running that device for one hour would be:
          </p>
          <pre className="bg-gray-200 p-2 rounded font-mono text-sm">
            Cost = 2 kWh × $0.12 = $0.24
          </pre>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-base mt-6 mb-2">How Energy Consumption Affects Your Bills</h2>
        <p>
          Energy consumption directly affects your monthly utility bills. The more energy your household consumes, the higher your electricity bill will be. By calculating the energy usage of your devices in kilowatt-hours (kWh), you can better understand how much power you're using and how it impacts your costs.
        </p>
        <p>
          For example, if you have several devices running for multiple hours a day, the total energy consumption can add up quickly. Understanding how much energy your devices consume will allow you to make smarter decisions about how and when to use them.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-base mt-4 mb-2">Understanding the "Peak" Energy Hours</h3>
        <p>
          Many utility companies charge different rates based on the time of day. These rates are often higher during “peak” hours when electricity demand is greatest (e.g., during the evening when people are home from work). By running your high-energy devices during “off-peak” hours, you can take advantage of lower rates and reduce your overall energy costs.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-base mt-6 mb-2">Energy Conservation Tips for Your Home</h2>
        <p>
          Energy conservation goes hand-in-hand with energy efficiency. Here are some additional tips to help you conserve energy and reduce your overall usage:
        </p>
        <ul className="list-disc list-inside ml-4 mt-1">
          <li><strong>Install smart meters:</strong> Smart meters allow you to monitor your energy usage in real time, helping you make adjustments as needed.</li>
          <li><strong>Use appliances wisely:</strong> Only run your dishwasher, washing machine, or dryer with full loads to maximize energy efficiency.</li>
          <li><strong>Close blinds during the summer:</strong> Closing blinds or curtains during the hot months can reduce the amount of air conditioning needed, conserving both energy and money.</li>
          <li><strong>Switch to solar power:</strong> If possible, consider installing solar panels to generate your own clean energy and reduce reliance on traditional power grids.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-base mt-6 mb-2">The Role of Renewable Energy Sources</h2>
        <p>
          As energy costs continue to rise and concerns about climate change grow, many homeowners and businesses are looking to renewable energy sources to reduce their dependence on fossil fuels. Renewable energy options like solar, wind, and hydropower offer a sustainable and environmentally friendly way to meet energy needs.
        </p>
        <p>
          Installing solar panels on your roof or participating in a community wind energy program can help you generate your own power and reduce your electricity costs over time. Additionally, renewable energy sources typically have a much smaller carbon footprint than traditional energy sources.
        </p>
      </div>
      <div className="space-y-4">
  {/* Energy Cost Section */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Cost Calculator</h2>
    <p>
      Once you know the energy consumption in kilowatt-hours (kWh), you can calculate the cost of running your device.
    </p>
    <p>
      Use the following formula to calculate energy costs:
    </p>
    <p className="font-mono text-sm">
      <strong>Energy Cost = Energy in kWh × Energy Rate</strong>
    </p>
    <p>
      For example, if your energy rate is $0.12 per kWh and your device consumes 1 kWh, the cost would be:
    </p>
    <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
      <p className="font-semibold">Energy Cost = 1 kWh × $0.12 = $0.12</p>
    </div>
  </div>

  {/* Device Comparison Section */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Device Comparison</h2>
    <p>
      Let's compare the energy usage of multiple devices to see which one consumes more power.
    </p>
    <ul className="space-y-2 list-disc list-inside">
      <li>
        <strong>Device 1 (100W for 2 hours)</strong>: 0.2 kWh
      </li>
      <li>
        <strong>Device 2 (200W for 3 hours)</strong>: 0.6 kWh
      </li>
      <li>
        <strong>Device 3 (150W for 5 hours)</strong>: 0.75 kWh
      </li>
    </ul>
    <p className="mt-4">
      In this case, Device 3 consumes 0.75 kWh, which is the most energy-intensive device.
    </p>
  </div>

  {/* Energy Efficiency Tips Section */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Efficiency Tips</h2>
    <p>
      Here are some tips to reduce energy consumption and make your devices more energy-efficient:
    </p>
    <ul className="space-y-2 list-disc list-inside">
      <li>Switch to energy-efficient LED bulbs instead of incandescent lights.</li>
      <li>Use power strips and turn off devices when not in use to save standby power.</li>
      <li>Use smart thermostats to optimize heating and cooling energy use.</li>
      <li>Consider upgrading to Energy Star rated appliances for better energy savings.</li>
    </ul>
  </div>

  {/* Example Energy Saving Section */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Example Energy Savings</h2>
    <p>
      Let's say you're using a 200W fan for 6 hours a day. The energy consumed is:
    </p>
    <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
      <p className="font-semibold">Energy = (200W × 6 hours) / 1000 = 1.2 kWh per day</p>
    </div>
    <p>
      If you reduce the usage to 4 hours a day, the energy consumption would be:
    </p>
    <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
      <p className="font-semibold">Energy = (200W × 4 hours) / 1000 = 0.8 kWh per day</p>
    </div>
    <p className="mt-4">
      By reducing usage by just 2 hours a day, you save 0.4 kWh daily, which adds up to a significant amount over a month.
    </p>
  </div>

  {/* Conclusion Section */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Conclusion</h2>
    <p>
      Understanding how to convert watts to kilowatt-hours and calculating energy consumption is crucial for managing electricity usage and saving on energy costs.
    </p>
    <p>
      By applying these formulas and tips, you can make informed decisions about your energy consumption, which not only benefits your budget but also contributes to environmental sustainability.
    </p>
  </div>
</div>
<div className="space-y-4">
  {/* Energy Consumption Monitoring Section */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Consumption Monitoring</h2>
    <p>
      Keeping track of your energy consumption can help you understand how much power your devices use and make adjustments to save energy.
    </p>
    <p>
      To monitor energy consumption, you can use smart meters or energy monitoring tools that provide real-time data on your energy usage.
    </p>
    <p>
      Many modern appliances come with built-in energy consumption monitoring, so you can check their usage without any additional tools.
    </p>
  </div>

  {/* Calculating Monthly Energy Cost */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Calculating Monthly Energy Cost</h2>
    <p>
      To estimate your monthly energy cost, you can multiply the daily energy consumption by the number of days in the month.
    </p>
    <p>
      For example, if your device uses 1 kWh per day, the calculation for a 30-day month would be:
    </p>
    <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
      <p className="font-semibold">Monthly Energy Cost = 1 kWh/day × 30 days = 30 kWh/month</p>
    </div>
    <p>
      With your energy rate at $0.12 per kWh, the monthly cost would be:
    </p>
    <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
      <p className="font-semibold">Monthly Cost = 30 kWh × $0.12 = $3.60/month</p>
    </div>
  </div>

  {/* Comparing Different Energy Sources */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Comparing Different Energy Sources</h2>
    <p>
      Energy consumption and costs vary depending on the type of energy source used. Let's compare a few common energy sources:
    </p>
    <ul className="space-y-2 list-disc list-inside">
      <li>
        <strong>Electricity:</strong> The most common energy source for most devices. Cost depends on the energy rate.
      </li>
      <li>
        <strong>Solar Power:</strong> An eco-friendly option with a one-time installation cost but minimal ongoing costs.
      </li>
      <li>
        <strong>Gas:</strong> Often used for heating and cooking. Generally cheaper than electricity, but can have environmental concerns.
      </li>
      <li>
        <strong>Wind Energy:</strong> Renewable and environmentally friendly, but often requires a significant upfront investment in infrastructure.
      </li>
    </ul>
    <p>
      When choosing an energy source, it's important to consider both the long-term cost and the environmental impact.
    </p>
  </div>

  {/* Energy Efficiency in Household Appliances */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Efficiency in Household Appliances</h2>
    <p>
      Appliances with higher energy efficiency ratings use less power to perform the same task. Look for appliances labeled with an Energy Star rating or similar certifications for improved efficiency.
    </p>
    <p>
      Here are a few examples of how energy-efficient appliances save energy:
    </p>
    <ul className="space-y-2 list-disc list-inside">
      <li>Energy-efficient refrigerators use less power to maintain a cool temperature.</li>
      <li>LED light bulbs use less energy than traditional incandescent bulbs.</li>
      <li>Washing machines with high-efficiency settings can clean clothes with less water and electricity.</li>
    </ul>
    <p>
      In the long run, investing in energy-efficient appliances can lead to significant savings on your energy bill.
    </p>
  </div>

  {/* Energy Saving Myths Section */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Saving Myths</h2>
    <p>
      There are many myths and misconceptions surrounding energy consumption and saving. Let’s debunk a few:
    </p>
    <ul className="space-y-2 list-disc list-inside">
      <li>
        <strong>Myth 1:</strong> "Turning off lights uses more energy than leaving them on."
        <br />
        Fact: Turning off lights when not in use saves energy and reduces your electricity bill.
      </li>
      <li>
        <strong>Myth 2:</strong> "Standby mode is not using any power."
        <br />
        Fact: Many devices in standby mode still consume power, known as “phantom load.”
      </li>
      <li>
        <strong>Myth 3:</strong> "Using space heaters is cheaper than central heating."
        <br />
        Fact: Space heaters may save energy for heating a small area, but they are inefficient for heating an entire home.
      </li>
    </ul>
    <p>
      By recognizing and avoiding these myths, you can make more informed choices about energy conservation.
    </p>
  </div>

  {/* Seasonal Energy Saving Tips */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Seasonal Energy Saving Tips</h2>
    <p>
      Energy usage fluctuates throughout the year. Here are some tips for saving energy during different seasons:
    </p>
    <h3 className="font-semibold mt-4">Winter Tips:</h3>
    <ul className="space-y-2 list-disc list-inside">
      <li>Seal windows and doors to prevent heat loss.</li>
      <li>Use programmable thermostats to reduce heating costs when you're not home.</li>
      <li>Wear warm clothes instead of turning up the thermostat.</li>
    </ul>
    <h3 className="font-semibold mt-4">Summer Tips:</h3>
    <ul className="space-y-2 list-disc list-inside">
      <li>Close blinds or curtains to keep heat out of your home.</li>
      <li>Use fans instead of air conditioning to save energy.</li>
      <li>Run appliances early in the morning or late at night to avoid peak energy costs.</li>
    </ul>
  </div>

  {/* Energy Audit Section */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Audit</h2>
    <p>
      An energy audit helps you identify areas where you can reduce energy usage and improve efficiency.
    </p>
    <p>
      Many energy providers offer free or discounted energy audits, which can include a professional assessment of your home’s energy performance.
    </p>
    <p>
      The audit typically includes inspecting insulation, air leaks, and HVAC systems, and it provides recommendations for energy-saving improvements.
    </p>
  </div>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToKWhConverter;
