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
        </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToKilowattsGuide;