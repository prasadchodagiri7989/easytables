import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js
import { Input } from "@/components/ui/input"; // Assuming Input component is available
import { Label } from "@/components/ui/label"; // Assuming Label component is available
import { Button } from "@/components/ui/button"; // Assuming Button component is available

const AmpsToOhmsConverter: React.FC = () => {
  const [current, setCurrent] = useState<string>("3"); // Default current 3A
  const [voltage, setVoltage] = useState<string>("12"); // Default voltage 12V
  const [resistance, setResistance] = useState<string>("");

  const calculateResistance = () => {
    const numCurrent = parseFloat(current);
    const numVoltage = parseFloat(voltage);

    if (!isNaN(numCurrent) && !isNaN(numVoltage) && numCurrent !== 0) {
      setResistance((numVoltage / numCurrent).toFixed(2));
    } else if (numCurrent === 0 && numVoltage !==0 ){
      setResistance("Infinity (current cannot be zero for a non-zero voltage)");
    }
     else if (numCurrent === 0 && numVoltage ===0 ){
      setResistance("Undefined (voltage and current are zero)");
    }
    else {
      setResistance("Invalid input");
    }
  };

  React.useEffect(() => {
    calculateResistance();
  }, [current, voltage]);

  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4">
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
            <BreadcrumbPage>Amps to Ohms Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-white shadow-lg dark:bg-gray-800 dark:text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Amps to Ohms Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-gray-300">

          {/* Introduction */}
          <section>
            <p>
              The Amps to Ohms Converter is a useful tool for calculating electrical resistance using current (in amperes) and voltage (in volts).
              This tool is particularly valuable for electrical engineers, technicians, students, and hobbyists working with electronic circuits and electrical systems.
              Understanding how to convert amps (A) to ohms (Ω) can help in analyzing circuits, ensuring proper component selection, and diagnosing electrical issues.
            </p>
            <p className="mt-2">
              In this guide, we’ll explain the underlying concepts of electrical resistance, current, and voltage, describe how the conversion is performed using Ohm’s Law, and provide practical examples to reinforce your understanding.
            </p>
          </section>

          {/* What Are Amps and Ohms? */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">What Are Amps and Ohms?</h2>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">What is an Ampere (Amp)?</h3>
              <p>
                The ampere (A) is the unit of electric current in the International System of Units (SI). It represents the flow of electric charge per second through a conductor. One ampere equals one coulomb of charge passing through a point in a circuit per second.
              </p>
              <ul className="list-disc ml-6 my-2">
                <li><strong>Symbol:</strong> A</li>
                <li><strong>Definition:</strong> 1 A = 1 C/s (coulomb per second)</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">What is an Ohm?</h3>
              <p>
                The ohm (Ω) is the unit of electrical resistance. Resistance quantifies how much a material or component opposes the flow of electric current. High resistance reduces current flow, while low resistance allows more current to pass through.
              </p>
              <ul className="list-disc ml-6 my-2">
                <li><strong>Symbol:</strong> Ω</li>
                <li><strong>Definition:</strong> 1 Ω = 1 V/A (volt per ampere)</li>
              </ul>
            </div>
          </section>

          {/* The Relationship Between Amps and Ohms */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">The Relationship Between Amps and Ohms</h2>
            <p>
              Amps and ohms are related through Ohm’s Law, a fundamental principle in electrical engineering. Ohm’s Law states:
            </p>
            <p className="mt-2 text-center text-lg font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
              <code>V = I × R</code>
            </p>
            <p className="mt-2">Where:</p>
            <ul className="list-disc ml-6 my-2">
              <li><code>V</code> = Voltage (in volts)</li>
              <li><code>I</code> = Current (in amperes)</li>
              <li><code>R</code> = Resistance (in ohms)</li>
            </ul>
            <p className="mt-2">
              To find resistance (R), the formula is rearranged as:
            </p>
            <p className="mt-2 text-center text-lg font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
              <code>R = V / I</code>
            </p>
            <p className="mt-2">
              So, to convert amps to ohms, you also need to know the voltage across the component or circuit.
            </p>
          </section>

          {/* How to Convert Amps to Ohms */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">How to Convert Amps to Ohms</h2>
            <p><strong>Formula:</strong></p>
            <p className="mt-1 text-center text-lg font-mono bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
              <code>Resistance (Ω) = Voltage (V) / Current (A)</code>
            </p>
            <p className="mt-2">
              This means you cannot convert amps to ohms directly without knowing the voltage. The ampere and the ohm are not directly convertible—they’re related through voltage.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Example Calculation:</h3>
              <p>
                If the voltage across a resistor is 12 volts and the current flowing through it is 3 amps:
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-center mt-2">
                <p className="font-semibold">R = V / I</p>
                <p className="mt-1">R = 12V / 3A = 4 Ω</p>
              </div>
              <p className="mt-2">So, the resistance is 4 ohms.</p>
            </div>
          </section>

          {/* Using the Amps to Ohms Converter Tool */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Using the Amps to Ohms Converter Tool</h2>
            <div className="p-4 border rounded-md bg-slate-50 dark:bg-slate-700 space-y-4">
              <div>
                <Label htmlFor="voltage" className="block text-sm font-medium text-gray-800 dark:text-white">Voltage (V) in volts:</Label>
                <Input
                  type="number"
                  id="voltage"
                  value={voltage}
                  onChange={(e) => setVoltage(e.target.value)}
                  placeholder="Enter voltage in volts"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor="current" className="block text-sm font-medium text-gray-800 dark:text-white">Current (A) in amperes:</Label>
                <Input
                  type="number"
                  id="current"
                  value={current}
                  onChange={(e) => setCurrent(e.target.value)}
                  placeholder="Enter current in amperes"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
              <Button
                onClick={calculateResistance}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Convert to Ohms
              </Button>
              {resistance && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-700 border border-green-400 dark:border-green-600 rounded-md text-center">
                  <p className="text-lg font-semibold text-green-800 dark:text-green-100">
                    Calculated Resistance: <span className="font-bold">{resistance} Ω</span>
                  </p>
                </div>
              )}
            </div>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              This automatic calculation eliminates manual work and reduces errors, especially useful in technical or educational settings.
            </p>
          </section>

          {/* Practical Use Cases */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Practical Use Cases</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Circuit Design:</strong> When designing a circuit, you may know the voltage and the desired current. Calculating resistance helps in selecting the right resistor values.</li>
              <li><strong>Troubleshooting:</strong> If a device is drawing too much or too little current, measuring the voltage and current allows you to compute the resistance and diagnose issues.</li>
              <li><strong>Component Testing:</strong> Resistance calculations help in verifying whether components like resistors or coils are functioning within expected parameters.</li>
              <li><strong>Educational Projects:</strong> Converting amps to ohms reinforces concepts of electrical theory and helps students develop intuition about electrical relationships.</li>
            </ul>
          </section>

          {/* Real-World Examples */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Real-World Examples</h2>
            <div className="space-y-3">
              <div>
                <p><strong>Example 1:</strong> A motor operates with a supply of 24 volts and draws 6 amps. What is the resistance of the motor?</p>
                <p className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md mt-1"><code>R = 24V / 6A = 4 Ω</code></p>
                <p><em>Answer: 4 ohms</em></p>
              </div>
              <div>
                <p><strong>Example 2:</strong> A light bulb is powered with 120V and draws 0.5A. What is the resistance?</p>
                <p className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md mt-1"><code>R = 120V / 0.5A = 240 Ω</code></p>
                <p><em>Answer: 240 ohms</em></p>
              </div>
              <div>
                <p><strong>Example 3:</strong> You measure 0.2 amps of current when a 5V power source is applied to a sensor. Find the resistance.</p>
                <p className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md mt-1"><code>R = 5V / 0.2A = 25 Ω</code></p>
                <p><em>Answer: 25 ohms</em></p>
              </div>
            </div>
          </section>

          {/* Common Questions */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Common Questions</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Can you convert amps to ohms directly?</h3>
                <p>No. You must know the voltage to convert amps to ohms. Amps and ohms are related through voltage via Ohm’s Law.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">What if I don’t know the voltage?</h3>
                <p>Without the voltage, it’s impossible to calculate the resistance. You’ll need to measure or be given the voltage value.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">What tools can help measure voltage and current?</h3>
                <ul className="list-disc ml-6">
                  <li><strong>Multimeter:</strong> A handheld device that can measure voltage, current, and resistance.</li>
                  <li><strong>Clamp Meter:</strong> Useful for measuring current without breaking the circuit.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ohm’s Law Triangle */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Ohm’s Law Triangle</h2>
            <p>A helpful memory aid is the Ohm’s Law Triangle:</p>
            <div className="text-center my-2 font-mono bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
              <p className="text-lg">V</p>
              <p className="text-lg">-----</p>
              <p className="text-lg">I | R</p>
            </div>
            <p>Cover the value you want to find:</p>
            <ul className="list-disc ml-6">
              <li>If you cover R, the remaining formula is <code>V / I</code>.</li>
              <li>If you cover I, it's <code>V / R</code>.</li>
              <li>If you cover V, it's <code>I × R</code>.</li>
            </ul>
          </section>

          {/* Tips for Accurate Conversion */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Tips for Accurate Conversion</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Use consistent units:</strong> Always ensure voltage is in volts and current is in amperes.</li>
              <li><strong>Check for series or parallel circuits:</strong> In series circuits, resistances add; in parallel, reciprocals add. (This is more for circuit analysis than direct conversion).</li>
              <li><strong>Temperature effects:</strong> Resistance can change with temperature. Most resistors have temperature coefficients.</li>
              <li><strong>Avoid measurement errors:</strong> Ensure tight connections and zero out your multimeter before measuring.</li>
            </ul>
          </section>

          {/* Summary Table */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Summary Table (Examples)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-300 dark:border-gray-600">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Voltage (V)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Current (A)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Resistance (Ω)</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { v: "10 V", i: "2 A", r: "5 Ω" },
                    { v: "9 V", i: "3 A", r: "3 Ω" },
                    { v: "120 V", i: "1 A", r: "120 Ω" },
                    { v: "5 V", i: "0.5 A", r: "10 Ω" },
                    { v: "15 V", i: "5 A", r: "3 Ω" },
                  ].map((row, index) => (
                    <tr key={index} className='bg-white dark:bg-gray-800'>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{row.v}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{row.i}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why Understanding Resistance Matters */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Why Understanding Resistance Matters</h2>
            <p>
              Understanding how current, voltage, and resistance relate is fundamental to electrical work. Resistance determines:
            </p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              <li>How much heat a component will dissipate.</li>
              <li>Whether a circuit is safe and functions correctly.</li>
              <li>How long components last due to electrical stress.</li>
            </ul>
            <p className="mt-2">
              High resistance limits current and protects circuits. Low resistance allows higher currents, which might be necessary—or dangerous—depending on the situation.
            </p>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Conclusion</h2>
            <p>
              The Amps to Ohms Converter is a valuable tool for anyone dealing with electrical circuits. It simplifies calculations and helps ensure safe, efficient, and accurate designs. By using Ohm’s Law, this conversion provides insight into how components behave under electrical load.
            </p>
            <p className="mt-2">Always remember:</p>
            <ul className="list-disc ml-6 space-y-1 mt-1">
              <li>Amps measure current.</li>
              <li>Ohms measure resistance.</li>
              <li>Voltage connects the two through Ohm’s Law: <code>R = V / I</code></li>
            </ul>
            <p className="mt-2">
              Use this tool to streamline your work, verify your calculations, and deepen your understanding of electrical principles.
            </p>
          </section>

        </CardContent>
      </Card>
    </div>
  );
};


export default AmpsToOhmsConverter;