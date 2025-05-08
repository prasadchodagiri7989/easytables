import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const DbmInfo = () => {
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
                    <Link to="/electrical/units">Electrical units</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Decibel-milliwatt</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
    <div className="max-w-4xl mx-auto p-6 bg-white/40 dark:bg-transparent rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">Decibel-milliwatt (dBm)</h1>

      <section>
        <h2 className="text-2xl font-semibold">dBm Definition</h2>
        <p>dBm or decibel-milliwatt is a unit of power in the decibel scale, referenced to 1 milliwatt (mW).</p>
        <p>
          The power in decibel-milliwatts (P(dBm)) is equal to 10 times base 10 logarithm of the power in milliwatts (P(mW)):
        </p>
        <p className="font-mono">P(dBm) = 10 × log₁₀(P(mW) / 1mW)</p>
        <p>
          The power in milliwatts (P(mW)) is equal to 10 raised by the power in decibel-milliwatts (P(dBm)) divided by 10:
        </p>
        <p className="font-mono">P(mW) = 1mW × 10^(P(dBm) / 10)</p>
        <p>
          1 milliwatt is equal to 0 dBm:<br/>
          <span className="font-mono">1mW = 0dBm</span><br/>
          1 watt is equal to 30 dBm:<br/>
          <span className="font-mono">1W = 1000mW = 30dBm</span>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">dBm to dBW, Watt, mW Conversion Calculator</h2>
        <p>Convert dBm to dBW, watt, and milliwatt.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>mW to dBm:</strong> <span className="font-mono">P(dBm) = 10 × log₁₀(P(mW))</span></li>
          <li><strong>dBm to mW:</strong> <span className="font-mono">P(mW) = 10^(P(dBm)/10)</span></li>
          <li><strong>W to dBm:</strong> <span className="font-mono">P(dBm) = 10 × log₁₀(P(W)) + 30</span></li>
          <li><strong>dBm to W:</strong> <span className="font-mono">P(W) = 10^((P(dBm) - 30)/10)</span></li>
          <li><strong>dBm to dBW:</strong> <span className="font-mono">P(dBW) = P(dBm) - 30</span></li>
          <li><strong>dBW to dBm:</strong> <span className="font-mono">P(dBm) = P(dBW) + 30</span></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How to Convert dBm to mW</h2>
        <p className="font-mono">P(mW) = 10^(P(dBm) / 10)</p>
        <p><strong>Example:</strong> What is the power in mW for 20 dBm?</p>
        <p className="font-mono">P(mW) = 10^(20 / 10) = 100 mW</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How to Convert mW to dBm</h2>
        <p className="font-mono">P(dBm) = 10 × log₁₀(P(mW))</p>
        <p><strong>Example:</strong> What is the power in dBm for 100 mW?</p>
        <p className="font-mono">P(dBm) = 10 × log₁₀(100) = 20 dBm</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How to Convert dBm to Watt</h2>
        <p className="font-mono">P(W) = 10^((P(dBm) - 30) / 10)</p>
        <p><strong>Example:</strong> What is the power in watts for 40 dBm?</p>
        <p className="font-mono">P(W) = 10^((40 - 30) / 10) = 10 W</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">How to Convert Watt to dBm</h2>
        <p className="font-mono">P(dBm) = 10 × log₁₀(P(W)) + 30</p>
        <p><strong>Example:</strong> What is the power in dBm for 10 W?</p>
        <p className="font-mono">P(dBm) = 10 × log₁₀(10) + 30 = 40 dBm</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Conversion Table</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">dBm</th>
              <th className="border px-3 py-2">dBW</th>
              <th className="border px-3 py-2">Watt</th>
              <th className="border px-3 py-2">mW</th>
            </tr>
          </thead>
          <tbody>
            {[
              [-100, -130, '0.1 pW', '0.0000000001 mW'],
              [-90, -120, '1 pW', '0.000000001 mW'],
              [-80, -110, '10 pW', '0.00000001 mW'],
              [-70, -100, '100 pW', '0.0000001 mW'],
              [-60, -90, '1 nW', '0.000001 mW'],
              [-50, -80, '10 nW', '0.00001 mW'],
              [-40, -70, '100 nW', '0.0001 mW'],
              [-30, -60, '1 μW', '0.001 mW'],
              [-20, -50, '10 μW', '0.01 mW'],
              [-10, -40, '100 μW', '0.1 mW'],
              [-1, -31, '794 μW', '0.794 mW'],
              [0, -30, '1 mW', '1.000 mW'],
              [1, -29, '1.259 mW', '1.259 mW'],
              [10, -20, '10 mW', '10 mW'],
              [20, -10, '100 mW', '100 mW'],
              [30, 0, '1 W', '1000 mW'],
              [40, 10, '10 W', '10000 mW'],
              [50, 20, '100 W', '100000 mW'],
              [60, 30, '1 kW', '1000000 mW'],
              [70, 40, '10 kW', '10000000 mW'],
              [80, 50, '100 kW', '100000000 mW'],
              [90, 60, '1 MW', '1000000000 mW'],
              [100, 70, '10 MW', '10000000000 mW']
            ].map(([dbm, dbw, w, mw]) => (
              <tr key={dbm}>
                <td className="border px-3 py-1 text-center">{dbm} dBm</td>
                <td className="border px-3 py-1 text-center">{dbw} dBW</td>
                <td className="border px-3 py-1 text-center">{w}</td>
                <td className="border px-3 py-1 text-center">{mw}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
    <section>
  <h2 className="text-2xl font-semibold">Where dBm is Commonly Used</h2>
  <p>
    The dBm unit is widely used in telecommunications, radio frequency (RF) engineering, and network signal strength measurement. Devices such as mobile phones, Wi-Fi routers, antennas, and signal amplifiers express power levels in dBm to provide a standardized way to measure performance.
  </p>
  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li>Cellular signal strength (e.g., -85 dBm indicates weak signal)</li>
    <li>RF output of transmitters and signal boosters</li>
    <li>Power levels in optical fiber communication</li>
    <li>Wi-Fi signal strength diagnostics</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Interpreting dBm Readings</h2>
  <p>
    dBm values are logarithmic, so a 10 dB increase represents 10 times more power. Lower (more negative) dBm values indicate weaker signals, while higher values show stronger ones. For instance:
  </p>
  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li>-30 dBm: Excellent signal strength (very strong)</li>
    <li>-50 dBm to -70 dBm: Good and usable signals</li>
    <li>-85 dBm: Weak signal (may be unreliable)</li>
    <li>-100 dBm or lower: Poor or no signal</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Advantages of Using dBm</h2>
  <p>
    The dBm scale provides a more intuitive way to compare signal strength and power levels. Its logarithmic nature allows large ranges of power to be expressed in a compact, readable format:
  </p>
  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li>Easy to perform addition/subtraction of gains and losses in dB</li>
    <li>Common base for communication and RF analysis tools</li>
    <li>Standard unit in documentation and system configuration</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Important Notes and Limitations</h2>
  <p>
    While dBm is widely used, it's important to understand that it's only meaningful when referenced to 1 mW. It does not reflect voltage directly and requires impedance context (like 50 ohms in RF) to convert to volts. Also, values in dBm cannot be added arithmetically:
  </p>
  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li>Never add dBm values directly; convert to linear (mW) first if needed</li>
    <li>Only valid for absolute power, not signal-to-noise ratios (use dB for that)</li>
    <li>Always ensure consistent units when converting (mW, W, etc.)</li>
  </ul>
</section>
<section>
  <h2 className="text-2xl font-semibold">dBm in Wireless Communication</h2>
  <p>
    In wireless systems, dBm is crucial for evaluating signal quality, planning coverage areas, and tuning transmission parameters. Engineers and technicians frequently use dBm to assess whether a wireless signal is strong enough to ensure reliable data transfer without excessive noise or dropouts.
  </p>
  <p className="mt-2">
    For instance, in Wi-Fi diagnostics:
  </p>
  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li><strong>-30 dBm to -50 dBm</strong>: Excellent signal strength, ideal for most applications</li>
    <li><strong>-60 dBm to -70 dBm</strong>: Acceptable for web browsing and streaming</li>
    <li><strong>-80 dBm or lower</strong>: Risk of dropped connections and low speeds</li>
  </ul>
  <p className="mt-4">
    In cellular networks, signal strength thresholds often help determine whether handoff to a new tower is required or if boosting equipment (like a repeater) is necessary. dBm values also guide antenna alignment and placement strategies.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Comparing dBm and dBW</h2>
  <p>
    Both dBm and dBW are logarithmic power measurements, but they differ in their reference points:
  </p>
  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li><strong>dBm</strong>: Referenced to 1 milliwatt (mW)</li>
    <li><strong>dBW</strong>: Referenced to 1 watt (W)</li>
  </ul>
  <p className="mt-2">
    To convert between the two:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li>dBm = dBW + 30</li>
    <li>dBW = dBm - 30</li>
  </ul>
  <p>
    This distinction is important in high-power systems like broadcasting or industrial RF, where watt-level power is common, and in low-power electronics or RF front ends, where milliwatt or microwatt levels are the norm.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Why dBm Is Preferred Over Watts in Practice</h2>
  <p>
    Engineers prefer dBm in RF and signal systems because:
  </p>
  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li>It simplifies handling of large power ranges</li>
    <li>It aligns with dB calculations for gain/loss (like in amplifiers or cables)</li>
    <li>It avoids scientific notation in very small/large power values</li>
    <li>It is directly supported by most test instruments and datasheets</li>
  </ul>
  <p className="mt-2">
    Additionally, using dBm allows for easy addition and subtraction of system components’ gains and losses using basic arithmetic.
  </p>
</section>
<section>
  <h2 className="text-2xl font-semibold">Applications of dBm in Real-World Systems</h2>
  <p>
    The decibel-milliwatt (dBm) unit is widely used across various domains in electronics and communication engineering. It provides a standardized way to express absolute power levels, enabling engineers to compare signal strengths, system gains, and losses consistently.
  </p>
  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>
      <strong>Wireless Communications:</strong> dBm is used to describe the received signal strength indicator (RSSI), important in Wi-Fi, LTE, and 5G.
    </li>
    <li>
      <strong>Audio Engineering:</strong> In audio systems, dBm can be used to describe power levels delivered to a 600-ohm load.
    </li>
    <li>
      <strong>Fiber Optics:</strong> Optical transceivers specify power levels in dBm to indicate signal strength at both the transmitter and receiver ends.
    </li>
    <li>
      <strong>Satellite Communications:</strong> dBm is crucial in link budget analysis, where engineers must account for gains and losses across long distances.
    </li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">dBm and System Design: Link Budget Example</h2>
  <p>
    In radio frequency (RF) systems, calculating the link budget is critical. It includes the transmitted power, antenna gains, cable losses, and other factors — most of which are measured in decibels or dBm.
  </p>
  <p className="mt-2">
    Example:
  </p>
  <ul className="list-disc pl-6">
    <li>Transmitter Power: <code>20 dBm</code></li>
    <li>Transmit Antenna Gain: <code>+6 dBi</code></li>
    <li>Cable Loss: <code>-2 dB</code></li>
    <li>Free Space Path Loss: <code>-80 dB</code></li>
    <li>Receive Antenna Gain: <code>+6 dBi</code></li>
  </ul>
  <p className="mt-2">
    <strong>Received Power:</strong> <code>20 + 6 - 2 - 80 + 6 = -50 dBm</code>
  </p>
  <p>
    This tells you the signal received at the other end of the link is -50 dBm, which can then be compared against the receiver sensitivity for proper functioning.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Receiver Sensitivity and Noise Floor</h2>
  <p>
    In communication systems, receiver sensitivity is the minimum dBm level at which a receiver can detect a signal with acceptable performance. It must be above the noise floor — typically around <code>-90 dBm to -110 dBm</code> depending on the system.
  </p>
  <p>
    A signal received below the noise floor is likely to be lost or highly distorted. Engineers use dBm to determine how much gain or amplification is needed to recover weak signals.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Using dBm in Test Equipment</h2>
  <p>
    Spectrum analyzers, signal generators, and RF power meters frequently use dBm as the default unit for displaying signal strength. This ensures consistency across measurements, even when dealing with extremely low or high power signals.
  </p>
  <p>
    For instance:
  </p>
  <ul className="list-disc pl-6 mt-2">
    <li><strong>Spectrum Analyzer:</strong> Measures signal peaks in dBm.</li>
    <li><strong>RF Generator:</strong> Configured to output -10 dBm for precise testing.</li>
    <li><strong>Power Sensor:</strong> Displays output directly in dBm for continuous RF power monitoring.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Limitations and Considerations</h2>
  <p>
    While dBm is extremely useful, it has limitations:
  </p>
  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>dBm cannot be directly added or subtracted like linear units (e.g., watts or volts).</li>
    <li>It only represents power, not voltage or current directly unless impedance is known.</li>
    <li>dBm is not meaningful in systems where power is not the primary concern (like digital logic levels).</li>
  </ul>
</section>
    </>
  );
};

export default DbmInfo;
