import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


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

const ElectricPower = () => {
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
                                              <BreadcrumbPage>Electrical Power</BreadcrumbPage>
                                            </BreadcrumbItem>
                                          </BreadcrumbList>
                                      </Breadcrumb>
    <div className="max-w-3xl p-6 bg-white/40 dark:bg-transparent dark:text-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Electric Power</h1>

      <Section title="Definition">
        Electric power (<strong>P</strong>) is the rate of energy consumption over time:
        <Equation>P = E / t</Equation>
        <ul className="list-disc list-inside">
          <li><strong>P</strong>: Electric power in watts (W)</li>
          <li><strong>E</strong>: Energy in joules (J)</li>
          <li><strong>t</strong>: Time in seconds (s)</li>
        </ul>
      </Section>

      <Section title="Example">
        <p>Find the electric power of a circuit that consumes 120 joules in 20 seconds:</p>
        <Equation>E = 120J, t = 20s</Equation>
        <Equation>P = E / t = 120J / 20s = 6W</Equation>
      </Section>

      <Section title="Electric Power Calculation">
        Electric power can also be calculated using voltage, current, or resistance:
        <Equation>P = V × I</Equation>
        <Equation>P = I² × R</Equation>
        <Equation>P = V² / R</Equation>
        <ul className="list-disc list-inside">
          <li><strong>V</strong>: Voltage (V)</li>
          <li><strong>I</strong>: Current (A)</li>
          <li><strong>R</strong>: Resistance (Ω)</li>
        </ul>
      </Section>

      <Section title="Power in AC Circuits">
        For single-phase AC:
        <Equation>P = Vrms × Irms × cos(φ)</Equation>
        <br />
        For three-phase AC:
        <ul className="list-disc list-inside">
          <li>Using line-to-line voltage:
            <Equation>P₃φ = √3 × VL-L × IL × cos(φ)</Equation>
          </li>
          <li>Using line-to-neutral voltage:
            <Equation>P₃φ = 3 × VL-0 × IL × cos(φ)</Equation>
          </li>
        </ul>
      </Section>

      <Section title="Real Power (P)">
        Real power is the actual power consumed to do work:
        <Equation>P = Vrms × Irms × cos(φ)</Equation>
        <ul className="list-disc list-inside">
          <li><strong>P</strong>: Real power (W)</li>
          <li><strong>Vrms</strong>: RMS voltage (V)</li>
          <li><strong>Irms</strong>: RMS current (A)</li>
          <li><strong>φ</strong>: Phase angle between voltage and current</li>
        </ul>
      </Section>

      <Section title="Reactive Power (Q)">
        Reactive power is the unused energy in the circuit:
        <Equation>Q = Vrms × Irms × sin(φ)</Equation>
        <ul className="list-disc list-inside">
          <li><strong>Q</strong>: Reactive power (VAR)</li>
          <li><strong>Vrms</strong>: RMS voltage (V)</li>
          <li><strong>Irms</strong>: RMS current (A)</li>
          <li><strong>φ</strong>: Phase angle between voltage and current</li>
        </ul>
      </Section>

      <Section title="Apparent Power (S)">
        Apparent power is the total power supplied to the circuit:
        <Equation>S = Vrms × Irms</Equation>
        <ul className="list-disc list-inside">
          <li><strong>S</strong>: Apparent power (VA)</li>
          <li><strong>Vrms</strong>: RMS voltage (V)</li>
          <li><strong>Irms</strong>: RMS current (A)</li>
        </ul>
      </Section>

      <Section title="Relationship Between P, Q, and S">
        The relation between real, reactive, and apparent power is:
        <Equation>P² + Q² = S²</Equation>
        <ul className="list-disc list-inside">
          <li><strong>P</strong>: Real power (W)</li>
          <li><strong>Q</strong>: Reactive power (VAR)</li>
          <li><strong>S</strong>: Apparent power (VA)</li>
        </ul>
      </Section>
    </div>
    <Section title="Power Factor">
  Power factor (PF) is a measure of how effectively electrical power is being used in a circuit. It is the ratio of real power to apparent power and is expressed as:
  <Equation>PF = P / S</Equation>
  <ul className="list-disc list-inside">
    <li><strong>PF</strong>: Power factor (unitless)</li>
    <li><strong>P</strong>: Real power (W)</li>
    <li><strong>S</strong>: Apparent power (VA)</li>
  </ul>
  <p>
    Power factor ranges from 0 to 1, where a value of 1 indicates that all the supplied power is being used to perform useful work (i.e., the circuit is purely resistive). A power factor less than 1 indicates the presence of reactive power, and energy is not being used efficiently.
  </p>
  <p>
    A low power factor can result in energy losses and reduced efficiency. It is typically improved by adding capacitors or inductors to the circuit, which helps to reduce the amount of reactive power.
  </p>
</Section>

<Section title="Power Loss in Transmission Lines">
  Power loss in transmission lines is an important factor to consider in long-distance power transmission. The loss of power is due to the resistance of the transmission wires and is given by:
  <Equation>Ploss = I² × R</Equation>
  <p>
    Where:
    <ul className="list-disc list-inside">
      <li><strong>Ploss</strong>: Power loss (W)</li>
      <li><strong>I</strong>: Current (A)</li>
      <li><strong>R</strong>: Resistance of the transmission line (Ω)</li>
    </ul>
  </p>
  <p>
    To minimize power loss, high-voltage transmission is used because, according to the formula, power loss decreases with the square of the current. By increasing the voltage, the current is reduced, leading to lower losses. This is why electrical power is transmitted at high voltages and then stepped down to lower voltages for use in homes and businesses.
  </p>
</Section>

<Section title="Efficiency of Electric Power Systems">
  The efficiency of an electric power system refers to the ratio of useful power output to the total power input. It is a measure of how effectively the system is converting input energy into useful work.
  <Equation>Efficiency = (Poutput / Pinput) × 100</Equation>
  <ul className="list-disc list-inside">
    <li><strong>Poutput</strong>: Output power (W)</li>
    <li><strong>Pinput</strong>: Input power (W)</li>
  </ul>
  <p>
    In an ideal system, efficiency is 100%. However, in real-world systems, some power is lost due to factors such as resistance in wires, heat dissipation in electrical components, and imperfect conversion processes. Power losses can occur in generators, transformers, motors, and transmission lines, leading to an overall system efficiency of less than 100%.
  </p>
  <p>
    Maximizing efficiency is a key goal in electrical engineering. Various strategies, such as improving the design of electrical components, using superconducting materials, and optimizing power transmission networks, can help improve efficiency and reduce losses.
  </p>
</Section>

<Section title="Power in Motors and Generators">
  Electric motors and generators are fundamental devices in electrical power systems. In motors, electric power is converted into mechanical power, while in generators, mechanical power is converted into electrical power.
  <p>
    In a motor, the electric power supplied to the motor is transformed into mechanical power, which is used to drive machines or vehicles. The power output of a motor is given by:
  </p>
  <Equation>Pmotor = T × ω</Equation>
  <p>
    Where:
    <ul className="list-disc list-inside">
      <li><strong>T</strong>: Torque (Nm)</li>
      <li><strong>ω</strong>: Angular velocity (rad/s)</li>
    </ul>
  </p>
  <p>
    In a generator, the mechanical power supplied by a turbine or engine is converted into electrical power. The power output of a generator is calculated using the formula for electric power:
  </p>
  <Equation>Pgenerator = V × I</Equation>
  <p>
    Both motors and generators are designed to operate with high efficiency, and their performance is often measured by the ratio of output power to input power (efficiency).
  </p>
</Section>

<Section title="Energy Consumption and Billing">
  In electric power systems, energy consumption is measured in kilowatt-hours (kWh). This unit represents the amount of energy consumed by an electrical device over a certain period of time. The energy consumption is calculated by multiplying the power used by the time the device operates.
  <Equation>Energy = Power × Time</Equation>
  <p>
    Where:
    <ul className="list-disc list-inside">
      <li><strong>Energy</strong>: Energy consumed (kWh)</li>
      <li><strong>Power</strong>: Power used (kW)</li>
      <li><strong>Time</strong>: Time the device operates (hours)</li>
    </ul>
  </p>
  <p>
    For example, a 100 W light bulb that is turned on for 10 hours will consume 1 kWh of energy:
  </p>
  <Equation>Energy = 0.1 kW × 10 h = 1 kWh</Equation>
  <p>
    Energy consumption is important for electricity billing, and consumers are typically charged based on the total energy used, measured in kWh.
  </p>
</Section>

<Section title="Power Conversion and Transformers">
  Power conversion is the process of changing electrical power from one form to another. Transformers are widely used to convert between high and low voltages in power transmission systems.
  <p>
    A transformer operates on the principle of electromagnetic induction and consists of two coils of wire: the primary coil and the secondary coil. The voltage ratio between the primary and secondary coils is related to the number of turns in each coil:
  </p>
  <Equation>V₁ / V₂ = N₁ / N₂</Equation>
  <p>
    Where:
    <ul className="list-disc list-inside">
      <li><strong>V₁</strong>: Voltage on the primary side (V)</li>
      <li><strong>V₂</strong>: Voltage on the secondary side (V)</li>
      <li><strong>N₁</strong>: Number of turns on the primary coil</li>
      <li><strong>N₂</strong>: Number of turns on the secondary coil</li>
    </ul>
  </p>
  <p>
    A transformer can either step up (increase) or step down (decrease) the voltage depending on the ratio of turns. The power transferred between the coils remains the same, assuming ideal conditions (no losses):
  </p>
  <Equation>P₁ = P₂</Equation>
  <p>
    Where:
    <ul className="list-disc list-inside">
      <li><strong>P₁</strong>: Power on the primary side (W)</li>
      <li><strong>P₂</strong>: Power on the secondary side (W)</li>
    </ul>
  </p>
  <p>
    The efficiency of a transformer is very high, typically greater than 95%. However, losses due to resistance and other factors still exist, and these losses are minimized by using high-quality materials and design.
  </p>
</Section>

<Section title="Energy Efficiency in Buildings">
  The concept of energy efficiency is also relevant to electrical power usage in buildings. Energy-efficient buildings use less energy to perform the same tasks compared to conventional buildings. This can be achieved through improved insulation, energy-efficient appliances, lighting, and HVAC systems.
  <p>
    Electrical power consumption in buildings can be reduced by:
  </p>
  <ul className="list-disc list-inside">
    <li>Switching to energy-efficient LED lighting</li>
    <li>Using Energy Star-rated appliances</li>
    <li>Improving insulation to reduce heating and cooling costs</li>
    <li>Utilizing renewable energy sources, such as solar panels</li>
  </ul>
  <p>
    Building energy management systems (BEMS) are increasingly being used to monitor and optimize energy use in buildings. These systems can automatically control lighting, HVAC, and other systems to ensure that energy consumption is minimized.
  </p>
</Section>
<Section title="Alternating Current (AC) vs. Direct Current (DC)">
  Electric power can be transmitted using either alternating current (AC) or direct current (DC). The key difference between the two is in the direction of the flow of electric charge:
  <ul className="list-disc list-inside">
    <li><strong>AC</strong>: The current alternates direction periodically, meaning the voltage varies in polarity over time. It is the most commonly used form of electricity in residential and commercial applications because it is easier to transport over long distances.</li>
    <li><strong>DC</strong>: The current flows in one direction only. DC is typically used in low-voltage applications, such as powering electronic devices, batteries, and solar power systems.</li>
  </ul>
  <p>
    In an AC system, the voltage and current alternate periodically. The frequency of this alternation is measured in Hertz (Hz). In most countries, the standard frequency for AC power is 50 Hz, while in the United States, it is 60 Hz.
  </p>
  <p>
    AC is commonly used for high-voltage power transmission due to its ease of transforming to different voltage levels using transformers. This makes it more efficient for long-distance transmission compared to DC. However, DC is often preferred in applications that require stable and constant voltage, such as charging batteries and powering electronics.
  </p>
</Section>

<Section title="Voltage, Current, and Resistance Relationships">
  The relationship between voltage, current, and resistance is defined by Ohm’s Law:
  <Equation>V = I × R</Equation>
  <ul className="list-disc list-inside">
    <li><strong>V</strong>: Voltage (V)</li>
    <li><strong>I</strong>: Current (A)</li>
    <li><strong>R</strong>: Resistance (Ω)</li>
  </ul>
  <p>
    This formula indicates that the voltage across a resistor is directly proportional to the current flowing through it, with the resistance acting as the constant of proportionality. In other words, if the resistance in a circuit increases, for a constant voltage, the current will decrease. Similarly, for a constant resistance, if the voltage increases, the current will increase.
  </p>
  <p>
    This relationship is crucial in designing electrical circuits. For instance, in power distribution systems, transformers adjust the voltage to a level that minimizes current flow, thereby reducing energy loss due to resistance.
  </p>
</Section>

<Section title="Power Factor Correction">
  Power factor correction is the process of improving the power factor in a system. As previously discussed, a power factor less than 1 indicates the presence of reactive power, which reduces the efficiency of the system. Power factor correction involves adding capacitors or inductors to the circuit to counteract the effects of inductive or capacitive reactance.
  <p>
    In an inductive load (such as a motor or transformer), the current lags the voltage, resulting in a lower power factor. Adding capacitors to the circuit can help compensate for this lag and improve the power factor. Similarly, in a capacitive load, inductors may be added to correct the power factor.
  </p>
  <p>
    Power factor correction is particularly important in industrial settings, where large inductive loads are common. By improving the power factor, industries can reduce energy costs and improve the overall efficiency of their electrical systems.
  </p>
</Section>

<Section title="Harmonics in Power Systems">
  Harmonics are unwanted frequencies that distort the normal waveform of the current and voltage in a power system. These distortions are caused by non-linear loads, such as computers, fluorescent lights, and variable frequency drives (VFDs).
  <p>
    Harmonics can lead to a variety of issues, including:
  </p>
  <ul className="list-disc list-inside">
    <li>Overheating of electrical equipment</li>
    <li>Interference with communication systems</li>
    <li>Increased energy losses in the system</li>
  </ul>
  <p>
    To mitigate the effects of harmonics, power systems can be designed with harmonic filters that remove unwanted frequencies and restore the waveform to its normal shape. Additionally, equipment that generates harmonics can be equipped with filters to reduce their impact on the system.
  </p>
  <p>
    Monitoring the harmonic distortion in power systems is important for maintaining the efficiency and longevity of electrical equipment. Harmonic distortion is measured in terms of Total Harmonic Distortion (THD), which quantifies the level of distortion relative to the fundamental frequency.
  </p>
</Section>

<Section title="Power Loss in Electrical Components">
  Power loss is an inevitable consequence of any electrical system due to the resistance in conductors and electrical components. The power loss in resistive components is given by:
  <Equation>P_loss = I² × R</Equation>
  <ul className="list-disc list-inside">
    <li><strong>I</strong>: Current (A)</li>
    <li><strong>R</strong>: Resistance (Ω)</li>
  </ul>
  <p>
    This equation shows that the power loss is proportional to the square of the current, which means that reducing the current in a system is one of the most effective ways to minimize power loss. For example, using thicker wires with lower resistance can reduce power loss in electrical transmission systems.
  </p>
  <p>
    In transformers, power loss occurs due to the resistance of the windings and the magnetic losses in the core. These losses are minimized by using high-quality materials and designing transformers with low resistance windings and efficient magnetic cores.
  </p>
</Section>

<Section title="Renewable Energy and Electric Power">
  Renewable energy sources, such as solar power, wind power, and hydroelectric power, are becoming increasingly important in the generation of electric power. These sources produce electricity without the harmful environmental effects associated with fossil fuels.
  <p>
    <strong>Solar Power</strong>: Solar panels convert sunlight into electricity using photovoltaic cells. Solar energy is a clean, renewable source of power that can be harnessed both for small-scale applications (such as powering homes) and large-scale power generation (solar farms).
  </p>
  <p>
    <strong>Wind Power</strong>: Wind turbines convert the kinetic energy of wind into mechanical power, which is then converted into electrical power. Wind power is an abundant and renewable energy source, particularly in areas with consistent wind patterns.
  </p>
  <p>
    <strong>Hydroelectric Power</strong>: Hydroelectric power plants generate electricity by harnessing the energy of falling water. This is one of the oldest and most reliable forms of renewable energy. Large-scale hydroelectric plants can produce significant amounts of power, while smaller run-of-river systems provide more localized energy solutions.
  </p>
  <p>
    Renewable energy systems are typically integrated into the electrical grid, where they contribute to the overall power supply. As the world moves toward a greener future, the use of renewable energy in electric power generation is expected to grow significantly.
  </p>
</Section>

<Section title="Electric Power Storage">
  Energy storage is a critical component of modern electrical power systems, especially with the rise of renewable energy. Energy storage systems allow excess energy to be stored when production exceeds demand, and then released when demand exceeds production.
  <p>
    There are several types of energy storage systems:
  </p>
  <ul className="list-disc list-inside">
    <li><strong>Batteries</strong>: Chemical energy storage devices, such as lithium-ion and lead-acid batteries, are commonly used for both small-scale and large-scale energy storage. Batteries are widely used in consumer electronics, electric vehicles, and renewable energy systems.</li>
    <li><strong>Pumped Hydro Storage</strong>: In this system, water is pumped uphill to a reservoir during periods of low demand, and then released to generate electricity when demand is high.</li>
    <li><strong>Flywheels</strong>: Flywheel energy storage systems store mechanical energy in a rotating mass. The energy is released by slowing down the flywheel.</li>
    <li><strong>Compressed Air Energy Storage (CAES)</strong>: This system stores energy by compressing air in underground caverns, which is then released to generate electricity when needed.</li>
  </ul>
  <p>
    Energy storage helps to smooth out the fluctuations in power generation from renewable sources, such as solar and wind, which are intermittent by nature. By integrating energy storage with the power grid, renewable energy can be used more effectively, reducing reliance on fossil fuels and improving grid stability.
  </p>
</Section>


    </>
  );
};

export default ElectricPower;
