import React from "react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const AmpToWattsConverter: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ampParam = searchParams.get("amps");
  const amps = ampParam ? parseFloat(ampParam) : 1; // Default to 1A if no param

  const calculateWatts = (amps: number, volts: number, powerFactor = 1) => {
    return powerFactor * amps * volts;
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
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
                            <BreadcrumbPage>Amps to Watts</BreadcrumbPage>
                          </BreadcrumbItem>
                        </BreadcrumbList>
                     </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>How to Convert Amps to Watts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">

          {/* Introduction */}
          <section>
            <p>
              To convert electric current in amps (A) to electric power in watts (W), you need to know the voltage (V) and the type of power supply (DC or AC). The general formula for calculating watts is:
            </p>
          </section>

          {/* Formula */}
          <section className="text-center">
            <h3 className="text-lg font-semibold">Formula</h3>
            <p className="mt-2">
              For <strong>DC power</strong>:
              <br />
              <code>watts = amps × volts</code>
            </p>
            <p className="mt-4">
              For <strong>AC power</strong>:
              <br />
              <code>watts = PF × amps × volts</code>
            </p>
            <p className="mt-4">
              Where <strong>PF</strong> is the power factor, a number between 0 and 1 accounting for the phase difference between voltage and current.
            </p>
          </section>

          {/* Example with DC */}
          <section>
            <h2 className="text-lg font-semibold mb-2">{amps}A to Watts Calculation (DC Power Supply)</h2>
            <p>
              For a DC power supply with a voltage of 12V:
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
              <p className="font-semibold">watts = amps × volts</p>
              <p className="mt-2">
                watts = {amps}A × 12V = {calculateWatts(amps, 12)}W
              </p>
            </div>
            <p className="mt-2">
              So, {amps} amp{amps !== 1 ? "s" : ""} at 12 volts DC result{amps !== 1 ? "" : "s"} in {calculateWatts(amps, 12)} watts of power.
            </p>
          </section>

          {/* Example with AC */}
          <section>
            <h2 className="text-lg font-semibold mb-4">{amps}A to Watts Calculation (AC Power Supply)</h2>

            {/* 120V AC */}
            <div>
              <h3 className="text-md font-semibold mb-2">Voltage: 120V AC</h3>

              {/* Resistive load */}
              <p>For a resistive load (PF = 1):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">watts = PF × amps × volts</p>
                <p className="mt-2">
                  watts = 1 × {amps}A × 120V = {calculateWatts(amps, 120, 1)}W
                </p>
              </div>
              <p className="mt-2">
                {amps} amp{amps !== 1 ? "s" : ""} at 120V results in {calculateWatts(amps, 120, 1)} watts for a resistive load.
              </p>

              {/* Inductive load */}
              <p className="mt-4">For an inductive load (PF = 0.8):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">watts = PF × amps × volts</p>
                <p className="mt-2">
                  watts = 0.8 × {amps}A × 120V = {calculateWatts(amps, 120, 0.8)}W
                </p>
              </div>
              <p className="mt-2">
                {amps} amp{amps !== 1 ? "s" : ""} at 120V results in {calculateWatts(amps, 120, 0.8)} watts for an inductive load.
              </p>
            </div>

            {/* 230V AC */}
            <div className="mt-6">
              <h3 className="text-md font-semibold mb-2">Voltage: 230V AC</h3>

              {/* Resistive load */}
              <p>For a resistive load (PF = 1):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">watts = PF × amps × volts</p>
                <p className="mt-2">
                  watts = 1 × {amps}A × 230V = {calculateWatts(amps, 230, 1)}W
                </p>
              </div>
              <p className="mt-2">
                {amps} amp{amps !== 1 ? "s" : ""} at 230V results in {calculateWatts(amps, 230, 1)} watts for a resistive load.
              </p>

              {/* Inductive load */}
              <p className="mt-4">For an inductive load (PF = 0.8):</p>
              <div className="bg-gray-100 p-4 rounded-md text-center dark:text-black">
                <p className="font-semibold">watts = PF × amps × volts</p>
                <p className="mt-2">
                  watts = 0.8 × {amps}A × 230V = {calculateWatts(amps, 230, 0.8)}W
                </p>
              </div>
              <p className="mt-2">
                {amps} amp{amps !== 1 ? "s" : ""} at 230V results in {calculateWatts(amps, 230, 0.8)} watts for an inductive load.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              In DC systems, you simply multiply amps by voltage to get watts. In AC systems, you must also account for the power factor, which adjusts for the type of load. Always ensure you know both the voltage and power factor for accurate conversions.
            </p>
          </section>
          {/* Additional Insights */}
<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Things to Keep in Mind</h2>
  <ul className="list-disc ml-6 space-y-1">
    <li><strong>AC vs DC:</strong> The conversion is straightforward in DC, but in AC, always consider the power factor (PF).</li>
    <li><strong>Power Factor:</strong> Resistive loads like heaters and incandescent bulbs have a PF close to 1. Inductive loads like motors and air conditioners typically have PF between 0.7 and 0.95.</li>
    <li><strong>Current Ratings:</strong> Electrical devices often list amperage and voltage, but not watts. Use this conversion to calculate power consumption accurately.</li>
    <li><strong>Efficiency:</strong> In real-world applications, always account for efficiency losses in the system — actual wattage may be lower than theoretical output.</li>
  </ul>
</section>

{/* Applications */}
<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Where This Conversion is Used</h2>
  <ul className="list-disc ml-6 space-y-1">
    <li><strong>Home Appliances:</strong> Calculating power use for fans, TVs, refrigerators, and washing machines.</li>
    <li><strong>Solar and Battery Systems:</strong> Determining inverter size, panel load, and battery drain in watts.</li>
    <li><strong>Electric Vehicles:</strong> Estimating charging loads and energy efficiency.</li>
    <li><strong>Generator Sizing:</strong> Choosing generators based on the total amp load and expected voltage levels.</li>
  </ul>
</section>

{/* Table */}
<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Quick Reference Table</h2>
  <div className="overflow-x-auto">
    <table className="table-auto border-collapse border border-gray-300 text-left w-full text-sm dark:text-white">
      <thead>
        <tr className="bg-gray-200 dark:bg-gray-800">
          <th className="border border-gray-300 p-2">Amps</th>
          <th className="border border-gray-300 p-2">Voltage (V)</th>
          <th className="border border-gray-300 p-2">Power Factor</th>
          <th className="border border-gray-300 p-2">Watts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">1</td>
          <td className="border border-gray-300 p-2">120</td>
          <td className="border border-gray-300 p-2">1</td>
          <td className="border border-gray-300 p-2">120 W</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">5</td>
          <td className="border border-gray-300 p-2">230</td>
          <td className="border border-gray-300 p-2">0.9</td>
          <td className="border border-gray-300 p-2">1035 W</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">10</td>
          <td className="border border-gray-300 p-2">240</td>
          <td className="border border-gray-300 p-2">0.85</td>
          <td className="border border-gray-300 p-2">2040 W</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

{/* Terminology Breakdown */}
<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Terminology Explained</h2>
  <ul className="list-disc ml-6 space-y-1">
    <li><strong>Ampere (A):</strong> The unit of electric current – how much electric charge flows per second.</li>
    <li><strong>Watt (W):</strong> A measure of real electrical power – the actual energy consumed or produced.</li>
    <li><strong>Volt (V):</strong> The potential difference or pressure that pushes electric charges through a conductor.</li>
    <li><strong>Power Factor (PF):</strong> A decimal between 0 and 1 representing the efficiency of the power usage in AC systems.</li>
  </ul>
</section>

{/* Common Mistakes to Avoid */}
<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Common Mistakes to Avoid</h2>
  <ul className="list-disc ml-6 space-y-1">
    <li>❌ Forgetting to include power factor for AC calculations (watts = amps × volts × PF).</li>
    <li>❌ Using different units (e.g., milliamps instead of amps) without converting first.</li>
    <li>❌ Confusing watts (real power) with VA (apparent power).</li>
    <li>❌ Assuming all devices have PF = 1. Inductive loads almost always have PF &lt; 1.</li>
  </ul>
</section>

{/* Electrical Safety Tips */}
<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">⚠️ Electrical Safety Tips</h2>
  <ul className="list-disc ml-6 space-y-1">
    <li>Always turn off the power before measuring current in a live circuit.</li>
    <li>Use proper-rated fuses or breakers to avoid overloads.</li>
    <li>Never exceed current ratings of plugs, wires, or devices.</li>
    <li>Consult a licensed electrician for high-current or multi-phase installations.</li>
  </ul>
</section>

{/* Bonus Tip */}
<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">💡 Pro Tip</h2>
  <p>
    If you know the wattage and voltage but want to find the amps instead, simply reverse the formula:
    <br />
    <code>Amps = Watts ÷ (Volts × PF)</code>
  </p>
</section>
{/* Extended Educational Content */} 
<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Why Understanding Amps to Watts Matters</h2>
  <p>
    In the world of electricity and electronics, understanding how amperage relates to wattage is crucial for efficient and safe system design. Amps (A) and watts (W) are commonly seen on device labels and product manuals. However, many consumers and even professionals struggle to interpret what these values mean in practical scenarios.
  </p>
  <p className="mt-2">
    For instance, a circuit rated for 15 amps at 120 volts can support up to 1,800 watts of power (assuming a power factor of 1). Exceeding this can cause overheating or tripping of breakers. Hence, accurate amp-to-watt conversion is foundational in building electrical safety protocols.
  </p>
</section>

<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">The Role of Voltage in the Equation</h2>
  <p>
    Voltage (V) represents the potential difference or electrical pressure that drives current through a conductor. When converting amps to watts, voltage acts as the multiplier that transforms current into real usable power.
  </p>
  <p className="mt-2">
    As an analogy, think of amps as water flow and voltage as the pressure pushing the water. The combination determines how much work can be done—like spinning a turbine. Higher voltage can produce more power with less current, which is why high-voltage transmission is more efficient.
  </p>
</section>

<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Understanding the Power Factor in AC Circuits</h2>
  <p>
    In AC (Alternating Current) systems, the power factor (PF) reflects the efficiency of power usage. A PF of 1 indicates all supplied power is used effectively, which is typical for resistive loads. Inductive loads, such as motors and transformers, often have lower PFs due to energy lost in magnetic fields.
  </p>
  <p className="mt-2">
    Utilities often charge industrial customers based on their power factor. A low PF results in penalties because the system has to deliver more current to supply the same real power. Improving the PF through capacitors or PF correction devices can save energy and money.
  </p>
</section>

<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Real-World Implications of Amp to Watt Conversion</h2>
  <p>
    Suppose you're setting up a home theater system. The amplifier may draw 3 amps at 120 volts, equating to 360 watts. Knowing this helps you choose a power strip or UPS that can handle the load without risk of overload or shutdown.
  </p>
  <p className="mt-2">
    Similarly, in a data center, understanding each server's current draw allows accurate provisioning of power supplies, avoiding costly outages. Engineers must also factor in power factor and surge conditions for total power planning.
  </p>
</section>

<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Amps to Watts in Renewable Energy Systems</h2>
  <p>
    In solar energy systems, amperage and voltage play a key role in sizing inverters and battery banks. For example, a solar panel rated at 5A and 18V will generate 90W of power under ideal conditions. Multiply that by the number of panels to estimate total energy output.
  </p>
  <p className="mt-2">
    Additionally, when storing energy in batteries, converting amps to watts helps you determine discharge rates and load capacities. Overloading a battery system can reduce its lifespan or even create safety hazards, especially in lithium-ion setups.
  </p>
</section>

<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Use Cases in Automotive and EV Applications</h2>
  <p>
    Electric vehicles (EVs) are prime examples where amps-to-watts calculations are essential. A 400V EV battery delivering 100A provides 40,000 watts or 40 kilowatts of power. This value helps estimate driving range, motor performance, and charging time.
  </p>
  <p className="mt-2">
    When installing an EV charger, knowing how many amps it draws allows you to plan your home's electrical panel upgrades or decide whether a dedicated circuit is needed.
  </p>
</section>

<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Safety and Regulatory Considerations</h2>
  <p>
    Electrical safety codes, such as the NEC (National Electrical Code), use amperage ratings to set wire gauge requirements and breaker sizing. If you incorrectly estimate wattage from amps, you might undersize components, increasing fire risk.
  </p>
  <p className="mt-2">
    Regulatory bodies often require labeling of both amps and watts on consumer devices. Accurate conversions help with compliance and proper documentation in product certification.
  </p>
</section>

<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Tips for Accurate Amp to Watt Calculations</h2>
  <ul className="list-disc ml-6 space-y-1">
    <li>Always double-check whether your circuit is AC or DC before choosing a formula.</li>
    <li>Measure the voltage at the load point, as long wiring can cause voltage drops.</li>
    <li>Use a multimeter or clamp meter for real-time amp readings when possible.</li>
    <li>If the power factor isn’t specified, use typical values: 1 for resistive, 0.8–0.9 for inductive loads.</li>
    <li>When sizing power supplies or inverters, add a margin of 20–30% above the calculated wattage.</li>
  </ul>
</section>

<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Amps to Watts in International Systems</h2>
  <p>
    In regions using 220–240V mains (e.g., Europe, Asia), devices draw fewer amps for the same wattage compared to 110–120V systems (e.g., North America). For example, a 1200W appliance uses 10A at 120V, but only 5A at 240V.
  </p>
  <p className="mt-2">
    This impacts plug design, circuit breaker standards, and even socket types. Being aware of your regional voltage standard helps avoid overloading when traveling or importing electronics.
  </p>
</section>

<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Interactive Use with the Converter Tool</h2>
  <p>
    This converter allows users to input amps and adjust the voltage and power factor if needed. Behind the scenes, it uses simple multiplication as shown:
  </p>
  <p className="mt-2 italic">
    watts = amps × volts (for DC), or watts = PF × amps × volts (for AC)
  </p>
  <p className="mt-2">
    It displays results dynamically, helping users visualize the impact of each parameter. Try changing the voltage or PF and observe how the wattage shifts instantly.
  </p>
</section>

<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Conclusion: Bridging the Knowledge Gap</h2>
  <p>
    Whether you're a DIY enthusiast, student, or electrical engineer, mastering the amps-to-watts conversion enhances your ability to design, evaluate, and troubleshoot electrical systems. It's a simple yet powerful tool that enables more informed decisions and safer applications.
  </p>
  <p className="mt-2">
    As our world increasingly depends on electricity—from smart homes to electric vehicles and renewable energy—understanding the math behind power calculations becomes not just useful, but essential.
  </p>
</section>


{/* Final Notes */}
<section>
  <h2 className="text-lg font-semibold mt-6 mb-2">Final Notes</h2>
  <p>
    Converting amps to watts helps not just in understanding how much power a device consumes but also in making informed decisions for energy management. This knowledge is vital for homeowners, engineers, and electricians alike.
  </p>
</section>


        </CardContent>
      </Card>
    </div>
  );
};

export default AmpToWattsConverter;
