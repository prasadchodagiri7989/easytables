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
