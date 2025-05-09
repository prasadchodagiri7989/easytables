import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const LumenToLuxConverter: React.FC = () => {
  const [lumens, setLumens] = useState<number>(0);  // Luminous flux in lumens (lm)
  const [area, setArea] = useState<number>(0);  // Area in square meters or square feet
  const [unit, setUnit] = useState<string>('m2');  // Area unit: m2 or ft2
  const [lux, setLux] = useState<number | string>('');  // Output illuminance in lux (lx)

  // Conversion function to calculate lux
  const convertToLux = (lumens: number, area: number, unit: string): number => {
    if (unit === 'ft2') {
      return (10.76391 * lumens) / area;  // Lumens to Lux formula for square feet
    } else {
      return lumens / area;  // Lumens to Lux formula for square meters
    }
  };

  const handleConvert = () => {
    const result = convertToLux(lumens, area, unit);
    setLux(result);
  };

  // Example scenarios for better understanding
  const examples = [
    {
      lumens: 2000,
      area: 4,
      expectedResult: 500,
      unit: 'm2',
      description: 'Example: 2000 lumens on 4 square meters',
    },
    {
      lumens: 2000,
      area: 10,
      expectedResult: 186.48,
      unit: 'ft2',
      description: 'Example: 2000 lumens on 10 square feet',
    },
    {
      lumens: 1000,
      area: 2,
      expectedResult: 500,
      unit: 'm2',
      description: 'Example: 1000 lumens on 2 square meters',
    },
  ];

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
              <Link to="/lighting-calculations">Lighting Calculations</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Lumen to Lux Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Lumen to Lux Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert luminous flux in lumens (lm) to illuminance in lux (lx) depending on the area and the unit of measurement.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Luminous Flux in Lumens (lm):</label>
              <input
                type="number"
                value={lumens}
                onChange={(e) => setLumens(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Area:</label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Choose Area Unit:</label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full border px-3 py-2 rounded dark:text-black"
              >
                <option value="m2">Square Meters (m²)</option>
                <option value="ft2">Square Feet (ft²)</option>
              </select>
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            <div>
              <strong>Converted Illuminance:</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{lux} lx</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Lumens: {example.lumens} lm, Area: {example.area} {example.unit}</p>
                    <p>Converted Illuminance: {example.expectedResult} lx</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>lx = lm / m²</strong> (for square meters)
                <br />
                <strong>lx = 10.76391 × lm / ft²</strong> (for square feet)
              </p>
              <p>
                Where:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>lx = Illuminance in lux (lx)</li>
                  <li>lm = Luminous flux in lumens (lm)</li>
                  <li>m² = Area in square meters (m²)</li>
                  <li>ft² = Area in square feet (ft²)</li>
                </ul>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from lumens (lm) to lux (lx) depends on the area that the light is spread over.
                <br />
                - For square meters: lux (lx) = lumens (lm) / area (m²)
                <br />
                - For square feet: lux (lx) = 10.76391 × lumens (lm) / area (ft²)
                <br />
                This formula calculates how much illuminance (in lux) is received over a given area.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                What is the illuminance in lux if a light source produces 2000 lumens and is spread over an area of 4 square meters?
                <br />
                Using the formula: lux = lumens / area, we get lux = 2000 / 4 = 500 lx.
              </p>
            </div>
          </div>

          <p className="mt-4">
  Understanding the relationship between lumens and lux is essential in lighting design, architectural planning, and energy-efficient construction. While lumens measure the total amount of visible light emitted by a source, lux quantifies how much of that light actually illuminates a surface area. This distinction is crucial when designing effective, comfortable, and code-compliant lighting environments.
</p>

<p className="mt-4">
  The formula for converting lumens to lux is simple: divide the total luminous flux (in lumens) by the surface area over which the light is distributed. If the area is in square meters, the result is directly in lux. If using square feet, multiply the result by a factor of 10.76391 to convert to metric lux.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Why Lux Matters in Lighting:</h2>
  <p>
    Lux is used to determine whether a space has enough light for its intended use. For example:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>300–500 lux</strong> for reading rooms and classrooms</li>
    <li><strong>100–300 lux</strong> for offices or general commercial spaces</li>
    <li><strong>10–50 lux</strong> for hallways or outdoor lighting at night</li>
    <li><strong>500–1000 lux</strong> for technical work, surgery rooms, or inspection zones</li>
  </ul>
  <p className="mt-2">
    These values are outlined in lighting standards like EN 12464-1 (Europe) or IES RP-1-20 (USA).
  </p>
</div>

<p className="mt-4">
  By converting lumens to lux using this tool, designers and engineers can validate whether the lighting provided by a fixture or system will meet the required illuminance for safety, productivity, or ambiance. It's particularly helpful during early design stages when only the lumen rating of a fixture is known.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Real-World Use Cases:</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Architects</strong> use lux values to plan window placement and supplemental lighting.</li>
    <li><strong>Interior designers</strong> select luminaires based on area size and desired lux levels.</li>
    <li><strong>Facilities managers</strong> validate lux in workplaces to comply with safety codes.</li>
    <li><strong>Photographers and filmmakers</strong> measure lux to set exposure and white balance.</li>
    <li><strong>Retailers</strong> adjust lux to highlight products and improve customer experience.</li>
  </ul>
</div>

<p className="mt-4">
  For instance, a warehouse might use 10,000 lumen LED high bay lights. If each light covers an area of 25 square meters, the resulting illuminance would be:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  lux = 10,000 / 25 = 400 lx
</p>

<p className="mt-4">
  This meets general industrial standards and ensures safe navigation through aisles and storage zones.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Using Square Feet vs. Square Meters:</h2>
  <p>
    The tool supports both metric and imperial units. Since 1 square meter = 10.76391 square feet, users can toggle between the two. This is helpful for projects in the US (where square feet dominate) or internationally (where square meters are standard). When using square feet, always apply the conversion factor to ensure accuracy.
  </p>
</div>

<p className="mt-4">
  For example, if a 2000 lumen bulb is illuminating an area of 20 square feet:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  lux = (10.76391 × 2000) / 20 = 1076.39 lx
</p>

<p className="mt-4">
  This may be too intense for a hallway but perfect for a detailed craft table or inspection area.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Design Tips and Guidelines:</h2>
  <ul className="list-disc list-inside ml-4">
    <li>Use <strong>uniform lighting</strong> to minimize shadows and eye strain.</li>
    <li>Always consider <strong>fixture mounting height</strong> and beam angle — light spreads with distance.</li>
    <li><strong>Reflective surfaces</strong> like white walls increase effective lux by bouncing light.</li>
    <li><strong>Task-specific lighting</strong> may need more lux than general ambient lighting.</li>
  </ul>
</div>

<p className="mt-4">
  Remember that lux decreases rapidly with distance from the light source. A bulb providing 800 lux at 1 meter may drop to 200 lux at 2 meters — due to the inverse square law. That’s why ceiling height and fixture spacing are critical.
</p>

<p className="mt-4">
  This converter also helps in auditing and retrofitting old buildings. By comparing current lux levels to required standards, facility managers can identify areas that need more fixtures or higher lumen ratings.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Applications by Environment:</h2>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Classrooms:</strong> 300–500 lx</li>
    <li><strong>Hospitals:</strong> 300–1000 lx depending on department</li>
    <li><strong>Art galleries:</strong> 200–300 lx with specific focus lights</li>
    <li><strong>Outdoor security:</strong> 20–100 lx depending on risk level</li>
    <li><strong>Residential areas:</strong> 100–300 lx for living spaces</li>
  </ul>
</div>

<p className="mt-4">
  The converter is equally useful for **home DIY projects**, where choosing the right bulb and placement ensures energy is not wasted and rooms feel comfortable. For instance, to achieve 300 lx over a 10 m² kitchen, you'll need:
</p>

<p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
  lumens = 300 × 10 = 3000 lm
</p>

<p className="mt-4">
  You can then choose bulbs or fixtures that match or exceed this combined output.
</p>

<p className="mt-4">
  Illuminance — measured in lux — plays a significant role in how people perceive and interact with their environments. While lumen ratings indicate the total light output of a source, lux shows the actual usable light that reaches a surface. This difference impacts everything from employee productivity and energy bills to visual comfort and safety compliance.
</p>

<p className="mt-4">
  When planning lighting for any application — whether a private residence, a warehouse, or a classroom — lux levels are the benchmark for assessing adequacy. Using this converter ensures you can confidently choose fixtures and layout strategies that deliver the right lux across the space.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Lighting Standards and Lux Levels by Activity:</h2>
  <p>
    To meet international standards like the European EN 12464-1 or the US Illuminating Engineering Society (IES) guidelines, various tasks have recommended lux levels:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Warehouse walking areas: 100 lx</li>
    <li>Office workstations: 300–500 lx</li>
    <li>Classrooms and lecture halls: 300–750 lx</li>
    <li>Inspection or surgery zones: 1000–2000 lx</li>
    <li>Retail showrooms: 750–1000 lx</li>
    <li>Corridors or emergency exits: 50–100 lx</li>
  </ul>
</div>

<p className="mt-4">
  Designing lighting to meet these targets requires not only knowledge of fixture lumen output but also the ability to convert that into lux using room size or targeted area dimensions. This tool simplifies that calculation and aids in early-stage design and compliance checks.
</p>

<p className="mt-4">
  In **office design**, for example, achieving uniform lighting without glare is essential. By converting known lumens to lux and plotting this across different work zones, designers ensure employees can work without eye strain or fatigue.
</p>

<p className="mt-4">
  In **sports arenas**, lux levels can range from 200 lx for practice courts to 1000–2000 lx for televised matches. Broad, even lighting is critical for visibility, camera equipment, and audience comfort. This conversion also supports broadcast lighting engineers who need strict control over glare and shadow.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Advanced Photometry: Beam Angle, Mounting, and Reflectance:</h2>
  <p>
    Lux is influenced by many real-world factors:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Beam angle:</strong> Narrow beams concentrate light over a small area, increasing lux.</li>
    <li><strong>Mounting height:</strong> Higher placement spreads light, reducing lux at the surface.</li>
    <li><strong>Reflective surfaces:</strong> Bright walls and ceilings can boost effective lux by reflecting more light.</li>
    <li><strong>Fixture shape:</strong> Diffusers and lenses affect light spread, intensity, and distribution.</li>
  </ul>
</div>

<p className="mt-4">
  For example, a 1000-lumen spotlight with a narrow 30° beam at 3 meters height may deliver far more lux to a specific table than a 1000-lumen bulb in a ceiling dome. That’s why lighting designers use photometric data files (.ies) to simulate lux distribution — but this converter still gives fast, practical estimates for any project.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Lighting Layout Planning:</h2>
  <p>
    By calculating required lux levels, you can back-calculate how many fixtures are needed. Suppose you want 500 lx across a 50 m² classroom:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    Total lumens = 500 × 50 = 25,000 lm
  </p>
  <p>
    If each LED panel provides 3000 lumens, you'd need:
  </p>
  <p className="font-mono bg-gray-100 p-3 rounded dark:text-black">
    25,000 / 3000 ≈ 8.33 → 9 fixtures
  </p>
  <p>
    You can then evenly space 9 panels across the ceiling to maintain uniformity and meet the lux target.
  </p>
</div>

<p className="mt-4">
  In **residential applications**, comfort, aesthetics, and energy savings drive design. For a cozy living room, you might aim for 150–300 lux. Using this tool, you can quickly check if your chosen bulb-lumen outputs and layout can reach those values across a 20 m² space.
</p>

<p className="mt-4">
  Many smart home systems now let users adjust lux levels throughout the day — dimming lights at sunset or boosting brightness for tasks. Knowing your baseline lux values allows smarter programming of these features and reduces unnecessary energy use.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Human-Centric Lighting and Health:</h2>
  <p>
    Studies show that correct lux levels can impact mood, concentration, and circadian rhythms. Poor lighting may lead to fatigue, eye strain, and reduced focus. This is especially important in:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Hospitals: balanced lux supports healing and alertness.</li>
    <li>Schools: adequate lux improves attention and academic performance.</li>
    <li>Homes: layering ambient, task, and accent lighting creates visual comfort.</li>
  </ul>
</div>

<p className="mt-4">
  By converting lumens to lux, you can fine-tune your lighting to align with biological needs and wellness standards — especially in elderly care, childcare centers, or shift-based workplaces.
</p>

<p className="mt-4">
  In **museums and galleries**, low lux levels (often {"<"}200 lx) are used to preserve art, while strategically focused lights enhance visual clarity. This converter helps ensure exhibits are lit safely without overexposing delicate materials.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Energy Optimization and Environmental Impact:</h2>
  <p>
    Efficient lighting design isn't just about achieving lux targets — it’s about doing so with minimal energy. By calculating lux from lumens, you can identify over-lit areas where energy can be saved by reducing lamp wattage, using occupancy sensors, or dimming systems.
  </p>
  <p>
    For large commercial properties, this can result in substantial annual energy savings — often thousands of kWh.
  </p>
</div>

<p className="mt-4">
  For instance, if a corridor is lit at 300 lx but only needs 100 lx, reducing light intensity saves energy and reduces eye fatigue. Converting and comparing lumens-to-lux at different times of day or seasons also supports daylight harvesting strategies.
</p>

<p className="mt-4">
  This tool can also assist with **LEED certification** or other green building standards, which often require energy-efficient lighting planning backed by documented lux analysis.
</p>

<div>
  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p>
    The lux value is more than just a number — it's the tangible result of light impacting space, tasks, and people. By converting lumens to lux, you gain actionable insight that supports visual performance, safety, design elegance, and sustainability. Whether you're retrofitting a factory, illuminating a gallery, or building your first tiny house — this tool provides clarity, precision, and lighting success.
  </p>
</div>



        </CardContent>
      </Card>
    </div>
  );
};

export default LumenToLuxConverter;
