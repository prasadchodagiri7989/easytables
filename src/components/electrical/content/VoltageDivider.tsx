import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const VoltageDivider = () => {
  const [resistance, setResistance] = useState<string>("");
  const [voltage, setVoltage] = useState<string>("");
  const [loadImpedance, setLoadImpedance] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const calculateVoltageDrop = () => {
    const V = parseFloat(voltage);
    const R = parseFloat(resistance);
    const Z = parseFloat(loadImpedance);

    if (!isNaN(V) && !isNaN(R)) {
      const total = R + R;
      const Vi = (V * R) / total;
      setResult(`DC: V_i = ${V}V × ${R}Ω / (${total}Ω) = ${Vi.toFixed(2)}V`);
    } else if (!isNaN(V) && !isNaN(Z)) {
      const total = Z + Z;
      const Vi = (V * Z) / total;
      setResult(`AC: V_i = ${V}V × ${Z}Ω / (${total}Ω) = ${Vi.toFixed(2)}V`);
    } else {
      setResult("Please enter valid voltage and either resistance or impedance.");
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
          <BreadcrumbItem>
            <BreadcrumbPage>Voltage Divider</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="mx-auto max-w-[900px]">
        <CardHeader>
          <CardTitle>Voltage Divider Fundamentals</CardTitle>
        </CardHeader>

        <CardContent className="text-gray-800 dark:text-white space-y-6 leading-relaxed text-sm">
          <div>
            <h1 className="text-2xl font-bold">What is a Voltage Divider?</h1>
            <p>
              A <strong>voltage divider</strong> is a simple circuit used to reduce voltage by dividing it across a series of two or more resistors. It's commonly used to scale signals or provide reference voltages.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Basic Formula (DC)</h2>
            <pre className="bg-gray-100 p-3 rounded dark:text-black">
              V<sub>out</sub> = V<sub>in</sub> × (R₂ / (R₁ + R₂))
            </pre>
            <p>This applies when using resistors in series to divide voltage.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">AC Voltage Divider</h2>
            <pre className="bg-gray-100 p-3 rounded dark:text-black">
              V<sub>out</sub> = V<sub>in</sub> × (Z₂ / (Z₁ + Z₂))
            </pre>
            <p>
              In AC circuits, impedances (Z) replace resistances (R), and phase must be considered.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Practical Examples</h2>
            <p>
              For a 30V source and resistors R₁ = 30Ω and R₂ = 40Ω:
              <br />
              V<sub>R2</sub> = 30 × 40 / (30 + 40) = 17.14V
            </p>
            <p>
              In AC, for 30∠60° with Z₁ = 30∠20° and Z₂ = 40∠-50°, complex math yields: <br />
              V<sub>Z1</sub> = 15.62∠100.71°
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Voltage Divider Calculator</h2>
            <div className="space-y-3">
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
                placeholder="Enter Voltage (V)"
                className="p-2 border rounded w-full dark:text-black"
              />
              <input
                type="number"
                value={resistance}
                onChange={(e) => setResistance(e.target.value)}
                placeholder="Enter Resistance (Ω)"
                className="p-2 border rounded w-full dark:text-black"
              />
              <input
                type="number"
                value={loadImpedance}
                onChange={(e) => setLoadImpedance(e.target.value)}
                placeholder="Enter Load Impedance (Ω)"
                className="p-2 border rounded w-full dark:text-black"
              />
              <button
                onClick={calculateVoltageDrop}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Calculate
              </button>
              {result && (
                <div className="bg-gray-100 p-3 rounded dark:text-black">
                  <strong>Result:</strong> {result}
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Applications</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Sensor signal scaling</li>
              <li>Transistor biasing</li>
              <li>Logic level shifting</li>
              <li>Reference voltage generation</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Limitations</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Not suitable for high-power applications</li>
              <li>Load affects output voltage</li>
              <li>Temperature can affect accuracy</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Conclusion</h2>
            <p>
              Voltage dividers are essential for reducing voltages in electronic circuits. While simple in principle, proper design requires attention to load resistance, power ratings, and real-world factors like temperature and impedance. They are foundational tools in analog and digital electronics.
            </p>
          </div>
          <div className="text-gray-800 dark:text-white space-y-6 leading-relaxed text-sm">

  <div>
    <h2 className="text-xl font-bold">Advanced Voltage Divider Applications</h2>
    <p>
      Voltage dividers are extensively used in analog circuits to scale down voltages for various components. In sensor circuits, they convert changes in resistance (from thermistors or photoresistors) into voltage levels readable by ADCs. For example, in a temperature sensor application, a thermistor in a voltage divider helps measure ambient temperature through varying voltage output.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-lg">Impedance Matching with Voltage Dividers</h2>
    <p>
      Voltage dividers also play a critical role in impedance matching, especially in RF circuits. Proper impedance matching ensures maximum power transfer and signal integrity between stages or between antennas and receivers.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-lg">Divider with Capacitive and Inductive Elements</h2>
    <p>
      In AC systems, voltage dividers may use capacitors or inductors instead of resistors. Capacitive dividers are useful in high-frequency applications and exhibit lower power losses. Inductive dividers are less common due to inductive reactance and size but are occasionally used in transformers and filter networks.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-lg">Effects of Temperature and Tolerance</h2>
    <p>
      The accuracy of a voltage divider is influenced by the resistors' temperature coefficient (TC) and tolerance. Use low-TC, precision resistors (e.g., 0.1% tolerance, 25ppm/°C) for high-accuracy applications like voltage references or measurement instrumentation.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-lg">Buffered Voltage Divider</h2>
    <p>
      To avoid loading effects in sensitive circuits, a buffer (usually an op-amp in unity gain) can follow a voltage divider. This ensures a stable voltage regardless of variations in connected load.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-lg">RC Time Constant and Divider Speed</h2>
    <p>
      In fast-switching circuits, the resistor and load/input capacitance create an RC delay, affecting the rise/fall time of the voltage. Designers must minimize resistance or use low-capacitance layouts for high-speed response.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-lg">Divider for ADC Signal Scaling</h2>
    <p>
      Many microcontrollers operate at 3.3V or 5V logic levels. If a sensor outputs 12V, a voltage divider safely scales the voltage down to a readable range. Use caution: the output impedance must be low enough to not affect ADC accuracy.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-lg">Digital Potentiometers as Dividers</h2>
    <p>
      A digital potentiometer (or digipot) can serve as a programmable voltage divider controlled via I2C or SPI. These are useful in calibration circuits, volume controls, and variable references for op-amps.
    </p>
  </div>

  <div>
    <h2 className="font-semibold text-lg">Voltage Dividers in Filters</h2>
    <p>
      A resistor and capacitor in series create a low-pass or high-pass filter. For instance, in an RC low-pass filter, the output across the capacitor filters out high frequencies:
    </p>
    <pre className="bg-gray-100 p-3 rounded dark:text-black">f<sub>c</sub> = 1 / (2πRC)</pre>
  </div>

  <div>
    <h2 className="font-semibold text-lg">Voltage Dividers in Voltage Regulators</h2>
    <p>
      Adjustable regulators like the LM317 or buck converters often use a voltage divider to set the output voltage by providing a feedback reference. The formula:
    </p>
    <pre className="bg-gray-100 p-3 rounded dark:text-black">V<sub>out</sub> = V<sub>ref</sub> × (1 + R2 / R1)</pre>
  </div>

  <div>
    <h2 className="font-semibold text-lg">Troubleshooting Voltage Dividers</h2>
    <ul className="list-disc list-inside ml-4">
      <li>Ensure resistor values are correct and within tolerance.</li>
      <li>Measure actual output voltage and compare with expected results.</li>
      <li>Check for parasitic capacitance or low impedance loads affecting behavior.</li>
    </ul>
  </div>

  <div>
    <h2 className="font-semibold text-lg">Conclusion</h2>
    <p>
      Voltage dividers may seem like basic components, but their applications span from analog signal scaling to complex impedance-matched RF systems. Understanding their behavior under load, temperature, and frequency allows engineers to apply them reliably in both precision and power-limited applications. When used wisely, voltage dividers offer a simple yet powerful method to manage voltage levels across diverse electronic systems.
    </p>
  </div>

</div>
<div className="text-gray-800 dark:text-white space-y-6 leading-relaxed text-sm">

  <div>
    <h2 className="text-xl font-bold">Voltage Dividers in Analog Signal Conditioning</h2>
    <p>
      In analog electronics, voltage dividers are often used to adapt signal voltages to safe and readable levels. This is particularly useful when interfacing sensors, such as thermistors, photoresistors, or other variable-resistance devices, with microcontroller ADC inputs. By choosing appropriate resistor values, the voltage output can be tailored to remain within the input range of the analog-to-digital converter, typically 0–3.3V or 0–5V.
    </p>
    <p>
      For example, a thermistor in series with a fixed resistor can convert temperature-dependent resistance changes into corresponding voltage changes. The output of this divider circuit can then be processed by the microcontroller to infer temperature values through a lookup table or equation.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold">Using Voltage Dividers for Logic Level Shifting</h2>
    <p>
      Modern digital electronics frequently involve interfacing components that operate at different logic voltage levels. For example, many sensors output 5V signals, but modern microcontrollers and development boards often operate at 3.3V or even 1.8V. In such cases, a voltage divider provides a simple method for level shifting a signal from 5V down to 3.3V using two carefully chosen resistors.
    </p>
    <p>
      However, this method should only be used with inputs that have high impedance (like MCU GPIO pins) and low-speed signals. For fast digital communication lines like SPI or UART, a dedicated level shifter IC or logic buffer is recommended.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold">Voltage Dividers in Power Supply Monitoring</h2>
    <p>
      Voltage dividers are also used in power management applications. Microcontrollers often need to monitor the voltage of a battery or power supply. If the voltage to be monitored exceeds the ADC range, a resistor divider brings the voltage down into a safe measurable range. The microcontroller then applies a correction factor to recover the original voltage value.
    </p>
    <p>
      For example, to monitor a 12V supply using a 3.3V ADC input, a voltage divider with R1 = 6.8kΩ and R2 = 2.2kΩ brings the 12V down to approximately 3.1V, which is safely measurable.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold">Dynamic Voltage Dividers in Feedback Control</h2>
    <p>
      In advanced power supplies or control systems, voltage dividers are part of feedback loops used to regulate output voltage. For example, switching regulators and buck converters use a divider to scale the output voltage down before feeding it to a comparator or op-amp, which compares it against a reference voltage to maintain regulation.
    </p>
    <p>
      In such systems, resistor values must be precise and stable, as even small deviations can cause the output voltage to drift out of tolerance. Temperature-stable, low-tolerance resistors (e.g., 0.1%) are commonly used in these feedback paths.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold">Voltage Divider and Noise Considerations</h2>
    <p>
      Every resistor generates a small amount of thermal (Johnson-Nyquist) noise, which can affect sensitive analog circuits. In voltage divider applications involving low-level signals (such as audio, RF, or sensor front-ends), the values of resistors should be chosen to minimize noise while maintaining acceptable current draw and loading characteristics.
    </p>
    <p>
      Metal-film resistors are preferred in low-noise applications due to their lower noise characteristics compared to carbon-film types. Additionally, placing decoupling capacitors at the divider output can help filter high-frequency noise, creating a cleaner signal.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold">Voltage Divider Ratio Calculation Tips</h2>
    <p>
      Selecting the right resistor values for a voltage divider depends on two main considerations: the desired voltage ratio and the acceptable current draw. For instance, to drop 12V down to 5V, the ratio R2 / (R1 + R2) must equal 5/12 ≈ 0.416.
    </p>
    <p>
      Choosing R1 = 7kΩ and R2 = 5kΩ results in an output of about 5.0V. This draws roughly 1mA, which is acceptable for many microcontroller inputs. Higher-value resistors reduce current draw but can be more susceptible to noise and loading effects.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold">Thermistors and Voltage Dividers in Sensing</h2>
    <p>
      Thermistors are commonly used in voltage divider configurations to measure temperature. An NTC thermistor (negative temperature coefficient) decreases resistance as temperature rises. Placing it in series with a fixed resistor and applying a known voltage allows you to measure the thermistor voltage drop and calculate the temperature using a formula or lookup table.
    </p>
    <p>
      This method is widely used in thermostats, battery management systems, and climate control systems. It’s cost-effective and provides a non-linear response suitable for a wide range of temperatures.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold">Voltage Dividers in Audio Applications</h2>
    <p>
      Voltage dividers are used in audio applications to attenuate signals, match impedance, or adjust volume. Passive volume controls often use potentiometers (which are variable voltage dividers) to vary the output level before amplification. Proper design ensures minimal signal degradation and maintains the desired frequency response.
    </p>
    <p>
      Additionally, voltage dividers can help protect sensitive amplifier inputs by scaling down potentially high audio signal levels to acceptable ranges.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold">Voltage Divider Design with Load Considerations</h2>
    <p>
      In practice, any voltage divider’s output is affected by the input impedance of the circuit connected to it. When a load is connected to the output of a voltage divider, it forms a parallel combination with the lower resistor, effectively changing the voltage division ratio.
    </p>
    <p>
      The modified output voltage can be calculated using:
    </p>
    <pre className="bg-gray-100 p-3 rounded dark:text-black">
      Vout = Vin × (R2 || RL) / (R1 + (R2 || RL))
    </pre>
    <p>
      To minimize this effect, ensure the load resistance is at least 10 times greater than the lower divider resistor (R2).
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold">Conclusion: Making the Most of Voltage Dividers</h2>
    <p>
      Whether you're working on a simple microcontroller project or designing a high-performance analog front-end, understanding voltage dividers is a must. From signal scaling and biasing to noise filtering and voltage referencing, their applications are nearly endless. By balancing resistor values, load effects, and design constraints, you can create voltage divider circuits that are reliable, accurate, and efficient.
    </p>
    <p>
      Always validate your voltage divider design through simulation or prototyping, especially in precision or high-speed applications. Properly implemented, this humble two-resistor circuit remains one of the most essential tools in an engineer's design toolkit.
    </p>
  </div>

</div>

        </CardContent>
      </Card>
    </>
  );
};

export default VoltageDivider;
