import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";


const KirchhoffLaws = () => {
  const [currentValues, setCurrentValues] = useState({
    I1: "",
    I2: "",
    I3: "",
    I4: "",
  });
  const [voltageValues, setVoltageValues] = useState({
    VS: "",
    VR1: "",
    VR2: "",
    VR3: "",
  });
  const [resultKCL, setResultKCL] = useState("");
  const [resultKVL, setResultKVL] = useState("");

  const handleCurrentChange = (e) => {
    const { name, value } = e.target;
    setCurrentValues({
      ...currentValues,
      [name]: value,
    });
  };

  const handleVoltageChange = (e) => {
    const { name, value } = e.target;
    setVoltageValues({
      ...voltageValues,
      [name]: value,
    });
  };

  const calculateKCL = () => {
    const { I1, I2, I3 } = currentValues;
    const I1_val = parseFloat(I1);
    const I2_val = parseFloat(I2);
    const I3_val = parseFloat(I3);

    if (!isNaN(I1_val) && !isNaN(I2_val) && !isNaN(I3_val)) {
      const I4 = -(I1_val + I2_val + I3_val);
      setResultKCL(`I4 = ${I4} A (leaves the junction)`);
    }
  };

  const calculateKVL = () => {
    const { VS, VR1, VR2 } = voltageValues;
    const VS_val = parseFloat(VS);
    const VR1_val = parseFloat(VR1);
    const VR2_val = parseFloat(VR2);

    if (!isNaN(VS_val) && !isNaN(VR1_val) && !isNaN(VR2_val)) {
      const VR3 = -(VS_val + VR1_val + VR2_val);
      setResultKVL(`VR3 = ${VR3} V`);
    }
  };

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
                  <Link to="/electrical/laws">Electronic Circuit Laws</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Kirchhoff's Laws</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
    <Card className="mx-auto max-w-[900px] p-[20px]">
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kirchhoff's Laws</h1>
      <p className="mb-6">
        Kirchhoff's Laws describe how currents and voltages behave in electrical circuits. These laws are essential for analyzing complex circuits.
      </p>

      {/* Kirchhoff's Current Law (KCL) */}
      <h2 className="text-xl font-semibold mb-4">Kirchhoff's Current Law (KCL)</h2>
      <p>
        The sum of currents entering a junction equals the sum of currents leaving the junction. Mathematically:
      </p>
      <p className="italic">∑Ik = 0</p>
      <div className="mb-4">
        <img
          src="/symbols/kcl-diagram.png"
          alt="Kirchhoff's Current Law Example"
          className="w-full"
        />
        <p className="mt-2">
          Example: If I1 = 2A, I2 = 3A, and I3 = -1A (leaving the junction), find I4:
        </p>
        <p>
          <strong>Solution:</strong> ∑Ik = I1 + I2 + I3 + I4 = 0, therefore, I4 = -(I1 + I2 + I3) = -2A - 3A - (-1A) = -4A (leaving the junction).
        </p>
      </div>

      <h3 className="text-lg font-semibold mb-2">KCL Calculator</h3>
      <div className="mb-4">
        <div className="flex gap-4">
          <div>
            <label>Enter I1 (A):</label>
            <input
              type="number"
              name="I1"
              value={currentValues.I1}
              onChange={handleCurrentChange}
              placeholder="Enter current I1"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter I2 (A):</label>
            <input
              type="number"
              name="I2"
              value={currentValues.I2}
              onChange={handleCurrentChange}
              placeholder="Enter current I2"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter I3 (A):</label>
            <input
              type="number"
              name="I3"
              value={currentValues.I3}
              onChange={handleCurrentChange}
              placeholder="Enter current I3"
              className="p-2 border rounded"
            />
          </div>
        </div>

        <button
          onClick={calculateKCL}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate I4 (KCL)
        </button>

        {resultKCL && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Result:</h3>
            <p>{resultKCL}</p>
          </div>
        )}
      </div>

      {/* Kirchhoff's Voltage Law (KVL) */}
      <h2 className="text-xl font-semibold mb-4">Kirchhoff's Voltage Law (KVL)</h2>
      <p>
        The sum of the voltages around any closed loop in a circuit is zero:
      </p>
      <p className="italic">∑Vk = 0</p>
      <div className="mb-4">
        <img
          src="/symbols/kvl-diagram.png"
          alt="Kirchhoff's Voltage Law Example"
          className="w-full"
        />
        <p className="mt-2">
          Example: If VS = 12V, VR1 = -4V, VR2 = -3V, find VR3:
        </p>
        <p>
          <strong>Solution:</strong> ∑Vk = VS + VR1 + VR2 + VR3 = 0, therefore VR3 = -(VS + VR1 + VR2) = -12V + 4V + 3V = -5V.
        </p>
      </div>

      <h3 className="text-lg font-semibold mb-2">KVL Calculator</h3>
      <div className="mb-4">
        <div className="flex gap-4">
          <div>
            <label>Enter VS (V):</label>
            <input
              type="number"
              name="VS"
              value={voltageValues.VS}
              onChange={handleVoltageChange}
              placeholder="Enter voltage VS"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter VR1 (V):</label>
            <input
              type="number"
              name="VR1"
              value={voltageValues.VR1}
              onChange={handleVoltageChange}
              placeholder="Enter voltage VR1"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter VR2 (V):</label>
            <input
              type="number"
              name="VR2"
              value={voltageValues.VR2}
              onChange={handleVoltageChange}
              placeholder="Enter voltage VR2"
              className="p-2 border rounded"
            />
          </div>
        </div>

        <button
          onClick={calculateKVL}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate VR3 (KVL)
        </button>

        {resultKVL && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Result:</h3>
            <p>{resultKVL}</p>
          </div>
        )}
      </div>
    </div>
    <section>
  <h2 className="text-2xl font-semibold mt-8">Applications of Kirchhoff's Laws in Circuit Analysis</h2>
  <p>
    Kirchhoff's Laws play a crucial role in the analysis of both AC (Alternating Current) and DC (Direct Current) circuits. These laws are fundamental tools for solving complex electrical networks and are widely used in the design and analysis of everything from simple resistive circuits to intricate power distribution networks.
  </p>
  <p>
    <strong>Kirchhoff's Current Law (KCL)</strong> is applied in analyzing the behavior of currents at a junction point. By using KCL, engineers and scientists can determine how much current flows through each component in the circuit, ensuring that the circuit operates as expected. This law is particularly useful in multi-node circuits where current is shared among several paths.
  </p>
  <p>
    For example, in power distribution systems, KCL is used to model how electricity flows through various distribution lines and transformers. By understanding how the current divides and enters various sections of a network, utilities can optimize their distribution systems for efficiency and reliability.
  </p>
  <p>
    <strong>Kirchhoff's Voltage Law (KVL)</strong> is used to analyze closed loops or meshes in a circuit. It is commonly applied in circuits with multiple voltage sources and resistive elements. By using KVL, the sum of all voltages around a loop can be set equal to zero, allowing engineers to solve for unknown quantities such as the voltage drop across resistors or the values of unknown sources.
  </p>
  <p>
    KVL is essential in designing and analyzing power supply circuits. In these circuits, voltage sources must provide consistent voltage across components, and the sum of the voltage drops must balance the supply voltage. This is particularly important in systems such as voltage regulators and battery-powered devices, where maintaining the correct voltage is crucial for proper operation.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Advanced Examples of Kirchhoff's Laws</h2>
  <p>
    Let’s dive deeper into more advanced examples to understand how Kirchhoff's Laws are applied in practical situations.
  </p>

  <h3 className="text-xl font-semibold mt-4">Example 1: Solving a Complex DC Circuit</h3>
  <p>
    Consider a circuit where we have three resistors connected in a series-parallel configuration. We have a 10V battery connected to two resistors: R1 = 4Ω, R2 = 6Ω, and R3 = 2Ω. We want to find the current through each resistor.
  </p>
  <p>
    Step 1: Identify the loops and junctions in the circuit. In this case, the current from the battery splits into two branches. 
  </p>
  <p>
    Step 2: Apply KCL at the junction where the current splits. Let I1 be the current flowing through R1, and I2 be the current flowing through R2 and R3.
  </p>
  <p>
    Step 3: Use KVL for each loop to set up equations. For the loop with R1 and the battery, the equation is:
    <strong>
      10V - (I1 * 4Ω) = 0
    </strong>
  </p>
  <p>
    For the second loop involving R2 and R3, the equation is:
    <strong>
      (I2 * 6Ω) + (I2 * 2Ω) = 10V
    </strong>
  </p>
  <p>
    Step 4: Solve these equations to find the currents I1 and I2, and you can then calculate the voltage drop across each resistor.
  </p>

  <h3 className="text-xl font-semibold mt-4">Example 2: Analyzing an AC Circuit with Inductors and Capacitors</h3>
  <p>
    In alternating current (AC) circuits, Kirchhoff's Laws are just as effective in analyzing voltage and current. However, inductors and capacitors must be treated differently than resistors because they store energy in magnetic and electric fields, respectively.
  </p>
  <p>
    Consider a simple series AC circuit with a voltage source of 120V, a resistor (R), an inductor (L), and a capacitor (C). The impedance of the components must be taken into account for proper analysis.
  </p>
  <p>
    Step 1: Apply KVL to the loop. The equation for the loop would be:
    <strong>
      V = IR + jωL * I - j/(ωC) * I
    </strong>
  </p>
  <p>
    Where:
    - V is the voltage from the source.
    - I is the current.
    - R is the resistance.
    - L is the inductance.
    - C is the capacitance.
    - ω is the angular frequency (ω = 2πf, where f is the frequency of the AC supply).
    - j is the imaginary unit, used to represent the phase shift in AC circuits.
  </p>
  <p>
    Step 2: Solve the equation for the current (I). You’ll need to use complex numbers to solve for the total current in the circuit.
  </p>

  <h3 className="text-xl font-semibold mt-4">Example 3: Mesh Analysis with Kirchhoff's Laws</h3>
  <p>
    Mesh analysis is another technique for applying Kirchhoff’s Voltage Law (KVL) to more complex circuits. This method involves writing KVL equations for each loop or mesh in the circuit.
  </p>
  <p>
    Consider a circuit with two loops, each containing resistors and voltage sources. By assigning mesh currents I1 and I2 to each loop, KVL equations are formed for each loop, which are then solved simultaneously to determine the mesh currents.
  </p>
  <p>
    For instance, for loop 1:
    <strong>
      V1 - (I1 * R1) - (I1 - I2) * R2 = 0
    </strong>
  </p>
  <p>
    And for loop 2:
    <strong>
      V2 - (I2 * R3) - (I1 - I2) * R2 = 0
    </strong>
  </p>
  <p>
    Solving these simultaneous equations gives the values for the mesh currents I1 and I2, which can be used to find the current through each resistor.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Practical Considerations when Using Kirchhoff’s Laws</h2>
  <p>
    While Kirchhoff’s Laws are powerful tools for analyzing circuits, there are some practical considerations and limitations to keep in mind.
  </p>

  <h3 className="text-xl font-semibold mt-4">1. Non-Ideal Components</h3>
  <p>
    Kirchhoff’s Laws assume that components are ideal (i.e., resistors have no tolerance, capacitors and inductors have no parasitic resistance or inductance). However, in real circuits, all components have non-ideal behaviors. For example, resistors may have a tolerance range, and capacitors may have leakage currents that affect the accuracy of KVL and KCL analysis.
  </p>

  <h3 className="text-xl font-semibold mt-4">2. High-Frequency Effects</h3>
  <p>
    In high-frequency circuits, parasitic inductance and capacitance of components and wiring can significantly affect the current and voltage distribution. In these cases, Kirchhoff’s Laws might need to be combined with techniques such as transmission line theory or other advanced modeling methods to account for these effects.
  </p>

  <h3 className="text-xl font-semibold mt-4">3. Circuit Grounding</h3>
  <p>
    Grounding is an important concept in electrical circuits. While Kirchhoff's Laws work well in ideal conditions, grounding introduces additional complexity, particularly in high-voltage or power circuits. When using KCL and KVL in circuits with multiple ground references, it's important to account for potential differences between ground points to avoid errors.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Summary of Key Concepts</h2>
  <p>
    Kirchhoff's Laws are a cornerstone of circuit analysis and are essential for engineers and students alike. By applying Kirchhoff’s Current Law and Kirchhoff’s Voltage Law, one can solve for unknown currents and voltages in a wide variety of circuits. From simple resistor networks to complex AC circuits, these laws are applicable in many contexts. Understanding the practical applications, advanced examples, and potential limitations of these laws will help you analyze and design circuits more effectively.
  </p>
  <p>
    Whether you're working with DC circuits, AC circuits, or advanced systems with inductors and capacitors, mastering Kirchhoff’s Laws will be invaluable in ensuring that you can accurately analyze and optimize electrical circuits.
  </p>
