import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

const CapacitorInfo = () => {
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
                                  <Link to="/electrical/components">Electrical components</Link>
                                </BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbSeparator />
                              <BreadcrumbItem>
                                <BreadcrumbPage>Capacitor </BreadcrumbPage>
                              </BreadcrumbItem>
                            </BreadcrumbList>
                          </Breadcrumb>
  <Card className="mx-auto max-w-[900px]">
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">What is a Capacitor?</h1>
      <p className="mb-4">
        A <strong>capacitor</strong> is an electronic component that stores electric charge. It consists of two close conductors (usually plates) separated by a dielectric material. When connected to a power source, one plate accumulates positive charge while the other accumulates negative charge.
      </p>
      <p className="mb-4">
        The <strong>capacitance</strong> is the amount of electric charge stored at a voltage of 1 Volt, and it is measured in <strong>Farads (F)</strong>.
      </p>
      <p className="mb-6">
        Capacitors block current in DC circuits and act as short circuits in AC circuits.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Capacitor Symbols</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Capacitor</li>
        <li>Polarized Capacitor</li>
        <li>Variable Capacitor</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Capacitance Formula</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">C = Q / V</pre>
      <p className="mb-4">
        Where C is capacitance (F), Q is electric charge (C), and V is voltage (V).
      </p>

      <h2 className="text-2xl font-semibold mb-2">Capacitance of a Plate Capacitor</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">C = ε × (A / d)</pre>
      <p className="mb-6">
        ε is the permittivity (F/m), A is plate area (m²), and d is distance between plates (m).
      </p>

      <h2 className="text-2xl font-semibold mb-2">Capacitors in Series</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        1 / C<sub>Total</sub> = 1 / C₁ + 1 / C₂ + 1 / C₃ + ...
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Capacitors in Parallel</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">C<sub>Total</sub> = C₁ + C₂ + C₃ + ...</pre>

      <h2 className="text-2xl font-semibold mb-2">Capacitor's Current</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        i<sub>c</sub>(t) = C × d(v<sub>c</sub>(t)) / dt
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Capacitor's Voltage</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        v<sub>c</sub>(t) = v<sub>c</sub>(0) + (1 / C) × ∫₀ᵗ i<sub>c</sub>(τ) dτ
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Energy Stored in Capacitor</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        E<sub>C</sub> = (C × V<sub>C</sub>²) / 2
      </pre>

      <h2 className="text-2xl font-semibold mb-2">AC Circuits</h2>
      <p className="mb-2">Angular frequency:</p>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">ω = 2πf</pre>
      <p className="mb-4">ω in rad/s, f in Hz</p>

      <h2 className="text-2xl font-semibold mb-2">Capacitor's Reactance</h2>
      <pre className="bg-gray-100 p-3 rounded mb-4 dark:text-black">
        X<sub>C</sub> = -1 / (ω × C)
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Capacitor's Impedance</h2>
      <p className="mb-1">Cartesian form:</p>
      <pre className="bg-gray-100 p-3 rounded mb-2 dark:text-black">
        Z<sub>C</sub> = -j / (ω × C)
      </pre>
      <p className="mb-1">Polar form:</p>
      <pre className="bg-gray-100 p-3 rounded mb-6 dark:text-black">
        Z<sub>C</sub> = X<sub>C</sub> ∟ -90º
      </pre>

      <h2 className="text-2xl font-semibold mb-2">Types of Capacitors</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Variable Capacitor</li>
        <li>Electrolytic Capacitor</li>
        <li>Spherical Capacitor</li>
        <li>Power Capacitor</li>
        <li>Ceramic Capacitor</li>
        <li>Tantalum Capacitor</li>
        <li>Mica Capacitor</li>
        <li>Paper Capacitor</li>
      </ul>
    </div>
    <section className="mt-8">
  <h2 className="text-2xl font-semibold mb-2">Applications of Capacitors</h2>
  <p className="mb-4">
    Capacitors are used in a wide variety of electronic and electrical systems. Their applications range from simple timing circuits to complex power conditioning and filtering. Here are some of the most common uses:
  </p>
  <ul className="list-disc pl-6 space-y-2">
    <li><strong>Power Supply Smoothing:</strong> Capacitors filter out voltage ripples in DC power supplies.</li>
    <li><strong>Signal Coupling and Decoupling:</strong> They block DC while allowing AC signals to pass between stages of amplifiers.</li>
    <li><strong>Energy Storage:</strong> Used in camera flashes and emergency power backup circuits.</li>
    <li><strong>Power Factor Correction:</strong> Large capacitors improve power efficiency in industrial settings by compensating for lagging currents.</li>
    <li><strong>Motor Starters:</strong> Start and run capacitors provide phase shift and torque in single-phase motors.</li>
    <li><strong>Oscillators and Timers:</strong> Used in RC or LC circuits to generate clock pulses and timing delays.</li>
  </ul>
</section>

<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-2">Choosing the Right Capacitor</h2>
  <p className="mb-4">
    Selecting a capacitor depends on the intended application. Key considerations include:
  </p>
  <ul className="list-disc pl-6 space-y-2">
    <li><strong>Capacitance Value:</strong> Determines how much charge can be stored.</li>
    <li><strong>Voltage Rating:</strong> Should be higher than the maximum voltage in the circuit.</li>
    <li><strong>Type and Material:</strong> Ceramic for general use, electrolytic for large capacitance, and film or mica for high precision.</li>
    <li><strong>Temperature Stability:</strong> Important for environments with wide temperature variations.</li>
    <li><strong>Size and Mounting:</strong> Surface mount vs. through-hole depending on circuit design.</li>
  </ul>
</section>

<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-2">Safety and Handling</h2>
  <p className="mb-4">
    Capacitors, especially high-voltage types, must be handled with care. Even when disconnected from power, they can retain a dangerous charge.
  </p>
  <ul className="list-disc pl-6 space-y-2">
    <li>Discharge capacitors before working on circuits using a resistor or specialized tool.</li>
    <li>Use insulated tools and wear protective gloves when handling large capacitors.</li>
    <li>Electrolytic capacitors are polarized—never reverse the polarity in a circuit.</li>
    <li>Avoid mechanical stress or overheating, which may cause leakage or rupture.</li>
  </ul>
</section>
<section>
  <h2 className="text-2xl font-semibold mb-2">Applications of Capacitors</h2>
  <p className="mb-4">
    Capacitors are used in a wide range of applications across electronics and electrical systems. Their ability to store and discharge electrical energy makes them suitable for:
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>Power Supply Filtering:</strong> Capacitors smooth out voltage by filtering AC ripples from DC output in power supplies.</li>
    <li><strong>Motor Starters:</strong> Start and run capacitors in AC motors help improve torque and efficiency.</li>
    <li><strong>Signal Coupling and Decoupling:</strong> Capacitors allow AC signals to pass while blocking DC, helping in audio and RF circuits.</li>
    <li><strong>Energy Storage:</strong> Supercapacitors store energy for short-term high-power applications like regenerative braking in vehicles.</li>
    <li><strong>Timing Circuits:</strong> Used in combination with resistors in RC timers and oscillators.</li>
    <li><strong>Snubber Circuits:</strong> Absorb voltage spikes in power electronics.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">How to Test a Capacitor</h2>
  <p className="mb-4">
    Testing a capacitor ensures it's functioning correctly. Common methods include:
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>Using a Multimeter:</strong> In continuity or capacitance mode, check for correct capacitance value and no shorts.</li>
    <li><strong>Using an ESR Meter:</strong> Tests the equivalent series resistance (ESR), which increases with aging capacitors.</li>
    <li><strong>Visual Inspection:</strong> Look for bulging, leakage, or burnt leads which indicate failure.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Dielectric Materials</h2>
  <p className="mb-4">
    The dielectric is the insulating material between capacitor plates. Common dielectric materials include:
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>Ceramic:</strong> Used in high-frequency applications; small and stable.</li>
    <li><strong>Polyester/Mylar:</strong> Used in timing circuits; good stability and size.</li>
    <li><strong>Electrolyte (wet/dry):</strong> High capacitance per volume; used in power applications.</li>
    <li><strong>Paper:</strong> Found in vintage and high-voltage equipment.</li>
    <li><strong>Air:</strong> Used in variable tuning capacitors.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Capacitor Selection Criteria</h2>
  <p className="mb-4">
    Choosing the right capacitor depends on several key parameters:
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>Capacitance Value:</strong> Choose based on energy storage or timing needs.</li>
    <li><strong>Voltage Rating:</strong> Always select a capacitor rated 25–50% above the circuit voltage.</li>
    <li><strong>ESR and Ripple Current:</strong> Important in switching power supplies.</li>
    <li><strong>Temperature Range:</strong> Consider the ambient and heat from nearby components.</li>
    <li><strong>Physical Size:</strong> Must fit the board layout or enclosure.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Real-World Examples</h2>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>Camera Flashes:</strong> Use capacitors to store energy and release it rapidly as a flash.</li>
    <li><strong>Electric Vehicles:</strong> Regenerative braking systems use capacitors to absorb braking energy.</li>
    <li><strong>Wi-Fi Routers:</strong> Decoupling capacitors near ICs filter voltage fluctuations for stable performance.</li>
    <li><strong>Microwave Ovens:</strong> High-voltage capacitors are part of the magnetron power supply circuit.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Comparison of Capacitor Types</h2>
  <table className="table-auto w-full border mb-6">
    <thead>
      <tr className="bg-gray-100 dark:text-black">
        <th className="border px-4 py-2">Type</th>
        <th className="border px-4 py-2">Advantages</th>
        <th className="border px-4 py-2">Disadvantages</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">Ceramic</td>
        <td className="border px-4 py-2">Low cost, stable, high-frequency response</td>
        <td className="border px-4 py-2">Limited capacitance</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Electrolytic</td>
        <td className="border px-4 py-2">High capacitance, compact</td>
        <td className="border px-4 py-2">Polarity-sensitive, can dry out</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Tantalum</td>
        <td className="border px-4 py-2">Stable, small size</td>
        <td className="border px-4 py-2">Expensive, prone to short if mishandled</td>
      </tr>
    </tbody>
  </table>
</section>
<section>
  <h2 className="text-2xl font-semibold mb-2">Applications of Capacitors</h2>
  <p className="mb-4">
    Capacitors are versatile components used in various electronic and electrical applications. Here are some of the most common uses:
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>Energy Storage:</strong> Capacitors can store electrical energy temporarily and release it when needed, useful in power backup systems.</li>
    <li><strong>Power Conditioning:</strong> Capacitors help smoothen voltage fluctuations and filter noise in power supplies and electronic circuits.</li>
    <li><strong>Signal Processing:</strong> In analog circuits, capacitors block DC and allow AC to pass, making them essential in filters and coupling circuits.</li>
    <li><strong>Motor Starters:</strong> Start and run capacitors are used in induction motors to create a phase shift for rotation.</li>
    <li><strong>Timing Circuits:</strong> RC circuits (Resistor-Capacitor) are widely used in oscillators and timers.</li>
    <li><strong>Power Factor Correction:</strong> In industrial settings, capacitors are used to improve the power factor of the system, reducing reactive power losses.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Dielectric Materials Used in Capacitors</h2>
  <p className="mb-4">
    The dielectric material in a capacitor determines its properties such as capacitance, tolerance, and temperature stability. Common dielectric materials include:
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>Air:</strong> Used in variable capacitors for tuning radios.</li>
    <li><strong>Ceramic:</strong> Inexpensive and widely used for general-purpose applications.</li>
    <li><strong>Paper:</strong> Found in older or vintage electronics, now mostly obsolete.</li>
    <li><strong>Plastic Films:</strong> Used for stable and precise capacitors in audio and instrumentation.</li>
    <li><strong>Electrolyte:</strong> In electrolytic capacitors, allows very high capacitance values in a small volume.</li>
    <li><strong>Tantalum Oxide:</strong> Offers stability and high capacitance in compact sizes.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Important Capacitor Ratings</h2>
  <p className="mb-4">
    When choosing a capacitor for a circuit, several ratings must be considered:
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>Capacitance (F):</strong> The amount of charge the capacitor can store per volt.</li>
    <li><strong>Voltage Rating (V):</strong> The maximum voltage the capacitor can handle without breaking down.</li>
    <li><strong>Equivalent Series Resistance (ESR):</strong> Internal resistance that affects performance in high-frequency circuits.</li>
    <li><strong>Tolerance (%):</strong> The permissible variation from the rated capacitance.</li>
    <li><strong>Temperature Coefficient:</strong> How the capacitance value changes with temperature.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Capacitor Safety Guidelines</h2>
  <ul className="list-disc pl-6 mb-6">
    <li>Always discharge capacitors before handling to avoid electric shock.</li>
    <li>Do not exceed the voltage rating to prevent dielectric breakdown.</li>
    <li>Observe polarity in polarized capacitors (e.g., electrolytic types).</li>
    <li>Use appropriate replacement parts to avoid mismatched capacitance or voltage ratings.</li>
    <li>Store capacitors in dry environments to prevent corrosion or degradation of materials.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Common Faults in Capacitors</h2>
  <p className="mb-4">
    Capacitors, like all components, can fail over time. Common faults include:
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>Short Circuit:</strong> Internal breakdown causing current to bypass the dielectric.</li>
    <li><strong>Open Circuit:</strong> Loss of connection internally, leading to zero capacitance.</li>
    <li><strong>Leakage:</strong> Gradual loss of stored charge over time due to dielectric imperfections.</li>
    <li><strong>Drift in Capacitance:</strong> Aging or thermal damage causing the value to shift from its rated value.</li>
    <li><strong>Bulging or Explosion:</strong> Usually seen in electrolytic capacitors due to overvoltage or polarity reversal.</li>
  </ul>
</section>
<section>
  <h2 className="text-2xl font-semibold mb-2">Capacitors vs. Batteries</h2>
  <p className="mb-4">
    While both capacitors and batteries store energy, they operate on different principles. Capacitors store energy electrostatically, allowing for rapid charge and discharge, making them ideal for applications that require fast bursts of energy. Batteries, on the other hand, rely on electrochemical reactions, providing a steady flow of power over longer periods.
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>Capacitors:</strong> Fast charging/discharging, shorter energy retention time.</li>
    <li><strong>Batteries:</strong> Slower charge/discharge cycles, long-term energy storage.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Supercapacitors (Ultracapacitors)</h2>
  <p className="mb-4">
    Supercapacitors, or ultracapacitors, are advanced capacitors that offer very high capacitance values compared to conventional types. They bridge the gap between standard capacitors and batteries, combining fast charging with relatively high energy storage.
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li>Used in regenerative braking systems in electric vehicles.</li>
    <li>Power backup for memory systems and industrial controls.</li>
    <li>Higher lifecycle durability than batteries.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Capacitors in Signal Processing</h2>
  <p className="mb-4">
    In electronics, capacitors are essential in signal filtering and conditioning. They block DC components while allowing AC signals to pass, making them ideal for use in:
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>Coupling capacitors:</strong> Transmit AC signals between stages while blocking DC.</li>
    <li><strong>Decoupling capacitors:</strong> Remove noise and voltage spikes from power lines.</li>
    <li><strong>Filter networks:</strong> In power supplies and audio circuits to smooth and shape signals.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Capacitor Color Codes</h2>
  <p className="mb-4">
    Many small capacitors, especially ceramic types, use a numerical color or digit code to indicate capacitance. For example, a code like “104” means 10 followed by 4 zeros in picofarads (100,000 pF or 100 nF).
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li><strong>1st & 2nd digits:</strong> Base number.</li>
    <li><strong>3rd digit:</strong> Multiplier in powers of 10.</li>
    <li><strong>Units:</strong> Typically picofarads (pF).</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Temperature and Voltage Effects on Capacitance</h2>
  <p className="mb-4">
    Capacitor behavior can be affected by temperature and applied voltage. In many dielectric materials:
  </p>
  <ul className="list-disc pl-6 mb-6">
    <li>Capacitance may increase or decrease with rising temperature.</li>
    <li>High voltages can reduce the effective capacitance or even damage the dielectric layer.</li>
    <li>Temperature stability is critical in precision electronic circuits.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mb-2">Capacitor Selection Tips</h2>
  <ul className="list-disc pl-6 mb-6">
    <li>Choose voltage rating at least 20–30% higher than your circuit voltage.</li>
    <li>Select capacitor type based on application (e.g., ceramic for stability, electrolytic for bulk energy).</li>
    <li>Consider ESR for high-frequency circuits or power supply filtering.</li>
    <li>Match capacitor tolerance with your design’s precision requirements.</li>
  </ul>
</section>
</Card>
    </>
  );
};

export default CapacitorInfo;
