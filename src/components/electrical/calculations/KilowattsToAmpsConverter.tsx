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

const KilowattsToAmpsConverter: React.FC = () => {
  const [power, setPower] = useState<number>(0);
  const [voltage, setVoltage] = useState<number>(0);
  const [powerFactor, setPowerFactor] = useState<number>(1);
  const [current, setCurrent] = useState<number | string>('—');
  const [phaseType, setPhaseType] = useState<'DC' | 'AC Single Phase' | 'AC Three Phase'>('DC');

  const convertToAmpsDC = (power: number, voltage: number) => voltage === 0 ? "Voltage cannot be zero" : (1000 * power / voltage).toFixed(3);
  const convertToAmpsACSinglePhase = (power: number, voltage: number, powerFactor: number) => (voltage === 0 || powerFactor === 0) ? "Invalid input" : (1000 * power / (powerFactor * voltage)).toFixed(3);
  const convertToAmpsACThreePhase = (power: number, voltage: number, powerFactor: number) => (voltage === 0 || powerFactor === 0) ? "Invalid input" : (1000 * power / (Math.sqrt(3) * powerFactor * voltage)).toFixed(3);

  const handleConvert = () => {
    let result: string | number = 0;
    if (phaseType === 'DC') {
      result = convertToAmpsDC(power, voltage);
    } else if (phaseType === 'AC Single Phase') {
      result = convertToAmpsACSinglePhase(power, voltage, powerFactor);
    } else {
      result = convertToAmpsACThreePhase(power, voltage, powerFactor);
    }
    setCurrent(result);
  };

  const examples = [
    { power: 0.33, voltage: 110, powerFactor: 1, expectedResult: 3, description: 'DC Example: 0.33 kW, 110 V', phaseType: 'DC' },
    { power: 0.33, voltage: 110, powerFactor: 0.8, expectedResult: 3.75, description: 'AC Single Phase Example: 0.33 kW, 110 V, PF 0.8', phaseType: 'AC Single Phase' },
    { power: 0.33, voltage: 110, powerFactor: 0.8, expectedResult: 2.165, description: 'AC Three Phase Example: 0.33 kW, 110 V, PF 0.8', phaseType: 'AC Three Phase' }
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
            <BreadcrumbPage>Kilowatts to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Kilowatts to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert power in kilowatts (kW) to current in amps (A) by selecting the phase type and entering voltage and power factor if needed.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Power (kW):</label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
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

            <div>
              <label className="block font-medium mb-1">Phase Type:</label>
              <select
                value={phaseType}
                onChange={(e) => setPhaseType(e.target.value as any)}
                className="w-full border px-3 py-2 rounded dark:text-black"
              >
                <option value="DC">DC</option>
                <option value="AC Single Phase">AC Single Phase</option>
                <option value="AC Three Phase">AC Three Phase</option>
              </select>
            </div>

            {phaseType !== 'DC' && (
              <div>
                <label className="block font-medium mb-1">Power Factor:</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={powerFactor}
                  onChange={(e) => setPowerFactor(Number(e.target.value))}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            )}

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{current} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((ex, i) => (
                  <li key={i}>
                    <p><strong>{ex.description}</strong></p>
                    <p>Power: {ex.power} kW, Voltage: {ex.voltage} V, PF: {ex.powerFactor ?? 'N/A'}</p>
                    <p>Expected Current: {ex.expectedResult} A</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formulas:</h2>
              <p>
                <strong>DC:</strong> I = 1000 × kW / V<br />
                <strong>AC Single Phase:</strong> I = 1000 × kW / (PF × V)<br />
                <strong>AC Three Phase:</strong> I = 1000 × kW / (√3 × PF × V)
              </p>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><strong>I</strong>: Current in amps</li>
                <li><strong>kW</strong>: Power in kilowatts</li>
                <li><strong>V</strong>: Voltage in volts</li>
                <li><strong>PF</strong>: Power factor</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from kilowatts to amps depends on whether the current is DC or AC and, in the case of AC, whether it’s single-phase or three-phase.
                The formulas account for the differences in how power is delivered in each case.
              </p>
            </div>
          </div>
          {/* Extra Content Section: About Kilowatts to Amps Conversion */}
          <div>
            <h2 className="font-semibold text-base mt-6 mb-2">Understanding the Conversion from Kilowatts (kW) to Amps (A)</h2>
            <p>
              The conversion from **Kilowatts (kW)** to **Amperes (A)** is a crucial calculation in electrical systems. Kilowatts represent the power consumed or produced by a device, while amperes (or amps) measure the electric current. Knowing how to convert between these two helps in sizing electrical components like wires, circuit breakers, and transformers.
            </p>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">What is a Kilowatt (kW)?</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Kilowatt (kW)** is a unit of power equal to 1,000 watts. It is widely used to express the output power of engines, electrical devices, and heating systems.
              </li>
              <li>
                **Formula**: 1 kW = 1,000 Watts = Voltage (V) × Current (A) × Power Factor (pf)
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">What is an Ampere (A)?</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Ampere (A)**, or amp, is the unit of electric current in the International System of Units (SI). It represents the amount of electric charge passing a point in a circuit per second.
              </li>
              <li>
                1 Amp = 1 Coulomb per second.
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">Conversion Formula</h3>
            <p>
              To convert kilowatts to amps, the formula varies depending on the type of electrical system:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                **Single-phase AC**: Amps = (kW × 1000) / (Voltage × Power Factor)
              </li>
              <li>
                **Three-phase AC**: Amps = (kW × 1000) / (√3 × Voltage × Power Factor)
              </li>
              <li>
                **DC**: Amps = (kW × 1000) / Voltage
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">Power Factor Consideration</h3>
            <p>
              In AC circuits, the **power factor (pf)** plays an important role in the conversion. It accounts for the phase difference between voltage and current. If not specified, a typical default value of 0.8 is often used for general calculations.
            </p>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">Example Calculations</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                **Example 1** (Single-phase): Convert 5 kW at 230V with pf = 0.9  
                <br />
                Amps = (5 × 1000) / (230 × 0.9) ≈ 24.15 A
              </li>
              <li>
                **Example 2** (Three-phase): Convert 10 kW at 400V with pf = 0.8  
                <br />
                Amps = (10 × 1000) / (√3 × 400 × 0.8) ≈ 18.04 A
              </li>
              <li>
                **Example 3** (DC): Convert 2 kW at 120V  
                <br />
                Amps = (2 × 1000) / 120 ≈ 16.67 A
              </li>
            </ul>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">Why This Conversion Matters</h3>
            <p>
              Accurate conversion from kW to Amps helps in selecting the correct wire size, circuit breaker rating, and ensuring system safety. It’s also useful for load balancing in power distribution and for estimating electricity usage based on appliance ratings.
            </p>

            <hr className="my-4 border-t-2 border-gray-200" />

            <h3 className="font-semibold text-base mt-4 mb-2">Conclusion</h3>
            <p>
              Converting kilowatts to amperes bridges the gap between understanding how much power a system uses and how much current it draws. By applying the appropriate formula based on your system type (AC or DC), voltage, and power factor, you can ensure efficient and safe operation of electrical installations.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default KilowattsToAmpsConverter;
