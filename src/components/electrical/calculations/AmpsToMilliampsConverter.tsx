import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const AmpsToMilliampsConverter: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4">
      <Breadcrumb className="mb-6">
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
            <BreadcrumbPage>Amps to Milliamps Guide</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-white shadow-lg dark:bg-gray-900 dark:text-gray-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Amps to Milliamps (A to mA) Conversion: The Complete Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-base text-gray-700 leading-relaxed dark:text-gray-300">

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">⚡ What is an Ampere (A)?</h2>
          <p>
            An Ampere (or Amp) is the basic unit of electric current in the International System of Units (SI).
            It quantifies the flow of electric charge — specifically, one ampere equals one coulomb of charge
            passing through a point in a circuit in one second.
          </p>
          <p>
            In practical terms, if a wire is conducting a current of 1 ampere, it means 1 coulomb (or about
            6.242 × 10<sup>18</sup> electrons) is flowing past a point every second.
          </p>
          <p>Amperes are typically used for measuring larger currents — for example:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Household appliances: 5–15 A</li>
            <li>Car starters: 50–100 A</li>
            <li>Electric heaters: 10–30 A</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🔌 What is a Milliampere (mA)?</h2>
          <p>
            A Milliampere (mA) is a subunit of an ampere. It is one-thousandth of an ampere:
          </p>
          <div className="bg-gray-100 p-3 my-2 rounded-md dark:bg-gray-800 dark:text-gray-200">
            <code className="text-sm">1 A = 1000 mA</code>
          </div>
          <p>
            The milliampere is used to measure much smaller currents, especially in low-power or electronic devices, such as:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>LED lights</li>
            <li>Mobile phone components</li>
            <li>Circuit boards</li>
            <li>Sensors</li>
            <li>Medical devices</li>
          </ul>
          <p>
            In many applications, particularly in electronics, measuring in milliamps is more practical because
            devices operate at very small current levels.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🧮 The Simple Conversion Formula</h2>
          <p>
            Because a milliampere is one-thousandth of an ampere, the conversion is incredibly straightforward:
          </p>
          <div>
            <h3 className="text-lg font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">✅ To convert Amps to Milliamps:</h3>
            <div className="bg-gray-100 p-3 rounded-md dark:bg-gray-800 dark:text-gray-200">
              <code className="text-sm">mA = A × 1000</code>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">✅ To convert Milliamps to Amps:</h3>
            <div className="bg-gray-100 p-3 rounded-md dark:bg-gray-800 dark:text-gray-200">
              <code className="text-sm">A = mA ÷ 1000</code>
            </div>
          </div>
          <p className="mt-2">
            This formula applies to both DC (direct current) and AC (alternating current) circuits, as long as
            you're converting the magnitude of the current.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">📐 Examples of Amps to Milliamps Conversion</h2>
          <p>Let’s take a look at how this conversion works in real-world examples:</p>
          <div>
            <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">Example 1: Small Phone Charger</h4>
            <p>A charger outputs 0.7 A of current. How many milliamps is that?</p>
            <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
              <p><code className="text-sm">mA = 0.7 × 1000 = 700 mA</code></p>
            </div>
          </div>
          <div>
            <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">Example 2: Laptop Power Supply</h4>
            <p>A laptop charger provides 2.5 A. How many milliamps is this?</p>
            <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
              <p><code className="text-sm">mA = 2.5 × 1000 = 2500 mA</code></p>
            </div>
          </div>
          <div>
            <h4 className="text-md font-semibold mt-3 mb-1 text-gray-800 dark:text-gray-200">Example 3: USB Port Output</h4>
            <p>A USB port supplies 500 mA. What is this in amps?</p>
            <div className="bg-gray-200 p-3 rounded-md mt-1 dark:bg-gray-700 dark:text-gray-200">
              <p><code className="text-sm">A = 500 ÷ 1000 = 0.5 A</code></p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">⚙️ Why Convert Between Amps and Milliamps?</h2>
          <p>The need to convert between amps and milliamps arises in many fields:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              <strong>Electronics Design</strong>
              <p>When designing PCBs (Printed Circuit Boards), most components are rated in mA. However, power supplies may be rated in A. To ensure compatibility, engineers must convert units.</p>
            </li>
            <li>
              <strong>Power Supply Sizing</strong>
              <p>A power supply rated at 2A can support a device that draws 2000 mA. Converting ensures devices don’t exceed the power limit.</p>
            </li>
            <li>
              <strong>Battery Management</strong>
              <p>Battery discharge and charging currents are often shown in mA, especially for portable electronics and IoT devices. Knowing the equivalent in A helps with performance calculations.</p>
            </li>
            <li>
              <strong>Testing and Diagnostics</strong>
              <p>Multimeters often measure both A and mA, depending on the circuit size. Conversions help interpret readings correctly.</p>
            </li>
          </ol>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🔍 Common Current Ranges</h2>
          <p>Here’s a quick look at typical current values and their uses:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-600">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Device/Use Case</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Current (A)</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Current (mA)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { device: "LED Indicator", currentA: "0.02 A", currentmA: "20 mA" },
                  { device: "Phone Charging Port", currentA: "1 A", currentmA: "1000 mA" },
                  { device: "Laptop Adapter", currentA: "3 A", currentmA: "3000 mA" },
                  { device: "Small DC Motor", currentA: "0.5 A", currentmA: "500 mA" },
                  { device: "Arduino Microcontroller", currentA: "0.05 A", currentmA: "50 mA" },
                ].map(row => (
                  <tr key={row.device}>
                    <td className="px-4 py-2 border-b dark:border-gray-600">{row.device}</td>
                    <td className="px-4 py-2 border-b dark:border-gray-600">{row.currentA}</td>
                    <td className="px-4 py-2 border-b dark:border-gray-600">{row.currentmA}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">📊 Amps to Milliamps Conversion Table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-600">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Amps (A)</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Milliamps (mA)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { amps: "0.001 A", milliamps: "1 mA" }, { amps: "0.01 A", milliamps: "10 mA" },
                  { amps: "0.1 A", milliamps: "100 mA" }, { amps: "0.25 A", milliamps: "250 mA" },
                  { amps: "0.5 A", milliamps: "500 mA" }, { amps: "0.75 A", milliamps: "750 mA" },
                  { amps: "1 A", milliamps: "1000 mA" }, { amps: "2 A", milliamps: "2000 mA" },
                  { amps: "5 A", milliamps: "5000 mA" }, { amps: "10 A", milliamps: "10,000 mA" },
                ].map(row => (
                  <tr key={row.amps}>
                    <td className="px-4 py-2 border-b dark:border-gray-600">{row.amps}</td>
                    <td className="px-4 py-2 border-b dark:border-gray-600">{row.milliamps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🛠️ Applications of Amps to Milliamps Conversion</h2>
          <ol className="list-decimal ml-6 space-y-3">
            <li>
              <strong>🧪 Circuit Design and Component Matching</strong>
              <p>When selecting components like resistors, transistors, and ICs, you must ensure they can handle the current — often specified in mA. Knowing how to convert from A to mA lets engineers avoid damaging components.</p>
            </li>
            <li>
              <strong>🔋 Battery-Powered Devices</strong>
              <p>Many portable devices run on low currents to preserve battery life. Converting the current draw from A to mA helps calculate:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Battery life (using mAh rating)</li>
                <li>Charging speed</li>
                <li>Power efficiency</li>
              </ul>
            </li>
            <li>
              <strong>🧰 Multimeter Readings</strong>
              <p>Multimeters usually display current in A or mA depending on the range setting. Understanding the relationship between the two avoids misinterpreting test results.</p>
            </li>
            <li>
              <strong>🖥️ Embedded Systems and Microcontrollers</strong>
              <p>In embedded systems, mA-level current is standard. For example, a temperature sensor might draw only 10 mA. If the power supply outputs in amps, conversion ensures accurate budgeting.</p>
            </li>
            <li>
              <strong>🏥 Medical and Precision Devices</strong>
              <p>In devices like ECG machines or glucose monitors, even tiny currents matter. Milliamps provide precision, and converting helps with compliance and testing.</p>
            </li>
          </ol>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">❗ Common Mistakes to Avoid</h2>
          <p>Here are a few common pitfalls when working with amps and milliamps:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>❌ Forgetting to multiply or divide by 1000 — Always remember the factor: 1A = 1000mA.</li>
            <li>❌ Mixing A and mA in calculations — Always convert to the same unit before applying formulas.</li>
            <li>❌ Overlooking decimal places — A current of 0.03 A is not the same as 3 A! Be precise.</li>
            <li>❌ Using mA in high-current circuits — Always use the appropriate unit for the application.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">❓ Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Q1: Can I convert amps to milliamps without voltage?</h4>
              <p>A: Yes. This conversion is purely between units of current. Voltage is not required.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Q2: Are milliamps used in AC and DC circuits?</h4>
              <p>A: Yes. Both AC and DC circuits can have current expressed in mA, though DC applications often involve smaller devices where mA is more common.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Q3: Why does my phone charger say “2000mA” instead of 2A?</h4>
              <p>A: It’s simply a matter of scale. 2000mA sounds more precise for small electronics. Both mean the same current.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Q4: How do I measure current in milliamps?</h4>
              <p>A: Use a digital multimeter set to the mA range. Always connect the meter in series with the circuit.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Q5: How many milliamps is dangerous?</h4>
              <p>A: Currents as low as 100 mA can be fatal if passed through the human body under certain conditions. Always use caution with electrical circuits.</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">🧾 Summary</h2>
           <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-600">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Term</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Symbol</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Unit</th>
                  <th className="px-4 py-2 border-b dark:border-gray-600 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b dark:border-gray-600">Ampere</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">A</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">Amps</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">Measures electric current</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b dark:border-gray-600">Milliampere</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">mA</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">Milliamps</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">1/1000 of an Amp</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b dark:border-gray-600">Conversion</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600" colSpan={2}>1 A = 1000 mA</td>
                  <td className="px-4 py-2 border-b dark:border-gray-600">mA for electronics; A for appliances</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">✅ Final Thoughts</h2>
          <p>
            Understanding how to convert amps to milliamps is a fundamental skill in electrical and electronics
            engineering. Whether you're building a circuit, choosing a power adapter, testing a component, or
            designing an embedded system, this simple unit conversion ensures your calculations and components align.
          </p>
          <p>
            The conversion is easy, but its impact is huge. It provides clarity, accuracy, and safety in any
            electrical project — from a school experiment to industrial design.
          </p>
          <p className="mt-2">Next time you're working with current values, remember:</p>
          <div className="bg-gray-100 p-3 my-2 rounded-md dark:bg-gray-800 dark:text-gray-200 text-center">
            <code className="text-lg font-semibold">1 A = 1000 mA</code>
            <p className="text-sm">— and a little precision goes a long way.</p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AmpsToMilliampsConverter;