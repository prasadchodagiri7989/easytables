import React from 'react';

const VoltInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/40 dark:bg-transparent rounded-2xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold text-center">Volt (V)</h1>

      <section>
        <h2 className="text-2xl font-semibold">Volt Definition</h2>
        <p>
          Volt is the electrical unit of voltage or potential difference (symbol: V). One Volt is defined as energy consumption of one joule per electric charge of one coulomb:
        </p>
        <p className="font-mono">1V = 1J/C</p>
        <p>
          One volt is also equal to current of 1 amp times resistance of 1 ohm:
        </p>
        <p className="font-mono">1V = 1A ⋅ 1Ω</p>
        <p>
          The unit is named after Alessandro Volta, an Italian physicist who invented an electric battery.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Volt Subunits and Conversion</h2>
        <table className="table-auto w-full border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Symbol</th>
              <th className="border px-3 py-2">Conversion</th>
              <th className="border px-3 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">Microvolt</td>
              <td className="border px-3 py-2">μV</td>
              <td className="border px-3 py-2">1μV = 10⁻⁶V</td>
              <td className="border px-3 py-2">V = 30μV</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Millivolt</td>
              <td className="border px-3 py-2">mV</td>
              <td className="border px-3 py-2">1mV = 10⁻³V</td>
              <td className="border px-3 py-2">V = 5mV</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Volt</td>
              <td className="border px-3 py-2">V</td>
              <td className="border px-3 py-2">-</td>
              <td className="border px-3 py-2">V = 10V</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Kilovolt</td>
              <td className="border px-3 py-2">kV</td>
              <td className="border px-3 py-2">1kV = 10³V</td>
              <td className="border px-3 py-2">V = 2kV</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Megavolt</td>
              <td className="border px-3 py-2">MV</td>
              <td className="border px-3 py-2">1MV = 10⁶V</td>
              <td className="border px-3 py-2">V = 5MV</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Volts to Watts Conversion</h2>
        <p>The power in watts (W) is equal to the voltage in volts (V) times the current in amps (A):</p>
        <p className="font-mono">W = V × A</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Volts to Joules Conversion</h2>
        <p>The energy in joules (J) is equal to the voltage in volts (V) times the electric charge in coulombs (C):</p>
        <p className="font-mono">J = V × C</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Volts to Amps Conversion</h2>
        <p>The current in amps (A) is equal to the voltage in volts (V) divided by the resistance in ohms (Ω):</p>
        <p className="font-mono">A = V / Ω</p>
        <p>The current in amps (A) is also equal to the power in watts (W) divided by the voltage in volts (V):</p>
        <p className="font-mono">A = W / V</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Volts to Electron-Volts Conversion</h2>
        <p>The energy in electronvolts (eV) is equal to the potential difference or voltage in volts (V) times the electric charge in electron charges (e):</p>
        <p className="font-mono">eV = V × e</p>
        <p>where <span className="font-mono">e = 1.602176e-19 C</span></p>
      </section>
    </div>
  );
};

export default VoltInfo;
