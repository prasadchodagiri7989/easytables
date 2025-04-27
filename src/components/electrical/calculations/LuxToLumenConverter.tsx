import React, { useState } from 'react';

const LuxToLumenConverter: React.FC = () => {
  const [lux, setLux] = useState<number>(0);  // Illuminance in lux (lx)
  const [area, setArea] = useState<number>(0);  // Area in square meters or square feet
  const [unit, setUnit] = useState<string>('m2');  // Area unit: m2 or ft2
  const [lumens, setLumens] = useState<number | string>('');  // Output luminous flux in lumens (lm)

  // Conversion function to calculate lumens
  const convertToLumens = (lux: number, area: number, unit: string) => {
    if (unit === 'ft2') {
      return 0.09290304 * lux * area;  // Lux to Lumens formula for square feet
    } else {
      return lux * area;  // Lux to Lumens formula for square meters
    }
  };

  const handleConvert = () => {
    const result = convertToLumens(lux, area, unit);
    setLumens(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      lux: 500,
      area: 4,
      expectedResult: 2000,
      unit: 'm2',
      description: 'Example: 500 lux on 4 square meters',
    },
    {
      lux: 500,
      area: 10,
      expectedResult: 464.515,
      unit: 'ft2',
      description: 'Example: 500 lux on 10 square feet',
    },
    {
      lux: 1000,
      area: 2,
      expectedResult: 2000,
      unit: 'm2',
      description: 'Example: 1000 lux on 2 square meters',
    },
  ];

  return (
    <div className="container">
      <h1>Lux to Lumens Converter</h1>

      <div>
        <label>Enter Illuminance in Lux (lx):</label>
        <input
          type="number"
          value={lux}
          onChange={(e) => setLux(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Enter Area:</label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Choose Area Unit:</label>
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="m2">Square Meters (m²)</option>
          <option value="ft2">Square Feet (ft²)</option>
        </select>
      </div>

      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      <div>
        <h2>Converted Luminous Flux (Lumens):</h2>
        <p>{lumens} lm</p>
      </div>

      <div>
        <h2>Examples:</h2>
        <ul>
          {examples.map((example, index) => (
            <li key={index}>
              <p><strong>{example.description}:</strong></p>
              <p>Illuminance: {example.lux} lx, Area: {example.area} {example.unit}</p>
              <p>Converted Luminous Flux: {example.expectedResult} lm</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formula:</h2>
        <p>
          <strong>lm = lx × m²</strong> (for square meters)
          <br />
          <strong>lm = 0.09290304 × lx × ft²</strong> (for square feet)
        </p>
        <p>
          Where:
          <ul>
            <li>lm = Luminous flux in lumens (lm)</li>
            <li>lx = Illuminance in lux (lx)</li>
            <li>m² = Area in square meters (m²)</li>
            <li>ft² = Area in square feet (ft²)</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Explanation:</h2>
        <p>
          The conversion from lux (lx) to lumens (lm) depends on the area that the light is spread over.
          <br />
          - For square meters: lumens (lm) = lux (lx) × area (m²)
          <br />
          - For square feet: lumens (lm) = 0.09290304 × lux (lx) × area (ft²)
          <br />
          This formula calculates how much luminous flux (in lumens) is received by the surface, based on the illuminance (in lux) and the area.
        </p>
      </div>

      <div>
        <h2>Example Calculation:</h2>
        <p>
          What is the luminous flux in lumens if an area of 4 square meters receives 500 lux of light?
          <br />
          Using the formula: lumens = lux × area, we get lumens = 500 × 4 = 2000 lm.
        </p>
      </div>
    </div>
  );
};

export default LuxToLumenConverter;