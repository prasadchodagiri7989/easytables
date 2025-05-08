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

const KWhToKWConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);
  const [time, setTime] = useState<number>(1);
  const [power, setPower] = useState<number | string>('—');

  const convertToKW = (energy: number, time: number) => {
    return energy / time;
  };

  const handleConvert = () => {
    const result = convertToKW(energy, time);
    setPower(result);
  };

  const examples = [
    { energy: 15, time: 3, expectedResult: 5, description: 'Energy is 15 kWh, Time is 3 hours' },
    { energy: 10, time: 2, expectedResult: 5, description: 'Energy is 10 kWh, Time is 2 hours' },
    { energy: 20, time: 4, expectedResult: 5, description: 'Energy is 20 kWh, Time is 4 hours' },
    { energy: 25, time: 5, expectedResult: 5, description: 'Energy is 25 kWh, Time is 5 hours' },
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
            <BreadcrumbPage>KWh to KW Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>KWh to KW Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert energy in kilowatt-hours (kWh) to power in kilowatts (kW).
          </p>

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
              <strong>Converted Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{power} kW</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Energy: {example.energy} kWh, Time: {example.time} hours</p>
                    <p>Converted Power: {example.expectedResult} kW</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>kW = kWh / h</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>kW</strong>: Power in kilowatts (kW)</li>
                <li><strong>kWh</strong>: Energy in kilowatt-hours (kWh)</li>
                <li><strong>h</strong>: Time in hours (h)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatt-hours (kWh) to kilowatts (kW) is based on the formula:
                <br />
                - Power (kW) is equal to the energy (kWh) divided by the time (h).
                <br />
                - This helps calculate how much power is consumed over a specific period.
              </p>
            </div>
          </div>
          <p className="mt-4">
  Converting kilowatt-hours (kWh) to kilowatts (kW) is a key concept in understanding energy usage and power demand. While kWh measures the total amount of energy consumed over a period, kW tells you the rate at which energy is being used. This makes the conversion essential for analyzing both energy bills and the capacity of electrical systems. For example, knowing how much energy was used (kWh) over a specific number of hours (h) allows you to determine the average power demand (kW) during that time frame.
</p>

<p className="mt-4">
  This type of calculation is commonly used in residential, commercial, and industrial settings. For households, utility bills typically show usage in kWh. By converting that energy use over a known time period, homeowners can understand peak loads and identify high-consumption appliances. For commercial and industrial operations, this conversion helps evaluate power usage efficiency, optimize machine run-times, and avoid demand charges from utility companies.
</p>

<p className="mt-4">
  This conversion also plays a role in infrastructure planning. When sizing generators, solar inverters, or battery backups, engineers must estimate how much power (kW) is required to meet the load during a specific timeframe. Using this tool, a user can input known energy usage and the time over which it was measured to get an accurate idea of average power requirements. This ensures that the equipment selected is neither underpowered nor oversized — both of which can be costly.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Where This Conversion is Helpful:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>Evaluating the load on a power generator or solar inverter</li>
    <li>Analyzing historical energy usage patterns</li>
    <li>Planning energy efficiency upgrades</li>
    <li>Monitoring appliance or equipment performance</li>
    <li>Identifying high energy demand hours</li>
  </ul>
</div>

<p className="mt-4">
  It’s important to note that this conversion assumes constant power usage over the time period. In real life, power consumption often fluctuates due to varying load conditions. However, this tool provides a very useful average, which can serve as a baseline for deeper energy analysis. It also helps to forecast future energy demands by comparing previous usage trends.
</p>

<p className="mt-4">
  In industries and factories, where demand charges are applied based on peak power usage, understanding the relationship between kWh and kW is critical for managing costs. A plant may consume a moderate amount of energy overall, but if that energy is used in a short time frame, the peak kW demand will be high — triggering penalties. This makes it important to not only reduce overall energy usage but also to distribute it more evenly.
</p>

<p className="mt-4">
  For renewable energy systems like solar, the conversion is vital when determining panel output vs. battery storage and daily consumption. Solar production is usually measured in kW (rate of generation), while consumption is logged in kWh (total usage). Understanding how to move between these units allows for better battery sizing and energy management.
</p>

<p className="mt-4">
  This kWh to kW converter is a practical tool for energy professionals, students, and even curious homeowners. By simplifying the math, it allows anyone to gain deeper insights into how energy is consumed and how power is measured. Whether you’re designing a power system or just trying to understand your utility bill better, this converter provides instant answers with precision and clarity.
</p>
<p className="mt-4">
  The importance of converting kWh to kW becomes even more critical when performing energy audits or designing energy-efficient systems. Businesses that operate machinery, lighting, HVAC systems, and computers must evaluate both the total energy used and the rate of energy usage. This allows them to benchmark performance, identify waste, and make informed decisions about equipment upgrades or schedule adjustments.
</p>

<p className="mt-4">
  For example, a retail store may consume 100 kWh of energy in a 10-hour day. This converts to an average of 10 kW. But if the same 100 kWh is consumed in only 5 hours due to compressed operations or peak shopping periods, the demand rises to 20 kW. Understanding this shift helps managers avoid exceeding their utility contract limits or triggering demand-based tariffs. It can also help them plan better usage distribution through load management techniques.
</p>

<p className="mt-4">
  Governments and regulatory bodies also emphasize monitoring kW demand alongside kWh usage. Many countries impose time-of-use (TOU) pricing models, where electricity costs more during peak demand periods. By analyzing your energy consumption and converting it into average power usage, you can take advantage of off-peak rates or avoid operating high-load equipment when electricity is most expensive.
</p>

<p className="mt-4">
  In residential scenarios, this knowledge helps individuals assess the impact of appliances on their bills. For instance, if a water heater consumes 3 kWh over 1 hour, its power draw is 3 kW. That’s a significant spike if used during peak pricing. Similarly, if someone charges their electric vehicle and it draws 7.2 kWh over 2 hours, that’s a power rate of 3.6 kW — valuable information for selecting compatible home wiring, inverters, or backup solutions.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Benefits of Using This Converter:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>Quickly evaluate load size based on historical energy usage</li>
    <li>Improve energy budgeting for both home and business</li>
    <li>Support better equipment sizing and system planning</li>
    <li>Reduce risks of overloading circuits or backup systems</li>
    <li>Identify opportunities for time-shifting energy loads</li>
  </ul>
</div>

<p className="mt-4">
  In educational settings, this conversion is often taught as part of physics, electrical engineering, and environmental studies. Students learn to understand energy transfer, power usage patterns, and efficiency ratings. The conversion between energy and power is foundational not only in electricity but also in mechanical and thermal energy systems.
</p>

<p className="mt-4">
  Another noteworthy application is in battery storage and electric vehicles (EVs). Battery capacity is measured in kWh, but the discharge rate (how fast the energy is delivered) is in kW. Understanding how much power (kW) a battery can deliver over time helps EV owners and engineers determine range, performance, and compatibility with charging infrastructure. It also aids in designing hybrid systems where solar generation, battery storage, and grid connection must be balanced accurately.
</p>

<p className="mt-4">
  Whether you're an engineer planning a smart building, a homeowner exploring solar options, or a student learning power basics, converting kWh to kW gives you the power to understand energy beyond just numbers on a bill. It helps you control, optimize, and plan your energy use more effectively — and this simple tool makes the process easier than ever.
</p>
<p className="mt-4">
  As smart energy systems continue to evolve, the ability to convert between kWh and kW becomes even more valuable. With the rise of smart meters and energy monitoring devices, users are now empowered with real-time data about their energy consumption. These devices often display power usage in kW and track total consumption in kWh. Knowing how to interpret both helps homeowners and businesses make informed choices about their energy behavior.
</p>

<p className="mt-4">
  For instance, when using a smart home energy monitor, you might notice your refrigerator draws a constant 0.2 kW. Over 24 hours, this results in 4.8 kWh of energy consumption. Understanding this breakdown allows users to calculate running costs, compare appliance efficiency, and spot abnormal behavior — such as a sudden spike that might indicate a malfunctioning component.
</p>

<p className="mt-4">
  On the commercial scale, building energy management systems (BEMS) use kWh to log usage over time and kW to analyze real-time demand. Facilities managers rely on these two measurements to identify peak load periods and reduce unnecessary consumption. For example, a building may operate within a limit of 100 kW, but if their lighting, HVAC, and equipment together exceed that during a short peak, they may face increased demand charges. This is why energy consultants regularly use kWh to kW conversion as part of demand-side management strategies.
</p>

<p className="mt-4">
  Grid-connected systems like solar power installations and microgrids also require a clear understanding of this relationship. Solar panels are rated in kW (the maximum they can produce), while energy production is measured in kWh. On a sunny day, a 5 kW solar system might produce 25 kWh of energy. If you're designing storage for that system, you need to understand how much energy is generated, how long it takes, and how quickly it can be used. This enables accurate battery sizing and backup planning.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Energy Contracts and Cost Planning:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>Utility providers may bill based on kWh but set maximum kW demand limits.</li>
    <li>Exceeding the demand threshold can lead to penalty rates or required upgrades.</li>
    <li>Time-based energy plans often have different kWh rates depending on usage time.</li>
    <li>Businesses can use kW data to stagger operations and avoid peak-hour loads.</li>
  </ul>
</div>

<p className="mt-4">
  Electric utilities and regulatory bodies often use this conversion for infrastructure planning. They forecast city-wide or regional power demands in megawatts (MW) and then evaluate total energy needs in megawatt-hours (MWh). The same principle applies — scaling the kWh to kW conversion to a larger system level. By understanding this formula, individuals can connect their personal energy use to the broader grid dynamics.
</p>

<p className="mt-4">
  Finally, with the transition to cleaner energy sources, being energy-aware is no longer just an engineering concern — it's a public responsibility. Tools like this converter help raise awareness and make energy math accessible to everyone. Whether you're evaluating the feasibility of a home solar project or trying to reduce your organization's environmental impact, converting energy to power — and understanding what that power means — is a first step toward smarter energy decisions.
</p>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p>
    The kWh to kW conversion is a simple yet essential calculation for anyone involved in energy planning, system design, or consumption analysis. By understanding how energy translates into power, users can make better decisions about their energy use, reduce waste, and improve efficiency. Whether you're a homeowner tracking appliance performance, a facility manager optimizing load schedules, or a student learning the fundamentals of power systems — this tool empowers you with accurate, actionable insights. Start using it today to take control of your energy knowledge and build smarter, more sustainable solutions.
  </p>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default KWhToKWConverter;
