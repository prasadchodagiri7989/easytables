import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WattsToJoulesConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(30); // Default 30 watts
  const [seconds, setSeconds] = useState<number>(3); // Default 3 seconds
  const [joules, setJoules] = useState<number | string>("—");

  const calculateJoules = (watts: number, seconds: number) => {
    return watts * seconds;
  };

  const handleConvert = () => {
    const result = calculateJoules(watts, seconds);
    setJoules(result);
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
            <BreadcrumbPage>Watts to Joules Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Joules Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert electric power in watts (W) to energy in joules (J) using the time in seconds (s).
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
              <label className="block font-medium mb-1">Time in Seconds (s):</label>
              <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
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
              <strong>Energy in Joules:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{joules} J</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E (J) = P (W) × t (s)</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E</strong>: Energy in joules (J)</li>
                <li><strong>P</strong>: Power in watts (W)</li>
                <li><strong>t</strong>: Time in seconds (s)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                You can’t directly convert watts to joules since they represent different physical quantities:
                <br />
                – Watts measure **power** (rate of energy per second).
                <br />
                – Joules measure **energy** (total work done).
              </p>
              <p className="mt-2">
                To convert watts to joules, you must multiply by time (in seconds).
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example:</h2>
              <p>
                What is the energy consumed by a device using <strong>30 watts</strong> of power for <strong>3 seconds</strong>?
              </p>
              <p className="mt-2 font-mono bg-gray-100 p-2 rounded dark:text-black">
                E = 30W × 3s = <strong>90J</strong>
              </p>
            </div>
          </div>
          <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Practical Use Cases of Joules in Real Life</h2>
    <p>
      Understanding energy in joules is essential in numerous fields, including electrical engineering, thermodynamics, and environmental science. Here are some practical applications of joules in real life:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Household Appliances:</strong> When you use a household appliance, the energy consumption can be calculated in joules. For example, a microwave oven with a 1000-watt rating that runs for 2 minutes consumes:
        <br />
        <strong>Energy (J) = 1000W × 120s = 120,000J</strong>
      </li>
      <li>
        <strong>Electric Cars:</strong> Electric vehicles (EVs) often have their energy consumption measured in kilowatt-hours (kWh), which is a larger unit of energy. However, when you need to convert the power consumption to joules, knowing the power rating in watts is essential.
      </li>
      <li>
        <strong>Power Plants:</strong> In large-scale energy generation, understanding how much energy is produced or consumed over time is crucial for efficient management. Calculating energy in joules allows for precise measurements of electricity generation.
      </li>
      <li>
        <strong>Solar Energy Systems:</strong> Solar panels’ output is typically rated in watts, but the total energy generated throughout the day is measured in joules or kilojoules.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Efficiency and Joules</h2>
    <p>
      Energy efficiency is the ability to perform the same task with less energy. Joules are often used to evaluate the energy efficiency of devices and systems. By calculating how much energy an appliance consumes in joules, you can compare different products to determine which one is the most energy-efficient.
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>LED vs. Incandescent Bulbs:</strong> LED bulbs are much more energy-efficient compared to traditional incandescent bulbs. For example, a 10W LED bulb consumes 10 joules of energy every second, while a 60W incandescent bulb consumes 60 joules per second.
      </li>
      <li>
        <strong>Electric Heaters:</strong> In winter, electric heaters consume large amounts of energy. By calculating their energy consumption in joules, homeowners can better understand their heating costs and optimize usage.
      </li>
      <li>
        <strong>Energy Star Appliances:</strong> Appliances rated with the Energy Star logo are more energy-efficient and consume fewer joules to perform the same function as non-rated appliances.
      </li>
    </ul>
    <p>
      Understanding energy efficiency helps reduce utility bills, minimize energy consumption, and reduce the environmental impact of excessive power usage.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Common Mistakes When Converting Watts to Joules</h2>
    <p>
      While converting watts to joules is straightforward, several common mistakes can occur, especially when calculating energy consumption for devices. Here are some to watch out for:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Omitting the Time Factor:</strong> A common mistake is forgetting to factor in the time in seconds. Remember that joules represent the total energy consumed, so time is an essential component of the calculation.
      </li>
      <li>
        <strong>Confusing Power and Energy:</strong> Watts measure power, not energy. Power is the rate at which energy is used, whereas joules represent the total energy consumed. Ensure you're multiplying the watts by the time in seconds to convert to joules.
      </li>
      <li>
        <strong>Using Incorrect Units for Time:</strong> Time must always be in seconds when performing the conversion. Be mindful of converting minutes or hours into seconds.
      </li>
      <li>
        <strong>Ignoring Units of Measurement:</strong> When performing conversions, make sure that all units are consistent. Watts (W) and seconds (s) are the standard units for power and time, respectively, when calculating joules.
      </li>
    </ul>
    <p>
      Avoiding these mistakes ensures accurate calculations and a better understanding of energy consumption.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Relation Between Watts, Joules, and Other Energy Units</h2>
    <p>
      While watts and joules are essential units for measuring power and energy, several other units are commonly used in different fields. Let’s explore how watts and joules relate to other energy units:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Kilowatt-Hours (kWh):</strong> Kilowatt-hours are commonly used by electric utilities to bill customers. 1 kWh is equal to 3.6 million joules. This unit is more practical for measuring energy consumption over time in large systems, like home appliances or industrial machines.
      </li>
      <li>
        <strong>Calories (cal):</strong> In the field of food and nutrition, energy is often measured in calories. 1 calorie is equal to 4.184 joules. This relationship is important when considering the energy required for bodily functions or food energy content.
      </li>
      <li>
        <strong>British Thermal Units (BTUs):</strong> BTUs are another unit of energy commonly used in heating and air conditioning. 1 BTU is approximately equal to 1055 joules. This conversion is useful when evaluating the energy consumption of HVAC systems.
      </li>
      <li>
        <strong>Horsepower (HP):</strong> 1 horsepower is equal to 746 watts. Horsepower is often used in mechanical and automotive contexts to measure the power of engines and motors.
      </li>
    </ul>
    <p>
      Understanding these relationships is vital for comparing energy systems and conversions in various industries, from home energy management to automotive engineering.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Conclusion: Understanding Joules for Everyday Energy Management</h2>
    <p>
      Converting watts to joules provides an easy way to evaluate how much energy a device uses over time. Whether you are managing household energy consumption, optimizing your business’s energy usage, or evaluating the efficiency of appliances, understanding this conversion is a crucial skill.
    </p>
    <p>
      With the knowledge of how much energy appliances consume in joules, you can make more informed decisions that benefit both your wallet and the environment. Energy-efficient choices, when combined with accurate calculations, allow for greater control over energy usage, ultimately helping to reduce overall consumption and cost.
    </p>
  </div>
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Advanced Use Cases in Industrial Settings</h2>
    <p>
      In industrial and manufacturing environments, precise energy calculations are essential to ensure machines and systems are running efficiently and to optimize the consumption of electricity. Here are some examples where the watts-to-joules conversion plays an important role:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Heavy Machinery:</strong> In industries like construction or mining, large machines and equipment use significant amounts of power. Monitoring their energy consumption in joules helps predict operational costs and energy demands.
        <br />
        For example, a mining drill using 2000 watts for 5 minutes consumes:
        <br />
        <strong>Energy (J) = 2000W × 300s = 600,000J</strong>
      </li>
      <li>
        <strong>Data Centers:</strong> Data centers run hundreds or thousands of servers, which continuously consume power. By calculating energy consumption in joules, data center managers can track how much energy each server is using and make adjustments to reduce energy waste.
        <br />
        For instance, a server consuming 400W over 24 hours would use:
        <br />
        <strong>Energy (J) = 400W × 86,400s = 34,560,000J (34.56MJ)</strong>
      </li>
      <li>
        <strong>Production Lines:</strong> Manufacturing lines that use electric motors and robotic arms often operate in continuous cycles. Monitoring energy usage in joules helps optimize the machinery operation time and overall power consumption.
      </li>
    </ul>
    <p>
      Accurate energy tracking is critical in these environments to ensure profitability and minimize waste. 
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Storage and Joules</h2>
    <p>
      Energy storage technologies, like batteries and capacitors, often rely on joules to measure the total energy they can store and release. Understanding how much energy is stored in joules can help assess the performance and capacity of these devices.
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Lithium-Ion Batteries:</strong> These batteries are widely used in electronics, electric vehicles, and renewable energy systems. Their energy capacity is typically rated in watt-hours (Wh), but converting watt-hours to joules helps to understand the total energy storage in a more fundamental unit.
        <br />
        For example, a battery with a capacity of 500Wh stores:
        <br />
        <strong>Energy (J) = 500Wh × 3600 = 1,800,000J</strong>
      </li>
      <li>
        <strong>Supercapacitors:</strong> Supercapacitors can store large amounts of energy in a short amount of time. They are measured in joules when evaluating their energy storage capacity. Supercapacitors are commonly used in electric vehicles, backup power systems, and other high-performance applications.
      </li>
      <li>
        <strong>Pumped Hydro Storage:</strong> In pumped hydroelectric storage systems, water is moved between reservoirs at different elevations. The stored potential energy is often calculated in joules based on the height of the water column and the volume of water in the reservoir.
      </li>
    </ul>
    <p>
      Energy storage systems' efficiency is often measured by how much energy they can store and release without significant loss, and joules help quantify this ability.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Renewable Energy and Joules</h2>
    <p>
      The integration of renewable energy sources, such as solar, wind, and hydropower, relies on accurate energy measurements. By converting watts to joules, we can better understand how much energy is generated over a specific period and optimize the system's operation.
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Solar Energy:</strong> Solar panels convert sunlight into electricity, which is often measured in watts. However, the total energy produced over time is typically calculated in joules or kilojoules. For example, if a solar panel generates 250 watts of power for 6 hours, it produces:
        <br />
        <strong>Energy (J) = 250W × 21,600s = 5,400,000J</strong>
      </li>
      <li>
        <strong>Wind Turbines:</strong> Wind turbines harness kinetic energy from wind. The power output is calculated in watts, but the energy produced is expressed in joules or kilojoules. Wind energy calculations help optimize turbine placement and evaluate their efficiency.
        <br />
        For example, a wind turbine producing 1500W of power for 8 hours generates:
        <br />
        <strong>Energy (J) = 1500W × 28,800s = 43,200,000J</strong>
      </li>
      <li>
        <strong>Hydropower:</strong> Hydropower plants convert the potential energy of water stored at height into electricity. This energy is measured in joules, and it helps determine the amount of energy produced by the system based on water flow and height.
      </li>
    </ul>
    <p>
      Renewable energy sources are becoming a more integral part of global power generation, and joules are essential for understanding and optimizing their efficiency.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Consumption Monitoring and Joules</h2>
    <p>
      Many modern smart devices, home automation systems, and utilities provide detailed monitoring of energy consumption. Using joules to quantify energy consumption helps individuals and organizations optimize their energy usage, reduce costs, and minimize environmental impact.
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Smart Meters:</strong> Many energy providers now offer smart meters that track energy consumption in real time. These meters can display energy usage in kilowatt-hours, but the underlying measurement is often joules. By understanding energy use in joules, consumers can make better decisions about when to use energy-intensive appliances.
      </li>
      <li>
        <strong>Home Energy Management Systems:</strong> These systems allow users to monitor and control the energy usage of various devices in their homes. By tracking the total energy consumption in joules, these systems provide insights into how to reduce waste and make more efficient use of electricity.
      </li>
      <li>
        <strong>Industrial Energy Monitoring:</strong> Large manufacturing facilities often implement energy monitoring systems to track the energy use of machines and systems. By converting power readings from watts to joules, facilities can monitor energy consumption on a per-unit basis, optimizing their manufacturing process to save on costs.
      </li>
    </ul>
    <p>
      Monitoring energy consumption in joules allows for more granular insights into energy usage, providing opportunities to make smarter, more sustainable energy decisions.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Conclusion: The Role of Joules in Understanding Energy</h2>
    <p>
      Whether you are working with household appliances, renewable energy systems, or large industrial machinery, understanding how to convert watts to joules is crucial for optimizing energy usage and making informed decisions about energy consumption. Joules provide a fundamental unit of measurement for the total energy used or produced by a system, making them a vital tool in a wide range of applications.
    </p>
    <p>
      As we continue to innovate in energy efficiency and renewable energy, understanding energy in joules will remain essential for managing the systems that power our homes, industries, and even transportation. With the ability to track, monitor, and optimize energy consumption in real time, we can build a more sustainable and cost-efficient future.
    </p>
  </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToJoulesConverter;
