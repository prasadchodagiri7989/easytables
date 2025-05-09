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

const WattsToKVAConverter: React.FC = () => {
  const [watts, setWatts] = useState<number>(1000); // Default 1000 Watts
  const [voltage, setVoltage] = useState<number>(220); // Default voltage 220V
  const [powerFactor, setPowerFactor] = useState<number>(0.8); // Default power factor 0.8
  const [kVA, setKVA] = useState<number | string>('—'); // Converted kVA

  const calculateKVA = (watts: number, voltage: number, powerFactor: number) => {
    return (watts / (voltage * powerFactor)) / 1000; // Conversion to kVA
  };

  const handleConvert = () => {
    const result = calculateKVA(watts, voltage, powerFactor);
    setKVA(result);
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
              <Link to="/electrical-conversions">Electrical Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Watts to kVA Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Watts to kVA Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert power in watts (W) to apparent power in kilovolt-amperes (kVA) based on voltage and power factor.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power (Watts):</label>
              <input
                type="number"
                value={watts}
                onChange={(e) => setWatts(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Voltage (Volts):</label>
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Power Factor:</label>
              <input
                type="number"
                value={powerFactor}
                onChange={(e) => setPowerFactor(Number(e.target.value))}
                step="0.1"
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
              <strong>Converted Apparent Power:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{kVA} kVA</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>S = (P / (V × pf)) / 1000</strong><br />
                Where:
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>P</strong>: Power in watts (W)</li>
                <li><strong>V</strong>: Voltage in volts (V)</li>
                <li><strong>pf</strong>: Power factor (a value between 0 and 1)</li>
                <li><strong>S</strong>: Apparent power in kilovolt-amperes (kVA)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from watts (W) to kilovolt-amperes (kVA) is based on the formula:
                <br />
                - Apparent Power (kVA) is calculated by dividing the real power (W) by the product of voltage (V) and power factor (pf), and then dividing by 1000 to convert to kVA.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculations:</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  *Example 1:* A device using 1000W at 220V with a power factor of 0.8:
                  <p className="bg-gray-100 p-2 dark:text-black">S = (1000 / (220 × 0.8)) / 1000 = 5.68 kVA</p>
                </li>
                <li>
                  *Example 2:* A device using 1500W at 110V with a power factor of 0.9:
                  <p className="bg-gray-100 p-2 dark:text-black">S = (1500 / (110 × 0.9)) / 1000 = 15.15 kVA</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Real-World Applications of kVA</h2>
    <p>
      Understanding kVA is essential in many real-world electrical applications. The concept of apparent power (kVA) helps determine the load that electrical equipment will place on a circuit. Knowing the kVA helps in sizing transformers, generators, and electrical panels, ensuring that they can handle the necessary power without being overloaded.
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Generators:</strong> The kVA rating of a generator indicates how much apparent power it can supply. It's important to choose a generator with sufficient kVA to avoid overloading.
      </li>
      <li>
        <strong>Electrical Panels:</strong> Properly sized electrical panels are crucial for distributing power efficiently. Using the kVA rating helps in selecting the correct panel to handle the load.
      </li>
      <li>
        <strong>Transformers:</strong> A transformer’s kVA rating determines how much electrical power it can handle. This is important when designing electrical systems to ensure efficient operation without overloading the transformer.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Understanding Power Factor</h2>
    <p>
      The power factor is a measure of how effectively electrical power is being used. It is the ratio of real power (watts) to apparent power (kVA) and typically ranges from 0 to 1. A power factor close to 1 means that most of the power supplied is being effectively used. Lower power factors indicate that more power is wasted, which could lead to higher electricity costs and inefficient operation.
    </p>
    <p>
      Power factor correction can be achieved using capacitors or synchronous condensers, which help improve the efficiency of the electrical system. It's crucial in industrial settings where large motors and other inductive loads are common.
    </p>
    <div>
      <strong>Typical Power Factor Values:</strong>
      <ul className="list-disc list-inside ml-4 mt-1">
        <li>Inductive Loads (e.g., motors): 0.7 to 0.9</li>
        <li>Resistive Loads (e.g., heaters): 1.0</li>
        <li>Capacitive Loads: Can range from 0.9 to 1.0</li>
      </ul>
    </div>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">How kVA Affects Your Electrical Bills</h2>
    <p>
      While your electrical bill is generally based on the real power consumed (watts), understanding kVA can help you analyze the overall efficiency of your electrical system. In some regions, utility companies charge for both real power (measured in kilowatt-hours, kWh) and apparent power (measured in kVA). This means that a lower power factor can lead to higher utility charges, as more apparent power is required to supply the same amount of real power.
    </p>
    <p>
      To avoid paying for unnecessary apparent power, it's important to optimize your power factor by using efficient equipment and implementing power factor correction methods.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Considerations for Large Scale Applications</h2>
    <p>
      In large-scale industrial or commercial applications, the need for high kVA capacity becomes even more critical. These applications may include factories, shopping malls, or large office buildings. The kVA rating helps in selecting the right equipment to ensure that the electrical infrastructure can handle peak loads without causing disruptions or requiring constant maintenance.
    </p>
    <p>
      Below are a few tips for large-scale applications:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li><strong>Load Balancing:</strong> Ensure that the load is evenly distributed across different circuits to prevent overloading any single circuit.</li>
      <li><strong>Generator Sizing:</strong> Choose a generator with an appropriate kVA rating to handle peak demand while allowing for a margin of safety.</li>
      <li><strong>Voltage Stabilization:</strong> Maintaining stable voltage across all equipment is crucial to avoid damage to sensitive electronics and ensure efficient power delivery.</li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Frequently Asked Questions (FAQs)</h2>
    <div className="space-y-4">
      <div>
        <strong>1. What is the difference between watts and kVA?</strong>
        <p>
          Watts (W) measure real power, while kVA (kilovolt-amperes) measures apparent power. Apparent power takes into account both real power and reactive power, which doesn't perform useful work but still contributes to the total electrical load.
        </p>
      </div>

      <div>
        <strong>2. Why is power factor important in electrical systems?</strong>
        <p>
          A low power factor means that more apparent power is being used to supply the same real power. This can lead to higher energy costs and inefficiencies in the system. Power factor correction is used to improve the efficiency of power usage.
        </p>
      </div>

      <div>
        <strong>3. How can I calculate the kVA rating of a generator?</strong>
        <p>
          To calculate the kVA rating of a generator, you can use the formula: <strong>kVA = (Power (Watts) / (Voltage × Power Factor)) / 1000</strong>. This will help you determine if the generator is sized correctly for your needs.
        </p>
      </div>
    </div>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Additional Resources</h2>
    <p>
      For further information on electrical conversions and power calculations, check out the following resources:
    </p>
    <ul className="space-y-2 list-disc list-inside ml-4 mt-1">
      <li>
        <a href="https://www.electrical4u.com" target="_blank" rel="noopener noreferrer">
          Electrical 4U - Comprehensive Guide to Electrical Conversions
        </a>
      </li>
      <li>
        <a href="https://www.powermeterstore.com/blog/power-factor" target="_blank" rel="noopener noreferrer">
          Power Factor Correction Techniques
        </a>
      </li>
      <li>
        <a href="https://www.eia.gov" target="_blank" rel="noopener noreferrer">
          U.S. Energy Information Administration
        </a>
      </li>
    </ul>
  </div>
  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Impact of Temperature on Power Factor</h2>
    <p>
      Temperature can significantly affect the power factor in electrical systems. As temperature increases, the resistance in electrical components such as motors, transformers, and conductors increases, which can reduce the overall power factor. This is especially noticeable in systems that use large electrical machines like induction motors.
    </p>
    <p>
      In colder climates, equipment may experience lower resistance, improving power factor, while in warmer environments, the increase in resistance could lead to a lower power factor. For optimal efficiency, it's important to monitor the temperature and correct power factor regularly to ensure that systems are running efficiently.
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>Higher temperatures generally increase resistance, which can lower power factor.</li>
      <li>Power factor correction capacitors may become less effective in extremely hot environments.</li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">What to Consider When Selecting kVA for Your Electrical System</h2>
    <p>
      Selecting the correct kVA rating for your electrical system is crucial for ensuring safe and efficient operation. Here are some key factors to consider when choosing the right kVA for your system:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Load Type:</strong> The type of load (resistive, inductive, or capacitive) determines the kVA requirement. Inductive loads like motors typically require higher kVA ratings due to lower power factors.
      </li>
      <li>
        <strong>Safety Margin:</strong> Always choose a kVA rating that includes a safety margin to prevent overloading. A good practice is to size equipment for 20-30% more capacity than the maximum expected load.
      </li>
      <li>
        <strong>Peak Demand:</strong> Consider the peak demand of the system, including any temporary spikes in power use, to ensure the kVA rating is adequate.
      </li>
      <li>
        <strong>Future Expansion:</strong> When designing electrical systems, anticipate future load growth and plan for expansion in advance.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Calculating kVA for Motors</h2>
    <p>
      Calculating the kVA requirement for motors involves considering the motor’s power, voltage, and power factor. Motors are one of the most common types of inductive loads, and their power factor typically ranges from 0.7 to 0.9, depending on the motor type and operating conditions.
    </p>
    <p>
      The formula for calculating kVA for motors is the same as the general kVA calculation formula:
    </p>
    <pre className="bg-gray-100 p-3 rounded font-mono text-base dark:text-black">
      kVA = (Power (Watts) / (Voltage × Power Factor)) / 1000
    </pre>
    <p>
      Example: If you have a 5000W motor operating at 400V with a power factor of 0.85, the kVA would be:
    </p>
    <pre className="bg-gray-100 p-3 rounded font-mono text-base dark:text-black">
      kVA = (5000 / (400 × 0.85)) / 1000 = 14.71 kVA
    </pre>
    <p>
      Make sure to consider any starting currents that may temporarily increase the power required to start the motor, which can affect the kVA rating.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Common Mistakes When Converting Watts to kVA</h2>
    <p>
      Converting watts (W) to kVA might seem simple, but there are common mistakes that can lead to incorrect conversions or inefficient system designs. Some of these mistakes include:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        <strong>Neglecting the Power Factor:</strong> One of the most common errors is ignoring the power factor. Without factoring in the power factor, the kVA value will be inaccurate, which can lead to overestimating or underestimating the required equipment capacity.
      </li>
      <li>
        <strong>Assuming a Constant Power Factor:</strong> The power factor can vary depending on the equipment and operating conditions. Using a fixed value for power factor, such as 1.0, can cause errors in the calculation.
      </li>
      <li>
        <strong>Using Incorrect Voltage Values:</strong> Voltage is a crucial factor in the conversion. Make sure you use the correct voltage based on your system’s configuration. Using the wrong voltage can cause a significant error in the kVA calculation.
      </li>
      <li>
        <strong>Not Considering Load Variations:</strong> Electrical systems often experience load fluctuations. Failing to account for these variations can lead to undersized equipment that might not perform efficiently under peak loads.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Case Study: kVA in Industrial Applications</h2>
    <p>
      Let’s consider a manufacturing plant that uses several large induction motors to power various machines. The plant needs to determine the appropriate kVA capacity for their electrical system. Here’s how they can go about it:
    </p>
    <ul className="list-disc list-inside ml-4 mt-1">
      <li>
        First, the plant assesses the total power usage of all machines in watts. The total power consumption is found to be 100,000W.
      </li>
      <li>
        The voltage supply for the machines is 480V, and the power factor for the motors is 0.85.
      </li>
      <li>
        Using the kVA formula, the plant calculates the total kVA requirement:
        <pre className="bg-gray-100 p-3 rounded font-mono text-base dark:text-black">
          kVA = (100000 / (480 × 0.85)) / 1000 = 243.05 kVA
        </pre>
      </li>
      <li>
        The plant chooses a generator with a kVA rating of 300 kVA to accommodate the load, considering potential future expansion and safety margins.
      </li>
    </ul>
    <p>
      This case study highlights the importance of accurate kVA calculations in industrial settings to avoid overloading and ensure efficient power distribution across the system.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-base mt-6 mb-2">Final Thoughts</h2>
    <p>
      Converting watts to kVA is an essential skill for anyone involved in electrical design or maintenance. By understanding the relationship between watts, voltage, and power factor, you can ensure that your electrical systems are properly sized and operate efficiently. Always remember to account for the power factor and include a safety margin in your calculations to prevent system overloads and reduce unnecessary energy costs.
    </p>
    <p>
      Whether you're working with industrial machinery, residential systems, or renewable energy applications, understanding kVA will help you make more informed decisions about your electrical infrastructure. If you're unsure about any aspect of your electrical system, consider consulting with a professional to ensure you're making the right choices.
    </p>
  </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WattsToKVAConverter;
