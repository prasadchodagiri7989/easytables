import React, { useState } from 'react';

const MilliAmpsToAmpsConverter: React.FC = () => {
  const [milliAmps, setMilliAmps] = useState<number>(0);  // Input current in milliamps (mA)
  const [amps, setAmps] = useState<number | string>('');  // Output current in amps (A)
  const [error, setError] = useState<string>('');  // Error message for invalid input

  // Conversion function to calculate amps
  const convertToAmps = (milliAmps: number) => {
    return milliAmps / 1000;  // Formula to convert milliamps to amps
  };

  const handleConvert = () => {
    if (milliAmps < 0) {
      setError('Please enter a positive value for milliamps.');
      setAmps('');
      return;
    }
    setError('');
    const result = convertToAmps(milliAmps);
    setAmps(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      milliAmps: 300,
      expectedResult: 0.3,
      description: 'Example: Convert 300 milliamps to amps',
    },
    {
      milliAmps: 5000,
      expectedResult: 5,
      description: 'Example: Convert 5000 milliamps to amps',
    },
    {
      milliAmps: 150,
      expectedResult: 0.15,
      description: 'Example: Convert 150 milliamps to amps',
    },
  ];

  return (
    <div className="container">
      <h1>MilliAmps to Amps Converter</h1>

      <div>
        <label>Enter Current in Milliamps (mA):</label>
        <input
          type="number"
          value={milliAmps}
          onChange={(e) => setMilliAmps(Number(e.target.value))}
          placeholder="Enter value in milliamps"
        />
      </div>

      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <h2>Converted Current (Amps):</h2>
        <p>{amps} A</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Milliamps: {example.milliAmps} mA</p>
              <p>Converted Amps: {example.expectedResult} A</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>A = mA / 1000</strong>
        </p>
        <p>
          Where:
          <ul>
            <li>A = Current in amps (A)</li>
            <li>mA = Current in milliamps (mA)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from milliamps (mA) to amps (A) is simple. Since there are 1000 milliamps in one amp, you just divide the value in milliamps by 1000 to get the value in amps.
        </p>
        <p>
          - *1 milliamp (mA) = 1/1000 amp (A)*<br />
          - *Example: 300 mA = 0.3 A*
        </p>
      </div>

      <div>
        <h2>Example Calculation:</h2>
        <p>
          What is the current in amps if the current is 300 milliamps? 
          <br />
          Using the formula: A = mA / 1000, we get A = 300 / 1000 = 0.3 A.
        </p>
        <p>
          Similarly, if you have 5000 mA, the result will be 5 A, which is simply 5000 / 1000.
        </p>
      </div>

      <div>
        <h2>Related Concepts:</h2>
        <p>
          - *Milliamps (mA):* A milliamps is one-thousandth of an amp. It is a unit of current commonly used for measuring smaller electrical currents. For instance, a small electronic device might draw current in the range of milliamps.
        </p>
        <p>
          - *Amps (A):* Amps, short for amperes, is the base unit of electrical current in the International System of Units (SI). It is used to measure the flow of electric charge.
        </p>
        <p>
          - *Current (I):* Current refers to the flow of electric charge through a conductor, measured in amperes (A). The unit 'ampere' is named after André-Marie Ampère, a French physicist who is considered one of the founders of electrodynamics.
        </p>
      </div>

      <div>
        <h2>Common Current Conversion Scenarios:</h2>
        <p>
          Many devices and tools use current ratings in milliamps (mA), but electric circuits, especially larger ones, are often rated in amps (A). For example:
        </p>
        <ul>
          <li><strong>Microcontroller circuits:</strong> Typically use values in milliamps (mA) for current measurements.</li>
          <li><strong>Household appliances:</strong> Often have current ratings in amps (A). For example, a toaster or air conditioner may use several amps of current.</li>
        </ul>
      </div>

      <div>
        <h2>Additional Conversion Tools:</h2>
        <p>
          If you're working with electricity and need to convert between different units of measurement, here are some useful tools:
        </p>
        <ul>
          <li><strong>Watt to Amp Converter:</strong> Converts electrical power (watts) to current (amps) given the voltage.</li>
          <li><strong>Voltage to Current Calculator:</strong> Converts voltage to current using Ohm’s Law (V = IR).</li>
          <li><strong>Resistance to Current Calculator:</strong> Use this tool to calculate the current in a circuit when resistance and voltage are known.</li>
        </ul>
      </div>
    </div>
  );
};

export default MilliAmpsToAmpsConverter;