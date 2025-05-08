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

const KWToWhConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [time, setTime] = useState<number>(1);  // Time in hours (h)
  const [energy, setEnergy] = useState<number | string>('—');  // Output energy in watt-hours (Wh)

  const convertToWh = (power: number, time: number) => {
    return 1000 * power * time;  // E(Wh) = 1000 × P(kW) × t(h)
  };

  const handleConvert = () => {
    const result = convertToWh(power, time);
    setEnergy(result);
  };

  const examples = [
    { power: 5, time: 3, expectedResult: 15000, description: 'Power is 5 kW, Time is 3 hours' },
    { power: 2, time: 4, expectedResult: 8000, description: 'Power is 2 kW, Time is 4 hours' },
    { power: 1.5, time: 6, expectedResult: 9000, description: 'Power is 1.5 kW, Time is 6 hours' },
    { power: 10, time: 2, expectedResult: 20000, description: 'Power is 10 kW, Time is 2 hours' },
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
              <Link to="/energy-conversions">Energy Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>KW to Wh Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Kilowatts to Watt-Hours Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert power in kilowatts (kW) and time in hours (h) to energy in watt-hours (Wh).
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power in Kilowatts (kW):</label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
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
              <strong>Converted Energy:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{energy} Wh</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Power: {example.power} kW, Time: {example.time} hours</p>
                    <p>Converted Energy: {example.expectedResult} Wh</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>Wh = 1000 × kW × h</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>Wh</strong>: Energy in watt-hours (Wh)</li>
                <li><strong>kW</strong>: Power in kilowatts (kW)</li>
                <li><strong>h</strong>: Time in hours (h)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatts (kW) to watt-hours (Wh) is based on the formula:
                <br />
                - Energy (Wh) is equal to 1000 times the power (kW) times the time (h).
                <br />
                - The factor of 1000 converts kilowatts to watts, as 1 kW = 1000 W.
              </p>
            </div>
          </div>

          <p className="mt-4">
  The conversion from kilowatts (kW) to watt-hours (Wh) is a foundational principle in energy management and electrical engineering. It enables users to determine how much energy is consumed or produced by an appliance, machine, or system over a given time period. This is essential for calculating energy usage, managing power systems, planning battery capacity, billing customers, and optimizing system performance.
</p>

<p className="mt-4">
  A kilowatt (kW) measures the rate at which energy is being used — that is, power. A watt-hour (Wh), on the other hand, measures the amount of energy used over time. By multiplying the power (in kW) by the duration (in hours), and then converting kilowatts to watts (1 kW = 1000 W), we get the total energy consumed:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  Wh = 1000 × kW × h
</p>

<p className="mt-4">
  For example, if a 3 kW water heater runs for 2 hours, the energy consumed is:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  Wh = 1000 × 3 × 2 = 6000 Wh
</p>

<p className="mt-4">
  This means 6000 watt-hours (or 6 kilowatt-hours) of energy have been used. Utilities typically bill energy in kilowatt-hours (kWh), so this converter also helps users understand and estimate their energy consumption before receiving a bill.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Where is kW to Wh Conversion Used?</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Home Appliances:</strong> Estimating how much energy devices like AC units, geysers, and ovens consume.</li>
    <li><strong>Electric Vehicles:</strong> Calculating battery discharge or energy needs based on trip duration and motor load.</li>
    <li><strong>Solar Systems:</strong> Estimating daily energy generation based on sunlight duration and panel capacity.</li>
    <li><strong>Industrial Equipment:</strong> Measuring energy usage for production tools or HVAC systems over work shifts.</li>
    <li><strong>Generators and Inverters:</strong> Planning output over runtime for backup or off-grid applications.</li>
  </ul>
</div>

<p className="mt-4">
  In renewable energy, for instance, this conversion is key to sizing systems. If a 5 kW solar panel is exposed to full sunlight for 4 hours per day, it generates:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  Wh = 1000 × 5 × 4 = 20,000 Wh = 20 kWh
</p>

<p className="mt-4">
  That 20 kWh could then be stored in batteries, used to run household appliances, or fed into the grid. Battery banks are also often rated in Wh, making this conversion necessary to match power sources with storage capacity.
</p>

<p className="mt-4">
  In industrial use cases, especially during energy audits or cost-cutting initiatives, this formula is used to analyze how many watt-hours are being consumed per process or machine. If a conveyor system draws 7 kW and runs for 10 hours, the daily energy usage is 70,000 Wh or 70 kWh — a value that helps calculate operational cost and identify optimization opportunities.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Battery Sizing with Wh:</h2>
  <p>
    Battery systems in homes, telecom towers, or electric vehicles are typically sized in Wh. By knowing the power draw (in kW) and how many hours the load must run, we can determine the total Wh required. For example, to back up a 2 kW load for 5 hours:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Required energy = 1000 × 2 × 5 = 10,000 Wh
  </p>
  <p>
    So you would need a battery with at least 10,000 Wh or 10 kWh of capacity (ideally more, to account for efficiency losses and depth of discharge).
  </p>
</div>

<p className="mt-4">
  This conversion is also valuable for **data centers**, where racks draw a constant load over long durations. A server drawing 1.2 kW over a 24-hour period uses:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  Wh = 1000 × 1.2 × 24 = 28,800 Wh or 28.8 kWh
</p>

<p className="mt-4">
  Accurately measuring this over thousands of servers helps predict peak loads, optimize cooling systems, and schedule power backup plans.
</p>

<p className="mt-4">
  In schools and training centers, teaching kW-to-Wh conversion fosters a better understanding of energy. It supports experiments with electric heaters, motors, and lighting loads, where students track power ratings and runtime to calculate energy consumption.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Wh vs. kWh vs. MJ:</h2>
  <p>
    While Wh is a smaller unit than kWh, both are used frequently in system specs. Larger systems typically use kWh (1 kWh = 1000 Wh). In some energy modeling or scientific contexts, energy is measured in megajoules (MJ). To convert Wh to MJ:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    1 Wh = 3.6 kJ → 1000 Wh = 3.6 MJ
  </p>
  <p>
    So, if your system consumes 10,000 Wh, it’s equivalent to 36 MJ — a unit sometimes used in gas or food energy calculations.
  </p>
</div>

<p className="mt-4">
  In the context of **smart meters** and IoT-based home energy systems, this conversion powers real-time dashboards. These devices measure energy consumed every minute and use the kW-to-Wh formula to build cumulative data. The user can then see their hourly, daily, or monthly energy usage in Wh or kWh.
</p>

<p className="mt-4">
  In fleet management or EV logistics, calculating Wh helps determine energy efficiency per mile or kilometer. If a vehicle uses 1500 Wh to travel 10 miles, its efficiency is 150 Wh/mile — data that supports route planning and charger placement.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p>
    The kilowatt to watt-hour conversion is a powerful tool in electrical planning, energy cost estimation, and system optimization. It bridges the gap between instantaneous power and accumulated energy — helping individuals and industries alike make informed decisions about power use, system design, and sustainability. Whether you're powering a home, configuring a data center, sizing a battery, or teaching students, this simple conversion provides critical insight into how energy is produced, consumed, and stored.
  </p>
</div>


<p className="mt-4">
  Beyond basic calculations, the conversion from kilowatts (kW) to watt-hours (Wh) plays a strategic role in planning for power availability, managing load profiles, estimating grid contributions, and ensuring proper energy storage configuration. In today’s decentralized energy landscape — where users may generate, store, and consume electricity locally — this conversion empowers both professionals and consumers to take control of energy use.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Load Profiling and Consumption Forecasting:</h2>
  <p>
    Load profiling is the process of tracking and predicting energy consumption over time. It’s common in commercial buildings, factories, and smart homes. By measuring average power loads (kW) and estimating runtime for each zone or appliance, facility managers convert those values into Wh to forecast usage patterns.
  </p>
  <p className="mt-2">
    For example, if an office lighting system consumes 2.5 kW during working hours (8 hours/day), it uses:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Wh = 1000 × 2.5 × 8 = 20,000 Wh/day = 20 kWh/day
  </p>
  <p>
    This Wh-based data allows for monthly forecasting, seasonal planning, and budgeting of energy bills — all starting from a simple kW × h conversion.
  </p>
</div>

<p className="mt-4">
  Utilities and grid operators use this same logic to **manage demand response**. If many households run 3 kW heating systems during winter evenings for 4 hours, each household adds 12,000 Wh to peak load. Multiplied across thousands of homes, this helps forecast grid strain and trigger demand management protocols.
</p>

<p className="mt-4">
  In **backup generator and inverter planning**, converting kW to Wh helps ensure you don't under-size your energy reserves. If a shop has a critical 6 kW load and needs to operate for 3 hours during a power cut:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  Wh = 1000 × 6 × 3 = 18,000 Wh
</p>

<p className="mt-4">
  Your energy storage system (such as a lithium battery bank or diesel generator fuel plan) must meet or exceed this energy capacity to ensure business continuity.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Off-Grid and Remote Energy Applications:</h2>
  <p>
    For off-grid homes, cabins, or remote telecom stations, knowing energy requirements in Wh allows solar installers and energy engineers to properly size the entire system: panels, batteries, charge controllers, and inverters.
  </p>
  <p>
    If a cabin uses 3.5 kW during evenings for 5 hours:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    3.5 × 5 × 1000 = 17,500 Wh
  </p>
  <p>
    This energy demand determines whether a 24V or 48V battery bank is appropriate and how many panels are needed to replenish that energy daily.
  </p>
</div>

<p className="mt-4">
  In regions without grid access, small hospitals or schools powered by solar + battery systems rely on this exact calculation to survive daily power fluctuations. If they underestimate Wh needs, systems will fail prematurely or deliver inconsistent performance.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Device-Level Monitoring and Smart Meters:</h2>
  <p>
    Smart meters measure instantaneous power usage (kW) and calculate Wh in real-time. These values are recorded and sent to dashboards or billing systems. If a user keeps a microwave running at 1.2 kW for 15 minutes (0.25 hours), the energy used is:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    1.2 × 0.25 × 1000 = 300 Wh
  </p>
  <p>
    Over time, these small Wh values accumulate to monthly bills or performance insights. Using kW to Wh formulas within such systems powers intelligent homes and automated energy-saving responses.
  </p>
</div>

<p className="mt-4">
  In **agriculture**, solar-powered water pumps and irrigation systems use similar logic. A 2.5 kW pump running for 3 hours consumes:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  1000 × 2.5 × 3 = 7500 Wh
</p>

<p className="mt-4">
  Knowing this, farmers and designers can plan panel and battery combinations accurately, especially in rural zones where access to grid electricity is limited.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Electric Vehicles and Charging Infrastructure:</h2>
  <p>
    EV manufacturers and station planners also rely heavily on this conversion. If a Level 2 charger delivers 7.2 kW to a vehicle over 2.5 hours:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Wh = 1000 × 7.2 × 2.5 = 18,000 Wh = 18 kWh
  </p>
  <p>
    This determines both the range added to the car and the energy drawn from the grid. For a station hosting 10 cars, this amounts to 180,000 Wh or 180 kWh per session — a vital metric for energy billing and transformer planning.
  </p>
</div>

<p className="mt-4">
  In **education**, teachers can use practical examples like this to engage students with relatable energy use cases: "If your 100 W fan runs for 5 hours every day, how much energy does it consume in a week?" (Answer: 100 × 5 × 7 = 3500 Wh or 3.5 kWh).
</p>

<p className="mt-4">
  This instills real-world awareness about power use, budgeting, and sustainability — especially in an era where energy literacy is essential.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Designing Appliances and Efficient Systems:</h2>
  <p>
    Engineers use Wh to design internal specifications for appliances, including power supply units, thermal load calculations, and expected energy ratings. A device marketed as “500 Wh” must be designed to operate at, say, 100 W for 5 hours. This dictates component selection, enclosure size, and even cooling requirements.
  </p>
</div>

<p className="mt-4">
  Regulatory bodies also set appliance efficiency standards in Wh/day or Wh/year (especially for refrigerators, TVs, or laptops). These metrics are standardized for fair comparison between models and used globally on energy efficiency labels.
</p>

<p className="mt-4">
  In **building design and green certification** programs (e.g., LEED or IGBC), Wh calculations are used to determine per capita or per square meter energy consumption. A building that uses 120,000 Wh daily and has 100 occupants averages 1200 Wh/person/day. This enables sustainability benchmarking and supports net-zero energy goals.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Final Thoughts:</h2>
  <p>
    As energy systems grow smarter and more decentralized, converting kilowatts to watt-hours remains a critical link between instantaneous power and accumulated energy use. From grid planning to solar battery sizing, from electric cars to educational tools — this conversion makes abstract power values measurable, relatable, and actionable. Use this tool to understand, design, and optimize every corner of your energy ecosystem.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default KWToWhConverter;
