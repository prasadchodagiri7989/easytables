import React from "react";

const SolderBridgeInfo = () => {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Solder Bridge</h1>

      <h2 className="text-2xl font-semibold mb-2">Definition</h2>
      <p className="mb-4">
        A <strong>solder bridge</strong> is a conductor on a PCB (Printed Circuit Board) consisting of two or more separated pieces that act as a permanent switch.
      </p>

      <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
      <p className="mb-4">
        To <strong>connect</strong> the solder bridge, you solder between the two parts of the bridge. To <strong>disconnect</strong> it, you must remove the solder using desoldering tools.
      </p>
      <p className="mb-6">
        Solder bridges are used for permanent circuit configuration. They are a cost-effective alternative to jumpers or DIP switches, though they are less convenient to modify.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Solder Bridge Symbol</h2>
      <p className="mb-4">
        In circuit diagrams, a specific symbol represents a solder bridge. It visually shows the bridge with its open and soldered state.
      </p>
      {/* Add actual image/SVG of the symbol here if needed */}
    </div>
  );
};

export default SolderBridgeInfo;
