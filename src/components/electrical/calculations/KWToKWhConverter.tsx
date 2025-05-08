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

const KWToKWhConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [time, setTime] = useState<number>(0);    // Time in hours (hr)
  const [energy, setEnergy] = useState<number | string>('—');  // Output energy in kilowatt-hours (kWh)

  // Conversion function
  const convertToKilowattHour = (power: number, time: number) => {
    return power * time;  // E(kWh) = P(kW) × t(hr)
  };

  const handleConvert = () => {
    const result = convertToKilowattHour(power, time);
    setEnergy(result);
  };

  // Example scenarios for better understanding
  const examples = [
    { power: 5, time: 3, expectedResult: 15, description: 'Example 1: 5 kW for 3 hours' },
    { power: 2, time: 4, expectedResult: 8, description: 'Example 2: 2 kW for 4 hours' },
    { power: 10, time: 1, expectedResult: 10, description: 'Example 3: 10 kW for 1 hour' },
    { power: 3, time: 2, expectedResult: 6, description: 'Example 4: 3 kW for 2 hours' },
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
            <BreadcrumbPage>KW to KWh Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>KW to Kilowatt-Hours Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert power in kilowatts (kW) to energy in kilowatt-hours (kWh) over a given time period.</p>

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
              <label className="block font-medium mb-1">Time in Hours (hr):</label>
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{energy} kWh</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Power: {example.power} kW, Time: {example.time} hours</p>
                    <p>Expected Energy: {example.expectedResult} kWh</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p><strong>E = P × t</strong></p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E</strong>: Energy in kilowatt-hours (kWh)</li>
                <li><strong>P</strong>: Power in kilowatts (kW)</li>
                <li><strong>t</strong>: Time in hours (hr)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatts (kW) to kilowatt-hours (kWh) is based on the formula:<br />
                E = P × t<br />
                By multiplying the power (in kW) by the time (in hours), you calculate the total energy consumed or produced in kilowatt-hours.
              </p>
            </div>
          </div>

          <p className="mt-4">
  Converting kilowatts (kW) to kilowatt-hours (kWh) is one of the most essential calculations in energy management. While kilowatts represent power — the rate at which energy is consumed or produced — kilowatt-hours measure the total amount of energy used over time. Understanding this distinction allows users to estimate electricity costs, size systems correctly, and optimize power consumption across residential, commercial, and industrial settings.
</p>

<p className="mt-4">
  The formula is straightforward:
</p>

<ul className="list-disc list-inside ml-4">
  <li><strong>Energy (kWh) = Power (kW) × Time (hours)</strong></li>
</ul>

<p className="mt-2">
  For example, if you run a 2 kW heater for 4 hours, you use 8 kWh of energy. This tells you not only how powerful the appliance is, but also how much energy it consumes during operation — which directly affects your electricity bill.
</p>

<p className="mt-4">
  In real-world scenarios, this conversion is used in everything from home appliance operation to the planning of renewable energy systems. If a home solar system generates 5 kW continuously for 6 hours, that’s 30 kWh of energy produced. This data can then be compared to household energy needs to determine if the system is sufficient or requires storage or grid backup.
</p>

<p className="mt-4">
  Energy billing is almost always based on kWh. Your utility provider charges you for every kilowatt-hour you consume, so knowing how to estimate this usage can help you manage your energy bills more effectively. A 1.5 kW air conditioner running for 8 hours a day would consume 12 kWh, and over 30 days that’s 360 kWh — a significant portion of a household’s monthly energy usage.
</p>

<p className="mt-4">
  In industrial and commercial facilities, this conversion helps in identifying peak load times and energy-heavy operations. A 50 kW motor used for 3 hours during peak production hours consumes 150 kWh. By tracking and managing such loads, energy managers can implement strategies to shift usage to off-peak hours and reduce costs.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Applications of the kW to kWh Conversion:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>Calculating energy consumption for appliances and equipment</li>
    <li>Estimating monthly electricity bills</li>
    <li>Sizing backup generators or UPS systems</li>
    <li>Planning battery storage capacity for solar power</li>
    <li>Designing and simulating energy loads in industrial systems</li>
    <li>Improving energy efficiency and load balancing</li>
  </ul>
</div>

<p className="mt-4">
  For engineers, the ability to calculate energy (kWh) from power ratings (kW) is essential in system design. Whether it’s for HVAC systems, electric vehicle chargers, or server rooms, knowing the expected energy use over time is key to infrastructure planning. Overloading circuits, underestimating storage capacity, or overspending on oversized components can all be avoided with this basic but vital calculation.
</p>

<p className="mt-4">
  In the renewable energy sector, kW to kWh conversion is at the core of feasibility studies and ROI estimates. A 10 kW solar array in a location with 5 hours of peak sun can produce about 50 kWh per day. If a household’s daily consumption is 40 kWh, this system is likely sufficient and may even generate surplus power.
</p>

<p className="mt-4">
  For electric vehicles (EVs), this conversion helps determine range and energy needs. An EV that consumes 15 kW while driving and operates for 2 hours will use 30 kWh of battery capacity. If the battery is rated at 60 kWh, you can expect roughly 4 hours of continuous operation before recharging is required. Similarly, EV chargers are rated in kW, and their ability to recharge a certain amount of kWh per hour is based on this same principle.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Use Cases by Role:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li><strong>Homeowners:</strong> Estimate usage of ACs, geysers, or EV chargers</li>
    <li><strong>Facility Managers:</strong> Manage energy budgets and optimize system efficiency</li>
    <li><strong>Students:</strong> Understand the relationship between power and energy in physics</li>
    <li><strong>Engineers:</strong> Simulate loads for power system design</li>
    <li><strong>Solar Installers:</strong> Match solar capacity with average energy needs</li>
  </ul>
</div>

<p className="mt-4">
  This conversion also plays a key role in **energy monitoring systems**. Smart meters, energy dashboards, and building management systems continuously record real-time power consumption (in kW) and calculate cumulative energy usage (in kWh). This helps visualize patterns, detect anomalies, and set alerts for overconsumption.
</p>

<p className="mt-4">
  In data centers, where servers operate 24/7, calculating energy in kWh helps in budgeting, cooling load calculations, and carbon footprint tracking. A rack drawing 4 kW continuously for 24 hours uses 96 kWh per day — scaling this across hundreds of racks allows managers to plan power supplies, cooling systems, and backup requirements.
</p>

<p className="mt-4">
  The formula is also commonly used in **educational experiments and lab settings**. Physics students calculate the energy usage of electrical resistors, motors, or heating elements by measuring power draw and time. This helps reinforce the concept of energy as a measurable quantity that accumulates over time, driven by the rate of consumption.
</p>

<p className="mt-4">
  Additionally, regulatory agencies and sustainability planners use this conversion when benchmarking energy efficiency. Buildings are often rated in terms of energy consumed per square foot per year, measured in kWh. Calculating this requires detailed conversion from power demands logged during audits to total energy consumption over time.
</p>

<p className="mt-4">
  In summary, converting kilowatts to kilowatt-hours gives users a tangible way to measure, understand, and control energy use. It enables smart decisions whether you're running a home, a business, or a utility network. The beauty of this formula lies in its simplicity — just multiply the power by the time — but the value it delivers spans financial, environmental, and technical domains.
</p>

<p className="mt-4">
  In today's rapidly evolving energy landscape, understanding how to convert kilowatts (kW) to kilowatt-hours (kWh) empowers users with more than just technical knowledge — it offers clarity, control, and actionable insight into how energy is used, measured, and billed. While the formula <strong>E = P × t</strong> may appear elementary, its applications extend deep into renewable energy planning, smart city development, electric transportation, and corporate sustainability reporting.
</p>

<p className="mt-4">
  One of the largest industries benefiting from this conversion is **construction and real estate**. Architects and engineers regularly use the kW to kWh formula to estimate the energy needs of future buildings. By calculating anticipated load profiles, they can determine the proper size of generators, solar installations, backup batteries, and heating or cooling units. A small residential building with a 10 kW expected average load operating for 10 hours per day consumes 100 kWh — this figure drives design and budgeting decisions.
</p>

<p className="mt-4">
  In **smart homes and IoT-connected buildings**, energy automation is often driven by real-time kW measurements that are translated into kWh for reporting. Homeowners can track their daily or weekly consumption, set alerts when power usage exceeds predefined thresholds, and automatically shut off high-load appliances to save energy. With rising electricity costs and a shift toward decentralized energy generation, this conversion becomes central to managing energy-smart lifestyles.
</p>

<p className="mt-4">
  For **transportation and logistics**, the relationship between kW and kWh is particularly important in the context of electric vehicles (EVs). An electric bus might consume 40 kW of power while cruising. If it operates continuously for 2.5 hours on a route, it requires 100 kWh of energy. Fleet operators use this metric to calculate range, battery charging times, infrastructure needs, and even route optimization. Similarly, fast-charging stations are rated in kW, and the amount of energy delivered (kWh) determines how long a vehicle must remain connected.
</p>

<p className="mt-4">
  In the context of **public utilities and city planning**, local governments track energy use by converting aggregate power demands (kW) into energy totals (kWh) over hourly, daily, or monthly periods. This helps balance demand across time, avoid grid overloads, and prepare for surges — such as heat waves or large events — where energy consumption skyrockets. Understanding kWh projections allows utility providers to invest in grid upgrades, incentivize off-peak usage, and promote efficiency initiatives.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Benefits of Understanding kW to kWh for Businesses:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li><strong>Energy forecasting:</strong> Project monthly and yearly electricity costs</li>
    <li><strong>Budgeting:</strong> Avoid under- or over-sizing generators, UPS units, and cooling systems</li>
    <li><strong>Sustainability:</strong> Set goals and track reductions in energy use over time</li>
    <li><strong>Compliance:</strong> Meet ISO or national energy standards through consistent energy reporting</li>
    <li><strong>Carbon tracking:</strong> Convert kWh to CO₂ emissions using regional carbon intensity factors</li>
  </ul>
</div>

<p className="mt-4">
  In **data centers**, this conversion supports power usage effectiveness (PUE) metrics. A server rack might consume 6 kW continuously, leading to 144 kWh per day. When aggregated across hundreds of racks, this becomes a critical input for HVAC system sizing, power backup planning, and environmental impact assessments. Real-time energy dashboards convert live power (kW) data into cumulative energy (kWh), offering data center operators clarity over time-based consumption trends.
</p>

<p className="mt-4">
  **Educational institutions** also rely on these conversions. Universities often operate electrical labs, machine shops, and research facilities that consume power throughout the day. Energy managers use kW to kWh conversions to assess peak loads during class hours and off-peak hours, enabling them to spread energy usage and lower bills. Engineering students, meanwhile, apply these principles in course projects, lab experiments, and even competitions like building energy-efficient models or vehicles.
</p>

<p className="mt-4">
  In the growing field of **sustainable architecture**, kWh/m²/year is a standard unit of building energy efficiency. Designers calculate expected energy use based on equipment loads (in kW) and occupancy schedules (in hours), yielding the kWh metric used for benchmarking against energy codes or green certifications like LEED, BREEAM, or IGBC. A lower kWh/m²/year score indicates better efficiency, higher comfort, and lower operating costs.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Advanced Use Cases:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li><strong>Solar Battery Sizing:</strong> If your home uses 20 kWh overnight, you’ll need a battery capable of storing and discharging that amount, based on your inverter’s kW output.</li>
    <li><strong>Server Load Testing:</strong> Determine energy draw over stress-test periods by logging power use (kW) and runtime (h).</li>
    <li><strong>Greenhouse Automation:</strong> Ventilation and lighting systems with known kW ratings can be optimized for energy efficiency using time-controlled automation based on kWh projections.</li>
    <li><strong>Manufacturing Optimization:</strong> Production lines with multiple motors and conveyor systems can predict energy costs per shift using total kWh consumption derived from kW load charts.</li>
  </ul>
</div>

<p className="mt-4">
  Moreover, the conversion from kilowatts to kilowatt-hours supports **smart tariff design** in electricity markets. Utilities offer variable rates based on time-of-use (TOU) pricing models — peak, mid-peak, and off-peak. A consumer who understands how much energy their 5 kW system will consume in 3 hours (15 kWh) can schedule operation during off-peak periods to reduce costs.
</p>

<p className="mt-4">
  This is also true for **off-grid systems** in rural or remote areas. Operators need to ensure that the kWh demand can be met using locally produced energy, typically from solar or wind. For instance, a telecom tower requiring 1.2 kW constantly over 24 hours demands 28.8 kWh per day — a figure critical for battery bank sizing, solar panel configuration, and inverter selection.
</p>

<p className="mt-4">
  In **hospital or emergency systems**, reliability is key. Diesel generators, battery banks, and uninterrupted power supply (UPS) units must be sized accurately using the kW to kWh formula. A hospital ICU might run on a 50 kW backup system. If a power outage lasts 2 hours, the system needs to supply at least 100 kWh — and potentially more, if redundancy is required.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Final Thoughts:</h2>
  <p>
    Converting kilowatts to kilowatt-hours goes beyond math — it is a foundational tool for decision-making across the energy lifecycle. Whether you are planning an eco-home, optimizing a warehouse, managing fleet logistics, or configuring a solar microgrid, understanding the relationship between power and energy enables efficiency, cost savings, and environmental responsibility. As energy transitions accelerate globally, mastering this simple but powerful equation will remain central to how we build, consume, and innovate with energy.
  </p>
</div>


<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p>
    The KW to kWh conversion is more than just a math equation — it's a gateway to energy awareness. Whether you're tracking your monthly bill, sizing a solar array, or engineering a smart grid, this conversion enables smarter, more sustainable decisions. With just two inputs — power and time — you can evaluate usage, control costs, and pave the way for more efficient energy systems. Use this tool often to build a better understanding of your consumption and make data-driven improvements in your home or business.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default KWToKWhConverter;