</section>
<section>
  <h2 className="text-2xl font-semibold mt-8">Kirchhoff’s Current Law (KCL) in Detail</h2>
  <p>
    Kirchhoff’s Current Law (KCL) is one of the two fundamental laws in circuit analysis. It is based on the principle of charge conservation, which states that the total current entering a junction (or node) must be equal to the total current leaving the junction. This law can be expressed mathematically as:
  </p>
  <p className="italic">∑I(in) = ∑I(out)</p>
  <p>
    This means that the sum of all currents flowing into a node must be equal to the sum of all currents flowing out of that node. KCL is particularly useful in solving complex circuits with multiple components connected at various junctions. Each node in a circuit can be analyzed independently using this law.
  </p>
  <p>
    KCL is widely used in both DC (Direct Current) and AC (Alternating Current) circuits. It allows us to simplify the analysis of networks of resistors, capacitors, and inductors. For example, when analyzing circuits with multiple branches, KCL enables us to solve for unknown currents at each node. This is especially useful in power distribution systems, where KCL helps to model the flow of current through various electrical paths and devices.
  </p>
  <p>
    Let’s consider a simple example: If three currents, I1, I2, and I3, are flowing into a junction, the sum of these currents must be zero if there is no current leaving the junction. Mathematically:
  </p>
  <p className="italic">I1 + I2 + I3 = 0</p>
  <p>
    In this case, if we know the values of I1, I2, and I3, we can easily calculate the current leaving the junction.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Kirchhoff’s Voltage Law (KVL) Explained</h2>
  <p>
    Kirchhoff’s Voltage Law (KVL) is the second fundamental law of circuit analysis, and it is based on the principle of energy conservation. KVL states that the sum of all the voltages around any closed loop or mesh in a circuit must be equal to zero. Mathematically, this can be written as:
  </p>
  <p className="italic">∑V = 0</p>
  <p>
    KVL applies to both series and parallel circuits. It helps to analyze the voltages across various components in a circuit and ensures that the total voltage is consistent with the power source. When applying KVL, we sum the voltage drops across each component in a loop, including resistors, inductors, capacitors, and voltage sources. The sum of these voltage drops must equal zero.
  </p>
  <p>
    In practice, KVL is crucial for analyzing circuits with multiple power sources or components. It helps engineers and scientists determine the behavior of voltages and currents in complex systems. By applying KVL, we can solve for unknown voltages or current values that may not be directly observable in the circuit.
  </p>
  <p>
    For example, in a circuit with three resistors, a battery, and a voltage drop across each resistor, KVL allows us to determine the total voltage supplied by the battery by summing the voltage drops across the resistors. This ensures that the circuit adheres to the conservation of energy principle.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Supermesh and Supernode in Kirchhoff’s Laws</h2>
  <p>
    While applying Kirchhoff’s Laws in complex circuits, we often encounter situations where multiple mesh currents or node voltages are involved. In such cases, it is helpful to use techniques like supermesh and supernode analysis to simplify the problem.
  </p>
  <p>
    A <strong>supermesh</strong> is created when two or more meshes share a common current source. In such cases, instead of writing individual KVL equations for each mesh, we combine the meshes into a single larger mesh and solve the system of equations for the unknowns. This method reduces the number of equations and simplifies the overall analysis.
  </p>
  <p>
    Similarly, a <strong>supernode</strong> is formed when two or more nodes are connected by a voltage source. In this case, we can treat the nodes as a single node and apply KCL to this supernode, which reduces the number of equations required to solve the system.
  </p>
  <p>
    These techniques are particularly useful in circuits with multiple voltage sources or current sources, as they simplify the process of finding unknown currents or voltages in the system. Using supermesh and supernode analysis along with Kirchhoff’s Laws allows for more efficient circuit analysis, especially in large and complex circuits.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Application of Kirchhoff’s Laws in AC Circuits</h2>
  <p>
    Kirchhoff’s Laws are not limited to DC circuits. They also play a vital role in the analysis of AC (Alternating Current) circuits. In AC circuits, the voltage and current vary sinusoidally with time, and components like capacitors and inductors introduce phase shifts between voltage and current. However, Kirchhoff’s Current Law (KCL) and Kirchhoff’s Voltage Law (KVL) still hold true in AC circuits, but they must be applied in the context of complex impedance.
  </p>
  <p>
    In AC circuit analysis, each component has an impedance, which is a complex quantity that represents both resistance and reactance (the opposition to current due to inductance or capacitance). Impedance is denoted as Z and is expressed in the form of a complex number: Z = R + jX, where R is the resistance, and jX is the reactance.
  </p>
  <p>
    When applying KVL and KCL to AC circuits, the currents and voltages must be treated as phasors, which are complex representations of sinusoidal waveforms. KVL and KCL can be applied in the same manner as in DC circuits, but the voltage and current values will include both magnitudes and phase angles.
  </p>
  <p>
    For example, in a series AC circuit with a resistor and an inductor, the total impedance is the sum of the resistor’s resistance and the inductor’s reactance. The current in the circuit is then calculated by dividing the total voltage by the total impedance. Similarly, KCL can be used to calculate currents at different nodes in an AC network by taking the impedances of each branch into account.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Solving Complex Circuits with Kirchhoff’s Laws</h2>
  <p>
    In practical circuit analysis, most circuits cannot be solved directly using simple methods like Ohm’s Law alone. Instead, we must use Kirchhoff’s Laws to systematically analyze complex circuits with multiple components. To solve these circuits, we typically follow a structured process that involves the following steps:
  </p>
  <ol className="list-decimal pl-5">
    <li>
      <strong>Identify the components and their connections:</strong> Begin by drawing a clear schematic diagram of the circuit, identifying all components, voltage sources, and current paths.
    </li>
    <li>
      <strong>Label all currents and voltages:</strong> Assign current variables to each branch of the circuit and voltage variables to each component.
    </li>
    <li>
      <strong>Apply Kirchhoff’s Current Law (KCL):</strong> Write KCL equations for each node in the circuit, ensuring that the sum of currents entering and leaving each node is zero.
    </li>
    <li>
      <strong>Apply Kirchhoff’s Voltage Law (KVL):</strong> Write KVL equations for each loop in the circuit, summing the voltage drops across components in each loop and setting the sum equal to zero.
    </li>
    <li>
      <strong>Solve the system of equations:</strong> Use algebraic methods or matrix techniques to solve the system of equations generated by KCL and KVL. The solution will give you the unknown currents and voltages in the circuit.
    </li>
  </ol>
  <p>
    This systematic approach allows you to solve even the most complex electrical circuits by breaking them down into smaller, manageable parts and applying Kirchhoff’s Laws to each part.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Limitations of Kirchhoff’s Laws</h2>
  <p>
    While Kirchhoff’s Laws are widely used and powerful tools for circuit analysis, there are some limitations that engineers must be aware of:
  </p>
  <ul className="list-disc pl-5">
    <li>
      <strong>Non-Ideal Components:</strong> Kirchhoff’s Laws assume that components are ideal, meaning resistors have no tolerance, and inductors and capacitors have no parasitic effects. However, in real-world circuits, components may have non-ideal behaviors, such as parasitic capacitance or resistance, which can lead to deviations from the ideal predictions.
    </li>
    <li>
      <strong>High-Frequency Effects:</strong> At high frequencies, the impedance of components like inductors and capacitors becomes more significant, and the parasitic inductance and capacitance of wires and connections affect the circuit’s behavior. In these cases, Kirchhoff’s Laws may need to be extended or combined with other techniques such as transmission line theory.
    </li>
    <li>
      <strong>Large Circuits:</strong> In very large or complex circuits, the sheer number of nodes and loops can make it difficult to apply Kirchhoff’s Laws directly. In such cases, engineers may use advanced circuit simulation tools or approximate methods to analyze the circuit.
    </li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
  <p>
    Kirchhoff’s Laws are fundamental principles of circuit analysis and are essential for understanding how electrical circuits function. By applying Kirchhoff’s Current Law (KCL) and Kirchhoff’s Voltage Law (KVL), engineers and students can analyze and design complex electrical systems, from simple resistive networks to intricate power distribution networks and communication circuits.
  </p>
  <p>
    Understanding these laws and how to apply them effectively is key to mastering circuit analysis. Whether you're designing power supplies, working with AC circuits, or solving for unknown currents and voltages in complex networks, Kirchhoff’s Laws provide a solid foundation for solving electrical problems.
  </p>
</section>

    </Card>
    </>
  );
};

export default KirchhoffLaws;
