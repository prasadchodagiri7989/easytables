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

// Define the calculateMah function before using it
const calculateMah = (wh: number, voltage: number) => {
  return (wh * 1000) / voltage;
};

const WhToMahConverter: React.FC = () => {
  const [wh, setWh] = useState<number>(10); // Default 10 Wh
  const [voltage, setVoltage] = useState<number>(3.7); // Default 3.7V (common for Li-ion batteries)
  const [mah, setMah] = useState<number>(calculateMah(wh, voltage)); // Now this works as calculateMah is defined before use

  const handleConvert = () => {
    setMah(calculateMah(wh, voltage));
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
            <BreadcrumbPage>Wh to mAh Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Wh to mAh Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert energy in watt-hours (Wh) to electric charge in milliamp-hours (mAh) for battery capacities.</p>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Watt-hours (Wh):</label>
              <input
                type="number"
                value={wh}
                onChange={(e) => setWh(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Voltage (V):</label>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            {/* Result Display */}
            <div>
              <strong>Converted Capacity:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{mah.toFixed(2)} mAh</p>
            </div>

            {/* Formula */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>mAh = (Wh × 1000) ÷ V</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>mAh</strong>: Electric charge in milliamp-hours</li>
                <li><strong>Wh</strong>: Energy in watt-hours</li>
                <li><strong>V</strong>: Voltage in volts</li>
              </ul>
            </div>

            {/* Explanation */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                To convert watt-hours (Wh) to milliamp-hours (mAh), multiply the watt-hours by 1000 and divide by the voltage (V). This helps in understanding the battery's charge capacity in mAh based on the energy in Wh and voltage.
              </p>
            </div>

            {/* Practical Examples */}
            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  5 Wh battery at 3.7V → <strong>{calculateMah(5, 3.7).toFixed(2)} mAh</strong>
                </li>
                <li>
                  10 Wh battery at 7.4V → <strong>{calculateMah(10, 7.4).toFixed(2)} mAh</strong>
                </li>
                <li>
                  15 Wh battery at 11.1V → <strong>{calculateMah(15, 11.1).toFixed(2)} mAh</strong>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>

        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert energy in watt-hours (Wh) to electric charge in milliamp-hours (mAh) for battery capacities.
            This is particularly useful in electronics and electrical engineering, where understanding battery performance
            and matching power requirements with energy storage capacity is crucial. Knowing how to convert Wh to mAh helps
            when working with portable electronic devices, solar power systems, or even electric vehicles.
          </p>

          {/* Input Fields */}
          {/* ... [same as before] */}

          {/* Result Display */}
          {/* ... [same as before] */}

          {/* Formula */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
            <p>
              <strong>mAh = (Wh × 1000) ÷ V</strong><br />
              Where:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li><strong>mAh</strong>: Electric charge in milliamp-hours</li>
              <li><strong>Wh</strong>: Energy in watt-hours</li>
              <li><strong>V</strong>: Voltage in volts</li>
            </ul>
            <p className="mt-2">
              The factor of 1000 arises because 1 Ah (amp-hour) = 1000 mAh. So, converting watt-hours to amp-hours and
              then multiplying by 1000 gives the result in milliamp-hours.
            </p>
          </div>

          {/* Explanation */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
            <p>
              Watt-hours (Wh) and milliamp-hours (mAh) both measure energy but in slightly different contexts. Wh is
              typically used for larger energy storage devices, such as power banks, batteries for laptops, or home energy systems,
              while mAh is common in smaller devices like smartphones, tablets, or cameras. The formula lets us understand how
              much charge (in mAh) is available from a battery that holds a certain number of watt-hours at a specific voltage.
            </p>
            <p className="mt-2">
              This conversion is essential because most small batteries are rated in mAh, while power supplies or energy generation
              systems (like solar panels) are often described in terms of Wh. To calculate how long a device can run or how long a
              battery might last, both values must be compatible. For example, if you know a device uses 1000 mAh at 3.7 volts,
              that corresponds to 3.7 Wh of energy.
            </p>
          </div>

          {/* Practical Examples */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                5 Wh battery at 3.7V → <strong>{calculateMah(5, 3.7).toFixed(2)} mAh</strong>
              </li>
              <li>
                10 Wh battery at 7.4V → <strong>{calculateMah(10, 7.4).toFixed(2)} mAh</strong>
              </li>
              <li>
                15 Wh battery at 11.1V → <strong>{calculateMah(15, 11.1).toFixed(2)} mAh</strong>
              </li>
              <li>
                20 Wh battery at 5V (common USB power bank voltage) → <strong>{calculateMah(20, 5).toFixed(2)} mAh</strong>
              </li>
              <li>
                50 Wh battery at 12V (laptop battery) → <strong>{calculateMah(50, 12).toFixed(2)} mAh</strong>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Use Cases:</h2>
            <p>
              Converting Wh to mAh is essential in many real-world applications, especially when comparing batteries or estimating
              runtime:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>
                <strong>Smartphones:</strong> Most smartphone batteries are labeled in mAh. A phone battery rated at 3000 mAh at 3.7V
                is equivalent to 11.1 Wh.
              </li>
              <li>
                <strong>Power banks:</strong> Energy storage is often stated in Wh for regulatory or packaging reasons. Users can use
                this tool to convert it to mAh and estimate how many phone charges are possible.
              </li>
              <li>
                <strong>RC Drones:</strong> Drone battery specs often list both Wh and mAh. Understanding the relationship helps
                enthusiasts match battery capacities with motor requirements.
              </li>
              <li>
                <strong>Solar systems:</strong> Off-grid solar setups might store energy in Wh, while DC appliances draw current
                in mAh or Ah. Proper conversion is vital for system design.
              </li>
              <li>
                <strong>Laptops and tablets:</strong> Device power ratings may show watt-hours while battery replacements list
                capacity in mAh.
              </li>
            </ul>
          </div>

          {/* Notes and Tips */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Helpful Tips:</h2>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>
                Ensure the voltage used in the formula is accurate and matches the battery's nominal voltage.
              </li>
              <li>
                When comparing batteries, use either Wh or mAh consistently based on the voltage context.
              </li>
              <li>
                Remember that actual battery capacity may vary depending on temperature, age, and discharge rate.
              </li>
              <li>
                Most lithium-ion cells are rated at 3.6V to 3.7V; using the right value is critical for accurate conversions.
              </li>
            </ul>
          </div>

          {/* Summary */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Summary:</h2>
            <p>
              This Wh to mAh converter is a practical tool for engineers, hobbyists, and consumers who need to understand and
              compare battery capacities. With just two inputs—watt-hours and voltage—you can get a clear picture of the
              electric charge stored in a battery. This knowledge helps with buying decisions, designing electronics, or
              optimizing energy usage. Whether you’re working with a solar-powered IoT project, evaluating electric vehicle
              range, or planning a mobile charging solution, understanding Wh and mAh conversions is essential.
            </p>
          </div>
        </CardContent>

      </Card>
    </div>
  );
};

export default WhToMahConverter;
