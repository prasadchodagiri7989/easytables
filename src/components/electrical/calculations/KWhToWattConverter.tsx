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

const KWhToWattConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);  // Energy in kilowatt-hours (kWh)
  const [time, setTime] = useState<number>(1);  // Time in hours (h)
  const [power, setPower] = useState<number | string>('—');  // Output power in watts (W)

  // Conversion function to calculate watts
  const convertToWatt = (energy: number, time: number) => {
    return (1000 * energy) / time;  // P(W) = 1000 × E(kWh) / t(h)
  };

  const handleConvert = () => {
    const result = convertToWatt(energy, time);
    setPower(result);
  };

  const examples = [
    { energy: 15, time: 3, expectedResult: 5000, description: 'Example: Energy is 15 kWh, Time is 3 hours' },
    { energy: 10, time: 2, expectedResult: 5000, description: 'Example: Energy is 10 kWh, Time is 2 hours' },
    { energy: 20, time: 4, expectedResult: 5000, description: 'Example: Energy is 20 kWh, Time is 4 hours' },
    { energy: 30, time: 6, expectedResult: 5000, description: 'Example: Energy is 30 kWh, Time is 6 hours' },
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
            <BreadcrumbPage>KWh to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>KWh to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert energy in kilowatt-hours (kWh) to power in watts (W) over a given time period.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Energy in Kilowatt-Hours (kWh):</label>
              <input
                type="number"
                value={energy}
                onChange={(e) => setEnergy(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time in Hours (h):</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
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
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{power} W</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Energy: {example.energy} kWh, Time: {example.time} hours</p>
                    <p>Expected Power: {example.expectedResult} W</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p><strong>W = 1000 × kWh / h</strong></p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>W</strong>: Power in watts (W)</li>
                <li><strong>kWh</strong>: Energy in kilowatt-hours (kWh)</li>
                <li><strong>h</strong>: Time in hours (h)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatt-hours (kWh) to watts (W) is based on the formula:<br />
                W = 1000 × kWh / h<br />
                This conversion tells us how much power is being consumed, in watts, based on energy consumption and the time period.
              </p>
            </div>
          </div>

          <p className="mt-4">
  Understanding how to convert kilowatt-hours (kWh) to watts (W) is crucial for anyone dealing with electrical systems, whether in a residential, commercial, or industrial context. This conversion helps determine the rate at which energy is being used — known as power. While kWh represents the total energy consumed over time, watts indicate how fast that energy is consumed. Knowing both values enables better decision-making in system design, energy management, and efficiency analysis.
</p>

<p className="mt-4">
  The basic formula used in this conversion is straightforward:
</p>

<ul className="list-disc list-inside ml-4">
  <li><strong>W = (kWh × 1000) / time (in hours)</strong></li>
</ul>

<p className="mt-2">
  This tells us that 1 kilowatt-hour of energy consumed over 1 hour equals 1000 watts of power. If that same energy is consumed over 2 hours, the power is reduced to 500 watts. In other words, power is a measure of how fast energy is being used.
</p>

<p className="mt-4">
  This concept is especially useful when evaluating appliances or planning backup systems. For example, if a device uses 2 kWh over 4 hours, it consumes 500 watts on average. If you want to run this appliance on an inverter or generator, you need to ensure the power source can provide at least 500 watts continuously during operation.
</p>

<p className="mt-4">
  In the real world, power consumption is not always steady. Appliances like refrigerators, washing machines, or air conditioners often cycle on and off, causing the power draw to fluctuate. In such cases, converting total energy usage (kWh) into an average power level (W) helps you estimate system load and size your power supply accordingly.
</p>

<p className="mt-4">
  In residential homes, electricity bills are calculated based on kWh. But to know how much power your home actually draws, you need to convert that figure to watts. This allows homeowners to determine which appliances are responsible for the highest demand and take measures to reduce energy usage — such as switching to energy-efficient LED lighting, smart thermostats, or appliances with better star ratings.
</p>

<p className="mt-4">
  In industrial and commercial environments, this conversion becomes even more valuable. Energy managers track both kWh (energy usage) and watts (power demand) to ensure that facilities stay within safe electrical capacity and avoid peak demand charges. In manufacturing plants, hospitals, or data centers, where high-powered equipment runs for long hours, accurate power analysis is key to preventing overloads and planning future upgrades.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Where You’ll Use This Conversion:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>Designing solar or battery backup systems</li>
    <li>Evaluating equipment efficiency and runtime</li>
    <li>Calculating average power use for monthly reports</li>
    <li>Comparing power usage of different appliances</li>
    <li>Sizing inverters or generators for residential setups</li>
    <li>Smart energy planning and consumption optimization</li>
  </ul>
</div>

<p className="mt-4">
  In the context of renewable energy, such as solar or wind systems, energy generation is measured in kWh, while the capacity of the system is rated in kW or watts. To determine how much energy you need to produce (or store) per day, you have to convert total energy usage to an average power requirement. For instance, if your daily energy need is 10 kWh, and your system has about 5 hours of peak sun, you need a solar system that can produce around 2000 watts (10 kWh ÷ 5 hours = 2 kW or 2000 W).
</p>

<p className="mt-4">
  This conversion is also essential when sizing batteries. If a battery bank is rated to provide 8 kWh of energy, and you plan to run a load of 1000 watts, the runtime would be 8 hours (8 kWh ÷ 1 kW = 8 hours). In contrast, a 2000-watt load would drain the same battery in 4 hours. Understanding this helps in choosing the right battery size, depth of discharge, and even the type of inverter needed to match the power load.
</p>

<p className="mt-4">
  For electric vehicles (EVs), this concept is used to estimate both consumption and range. EV batteries are rated in kWh, while motors draw power in kW. Knowing how many kWh your battery stores and how many watts your vehicle consumes at cruising speed lets you estimate range and charging time accurately.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Tips for Using This Converter Accurately:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>Use real-time or average time values for more realistic power estimates</li>
    <li>Make sure the time is always in hours — not minutes or seconds</li>
    <li>Round values carefully for presentation, but use full decimals in engineering</li>
    <li>Always factor in inefficiencies (especially for inverter-based systems)</li>
  </ul>
</div>

<p className="mt-4">
  It’s also worth noting that this conversion doesn’t account for power factor, which is used in AC systems to differentiate between real power and apparent power. However, for basic usage and consumer-level calculations — such as determining household power demand or analyzing an appliance’s behavior — this tool offers a highly useful, simplified view.
</p>

<p className="mt-4">
  Finally, if you're a student or professional studying electrical or energy-related fields, this is one of the most foundational formulas you'll use. It bridges the gap between theoretical energy usage and actual power delivery. Whether you're doing homework, performing a field audit, or presenting to a client — having a firm grasp on how kWh and watts are related helps you speak with clarity and confidence.
</p>

<p className="mt-4">
  In real-world energy systems, the ability to accurately convert kilowatt-hours (kWh) to watts (W) empowers users to design smarter electrical infrastructure and minimize energy waste. From planning residential solar setups to designing large-scale industrial grids, this simple conversion helps link long-term energy usage with short-term power demand.
</p>

<p className="mt-4">
  For example, if a home uses 30 kWh of electricity per day and wants to operate entirely off-grid using solar energy, the user must calculate average and peak power needs in watts. By dividing 30 kWh by 24 hours, the average power demand is 1250 W. This figure helps size solar panels and batteries accurately, ensuring that daily energy consumption is met and surplus is minimized.
</p>

<p className="mt-4">
  In scenarios involving backup generators, the importance of this conversion is magnified. Generators are rated in kilowatts or watts, but energy backup requirements are typically logged in kWh. Suppose a company wants 10 hours of backup for a 5000-watt load — they’ll need a system capable of storing or generating 50 kWh. Using this conversion ensures the generator is neither underpowered (causing blackouts) nor overbuilt (wasting capital).
</p>

<p className="mt-4">
  Another crucial area where this conversion plays a role is in **load balancing**. Electrical utilities and grid managers aim to distribute electrical load evenly throughout the day. By analyzing user consumption in kWh and calculating the associated power demand in watts, they can anticipate peak demand periods and avoid overloading the grid. For example, if thousands of homes simultaneously run 2 kW air conditioning systems in the afternoon, utility planners know to expect a cumulative demand spike.
</p>

<p className="mt-4">
  For users on **time-of-use billing plans**, understanding this conversion helps reduce energy costs. These plans charge higher rates during peak hours and lower rates off-peak. By calculating power in watts and knowing when it’s being used, households can shift high-power tasks — like laundry or cooking — to off-peak hours. Running a 2 kWh dishwasher over 1 hour equals 2000 W. Moving that task to night hours could cut costs significantly.
</p>

<p className="mt-4">
  In **data centers**, power usage effectiveness (PUE) is a key metric used to assess how efficiently the facility uses electricity. While total energy consumed is measured in kWh, continuous power usage is what drives infrastructure design. Converting server energy usage into average power demands allows operators to size cooling systems, backup batteries, and UPS units precisely — ensuring uptime and minimizing energy waste.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Impact on Appliance Design & Selection:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>Manufacturers label appliances with power (W) and sometimes energy (kWh per year)</li>
    <li>Buyers can calculate operating cost by estimating usage time and multiplying by rated power</li>
    <li>Knowing both energy and power helps select appliances that align with backup capacity</li>
    <li>Smart appliance scheduling becomes easier with power awareness</li>
  </ul>
</div>

<p className="mt-4">
  Energy audits conducted in commercial buildings rely heavily on converting kWh to watts to visualize how energy is used throughout the day. Auditors log energy consumption per device or department, convert it into wattage over specific durations, and then identify where efficiency gains can be made. For instance, a conference room projector using 1.5 kWh over a 3-hour presentation session is drawing 500 W — data that might prompt suggestions for a more efficient model.
</p>

<p className="mt-4">
  In schools and training institutions, this topic is taught at multiple levels. Elementary students learn it in the context of understanding electricity bills and energy-saving tips. High school students apply it in physics and environmental science. Engineering students perform these conversions daily when analyzing circuits, planning electrical loads, or simulating energy usage for various systems. Providing students with practical tools like this converter fosters better comprehension and real-world relevance.
</p>

<p className="mt-4">
  In transport and mobility, especially electric vehicles (EVs), understanding kWh-to-watt conversion is essential. EV batteries are rated in kWh, while powertrain components — such as motors and controllers — operate at certain kW or W levels. If an EV has a 60 kWh battery and drives at an average power draw of 20 kW (or 20,000 W), the vehicle range is approximately 3 hours or 180 km (assuming 60 km/hr). Users can make informed charging and range-planning decisions with this understanding.
</p>

<p className="mt-4">
  Another emerging area is **Internet of Things (IoT)** power monitoring. Smart plugs and meters collect real-time power usage (watts) and log energy consumption (kWh). Being able to translate one into the other using this tool allows users to:
</p>

<ul className="list-disc list-inside ml-4 mt-1">
  <li>Detect abnormal device behavior (e.g., power spikes)</li>
  <li>Compare device performance across brands or usage modes</li>
  <li>Visualize long-term costs of continuous loads (e.g., routers or surveillance cameras)</li>
</ul>

<p className="mt-4">
  The importance of this simple conversion is expanding with the shift to sustainable energy systems. As governments set stricter energy efficiency standards and provide tax incentives for low-power devices, understanding both kWh and W becomes vital in compliance and system optimization. Smart homes, LEED-certified buildings, and net-zero energy projects all rely on these calculations to function within budget and regulation.
</p>

<p className="mt-4">
  Lastly, smart grid technologies and AI-based energy systems use real-time power and historical energy data to make autonomous decisions. A system might reduce the heating load in real-time by referencing current watt consumption and known daily energy usage limits (kWh). Without accurate conversion and understanding of how time, energy, and power relate, such intelligent decisions wouldn't be possible.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Final Thoughts:</h2>
  <p>
    The kWh to Watt conversion may appear basic, but its applications extend from understanding a household appliance's consumption to running the world's most complex power systems. With the rise of decentralized energy production, electric vehicles, smart appliances, and energy-efficient regulations — this conversion has never been more relevant. By helping users bridge energy (kWh) with power (W), this tool serves as a foundation for awareness, control, and innovation in the energy-driven world around us.
  </p>
</div>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p>
    The kWh to W conversion is a simple but powerful calculation. It helps you understand not just how much energy is used, but how quickly that energy is consumed. Whether you're managing a home energy system, planning a renewable energy installation, or just curious about how your electricity bill relates to your device usage — this converter gives you the insights you need. With just two inputs — energy and time — you gain the power to understand and optimize your consumption.
  </p>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default KWhToWattConverter;
