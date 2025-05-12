import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";


const Equation = ({ children }) => (
  <div className="my-2 px-4 py-2 bg-gray-100 dark:bg-transparent border rounded text-sm font-mono">
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <div className="my-6">
    <h2 className="text-xl font-semibold mb-2 dark:text-white">{title}</h2>
    <div className="text-base text-gray-800 dark:text-white">{children}</div>
  </div>
);

const ElectricCurrent = () => {
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
                                                <Link to="/electrical/basic-terms">Basic Electrical terms</Link>
                                              </BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                              <BreadcrumbPage>Electrical current</BreadcrumbPage>
                                            </BreadcrumbItem>
                                          </BreadcrumbList>
                                      </Breadcrumb>
<Card className="mx-auto max-w-[900px]">
    <div className="max-w-3xl p-6 bg-white/40 dark:bg-transparent dark:text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Electric Current</h1>

      <Section title="Definition">
        Electrical current is the flow rate of electric charge in an electric field, usually in an electrical circuit.
        <br />
        <br />
        <strong>Water Pipe Analogy:</strong> Visualize electric current like water flowing through a pipe.
        <br />
        <br />
        The electrical current is measured in ampere (A).
      </Section>

      <Section title="Electric Current Calculation">
        Electrical current is measured by the rate of electric charge flow in an electrical circuit:
        <Equation>i(t) = dQ(t) / dt</Equation>
        <ul className="list-disc list-inside">
          <li><strong>i(t)</strong>: Momentary current at time t (A)</li>
          <li><strong>Q(t)</strong>: Electric charge (C)</li>
          <li><strong>t</strong>: Time (s)</li>
        </ul>
        <br />
        When the current is constant:
        <Equation>I = ΔQ / Δt</Equation>
        <ul className="list-disc list-inside">
          <li><strong>I</strong>: Constant current (A)</li>
          <li><strong>ΔQ</strong>: Charge flow in coulombs (C)</li>
          <li><strong>Δt</strong>: Time interval (s)</li>
        </ul>
        <br />
        <strong>Example:</strong>
        <br />
        5 C flows through a resistor for 10 s:
        <Equation>I = ΔQ / Δt = 5C / 10s = 0.5A</Equation>
      </Section>

      <Section title="Current Calculation with Ohm's Law">
        The current through a resistor is given by:
        <Equation>IR = VR / R</Equation>
        <ul className="list-disc list-inside">
          <li><strong>IR</strong>: Current (A)</li>
          <li><strong>VR</strong>: Voltage (V)</li>
          <li><strong>R</strong>: Resistance (Ω)</li>
        </ul>
      </Section>

      <Section title="Current Direction">
        <table className="table-auto border mt-2">
          <thead>
            <tr>
              <th className="border px-2 py-1">Current Type</th>
              <th className="border px-2 py-1">From</th>
              <th className="border px-2 py-1">To</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1">Positive charges</td><td className="border px-2">+</td><td className="border px-2">-</td></tr>
            <tr><td className="border px-2 py-1">Negative charges</td><td className="border px-2">-</td><td className="border px-2">+</td></tr>
            <tr><td className="border px-2 py-1">Conventional direction</td><td className="border px-2">+</td><td className="border px-2">-</td></tr>
          </tbody>
        </table>
      </Section>

      <Section title="Current in Series Circuits">
        Current is equal through all resistors in series, similar to water flowing through a single pipe.
        <Equation>ITotal = I1 = I2 = I3 = ...</Equation>
        <ul className="list-disc list-inside">
          <li><strong>ITotal</strong>: Total current (A)</li>
          <li><strong>I1, I2, I3...</strong>: Currents through each resistor</li>
        </ul>
      </Section>

      <Section title="Current in Parallel Circuits">
        Current splits among parallel paths like water through parallel pipes.
        <Equation>ITotal = I1 + I2 + I3 + ...</Equation>
        <ul className="list-disc list-inside">
          <li><strong>ITotal</strong>: Total current (A)</li>
          <li><strong>I1, I2, I3...</strong>: Currents through each load</li>
        </ul>
      </Section>

      <Section title="Current Divider">
        Current division in parallel resistors:
        <Equation>RT = 1 / (1 / R2 + 1 / R3)</Equation>
        <Equation>I1 = IT × RT / (R1 + RT)</Equation>
      </Section>

      <Section title="Kirchhoff's Current Law (KCL)">
        A node is where multiple circuit elements meet. KCL states:
        <Equation>∑ Ik = 0</Equation>
        The algebraic sum of currents entering a node is zero.
      </Section>

      <Section title="Alternating Current (AC)">
        AC is produced by sinusoidal voltage sources.
        <Equation>IZ = VZ / Z</Equation>
        <ul className="list-disc list-inside">
          <li><strong>IZ</strong>: Current (A)</li>
          <li><strong>VZ</strong>: Voltage (V)</li>
          <li><strong>Z</strong>: Impedance (Ω)</li>
        </ul>
      </Section>

      <Section title="Angular Frequency">
        <Equation>ω = 2πf</Equation>
        <ul className="list-disc list-inside">
          <li><strong>ω</strong>: Angular frequency (rad/s)</li>
          <li><strong>f</strong>: Frequency (Hz)</li>
        </ul>
      </Section>

      <Section title="Momentary Current in AC">
        <Equation>i(t) = Ipeak × sin(ωt + θ)</Equation>
        <ul className="list-disc list-inside">
          <li><strong>Ipeak</strong>: Peak current (A)</li>
          <li><strong>ω</strong>: Angular frequency (rad/s)</li>
          <li><strong>t</strong>: Time (s)</li>
          <li><strong>θ</strong>: Phase angle (rad)</li>
        </ul>
      </Section>

      <Section title="RMS & Peak-to-Peak Current">
        <Equation>Irms = Ipeak / √2 ≈ 0.707 × Ipeak</Equation>
        <Equation>Ip-p = 2 × Ipeak</Equation>
        RMS is the effective value; peak-to-peak is the full swing.
      </Section>

      <Section title="Current Measurement">
        Current is measured using an ammeter in series with the circuit.
        <ul className="list-disc list-inside">
          <li>The ammeter allows all current to flow through it.</li>
          <li>It has very low resistance to avoid affecting the measurement.</li>
        </ul>
      </Section>
    </div>
    <Section title="Current and Power">
  The power dissipated in a circuit element is the product of the current and the voltage across it. This relationship is particularly important in understanding energy consumption and losses in electrical systems.
  <Equation>P = I × V</Equation>
  <ul className="list-disc list-inside">
    <li><strong>P</strong>: Power (W)</li>
    <li><strong>I</strong>: Current (A)</li>
    <li><strong>V</strong>: Voltage (V)</li>
  </ul>
  <p>
    For resistive elements, the power dissipated is converted into heat. The equation can also be expressed in terms of resistance using Ohm's law, as follows:
  </p>
  <Equation>P = I² × R</Equation>
  <ul className="list-disc list-inside">
    <li><strong>I</strong>: Current (A)</li>
    <li><strong>R</strong>: Resistance (Ω)</li>
  </ul>
  <p>
    Power loss in resistors is a critical factor in circuit design, especially in power electronics and energy-efficient systems.
  </p>
</Section>

<Section title="Energy Consumption and Cost">
  Electrical energy consumption is directly related to the current flowing through devices. The energy consumed can be calculated as:
  <Equation>E = P × t</Equation>
  <ul className="list-disc list-inside">
    <li><strong>E</strong>: Energy (Joules, J)</li>
    <li><strong>P</strong>: Power (W)</li>
    <li><strong>t</strong>: Time (s)</li>
  </ul>
  <p>
    For practical applications like household electricity consumption, energy is often measured in kilowatt-hours (kWh). For example:
  </p>
  <Equation>E = P × t = 1000W × 1h = 1 kWh</Equation>
  <p>
    The cost of electricity is typically calculated based on the total energy consumed, where the cost per kilowatt-hour is provided by the utility company.
  </p>
</Section>

<Section title="Superconductors and Current">
  Superconductivity is a phenomenon where certain materials exhibit zero electrical resistance below a critical temperature. When a material becomes superconducting, it can carry a current indefinitely without any energy loss.
  <p>
    Superconductors are used in high-efficiency applications like magnetic resonance imaging (MRI) machines, particle accelerators, and advanced power transmission lines. The absence of resistance means that even extremely high currents can be sustained without heating the material, making them ideal for power applications.
  </p>
  <p>
    The current-carrying capacity of superconductors depends on their critical current density, which is the maximum current per unit area they can handle before transitioning out of the superconducting state.
  </p>
</Section>

<Section title="Temperature Effects on Current">
  The temperature of a conductor can affect the flow of current through it. Generally, as the temperature of a conductor increases, its resistance also increases, which in turn reduces the current for a given voltage.
  <p>
    The relationship between resistance and temperature is expressed by:
  </p>
  <Equation>R(T) = R₀(1 + α(T - T₀))</Equation>
  <ul className="list-disc list-inside">
    <li><strong>R(T)</strong>: Resistance at temperature T (Ω)</li>
    <li><strong>R₀</strong>: Resistance at reference temperature T₀ (Ω)</li>
    <li><strong>α</strong>: Temperature coefficient of resistance (1/°C)</li>
    <li><strong>T</strong>: Temperature (°C)</li>
  </ul>
  <p>
    This equation shows that materials with a high temperature coefficient of resistance (like copper) experience a significant increase in resistance as they heat up.
  </p>
</Section>

<Section title="Electromagnetic Fields and Electric Current">
  When an electric current flows through a conductor, it creates an associated magnetic field around it. This principle is the basis for many electrical devices such as electric motors, transformers, and inductors.
  <p>
    The strength of the magnetic field (B) created by a current is given by Ampère’s law, which relates the magnetic field to the current and the geometry of the conductor:
  </p>
  <Equation>B = (μ₀ × I) / (2π × r)</Equation>
  <ul className="list-disc list-inside">
    <li><strong>μ₀</strong>: Permeability of free space (4π × 10⁻⁷ T·m/A)</li>
    <li><strong>I</strong>: Current (A)</li>
    <li><strong>r</strong>: Distance from the conductor (m)</li>
  </ul>
  <p>
    The interaction between electric currents and magnetic fields is fundamental to the operation of many electrical devices, such as electric motors and solenoids.
  </p>
</Section>

<Section title="Induced Current and Faraday's Law">
  Faraday’s law of induction describes how a changing magnetic field can induce a current in a conductor. This phenomenon is the basis for transformers, electric generators, and inductive coils.
  <Equation>ε = -dΦ/dt</Equation>
  <ul className="list-disc list-inside">
    <li><strong>ε</strong>: Induced electromotive force (emf) (V)</li>
    <li><strong>Φ</strong>: Magnetic flux (Weber, Wb)</li>
    <li><strong>t</strong>: Time (s)</li>
  </ul>
  <p>
    Faraday’s law shows that the induced current is proportional to the rate of change of the magnetic flux. This principle is used in electric generators, where mechanical energy is converted to electrical energy by rotating a coil in a magnetic field.
  </p>
</Section>

<Section title="Lenz's Law and Conservation of Energy">
  Lenz's law states that the direction of the induced current will oppose the change in magnetic flux that caused it. This law is a consequence of the conservation of energy, ensuring that the system resists changes that would violate energy conservation.
  <Equation>ε = -dΦ/dt</Equation>
  <p>
    The negative sign in Faraday’s law indicates the opposing nature of the induced current, which aligns with Lenz’s law. For example, in a generator, as the magnetic flux through the coil increases, the induced current creates a magnetic field that opposes the motion of the coil, providing a resistive force.
  </p>
</Section>

<Section title="Current in Capacitors">
  Capacitors are electrical components that store energy in the form of an electric field. When connected to a circuit, the current flowing into a capacitor is related to its rate of charge:
  <Equation>I = C × (dV/dt)</Equation>
  <ul className="list-disc list-inside">
    <li><strong>I</strong>: Current (A)</li>
    <li><strong>C</strong>: Capacitance (F)</li>
    <li><strong>dV/dt</strong>: Rate of change of voltage (V/s)</li>
  </ul>
  <p>
    The current in a charging capacitor is highest when the voltage is changing most rapidly and decreases as the capacitor becomes charged. After a capacitor is fully charged, no more current flows through it in a DC circuit.
  </p>
</Section>

<Section title="Current in Inductors">
  Inductors are components that store energy in the form of a magnetic field. The current through an inductor is related to the rate of change of the voltage across it:
  <Equation>V = L × (dI/dt)</Equation>
  <ul className="list-disc list-inside">
    <li><strong>V</strong>: Voltage across the inductor (V)</li>
    <li><strong>L</strong>: Inductance (H)</li>
    <li><strong>dI/dt</strong>: Rate of change of current (A/s)</li>
  </ul>
  <p>
    When the current through an inductor changes, the changing magnetic field induces a voltage that opposes the change in current, a phenomenon known as self-induction. This property is used in transformers, inductors, and other devices.
  </p>
</Section>

<Section title="Current in Real-World Applications">
  Electric current has numerous applications in our daily lives and in various industries. From powering household appliances to driving complex industrial machinery, understanding current is vital for creating efficient electrical systems.
  <p>
    Some common applications include:
  </p>
  <ul className="list-disc list-inside">
    <li>Powering motors in fans, pumps, and HVAC systems.</li>
    <li>Providing electrical energy to devices like lights, televisions, and computers.</li>
    <li>Supporting the operation of electric vehicles (EVs) and charging stations.</li>
    <li>Enabling wireless communication systems through the use of radio waves, which are generated by alternating current in antennas.</li>
  </ul>
</Section>
<Section title="Current and Magnetic Fields">
  When an electric current flows through a conductor, it generates a magnetic field around the conductor. This phenomenon is essential for many applications, including electromagnets, electric motors, and transformers.
  <p>
    The direction of the magnetic field can be determined using the right-hand rule: if you curl the fingers of your right hand around the conductor with your thumb pointing in the direction of current flow, your fingers will curl in the direction of the magnetic field.
  </p>
  <p>
    The magnetic field around a conductor depends on both the current and the distance from the conductor. The strength of the magnetic field (B) around a straight conductor carrying a current is given by:
  </p>
  <Equation>B = μ₀ × I / (2π × r)</Equation>
  <ul className="list-disc list-inside">
    <li><strong>μ₀</strong>: Permeability of free space (4π × 10⁻⁷ T·m/A)</li>
    <li><strong>I</strong>: Current (A)</li>
    <li><strong>r</strong>: Distance from the conductor (m)</li>
  </ul>
  <p>
    This formula shows that the magnetic field is directly proportional to the current and inversely proportional to the distance from the conductor. The magnetic field strength increases with higher current and decreases as you move farther from the conductor.
  </p>
</Section>

<Section title="Electric Current in Conductors and Insulators">
  Conductors are materials that allow electric current to flow easily through them, while insulators resist the flow of electric current. Conductors typically have many free electrons, which can move freely under the influence of an electric field, while insulators have very few free electrons.
  <p>
    Common conductors include metals like copper, aluminum, and gold, while common insulators include rubber, glass, and plastic.
  </p>
  <p>
    The difference in behavior between conductors and insulators is due to their atomic structure. In conductors, the outer electrons of atoms are loosely bound and can move freely, whereas in insulators, the electrons are tightly bound to their atoms and cannot move easily.
  </p>
  <p>
    The resistance of a material depends on its composition, temperature, and dimensions. For example, copper is a better conductor than aluminum due to its lower resistivity.
  </p>
</Section>

<Section title="Current and Resistance in Different Materials">
  Different materials exhibit different resistances, which affects the current that can flow through them. This property is described by Ohm's law:
  <Equation>V = I × R</Equation>
  <ul className="list-disc list-inside">
    <li><strong>V</strong>: Voltage (V)</li>
    <li><strong>I</strong>: Current (A)</li>
    <li><strong>R</strong>: Resistance (Ω)</li>
  </ul>
  <p>
    The resistance of a material is influenced by its resistivity (ρ), which is a fundamental property of the material. The resistance of a conductor is given by:
  </p>
  <Equation>R = ρ × (L / A)</Equation>
  <ul className="list-disc list-inside">
    <li><strong>ρ</strong>: Resistivity of the material (Ω·m)</li>
    <li><strong>L</strong>: Length of the conductor (m)</li>
    <li><strong>A</strong>: Cross-sectional area of the conductor (m²)</li>
  </ul>
  <p>
    The resistance increases with the length of the conductor and decreases with the cross-sectional area. Materials with high resistivity, such as rubber, have a high resistance, while materials like copper have low resistivity and therefore low resistance.
  </p>
</Section>

<Section title="Electric Field and Current Flow">
  The flow of electric current through a conductor is driven by an electric field. An electric field is created when a voltage is applied across the conductor. The electric field causes the free electrons in the conductor to move, which constitutes the current.
  <p>
    The relationship between electric field (E), voltage (V), and distance (d) is given by:
  </p>
  <Equation>E = V / d</Equation>
  <ul className="list-disc list-inside">
    <li><strong>E</strong>: Electric field (V/m)</li>
    <li><strong>V</strong>: Voltage (V)</li>
    <li><strong>d</strong>: Distance between the two points (m)</li>
  </ul>
  <p>
    This formula shows that the electric field is directly proportional to the voltage and inversely proportional to the distance. The stronger the electric field, the greater the current that flows through the conductor, assuming the resistance remains constant.
  </p>
</Section>

<Section title="Drift Velocity and Current">
  The electrons in a conductor move randomly due to thermal energy, but when an electric field is applied, they drift in a particular direction, causing a net flow of charge. This net flow is what we observe as electric current.
  <p>
    The drift velocity is the average velocity of the free electrons in the direction of the applied electric field. It is typically very small compared to the random thermal velocity of electrons.
  </p>
  <p>
    The current (I) is related to the drift velocity (v_d) by the equation:
  </p>
  <Equation>I = n × A × e × v_d</Equation>
  <ul className="list-disc list-inside">
    <li><strong>n</strong>: Number density of charge carriers (electrons per unit volume)</li>
    <li><strong>A</strong>: Cross-sectional area of the conductor (m²)</li>
    <li><strong>e</strong>: Charge of an electron (C)</li>
    <li><strong>v_d</strong>: Drift velocity (m/s)</li>
  </ul>
  <p>
    This equation shows that the current is proportional to the number density of charge carriers, the cross-sectional area, the charge of the carriers, and the drift velocity.
  </p>
</Section>

<Section title="Alternating Current (AC) vs Direct Current (DC)">
  Electric current can be categorized into two types: alternating current (AC) and direct current (DC).
  <p>
    In a direct current (DC) circuit, the flow of current is unidirectional, meaning the electrons move in one direction from the negative terminal to the positive terminal of the power source. DC is used in applications like batteries, solar panels, and electronic devices.
  </p>
  <p>
    In an alternating current (AC) circuit, the direction of current flow periodically reverses. AC is the form of electrical power most commonly used in homes and businesses because it is easier to transmit over long distances. The frequency of AC is measured in Hertz (Hz), and it represents the number of cycles per second.
  </p>
  <p>
    The main advantage of AC over DC is that AC can be easily transformed to different voltages using transformers, which makes it more efficient for long-distance transmission.
  </p>
</Section>

<Section title="Capacitors and Current">
  Capacitors store electrical energy in an electric field and are often used in circuits to smooth out voltage fluctuations. When a capacitor is connected to a power supply, it charges up, and the current flowing into the capacitor decreases as it approaches its maximum voltage.
  <p>
    The current in a charging capacitor is related to the voltage across it by the following equation:
  </p>
  <Equation>I(t) = C × (dV/dt)</Equation>
  <ul className="list-disc list-inside">
    <li><strong>I(t)</strong>: Current as a function of time (A)</li>
    <li><strong>C</strong>: Capacitance (F)</li>
    <li><strong>dV/dt</strong>: Rate of change of voltage with respect to time (V/s)</li>
  </ul>
  <p>
    The capacitor current is highest when the voltage is changing most rapidly and decreases as the capacitor becomes charged. In a DC circuit, once the capacitor is fully charged, the current stops flowing.
  </p>
</Section>

<Section title="Inductors and Current">
  Inductors store energy in the form of a magnetic field when current flows through them. Inductors oppose changes in current, which makes them useful in filtering applications and in circuits where current needs to be regulated.
  <p>
    The voltage across an inductor is proportional to the rate of change of current through it:
  </p>
  <Equation>V(t) = L × (dI/dt)</Equation>
  <ul className="list-disc list-inside">
    <li><strong>V(t)</strong>: Voltage across the inductor (V)</li>
    <li><strong>L</strong>: Inductance (H)</li>
    <li><strong>dI/dt</strong>: Rate of change of current with respect to time (A/s)</li>
  </ul>
  <p>
    Inductors resist sudden changes in current. If the current through an inductor increases suddenly, it generates a magnetic field, which opposes the increase in current. This is due to Lenz's law, which states that the induced voltage will always oppose the change in current.
  </p>
</Section>

    </Card>
    </>
  );
};

export default ElectricCurrent;
