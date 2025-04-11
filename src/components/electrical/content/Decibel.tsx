import React from 'react';

const DecibelInfo = () => {
  return (
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
    </div>
  );
};

export default DecibelInfo;
