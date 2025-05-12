import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

const CapacitorSymbols = () => {
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
                                      <Link to="/electrical/symbols">Electronic Symbols</Link>
                                    </BreadcrumbLink>
                                  </BreadcrumbItem>
                                  <BreadcrumbSeparator />
                                  <BreadcrumbItem>
                                    <BreadcrumbPage>Capacitor Symbols</BreadcrumbPage>
                                  </BreadcrumbItem>
                                </BreadcrumbList>
                              </Breadcrumb>
      <Card className="mx-auto max-w-[900px]">
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Capacitor Symbols</h1>
      <p className="mb-6">
        The following table lists commonly used capacitor symbols in electrical and electronic circuit diagrams. Capacitors store electrical charge and behave differently in AC and DC circuits.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Symbol</th>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Capacitor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/capacitor_symbol.png" alt="Capacitor Symbol" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Capacitor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Stores electric charge. Acts as a short circuit for AC and open circuit for DC.</td>
            </tr>

            {/* Polarized Capacitor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/polarized_capacitor_symbol.png" alt="Polarized Capacitor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Polarized Capacitor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Electrolytic capacitor with polarity sensitivity.</td>
            </tr>

            {/* Duplicate Polarized Capacitor (optional to keep for completeness) */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/polarized_capacitor_symbol.png" alt="Polarized Capacitor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Polarized Capacitor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Electrolytic capacitor with polarity sensitivity.</td>
            </tr>

            {/* Variable Capacitor */}
            <tr>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                <img src="https://www.rapidtables.com/electric/images/variable_capacitor_symbol.png" alt="Variable Capacitor" className="h-12 mx-auto" />
              </td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Variable Capacitor</td>
              <td className="px-4 py-2 border border-gray-300 dark:border-gray-600">Adjustable capacitance used in tuning circuits.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Understanding Capacitor Symbols in Schematics</h2>
  <p>
    Capacitor symbols are essential elements in electronic schematics. These symbols help engineers and technicians quickly identify the type of capacitor used and how it interacts with other components in the circuit. Understanding the variations—such as polarized, non-polarized, and variable capacitors—is crucial for both design and troubleshooting.
  </p>
</section>

<section className="mt-8 space-y-4">
  <h2 className="text-2xl font-semibold">Key Notes on Polarized Capacitors</h2>
  <p>
    Polarized capacitors, such as electrolytic or tantalum capacitors, must be connected with correct polarity. The longer leg usually denotes the positive terminal. Reversing the polarity may cause leakage, failure, or even explosion. These capacitors are commonly used in power supply filtering due to their high capacitance-to-volume ratio.
  </p>
</section>

<section className="mt-8 space-y-4">
  <h2 className="text-2xl font-semibold">When to Use Variable Capacitors</h2>
  <p>
    Variable capacitors are typically used in radio frequency (RF) applications such as tuning circuits. Their capacitance can be manually adjusted or electronically controlled, allowing users to fine-tune oscillators, filters, or antennas. They are depicted in circuit diagrams with a diagonal arrow across the capacitor symbol.
  </p>
</section>

<section className="mt-8 space-y-4">
  <h2 className="text-2xl font-semibold">How to Read Capacitor Values</h2>
  <p>
    Capacitor values are often printed on the component body and follow different notations depending on the type. Ceramic capacitors may use a three-digit code (e.g., 104 = 100,000 pF = 0.1 µF), while electrolytic capacitors display the value in microfarads (e.g., 100 µF) and voltage rating.
  </p>
</section>

<section className="mt-8 space-y-4">
  <h2 className="text-2xl font-semibold">Safety and Standards</h2>
  <p>
    Always consult datasheets and observe voltage ratings before installing capacitors. For schematic drawings, follow IEC or ANSI standard symbol sets to ensure universal understanding. In safety-critical applications, consider using capacitors rated for high temperatures and low ESR (Equivalent Series Resistance).
  </p>
</section>
<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Capacitor Symbol Variations by Standards</h2>
  <p>
    Capacitor symbols may slightly vary depending on the standard used. The two most common standards are:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>IEC (International Electrotechnical Commission):</strong> Common in European schematics. Symbols tend to be minimalist and standardized globally.</li>
    <li><strong>ANSI (American National Standards Institute):</strong> Common in North American circuit diagrams. These symbols may be more stylized, especially for variable components.</li>
  </ul>
  <p>
    Regardless of the variation, the core structure of the capacitor symbol remains recognizable: two parallel lines representing the plates, often with a curve or arrow for specialized types.
  </p>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Capacitor Placement in Circuits</h2>
  <p>
    In schematic diagrams, capacitors are placed strategically to serve different roles:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Decoupling (Bypass) Capacitors:</strong> Placed across power supply lines to smooth voltage and eliminate noise.</li>
    <li><strong>Coupling Capacitors:</strong> Placed between stages of amplifiers to block DC while allowing AC signals to pass.</li>
    <li><strong>Timing Circuits:</strong> Used with resistors to create RC circuits for timing and pulse generation.</li>
    <li><strong>Filtering Capacitors:</strong> Integrated into rectifiers and power supplies to reduce ripple voltage.</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Choosing the Right Capacitor</h2>
  <p>
    When interpreting or designing from a circuit symbol, consider the following criteria:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Capacitance Value:</strong> Determines how much charge the capacitor can store.</li>
    <li><strong>Voltage Rating:</strong> Must be higher than the maximum circuit voltage to avoid failure.</li>
    <li><strong>Type:</strong> Choose electrolytic for high capacitance, ceramic for stability, film for precision, etc.</li>
    <li><strong>Polarity:</strong> Be cautious with polarized capacitors like electrolytics; they must be connected correctly.</li>
    <li><strong>Size and Tolerance:</strong> Important for fitting into PCBs and ensuring circuit accuracy.</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Real-World Applications of Capacitors</h2>
  <p>
    Capacitors are used in virtually every electronic device. Here are some common applications:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Power Supplies:</strong> Smoothing out the output from rectifiers.</li>
    <li><strong>Audio Equipment:</strong> Filtering and signal coupling.</li>
    <li><strong>TVs and Radios:</strong> Frequency tuning in LC circuits.</li>
    <li><strong>Camera Flashes:</strong> Storing energy to release in a quick burst.</li>
    <li><strong>Electric Vehicles:</strong> Energy storage for regenerative braking systems.</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Tips for Interpreting Schematics</h2>
  <p>
    When you come across a capacitor symbol in a circuit diagram:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Look for polarity indicators like “+” or shaded lines for electrolytic types.</li>
    <li>Check if the symbol includes an arrow — this usually means it’s variable.</li>
    <li>Pay attention to the surrounding components; this gives clues about the capacitor’s function.</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Understanding Capacitor Behavior in Circuits</h2>
  <p>
    Capacitors behave differently depending on whether the circuit is powered by AC or DC. In DC circuits, once fully charged, a capacitor blocks further current flow, acting like an open circuit. In contrast, in AC circuits, capacitors continuously charge and discharge, creating a flow of alternating current.
  </p>
  <p>
    This unique behavior is used in timing circuits, filters, and phase-shift applications. Understanding these principles is essential when interpreting capacitor symbols and their functional role in a circuit.
  </p>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Choosing Between Fixed and Variable Capacitors</h2>
  <p>
    When designing circuits or interpreting schematics, it’s important to recognize whether the capacitor is fixed or variable:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Fixed Capacitors</strong> have a constant capacitance and are used in most general-purpose circuits.</li>
    <li><strong>Variable Capacitors</strong> allow adjustment and are used in tuning applications like radio receivers and transmitters.</li>
  </ul>
  <p>
    The symbol for a variable capacitor usually includes a diagonal arrow across the plates, indicating adjustability.
  </p>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Polarity and Safety Notes</h2>
  <p>
    Always pay attention to polarity when interpreting symbols for polarized capacitors. Connecting them backward in a circuit can lead to:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Leakage current</li>
    <li>Electrolyte boiling and rupture</li>
    <li>Explosion or fire in extreme cases</li>
  </ul>
  <p>
    Most polarized capacitors (like electrolytic or tantalum types) will have a “+” sign in the circuit or be drawn with one curved plate indicating the negative side.
  </p>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">How to Read Capacitor Values on Diagrams</h2>
  <p>
    Capacitors on schematics often include their value next to the symbol (e.g., “10μF” or “100nF”). Units of measurement:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>pF</strong> – Picofarad (10⁻¹² F)</li>
    <li><strong>nF</strong> – Nanofarad (10⁻⁹ F)</li>
    <li><strong>μF</strong> – Microfarad (10⁻⁶ F)</li>
    <li><strong>mF</strong> – Millifarad (rare, 10⁻³ F)</li>
  </ul>
  <p>
    Always consider the voltage rating and tolerance of the capacitor in real-world implementation.
  </p>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Applications Where Symbols Matter</h2>
  <p>
    Knowing the symbol and type of capacitor is critical in the following areas:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Audio Circuits:</strong> Capacitors are used for coupling and filtering. The value and symbol help determine audio quality.</li>
    <li><strong>Switch Mode Power Supplies (SMPS):</strong> Polarized capacitors handle ripple currents. Symbols guide installation direction.</li>
    <li><strong>RF Circuits:</strong> Variable capacitors are used for tuning frequencies. Misidentifying symbols can lead to detuning.</li>
    <li><strong>Motor Starters:</strong> Power capacitors correct power factor, and knowing their ratings and polarity is essential for safety.</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">International Symbol Variations</h2>
  <p>
    Capacitor symbols may slightly vary depending on the standard followed in schematic drawings. For instance, the **IEC (International Electrotechnical Commission)** symbols are more geometric and standardized, while the **ANSI (American National Standards Institute)** symbols can be more illustrative.
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>IEC symbols typically use two straight lines (non-polarized) or one curved line (polarized).</li>
    <li>ANSI symbols may show polarity with "+" and use curved or straight plates interchangeably.</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">SMD Capacitor Markings</h2>
  <p>
    Surface-Mount Device (SMD) capacitors often don’t have visible value markings due to their small size. However, when they do, values are shown in code form (e.g., "104" = 100nF). Symbol-wise, they're often marked by a rectangle or oblong shape on PCB layouts.
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>104</strong> = 100,000 pF or 100 nF</li>
    <li><strong>223</strong> = 22,000 pF or 22 nF</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Tantalum Capacitor Symbols</h2>
  <p>
    Tantalum capacitors are polarized and more stable than standard electrolytics. Their symbols often include a **plus sign (+)** on the positive terminal or are shown with one straight and one curved plate.
  </p>
  <p>
    On physical packages, the positive leg is usually marked with a stripe or a "+" label.
  </p>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Capacitor Symbol Best Practices</h2>
  <p>
    When drawing or reading schematics:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Always check if the symbol indicates polarity.</li>
    <li>Include capacitance value and voltage rating next to the symbol.</li>
    <li>Use directional orientation arrows when working with variable capacitors.</li>
    <li>Ensure symbol size is consistent with surrounding components for clarity.</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">How to Identify a Capacitor Symbol in a Circuit</h2>
  <p>
    Capacitors are typically placed across power rails for filtering, between signal paths for coupling, or in feedback networks. In schematics:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Across power lines:</strong> Used to stabilize voltage (bypass capacitor)</li>
    <li><strong>Between IC pins and ground:</strong> Decoupling unwanted noise</li>
    <li><strong>In oscillator circuits:</strong> Paired with inductors or crystals</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Capacitor Symbols in Simulations and CAD Tools</h2>
  <p>
    In EDA tools like KiCad, Eagle, or LTspice, capacitor symbols are customizable. When selecting them:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Choose between "C", "C_POL", or "C_VAR" based on your needs.</li>
    <li>Apply proper footprints for through-hole or SMD versions.</li>
    <li>Verify value, package type, and manufacturer part number before exporting BOM.</li>
  </ul>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Educational Tip</h2>
  <p>
    For students, it’s helpful to draw both the symbol and the real-life image of a capacitor when studying. Practice sketching standard, polarized, and variable capacitor symbols to recognize them easily in exams or lab work.
  </p>
</section>

<section className="mt-10 space-y-4">
  <h2 className="text-2xl font-semibold">Conclusion</h2>
  <p>
    Capacitor symbols are a fundamental part of any electrical schematic. They visually convey not just the presence of capacitance, but the type, polarity, and behavior expected from the component. Understanding these symbols allows you to build, simulate, and troubleshoot circuits more effectively.
  </p>
</section>
<section className="space-y-4">
  <h2 className="text-xl font-semibold">Capacitor Markings and Labeling</h2>
  <p>
    In practical circuit design, understanding capacitor symbols is only part of the equation. Real-world capacitors come with a variety of markings indicating their capacitance, voltage rating, tolerance, and sometimes the type of dielectric material used. For instance, a ceramic capacitor might be marked “104,” which represents 100,000 pF or 0.1 µF. The first two digits (10) are the significant figures, and the third (4) is the multiplier (10⁴ pF). Voltage ratings, typically printed separately, might read "50V", "250V", etc.
  </p>
  <p>
    Electrolytic capacitors usually have their capacitance value and voltage printed directly in microfarads and volts, e.g., "10µF 16V". It's important to match the voltage rating with the requirements of your circuit. Exceeding the rated voltage can damage the capacitor or cause it to explode in the case of polarized electrolytics.
  </p>
</section>

<section className="space-y-4">
  <h2 className="text-xl font-semibold">Schematic Variations Across Standards</h2>
  <p>
    While the symbols shown earlier are widely accepted, some differences exist depending on the standard being followed—typically IEC (International Electrotechnical Commission) vs ANSI (American National Standards Institute). For example, in ANSI schematics, the symbol for a non-polarized capacitor features two parallel lines, while the IEC version might use one curved and one straight line. Similarly, polarized capacitors may show a plus (+) sign next to the positive terminal or simply use the curved line convention.
  </p>
  <p>
    These variations are especially important when reading or interpreting circuit diagrams from different sources, such as international datasheets or repair manuals for imported equipment. Familiarity with both symbol sets helps engineers work effectively across different regions and industries.
  </p>
</section>

<section className="space-y-4">
  <h2 className="text-xl font-semibold">Capacitor Types in Depth</h2>
  <p>
    Capacitors are classified into several major families based on the dielectric material used. Each type affects the electrical behavior and practical applications:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>
      <strong>Ceramic Capacitors:</strong> Widely used, especially in decoupling and filtering applications. They are compact, inexpensive, and non-polarized. Available in Class I (high stability) and Class II/III (higher capacitance, lower stability).
    </li>
    <li>
      <strong>Electrolytic Capacitors:</strong> Provide high capacitance values in a small volume, but are polarized and have relatively large tolerances. Common in power supply filtering.
    </li>
    <li>
      <strong>Tantalum Capacitors:</strong> Offer better stability and ESR (Equivalent Series Resistance) than aluminum electrolytics, but are sensitive to overvoltage and reverse polarity.
    </li>
    <li>
      <strong>Film Capacitors:</strong> Known for high precision, low ESR, and excellent long-term stability. Often used in audio and high-frequency applications.
    </li>
    <li>
      <strong>Supercapacitors (Ultracapacitors):</strong> Provide very high capacitance for energy storage or backup power but are used in low-voltage systems due to low voltage ratings.
    </li>
  </ul>
</section>

<section className="space-y-4">
  <h2 className="text-xl font-semibold">Capacitor Polarity and Circuit Behavior</h2>
  <p>
    The polarity of a capacitor can have a significant effect on circuit behavior. Non-polarized capacitors, such as ceramic or film types, can be inserted in either direction. Polarized capacitors, like electrolytics and tantalums, must be connected correctly to avoid malfunction or damage. In DC circuits, the longer leg of an electrolytic capacitor is typically the positive terminal, and markings on the body often indicate the negative side.
  </p>
  <p>
    In AC applications, such as coupling or bypassing signals, non-polarized capacitors are favored. For high-frequency AC applications, low-inductance capacitors (e.g., surface-mount ceramics) are preferred due to reduced parasitic effects.
  </p>
</section>

<section className="space-y-4">
  <h2 className="text-xl font-semibold">Capacitors in Timing and Oscillator Circuits</h2>
  <p>
    Capacitors are essential in timing circuits where they charge and discharge at predictable rates. In combination with resistors, they determine the frequency or delay in RC circuits. For instance, in a 555 timer, a capacitor connected to the threshold pin governs the timing interval for monostable or astable operation. The time constant is given by τ = RC, where R is resistance and C is capacitance.
  </p>
  <p>
    In oscillators, such as Colpitts or LC circuits, capacitors define the oscillation frequency along with inductors. Variations in capacitance or external tuning allow these circuits to generate stable frequency outputs for use in radios, clocks, and other electronic systems.
  </p>
</section>

<section className="space-y-4">
  <h2 className="text-xl font-semibold">Capacitors in Power Supply Design</h2>
  <p>
    Capacitors play a vital role in power regulation. Bulk electrolytic capacitors smooth out rectified AC voltage in linear power supplies, while smaller ceramic capacitors filter out high-frequency switching noise in SMPS (Switch Mode Power Supplies). The use of bypass and decoupling capacitors is critical in digital circuits to prevent voltage sag or spikes caused by sudden current draws from ICs.
  </p>
  <p>
    Designers often place a 0.1 µF ceramic capacitor near each microcontroller or IC pin to reduce electromagnetic interference (EMI) and improve signal stability. In high-current systems, combinations of different capacitors—electrolytic for bulk, ceramic for high-frequency—are used in parallel to cover a wide frequency range.
  </p>
</section>

<section className="space-y-4">
  <h2 className="text-xl font-semibold">Failure Modes and Reliability</h2>
  <p>
    Capacitors are generally reliable but can fail due to aging, overvoltage, incorrect polarity, or environmental stress. Electrolytic capacitors are prone to drying out, leading to a drop in capacitance and increased ESR. Tantalum capacitors can short-circuit violently when exposed to reverse voltage. Ceramic capacitors may crack under mechanical stress, particularly if not mounted properly on a PCB.
  </p>
  <p>
    Engineers often derate capacitors—selecting components rated for a higher voltage than the circuit will apply—to improve lifespan and reduce risk of failure. Environmental sealing, conformal coating, or using ruggedized capacitors may be required in aerospace or automotive applications.
  </p>
</section>


</Card>
    </>
  );
};

export default CapacitorSymbols;
