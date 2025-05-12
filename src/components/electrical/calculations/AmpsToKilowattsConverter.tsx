import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const AmpsToKilowattsGuide: React.FC = () => {
  const [amps, setAmps] = useState<number>(10);
  const [volts, setVolts] = useState<number>(230);
  const [powerFactor, setPowerFactor] = useState<number>(0.9);
  const [systemType, setSystemType] = useState<string>("single-phase");

  // Calculation functions
  const calculateDCKilowatts = (amps: number, volts: number) => (amps * volts) / 1000;
  const calculateACKilowatts = (amps: number, volts: number, pf: number) => (pf * amps * volts) / 1000;
  const calculateACThreePhaseKilowatts = (amps: number, volts: number, pf: number) => (Math.sqrt(3) * pf * amps * volts) / 1000;

  // Current calculation based on system type
  const currentKilowatts = () => {
    switch (systemType) {
      case "dc": return calculateDCKilowatts(amps, volts);
      case "single-phase": return calculateACKilowatts(amps, volts, powerFactor);
      case "three-phase": return calculateACThreePhaseKilowatts(amps, volts, powerFactor);
      default: return 0;
    }
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
              <Link to="/electrical-calculations">Electrical Calculations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Amps to Kilowatts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-white shadow-lg dark:bg-transparent dark:text-white">
        <CardHeader>
          <CardTitle>Amps to Kilowatts (A to kW) Conversion – The Complete Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          {/* Introduction */}
          <p>
            Electricity powers our modern world, and understanding how to measure and convert between different electrical units is essential—whether you're an electrician, an engineer, a student, or simply a curious learner. One of the most important conversions in electrical systems is the conversion of Amps (A) to Kilowatts (kW).
          </p>

          {/* Interactive Calculator */}
          <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold mb-4">Amps to kW Calculator</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Current (Amps)</label>
                <input
                  type="number"
                  value={amps}
                  onChange={(e) => setAmps(Number(e.target.value))}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block mb-2">Voltage (Volts)</label>
                <input
                  type="number"
                  value={volts}
                  onChange={(e) => setVolts(Number(e.target.value))}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block mb-2">System Type</label>
                <select
                  value={systemType}
                  onChange={(e) => setSystemType(e.target.value)}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                >
                  <option value="dc">DC</option>
                  <option value="single-phase">Single-Phase AC</option>
                  <option value="three-phase">Three-Phase AC</option>
                </select>
              </div>
              {systemType !== "dc" && (
                <div>
                  <label className="block mb-2">Power Factor (0.7-1.0)</label>
                  <input
                    type="number"
                    min="0.7"
                    max="1.0"
                    step="0.01"
                    value={powerFactor}
                    onChange={(e) => setPowerFactor(Number(e.target.value))}
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              )}
            </div>
            <div className="mt-4 p-4 bg-white rounded dark:bg-gray-700">
              <h4 className="font-semibold">Result:</h4>
              <p className="text-xl mt-2">
                {amps}A at {volts}V {systemType !== "dc" && `(PF: ${powerFactor})`} ={" "}
                <span className="font-bold">{currentKilowatts().toFixed(3)} kW</span>
              </p>
            </div>
          </div>

          {/* Explanation Sections */}
          <div>
            <h2 className="text-lg font-semibold mb-2">⚡ What is an Amp (A)?</h2>
            <p>
              An Ampere (A) is the unit of electric current. It measures the amount of electric charge passing a point in a circuit per unit time. For example, when you hear someone say "This appliance draws 10 amps," they're referring to how much current flows through the device.
            </p>
            <p className="mt-2">
              1 Amp = 1 Coulomb of charge per second.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">🔌 What is a Kilowatt (kW)?</h2>
            <p>
              A Kilowatt (kW) is a unit of power, and it represents how much energy is consumed or generated per second.
            </p>
            <p className="mt-2">
              1 kW = 1000 Watts<br />
              Power (Watts) = Voltage (Volts) × Current (Amps) × Power Factor (for AC systems)
            </p>
          </div>

          {/* Conversion Formulas */}
          <div>
            <h2 className="text-lg font-semibold mb-2">📐 Conversion Formulas</h2>
            <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800">
              <h3 className="font-semibold">✅ For DC (Direct Current):</h3>
              <code>kW = (A × V) ÷ 1000</code>
              <p className="mt-2">Example: If you have a 20A current at 240V DC:</p>
              <p>kW = (20 × 240) ÷ 1000 = 4.8 kW</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mt-4 dark:bg-gray-800">
              <h3 className="font-semibold">✅ For Single-Phase AC:</h3>
              <code>kW = (A × V × PF) ÷ 1000</code>
              <p className="mt-2">Example: If a device draws 10A at 230V with a power factor of 0.9:</p>
              <p>kW = (10 × 230 × 0.9) ÷ 1000 = 2.07 kW</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mt-4 dark:bg-gray-800">
              <h3 className="font-semibold">✅ For Three-Phase AC:</h3>
              <code>kW = (√3 × A × V × PF) ÷ 1000</code>
              <p className="mt-2">Example: Current = 50A, Voltage = 400V, Power Factor = 0.85</p>
              <p>kW = (1.732 × 50 × 400 × 0.85) ÷ 1000 ≈ 29.42 kW</p>
            </div>
          </div>

          {/* Power Factor Explanation */}
          <div>
            <h2 className="text-lg font-semibold mb-2">🧠 What is Power Factor?</h2>
            <p>
              Power Factor (PF) measures how effectively electricity is being used.
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>PF = 1 means all energy is used efficiently.</li>
              <li>PF {"<"} 1 means some energy is wasted.</li>
              <li>Inductive loads like motors, air conditioners, and industrial machines usually have PF {"<"} 1.</li>
              <li>If PF is not given, a safe assumption for residential and commercial use is 0.8 to 0.95.</li>
            </ul>
          </div>

          {/* Real-Life Examples */}
          <div>
            <h2 className="text-lg font-semibold mb-2">🔍 Real-Life Conversion Examples</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800">
                <h3 className="font-semibold">1. Small Water Pump (Single-Phase)</h3>
                <p>Current: 6A, Voltage: 230V, PF: 0.9</p>
                <p>kW = (6 × 230 × 0.9) ÷ 1000 = 1.24 kW</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800">
                <h3 className="font-semibold">2. Industrial Motor (Three-Phase)</h3>
                <p>Current: 75A, Voltage: 415V, PF: 0.85</p>
                <p>kW = (1.732 × 75 × 415 × 0.85) ÷ 1000 ≈ 45.8 kW</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800">
                <h3 className="font-semibold">3. Battery Load (DC)</h3>
                <p>Current: 100A, Voltage: 48V</p>
                <p>kW = (100 × 48) ÷ 1000 = 4.8 kW</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">❓ FAQs</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Q1: Can I convert Amps to kW without voltage?</h3>
                <p>A: No. Voltage is essential. Without it, conversion is impossible.</p>
              </div>
              <div>
                <h3 className="font-semibold">Q2: Can I use this formula for appliances at home?</h3>
                <p>A: Yes, especially for AC devices. Just remember to include power factor.</p>
              </div>
              <div>
                <h3 className="font-semibold">Q3: What's the difference between kW and kWh?</h3>
                <p>A: kW is power; kWh is energy over time. If a 2kW appliance runs for 3 hours: 2kW × 3h = 6 kWh</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">✅ Final Thoughts</h2>
            <p>
              Converting Amps to Kilowatts isn't just an academic exercise—it's a practical skill used in designing electrical systems, managing loads, saving energy, and ensuring safety. By understanding this conversion, you become more informed about how electricity is used and measured.
            </p>
          </div>
          <div className="space-y-6">
  <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🔚 Final Thoughts and Deep Dive</h2>
  <p>
    When working with electrical systems, understanding the relationship between different units like Amps (A), Voltage (V), and Kilowatts (kW) is crucial. In various industries, from residential to commercial and industrial applications, knowing how to accurately convert Amps to Kilowatts ensures optimal system performance, safety, and efficiency. This article provides not only the formulas and examples but also deep insights into the real-world application of these conversions.
  </p>

  <h3 className="text-lg font-semibold mb-2">🔧 The Importance of Accurate Conversions in Electrical Engineering</h3>
  <p>
    Electrical engineers and technicians regularly use the conversion from Amps to Kilowatts to size and select equipment like transformers, motors, and generators. This helps ensure that electrical systems are capable of delivering sufficient power without the risk of overheating, inefficiency, or failure. Accurate conversions also play a critical role in the design and maintenance of backup power systems, HVAC systems, and even data centers, where power usage must be precisely managed.
  </p>

  <h3 className="text-lg font-semibold mb-2">💡 Practical Applications in Residential Systems</h3>
  <p>
    For homeowners, knowing how to convert Amps to Kilowatts can help with understanding electrical consumption and costs. When buying appliances, the specifications often list power ratings in Watts or Kilowatts. However, the electrical current draw is usually provided in Amps. Converting between Amps and Kilowatts allows you to determine how much energy an appliance consumes, and this knowledge is critical when calculating electricity bills and ensuring that electrical systems are safely configured.
  </p>

  <h3 className="text-lg font-semibold mb-2">🏭 Industrial and Commercial Power Management</h3>
  <p>
    In industrial and commercial settings, the conversion from Amps to Kilowatts is essential for power management. These environments often utilize large machines and equipment that require high power ratings. Whether it's a large industrial motor or an air conditioning system, knowing the Kilowatt rating of a piece of equipment helps in choosing the right wiring, circuit breakers, and even backup power systems. This avoids overloading circuits and ensures that the electrical infrastructure is built to handle the power demands of heavy machinery.
  </p>

  <h3 className="text-lg font-semibold mb-2">🔌 Electrical Efficiency and Energy Savings</h3>
  <p>
    One of the key benefits of understanding the conversion between Amps and Kilowatts is its impact on energy efficiency. Electrical power systems are not 100% efficient, and the power factor (PF) plays a crucial role in determining how effectively the electricity is being used. A low power factor means more energy is wasted, leading to higher utility costs and greater wear on electrical components. By converting Amps to Kilowatts while considering the power factor, engineers can optimize energy usage, reduce waste, and improve the overall efficiency of electrical systems.
  </p>

  <h3 className="text-lg font-semibold mb-2">🔍 Understanding Power Factor and Its Role in Calculations</h3>
  <p>
    Power Factor (PF) is a measure of how effectively electrical power is being used. It is particularly important in AC circuits. In a perfect system, the PF would be 1, meaning all the energy supplied is being used efficiently. However, in real-world scenarios, especially with inductive loads such as motors, the PF is usually less than 1, indicating some energy is wasted. The PF value must be factored in when converting from Amps to Kilowatts for AC systems. For example, a device drawing 10 Amps at 230V with a PF of 0.9 would consume less power than the same device with a PF of 1.0, and the conversion would reflect this difference.
  </p>

  <h3 className="text-lg font-semibold mb-2">📊 Real-World Examples and Case Studies</h3>
  <p>
    Let’s examine a few more real-world examples where this conversion comes into play:
  </p>
  <ul className="list-disc pl-6">
    <li>
      <strong>Example 1 – Home Electric Heater</strong>: If a home electric heater runs at 20A and operates at 220V, with a PF of 1.0, the power consumption can be calculated using the formula for single-phase AC. This conversion helps ensure that the household circuit can handle the load and that the electricity bill reflects the energy consumed accurately.
    </li>
    <li>
      <strong>Example 2 – Commercial Air Conditioning</strong>: A commercial HVAC system might have a current rating of 50A at 415V with a PF of 0.85. This lower power factor means that more current is required to deliver the same amount of usable power. The conversion will help size the electrical infrastructure, such as circuit breakers and cabling, accordingly.
    </li>
    <li>
      <strong>Example 3 – Industrial Motor</strong>: A large industrial motor that requires 200A at 480V with a PF of 0.9 will demand significant power. The conversion from Amps to Kilowatts helps in choosing the right generator size and ensuring that the motor is not overloaded.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">⚡ The Role of Voltage in Conversion Calculations</h3>
  <p>
    Voltage (V) is a key factor in any electrical conversion, and understanding how it affects the relationship between Amps and Kilowatts is crucial. In a low-voltage system, the current (Amps) required to deliver a certain amount of power will be higher than in a high-voltage system. This is why high-voltage transmission lines are used to reduce current and minimize losses during long-distance power transmission. By adjusting the voltage in our formulas, we can calculate the required current for different systems, optimizing electrical infrastructure.
  </p>

  <h3 className="text-lg font-semibold mb-2">🧮 Scaling Up and Down: Impact of System Type</h3>
  <p>
    The system type—whether DC, single-phase AC, or three-phase AC—affects the way power is delivered and consumed. Each system requires different formulas for the Amps to Kilowatts conversion:
  </p>
  <ul className="list-disc pl-6">
    <li><strong>DC Systems</strong>: Direct current (DC) systems follow a straightforward formula since there’s no alternating current involved, and power is calculated directly from current and voltage.</li>
    <li><strong>Single-Phase AC</strong>: In single-phase AC systems, the power factor plays a crucial role in the conversion. Appliances and systems that run on single-phase AC need to account for the power factor in their efficiency calculations.</li>
    <li><strong>Three-Phase AC</strong>: Three-phase systems are more efficient for large industrial applications as they allow for the transmission of more power with less current. The inclusion of √3 in the formula reflects this increased efficiency compared to single-phase systems.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">🔌 Summary of Key Points</h3>
  <p>
    To summarize, Amps to Kilowatts conversion is more than just a simple calculation—it’s a critical process in electrical engineering, power management, and energy efficiency. From the residential home to large industrial plants, this conversion helps ensure that electrical systems are properly sized and operate safely and efficiently. By understanding the relationship between current, voltage, power factor, and system type, you can make informed decisions about energy consumption, electrical design, and safety. Whether you are an electrician, engineer, or simply a homeowner, mastering this conversion gives you a deeper understanding of how electricity works in the real world.
  </p>

  <h3 className="text-lg font-semibold mb-2">💭 Additional Considerations</h3>
  <p>
    Finally, while converting Amps to Kilowatts is a fundamental skill in electrical systems, there are a few additional considerations. Always ensure that your voltage and current measurements are accurate, as discrepancies in these values can lead to incorrect power calculations. Additionally, the power factor should be verified, especially in commercial and industrial settings, as it significantly affects the amount of usable power being consumed by the system.
  </p>

  <p>
    By regularly performing accurate conversions and understanding the relationship between electrical units, you not only improve the efficiency of your systems but also contribute to the sustainability of energy consumption.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">🔍 Detailed Understanding of Kilowatts and Amps</h2>
  <p>
    Understanding the relationship between Amps and Kilowatts is crucial for accurately estimating the power consumption in various systems. When working with electricity, it’s vital to know how to calculate power (in kW) from the current (in Amps) and voltage. Depending on the type of electrical system—AC or DC—the calculation can differ slightly.
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">💡 Why Does Voltage Matter in Conversion?</h2>
  <p>
    Voltage (V) plays a critical role in determining the power in an electrical system. The formula for converting Amps to Kilowatts is directly impacted by the voltage applied to the circuit. The higher the voltage, the more potential energy is available, resulting in higher power output for the same current (Amps).
  </p>

  <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800 mt-4">
    <h3 className="font-semibold">Key Takeaways on Voltage:</h3>
    <ul className="list-disc pl-5 mt-2">
      <li>The higher the voltage, the more energy can be transferred through the system.</li>
      <li>In DC circuits, power is calculated by multiplying current (Amps) by voltage (Volts), then dividing by 1000.</li>
      <li>In AC circuits, the formula becomes more complex, as it includes the power factor, which accounts for the efficiency of the system.</li>
    </ul>
  </div>

  <h2 className="text-lg font-semibold mt-6 mb-2">⚡ How Amps and Kilowatts are Related in DC Systems</h2>
  <p>
    In a DC system, the relationship between Amps and Kilowatts is straightforward. Since DC voltage is constant, the power is directly proportional to the current and voltage. You can use the formula:
  </p>

  <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800 mt-4">
    <h3 className="font-semibold">DC Power Formula:</h3>
    <code>kW = (A × V) ÷ 1000</code>
    <p className="mt-2">
      For example, if you have a system with 12V and 50A, the power would be:
      <br />
      kW = (50 × 12) ÷ 1000 = 0.6 kW.
    </p>
  </div>

  <h2 className="text-lg font-semibold mt-6 mb-2">🔌 Understanding Single-Phase AC Power</h2>
  <p>
    In Single-Phase AC systems, the power is calculated with a bit more complexity because of the involvement of the power factor (PF). The power factor (a number between 0 and 1) represents the efficiency of the system, accounting for the loss of energy due to factors like reactance in the system.
  </p>

  <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800 mt-4">
    <h3 className="font-semibold">Single-Phase AC Power Formula:</h3>
    <code>kW = (A × V × PF) ÷ 1000</code>
    <p className="mt-2">
      In this case, the formula includes the power factor, which can vary depending on the device. For example:
      <br />
      If the current is 10A, voltage is 230V, and the power factor is 0.9, the power is:
      <br />
      kW = (10 × 230 × 0.9) ÷ 1000 = 2.07 kW.
    </p>
  </div>

  <h2 className="text-lg font-semibold mt-6 mb-2">🔧 Real-Life Example of Single-Phase AC</h2>
  <p>
    Consider a home appliance, such as an air conditioner, running on single-phase AC. The current required is 8A, the voltage supplied is 230V, and the power factor is typically around 0.85. Using the formula for Single-Phase AC, you can calculate how much power the appliance will consume:
  </p>

  <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800 mt-4">
    <h3 className="font-semibold">Example Calculation:</h3>
    <p>Current = 8A, Voltage = 230V, Power Factor = 0.85</p>
    <code>kW = (8 × 230 × 0.85) ÷ 1000 = 1.95 kW</code>
  </div>

  <h2 className="text-lg font-semibold mt-6 mb-2">⚡ Understanding Three-Phase AC Power</h2>
  <p>
    Three-phase AC power systems are used for industrial and commercial purposes, where higher power loads are necessary. In these systems, the power is calculated using the formula that includes a factor of √3 (approximately 1.732), which accounts for the three phases of current.
  </p>

  <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800 mt-4">
    <h3 className="font-semibold">Three-Phase AC Power Formula:</h3>
    <code>kW = (√3 × A × V × PF) ÷ 1000</code>
    <p className="mt-2">
      For instance, in a three-phase system with 50A of current, 400V of voltage, and a power factor of 0.9, the calculation would be:
      <br />
      kW = (1.732 × 50 × 400 × 0.9) ÷ 1000 ≈ 31.06 kW.
    </p>
  </div>

  <h2 className="text-lg font-semibold mt-6 mb-2">⚡ Practical Application in Industrial Settings</h2>
  <p>
    In industrial settings, three-phase AC power systems are often used because they can deliver more power without the need for larger cables or more complex infrastructure. For example, a large motor in an industrial factory may use 100A of current, 415V of voltage, and a power factor of 0.85. By using the three-phase power formula, engineers can calculate the exact amount of power being consumed by the system.
  </p>

  <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800 mt-4">
    <h3 className="font-semibold">Example Calculation for Industrial Motor:</h3>
    <p>Current = 100A, Voltage = 415V, Power Factor = 0.85</p>
    <code>kW = (1.732 × 100 × 415 × 0.85) ÷ 1000 ≈ 60.3 kW</code>
  </div>

  <h2 className="text-lg font-semibold mt-6 mb-2">🔋 DC vs AC: When to Use Each?</h2>
  <p>
    One common question is whether to use AC or DC for a particular application. DC is typically used for low-voltage, short-distance power transmission, while AC is more suitable for long-distance transmission and higher power applications. Here are some key differences:
  </p>

  <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800 mt-4">
    <h3 className="font-semibold">Advantages of DC:</h3>
    <ul className="list-disc pl-5 mt-2">
      <li>DC is easier to store in batteries, making it ideal for portable electronics.</li>
      <li>DC circuits are simpler, and there are fewer energy losses over short distances.</li>
    </ul>
  </div>

  <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-800 mt-4">
    <h3 className="font-semibold">Advantages of AC:</h3>
    <ul className="list-disc pl-5 mt-2">
      <li>AC is more efficient for long-distance transmission because it can easily be stepped up or stepped down in voltage using transformers.</li>
      <li>Most power plants generate AC because it's easier to distribute and convert to different voltages.</li>
    </ul>
  </div>

  <h2 className="text-lg font-semibold mt-6 mb-2">💡 Conclusion: The Power of Knowledge in Electrical Systems</h2>
  <p>
    In conclusion, the conversion from Amps to Kilowatts is a fundamental calculation for anyone working with electrical systems. Whether you're designing circuits, measuring energy consumption, or troubleshooting electrical equipment, understanding how to accurately convert these units is essential.
  </p>
  <p>
    As seen in this guide, the type of system (DC, Single-Phase AC, or Three-Phase AC) significantly affects the power calculation. By using the formulas and real-world examples provided, you can confidently perform these calculations and apply them to various electrical systems. Understanding Amps, Kilowatts, and Power Factor will help you make more informed decisions and ensure safe, efficient energy use in both residential and industrial settings.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToKilowattsGuide;