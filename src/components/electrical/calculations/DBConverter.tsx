import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const DBConverter: React.FC = () => {
  const [quantity, setQuantity] = useState("Power");
  const [dBUnit, setDbUnit] = useState("dBm");
  const [inputValue, setInputValue] = useState<number>(0);
  const [outputValue, setOutputValue] = useState<string | number>("—");

  const convertPower = (dBValue: number, unit: string): number | string => {
    switch (unit) {
      case "dBm":
        return Math.pow(10, (dBValue - 30) / 10).toFixed(6) + " W";
      case "dBW":
        return Math.pow(10, dBValue / 10).toFixed(6) + " W";
      case "dBmV":
        return Math.pow(10, (dBValue - 60) / 20).toFixed(6) + " V";
      default:
        return "Unsupported unit";
    }
  };

  const handleConvert = () => {
    if (quantity === "Power") {
      setOutputValue(convertPower(inputValue, dBUnit));
    } else {
      setOutputValue("Conversion for this quantity is coming soon.");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
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
              <Link to="/electrical-calculations">Electrical Calculations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Decibel Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Decibel (dB) Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            Convert decibel values (dBm, dBW, etc.) into linear units like watts or volts. This is useful in RF engineering,
            audio systems, and electrical calculations.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Quantity:</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border px-3 py-2 rounded dark:text-black"
              >
                <option value="Power">Power</option>
                <option value="Voltage">Voltage</option>
                <option value="Current">Current</option>
                <option value="Sound Pressure">Sound Pressure</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Decibel Unit:</label>
              <select
                value={dBUnit}
                onChange={(e) => setDbUnit(e.target.value)}
                className="w-full border px-3 py-2 rounded dark:text-black"
              >
                <option value="dBm">dBm</option>
                <option value="dBW">dBW</option>
                <option value="dBmV">dBmV</option>
                <option value="dBμV">dBμV</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Enter dB Value:</label>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Result:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{outputValue}</p>
            </div>
          </div>
          {/* Extra Content Section: About Decibels and Their Applications */}
<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Understanding Decibels (dB)</h2>
  <p>
    The **decibel (dB)** is a logarithmic unit used to express the ratio between two values of a physical quantity,
    often power or intensity. Because it is logarithmic, it is particularly useful in fields like acoustics, electronics,
    and telecommunications, where values can span several orders of magnitude. Instead of using large or small numbers,
    engineers use dB values to represent gains and losses in a more manageable format.
  </p>

  <h3 className="font-semibold text-base mt-4 mb-2">Why Use Decibels?</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Convenient Scale:** The dB scale allows wide-ranging values to be compressed into a readable and intuitive range.
    </li>
    <li>
      **Relative Measurement:** Decibels describe ratios, making it easy to compare signal levels or amplifier gains.
    </li>
    <li>
      **Additive Property:** Because logarithms turn multiplication into addition, gain or loss in a system can be
      easily summed when using dB.
    </li>
    <li>
      **Standardization:** Common in audio, RF, and power system design; dB simplifies communication and design documentation.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">Common dB Units Explained</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **dBm**: Decibels relative to 1 milliwatt (mW). It is used extensively in radio, microwave, and fiber optics to indicate power levels.
      <br /><strong>Formula:</strong> dBm = 10 × log₁₀(P / 1mW)
    </li>
    <li>
      **dBW**: Decibels relative to 1 watt (W). Used when working with higher power levels.
      <br /><strong>Formula:</strong> dBW = 10 × log₁₀(P / 1W)
    </li>
    <li>
      **dBmV**: Decibels relative to 1 millivolt (mV). Often used in cable television signal levels.
      <br /><strong>Formula:</strong> dBmV = 20 × log₁₀(V / 1mV)
    </li>
    <li>
      **dBμV**: Decibels relative to 1 microvolt (μV). Useful in measuring weak RF signals, such as those received by an antenna.
      <br /><strong>Formula:</strong> dBμV = 20 × log₁₀(V / 1μV)
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">Converting from Decibels to Linear Units</h3>
  <p>
    Since decibels are logarithmic, converting them back to linear values like watts or volts requires the use of
    exponentiation.
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>From dBm to Watts: P(W) = 10^((dBm - 30) / 10)</li>
    <li>From dBW to Watts: P(W) = 10^(dBW / 10)</li>
    <li>From dBmV to Volts: V(V) = 10^((dBmV - 60) / 20)</li>
    <li>From dBμV to Volts: V(V) = 10^((dBμV - 120) / 20)</li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">Real-World Examples</h3>
  <p>
    These conversions are more than academic exercises — they're used in real-world engineering systems. Here are some examples:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>
      A Wi-Fi router transmitting at **20 dBm** is actually outputting 100 mW of power.
      <br /><strong>Calculation:</strong> 10^((20 - 30)/10) = 0.1 W = 100 mW
    </li>
    <li>
      An audio amplifier with **0 dBW** output delivers 1 W of power. A **+10 dBW** signal means 10 W.
    </li>
    <li>
      A signal strength of **60 dBμV** corresponds to **1 mV** across a 75-ohm coaxial cable.
    </li>
    <li>
      A very weak antenna signal may be just **10 dBμV**, which is only **3.16 μV** in actual voltage.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">Engineering Applications</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **RF Communications:** In wireless systems, power levels are usually given in dBm. Antennas, transmitters, and receivers all operate within specific dB ranges.
    </li>
    <li>
      **Audio Engineering:** Sound pressure levels (SPL) in decibels are used to measure how loud a sound is relative to a baseline.
    </li>
    <li>
      **Signal Processing:** Gain, attenuation, and signal-to-noise ratios are all measured in dB.
    </li>
    <li>
      **Networking:** Cable losses, amplifier gains, and return loss are all described in dB terms in network design.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">Fun Facts About dB</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      A **3 dB** increase in power is approximately double the power. A **10 dB** increase is 10 times the power.
    </li>
    <li>
      Human hearing spans an enormous dynamic range, so dB is essential in describing perceptible changes in sound.
    </li>
    <li>
      The origin of the decibel comes from the “Bel,” named after Alexander Graham Bell. One Bel = 10 dB.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">Limitations and Warnings</h3>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>
      **Logarithmic Math:** You can't directly add dB values unless they are referencing the same quantity and impedance.
    </li>
    <li>
      **Units Matter:** Be sure you're using the correct reference when interpreting dB values. dBm and dBW have vastly different meanings.
    </li>
    <li>
      **Conversion Context:** Decibel values can describe voltage, current, or power, so using the wrong formula can lead to major miscalculations.
    </li>
  </ul>

  <h3 className="font-semibold text-base mt-4 mb-2">Summary Table</h3>
  <table className="w-full text-left border mt-2 text-sm">
    <thead className="bg-gray-800">
      <tr>
        <th className="p-2 border">dB Type</th>
        <th className="p-2 border">Reference</th>
        <th className="p-2 border">Used For</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-2 border">dBm</td>
        <td className="p-2 border">1 milliwatt</td>
        <td className="p-2 border">Wireless transmitters, RF design</td>
      </tr>
      <tr>
        <td className="p-2 border">dBW</td>
        <td className="p-2 border">1 watt</td>
        <td className="p-2 border">High power systems</td>
      </tr>
      <tr>
        <td className="p-2 border">dBmV</td>
        <td className="p-2 border">1 millivolt</td>
        <td className="p-2 border">Cable TV signals</td>
      </tr>
      <tr>
        <td className="p-2 border">dBμV</td>
        <td className="p-2 border">1 microvolt</td>
        <td className="p-2 border">Low voltage RF signals</td>
      </tr>
    </tbody>
  </table>

  <p className="mt-4">
    By understanding how to convert dB values and interpret their meaning, you gain powerful insight into the behavior of systems involving sound, signals, and power. This converter is designed to help engineers, technicians, and students move seamlessly between the logarithmic and linear worlds with confidence.
  </p>
</div>
<h2 className="font-semibold text-lg">How Decibels Are Used in the Real World</h2>
      <p>
        Decibels are not just a theoretical concept; they have broad applications in various fields. Here's how they are used in different industries:
      </p>
      
      <h3 className="font-semibold text-base mt-4 mb-2">Telecommunications and RF Design</h3>
      <p>
        In the world of wireless communication, RF (Radio Frequency) engineers rely on decibels to measure the strength of signals. Decibels make it easier to quantify small variations in signal strength, even over large distances. For instance, a signal with a strength of 0 dBm might be considered weak, while 50 dBm would be very strong.
      </p>
      
      <h3 className="font-semibold text-base mt-4 mb-2">Audio Engineering</h3>
      <p>
        In audio systems, decibels are used to describe sound levels. A speaker might have a sound pressure level (SPL) of 90 dB, which indicates how loud the sound is. Audio engineers use decibels to measure loudness, ensure sound systems are balanced, and prevent sound distortion.
      </p>
      
      <h3 className="font-semibold text-base mt-4 mb-2">Signal Processing and Amplification</h3>
      <p>
        Signal processing systems utilize decibels to quantify the gain or attenuation in a signal. A system might have a gain of 30 dB, which means the output signal is amplified by a factor of 1000. Engineers use decibels to monitor and adjust the performance of amplifiers, filters, and other components in a signal processing chain.
      </p>
      
      <h3 className="font-semibold text-base mt-4 mb-2">Acoustic Engineering</h3>
      <p>
        Acoustic engineers use decibels to measure sound levels in various environments. Whether it’s measuring noise pollution, designing soundproof rooms, or assessing the acoustics of a concert hall, decibels provide a consistent and scalable unit of measurement.
      </p>
      
      <h3 className="font-semibold text-base mt-4 mb-2">Power Systems</h3>
      <p>
        In power systems, decibels are used to express power levels and losses. Power engineers use decibels to quantify the efficiency of transformers, transmission lines, and other electrical components. A loss of 10 dB in a power system means the output power is only one-tenth of the original.
      </p>

      <h3 className="font-semibold text-base mt-4 mb-2">Networking</h3>
      <p>
        In networking, decibels are used to describe signal strength in cables, antennas, and wireless routers. For example, a signal loss of 3 dB corresponds to a halving of the signal strength. Networking professionals use decibels to determine the quality of connections and optimize performance.
      </p>

      <h3 className="font-semibold text-base mt-4 mb-2">Real-World Decibel Conversions</h3>
      <p>
        Let's consider some real-world examples of converting decibel values to linear values and understanding their implications in different contexts.
      </p>

      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>
          A **30 dBm** Wi-Fi signal corresponds to a power level of **1 W** (1000 mW).
        </li>
        <li>
          A **-30 dBm** signal strength would correspond to **0.001 W** or **1 mW**. This might be the signal strength you receive at the far end of a long-distance wireless link.
        </li>
        <li>
          A **50 dBW** signal could represent the power output of a large radio transmitter, indicating **100,000 W** of power.
        </li>
      </ul>

      <h3 className="font-semibold text-base mt-4 mb-2">Important Considerations When Using Decibels</h3>
      <p>
        While decibels are a very useful tool in many fields, there are a few considerations to keep in mind when using them:
      </p>

      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          **Logarithmic Nature**: Decibels are logarithmic, which means a small change in dB can represent a large change in power or signal strength.
        </li>
        <li>
          **Unit Consistency**: Always ensure you are using the correct reference unit (e.g., 1 mW for dBm, 1 W for dBW, etc.) when converting between dB values and linear units.
        </li>
        <li>
          **Measurement Context**: Ensure you're applying decibel calculations within the correct context. A signal strength of 30 dB might seem strong, but if it's measured relative to microvolts, it could still be a very weak signal.
        </li>
        <li>
          **Impedance Matching**: In many electrical systems, especially audio, ensuring impedance matching between components can significantly impact the effectiveness of decibel-based measurements.
        </li>
      </ul>

      <h3 className="font-semibold text-base mt-4 mb-2">Practical Applications of dB in Technology</h3>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          **Telecom Systems**: The signal strength of wireless telecom systems is often measured in dBm. For example, a cell tower might be designed to operate within a certain dBm range to ensure reliable communication.
        </li>
        <li>
          **Audio Systems**: Sound levels in a concert hall or audio system are measured in dB SPL (Sound Pressure Level). A speaker's performance is quantified based on its dB sensitivity rating.
        </li>
        <li>
          **Wireless Networking**: Wi-Fi routers and other wireless devices are often rated in terms of their dBm output. The higher the dBm, the stronger the signal and the longer the range.
        </li>
      </ul>
{/* Extra Content Section: Practical Use Cases of Decibel Conversions */}
<div className="space-y-8 mt-8">
  <h2 className="font-semibold text-lg mb-4">Practical Use Cases of Decibel Conversions</h2>
  <p>
    Decibels are crucial in various engineering fields, particularly in electrical, audio, and RF systems. Here are some real-world applications of dB conversions.
  </p>

  <div className="space-y-6">
    <h3 className="font-semibold text-base">1. RF Engineering</h3>
    <p>
      In RF engineering, signal power is commonly measured in dBm or dBW. By converting these values to linear units, engineers can evaluate the strength of transmitted signals, the efficiency of antennas, and the quality of receivers.
    </p>
    <p>
      For instance, a signal strength of **-50 dBm** can be converted to **0.00001 W**, which helps engineers assess whether a signal is strong enough for successful transmission or if amplification is needed.
    </p>

    <h3 className="font-semibold text-base">2. Audio Systems</h3>
    <p>
      In audio systems, decibels are used to measure sound pressure levels (SPL). SPL is a logarithmic measure that quantifies the intensity of sound, making it easier to describe extremely loud or quiet sounds. 
    </p>
    <p>
      Converting decibels to linear units like watts helps audio engineers design systems that ensure consistent audio levels and prevent distortion due to excessive power.
    </p>

    <h3 className="font-semibold text-base">3. Telecommunications</h3>
    <p>
      In telecommunications, dB is used to evaluate signal loss or gain in transmission lines, including cables, fiber optics, and satellite links. Engineers need to know the linear values of these signals to troubleshoot network problems and improve signal transmission.
    </p>

    <h3 className="font-semibold text-base">4. Power Systems</h3>
    <p>
      In power systems, dBW and dBm are often used to measure power levels for electrical circuits, ensuring equipment operates within safe limits. For example, converting dBm to watts helps engineers calculate power consumption and ensure the system does not exceed the power ratings of components.
    </p>

    <h3 className="font-semibold text-base">5. Sound Pressure in Acoustics</h3>
    <p>
      In acoustics, sound pressure levels (SPL) are measured in dB. A typical use case is in noise pollution studies or audio engineering, where it’s important to know the exact pressure of sound waves in real terms. Converting from dB to linear units helps quantify sound pressure, which is important for designing soundproofing systems or optimizing speaker placement.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-lg mb-4">Additional Insights into Decibel Calculations</h3>
    <p>
      Although dB is a versatile unit for many types of measurements, understanding its limitations and the context of conversion is key. Here are a few additional insights:
    </p>
    
    <h4 className="font-semibold text-base mt-4 mb-2">Adding Decibels: The Logarithmic Nature</h4>
    <p>
      Since decibels are logarithmic, **you cannot directly add dB values** unless the measurements are of the same type and reference. For instance, you can’t simply add dBm and dBW values together. Instead, they must first be converted to linear units like watts or volts, and then added.
    </p>

    <h4 className="font-semibold text-base mt-4 mb-2">Decibels in Series Systems</h4>
    <p>
      In systems where multiple components are in series, such as multiple amplifiers or attenuators, the decibel values of each component are added. This allows engineers to easily assess the overall system gain or loss without performing complicated multiplication.
    </p>

    <h4 className="font-semibold text-base mt-4 mb-2">The Importance of Impedance Matching</h4>
    <p>
      When working with decibels in power systems, it is important to ensure proper **impedance matching** between components. A mismatch can lead to reflections, signal losses, and inefficiencies. Impedance matching is especially critical in RF and audio systems to ensure the maximum power transfer and prevent signal degradation.
    </p>

    <h4 className="font-semibold text-base mt-4 mb-2">Precision and Tolerance in dB Measurements</h4>
    <p>
      It's essential to account for precision and tolerance when working with dB values in practical applications. **Small errors in measurement** can result in significant differences in the calculated power or signal level, especially in high-frequency systems like RF communications.
    </p>
  </div>
</div>

      <h3 className="font-semibold text-base mt-4 mb-2">Conclusion</h3>
      <p>
        Understanding decibels and how to convert between different dB values and linear units is crucial in many engineering and technical disciplines. Whether you're designing a wireless network, working on audio systems, or optimizing power systems, mastering decibel calculations is an invaluable skill.
      </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DBConverter;
