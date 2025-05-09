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

        </CardContent>
      </Card>
    </div>
  );
};

export default DBConverter;
