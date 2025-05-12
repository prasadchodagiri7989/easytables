import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

const VoltInfo = () => {
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
                <BreadcrumbPage>Volt </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
    <Card className="mx-auto max-w-[900px] p-[20px]">
    <div className="max-w-4xl mx-auto p-6 bg-white/40 dark:bg-transparent rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">Volt (V)</h1>

      <section>
        <h2 className="text-2xl font-semibold">Volt Definition</h2>
        <p>
          Volt is the electrical unit of voltage or potential difference (symbol: V). One Volt is defined as energy consumption of one joule per electric charge of one coulomb:
        </p>
        <p className="font-mono">1V = 1J/C</p>
        <p>
          One volt is also equal to current of 1 amp times resistance of 1 ohm:
        </p>
        <p className="font-mono">1V = 1A ⋅ 1Ω</p>
        <p>
          The unit is named after Alessandro Volta, an Italian physicist who invented an electric battery.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Volt Subunits and Conversion</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Symbol</th>
              <th className="border px-3 py-2">Conversion</th>
              <th className="border px-3 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">Microvolt</td>
              <td className="border px-3 py-2">μV</td>
              <td className="border px-3 py-2">1μV = 10⁻⁶V</td>
              <td className="border px-3 py-2">V = 30μV</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Millivolt</td>
              <td className="border px-3 py-2">mV</td>
              <td className="border px-3 py-2">1mV = 10⁻³V</td>
              <td className="border px-3 py-2">V = 5mV</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Volt</td>
              <td className="border px-3 py-2">V</td>
              <td className="border px-3 py-2">-</td>
              <td className="border px-3 py-2">V = 10V</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Kilovolt</td>
              <td className="border px-3 py-2">kV</td>
              <td className="border px-3 py-2">1kV = 10³V</td>
              <td className="border px-3 py-2">V = 2kV</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Megavolt</td>
              <td className="border px-3 py-2">MV</td>
              <td className="border px-3 py-2">1MV = 10⁶V</td>
              <td className="border px-3 py-2">V = 5MV</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Volts to Watts Conversion</h2>
        <p>The power in watts (W) is equal to the voltage in volts (V) times the current in amps (A):</p>
        <p className="font-mono">W = V × A</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Volts to Joules Conversion</h2>
        <p>The energy in joules (J) is equal to the voltage in volts (V) times the electric charge in coulombs (C):</p>
        <p className="font-mono">J = V × C</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Volts to Amps Conversion</h2>
        <p>The current in amps (A) is equal to the voltage in volts (V) divided by the resistance in ohms (Ω):</p>
        <p className="font-mono">A = V / Ω</p>
        <p>The current in amps (A) is also equal to the power in watts (W) divided by the voltage in volts (V):</p>
        <p className="font-mono">A = W / V</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Volts to Electron-Volts Conversion</h2>
        <p>The energy in electronvolts (eV) is equal to the potential difference or voltage in volts (V) times the electric charge in electron charges (e):</p>
        <p className="font-mono">eV = V × e</p>
        <p>where <span className="font-mono">e = 1.602176e-19 C</span></p>
      </section>
    </div>
    <section>
        <h2 className="text-2xl font-semibold">Historical Background of the Volt</h2>
        <p>
          The volt is named after the Italian physicist Alessandro Volta (1745–1827), who is recognized for his pioneering work in electricity. Volta invented the voltaic pile in 1800, which is considered the first chemical battery and an early source of continuous electrical current. His invention demonstrated that electricity could be generated chemically, overturning the idea that it only came from living beings (as previously believed in "animal electricity").
        </p>
        <p>
          The volt became an officially recognized unit in the International System of Units (SI) in the late 19th century. It provided a standardized way to describe electric potential difference, crucial for the growing fields of telegraphy, electric lighting, and power distribution during the industrial revolution.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Voltage in Electrical Circuits</h2>
        <p>
          Voltage, or electric potential difference, is the driving force that pushes electric charge through a conductor. In a closed loop, a voltage source like a battery or power supply creates an electric field that moves electrons, enabling current to flow.
        </p>
        <p>
          There are two types of voltage sources:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Direct Current (DC) Voltage:</strong> Maintains a constant polarity. Examples include batteries and solar panels.</li>
          <li><strong>Alternating Current (AC) Voltage:</strong> Changes polarity periodically, as seen in mains electricity (e.g., 120V or 230V AC).</li>
        </ul>
        <p>
          In circuit diagrams, voltage sources are depicted using standardized symbols, such as a long-short bar pair for DC and a sine wave for AC.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Voltage Drop in Circuits</h2>
        <p>
          As current flows through a circuit, voltage is "dropped" or reduced across resistive elements. This phenomenon is called voltage drop and is described by Ohm’s Law:
        </p>
        <p className="font-mono">V = I × R</p>
        <p>
          Engineers analyze voltage drops to ensure that components like LEDs and ICs receive the correct voltage. Excessive voltage drop can cause underperformance or malfunction.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Series and Parallel Configurations</h2>
        <p>
          The way components are arranged affects how voltage is distributed:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Series:</strong> Voltage is divided among components. Total voltage equals the sum of individual voltage drops.</li>
          <li><strong>Parallel:</strong> All components experience the same voltage as the source.</li>
        </ul>
        <p>
          Understanding these principles is crucial when designing circuits with specific voltage requirements for each component.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Measuring Voltage</h2>
        <p>
          Voltage is measured using a voltmeter or a digital multimeter set to voltage mode. To measure correctly:
        </p>
        <ul className="list-decimal list-inside">
          <li>Set the meter to the appropriate voltage range (AC or DC).</li>
          <li>Connect the positive probe to the higher potential point and the negative probe to the lower potential point.</li>
          <li>Read the voltage value displayed on the screen.</li>
        </ul>
        <p>
          Always measure voltage in parallel with the component, never in series.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Common Voltage Levels</h2>
        <p>
          In practice, voltage levels vary widely depending on the application:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>1.5V:</strong> Standard AA battery</li>
          <li><strong>3.3V / 5V:</strong> Logic levels in digital electronics</li>
          <li><strong>12V:</strong> Automotive and some power supplies</li>
          <li><strong>120V / 230V:</strong> Residential AC mains power</li>
          <li><strong>11kV–400kV:</strong> High-voltage transmission lines</li>
        </ul>
        <p>
          Each voltage level has unique safety and design considerations. For instance, high-voltage systems require insulation and clearance to prevent arcing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Voltage Regulation</h2>
        <p>
          Voltage regulation ensures a stable output voltage regardless of input fluctuations or load changes. Common voltage regulators include:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Linear regulators:</strong> Simple but dissipate excess energy as heat (e.g., 7805 for 5V output)</li>
          <li><strong>Switching regulators (buck/boost):</strong> Efficient and compact, used in power supplies and embedded systems</li>
        </ul>
        <p>
          Voltage regulators are essential in computers, phones, and embedded systems where voltage must stay within tight margins.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Voltage Safety</h2>
        <p>
          Although low voltages (under 50V) are generally safe, higher voltages can cause serious injury or death. Safety precautions include:
        </p>
        <ul className="list-disc list-inside">
          <li>Wearing insulated gloves when working on live circuits</li>
          <li>Using tools rated for high voltage</li>
          <li>Following lockout-tagout procedures in industrial settings</li>
          <li>Maintaining safe distances from exposed wires</li>
        </ul>
        <p>
          Even low voltages can be hazardous under the right conditions, especially in wet environments or across sensitive parts of the body.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Voltage in Capacitors and Inductors</h2>
        <p>
          In reactive components like capacitors and inductors, voltage behaves dynamically:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Capacitor:</strong> Voltage lags behind current. Stores energy in an electric field.</li>
          <li><strong>Inductor:</strong> Voltage leads current. Stores energy in a magnetic field.</li>
        </ul>
        <p>
          These time-dependent voltage behaviors are critical in AC circuits, filters, and oscillators.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Voltage and Kirchhoff’s Laws</h2>
        <p>
          Kirchhoff's Voltage Law (KVL) states that the algebraic sum of all voltages in a closed loop equals zero. This law is foundational in circuit analysis:
        </p>
        <p className="font-mono">ΣV = 0</p>
        <p>
          It reflects the conservation of energy and ensures that any voltage rise (from a power supply) is balanced by voltage drops across components.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Voltage vs. EMF</h2>
        <p>
          Although often used interchangeably, voltage and electromotive force (EMF) have subtle differences. EMF refers to the energy supplied by a source per unit charge, typically in an open circuit. Voltage, on the other hand, is the potential difference between two points in a closed circuit.
        </p>
        <p>
          For example, a battery may have an EMF of 1.5V, but the voltage across its terminals could be less when current flows due to internal resistance.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Applications of Voltage in Electrical Systems</h2>
        <p>
          Voltage plays a critical role in all electrical and electronic systems. Whether it is a small battery powering a watch or high-voltage transmission lines distributing power across cities, voltage determines the behavior of electric circuits.
        </p>
        <p>
          Low-voltage systems, such as those used in household electronics, typically operate in the range of 1.5V to 24V. Devices like mobile phones, laptops, and LED lighting depend on these small voltages for safe and efficient operation. Meanwhile, high-voltage systems, often ranging from hundreds to thousands of volts, are used in industrial equipment, power transmission lines, and medical devices like X-ray machines.
        </p>
        <p>
          Understanding the voltage levels in a system is crucial for selecting appropriate components, ensuring user safety, and maintaining energy efficiency.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Types of Voltage Sources</h2>
        <p>
          A voltage source is any device or system that provides a potential difference. There are two primary types of voltage sources: direct voltage (DC) and alternating voltage (AC).
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Direct Voltage (DC):</strong> DC sources maintain a constant polarity. Examples include batteries, DC power supplies, and solar cells.
          </li>
          <li>
            <strong>Alternating Voltage (AC):</strong> AC sources periodically reverse polarity, following a waveform such as a sine wave. The standard voltage for household AC in many countries is either 120V or 230V at 50 or 60 Hz.
          </li>
        </ul>
        <p>
          Each type has its unique advantages. DC is used where steady current is essential, while AC is preferred for efficient transmission and conversion.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Voltage Ratings of Common Devices</h2>
        <p>
          Every electronic device has a rated operating voltage. Exceeding these ratings can damage components or cause hazards. Below are some typical voltage ratings:
        </p>
        <ul className="list-disc list-inside">
          <li>AA Battery: 1.5V</li>
          <li>USB Device: 5V</li>
          <li>Laptop Charger: 19V</li>
          <li>Car Battery: 12V DC</li>
          <li>Household Outlet: 120V or 230V AC</li>
          <li>High-voltage Transmission Line: 110kV - 765kV AC</li>
        </ul>
        <p>
          Understanding voltage ratings helps ensure that equipment is used safely and efficiently.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Voltage Measurement Tools</h2>
        <p>
          Measuring voltage accurately is essential in diagnostics, troubleshooting, and circuit analysis. The most commonly used instrument is the voltmeter.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Voltmeter:</strong> A basic tool used to measure voltage between two points in a circuit. Analog voltmeters use a needle and scale, while digital voltmeters (DVMs) display readings numerically.
          </li>
          <li>
            <strong>Multimeter:</strong> A versatile instrument that combines the functionality of a voltmeter, ammeter, and ohmmeter. It can measure DC and AC voltage, as well as resistance and current.
          </li>
          <li>
            <strong>Oscilloscope:</strong> An advanced diagnostic tool that allows visualization of voltage waveforms over time. It is essential for analyzing AC signals and transient responses.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Voltage Drops in Circuits</h2>
        <p>
          As electric current flows through a circuit, voltage is "used up" across resistive components. This reduction in voltage is known as a voltage drop.
        </p>
        <p>
          According to Ohm’s Law, the voltage drop (V) across a resistor (R) with current (I) flowing through it is calculated as:
        </p>
        <p className="font-mono">V = I × R</p>
        <p>
          Voltage drop becomes a critical consideration in long wiring runs and power distribution networks, where resistance can cause significant energy losses.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Safety Considerations of Voltage</h2>
        <p>
          Voltage, especially at higher levels, can be dangerous. While current determines the actual flow of electricity through the body, voltage is the driving force behind it. Safety standards define what is considered safe:
        </p>
        <ul className="list-disc list-inside">
          <li>Voltages below 50V DC are generally considered safe for human contact under normal conditions.</li>
          <li>Household AC voltage (120V or 230V) can be fatal under certain conditions, especially when wet skin is involved.</li>
          <li>High voltage (above 600V) requires special equipment, insulation, and procedures to prevent accidents.</li>
        </ul>
        <p>
          Proper insulation, grounding, and safety barriers are crucial in systems using voltages that pose shock hazards.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Voltage in Series and Parallel Circuits</h2>
        <p>
          Understanding how voltage behaves in series and parallel circuits is fundamental in electrical design.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Series Circuit:</strong> The total voltage is divided among components. The sum of the individual voltage drops equals the source voltage.
          </li>
          <li>
            <strong>Parallel Circuit:</strong> Each branch receives the full source voltage, regardless of the number of branches.
          </li>
        </ul>
        <p>
          This knowledge helps in designing circuits with desired voltage distributions across devices.
        </p>
      </section>

    </Card>
    </>
  );
};

export default VoltInfo;
