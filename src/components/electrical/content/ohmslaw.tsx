import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
const OhmsLaw: React.FC = () => {
  const [resistance, setResistance] = useState<string>("");
  const [current, setCurrent] = useState<string>("");
  const [voltage, setVoltage] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const calculateOhmsLaw = () => {
    let res = "";
    const v = parseFloat(voltage);
    const i = parseFloat(current);
    const r = parseFloat(resistance);

    if (!isNaN(v) && !isNaN(r)) {
      const calculatedCurrent = v / r;
      res = `I = V / R = ${v}V / ${r}Ω = ${calculatedCurrent.toFixed(2)}A`;
      setCurrent(calculatedCurrent.toString());
    } else if (!isNaN(v) && !isNaN(i)) {
      const calculatedResistance = v / i;
      res = `R = V / I = ${v}V / ${i}A = ${calculatedResistance.toFixed(2)}Ω`;
      setResistance(calculatedResistance.toString());
    } else if (!isNaN(i) && !isNaN(r)) {
      const calculatedVoltage = i * r;
      res = `V = I * R = ${i}A * ${r}Ω = ${calculatedVoltage.toFixed(2)}V`;
      setVoltage(calculatedVoltage.toString());
    } else {
      res = "Please enter any two values.";
    }

    setResult(res);
  };

  return (
    <div className="p-4">
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
              <Link to="/electrical/laws">Electronic Circuit Laws</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ohm's Law</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="mx-auto max-w-[900px] p-[20px]">
      <h1 className="text-2xl font-bold mb-4">Ohm's Law</h1>
      <p className="mb-6">
        Ohm's law shows a linear relationship between the voltage and the current in an electrical circuit.
      </p>

      <h2 className="text-xl font-semibold mb-4">Example 1: DC Circuit</h2>
      <div className="mb-4">
        <img src="/symbols/ohm-law-example1.png" alt="Ohm's Law Example 1" />
        <p className="mt-2">
          Find the current of an electrical circuit with a resistance of 50Ω and a voltage supply of 5V.
        </p>
        <p><strong>Solution:</strong> I = V / R = 5V / 50Ω = 0.1A = 100mA</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">Example 2: AC Circuit</h2>
      <div className="mb-4">
        <img src="/symbols/ohm-law-example2.png" alt="Ohm's Law Example 2" />
        <p className="mt-2">
          Find the current of an AC circuit with a voltage supply of 110V∯70° and load of 0.5kΩ∯20°.
        </p>
        <p><strong>Solution:</strong> I = V / Z = 110V∯70° / 500Ω∯20° = 0.22A∠50°</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">Ohm's Law Calculator</h2>
      <div className="mb-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col">
            <label htmlFor="voltage">Enter Voltage (V):</label>
            <input
              id="voltage"
              type="number"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
              placeholder="Voltage in Volts"
              className="p-2 border rounded dark:text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="current">Enter Current (I):</label>
            <input
              id="current"
              type="number"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              placeholder="Current in Amps"
              className="p-2 border rounded dark:text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="resistance">Enter Resistance (R):</label>
            <input
              id="resistance"
              type="number"
              value={resistance}
              onChange={(e) => setResistance(e.target.value)}
              placeholder="Resistance in Ohms"
              className="p-2 border rounded dark:text-black"
            />
          </div>
        </div>

        <button
          onClick={calculateOhmsLaw}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Result:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
      <section>
  <h2 className="text-2xl font-semibold mt-8">Understanding Ohm's Law: A Deeper Dive</h2>
  <p>
    Ohm’s Law is one of the fundamental principles in the study of electricity and electronics. It is essential for understanding the relationship between voltage, current, and resistance in a circuit. The law states that the current (I) passing through a conductor between two points is directly proportional to the voltage (V) across the two points and inversely proportional to the resistance (R) of the conductor. Mathematically, it is expressed as:
  </p>
  <p className="italic">V = I * R</p>
  <p>
    This equation is used extensively in both theoretical and applied electrical engineering. Whether you’re designing simple circuits or troubleshooting more complex systems, understanding how voltage, current, and resistance interact is vital to making informed decisions. Let’s break down each element of Ohm’s Law in greater detail.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">The Role of Voltage in Ohm's Law</h2>
  <p>
    Voltage (V), also referred to as electrical potential difference, is the driving force that pushes the electrons through a conductor. It is measured in volts (V). In a circuit, the voltage is supplied by a power source, such as a battery or power supply. The amount of voltage determines the potential energy available to move charge carriers (electrons) through the circuit. The higher the voltage, the greater the potential energy available to drive current through the resistance.
  </p>
  <p>
    Voltage can be compared to water pressure in a pipe. Just as higher water pressure forces water through pipes, higher voltage forces electrons through electrical components. However, to understand how voltage works in a circuit, you need to consider both the voltage source and the resistance within the circuit.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">The Role of Current in Ohm's Law</h2>
  <p>
    Current (I) is the flow of electric charge through a conductor, typically measured in amperes (A). When a voltage is applied across a conductor, it causes the free electrons in the conductor to move, creating a flow of charge. This movement is referred to as electric current. Current can be either direct current (DC), where the flow of electrons moves in one direction, or alternating current (AC), where the direction of flow reverses periodically.
  </p>
  <p>
    The amount of current in a circuit is directly proportional to the applied voltage and inversely proportional to the resistance of the conductor. If the resistance is low and the voltage is high, a larger current will flow. Conversely, if the resistance is high and the voltage is low, the current will decrease.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">The Role of Resistance in Ohm's Law</h2>
  <p>
    Resistance (R) is the opposition that a material offers to the flow of electric current. It is measured in ohms (Ω). All materials have some degree of resistance to the flow of electrons, but materials like metals (copper, aluminum) have low resistance, while materials like rubber and wood have high resistance.
  </p>
  <p>
    Resistance is influenced by several factors, including the material of the conductor, its length, cross-sectional area, and temperature. A longer conductor or a narrower cross-section increases resistance, while materials with fewer free electrons (such as insulators) offer higher resistance.
  </p>
  <p>
    When resistance increases, the current decreases, given a constant voltage. This is why resistors are used in circuits to limit current and control the flow of electricity.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Understanding the Units: Voltage, Current, and Resistance</h2>
  <p>
    To better understand Ohm's Law, it's important to know the units used for voltage, current, and resistance. These units are all derived from fundamental physical constants and are widely standardized in electrical engineering:
  </p>
  <ul className="list-disc pl-5">
    <li><strong>Voltage (V):</strong> The unit of voltage is the volt (V). One volt is equal to one joule of energy per coulomb of charge.</li>
    <li><strong>Current (I):</strong> The unit of electric current is the ampere (A). One ampere is equal to one coulomb of charge passing a point in one second.</li>
    <li><strong>Resistance (R):</strong> The unit of resistance is the ohm (Ω). One ohm is defined as the resistance that allows one ampere of current to flow when one volt is applied across it.</li>
  </ul>
  <p>
    These units are standardized across the world and are essential when solving Ohm’s Law equations. They form the basis for understanding how electrical components behave under different conditions.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Practical Applications of Ohm's Law</h2>
  <p>
    Ohm’s Law is used in a wide range of applications, from designing electrical circuits to troubleshooting and optimizing existing systems. Here are some practical applications:
  </p>
  <ul className="list-disc pl-5">
    <li><strong>Resistor Selection:</strong> Ohm’s Law is used to select appropriate resistors for specific applications in circuits. Engineers use the relationship between voltage, current, and resistance to determine the right resistor value for limiting current in various devices like LEDs.</li>
    <li><strong>Power Consumption:</strong> Ohm’s Law can also help calculate the power consumed by electrical devices. Power (P) is related to voltage and current by the formula: <code>P = V * I</code>. By using Ohm’s Law to calculate the current or voltage, you can determine the power consumption in watts.</li>
    <li><strong>Overload Protection:</strong> Understanding Ohm’s Law helps in designing circuits with proper overload protection. By calculating current based on the voltage and resistance, engineers can prevent circuits from being overloaded by selecting the right components or using circuit breakers and fuses.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Ohm's Law in Real-World Circuits</h2>
  <p>
    While Ohm's Law is ideal for many practical applications, it is important to note that real-world circuits may sometimes deviate from Ohm’s Law due to the non-linear behavior of certain components. For example, diodes and transistors do not follow a linear relationship between voltage and current like resistors do. These components have their own characteristic curves, which means they do not obey Ohm’s Law in the same way as a simple resistor.
  </p>
  <p>
    However, Ohm’s Law is still useful in the design and analysis of circuits that primarily consist of resistive elements. Understanding how voltage, current, and resistance interact in these circuits helps engineers design efficient and reliable systems.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Limitations of Ohm’s Law</h2>
  <p>
    While Ohm’s Law is a foundational concept in electrical engineering, it has its limitations. One significant limitation is that it only applies to linear, resistive materials. This means Ohm’s Law is not applicable to components such as diodes, transistors, and superconductors, which have non-linear characteristics. In addition, Ohm’s Law assumes that the resistance of a conductor remains constant regardless of the voltage or current applied, which is not always the case in real-world scenarios.
  </p>
  <p>
    Another limitation arises when components operate at very high frequencies. At these frequencies, the behavior of capacitors and inductors becomes important, and the impedance of these components must be considered. Ohm’s Law does not take into account the reactive properties of these components, meaning additional formulas, such as impedance calculations, are required for AC circuits.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Conclusion: The Importance of Ohm's Law in Electrical Engineering</h2>
  <p>
    Ohm’s Law is a fundamental principle in electrical engineering and forms the foundation for understanding how electrical circuits operate. By understanding the relationship between voltage, current, and resistance, engineers can design and optimize circuits for a wide variety of applications, from consumer electronics to industrial power systems.
  </p>
  <p>
    Whether you are designing a simple resistor circuit or troubleshooting complex systems, Ohm’s Law provides the necessary tools to ensure that circuits perform as intended. Even as electrical engineering evolves and new technologies emerge, the basic principles of Ohm’s Law continue to play a vital role in the development of modern electrical systems.
  </p>
</section>
<section>
  <h2 className="text-2xl font-semibold mt-8">Ohm's Law in Detail</h2>
  <p>
    Ohm's Law is one of the most important fundamental principles in the field of electrical engineering. It states that the current (I) passing through a conductor between two points is directly proportional to the voltage (V) across the two points and inversely proportional to the resistance (R) of the conductor. This relationship can be written as:
  </p>
  <p className="italic">V = I * R</p>
  <p>
    In this equation:
  </p>
  <ul className="list-disc pl-5">
    <li><strong>V</strong> represents the voltage (potential difference) in volts (V),</li>
    <li><strong>I</strong> represents the current in amperes (A), and</li>
    <li><strong>R</strong> represents the resistance in ohms (Ω).</li>
  </ul>
  <p>
    The formula V = I * R describes the relationship between these three quantities in simple linear terms. It highlights the fact that for a constant resistance, an increase in voltage will result in an increase in current. Conversely, for a constant voltage, increasing resistance will reduce the current. 
  </p>
  <p>
    Understanding Ohm's Law helps in the design, analysis, and troubleshooting of electrical circuits. It allows engineers to calculate unknown values when two of the three variables (voltage, current, or resistance) are known. This is particularly useful when designing electrical systems, selecting appropriate components, and ensuring circuits operate efficiently without damaging sensitive parts.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Key Components: Voltage, Current, and Resistance</h2>
  <p>
    To fully understand Ohm’s Law, it's essential to grasp the three key components in the equation: voltage, current, and resistance.
  </p>

  <h3 className="text-xl font-semibold mt-6">Voltage</h3>
  <p>
    Voltage is the potential difference between two points in a circuit. It is the force that pushes electrical charge through a conductor. Voltage is measured in volts (V), and it can be compared to water pressure in a pipe system. The higher the pressure, the more water can flow through the pipe. Similarly, the higher the voltage, the more current can flow through the circuit.
  </p>
  <p>
    In most electrical circuits, a voltage source, such as a battery or power supply, provides the voltage that drives current through resistive elements such as resistors. Voltage can be either direct current (DC), where the flow of current is constant, or alternating current (AC), where the current alternates direction periodically.
  </p>

  <h3 className="text-xl font-semibold mt-6">Current</h3>
  <p>
    Current is the flow of electric charge in a circuit, measured in amperes (A). One ampere corresponds to one coulomb of charge passing a point in one second. The flow of electrons through a conductor is what constitutes current.
  </p>
  <p>
    According to Ohm’s Law, current is directly proportional to voltage and inversely proportional to resistance. This means that increasing the voltage will increase the current, provided the resistance stays the same. On the other hand, increasing the resistance will reduce the current for a given voltage.
  </p>

  <h3 className="text-xl font-semibold mt-6">Resistance</h3>
  <p>
    Resistance is the opposition to the flow of current in a circuit. It is measured in ohms (Ω). The resistance of a conductor depends on several factors, including its material, length, cross-sectional area, and temperature.
  </p>
  <p>
    In simple terms, resistance can be thought of as the friction that opposes the movement of electrons through a conductor. Materials with a high resistance, such as rubber or plastic, are insulators and do not allow electrons to flow easily. In contrast, materials with low resistance, such as copper, are conductors and allow electrons to flow freely.
  </p>
  <p>
    In a circuit, resistors are components specifically designed to provide resistance. They are used to control the flow of current, protect sensitive components, or adjust voltage levels.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Practical Examples of Ohm’s Law</h2>
  <p>
    Ohm’s Law is not just a theoretical concept; it has many practical applications in everyday life. Here are a couple of real-world scenarios where Ohm’s Law comes into play:
  </p>

  <h3 className="text-xl font-semibold mt-6">Example 1: Determining the Required Resistor for an LED</h3>
  <p>
    Suppose you have a 9V battery and you want to power an LED that operates at a voltage of 2V and requires a current of 20mA (0.02A). To determine the appropriate resistor to use in the circuit, we can apply Ohm's Law.
  </p>
  <p>
    First, we calculate the voltage drop across the resistor:
    <strong>Voltage drop across the resistor = Supply voltage - LED voltage</strong>
    <br />
    Voltage drop = 9V - 2V = 7V.
  </p>
  <p>
    Next, we calculate the resistance required to allow a current of 20mA to flow:
    <strong>Resistance = Voltage / Current = 7V / 0.02A = 350Ω</strong>.
  </p>
  <p>
    So, the resistor should have a value of 350Ω to ensure the LED receives the correct amount of current.
  </p>

  <h3 className="text-xl font-semibold mt-6">Example 2: Calculating the Current in a Household Circuit</h3>
  <p>
    Let’s say you are troubleshooting an electrical circuit in your home, and you want to calculate the current flowing through a light bulb. Suppose the light bulb operates at 120V (household voltage) and has a resistance of 240Ω.
  </p>
  <p>
    Using Ohm's Law, we can calculate the current:
    <strong>Current = Voltage / Resistance = 120V / 240Ω = 0.5A</strong>.
  </p>
  <p>
    Therefore, the current flowing through the light bulb is 0.5 amperes. If the current exceeds the rated value, the circuit may be overloaded and potentially dangerous, so it's important to monitor and control current levels.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Limitations of Ohm’s Law</h2>
  <p>
    While Ohm’s Law is fundamental and applicable in many situations, it does have limitations. One of the key limitations is that it only applies to linear components, which exhibit a constant resistance. In other words, Ohm’s Law works for ideal resistors and simple conductors, but not for components that have non-linear behavior.
  </p>

  <h3 className="text-xl font-semibold mt-6">Non-Linear Components</h3>
  <p>
    Some components, such as diodes, transistors, and even light bulbs, do not obey Ohm’s Law in the same way resistors do. These components exhibit a non-linear relationship between voltage and current, meaning that their resistance changes as the voltage and current change.
  </p>
  <p>
    For instance, a diode allows current to flow only in one direction and has a much lower resistance once the forward voltage is exceeded. Similarly, a transistor behaves differently depending on its mode of operation. In these cases, engineers need to use more advanced models, such as the Shockley diode equation or transistor characteristic curves, to describe their behavior.
  </p>

  <h3 className="text-xl font-semibold mt-6">High-Frequency Circuits</h3>
  <p>
    Ohm’s Law also becomes less accurate in high-frequency circuits. At high frequencies, the inductance and capacitance of components play a significant role, and the impedance (not just resistance) must be considered. Impedance is the opposition to the flow of alternating current and includes both the resistance and the reactance of inductors and capacitors.
  </p>
  <p>
    In such cases, engineers use more complex calculations that account for the impedance of each component rather than just its resistance. These calculations are often referred to as AC circuit analysis, where Ohm's Law is extended to include reactive elements.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Conclusion: The Relevance of Ohm’s Law in Modern Electrical Engineering</h2>
  <p>
    Despite its limitations, Ohm’s Law remains one of the cornerstones of electrical engineering. It is a powerful tool for understanding the relationship between voltage, current, and resistance, and it is essential for designing and analyzing electrical circuits.
  </p>
  <p>
    By mastering Ohm’s Law, engineers and students gain a solid foundation in circuit theory, which is crucial for tackling more complex electrical concepts and systems. Whether it’s calculating the correct resistor value, designing a power supply, or troubleshooting electrical faults, Ohm’s Law provides the necessary insights to make informed decisions and optimize circuit performance.
  </p>
  <p>
    As technology continues to evolve, Ohm’s Law will undoubtedly remain relevant in the development of new electrical systems, devices, and applications. By continuing to apply its principles, electrical engineers can ensure the efficient and safe operation of the modern world’s electrical infrastructure.
  </p>
</section>

    
   </Card> 
  </div>
    
  );
};

export default OhmsLaw;