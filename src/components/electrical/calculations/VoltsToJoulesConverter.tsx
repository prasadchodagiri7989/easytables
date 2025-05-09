import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const VoltsToJoulesConverter: React.FC = () => {
  const [volts, setVolts] = useState<number>(1); // Default voltage value
  const [current, setCurrent] = useState<number>(1); // Default current value
  const [time, setTime] = useState<number>(1); // Default time value (in seconds)
  const [energyJoules, setEnergyJoules] = useState<number>(1); // Default energy value

  const calculateEnergyJoules = (volts: number, current: number, time: number): number => {
    return volts * current * time; // Formula to convert volts, current, and time to energy in joules (J)
  };

  const handleConvert = () => {
    const result = calculateEnergyJoules(volts, current, time);
    setEnergyJoules(result);
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
            <BreadcrumbPage>Volts to Joules Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Volts to Joules Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert voltage (V), current (A), and time (s) to energy in joules (J).</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Voltage (V):</label>
              <input
                type="number"
                value={volts}
                onChange={(e) => setVolts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Current (A):</label>
              <input
                type="number"
                value={current}
                onChange={(e) => setCurrent(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Time (s):</label>
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
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{energyJoules} J</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>E(J) = V × I × t</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>E(J)</strong>: Energy in joules (J)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>I</strong>: Current in amperes (A)</li>
                <li><strong>t</strong>: Time in seconds (s)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from volts, current, and time to joules is based on the formula:
                <br />
                - Energy (E) is equal to voltage (V) multiplied by current (I) and time (t).
                <br />
                - This conversion helps us calculate the energy (in joules) consumed or stored in an electrical system over a given time.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Practical Example:</h2>
              <p>For a voltage of {volts}V, a current of {current}A, and a time of {time}s, the energy is:</p>
              <p className="bg-gray-100 p-2 dark:text-black">E(J) = {volts}V × {current}A × {time}s = {energyJoules} J</p>
            </div>
          </div>
          <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Real-World Applications:</h2>
    <p>The conversion of volts, current, and time to energy in joules is used in various real-world applications across different fields:</p>
    
    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>Electric Vehicles (EVs):</strong> Electric vehicle batteries store energy in joules. By knowing the voltage, current, and charging time, you can estimate how much energy has been stored in the battery. This helps determine the vehicle's driving range and battery efficiency.
      </li>
      
      <li>
        <strong>Renewable Energy Systems:</strong> In solar or wind power systems, energy is often measured in joules. By calculating the voltage and current over time, system operators can determine how much energy has been generated and monitor the system’s performance.
      </li>
      
      <li>
        <strong>Power Consumption in Appliances:</strong> Appliances like microwaves, air conditioners, and refrigerators use electrical energy. By measuring voltage and current, manufacturers can estimate how much energy is consumed, which helps in calculating electricity bills.
      </li>
      
      <li>
        <strong>Battery-Powered Devices:</strong> Devices that run on batteries (like smartphones, laptops, and flashlights) rely on this conversion to determine how much energy the battery provides. This is useful for estimating battery life and ensuring devices operate within their power limits.
      </li>
    </ul>
  </div>

  {/* Tips for Better Understanding */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Tips for Better Understanding:</h2>
    <p>Here are a few tips that can help you better understand the concept of energy conversion and how to apply it:</p>
    
    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>Visualizing Energy:</strong> If you're struggling to visualize the concept of energy in joules, think of it as the work done by electricity to move objects or generate heat. The higher the energy, the more work the system can perform.
      </li>
      
      <li>
        <strong>Relating to Everyday Appliances:</strong> Many common household appliances, like light bulbs, heaters, or kettles, use energy in joules. By calculating energy usage for a device, you can better understand its power consumption and cost.
      </li>
      
      <li>
        <strong>Consider the Efficiency Factor:</strong> Real-world systems are not 100% efficient. A significant portion of energy can be lost due to factors like heat dissipation or resistance in electrical components. Always consider efficiency when making energy calculations.
      </li>
      
      <li>
        <strong>Practice with Different Units:</strong> Joules is just one way of measuring energy. Don’t hesitate to practice converting between joules and other energy units like kilowatt-hours (kWh), which is commonly used in electrical billing.
      </li>
    </ul>
  </div>

  {/* FAQ Section */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions (FAQ):</h2>
    
    <div className="space-y-4">
      <div>
        <strong>1. What is the difference between joules and kilojoules (kJ)?</strong>
        <p>Joules (J) and kilojoules (kJ) are both units of energy. A kilojoule is simply 1,000 joules. For example, 1,000 joules is equal to 1 kilojoule.</p>
      </div>
      
      <div>
        <strong>2. How do I convert joules to other energy units?</strong>
        <p>To convert joules to other energy units, you can use the following conversions:
          <ul className="ml-4 list-disc list-inside">
            <li>1 Joule = 0.000278 kilowatt-hours (kWh)</li>
            <li>1 Joule = 9.478 × 10^-4 British Thermal Units (BTU)</li>
            <li>1 Joule = 0.239 Calories (cal)</li>
          </ul>
        </p>
      </div>
      
      <div>
        <strong>3. Why is energy measured in joules?</strong>
        <p>Energy is measured in joules because it is the SI (International System of Units) standard unit for energy. The joule represents the amount of energy required to move one coulomb of charge through an electric potential difference of one volt.</p>
      </div>
      
      <div>
        <strong>4. What is the importance of current (A) in energy calculation?</strong>
        <p>Current (measured in amperes, A) is crucial in energy calculations because it represents the flow of electric charge. When multiplied by voltage (V) and time (t), it helps determine how much energy (Joules) is being used or generated by the system.</p>
      </div>
      
      <div>
        <strong>5. How does time factor into the energy conversion?</strong>
        <p>Time (in seconds) plays an essential role in determining how much energy is consumed or stored. Longer durations at the same voltage and current mean more energy is used. Conversely, shorter time durations result in less energy being consumed or generated.</p>
      </div>
    </div>
  </div>

  {/* Energy Saving Tips */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Saving Tips:</h2>
    <p>By understanding how energy is calculated and consumed, you can make informed decisions about how to save energy in your daily life:</p>
    
    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>Use Energy-Efficient Appliances:</strong> Look for devices with high energy efficiency ratings, which consume less energy for the same output. This reduces both your energy consumption and utility bills.
      </li>
      
      <li>
        <strong>Turn Off Unused Devices:</strong> Many electronic devices consume energy even when not in use. Turning them off completely or using power strips to disconnect them can save significant energy.
      </li>
      
      <li>
        <strong>Optimize Heating and Cooling:</strong> HVAC systems can be major energy consumers. Optimizing their use by setting temperatures to comfortable but not excessive levels, using programmable thermostats, and ensuring proper insulation can reduce energy usage.
      </li>
      
      <li>
        <strong>Consider Renewable Energy:</strong> Installing solar panels or wind turbines can drastically reduce your reliance on grid power and contribute to a greener planet. These systems often generate energy in joules, so understanding energy conversion is crucial for managing the output.
      </li>
      
      <li>
        <strong>Reduce Standby Power Consumption:</strong> Many appliances draw power even when they are not in active use. This is called standby power. Unplugging appliances when they’re not in use can help reduce standby power consumption.
      </li>
    </ul>
  </div>
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Advanced Concepts in Energy Conversion:</h2>
    <p>While the basic formula for converting volts, current, and time to energy in joules is straightforward, there are additional concepts that can enhance your understanding of energy conversion, particularly in complex systems:</p>

    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>Power (W):</strong> Power is the rate at which energy is used or transferred. It is measured in watts (W) and can be calculated by multiplying the voltage (V) by the current (I):
        <br />
        <strong>P(W) = V × I</strong>
        <p>This is different from energy (E) because power refers to how much energy is used per unit of time (1 second). Energy, on the other hand, accumulates over a period of time.</p>
      </li>

      <li>
        <strong>Energy Stored in Capacitors:</strong> Capacitors store electrical energy, which is calculated using a different formula:
        <br />
        <strong>E(C) = ½ × C × V²</strong>
        <p>Where C is the capacitance in farads (F) and V is the voltage. This is important in circuits with capacitors, where energy is stored temporarily for later use.</p>
      </li>

      <li>
        <strong>Electric Motor Efficiency:</strong> When dealing with electric motors, the energy provided by the motor is often less than the input energy. This is due to losses like friction and heat. Motor efficiency can be calculated by comparing the mechanical energy output to the electrical energy input.
        <br />
        Efficiency = (Output Energy / Input Energy) × 100
      </li>

      <li>
        <strong>Energy Loss in Transmission:</strong> In power transmission lines, energy is lost due to resistance. This loss can be calculated using the formula:
        <br />
        <strong>Energy Loss = I² × R × t</strong>
        <p>Where I is the current, R is the resistance, and t is the time. Minimizing energy loss in long-distance electrical transmission is a key goal in improving the efficiency of power grids.</p>
      </li>
    </ul>
  </div>

  {/* Conversion Between Energy Units */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Conversion Between Energy Units:</h2>
    <p>While joules (J) are the SI unit for energy, energy can also be expressed in different units depending on the context. Here are some common conversions:</p>
    
    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>Joules to Kilowatt-hours (kWh):</strong> Kilowatt-hours are commonly used in electricity bills. To convert joules to kilowatt-hours, use the formula:
        <br />
        <strong>1 kWh = 3.6 × 10⁶ J</strong>
        <p>For example, if your device uses 1,800,000 joules of energy, this would be equivalent to 0.5 kWh.</p>
      </li>

      <li>
        <strong>Joules to Calories (cal):</strong> Calories are often used to measure food energy. To convert joules to calories, use the formula:
        <br />
        <strong>1 cal = 4.184 J</strong>
        <p>For example, 1 joule is equal to 0.239 calories.</p>
      </li>

      <li>
        <strong>Joules to British Thermal Units (BTU):</strong> BTU is a common unit of energy used in heating and cooling. To convert joules to BTU:
        <br />
        <strong>1 BTU = 1,055 J</strong>
        <p>This conversion is particularly useful in HVAC systems and for energy calculations in the heating and cooling industry.</p>
      </li>
    </ul>
  </div>

  {/* Example: Calculating Energy for a Large Appliance */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Example: Calculating Energy for a Large Appliance</h2>
    <p>Let's use the formula to calculate how much energy a large appliance consumes over a period of time. For instance, consider a 200-watt refrigerator that operates for 10 hours:</p>

    <p className="bg-gray-100 p-3 rounded dark:text-black">
      <strong>P(W) = V × I</strong><br />
      Assume the voltage is 120V, and the current is calculated by rearranging the power formula: <br />
      <strong>I(A) = P(W) / V(V) = 200W / 120V = 1.67A</strong>
    </p>

    <p>The energy consumption in joules over 10 hours can be calculated by:</p>

    <p className="bg-gray-100 p-3 rounded dark:text-black">
      <strong>E(J) = V × I × t</strong><br />
      E(J) = 120V × 1.67A × (10 hours × 3600 seconds) = 120 × 1.67 × 36,000 = 7,200,000 J
    </p>

    <p>This means the refrigerator uses 7.2 million joules of energy in 10 hours.</p>
  </div>

  {/* Energy Calculation in Electric Circuits */}
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Energy Calculation in Electric Circuits:</h2>
    <p>When working with electric circuits, understanding energy consumption is essential for designing efficient systems. Here’s how you can calculate energy in simple circuits:</p>

    <ul className="space-y-2 list-disc list-inside ml-4">
      <li>
        <strong>DC Circuit (Direct Current):</strong> In a DC circuit, energy can be calculated directly using the formula:
        <br />
        <strong>E(J) = V × I × t</strong>
        <p>This applies to simple battery-powered circuits, where you know the voltage, current, and time the circuit is active.</p>
      </li>

      <li>
        <strong>AC Circuit (Alternating Current):</strong> In AC circuits, energy calculations are more complex due to changing voltage and current over time. The energy in an AC circuit can be calculated by:
        <br />
        <strong>E(J) = V_rms × I_rms × t</strong>
        <p>Where <strong>V_rms</strong> and <strong>I_rms</strong> are the root mean square values of voltage and current, respectively.</p>
      </li>

      <li>
        <strong>Power Factor:</strong> In AC circuits, the power factor (pf) represents the efficiency of the energy use. Energy is calculated as:
        <br />
        <strong>E(J) = V_rms × I_rms × t × pf</strong>
        <p>Where pf is a value between 0 and 1 that indicates how much of the supplied power is actually being used effectively.</p>
      </li>
    </ul>
  </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoltsToJoulesConverter;
