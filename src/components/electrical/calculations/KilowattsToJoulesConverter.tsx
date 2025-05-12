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

const KilowattsToJoulesConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [energy, setEnergy] = useState<number | string>('—');

  const convertToJoules = (power: number, time: number) => {
    return (1000 * power * time).toFixed(5);
  };

  const handleConvert = () => {
    const result = convertToJoules(power, time);
    setEnergy(result);
  };

  const examples = [
    { power: 3, time: 3, expectedResult: 9000, description: '3 kW for 3 seconds' },
    { power: 5, time: 2, expectedResult: 10000, description: '5 kW for 2 seconds' },
    { power: 10, time: 4, expectedResult: 40000, description: '10 kW for 4 seconds' },
    { power: 2, time: 10, expectedResult: 20000, description: '2 kW for 10 seconds' },
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
            <BreadcrumbPage>Kilowatts to Joules Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Kilowatts to Joules Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert power in kilowatts (kW) and time in seconds (s) into energy in joules (J).
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power (Kilowatts):</label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time (Seconds):</label>
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{energy} J</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Power: {example.power} kW, Time: {example.time} s</p>
                    <p>Expected Energy: {example.expectedResult} J</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E = 1000 × kW × s</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E</strong>: Energy in joules (J)</li>
                <li><strong>kW</strong>: Power in kilowatts (kW)</li>
                <li><strong>s</strong>: Time in seconds</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion uses the formula: energy (J) = 1000 × power (kW) × time (s).
                <br />
                - Since 1 kilowatt equals 1000 watts, we multiply by 1000 to get the result in joules.
                <br />
                - This tells us how much energy is transferred over a duration at a given power level.
              </p>
            </div>
          </div>

          {/* Extra Content Section: About Kilowatts to Joules Conversion */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Conversion from Kilowatts (kW) to Joules (J)</h2>
  <p>
    Converting **Kilowatts (kW)** to **Joules (J)** helps in understanding how much energy is delivered over a period of time. Kilowatts represent the rate of energy usage or generation (power), while Joules measure the total amount of energy used.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">What is a Kilowatt?</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      1 kilowatt = 1,000 watts
    </li>
    <li>
      Kilowatts represent the rate of doing work or using energy, often seen in electrical appliances and machinery.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">What is a Joule?</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      1 joule is the energy transferred when one watt of power is applied for one second.
    </li>
    <li>
      It is the SI unit of energy, widely used in physics and engineering.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Conversion Formula</h3>
  <p>
    To convert kilowatts to joules, you also need to know the time in seconds:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Joules = Kilowatts × 1,000 × Time (in seconds)**
    </li>
    <li>
      For example, 2 kW used for 60 seconds = 2 × 1,000 × 60 = 120,000 J
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Why This Conversion Matters</h3>
  <p>
    This conversion is essential for energy budgeting, battery calculations, and analyzing energy efficiency in systems where both power and duration are key factors. It helps translate power ratings into actual energy consumption.
  </p>
</div>
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Conversion from Kilowatts (kW) to Joules (J)</h2>
  <p>
    Converting **Kilowatts (kW)** to **Joules (J)** helps in understanding how much energy is delivered over a period of time. Kilowatts represent the rate of energy usage or generation (power), while Joules measure the total amount of energy used.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">What is a Kilowatt?</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      1 kilowatt = 1,000 watts
    </li>
    <li>
      Kilowatts represent the rate of doing work or using energy, often seen in electrical appliances and machinery.
    </li>
    <li>
      Kilowatts are used to describe power output or power consumption.
    </li>
    <li>
      When an electrical device has a power rating in kilowatts, it indicates how much energy it uses or produces each second.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">What is a Joule?</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      1 joule is the energy transferred when one watt of power is applied for one second.
    </li>
    <li>
      It is the SI unit of energy, widely used in physics and engineering.
    </li>
    <li>
      In practical terms, one joule is the energy needed to lift a small apple one meter in the air.
    </li>
    <li>
      Joules are used to quantify energy expenditure, particularly in mechanical systems and thermal energy calculations.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Conversion Formula</h3>
  <p>
    To convert kilowatts to joules, you also need to know the time in seconds:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Joules = Kilowatts × 1,000 × Time (in seconds)**
    </li>
    <li>
      For example, 2 kW used for 60 seconds = 2 × 1,000 × 60 = 120,000 J
    </li>
    <li>
      If the power consumption is 1 kW and the time is 5 seconds, the energy consumed will be 1,000 × 1 × 5 = 5,000 J.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Why This Conversion Matters</h3>
  <p>
    This conversion is essential for energy budgeting, battery calculations, and analyzing energy efficiency in systems where both power and duration are key factors. It helps translate power ratings into actual energy consumption.
  </p>

  <p>
    For instance, when planning for energy usage in large machines or electrical appliances, understanding the total energy consumption over time helps with managing energy resources effectively. It also aids in selecting the right battery sizes for various devices based on their energy requirements.
  </p>

  <p>
    Additionally, understanding this conversion helps in:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Cost estimation**: By converting power into energy, you can estimate the electricity cost based on how long the device runs.
    </li>
    <li>
      **Efficiency analysis**: Helps in assessing the efficiency of energy consumption over time in systems like electric cars, power plants, and home appliances.
    </li>
    <li>
      **Safety protocols**: Certain devices may have limits on how much energy they can safely handle, and knowing the energy consumption over time can prevent overloads.
    </li>
    <li>
      **Power generation**: Energy generation systems can also benefit from this conversion to ensure they are producing enough energy for specific durations to meet demand.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Energy Consumption in Different Scenarios</h3>
  <p>
    To better understand the conversion from kilowatts to joules, let’s explore some real-world scenarios.
  </p>

  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Lighting**: A 100-watt bulb running for 10 hours will consume:
      <br />
      100 watts × 10,000 seconds (10 hours in seconds) = 1,000,000 joules of energy.
    </li>
    <li>
      **Electric Car Battery**: If an electric car uses 25 kW of power for 1 hour (3,600 seconds), the total energy consumed will be:
      <br />
      25 kW × 1,000 × 3,600 s = 90,000,000 joules (90 megajoules).
    </li>
    <li>
      **Home Heating**: A 2 kW electric heater running for 5 hours will consume:
      <br />
      2 kW × 1,000 × 18,000 s = 36,000,000 joules (36 megajoules).
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Practical Use Cases for Kilowatts to Joules Conversion</h3>
  <p>
    The kilowatts to joules conversion is critical in a wide variety of fields and applications:
  </p>

  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Electric Vehicle (EV) Industry**: EV manufacturers need to calculate energy consumption over a journey. Knowing the energy consumption in joules helps estimate the battery charge required for different travel distances.
    </li>
    <li>
      **Energy Audits**: Energy auditors calculate the energy used by different appliances in a household or industrial setup. This helps identify areas for energy savings and efficiency improvements.
    </li>
    <li>
      **Renewable Energy**: Solar and wind energy systems rely on kilowatts of power being generated over time. Converting to joules gives a clearer understanding of the actual energy produced, which is critical for grid integration.
    </li>
    <li>
      **Power Plant Operations**: Operators in power plants need to monitor how much energy their turbines are generating over specific intervals to ensure that production meets the grid's demand.
    </li>
    <li>
      **Electronics and Appliances**: Understanding the energy consumption of household appliances is important for consumers to make informed decisions about energy-efficient products.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Energy Efficiency and Cost Savings</h3>
  <p>
    By understanding how much energy is consumed in joules, you can make informed decisions about energy-efficient appliances and methods of energy conservation. Here are some ways you can save energy:
  </p>

  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Use of Energy-Efficient Appliances**: Appliances rated with lower kilowatts and high energy efficiency will result in less energy consumption, translating to fewer joules being used.
    </li>
    <li>
      **Smart Power Management**: By controlling the usage time of high-power devices, you can limit how many joules of energy are consumed over time, reducing overall energy costs.
    </li>
    <li>
      **Proper Insulation**: In heating systems, reducing energy waste through proper insulation can lower the joules consumed to heat a space, making the system more efficient.
    </li>
  </ul>
{/* Extra Content Section: Additional Insights on Kilowatts and Joules */} 
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Exploring the Relationship Between Kilowatts and Joules</h2>
  <p>
    While **kilowatts (kW)** and **joules (J)** are both units of energy, they represent energy in different forms. Understanding how they interact is vital in various fields, especially when working with electrical systems, energy efficiency, and power consumption analysis.
  </p>
  
  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">The Role of Power in Energy Conversion</h3>
  <p>
    Power is a critical factor when considering energy transfer or consumption. In our case, kilowatts represent the power being used or generated in a system. The higher the power in kilowatts, the more energy is transferred per unit of time.
  </p>
  <p>
    This relationship explains why systems that consume more power over time, such as heavy industrial machinery or electrical appliances, end up using large amounts of energy in joules. Power (in watts or kilowatts) measures the rate of energy transfer, while joules measure the accumulated energy after a certain time period.
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Power Consumption Examples: Residential and Industrial</h3>
  <p>
    Understanding the kilowatts to joules conversion is essential for real-world applications. Here’s a deeper dive into power consumption across various scenarios:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>
      **Residential Electricity Usage**: A typical household air conditioner consumes around 1.5 kW. If it runs for 5 hours, the energy consumption is calculated as 1.5 × 1,000 × 5 = 7,500 J (7.5 kJ). This shows how long-term usage at a relatively low power level still adds up to significant energy consumption.
    </li>
    <li>
      **Electric Vehicles**: In the case of an electric vehicle charging system, the power consumption can range between 3 kW to 7 kW. If the car charges for 4 hours, the total energy consumed is calculated as: 5 kW × 1,000 × 4 hours = 20,000 J (20 kJ).
    </li>
    <li>
      **Heavy Machinery**: Industrial machines like motors used in factories may use anywhere from 10 kW to 100 kW, depending on their size and type. For example, a 20 kW motor running for 3 hours uses 20 × 1,000 × 3 = 60,000 J (60 kJ), a substantial amount of energy.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">How Long-Lasting Power Impacts Energy Consumption</h3>
  <p>
    One of the main points to keep in mind when calculating energy consumption using kilowatts is the duration over which that power is used. The longer the duration of power consumption, the greater the total energy consumed in joules.
  </p>
  <p>
    For instance, a light bulb might only consume 0.1 kW, but if it’s used for 10 hours every day, it will consume a significant amount of energy over time. The formula used to calculate this is straightforward: kilowatts × 1,000 × time in seconds. This shows how, over time, even relatively low-power devices can contribute to considerable energy usage.
  </p>
  
  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Energy Efficiency and Power Calculations</h3>
  <p>
    In an era of energy efficiency, converting kilowatts to joules can help determine the effectiveness of different machines, appliances, and energy systems. Higher efficiency means that less energy is used to perform the same amount of work, which reduces the amount of energy consumed over time.
  </p>
  <p>
    For example, LED light bulbs use far less power compared to traditional incandescent bulbs. A typical 5W LED light bulb uses 0.005 kW, while an incandescent bulb might use 0.06 kW for the same brightness. Over time, this means a huge reduction in energy consumption (joules).
  </p>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Real-World Applications of Kilowatts to Joules Conversion</h3>
  <p>
    The conversion between kilowatts and joules is frequently applied in several real-world fields:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>
      **Energy Budgeting**: Companies and homeowners track energy consumption in joules (or kilojoules) to evaluate their energy usage and reduce costs. For example, calculating the total energy used in kilojoules helps in determining electricity costs based on the energy price rate (per kWh).
    </li>
    <li>
      **Battery Calculations**: When designing batteries for devices, it's essential to know how much energy will be consumed over a given time frame. Using kilowatts to joules conversion, manufacturers can accurately estimate the battery’s energy requirements and performance.
    </li>
    <li>
      **Power Grid Analysis**: The power grid uses complex systems to measure the energy required by various cities and industries. Converting kilowatts to joules helps energy managers to optimize the distribution of energy and predict future consumption patterns.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Additional Considerations When Converting Power to Energy</h3>
  <p>
    When converting power (in kilowatts) to energy (in joules), there are a few other factors worth considering:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>
      **Peak vs Average Power**: Power usage can fluctuate. Sometimes machines or devices consume more power during startup and less during regular operation. It is essential to measure average power consumption to ensure an accurate calculation of energy used.
    </li>
    <li>
      **Energy Loss**: In many systems, not all of the power input is converted into usable energy. For instance, an electric motor may waste a portion of the input power as heat. This inefficiency needs to be accounted for in accurate energy assessments.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200" />

  <h3 className="font-semibold text-base mt-4 mb-2">Conclusion: Why Kilowatts to Joules Conversion Matters</h3>
  <p>
    Whether you're calculating power consumption for a home appliance, assessing the energy efficiency of an industrial machine, or determining the energy required by a device, converting kilowatts to joules is a fundamental calculation. This conversion helps translate power into a tangible measurement of energy, providing insights into how much energy is being used over time.
  </p>
  <p>
    Understanding these conversions also empowers better decision-making when it comes to energy efficiency, cost reduction, and optimal system design. With this knowledge, businesses and individuals can make informed choices about their energy usage, reduce costs, and contribute to sustainability efforts.
  </p>
</div>


</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default KilowattsToJoulesConverter;
