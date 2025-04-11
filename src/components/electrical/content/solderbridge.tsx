import React from "react";

export default function SolderBridge() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Solder Bridge</h1>

      <p className="mb-4">
        A <strong>solder bridge</strong> is a conductor on a PCB with two or more separate pieces that acts as a permanent switch.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">How It Works</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          To <strong>short</strong> the solder bridge, solder between the two parts of the bridge.
        </li>
        <li>
          To <strong>disconnect</strong> it, remove the solder using a desoldering tool.
        </li>
      </ul>

      <p className="mb-4">
        Solder bridges are commonly used for <strong>permanent configuration</strong> on PCBs.
        While they are cheaper, they are less user-friendly than jumpers or DIP switches.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">Solder Bridge Symbol</h2>
      <div className="mb-6">
        {/* You can insert an image or SVG here */}
        <div className="border border-gray-300 rounded-lg p-4 text-center text-sm text-gray-600">
          [Insert solder bridge circuit symbol image here]
        </div>
      </div>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">See Also</h2>
      <ul className="list-disc pl-6 text-blue-600">
        <li>DIP Switch</li>
        <li>Electrical Symbols</li>
        <li>Electronic Components</li>
      </ul>
    </div>
  );
}
