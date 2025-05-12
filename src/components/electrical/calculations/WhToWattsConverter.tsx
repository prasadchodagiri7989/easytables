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
import { Link } from "react-router-dom"; // Use next/link if you're using Next.js

const WhToWattsConverter: React.FC = () => {
  const [wh, setWh] = useState<number>(100);
  const [hours, setHours] = useState<number>(5);
  const [watts, setWatts] = useState<number | string>("—");

  const calculateWatts = (wh: number, hours: number) => {
    return wh / hours;
  };

  const handleConvert = () => {
    if (hours === 0) {
      setWatts("Invalid (divide by zero)");
      return;
    }
    const result = calculateWatts(wh, hours);
    setWatts(result.toFixed(2));
  };

  const examples = [
    { wh: 500, hours: 10, expectedResult: 50, description: "500 Wh used over 10 hours" },
    { wh: 1200, hours: 6, expectedResult: 200, description: "1200 Wh used over 6 hours" },
    { wh: 300, hours: 3, expectedResult: 100, description: "300 Wh used over 3 hours" },
    { wh: 150, hours: 2, expectedResult: 75, description: "150 Wh used over 2 hours" },
    { wh: 1000, hours: 4, expectedResult: 250, description: "1000 Wh used over 4 hours" },
    { wh: 240, hours: 8, expectedResult: 30, description: "240 Wh used over 8 hours" },
    { wh: 360, hours: 3, expectedResult: 120, description: "360 Wh used over 3 hours" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mb-6">
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
            <BreadcrumbPage>Wh to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Card Container */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Watt-hours to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-base text-gray-700 dark:text-white">
          {/* Introduction */}
          <p>
            This tool converts energy measured in watt-hours (Wh) into power measured in watts (W) based on the amount of time
            the energy is used over. This is useful for evaluating battery performance, power loads, and energy consumption.
          </p>

          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Energy (Wh):</label>
              <input
                type="number"
                value={wh}
                onChange={(e) => setWh(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Time (hours):</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded dark:text-black"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
            >
              Convert
            </button>

            {/* Result */}
            <div>
              <strong className="text-lg">Converted Power:</strong>
              <p className="mt-2 p-3 bg-gray-100 rounded font-mono text-lg dark:text-black">{watts} W</p>
            </div>
          </div>

          {/* Formula */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Formula</h2>
            <p className="text-base">
              The formula to convert watt-hours to watts is:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-black dark:text-black font-mono mt-2">
              Watts (W) = Watt-hours (Wh) / Time (hours)
            </pre>
            <p className="mt-2">
              Where:
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>W</strong> is the power in watts</li>
                <li><strong>Wh</strong> is the energy in watt-hours</li>
                <li><strong>h</strong> is the time in hours</li>
              </ul>
            </p>
          </section>

          {/* Examples */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Examples</h2>
            <ul className="space-y-4 list-disc list-inside">
              {examples.map((ex, idx) => (
                <li key={idx}>
                  <p><strong>{ex.description}</strong></p>
                  <p>Input: {ex.wh} Wh over {ex.hours} hours</p>
                  <p>Output: <span className="font-mono">{ex.expectedResult} W</span></p>
                </li>
              ))}
            </ul>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Use Cases</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Estimate the power load from a battery over time</li>
              <li>Design solar panel systems with optimal discharge rates</li>
              <li>Determine power draw for energy efficiency analysis</li>
              <li>Assist in generator capacity planning</li>
              <li>Calculate average appliance usage</li>
            </ul>
          </section>

          {/* Explanation */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Explanation</h2>
            <p>
              Watt-hours represent the amount of energy consumed or stored. When you divide this by time, you get the rate
              at which the energy was used — which is power (in watts). For instance, if a device uses 500 Wh over 10 hours,
              it consumes power at a rate of 50 W.
            </p>
          </section>

          {/* Educational Tip */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Energy vs. Power</h2>
            <p>
              <strong>Energy</strong> (Wh) is the capacity to do work — it accumulates over time.<br />
              <strong>Power</strong> (W) is the rate of using that energy.
            </p>
            <p className="mt-2 italic">Analogy: Think of Wh like the fuel in a tank and W like how fast you're burning it.</p>
          </section>

          {/* Tips */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">Tips</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Never divide by 0 — time must be greater than 0</li>
              <li>Use realistic energy and time values to get meaningful results</li>
              <li>Check the battery label or datasheet for accurate Wh capacity</li>
              <li>Use decimal input for fractional hours (e.g. 1.5 hours)</li>
            </ul>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="font-bold text-xl mt-8 mb-2">FAQs</h2>
            <div className="space-y-4">
              <div>
                <strong>Q: What is a watt-hour?</strong>
                <p>A watt-hour (Wh) is a measure of energy — the amount of power consumed over one hour.</p>
              </div>
              <div>
                <strong>Q: Can I use this to size my solar panel?</strong>
                <p>Yes, by estimating your daily energy need in Wh and dividing by sunlight hours, you get required wattage.</p>
              </div>
              <div>
                <strong>Q: Is this tool accurate?</strong>
                <p>Yes, if you enter correct Wh and time values. The formula is based on physics fundamentals.</p>
              </div>
            </div>
          </section>
          {/* Real-World Applications and Power Usage Analysis */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Real-World Applications and Power Usage Analysis:</h2>

  <p>
    Understanding the conversion from Wh to watts is important in a variety of real-world scenarios. Let's explore how this conversion is applied across various industries, as well as how it can assist in evaluating and optimizing energy consumption.
  </p>

  <h3 className="font-semibold mt-4">1. Home Energy Management:</h3>
  <p>
    For households, tracking energy consumption is crucial for managing electric bills. For example, an average refrigerator may consume 500 Wh per day. By converting this to watts, you can determine its average power consumption per hour, helping in efficient energy usage analysis.
  </p>

  <h3 className="font-semibold mt-4">2. Electric Vehicles (EVs):</h3>
  <p>
    In electric vehicles, energy consumption is often measured in watt-hours (Wh), and converting this to watts can help to analyze how much power the vehicle consumes over time. This aids in designing energy-efficient EVs and calculating battery life under different driving conditions.
  </p>

  <h3 className="font-semibold mt-4">3. Data Centers:</h3>
  <p>
    Data centers, which house multiple servers, have a high demand for continuous power. By converting energy usage in watt-hours to watts, operators can forecast the power needed to support their infrastructure. This is also important for backup power systems and optimizing energy usage for cooling systems.
  </p>

  <h3 className="font-semibold mt-4">4. Solar Power System Sizing:</h3>
  <p>
    When planning a solar power system, it's important to understand how much energy is being consumed over time. By using Wh to watts conversions, you can estimate how much solar power you need to generate to meet daily usage, factoring in the hours of sunlight.
  </p>

  <h3 className="font-semibold mt-4">5. Power Load Monitoring in Industrial Settings:</h3>
  <p>
    In industrial facilities, monitoring power loads is essential for maintaining operational efficiency. By converting energy consumption in watt-hours to watts, you can determine the peak power demand, which aids in deciding on the necessary electrical infrastructure and generator sizing.
  </p>

  <h3 className="font-semibold mt-4">6. Off-Grid Power Systems:</h3>
  <p>
    Off-grid systems, such as those used in remote cabins or RVs, often rely on battery banks. Converting Wh to watts helps to assess how much power is being drawn over time from the batteries and how quickly they will be depleted, allowing users to optimize their power consumption.
  </p>

  <p className="mt-4">
    By understanding how watt-hours translate to watts, you can better manage your energy consumption and make more informed decisions regarding power system design, efficiency improvements, and cost savings.
  </p>
</div>
{/* Extended Content Section */}
<div className="mt-8">
  <h2 className="font-bold text-2xl mb-4">In-Depth Exploration: Watt-hours, Watts, and Their Relationship</h2>
  
  <p>
    Understanding the relationship between watt-hours (Wh) and watts (W) is crucial for efficient energy management. These two units measure different aspects of energy usage: watt-hours measure total energy consumed, while watts represent the rate at which energy is used. It's important to grasp their connection and learn how to use this information effectively in real-world applications.
  </p>

  <h3 className="font-semibold mt-6">The Concept of Energy vs. Power</h3>
  <p>
    At its core, the difference between energy and power is about time. Power is the rate at which energy is used, while energy is the total amount of work done over time. For example, think of a battery storing 500 Wh of energy. This means the battery can supply a device with 500 watts of power for one hour, or 50 watts of power for 10 hours, or even 1,000 watts of power for 30 minutes. The relationship is simple: the more time you have, the less power is needed to deplete the same amount of energy.
  </p>

  <h3 className="font-semibold mt-6">Watts and Their Role in Electrical Systems</h3>
  <p>
    Watts, or W, is the standard unit of power in electrical systems. It represents how much energy is used per unit of time. In the case of an electrical appliance, if it uses 100 watts, it consumes 100 joules of energy every second. This makes watts a measure of energy transfer rate, crucial for designing circuits, evaluating power supply needs, and understanding how much electricity will be consumed over time. For instance, if you're building a solar power system, knowing the power rating in watts helps determine how much electricity your panels need to generate to meet energy demands.
  </p>

  <h3 className="font-semibold mt-6">The Power of Efficiency in Energy Systems</h3>
  <p>
    Efficiency plays a critical role in energy systems. Whether you're considering battery-powered devices, solar panels, or home appliances, understanding the efficiency of these systems is essential. High-efficiency systems will convert more of the stored energy into useful power without wasting it in the form of heat, while low-efficiency systems can rapidly drain battery life, leading to higher operational costs. Efficiency calculations often require knowing both the wattage and the energy consumed over time, which is where watt-hours become important.
  </p>

  <h3 className="font-semibold mt-6">Energy Storage and Battery Life</h3>
  <p>
    Batteries are the most common form of energy storage. Whether in your phone, electric vehicle, or home energy system, batteries store energy in watt-hours (Wh). When it comes to determining how long a battery will last, you need to know the energy consumption of the device and the battery’s total energy capacity. For example, a 1000 Wh battery can theoretically power a 100 W device for 10 hours. If the device consumes more power, the battery will drain faster. The key to battery longevity is understanding the energy consumption of the device and ensuring the battery is sized appropriately.
  </p>

  <h3 className="font-semibold mt-6">Solar Energy and the Role of Watts</h3>
  <p>
    Solar panels convert sunlight into electricity. The efficiency of solar panels is expressed in watts — for example, a 250-watt panel can generate 250 watts of power under ideal conditions. However, when designing a solar energy system, it’s important to not only consider the wattage of the panels but also the total energy consumption of the system in watt-hours. By calculating your energy needs in Wh, you can determine how many solar panels are needed to meet those needs. For example, if your daily consumption is 1,500 Wh, you would need six 250-watt panels (assuming ideal conditions) to generate enough power.
  </p>

  <h3 className="font-semibold mt-6">Energy Audits and Consumption Monitoring</h3>
  <p>
    One of the most effective ways to reduce energy costs is to monitor and manage energy usage. An energy audit is a detailed assessment of how much energy is used within a system. By monitoring consumption in watt-hours, you can identify areas where energy is being wasted or where efficiency improvements can be made. For example, running a home energy audit can reveal which appliances are using the most energy, and over time, you can monitor changes in energy usage after implementing energy-saving measures.
  </p>

  <h3 className="font-semibold mt-6">Key Factors Affecting Energy Efficiency</h3>
  <p>
    Several factors can influence the efficiency of energy systems. For example, in electric vehicles, factors like driving habits, speed, and terrain can significantly affect the battery’s energy consumption. Similarly, in home heating and cooling systems, insulation, air sealing, and appliance efficiency ratings all impact energy use. Understanding how these factors interplay with watt-hours and watts is key to optimizing energy consumption and improving the overall efficiency of any system.
  </p>

  <h3 className="font-semibold mt-6">The Environmental Impact of Energy Consumption</h3>
  <p>
    Reducing energy consumption has positive environmental benefits. By optimizing energy usage, we can reduce the demand for electricity from non-renewable sources, decrease greenhouse gas emissions, and lower our overall carbon footprint. For example, using energy-efficient appliances and renewable energy sources like solar and wind power reduces the reliance on fossil fuels, which are responsible for the majority of carbon emissions. The conversion of watt-hours to watts is essential for quantifying how much energy is being saved or consumed, and ultimately how that affects the environment.
  </p>

  <h3 className="font-semibold mt-6">Calculating Power Needs for Off-Grid Systems</h3>
  <p>
    Off-grid systems, such as those used in remote locations or for emergency backup power, often rely on batteries or small-scale solar panels. When designing these systems, it's critical to calculate not only the energy consumption (in watt-hours) but also the power needs (in watts) over time. This allows for proper sizing of components like batteries, inverters, and solar panels. For example, a small cabin may need 1,000 Wh per day to run lights, a refrigerator, and other basic appliances. By converting this energy requirement into watts, you can size your solar array and battery bank accordingly, ensuring you have enough power to meet your needs without overloading the system.
  </p>

  <h3 className="font-semibold mt-6">Understanding Power Factor in Energy Systems</h3>
  <p>
    Power factor is an important concept in AC (alternating current) power systems, particularly when it comes to industrial applications. It measures the efficiency of the power being used. A power factor of 1 (or 100%) indicates that all the energy supplied is being used effectively, while a lower power factor means that some of the energy is wasted. The power factor is often considered when converting between different forms of electrical power and when determining the necessary capacity for generators and transformers.
  </p>

  <h3 className="font-semibold mt-6">Practical Application in Power Generation and Transmission</h3>
  <p>
    Power generation and transmission systems must be designed to account for energy losses during transport, especially over long distances. Electrical power losses in transmission lines are often measured in watts, and these losses can be minimized by optimizing the power factor and using high-efficiency equipment. When converting between watt-hours and watts, engineers must also consider factors like voltage and current to ensure the safe and efficient transfer of electricity.
  </p>

  <h3 className="font-semibold mt-6">Energy Management Systems (EMS) in Commercial and Industrial Settings</h3>
  <p>
    Energy Management Systems (EMS) are employed in large commercial and industrial settings to monitor and control energy usage. These systems provide real-time data on energy consumption, helping facility managers make informed decisions about energy-saving initiatives and system optimizations. By monitoring power consumption in both watts and watt-hours, EMS can identify areas where energy is being wasted, alerting operators to inefficiencies and enabling proactive measures to reduce costs.
  </p>

  <h3 className="font-semibold mt-6">Battery Sizing for Renewable Energy Systems</h3>
  <p>
    In renewable energy systems, battery storage plays a key role in ensuring a reliable power supply, particularly in off-grid or hybrid systems. Battery sizing depends on the total energy consumption (in watt-hours) and the number of hours the system needs to operate without recharging. Properly sizing the battery ensures that there is enough capacity to meet energy demands during periods of low generation, such as cloudy days in solar systems or calm days for wind turbines.
  </p>

  <h3 className="font-semibold mt-6">Power Consumption in Smart Homes</h3>
  <p>
    With the rise of smart home technology, homeowners can now monitor and control their energy usage in real-time. Smart thermostats, lighting systems, and appliances can be programmed to reduce power consumption when not needed, optimizing both wattage usage and energy savings. Converting watt-hours to watts can help homeowners better understand how much power their smart home devices are consuming over time, aiding in more efficient energy management.
  </p>

  <p className="mt-8">
    As we continue to move toward more energy-conscious living, understanding the fundamental relationship between watt-hours and watts becomes increasingly important. Whether you're looking to reduce energy costs, design efficient systems, or understand the environmental impacts of your energy usage, having a solid grasp of these concepts is crucial for making informed decisions.
  </p>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default WhToWattsConverter;
