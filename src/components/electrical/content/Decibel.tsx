import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const DecibelInfo = () => {
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
                      <BreadcrumbPage>Decibel</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
              </Breadcrumb>
    <div className="max-w-4xl mx-auto p-6 bg-white/40 dark:bg-transparent rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">Decibel (dB)</h1>

      <section>
        <h2 className="text-2xl font-semibold">Decibel (dB) Definition</h2>
        <p>Decibel (symbol: dB) is a logarithmic, dimensionless unit used to express the ratio between two values of power or amplitude.</p>
        <p>It is commonly used to describe audio levels, electrical signals, and signal gains or losses in communication systems.</p>
        <p>1 Bel = 10 dB</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Power Ratio to dB Conversion</h2>
        <p className="font-mono">RatiodB = 10 × log₁₀(P1 / P0)</p>
        <p><strong>Example:</strong> Input power = 5W, Output power = 10W</p>
        <p className="font-mono">GdB = 10 × log₁₀(10/5) = 3.01 dB</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">dB to Power Ratio Conversion</h2>
        <p className="font-mono">P2 = P1 × 10^(GdB / 10)</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Amplitude Ratio to dB Conversion</h2>
        <p className="font-mono">GdB = 20 × log₁₀(A2 / A1)</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">dB to Amplitude Ratio Conversion</h2>
        <p className="font-mono">A2 = A1 × 10^(GdB / 20)</p>
        <p><strong>Example:</strong> Input voltage = 5V, Gain = 6 dB</p>
        <p className="font-mono">Vout = 5 × 10^(6 / 20) ≈ 10V</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Signal to Noise Ratio (SNR)</h2>
        <p className="font-mono">SNRdB = 10 × log₁₀(Asignal / Anoise)</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Absolute Decibel Units</h2>
        <table className="table-auto w-full border text-sm mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Unit</th>
              <th className="border px-3 py-2">Reference</th>
              <th className="border px-3 py-2">Quantity</th>
              <th className="border px-3 py-2">Ratio Type</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['dBm', '1 mW', 'electric power', 'power'],
              ['dBW', '1 W', 'electric power', 'power'],
              ['dBV', '1 VRMS', 'voltage', 'amplitude'],
              ['dBu', '0.775 VRMS', 'voltage', 'amplitude'],
              ['dBSPL', '20 μPa', 'sound pressure', 'amplitude'],
              ['dBμV', '1 μV', 'voltage', 'amplitude'],
              ['dBμA', '1 μA', 'current', 'amplitude']
            ].map(([unit, ref, quantity, ratio]) => (
              <tr key={unit}>
                <td className="border px-3 py-1 text-center">{unit}</td>
                <td className="border px-3 py-1 text-center">{ref}</td>
                <td className="border px-3 py-1 text-center">{quantity}</td>
                <td className="border px-3 py-1 text-center">{ratio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">dB to Ratio Conversion Table</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">dB</th>
              <th className="border px-3 py-2">Amplitude Ratio</th>
              <th className="border px-3 py-2">Power Ratio</th>
            </tr>
          </thead>
          <tbody>
            {[
              [-100, '10⁻⁵', '10⁻¹⁰'],
              [-50, '0.00316', '0.00001'],
              [-20, '0.1', '0.01'],
              [-10, '0.316', '0.1'],
              [-3, '0.708', '0.501'],
              [0, '1', '1'],
              [3, '1.413', '2'],
              [10, '3.162', '10'],
              [20, '10', '100'],
              [30, '31.623', '1000'],
              [40, '100', '10000'],
              [50, '316.228', '100000']
            ].map(([db, amp, power]) => (
              <tr key={db}>
                <td className="border px-3 py-1 text-center">{db} dB</td>
                <td className="border px-3 py-1 text-center">{amp}</td>
                <td className="border px-3 py-1 text-center">{power}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Sound Level Meter</h2>
        <p>A sound level meter (SPL meter) measures the sound pressure level of sound waves in decibels (dB-SPL).</p>
        <p>It is commonly used to monitor noise pollution and environmental sound levels.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">dB-SPL Table</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Sound Type</th>
              <th className="border px-3 py-2">Sound Level (dB-SPL)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Hearing Threshold', '0 dB-SPL'],
              ['Whisper', '30 dB-SPL'],
              ['Air Conditioner', '50–70 dB-SPL'],
              ['Conversation', '50–70 dB-SPL'],
              ['Traffic', '60–85 dB-SPL'],
              ['Loud Music', '90–110 dB-SPL'],
              ['Airplane', '120–140 dB-SPL']
            ].map(([type, level]) => (
              <tr key={type}>
                <td className="border px-3 py-1 text-center">{type}</td>
                <td className="border px-3 py-1 text-center">{level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
  <h2 className="text-2xl font-semibold">Why Use a Logarithmic Scale?</h2>
  <p>The decibel scale is logarithmic because it better represents how humans perceive changes in sound and signal intensity. For example, doubling the power of a signal doesn't sound "twice as loud" to the human ear. Instead, a 10 dB increase is perceived as approximately twice as loud.</p>
  <p>Additionally, using logarithms makes it easier to handle the vast range of values in power and amplitude in electronics and acoustics.</p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Real-World Applications of Decibels</h2>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Audio Engineering:</strong> Decibels are used to calibrate equipment, set gain levels, and measure sound intensity.</li>
    <li><strong>Telecommunications:</strong> Used to express signal losses and gains in dB through transmission lines and antennas.</li>
    <li><strong>Networking:</strong> Signal strength in wireless networking (Wi-Fi, mobile data) is commonly measured in dBm.</li>
    <li><strong>Broadcasting:</strong> TV and radio engineers use dB levels to manage broadcast power and clarity.</li>
    <li><strong>Medical Equipment:</strong> Audiometers use dB to determine hearing thresholds.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Common Misconceptions</h2>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>dB is not an absolute unit:</strong> Without a reference, dB only expresses a relative change or ratio.</li>
    <li><strong>10 dB is not 10x louder:</strong> A 10 dB increase corresponds to a 10× increase in power, but only sounds about twice as loud.</li>
    <li><strong>Amplitude ≠ Power:</strong> Power is proportional to the square of amplitude, which is why amplitude uses 20×log₁₀ and power uses 10×log₁₀.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Decibel Notations and Context</h2>
  <p>Here are several notations used in different fields, depending on the reference point:</p>
  <ul className="list-disc list-inside space-y-1">
    <li><strong>dBm:</strong> Relative to 1 milliwatt, common in RF engineering.</li>
    <li><strong>dBW:</strong> Relative to 1 watt, used in satellite communications.</li>
    <li><strong>dB SPL:</strong> Sound Pressure Level, referenced to 20 µPa, the human hearing threshold.</li>
    <li><strong>dBV:</strong> Voltage level referenced to 1 volt.</li>
    <li><strong>dBu:</strong> Voltage level referenced to 0.775 volts, common in audio.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Practical Tips for Engineers</h2>
  <ul className="list-disc list-inside space-y-2">
    <li>Always check if the dB value is for <strong>power</strong> or <strong>amplitude</strong> to apply the correct formula (10×log or 20×log).</li>
    <li>In RF systems, consider cable losses and antenna gain in dB to estimate effective radiated power.</li>
    <li>In audio systems, maintain levels within recommended dBu or dBV ranges to avoid distortion or noise.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Frequently Asked Questions (FAQ)</h2>
  <div className="space-y-4">
    <div>
      <p className="font-semibold">Q: Is a negative dB value bad?</p>
      <p>A: Not necessarily. A negative dB means the output is lower than the reference input. It's common in attenuation, signal loss, or measuring background noise.</p>
    </div>
    <div>
      <p className="font-semibold">Q: What’s the difference between dB and dBm?</p>
      <p>A: dB is a relative unit comparing two values, while dBm is an absolute unit referencing 1 milliwatt.</p>
    </div>
    <div>
      <p className="font-semibold">Q: Can decibels be added?</p>
      <p>A: You can’t directly add values in dB unless they refer to gains or losses in a chain. To combine power levels, convert to watts, add them, and convert back to dB.</p>
    </div>
    <div>
      <p className="font-semibold">Q: Is dB used only for sound?</p>
      <p>A: No, it is used in audio, radio frequency, telecommunications, acoustics, and even optics for describing relative intensities.</p>
    </div>
  </div>
</section>
<section>
  <h2 className="text-2xl font-semibold">Why Use Decibels?</h2>
  <p>
    The decibel scale simplifies dealing with very large or small numbers, especially when expressing signal gains and losses.
    It's particularly useful because it converts multiplication and division into simple addition and subtraction.
  </p>
  <p>
    For example, if an amplifier boosts a signal by 3 dB and another stage adds 6 dB, the total gain is simply 9 dB—rather than multiplying ratios.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Decibels in Audio Engineering</h2>
  <p>
    In audio systems, decibels are used to describe:
  </p>
  <ul className="list-disc list-inside">
    <li>Loudness levels (measured in dB-SPL)</li>
    <li>Microphone and speaker sensitivities (dBV or dBu)</li>
    <li>Gain or attenuation of amplifiers (dB gain)</li>
  </ul>
  <p>
    Understanding how dB relates to human hearing is essential: the just-noticeable difference (JND) in loudness is around 1 dB, and a 10 dB increase is perceived as roughly twice as loud.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">dB in Networking and RF</h2>
  <p>
    In telecommunications and radio frequency (RF) engineering, decibels are used to quantify signal strength, path loss, antenna gain, and more.
  </p>
  <p>
    Common terms include:
  </p>
  <ul className="list-disc list-inside">
    <li><strong>dBm:</strong> signal strength relative to 1 milliwatt</li>
    <li><strong>dBi:</strong> antenna gain relative to an isotropic radiator</li>
    <li><strong>dBc:</strong> carrier to noise ratio, used in satellite and cable</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">dB in Control Systems and Instrumentation</h2>
  <p>
    Control systems use dB for describing feedback loop gain and attenuation. For example, Bode plots display frequency response using gain in dB vs. frequency (log scale).
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Cautions When Using Decibels</h2>
  <ul className="list-disc list-inside">
    <li>Always check whether you're dealing with power or amplitude (use 10×log or 20×log appropriately).</li>
    <li>dB values are not additive unless they refer to the same type of quantity (e.g., power-to-power or amplitude-to-amplitude).</li>
    <li>dB is unitless but context-sensitive. dBm and dBW are absolute; plain dB is relative.</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Quick dB Gain Reference</h2>
  <table className="table-auto w-full border mt-4 text-sm">
    <thead>
      <tr className="bg-gray-100 dark:text-black">
        <th className="border px-3 py-2">Gain (dB)</th>
        <th className="border px-3 py-2">Voltage Ratio</th>
        <th className="border px-3 py-2">Power Ratio</th>
      </tr>
    </thead>
    <tbody>
      {[
        [1, '1.12×', '1.26×'],
        [3, '1.41×', '2×'],
        [6, '2×', '4×'],
        [10, '3.16×', '10×'],
        [20, '10×', '100×'],
        [40, '100×', '10,000×']
      ].map(([db, volt, power]) => (
        <tr key={db}>
          <td className="border px-3 py-1 text-center">{db} dB</td>
          <td className="border px-3 py-1 text-center">{volt}</td>
          <td className="border px-3 py-1 text-center">{power}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

<section>
  <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
  <div className="space-y-4">
    <div>
      <p className="font-semibold">Q: Is a higher dB value always better?</p>
      <p>A: Not necessarily. Higher dB indicates more power or amplitude, but in noise levels or distortion, higher values can be undesirable.</p>
    </div>
    <div>
      <p className="font-semibold">Q: What’s the difference between dB and dBm?</p>
      <p>A: dB is a relative unit comparing two values; dBm is an absolute unit referencing 1 milliwatt of power.</p>
    </div>
    <div>
      <p className="font-semibold">Q: Can I just add dB values together?</p>
      <p>A: Only when they refer to the same quantity (e.g., power gains or losses in a linear system). Otherwise, conversions must be done carefully.</p>
    </div>
  </div>
</section>
<section>
  <h2 className="text-2xl font-semibold">Logarithmic Nature of Decibels</h2>
  <p>
    The logarithmic scale means that small dB changes can indicate large real-world differences. For instance, increasing a signal by 3 dB doubles the power, while decreasing it by 3 dB halves it. This makes decibels ideal for expressing dynamic ranges and signal strength over wide scales.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Dynamic Range and Headroom</h2>
  <p>
    Dynamic range refers to the difference between the quietest and loudest signals a system can handle, measured in dB. In audio, high dynamic range is desirable for clarity and detail. Headroom is the extra space above the nominal level to prevent distortion, often around +12 dB in audio systems.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Noise Floor and Signal-to-Noise Ratio (SNR)</h2>
  <p>
    The noise floor is the level of background noise in a system. The signal-to-noise ratio (SNR) measures how much stronger the signal is compared to that noise, expressed in dB:
  </p>
  <p><strong>SNR (dB) = 10 × log₁₀ (Signal Power / Noise Power)</strong></p>
  <p>
    A higher SNR means cleaner signals. In telecommunications, an SNR of 20 dB is good, while in high-fidelity audio, 90 dB or higher is preferred.
  </p>
</section>

<section>
  <h2 className="text-2xl font-semibold">Attenuation vs. Amplification</h2>
  <p>
    When a signal passes through cables, filters, or air, it can lose power (attenuation). Conversely, amplifiers increase power. Both are measured in dB:
  </p>
  <ul className="list-disc list-inside">
    <li><strong>Positive dB:</strong> Amplification (gain)</li>
    <li><strong>Negative dB:</strong> Attenuation (loss)</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Examples of dB Values in Real Life</h2>
  <ul className="list-disc list-inside">
    <li><strong>0 dB SPL:</strong> Threshold of hearing</li>
    <li><strong>30 dB SPL:</strong> Whisper</li>
    <li><strong>60 dB SPL:</strong> Normal conversation</li>
    <li><strong>90 dB SPL:</strong> Lawnmower (long exposure can damage hearing)</li>
    <li><strong>120 dB SPL:</strong> Jet engine (pain threshold)</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">dB and Bit Depth in Digital Audio</h2>
  <p>
    In digital systems, bit depth determines dynamic range. Each bit adds ~6.02 dB of range. For example:
  </p>
  <ul className="list-disc list-inside">
    <li>8-bit audio: ~48 dB dynamic range</li>
    <li>16-bit audio (CD quality): ~96 dB</li>
    <li>24-bit audio: ~144 dB</li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Comparing dB Units</h2>
  <table className="table-auto w-full border mt-4 text-sm">
    <thead>
      <tr className="bg-gray-100 dark:text-black">
        <th className="border px-3 py-2">Unit</th>
        <th className="border px-3 py-2">Reference</th>
        <th className="border px-3 py-2">Usage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-3 py-1">dB</td>
        <td className="border px-3 py-1">Relative (no absolute ref)</td>
        <td className="border px-3 py-1">Gain, attenuation, SNR</td>
      </tr>
      <tr>
        <td className="border px-3 py-1">dBm</td>
        <td className="border px-3 py-1">1 mW (milliwatt)</td>
        <td className="border px-3 py-1">RF, telecom, audio power</td>
      </tr>
      <tr>
        <td className="border px-3 py-1">dBW</td>
        <td className="border px-3 py-1">1 W (watt)</td>
        <td className="border px-3 py-1">High-power systems</td>
      </tr>
      <tr>
        <td className="border px-3 py-1">dBV</td>
        <td className="border px-3 py-1">1 V (volt)</td>
        <td className="border px-3 py-1">Audio voltage signals</td>
      </tr>
      <tr>
        <td className="border px-3 py-1">dBu</td>
        <td className="border px-3 py-1">0.775 V</td>
        <td className="border px-3 py-1">Pro audio line level</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2 className="text-2xl font-semibold">Conversion Tips</h2>
  <p>
    Need to convert dBm to mW? Use the reverse of the dB formula:
  </p>
  <p><strong>P (mW) = 10^(dBm / 10)</strong></p>
  <p>Example: 20 dBm = 100 mW</p>
  <p>
    To convert back to dBm from milliwatts:
  </p>
  <p><strong>dBm = 10 × log₁₀(P / 1 mW)</strong></p>
</section>

    </div>
    </>
  );
};

export default DecibelInfo;
