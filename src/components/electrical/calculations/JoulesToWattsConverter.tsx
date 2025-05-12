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

const JoulesToWattsConverter: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [power, setPower] = useState<number | string>('—');

  const convertToWatts = (energy: number, time: number) => {
    if (time === 0) return "Time cannot be zero";
    return (energy / time).toFixed(5);
  };

  const handleConvert = () => {
    const result = convertToWatts(energy, time);
    setPower(result);
  };

  const examples = [
    { energy: 90, time: 3, expectedResult: 30, description: '90 joules with 3 seconds' },
    { energy: 150, time: 5, expectedResult: 30, description: '150 joules with 5 seconds' },
    { energy: 200, time: 4, expectedResult: 50, description: '200 joules with 4 seconds' },
    { energy: 120, time: 2, expectedResult: 60, description: '120 joules with 2 seconds' },
    { energy: 300, time: 6, expectedResult: 50, description: '300 joules with 6 seconds' },
    { energy: 500, time: 10, expectedResult: 50, description: '500 joules with 10 seconds' },
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
            <BreadcrumbPage>Joules to Watts Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Joules to Watts Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Calculate power (W) by dividing energy in joules by time in seconds.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Energy (Joules):</label>
              <input
                type="number"
                value={energy}
                onChange={(e) => setEnergy(Number(e.target.value))}
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{power} W</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Energy: {example.energy} J, Time: {example.time} s</p>
                    <p>Expected Power: {example.expectedResult} W</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>P = J / s</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>P</strong>: Power in watts</li>
                <li><strong>J</strong>: Energy in joules</li>
                <li><strong>s</strong>: Time in seconds</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                Power is the rate of energy transfer. In this case, it's calculated by dividing energy (in joules) by the time (in seconds).
                <br />
                - 1 watt equals 1 joule per second.
                <br />
                - This concept helps us understand how quickly energy is being used or delivered in a system.
              </p>
            </div>
          </div>
          {/* Extra Content Section: About Joules to Volts Conversion */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Conversion from Joules (J) to Volts (V)</h2>
  <p>
    The **Joule (J)** and **Volt (V)** are both fundamental units in physics, but they measure different quantities. Joules measure the amount of energy, while Volts measure the electric potential difference between two points. Converting between these two units is necessary when you're working with electrical systems, especially in energy storage and transfer.
  </p>
  
  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">What is a Joule (J)?</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Joule (J)**: A unit of energy in the SI system, representing the amount of energy transferred when applying a force of one newton over one meter.
    </li>
    <li>
      **Formula**: 1 J = 1 N·m (Newton meter). It is commonly used to quantify energy in mechanical, electrical, and thermal systems.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">What is a Volt (V)?</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Volt (V)**: A unit of electric potential difference, also known as electromotive force (EMF). It measures the potential energy per unit charge in an electric circuit.
    </li>
    <li>
      **Formula**: 1 V = 1 J/C (Joule per Coulomb), meaning that 1 volt is the potential difference that will move 1 coulomb of charge using 1 joule of energy.
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">Relationship Between Joules and Volts</h3>
  <p>
    To convert from **Joules (J)** to **Volts (V)**, we need to consider the charge (C) involved. Since **Volts** are related to energy per unit charge, the formula for the conversion between Joules and Volts is derived from the relationship:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Energy (J) = Voltage (V) × Charge (C)**
    </li>
    <li>
      To find the voltage, we rearrange the formula: **Voltage (V) = Energy (J) / Charge (C)**
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">Converting Joules to Volts</h3>
  <p>
    The conversion from Joules to Volts depends on the amount of electric charge involved in the system. For example, if 10 Joules of energy is used to move 5 Coulombs of charge, the voltage would be:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Volts = 10 J / 5 C = 2 V**
    </li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">Practical Examples of Joules to Volts Conversion</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Example 1**: If 20 Joules of energy are used to move 4 Coulombs of charge, the voltage is:
      <br />
      **Volts = 20 J / 4 C = 5 V**
    </li>
    <li>
      **Example 2**: For 50 Joules of energy and 10 Coulombs of charge, the voltage is:
      <br />
      **Volts = 50 J / 10 C = 5 V**
    </li>
    <li>
      **Example 3**: If 100 Joules of energy are used to move 25 Coulombs of charge, the voltage is:
      <br />
      **Volts = 100 J / 25 C = 4 V**
    </li>
  </ul>
  <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Power and Energy Conversion</h2>
  <p>
    Power and energy are two fundamental concepts in physics and electrical engineering. They are both related to the concept of work but differ in the way they describe the behavior of systems over time. While energy measures the capacity of a system to do work, power quantifies how fast that work is being done.
  </p>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">The Role of Energy (Joules) in Physical Systems</h3>
  <p>
    Energy is a scalar quantity that describes the ability of a system to do work. It is measured in Joules (J) in the International System of Units (SI). Joules represent the amount of energy transferred when a force of one newton acts over one meter of distance, or when one coulomb of charge is moved through an electric potential difference of one volt.
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li><strong>Kinetic Energy:</strong> The energy possessed by an object due to its motion, calculated by the formula <strong>KE = ½ mv²</strong>, where <strong>m</strong> is mass and <strong>v</strong> is velocity.</li>
    <li><strong>Potential Energy:</strong> The energy stored in a system due to its position, such as gravitational potential energy, calculated by <strong>PE = mgh</strong>, where <strong>m</strong> is mass, <strong>g</strong> is gravitational acceleration, and <strong>h</strong> is height.</li>
    <li><strong>Chemical Energy:</strong> Energy stored in chemical bonds, which can be released during chemical reactions (such as combustion).</li>
    <li><strong>Thermal Energy:</strong> The energy contained within a system due to its temperature, often associated with the motion of molecules and atoms.</li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">The Concept of Power (Watts)</h3>
  <p>
    Power is the rate at which energy is transferred or converted in a system. It is measured in watts (W) in the SI system, where 1 watt is defined as 1 joule of energy transferred per second. Power gives us insight into how quickly energy is being used or produced in a system, whether it's a mechanical device, an electrical circuit, or a thermodynamic process.
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li><strong>Mechanical Power:</strong> In mechanical systems, power can be calculated as the rate at which work is done: <strong>P = W / t</strong>, where <strong>W</strong> is work and <strong>t</strong> is time.</li>
    <li><strong>Electrical Power:</strong> In electrical systems, power is calculated as <strong>P = V × I</strong>, where <strong>V</strong> is voltage and <strong>I</strong> is current. Electrical power is often measured in watts when considering the energy consumption of devices like light bulbs, motors, and household appliances.</li>
    <li><strong>Thermal Power:</strong> In thermodynamics, power is the rate at which heat is transferred or converted in a system, typically measured in watts. This is important in processes like heating, cooling, and engines.</li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">How Joules and Watts Relate to Each Other</h3>
  <p>
    Joules and watts are connected by the relationship between energy and time. Power (in watts) measures how much energy (in joules) is transferred per unit of time (in seconds). This relationship can be expressed as:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li><strong>1 Watt = 1 Joule per second</strong></li>
    <li>If you have 100 joules of energy and use it in 10 seconds, the power consumed is <strong>P = 100 J / 10 s = 10 W</strong>.</li>
    <li>This means that the system is using 10 watts of power to transfer or convert energy at a rate of 10 joules per second.</li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">Understanding the Formula for Joules to Watts Conversion</h3>
  <p>
    The formula for converting joules to watts is based on the fact that power is energy divided by time. When calculating power in watts from energy in joules, you can use the following formula:
  </p>
  <p><strong>P = J / s</strong></p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li><strong>P:</strong> Power in watts</li>
    <li><strong>J:</strong> Energy in joules</li>
    <li><strong>s:</strong> Time in seconds</li>
  </ul>
  <p>
    The equation tells us how much power is required to transfer a given amount of energy over a specified period. For example, if you apply 50 joules of energy over 10 seconds, the resulting power would be 5 watts. This equation is essential for determining the power consumption of electrical appliances, motors, and even the performance of batteries in electronic devices.
  </p>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">Practical Use Cases of Joules to Watts Conversion</h3>
  <p>
    The conversion of joules to watts is widely used in various fields, particularly in energy consumption and electrical systems. Some practical examples include:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li><strong>Electrical Appliances:</strong> When calculating how much energy is consumed by electrical devices, we use the joules-to-watts conversion. For example, a microwave oven may consume 1000 joules of energy every second of operation, which corresponds to a power rating of 1000 watts.</li>
    <li><strong>Battery Life:</strong> For devices that run on batteries, understanding the conversion from joules to watts helps estimate battery life. A device that consumes 1000 joules of energy per hour would need a battery that can supply a continuous power of approximately 1000 watts per hour.</li>
    <li><strong>Heat Transfer Systems:</strong> In heating and cooling systems, understanding the rate of energy transfer is crucial. For instance, a space heater might have a power rating of 2000 watts, meaning it transfers 2000 joules of energy every second.</li>
    <li><strong>Motors and Machines:</strong> The power output of motors, engines, and turbines can be calculated using the joules-to-watts formula. This helps engineers design efficient machines and calculate energy losses in mechanical systems.</li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">Key Differences Between Power and Energy</h3>
  <p>
    Understanding the differences between power and energy is essential in many scientific and engineering fields. The following points highlight the key differences:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li><strong>Energy</strong> is a measure of the capacity to do work and is measured in joules. It represents how much work can be done or how much heat can be transferred.</li>
    <li><strong>Power</strong> is the rate at which energy is transferred or converted, and it is measured in watts. Power tells you how quickly energy is being used or produced over time.</li>
    <li>Energy is a scalar quantity, meaning it only has magnitude, whereas power is a rate and involves both magnitude and time.</li>
    <li>Energy can accumulate, while power is always a rate of energy usage or conversion over time.</li>
  </ul>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">Conclusion: The Importance of Energy and Power Calculations</h3>
  <p>
    Understanding the relationship between joules and watts is vital for optimizing energy consumption, designing efficient systems, and troubleshooting electrical and mechanical systems. Whether you're calculating the energy consumption of your home appliances, designing a battery-powered device, or analyzing the performance of an electrical circuit, the ability to convert between joules and watts provides essential insights into the operation of any system.
  </p>
  <p>
    By grasping the concepts of energy and power, and learning how to convert between them, you can make more informed decisions about how energy is produced, transferred, and consumed in your daily life and in industrial applications.
  </p>
</div>

  <hr className="my-4 border-t-2 border-gray-200"/>

  <h3 className="font-semibold text-base mt-4 mb-2">Conclusion</h3>
  <p>
    Converting from **Joules** to **Volts** is important in understanding the electric potential difference when dealing with energy transfer in electrical systems. The conversion depends on the charge in the system, as voltage is a measure of energy per unit charge. This relationship allows for easier design and analysis of electrical circuits, ensuring proper energy distribution and usage in a system.
  </p>
</div>

        </CardContent>
      </Card>
    </div>
  );
};

export default JoulesToWattsConverter;
