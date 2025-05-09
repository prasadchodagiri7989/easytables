import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

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
            <BreadcrumbPage>MilliAmps to Amps Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>MilliAmps to Amps Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>Convert current in milliamps (mA) to amps (A) using the formula A = mA / 1000.</p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Enter Current in Milliamps (mA):</label>
              <input
                type="number"
                value={milliAmps}
                onChange={(e) => setMilliAmps(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded dark:text-black"
                placeholder="Enter value in milliamps"
              />
            </div>

            <button
              onClick={handleConvert}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Convert
            </button>

            {error && <p className="text-red-500">{error}</p>}

            <div>
              <strong>Converted Current (Amps):</strong>
              <p className="mt-1 p-3 bg-gray-100 rounded font-mono text-base dark:text-black">{amps} A</p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Examples:</h2>
              <ul className="space-y-2 list-disc list-inside">
                {examples.map((example, index) => (
                  <li key={index}>
                    <p><strong>{example.description}</strong></p>
                    <p>Milliamps: {example.milliAmps} mA</p>
                    <p>Converted Amps: {example.expectedResult} A</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Formula:</h2>
              <p>
                <strong>A = mA / 1000</strong>
              </p>
              <p>
                Where:
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>A = Current in amps (A)</li>
                  <li>mA = Current in milliamps (mA)</li>
                </ul>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Explanation:</h2>
              <p>
                The conversion from milliamps (mA) to amps (A) is straightforward. Since there are 1000 milliamps in one amp, you divide the value in milliamps by 1000 to get the value in amps.
              </p>
              <p>
                - *1 milliamp (mA) = 1/1000 amp (A)*<br />
                - *Example: 300 mA = 0.3 A*
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base mt-6 mb-2">Example Calculation:</h2>
              <p>
                What is the current in amps if the current is 300 milliamps? 
                <br />
                Using the formula: A = mA / 1000, we get A = 300 / 1000 = 0.3 A.
              </p>
            </div>
          </div>

          <div>
  <h2 className="font-semibold text-base mt-6 mb-2">Why MilliAmps to Amps Conversion Matters:</h2>
  <p className="mt-4">
    Understanding how to convert milliamps (mA) to amps (A) is vital for working with electronic circuits, battery-powered devices, and electrical systems. While most household appliances list power in amps, small electronics often measure in milliamps. This converter bridges the gap, helping you easily switch between units to assess compatibility, safety, or design requirements.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Real-Life Applications:</h2>
  <p className="mt-4">
    This conversion is commonly used in the following fields:
  </p>
  <ul className="list-disc list-inside ml-4 mt-1">
    <li><strong>Smartphones:</strong> Battery ratings are often listed in mAh. Understanding their equivalent in amps helps evaluate charging current and usage efficiency.</li>
    <li><strong>Arduino/Raspberry Pi:</strong> These microcontrollers and their sensors often operate in the range of 5–500 mA, and knowledge of conversion helps prevent overload.</li>
    <li><strong>Circuit Design:</strong> Engineers must match component current ratings (typically in amps) with small signal devices listed in milliamps.</li>
    <li><strong>Solar Energy Systems:</strong> Panel outputs, inverters, and storage devices involve various current ratings—mA for sensors and A for main supply lines.</li>
    <li><strong>Battery Chargers:</strong> Whether charging AA batteries or lithium cells, matching the current output in amps with input in milliamps is critical.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Safety Tips When Dealing with Current:</h2>
  <p className="mt-4">
    Electrical safety is paramount when working with any form of current, even low values in milliamps. Here are a few best practices:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li><strong>Always check device ratings:</strong> Never exceed the maximum current a device or component can handle.</li>
    <li><strong>Fuse protection:</strong> For mA-rated circuits, use appropriately sized fuses or resettable polyfuses to prevent damage.</li>
    <li><strong>Ground properly:</strong> Avoid current leakage and static discharge with proper grounding, especially in lab or industrial setups.</li>
    <li><strong>Isolate control vs. power circuits:</strong> Use optoisolators or relays to prevent mA-range signal lines from exposure to amp-range power currents.</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Common Conversion Values (Reference Table):</h2>
  <table className="table-auto w-full border-collapse border text-left">
    <thead>
      <tr>
        <th className="border p-2">MilliAmps (mA)</th>
        <th className="border p-2">Amps (A)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border p-2">1 mA</td><td className="border p-2">0.001 A</td></tr>
      <tr><td className="border p-2">100 mA</td><td className="border p-2">0.1 A</td></tr>
      <tr><td className="border p-2">250 mA</td><td className="border p-2">0.25 A</td></tr>
      <tr><td className="border p-2">500 mA</td><td className="border p-2">0.5 A</td></tr>
      <tr><td className="border p-2">750 mA</td><td className="border p-2">0.75 A</td></tr>
      <tr><td className="border p-2">1000 mA</td><td className="border p-2">1 A</td></tr>
      <tr><td className="border p-2">1500 mA</td><td className="border p-2">1.5 A</td></tr>
    </tbody>
  </table>

  <h2 className="font-semibold text-base mt-6 mb-2">Helpful Mnemonics:</h2>
  <p className="mt-4">
    Think of "milli" as "mini"—a milliamp is a miniature amp. Since there are 1000 milliamps in an amp, remember:
  </p>
  <p className="mt-2 font-mono bg-gray-100 p-3 rounded dark:text-black">
    Divide by 1000 to go from milliamps to amps.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">When to Use mA Instead of A:</h2>
  <p className="mt-4">
    Engineers and technicians often choose between amps and milliamps depending on context. Use mA for:
  </p>
  <ul className="list-disc list-inside ml-4">
    <li>Small signal electronics</li>
    <li>Battery life calculations</li>
    <li>Sensor output ratings</li>
    <li>USB and low-current circuits</li>
  </ul>

  <h2 className="font-semibold text-base mt-6 mb-2">Why This Calculator Helps:</h2>
  <p className="mt-4">
    Doing mental math or manually converting large mA values to A can lead to errors, especially in time-sensitive tasks like prototyping, troubleshooting, or submitting specifications. With this converter, you're only one input and one click away from accuracy.
  </p>

  <h2 className="font-semibold text-base mt-6 mb-2">Conclusion:</h2>
  <p className="mt-4">
    Understanding and converting milliamps to amps empowers you to work smarter with electronics and electrical systems. From classroom learning to field installations, this knowledge ensures better circuit design, safer operations, and more accurate specifications. Bookmark this tool for quick access and keep your electrical projects current — and correct.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

export default MilliAmpsToAmpsConverter;
