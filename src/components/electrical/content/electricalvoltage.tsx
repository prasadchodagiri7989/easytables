import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";


const countries = [
  { country: "Australia", voltage: "230V", frequency: "50Hz" },
  { country: "Brazil", voltage: "110V", frequency: "60Hz" },
  { country: "Canada", voltage: "120V", frequency: "60Hz" },
  { country: "China", voltage: "220V", frequency: "50Hz" },
  { country: "France", voltage: "230V", frequency: "50Hz" },
  { country: "Germany", voltage: "230V", frequency: "50Hz" },
  { country: "India", voltage: "230V", frequency: "50Hz" },
  { country: "Ireland", voltage: "230V", frequency: "50Hz" },
  { country: "Israel", voltage: "230V", frequency: "50Hz" },
  { country: "Italy", voltage: "230V", frequency: "50Hz" },
  { country: "Japan", voltage: "100V", frequency: "50/60Hz" },
  { country: "New Zealand", voltage: "230V", frequency: "50Hz" },
  { country: "Philippines", voltage: "220V", frequency: "60Hz" },
  { country: "Russia", voltage: "220V", frequency: "50Hz" },
  { country: "South Africa", voltage: "220V", frequency: "50Hz" },
  { country: "Thailand", voltage: "220V", frequency: "50Hz" },
  { country: "UK", voltage: "230V", frequency: "50Hz" },
  { country: "USA", voltage: "120V", frequency: "60Hz" }
];

const Equation = ({ children }) => (
  <div className="my-2 px-4 py-2 bg-gray-100 rounded text-sm font-mono dark:bg-transparent border">{children}</div>
);

const Section = ({ title, children }) => (
  <div className="my-6 ">
    <h2 className="text-xl font-semibold mb-2 dark:text-white">{title}</h2>
    <div className="text-base text-gray-800 dark:text-white">{children}</div>
  </div>
);

