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

const KWToKJConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);  // Power in kilowatts (kW)
  const [time, setTime] = useState<number>(0);    // Time in seconds (s)
  const [energy, setEnergy] = useState<number | string>('—');  // Output energy in kilojoules (kJ)

  const convertToKilojoules = (power: number, time: number) => {
    return power * time;  // E(kJ) = P(kW) * t(s)
  };

  const handleConvert = () => {
    const result = convertToKilojoules(power, time);
    setEnergy(result);
  };

  const examples = [
    { power: 3, time: 3, expectedResult: 9, description: '3 kW for 3 seconds' },
    { power: 5, time: 2, expectedResult: 10, description: '5 kW for 2 seconds' },
    { power: 10, time: 1, expectedResult: 10, description: '10 kW for 1 second' },
    { power: 0.5, time: 10, expectedResult: 5, description: '0.5 kW for 10 seconds' },
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
            <BreadcrumbPage>KW to KJ Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Kilowatts to Kilojoules Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert power in kilowatts (kW) and time in seconds (s) to energy in kilojoules (kJ).
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
              <label className="block font-medium mb-1">Time in Seconds (s):</label>
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{energy} kJ</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Power: {example.power} kW, Time: {example.time} seconds</p>
                    <p>Converted Energy: {example.expectedResult} kJ</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E = P × t</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E</strong>: Energy in kilojoules (kJ)</li>
                <li><strong>P</strong>: Power in kilowatts (kW)</li>
                <li><strong>t</strong>: Time in seconds (s)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatts (kW) to kilojoules (kJ) is based on the formula:
                <br />
                - Energy (kJ) is equal to the power (kW) multiplied by time (s).
                <br />
                - This helps us understand how much total energy is used over a specific time period.
              </p>
            </div>
          </div>
          <p className="mt-4">
  Converting kilowatts (kW) to kilojoules (kJ) is a practical and foundational calculation in both physics and energy systems. While kilowatts measure the rate of energy usage (power), kilojoules represent the total amount of energy consumed or transferred over time. This conversion is particularly helpful when analyzing how much work an electrical system or machine performs over a specific time duration.
</p>

<p className="mt-4">
  The formula for this conversion is simple yet powerful:
</p>

<ul className="list-disc list-inside ml-4">
  <li><strong>Energy (kJ) = Power (kW) × Time (s)</strong></li>
</ul>

<p className="mt-2">
  This tells us that if you run a 1 kW machine for 10 seconds, it will have consumed 10 kJ of energy. The power rating tells you the rate, while the duration gives you the total work done. This conversion is applicable in electrical, mechanical, and thermal domains.
</p>

<p className="mt-4">
  In physics, a joule is the standard SI unit of energy, and 1 kilojoule equals 1000 joules. So when you calculate energy in kilojoules, you're essentially measuring how much total work is being done or how much heat is transferred over time. This is especially relevant when analyzing engines, heaters, turbines, and batteries.
</p>

<p className="mt-4">
  In real-life applications, this conversion is often used to evaluate the performance of devices like microwaves, electric heaters, pumps, and even exercise equipment. For instance, if your treadmill has a power rating of 2 kW and you use it for 300 seconds (5 minutes), the energy expenditure is 600 kJ. This data can be used to calculate caloric output, energy costs, or equipment wear and tear.
</p>

<p className="mt-4">
  In engineering and mechanical design, kilojoules represent work output, efficiency, and energy transformation. A combustion engine may deliver a certain number of kilojoules of mechanical work per second. Engineers use this conversion to estimate heat transfer, mechanical movement, and thermodynamic behavior over time.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Why Convert from kW to kJ?</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>To calculate how much energy a device consumes in a specific time</li>
    <li>To measure energy input/output in thermodynamic systems</li>
    <li>To estimate caloric burn or metabolic energy in fitness applications</li>
    <li>To determine power-to-energy transformation in electronics and robotics</li>
    <li>To optimize systems that involve energy storage or energy transfer</li>
  </ul>
</div>

<p className="mt-4">
  Another common area where this conversion applies is **industrial automation and robotics**. In such settings, actuators and motors are rated by their power capacity (kW), but system designers are often more interested in how much energy (kJ) is used per cycle or per task. This helps in optimizing energy efficiency, battery life, and operational costs.
</p>

<p className="mt-4">
  In the renewable energy sector, particularly solar and wind systems, this conversion helps in estimating how much energy is stored or delivered to the grid over short periods. For example, a 1.5 kW wind turbine operating for 60 seconds delivers 90 kJ of energy. Accumulating such data helps forecast energy production and manage load balancing for local power networks.
</p>

<p className="mt-4">
  Educationally, this conversion introduces students to the fundamental relationship between power, energy, and time. Physics and engineering students often solve problems involving energy transfer, motion, heat, and electricity using this very formula. It builds the basis for understanding advanced concepts like enthalpy, kinetic energy, mechanical work, and electric charge.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Real-World Examples:</h2>
  <ul className="list-disc list-inside ml-4">
    <li>A 5 kW industrial heater running for 30 seconds delivers 150 kJ of thermal energy.</li>
    <li>A 0.3 kW microwave running for 45 seconds transfers 13.5 kJ to the food.</li>
    <li>An electric drill rated at 1.2 kW used for 10 seconds consumes 12 kJ.</li>
    <li>A high-powered laser consuming 2 kW of power for 2.5 seconds releases 5 kJ of energy.</li>
  </ul>
</div>

<p className="mt-4">
  This type of calculation is also helpful in energy efficiency studies. By measuring how much energy is delivered vs. how much is wasted, engineers and researchers can propose better insulation, improved component design, or smarter operating cycles. The output in kJ gives a clear, quantifiable value for evaluating performance over time.
</p>

<p className="mt-4">
  In sports science and human performance, metabolic output is often described in terms of kilojoules. While power (watts or kilowatts) measures real-time performance, the accumulated kilojoules over an event describe the total work performed by an athlete. This helps trainers, coaches, and physiologists track endurance, efficiency, and workload.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Additional Notes on Unit Context:</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>1 kW = 1000 J/s</strong>, so power already describes energy rate.</li>
    <li>Multiplying by time gives total energy in joules — dividing by 1000 gives kJ.</li>
    <li>Energy is always the product of power and time — regardless of units.</li>
    <li>Be careful to always use seconds (s) in this formula unless adjusted.</li>
  </ul>
</div>

<p className="mt-4">
  Expanding beyond the basics, the conversion of kilowatts to kilojoules has wide-reaching implications in technical disciplines, energy planning, and safety systems. As the global economy becomes increasingly electrified — from electric vehicles to smart factories — understanding how power transforms into measurable energy becomes essential not only for engineers, but also for decision-makers and technicians across industries.
</p>

<p className="mt-4">
  In power electronics and automation, calculating kilojoules is often necessary when evaluating the energy discharge or absorption of capacitors, batteries, and inductive components. For instance, a supercapacitor may store energy for a short burst of power. If it discharges at 10 kW for just 0.5 seconds, it delivers 5 kJ of energy. While that might seem small, such bursts are critical for restarting heavy motors, supporting grid voltage, or stabilizing short-term loads.
</p>

<p className="mt-4">
  In the field of **thermal systems**, kilojoules are used to measure the heat energy required to raise the temperature of fluids, metals, or gases. For example, when designing electric heaters or water heating systems, engineers must understand how many kilojoules are required to bring water from one temperature to another. The formula Q = mcΔT, where Q is heat in joules, pairs naturally with power (kW) over time to determine heating rate. A 2 kW heater will deliver 600 kJ in 5 minutes (300 seconds), allowing designers to calculate heating time and energy costs.
</p>

<p className="mt-4">
  In **aerospace and propulsion**, the ability to convert power into kilojoules over precise intervals plays a role in calculating fuel burn, thrust cycles, and propulsion efficiency. Whether in jet engines, electric aircraft motors, or reaction control systems, the energy imparted over seconds is a critical data point that defines vehicle range, control responsiveness, and safety margins. For instance, an electric drone that runs at 0.8 kW for 20 seconds expends 16 kJ — a useful data point when optimizing flight paths or conserving battery life.
</p>

<p className="mt-4">
  Similarly, in **robotics**, kilojoules are used to quantify work done by robotic arms, mobile platforms, or autonomous drones. Robots often operate in energy-constrained environments, and knowing how much energy is expended per operation or movement helps optimize task cycles, avoid overheating, and plan recharges. In warehouse automation, a robot that uses 2.5 kW over a 4-second lifting cycle consumes 10 kJ — data that can influence conveyor speeds, route planning, and task allocation.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Applications in Energy Storage & Safety:</h2>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li>In battery technology, kilojoules help calculate discharge profiles and usable capacity.</li>
    <li>In supercapacitors, they define short burst energy release in regenerative braking.</li>
    <li>In energy recovery systems, kJ determines how much motion energy is converted back to stored electricity.</li>
    <li>In circuit protection, kilojoules are used to calculate the energy absorbed by arrestors and surge suppressors.</li>
  </ul>
</div>

<p className="mt-4">
  In safety applications such as **arc flash hazard analysis**, kilojoules represent a key threshold. Engineers determine the energy released during a fault and compare it to safety standards to ensure that protective equipment is rated appropriately. For example, a 5 kW arc event lasting 0.2 seconds releases 1 kJ — enough to cause second-degree burns if not properly managed. Knowing how many kilojoules are involved helps determine protective clothing, fuse ratings, and fault clearance times.
</p>

<p className="mt-4">
  Another growing application is in **fitness technology and sports science**. Many high-end fitness devices now calculate total energy output in kilojoules. A stationary cyclist may maintain a power of 250 watts (0.25 kW) for 120 seconds — burning 30 kJ in that session. This data feeds into performance tracking, endurance modeling, and dietary recommendations. Athletes training for endurance events may use kJ-based goals, similar to how runners use kilometers or cyclists use cadence.
</p>

<p className="mt-4">
  In **data science and machine learning**, kilojoule conversions are becoming part of energy modeling. As models grow in complexity and scale — especially in AI and deep learning — understanding the energy footprint of computation becomes important. Datacenters calculate energy per task, sometimes down to the joule, to reduce carbon footprint. If a processor cluster runs at 1.2 kW for 5 seconds per computation cycle, it uses 6 kJ — a valuable metric when operating at scale.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Educational Impact:</h2>
  <p>
    This conversion also plays a key role in academic learning environments. Students in physics, electrical engineering, and mechanical design often solve problems involving electric motors, work-energy principles, and thermodynamics — all of which rely on conversions between power and energy. Introducing learners to this simple kW to kJ formula provides a foundational understanding of the relationship between energy, time, and mechanical/electrical work.
  </p>
</div>

<p className="mt-4">
  In schools, educators can use this converter during lab experiments involving electric circuits, electric heating coils, or motor-driven mechanisms. For example, students can measure the power consumed by a DC motor and the time it runs, then calculate total energy used in kilojoules — making theoretical knowledge tangible and measurable.
</p>

<p className="mt-4">
  From a **policy and sustainability** perspective, kilojoule-based analysis is increasingly used in energy labeling, particularly in consumer electronics and appliances. Energy rating labels may show annual consumption in kWh, but converting to kilojoules helps standardize comparisons globally where SI units are preferred. This also allows government agencies to enforce energy compliance and reduce total energy footprint across cities, campuses, or countries.
</p>

<p className="mt-4">
  Moreover, in **emerging markets** where microgrids and off-grid energy solutions are being deployed, every watt and kilojoule counts. Engineers use kW to kJ conversion to ensure solar inverters, battery packs, and load balancing systems are aligned with real usage patterns — especially in regions with limited resources or infrastructure. A microgrid inverter rated at 1 kW powering a classroom for 1800 seconds (30 minutes) delivers 1800 kJ, a meaningful figure for sizing energy needs.
</p>

<p className="mt-4">
  Lastly, this conversion serves as a bridge between multiple disciplines — electrical, mechanical, thermodynamic, and biological systems all rely on this fundamental formula to calculate energy exchange. Whether you’re modeling the energy needs of a spacecraft, optimizing a wearable health tracker, or designing a portable battery pack, converting kilowatts to kilojoules provides the numeric link between power and performance.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Summary:</h2>
  <p>
    Converting kilowatts to kilojoules is more than a unit transformation — it is a gateway to understanding how power affects systems over time. This calculation supports everything from sustainability planning to athlete training, from AI compute budgets to thermal energy audits. No matter your industry or field of study, using this converter allows you to better design, manage, and optimize power-consuming and power-producing systems. With just two simple values — power and time — you gain visibility into how energy is used, where it's wasted, and how it can be improved.
  </p>
</div>

<p className="mt-4">
  In conclusion, this kW to kJ conversion tool simplifies a powerful scientific relationship that’s used in almost every industry that involves energy use, heat transfer, mechanical work, or electric power. From controlling machine cycles in factories to analyzing the calorie burn on a stationary bike, the relationship between power and energy is fundamental — and this converter helps you make that connection instantly.
</p>

        </CardContent>
      </Card>
    </div>
  );
};

export default KWToKJConverter;
