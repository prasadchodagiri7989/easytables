import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

const WattInfo = () => {
  return (
    <>
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
                      <Link to="/electrical/units">Electrical Units</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Watt</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
    <Card className="mx-auto max-w-[900px] p-[20px]">
    <div className="max-w-4xl mx-auto p-6 bg-white/40 dark:bg-transparent rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">Watt (W)</h1>

      <section>
        <h2 className="text-2xl font-semibold">Watt Definition</h2>
        <p>
          Watt is the unit of power (symbol: W). The watt unit is named after James Watt, the inventor of the steam engine. One watt is defined as the energy consumption rate of one joule per second:
        </p>
        <p className="font-mono">1W = 1J / 1s</p>
        <p>
          One watt is also defined as the current flow of one ampere with a voltage of one volt:
        </p>
        <p className="font-mono">1W = 1V × 1A</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Watt Conversion</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100 dark:text-black">
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Symbol</th>
              <th className="border px-3 py-2">Conversion</th>
              <th className="border px-3 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">Picowatt</td>
              <td className="border px-3 py-2">pW</td>
              <td className="border px-3 py-2">1pW = 10⁻¹² W</td>
              <td className="border px-3 py-2">P = 10 pW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Nanowatt</td>
              <td className="border px-3 py-2">nW</td>
              <td className="border px-3 py-2">1nW = 10⁻⁹ W</td>
              <td className="border px-3 py-2">P = 10 nW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Microwatt</td>
              <td className="border px-3 py-2">μW</td>
              <td className="border px-3 py-2">1μW = 10⁻⁶ W</td>
              <td className="border px-3 py-2">P = 10 μW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Milliwatt</td>
              <td className="border px-3 py-2">mW</td>
              <td className="border px-3 py-2">1mW = 10⁻³ W</td>
              <td className="border px-3 py-2">P = 10 mW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Watt</td>
              <td className="border px-3 py-2">W</td>
              <td className="border px-3 py-2">-</td>
              <td className="border px-3 py-2">P = 10 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Kilowatt</td>
              <td className="border px-3 py-2">kW</td>
              <td className="border px-3 py-2">1kW = 10³ W</td>
              <td className="border px-3 py-2">P = 2 kW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Megawatt</td>
              <td className="border px-3 py-2">MW</td>
              <td className="border px-3 py-2">1MW = 10⁶ W</td>
              <td className="border px-3 py-2">P = 5 MW</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Gigawatt</td>
              <td className="border px-3 py-2">GW</td>
              <td className="border px-3 py-2">1GW = 10⁹ W</td>
              <td className="border px-3 py-2">P = 5 GW</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How to Convert Watts</h2>
        <ul className="space-y-4">
          <li><strong>To Kilowatts:</strong> P(kW) = P(W) / 1000</li>
          <li><strong>To Milliwatts:</strong> P(mW) = P(W) ⋅ 1000</li>
          <li><strong>To dBm:</strong> P(dBm) = 10 ⋅ log₁₀( P(mW) / 1mW)</li>
          <li><strong>To Amps:</strong> I(A) = P(W) / V(V)</li>
          <li><strong>To Volts:</strong> V(V) = P(W) / I(A)</li>
          <li><strong>To Ohms:</strong> R(Ω) = P(W) / I(A)² or R(Ω) = V(V)² / P(W)</li>
          <li><strong>To BTU/hr:</strong> P(BTU/hr) = 3.412142 ⋅ P(W)</li>
          <li><strong>To Joules:</strong> E(J) = P(W) ⋅ t(s)</li>
          <li><strong>To Horsepower:</strong> P(HP) = P(W) / 746</li>
          <li><strong>To kVA:</strong> P(W) = 1000 ⋅ S(kVA) ⋅ PF</li>
          <li><strong>To VA:</strong> P(W) = S(VA) ⋅ PF</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Power Consumption of Some Electrical Components</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100 dark:text-black">
              <th className="border px-3 py-2">Electric Component</th>
              <th className="border px-3 py-2">Typical Power Consumption (W)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">LCD TV</td>
              <td className="border px-3 py-2">30..300 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">LCD Monitor</td>
              <td className="border px-3 py-2">30..45 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">PC Desktop Computer</td>
              <td className="border px-3 py-2">300..400 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Laptop Computer</td>
              <td className="border px-3 py-2">40..60 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Refrigerator</td>
              <td className="border px-3 py-2">150..300 W (when active)</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Light Bulb</td>
              <td className="border px-3 py-2">25..100 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Fluorescent Light</td>
              <td className="border px-3 py-2">15..60 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Halogen Light</td>
              <td className="border px-3 py-2">30..80 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Speaker</td>
              <td className="border px-3 py-2">10..300 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Microwave</td>
              <td className="border px-3 py-2">100..1000 W</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Air Conditioner</td>
              <td className="border px-3 py-2">1..2 kW</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <section>
  <h2 className="text-2xl font-semibold">Historical Background and Evolution of the Watt</h2>
  <p>
    The unit watt was named in honor of the Scottish engineer James Watt (1736–1819), who made significant improvements to the steam engine. His work contributed immensely to the Industrial Revolution, and the watt became associated with mechanical and later electrical power. The unit was officially adopted as a measure of power in the International System of Units (SI) in 1960.
  </p>
  <p>
    Before the widespread use of the watt, other power units were commonly used in various fields, such as horsepower in mechanical engineering. As the use of electrical power became more prominent, a unified and standardized unit like the watt became necessary. The definition of the watt has evolved from mechanical concepts to electromagnetic definitions, particularly tied to the base SI units: kilogram, meter, and second.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Watt vs. Watt-hour: Understanding the Difference</h2>
  <p>
    It's important to distinguish between watts (W) and watt-hours (Wh), as they represent different physical quantities. A watt is a unit of power, which is the rate of energy usage or generation at any given moment. A watt-hour, on the other hand, is a unit of energy, representing the total amount of energy used or produced over time.
  </p>
  <p>
    For example, a device rated at 100 watts running for 1 hour consumes 100 watt-hours of energy. If the same device runs for 10 hours, it consumes 1,000 Wh, or 1 kilowatt-hour (kWh). This distinction is critical when reading electricity bills, which charge based on energy consumption (usually in kWh), not just power ratings.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Real-world Applications and Use Cases of the Watt</h2>
  <p>
    The watt is widely used across numerous industries and applications. In household electronics, devices such as toasters, microwaves, and light bulbs display power ratings in watts to indicate their energy usage. In computing, the wattage of a power supply unit (PSU) determines the amount of electrical power it can provide to a computer system.
  </p>
  <p>
    In renewable energy, the watt is used to describe the power output of solar panels and wind turbines. A solar panel rated at 300W can produce 300 watts of electrical power under ideal sunlight conditions. Wind turbines are often rated in kilowatts (kW) or megawatts (MW), depending on their size and application.
  </p>
  <p>
    In audio equipment, wattage indicates the power output of amplifiers and the power handling capacity of speakers. A speaker rated at 100 watts can handle up to 100 watts of power from an amplifier without distortion or damage.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Efficiency and Power Ratings in Electrical Devices</h2>
  <p>
    Power ratings listed in watts do not always reflect the actual energy usage, especially in devices with variable efficiency. For example, an appliance with a 1000W rating might only consume 700W during normal operation due to power-saving features. Efficiency, often expressed as a percentage, determines how much of the input power is converted into useful output.
  </p>
  <p>
    In electric motors, efficiency ratings determine how well electrical power is converted into mechanical power. A motor with an efficiency of 90% uses 1000W of electricity to deliver 900W of mechanical power. Understanding efficiency helps consumers and engineers make informed decisions about energy consumption and cost-effectiveness.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Calculating Power in Different Circuits</h2>
  <p>
    In direct current (DC) circuits, calculating power is straightforward using the formula:
  </p>
  <p className="font-mono">P = V × I</p>
  <p>
    Where P is power in watts, V is voltage in volts, and I is current in amperes. In alternating current (AC) circuits, the presence of reactance and phase shift between voltage and current introduces the concept of apparent power (VA), real power (W), and reactive power (VAR).
  </p>
  <p>
    Real power (watts) is the actual usable power, while apparent power is the total power supplied. Power factor (PF) is the ratio between real and apparent power:
  </p>
  <p className="font-mono">PF = P(W) / S(VA)</p>
  <p>
    A power factor close to 1 indicates efficient power usage, while lower values suggest energy losses due to reactive components.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Watt Meters and Power Measurement Tools</h2>
  <p>
    Measuring electrical power accurately requires specialized instruments. Watt meters are devices that measure the power flowing through an electrical circuit. They can be analog or digital and are commonly used in laboratory settings, industrial environments, and home energy monitors.
  </p>
  <p>
    Smart plugs with built-in watt meters can track real-time power consumption of connected devices, helping users monitor energy usage and identify high-consumption appliances. This data is essential for optimizing energy efficiency and reducing electricity bills.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">International Standards and Wattage Regulations</h2>
  <p>
    Governments and international organizations often regulate wattage in consumer products to ensure energy efficiency and safety. For example, the European Union's Ecodesign Directive mandates maximum wattage limits for household appliances and lighting to reduce environmental impact.
  </p>
  <p>
    Similarly, ENERGY STAR certification in the U.S. identifies products that meet energy efficiency guidelines. Manufacturers label their devices with power ratings and efficiency certifications to inform consumers and comply with regulatory standards.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Common Misconceptions About Power Ratings</h2>
  <p>
    A common misconception is that higher wattage always means better performance. While it may indicate more power output, it does not always correlate with efficiency or quality. For example, a 100W speaker may be louder than a 50W speaker, but sound quality depends on many other factors, such as design, frequency response, and distortion levels.
  </p>
  <p>
    In lighting, LED bulbs consume significantly less power (watts) than incandescent bulbs while producing the same or more light (lumens). This highlights the importance of considering both wattage and lumens when evaluating energy-efficient lighting.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Conclusion</h2>
  <p>
    The watt is a fundamental unit of power with applications spanning nearly every aspect of modern life. From powering homes and factories to determining the efficiency of electronic devices, understanding how watts work is essential for making informed decisions in engineering, environmental sustainability, and everyday energy use. With the global focus shifting towards renewable energy and smart energy consumption, knowledge of watts and power measurement continues to grow in importance.
  </p>
</section>
<section>
  <h2 className="text-2xl font-semibold">Watt in Renewable Energy Systems</h2>
  <p>
    In renewable energy systems, the watt is the primary unit used to quantify the power output of installations like solar photovoltaic (PV) panels, wind turbines, and hydroelectric generators. For instance, a home solar panel system might be rated at 5,000 watts or 5 kilowatts (kW). This rating represents the maximum output the system can deliver under ideal sunlight conditions, also known as peak sun hours.
  </p>
  <p>
    Understanding wattage in this context is essential for designing energy systems. Engineers must calculate the daily energy production in watt-hours (Wh) or kilowatt-hours (kWh) to size battery storage, inverters, and load demands correctly. For example, a 5kW solar system operating at full capacity for 4 hours a day generates:
  </p>
  <p className="font-mono">Energy = Power × Time = 5kW × 4h = 20kWh</p>
  <p>
    That 20kWh must be stored, used directly, or fed into the grid, depending on the system's design. These calculations drive decisions about battery bank capacity, inverter ratings, and even monthly electricity bill savings.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Power Ratings in Electric Vehicles (EVs)</h2>
  <p>
    Electric vehicles (EVs) rely heavily on power measurements in watts and kilowatts to describe motor capabilities, battery charging rates, and energy consumption. A typical EV may feature a motor rated at 150kW, which determines its acceleration and performance. The higher the wattage, the more powerful the vehicle.
  </p>
  <p>
    Charging stations are also categorized by their power output. A Level 1 charger delivers around 1.4kW, while a Level 2 charger may provide up to 19kW. DC fast chargers can offer power levels exceeding 50kW, with some superchargers rated at 250kW or more. These ratings directly affect how fast an EV battery can be charged.
  </p>
  <p>
    Additionally, manufacturers often publish power consumption in watt-hours per kilometer (Wh/km) or miles per kilowatt-hour (mi/kWh), which helps consumers evaluate efficiency and range.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Industrial Applications of Power Ratings</h2>
  <p>
    In industrial settings, power ratings influence machinery selection, electrical wiring, and energy efficiency management. Motors, compressors, conveyor belts, pumps, and heaters all have wattage ratings that determine their energy draw. Large manufacturing plants monitor total power usage in kilowatts (kW) or megawatts (MW) to manage operational costs and avoid overloads.
  </p>
  <p>
    For example, an industrial air compressor might consume 25kW of power during continuous operation. Facilities must ensure that transformers, switchgear, and backup power systems like generators are adequately sized to handle peak power demands.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Smart Homes and Power Monitoring</h2>
  <p>
    In smart homes, power monitoring systems help homeowners track energy consumption in real time. Devices like smart plugs, energy meters, and home automation systems display power use in watts and total energy use in kilowatt-hours. These systems provide insights into which appliances draw the most power and when.
  </p>
  <p>
    Smart thermostats, lighting systems, and HVAC units often adjust their operation based on energy usage feedback, optimizing performance and reducing electricity bills. For instance, a smart home system might limit high-wattage devices like ovens or air conditioners during peak hours to save energy or avoid exceeding demand limits.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Wattage and Circuit Design in Electronics</h2>
  <p>
    In circuit design, understanding wattage is crucial to prevent overheating and ensure proper functionality. Every resistor, capacitor, diode, or transistor has a maximum power rating in watts that must not be exceeded. Exceeding these ratings can result in failure or permanent damage.
  </p>
  <p>
    For example, a resistor rated at 0.5W should not dissipate more than 0.5 watts of heat under normal operating conditions. Designers use power formulas such as:
  </p>
  <p className="font-mono">P = I² × R or P = V² / R</p>
  <p>
    to calculate expected heat dissipation. If the calculated power exceeds the component's rating, a higher-rated component or heat dissipation mechanism, like a heat sink, must be used.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Wattage and Lighting Technology</h2>
  <p>
    In lighting, wattage once served as the main indicator of brightness. Traditional incandescent bulbs consumed more watts to produce a given amount of light. For example, a 60W incandescent bulb was standard in many homes. However, modern LED lighting offers similar brightness at much lower wattage—often just 8–10W—due to much higher luminous efficacy.
  </p>
  <p>
    Today, lumens are a better metric for brightness, while watts reflect energy consumption. Nonetheless, consumers still associate wattage with brightness, which is why many bulb packages include "wattage equivalent" labels for easier comparison.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Wattage Safety Guidelines</h2>
  <p>
    Wattage is also vital when it comes to electrical safety. Power strips, extension cords, and outlets have maximum wattage ratings that must be observed. Overloading a circuit can cause overheating, tripped breakers, or even fire hazards.
  </p>
  <p>
    For example, plugging multiple high-wattage devices into a single 15A, 120V outlet may exceed the safe limit:
  </p>
  <p className="font-mono">Max Power = 15A × 120V = 1800W</p>
  <p>
    Exceeding this limit can lead to dangerous outcomes. Always check the power rating of all connected appliances to avoid overloading electrical circuits.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Wattage in Audio and Music Equipment</h2>
  <p>
    Audio systems use watt ratings to describe amplifier output power and speaker capacity. While higher wattage may imply louder sound, it doesn’t guarantee better quality. Audio quality depends on factors like total harmonic distortion (THD), frequency response, and sensitivity.
  </p>
  <p>
    A speaker rated at 100W RMS (Root Mean Square) can handle 100W of continuous power without damage. It’s important to match the amplifier’s output to the speaker’s power handling capacity to avoid distortion or failure. Peak power ratings—often used in marketing—refer to short bursts and should not be mistaken for continuous power handling.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Wattage in Computing and Data Centers</h2>
  <p>
    Power consumption is a major factor in computing. CPUs, GPUs, power supplies, and entire servers are rated in watts. Modern CPUs may have thermal design power (TDP) ratings around 65W to 150W, while high-performance GPUs can exceed 300W. These ratings guide the selection of appropriate cooling systems and power supplies.
  </p>
  <p>
    In data centers, energy consumption is measured in kilowatts and megawatts. Operators track power usage effectiveness (PUE), the ratio of total facility energy to the energy used by computing equipment. Lower PUE values indicate higher efficiency. Efficient wattage management helps reduce operating costs and environmental impact.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Watt in Everyday Appliances</h2>
  <p>
    Everyday appliances list their wattage to inform consumers of expected energy use. For example, a hair dryer may consume 1500–2000W, a coffee maker around 1000W, and a vacuum cleaner 1200W. Comparing these values helps in choosing energy-efficient alternatives or planning electrical circuits at home.
  </p>
  <p>
    Additionally, wattage affects portable power choices, such as choosing the correct power bank or generator. A portable generator might be rated at 2000W and can support a limited number of devices simultaneously, depending on their total wattage.
  </p>
</section>


    </Card>
    </>
  );
};

export default WattInfo;