const ElectricalVoltage = () => {
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
                                          <BreadcrumbPage>Electrical Voltage</BreadcrumbPage>
                                        </BreadcrumbItem>
                                      </BreadcrumbList>
                                  </Breadcrumb>
<Card className="mx-auto max-w-[900px] p-[20px]">

<div className="max-w-3xl p-6  dark:text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Electrical Voltage</h1>

      <Section title="Definition">
        Electrical voltage is defined as electric potential difference between two points of an electric field.
        <br />
        Using water pipe analogy, voltage is like the height difference that makes water flow down.
        <Equation>V = φ₂ - φ₁</Equation>
        V is voltage between point 2 and 1 (in volts).<br />
        φ₂ and φ₁ are electric potentials at points 2 and 1 respectively.
      </Section>

      <Section title="Voltage Formula (Energy/Charge)">
        <Equation>V = E / Q</Equation>
        V - voltage (V) <br />
        E - energy in joules (J) <br />
        Q - electric charge in coulombs (C)
      </Section>

      <Section title="Voltage in Series">
        Total voltage = sum of voltages.
        <Equation>Vₜ = V₁ + V₂ + V₃ + ...</Equation>
      </Section>

      <Section title="Voltage in Parallel">
        Voltage across each parallel element is the same.
        <Equation>Vₜ = V₁ = V₂ = V₃ = ...</Equation>
      </Section>

      <Section title="Voltage Divider">
        <Equation>Vᵢ = Vₜ × (Rᵢ / (R₁ + R₂ + R₃ + ...))</Equation>
      </Section>

      <Section title="Kirchhoff's Voltage Law (KVL)">
        The sum of all voltage drops in a loop equals zero.
        <Equation>∑ Vₖ = 0</Equation>
      </Section>

      <Section title="DC Circuit (Ohm's Law)">
        <Equation>Vᴿ = Iᴿ × R</Equation>
        Vᴿ - voltage drop (V)<br />
        Iᴿ - current (A)<br />
        R - resistance (Ω)
      </Section>

      <Section title="AC Circuit (Ohm's Law)">
        <Equation>Vᶻ = Iᶻ × Z</Equation>
        Vᶻ - voltage drop (V)<br />
        Iᶻ - current (A)<br />
        Z - impedance (Ω)
      </Section>

      <Section title="Momentary Voltage">
        <Equation>v(t) = Vₘₐₓ × sin(ωt + θ)</Equation>
        v(t) - voltage at time t (V)<br />
        Vₘₐₓ - peak voltage (V)<br />
        ω - angular frequency (rad/s)<br />
        θ - phase (rad)
      </Section>

      <Section title="RMS (Effective) Voltage">
        <Equation>Vᵣₘₛ = Vₘₐₓ / √2 ≈ 0.707 × Vₘₐₓ</Equation>
      </Section>

      <Section title="Peak-to-Peak Voltage">
        <Equation>Vₚ₋ₚ = 2 × Vₘₐₓ</Equation>
      </Section>

      <Section title="Voltage Drop">
        Drop of electrical potential across a load.
      </Section>

      <Section title="Voltage Measurement">
        Measured using a **Voltmeter**, connected in **parallel** to the component. Voltmeters have high resistance.
      </Section>

      <Section title="Voltage by Country">
        Different countries use different standard AC voltages and frequencies.
        <table className="table-auto w-full mt-4 border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 py-1 text-left dark:text-black">Country</th>
              <th className="px-2 py-1 text-left dark:text-black">Voltage</th>
              <th className="px-2 py-1 text-left dark:text-black">Frequency</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(({ country, voltage, frequency }) => (
              <tr key={country} className="border-t border-gray-300">
                <td className="px-2 py-1">{country}</td>
                <td className="px-2 py-1">{voltage}</td>
                <td className="px-2 py-1">{frequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </div>
    <Section title="Types of Voltage">
  <p>
    Voltage can be classified into two major types: DC (Direct Current) voltage and AC (Alternating Current) voltage. Understanding the differences between them is crucial for various applications in electrical and electronic systems.
  </p>
  <h3 className="text-lg font-semibold">DC Voltage</h3>
  <p>
    Direct current (DC) voltage is a constant unidirectional flow of electric charge. This type of voltage is typically found in batteries, solar cells, and some types of power supplies. In a DC circuit, the voltage remains constant, and the current flows in one direction only. DC voltage is used in most low-voltage applications, such as in electronic devices, gadgets, and charging systems.
  </p>
  <h3 className="text-lg font-semibold">AC Voltage</h3>
  <p>
    Alternating current (AC) voltage, unlike DC, reverses direction periodically. The frequency of the AC voltage determines how often it reverses its direction per second. AC voltage is typically used in household and industrial power systems. It can be easily transformed from one voltage level to another using transformers, which makes it suitable for long-distance power transmission.
  </p>
</Section>

<Section title="Electric Power and Voltage Relationship">
  <p>
    The relationship between electric power (P), voltage (V), and current (I) is expressed by the formula:
  </p>
  <Equation>P = V × I</Equation>
  <p>
    Where:
    <ul className="list-disc list-inside">
      <li>P is the electrical power (W, watts).</li>
      <li>V is the voltage (V, volts).</li>
      <li>I is the current (A, amperes).</li>
    </ul>
    This formula is crucial in calculating the power consumed by electrical devices. By adjusting either voltage or current, we can control the power output in a system.
  </p>
</Section>

<Section title="Voltage Regulation">
  <p>
    Voltage regulation refers to the process of maintaining a constant output voltage despite variations in the input or load conditions. In practical systems, the voltage can fluctuate due to factors such as changes in load or supply. Voltage regulators are used to ensure that electronic devices receive a steady voltage, preventing damage and ensuring efficient operation.
  </p>
  <h3 className="text-lg font-semibold">Linear Voltage Regulators</h3>
  <p>
    Linear voltage regulators provide a stable output voltage by dissipating excess voltage as heat. These are commonly used for low power applications where precise voltage regulation is needed. However, linear regulators are not very efficient for high-power applications because they tend to waste energy as heat.
  </p>
  <h3 className="text-lg font-semibold">Switching Voltage Regulators</h3>
  <p>
    Switching voltage regulators are more efficient than linear regulators. They convert excess voltage into usable power rather than dissipating it as heat. These are widely used in high-power devices and systems, offering better energy efficiency and heat management.
  </p>
</Section>

<Section title="Voltage Across Components">
  <p>
    The voltage across various components in a circuit can vary depending on how they are connected. The most common configurations are series and parallel circuits.
  </p>
  <h3 className="text-lg font-semibold">Series Circuit</h3>
  <p>
    In a series circuit, the total voltage is divided among the components. The sum of the individual voltage drops across each component is equal to the total voltage supplied to the circuit. For example, in a series circuit with resistors, the voltage across each resistor depends on its resistance value according to Ohm’s law.
  </p>
  <h3 className="text-lg font-semibold">Parallel Circuit</h3>
  <p>
    In a parallel circuit, each component receives the same voltage as the source. The total current in the circuit is the sum of the individual currents through each parallel branch. This configuration is often used in power distribution systems, where each component must operate at the same voltage.
  </p>
</Section>

<Section title="Voltage and Safety">
  <p>
    Voltage is one of the most critical parameters in electrical safety. High voltage can cause severe electrical shock, leading to injury or even death. Electrical systems are designed to minimize risks associated with high voltage. Insulation, grounding, and circuit protection mechanisms (such as fuses and circuit breakers) are vital to ensure electrical safety.
  </p>
  <h3 className="text-lg font-semibold">High Voltage Safety</h3>
  <p>
    High-voltage systems, especially those used in industrial and utility applications, require strict safety standards. Insulated tools, personal protective equipment (PPE), and lockout/tagout procedures are used to prevent accidental contact with live high-voltage parts. These safety measures are essential to protect electrical workers and prevent electrocution.
  </p>
  <h3 className="text-lg font-semibold">Low Voltage Safety</h3>
  <p>
    While low-voltage systems (like those found in household appliances) are less dangerous, they still pose risks, especially when faulty wiring or defective components are present. Proper wiring, grounding, and circuit protection are essential to avoid hazards such as electrical fires or short circuits.
  </p>
</Section>

<Section title="Voltage in Electronics">
  <p>
    In electronics, voltage is used to control the flow of current through various components like resistors, capacitors, diodes, and transistors. Understanding the role of voltage in electronic circuits is essential for designing functional and efficient systems.
  </p>
  <h3 className="text-lg font-semibold">Resistors</h3>
  <p>
    In resistive circuits, the voltage drop across the resistor is determined by Ohm’s law. As current flows through a resistor, it encounters resistance, which results in a voltage drop that can be measured across the resistor.
  </p>
  <h3 className="text-lg font-semibold">Capacitors</h3>
  <p>
    Capacitors store voltage in the form of an electric field. When a capacitor is charged, the voltage across its terminals increases, and when it discharges, the voltage decreases. Capacitors are used in filtering, energy storage, and timing applications in electronic circuits.
  </p>
  <h3 className="text-lg font-semibold">Diodes</h3>
  <p>
    Diodes are semiconductor devices that allow current to flow in one direction only. The voltage drop across a diode is crucial for its operation, typically around 0.7V for silicon diodes. This voltage drop is important in rectifiers and voltage regulation circuits.
  </p>
</Section>

<Section title="Voltage in Power Distribution">
  <p>
    Power distribution systems use high-voltage transmission lines to transport electricity over long distances. High voltage is preferred for transmission because it reduces energy losses due to resistance in the conductors.
  </p>
  <h3 className="text-lg font-semibold">Transmission Lines</h3>
  <p>
    Electrical energy is transmitted over long distances using high-voltage transmission lines. This helps to reduce the amount of energy lost as heat due to the resistance of the conductors. At the point of consumption, the voltage is stepped down to safer levels using transformers.
  </p>
  <h3 className="text-lg font-semibold">Transformers</h3>
  <p>
    Transformers are essential components in power distribution systems. They change the voltage levels of alternating current (AC) electricity to either step it up for long-distance transmission or step it down for safe usage in homes and industries.
  </p>
</Section>

<Section title="Conclusion">
  <p>
    Voltage is one of the most fundamental concepts in electricity and electronics. Its importance spans across power generation, distribution, and the design of electronic circuits. Whether it's high-voltage power lines or the low-voltage components inside your smartphone, voltage is the driving force behind most electrical systems. Understanding how voltage works is essential for anyone working with electricity, from engineers to hobbyists.
  </p>
</Section>
<Section title="Voltage in Electrical Machines">
  <p>
    Electrical machines such as motors, transformers, and generators rely heavily on voltage to function properly. The design and performance of these machines depend on the voltage levels supplied to them. Different machines use voltage differently, either to create magnetic fields, induce motion, or generate electrical energy.
  </p>
  <h3 className="text-lg font-semibold">Electric Motors</h3>
  <p>
    Electric motors convert electrical energy into mechanical energy. The voltage applied to the motor's windings generates a magnetic field, which interacts with the rotor, causing it to rotate. The voltage determines the speed and torque of the motor. In a DC motor, the voltage directly affects the motor’s speed, while in an AC motor, the frequency of the applied voltage influences its speed.
  </p>
  <h3 className="text-lg font-semibold">Generators</h3>
  <p>
    Generators convert mechanical energy into electrical energy. The voltage output of a generator depends on the speed of rotation, the number of coils, and the magnetic field strength. Generators are commonly used in power plants and emergency backup systems. The generated voltage must be carefully controlled to meet the needs of the electrical grid or the devices that it powers.
  </p>
  <h3 className="text-lg font-semibold">Transformers</h3>
  <p>
    Transformers are electrical devices used to change the voltage levels of AC electricity. A transformer operates based on the principle of electromagnetic induction, using two coils of wire (primary and secondary) to step up or step down the voltage. High voltage is used for transmitting electricity over long distances to minimize energy losses, and then the voltage is reduced for safe use in homes and businesses.
  </p>
</Section>

<Section title="Voltage in Electrical Circuits">
  <p>
    Voltage is a critical factor in all electrical circuits. It governs how electrical current flows through the system, dictating how components like resistors, capacitors, and inductors behave in the circuit. The configuration of the circuit—whether series or parallel—affects how the voltage is distributed among the components.
  </p>
  <h3 className="text-lg font-semibold">Voltage in Series Circuits</h3>
  <p>
    In a series circuit, components are connected end to end, and the same current flows through all of them. However, the voltage is divided among the components depending on their resistance. According to Ohm’s law, the voltage drop across each component is proportional to its resistance. For example, in a series circuit with resistors, the total voltage is the sum of the voltage drops across each resistor.
  </p>
  <h3 className="text-lg font-semibold">Voltage in Parallel Circuits</h3>
  <p>
    In a parallel circuit, all components are connected across the same two points, meaning they share the same voltage. The total current, however, is the sum of the currents through each branch. Parallel circuits are commonly used in electrical systems because they allow each component to operate independently, and the failure of one component does not affect the others.
  </p>
  <h3 className="text-lg font-semibold">Voltage and Impedance in AC Circuits</h3>
  <p>
    In AC circuits, impedance (Z) plays a significant role in determining the voltage drop across a component. Impedance is a combination of resistance (R), inductance (L), and capacitance (C) that opposes the flow of current. The voltage drop across an impedance is given by Ohm’s law in the form:
  </p>
  <Equation>V = I × Z</Equation>
  <p>
    Where:
    <ul className="list-disc list-inside">
      <li>V is the voltage (V),</li>
      <li>I is the current (A),</li>
      <li>Z is the impedance (Ω),</li>
    </ul>
    Impedance varies with frequency, meaning voltage drops differently depending on the type of impedance and the frequency of the applied AC signal.
  </p>
</Section>

<Section title="Voltage Sources">
  <p>
    Voltage sources are devices or systems that supply electrical voltage to a circuit. These sources can either be constant (DC sources) or variable (AC sources). The most common examples include batteries, power supplies, and generators.
  </p>
  <h3 className="text-lg font-semibold">DC Voltage Sources</h3>
  <p>
    A DC voltage source provides a constant, unidirectional voltage. The most common DC voltage sources are batteries, which provide a fixed voltage across their terminals. DC voltage is used in applications such as powering portable devices, electronic circuits, and electric vehicles.
  </p>
  <h3 className="text-lg font-semibold">AC Voltage Sources</h3>
  <p>
    An AC voltage source generates an alternating voltage that changes direction periodically. The voltage in household outlets is an example of an AC voltage source. AC sources are used to power most home appliances, industrial machinery, and public infrastructure. The voltage typically alternates between positive and negative values, with a certain frequency (e.g., 50Hz or 60Hz).
  </p>
  <h3 className="text-lg font-semibold">Voltage Regulators</h3>
  <p>
    Voltage regulators ensure that a constant voltage is supplied to electrical circuits, regardless of fluctuations in the input voltage or load. These are critical in sensitive electronic devices where consistent voltage is necessary to maintain proper operation and prevent damage.
  </p>
</Section>

<Section title="Voltage and Energy Transfer">
  <p>
    Voltage plays a central role in the transfer of energy through electrical systems. In a circuit, energy is transferred from the voltage source to the load (e.g., a light bulb, motor, or other electrical devices). The amount of energy transferred is proportional to the voltage and the current flowing through the circuit.
  </p>
  <h3 className="text-lg font-semibold">Power Generation</h3>
  <p>
    In power generation, voltage is used to transport electrical energy over long distances. Power plants generate electrical energy through various means, including thermal, hydroelectric, and nuclear processes. This energy is then transmitted via high-voltage transmission lines to minimize energy loss. The voltage is then stepped down using transformers before being distributed to consumers.
  </p>
  <h3 className="text-lg font-semibold">Power Loss in Transmission</h3>
  <p>
    When electricity travels through transmission lines, some of the energy is lost as heat due to the resistance of the wires. Higher voltage allows for lower current in the transmission lines, which reduces the energy lost as heat. This is why electrical energy is typically transmitted at high voltages and then reduced to lower voltages for safe consumption.
  </p>
  <h3 className="text-lg font-semibold">Energy Storage</h3>
  <p>
    In energy storage systems, voltage plays a role in determining how much energy can be stored. Batteries, capacitors, and other energy storage devices store energy as electrical potential. The voltage across these devices determines how much energy can be stored, as the energy stored is proportional to the square of the voltage.
  </p>
</Section>

<Section title="Voltage and Electronics Circuit Design">
  <p>
    Voltage is a key parameter in electronic circuit design. Engineers and designers must carefully consider the voltage requirements of each component to ensure that the circuit operates efficiently and reliably. Voltage levels are chosen based on the characteristics of the components used, as well as the power requirements of the entire system.
  </p>
  <h3 className="text-lg font-semibold">Choosing Voltage Levels</h3>
  <p>
    Selecting the right voltage level is essential for the proper functioning of an electronic circuit. If the voltage is too high, it may damage sensitive components, while if it is too low, the components may not function as intended. Voltage regulators and other power management systems are often used to maintain stable voltage levels throughout the circuit.
  </p>
  <h3 className="text-lg font-semibold">Voltage Clamping and Protection</h3>
  <p>
    Voltage clamping is a technique used to limit the voltage in a circuit to a safe level. Components such as Zener diodes or transient voltage suppression diodes are commonly used to clamp voltage and protect circuits from voltage spikes that could damage sensitive components.
  </p>
</Section>

<Section title="Future of Voltage and Emerging Technologies">
  <p>
    As technology advances, the ways in which voltage is used and regulated continue to evolve. Emerging technologies such as electric vehicles (EVs), renewable energy systems, and advanced electronics are pushing the boundaries of voltage control and distribution.
  </p>
  <h3 className="text-lg font-semibold">Electric Vehicles</h3>
  <p>
    Electric vehicles are a growing market that relies heavily on battery technology. The voltage requirements for EVs are much higher than for typical consumer electronics, with voltages often exceeding 300V for the main battery packs. Managing the voltage in these high-energy systems is crucial for the safe and efficient operation of EVs.
  </p>
  <h3 className="text-lg font-semibold">Renewable Energy Systems</h3>
  <p>
    Renewable energy systems such as solar power and wind power are introducing new challenges for voltage regulation and distribution. Solar panels and wind turbines generate DC or AC voltage at varying levels, which must be converted, regulated, and distributed effectively. Voltage management is key to ensuring that these systems integrate seamlessly into existing electrical grids.
  </p>
  <h3 className="text-lg font-semibold">Smart Grids</h3>
  <p>
    Smart grids are modern electrical power systems that use digital technology to manage the distribution of electricity more efficiently. These systems rely on real-time monitoring of voltage, current, and other electrical parameters to improve grid stability, reduce power loss, and optimize energy usage. Voltage regulation plays a central role in the operation of smart grids.
  </p>
</Section>

<Section title="Conclusion">
  <p>
    Voltage is an essential concept in electrical engineering and electronic design. It drives the operation of circuits, machines, and systems, and its effective management is key to the safe and efficient functioning of electrical infrastructure. As technology continues to evolve, voltage will remain a critical factor in the development of new applications, from electric vehicles to smart grids and renewable energy systems.
  </p>
</Section>


    </Card>
    </>
  );
};

export default ElectricalVoltage;
