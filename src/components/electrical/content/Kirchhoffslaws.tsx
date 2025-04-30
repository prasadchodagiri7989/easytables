import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js


const KirchhoffLaws = () => {
  const [currentValues, setCurrentValues] = useState({
    I1: "",
    I2: "",
    I3: "",
    I4: "",
  });
  const [voltageValues, setVoltageValues] = useState({
    VS: "",
    VR1: "",
    VR2: "",
    VR3: "",
  });
  const [resultKCL, setResultKCL] = useState("");
  const [resultKVL, setResultKVL] = useState("");

  const handleCurrentChange = (e) => {
    const { name, value } = e.target;
    setCurrentValues({
      ...currentValues,
      [name]: value,
    });
  };

  const handleVoltageChange = (e) => {
    const { name, value } = e.target;
    setVoltageValues({
      ...voltageValues,
      [name]: value,
    });
  };

  const calculateKCL = () => {
    const { I1, I2, I3 } = currentValues;
    const I1_val = parseFloat(I1);
    const I2_val = parseFloat(I2);
    const I3_val = parseFloat(I3);

    if (!isNaN(I1_val) && !isNaN(I2_val) && !isNaN(I3_val)) {
      const I4 = -(I1_val + I2_val + I3_val);
      setResultKCL(`I4 = ${I4} A (leaves the junction)`);
    }
  };

  const calculateKVL = () => {
    const { VS, VR1, VR2 } = voltageValues;
    const VS_val = parseFloat(VS);
    const VR1_val = parseFloat(VR1);
    const VR2_val = parseFloat(VR2);

    if (!isNaN(VS_val) && !isNaN(VR1_val) && !isNaN(VR2_val)) {
      const VR3 = -(VS_val + VR1_val + VR2_val);
      setResultKVL(`VR3 = ${VR3} V`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kirchhoff's Laws</h1>
      <p className="mb-6">
        Kirchhoff's Laws describe how currents and voltages behave in electrical circuits. These laws are essential for analyzing complex circuits.
      </p>

      {/* Kirchhoff's Current Law (KCL) */}
      <h2 className="text-xl font-semibold mb-4">Kirchhoff's Current Law (KCL)</h2>
      <p>
        The sum of currents entering a junction equals the sum of currents leaving the junction. Mathematically:
      </p>
      <p className="italic">∑Ik = 0</p>
      <div className="mb-4">
        <img
          src="/symbols/kcl-diagram.png"
          alt="Kirchhoff's Current Law Example"
          className="w-full"
        />
        <p className="mt-2">
          Example: If I1 = 2A, I2 = 3A, and I3 = -1A (leaving the junction), find I4:
        </p>
        <p>
          <strong>Solution:</strong> ∑Ik = I1 + I2 + I3 + I4 = 0, therefore, I4 = -(I1 + I2 + I3) = -2A - 3A - (-1A) = -4A (leaving the junction).
        </p>
      </div>

      <h3 className="text-lg font-semibold mb-2">KCL Calculator</h3>
      <div className="mb-4">
        <div className="flex gap-4">
          <div>
            <label>Enter I1 (A):</label>
            <input
              type="number"
              name="I1"
              value={currentValues.I1}
              onChange={handleCurrentChange}
              placeholder="Enter current I1"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter I2 (A):</label>
            <input
              type="number"
              name="I2"
              value={currentValues.I2}
              onChange={handleCurrentChange}
              placeholder="Enter current I2"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter I3 (A):</label>
            <input
              type="number"
              name="I3"
              value={currentValues.I3}
              onChange={handleCurrentChange}
              placeholder="Enter current I3"
              className="p-2 border rounded"
            />
          </div>
        </div>

        <button
          onClick={calculateKCL}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate I4 (KCL)
        </button>

        {resultKCL && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Result:</h3>
            <p>{resultKCL}</p>
          </div>
        )}
      </div>

      {/* Kirchhoff's Voltage Law (KVL) */}
      <h2 className="text-xl font-semibold mb-4">Kirchhoff's Voltage Law (KVL)</h2>
      <p>
        The sum of the voltages around any closed loop in a circuit is zero:
      </p>
      <p className="italic">∑Vk = 0</p>
      <div className="mb-4">
        <img
          src="/symbols/kvl-diagram.png"
          alt="Kirchhoff's Voltage Law Example"
          className="w-full"
        />
        <p className="mt-2">
          Example: If VS = 12V, VR1 = -4V, VR2 = -3V, find VR3:
        </p>
        <p>
          <strong>Solution:</strong> ∑Vk = VS + VR1 + VR2 + VR3 = 0, therefore VR3 = -(VS + VR1 + VR2) = -12V + 4V + 3V = -5V.
        </p>
      </div>

      <h3 className="text-lg font-semibold mb-2">KVL Calculator</h3>
      <div className="mb-4">
        <div className="flex gap-4">
          <div>
            <label>Enter VS (V):</label>
            <input
              type="number"
              name="VS"
              value={voltageValues.VS}
              onChange={handleVoltageChange}
              placeholder="Enter voltage VS"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter VR1 (V):</label>
            <input
              type="number"
              name="VR1"
              value={voltageValues.VR1}
              onChange={handleVoltageChange}
              placeholder="Enter voltage VR1"
              className="p-2 border rounded"
            />
          </div>

          <div>
            <label>Enter VR2 (V):</label>
            <input
              type="number"
              name="VR2"
              value={voltageValues.VR2}
              onChange={handleVoltageChange}
              placeholder="Enter voltage VR2"
              className="p-2 border rounded"
            />
          </div>
        </div>

        <button
          onClick={calculateKVL}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Calculate VR3 (KVL)
        </button>

        {resultKVL && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h3 className="font-semibold">Result:</h3>
            <p>{resultKVL}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KirchhoffLaws;
