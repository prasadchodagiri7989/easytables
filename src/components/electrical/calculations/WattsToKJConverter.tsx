import React, { useState } from "react";
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

const WattsToKJConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(10); // Default 10 Watts
  const [time, setTime] = useState<number>(1); // Default time 1 second
  const [energyInKJ, setEnergyInKJ] = useState<number>(0); // Result variable for energy

  const calculateKJ = (watts: number, time: number) => {
    return (watts * time) / 1000; // 1 watt = 1 joule/second, so for time in seconds, we divide by 1000 to get kJ
  };

  const handleConvert = () => {
    const result = calculateKJ(watts, time);
    setEnergyInKJ(result);
  };

  const examples = [
    { watts: 10, time: 5, expectedResult: 0.05, description: '10 W for 5 seconds' },
    { watts: 100, time: 20, expectedResult: 2, description: '100 W for 20 seconds' },
    { watts: 500, time: 1, expectedResult: 0.5, description: '500 W for 1 second' },
    { watts: 1000, time: 10, expectedResult: 10, description: '1000 W for 10 seconds' }
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
            <BreadcrumbPage>Watts to Kilojoules Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to Kilojoules Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert electrical power in watts (W) to energy in kilojoules (kJ) based on time.</p>

          <div className="space-y-4">
            {/* Input for Watts */}
            <div>
              <label className="block font-medium mb-1">Power in Watts (W):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            {/* Input for Time */}
            <div>
              <label className="block font-medium mb-1">Time in Seconds (s):</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            {/* Convert Button */}
            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            {/* Display Results */}
            <div>
              <strong>Converted Energy:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{energyInKJ} kJ</p>
            </div>

            {/* Examples */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Power: {example.watts} W, Time: {example.time} seconds</p>
                    <p>Converted Energy: {example.expectedResult} kJ</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formula */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>kJ = (W × t) / 1000</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>kJ</strong>: Energy in kilojoules (kJ)</li>
                <li><strong>W</strong>: Power in watts (W)</li>
                <li><strong>t</strong>: Time in seconds (s)</li>
              </ul>
            </div>

            {/* Explanation */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from watts to kilojoules is based on the formula:
                <br />
                - Energy (kJ) is equal to the power in watts (W) multiplied by time (t) in seconds, divided by 1000 to convert from joules to kilojoules.
              </p>
            </div>
          </div>
          <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Real-World Applications of Energy Conversion</h2>
    <p>
      The conversion of electrical power to energy is a fundamental concept in many fields, including engineering, physics, and renewable energy systems. Understanding how to convert watts to kilojoules allows professionals to design and optimize systems where energy consumption and efficiency are key concerns.
    </p>
    <p>
      Here are some common real-world applications where this conversion is useful:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Energy Efficiency in Electrical Appliances:</strong> Knowing how much energy an appliance consumes helps in selecting more energy-efficient products. This is especially relevant when comparing appliances like refrigerators, air conditioners, and washing machines, which all have power ratings in watts.
      </li>
      <li>
        <strong>Renewable Energy Systems:</strong> In solar or wind energy systems, understanding how much energy is generated over time is critical. Converting the power output (in watts) to energy (in kilojoules) helps in evaluating system performance and ensuring that enough energy is generated to meet consumption needs.
      </li>
      <li>
        <strong>Electrical Heating and Cooling Systems:</strong> In systems where electrical power is used to generate heat or cool an area (e.g., electric heaters, air conditioners), converting watts to kilojoules helps in determining the total energy required to achieve the desired effect over a given period.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Consumption and Environmental Impact</h2>
    <p>
      Calculating energy consumption is vital not only for understanding electricity costs but also for evaluating the environmental impact of various devices and systems. Converting watts to kilojoules (kJ) enables individuals and businesses to make more informed decisions about their energy use.
    </p>
    <p>
      Here’s how energy consumption and its environmental impact can be related:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Carbon Footprint:</strong> The more energy a device consumes, the larger its carbon footprint. By calculating the total energy consumption (in kJ) over a period of time, you can estimate the environmental impact of the device’s use, particularly in regions where electricity is generated from fossil fuels.
      </li>
      <li>
        <strong>Energy Cost:</strong> Energy providers often charge based on kilowatt-hours (kWh). Converting watts to kJ helps in understanding how much energy is consumed by appliances and how much it will cost over time.
      </li>
      <li>
        <strong>Energy Efficiency Metrics:</strong> Energy-efficient products consume less energy to achieve the same output. By converting watts to kilojoules, manufacturers and consumers can compare the energy efficiency of different devices.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Understanding Kilojoules in Different Contexts</h2>
    <p>
      The kilojoule (kJ) is a unit of energy used across various fields, from nutrition to industrial processes. The ability to convert watts to kilojoules allows us to see the broader application of this energy unit in multiple contexts.
    </p>
    <p>
      Let’s look at a few examples where kilojoules are commonly used:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Nutrition:</strong> In the field of nutrition, food energy is often measured in kilojoules. The conversion from watts to kilojoules can help in estimating the energy consumption of activities like exercise or the metabolic energy expended by the body during physical activity.
      </li>
      <li>
        <strong>Industrial and Mechanical Processes:</strong> Kilojoules are used to measure the energy used in mechanical and industrial processes, such as heating or melting materials. Understanding energy consumption in these contexts is vital for cost analysis and efficiency optimization.
      </li>
      <li>
        <strong>Heat Transfer:</strong> In thermodynamics, kilojoules are used to quantify heat transfer in systems like refrigerators, air conditioners, and engines. Converting watts to kilojoules in these systems allows for proper energy balance calculations and efficiency improvements.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Factors Affecting Energy Conversion</h2>
    <p>
      There are several factors that can affect the conversion of watts to kilojoules and the efficiency of energy use. Understanding these factors can help optimize energy systems and improve overall performance.
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Power Factor:</strong> The power factor, which represents the efficiency of power usage, can influence how effectively watts are converted to usable energy. A low power factor means more energy is wasted in the form of heat, reducing overall efficiency.
      </li>
      <li>
        <strong>Energy Losses:</strong> In any system, there are always energy losses due to friction, heat dissipation, and other inefficiencies. These losses must be considered when calculating the total energy output of a system.
      </li>
      <li>
        <strong>Time Period:</strong> The time over which the energy is consumed plays a critical role in determining the total energy. Short bursts of high power usage can result in different energy consumption than continuous low power use, even if the total watts consumed are the same.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Common Misunderstandings</h2>
    <p>
      While converting watts to kilojoules is straightforward, there are some common misunderstandings to be aware of:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Confusing Power and Energy:</strong> Watts are a unit of power, while kilojoules are a unit of energy. Power represents the rate at which energy is used or produced, while energy measures the total amount consumed or produced over time. The key here is understanding that watts represent a rate, and kilojoules represent total energy.
      </li>
      <li>
        <strong>Neglecting the Time Factor:</strong> The time duration for which power is applied is critical in determining the total energy. Without taking time into account, it’s easy to misunderstand how much energy is actually consumed or generated.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Conclusion</h2>
    <p>
      The conversion of watts to kilojoules is a simple but essential calculation in many fields of science, engineering, and everyday life. By understanding how power is used over time, we can make better decisions about energy consumption, improve system efficiency, and reduce environmental impacts. Whether you're calculating energy use for a home appliance, a manufacturing process, or a renewable energy system, this conversion is an important tool in ensuring that energy is used effectively.
    </p>
  </div>
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Detailed Use Case: Home Appliance Energy Consumption</h2>
    <p>
      One common application of energy conversion is in evaluating the power consumption of household electrical appliances. Many devices, such as televisions, refrigerators, and microwaves, are rated in watts. By converting this to kilojoules, we can better understand how much energy these appliances consume over time.
    </p>
    <p>
      Let's take a closer look at how this works with an example:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Example 1:</strong> A refrigerator has a power rating of 150 watts. If it runs for 10 hours, the energy consumption in kilojoules can be calculated as follows:
        <br />
        <strong>Energy (kJ) = (Watts × Time) / 1000 = (150 W × 10,000 s) / 1000 = 1500 kJ</strong>
      </li>
      <li>
        <strong>Example 2:</strong> A microwave with a power rating of 1000 watts used for 5 minutes:
        <br />
        <strong>Energy (kJ) = (1000 W × 300 s) / 1000 = 300 kJ</strong>
      </li>
    </ul>
    <p>
      By knowing the energy consumption in kilojoules, you can estimate the electricity cost by considering the energy provider's rates (usually in kilowatt-hours, kWh). This helps you optimize energy usage and make more informed decisions about appliance usage.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Conservation Tips</h2>
    <p>
      Understanding how much energy appliances consume is a crucial step in reducing energy wastage and lowering electricity bills. Here are some practical energy conservation tips:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Use Energy-Efficient Appliances:</strong> Look for appliances with lower power ratings (measured in watts) and energy efficiency certifications. These appliances use less power and hence consume less energy over time.
      </li>
      <li>
        <strong>Unplug Devices When Not in Use:</strong> Even when switched off, many devices continue to draw power. Unplugging devices or using power strips can help reduce unnecessary power consumption.
      </li>
      <li>
        <strong>Use Timers or Smart Plugs:</strong> Set timers to limit the time appliances are on or use smart plugs that automatically turn off devices after a set period. This helps prevent appliances from running for longer than needed.
      </li>
      <li>
        <strong>Use Natural Light:</strong> Instead of using electric lights, take advantage of natural sunlight during the day. This reduces the overall energy consumption and helps lower electricity bills.
      </li>
    </ul>
    <p>
      By applying these energy-saving strategies, you can reduce your household’s energy consumption, lower your carbon footprint, and ultimately save money on your energy bills.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Relation Between Watts and Other Units of Power</h2>
    <p>
      While watts are commonly used to measure power, there are other units of power that might be used depending on the context. These include kilowatts (kW), horsepower (HP), and joules per second (J/s), all of which are related to watts.
    </p>
    <p>
      Here's how watts compare to other power units:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Kilowatts (kW):</strong> 1 kilowatt is equal to 1000 watts. This unit is commonly used to express the power consumption of larger electrical appliances and systems.
      </li>
      <li>
        <strong>Horsepower (HP):</strong> 1 horsepower is equivalent to approximately 745.7 watts. This unit is often used to express the power output of engines, motors, and other mechanical devices.
      </li>
      <li>
        <strong>Joules per Second (J/s):</strong> A watt is the same as 1 joule per second. This means that 1 watt is the rate at which energy is transferred or converted.
      </li>
    </ul>
    <p>
      Understanding these conversions helps in comparing the power of different systems and in calculating their energy consumption over time.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Common Conversion Mistakes and How to Avoid Them</h2>
    <p>
      While converting watts to kilojoules is simple, there are some common mistakes people make when performing these conversions. Here are some tips to avoid them:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Ignoring the Time Factor:</strong> One of the most common mistakes is forgetting to include the time when calculating energy. Watts measure power (the rate of energy consumption), while kilojoules measure total energy consumed over time. Always remember to multiply watts by time in seconds before dividing by 1000.
      </li>
      <li>
        <strong>Using Incorrect Units:</strong> Ensure that you are using the correct units for time (seconds) and power (watts). If you're using minutes, hours, or other units of time, make sure to convert them to seconds.
      </li>
      <li>
        <strong>Confusing Power and Energy:</strong> Watts represent power (rate of energy use), while kilojoules represent energy (total amount consumed). Keep in mind that converting watts to kilojoules requires the time factor to be included.
      </li>
    </ul>
    <p>
      By understanding these common mistakes and following the correct conversion steps, you can avoid errors and ensure that your calculations are accurate.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Impact of Different Power Sources on Energy Consumption</h2>
    <p>
      The source of power also plays a significant role in determining the efficiency and environmental impact of energy consumption. Different power sources have varying energy conversion efficiencies and environmental effects.
    </p>
    <p>
      Let’s take a look at some power sources:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Fossil Fuels:</strong> Power generated from fossil fuels (coal, oil, natural gas) is typically less efficient and has a larger carbon footprint compared to renewable energy sources. The more energy you consume from fossil fuels, the higher the environmental impact.
      </li>
      <li>
        <strong>Solar Power:</strong> Solar energy is a renewable source with low environmental impact. However, the efficiency of solar panels can vary depending on factors like location and weather conditions. By converting solar power into kilojoules, you can understand how much energy is being harvested and consumed.
      </li>
      <li>
        <strong>Wind Power:</strong> Wind power is another renewable energy source that is highly efficient in areas with consistent wind speeds. Wind turbines convert kinetic energy from the wind into electrical energy, which can be measured in kilojoules.
      </li>
      <li>
        <strong>Hydropower:</strong> Hydropower uses water flow to generate electricity. It is a highly efficient form of renewable energy, but it can have localized environmental impacts due to the construction of dams and alteration of water systems.
      </li>
    </ul>
    <p>
      Understanding the energy consumption from different power sources is key to making sustainable energy choices and reducing your overall carbon footprint.
    </p>
  </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToKJConverter;
