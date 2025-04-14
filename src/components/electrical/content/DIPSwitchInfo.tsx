import React from "react";

const DipSwitchInfo = () => {
  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">DIP Switch</h1>

      <h2 className="text-2xl font-semibold mb-2">Definition</h2>
      <p className="mb-4">
        A <strong>DIP switch</strong> is an electrical component used to connect or disconnect wires in an electrical circuit.
      </p>
      <p className="mb-4">
        DIP stands for <strong>Dual Inline Package</strong>.
      </p>
      <p className="mb-6">
        DIP switches are commonly used on circuit boards for setting configurations and permanent options, similar to jumpers or solder bridges.
      </p>

      <h2 className="text-2xl font-semibold mb-2">DIP Switch Settings</h2>
      <p className="mb-6">
        A DIP switch usually consists of 4 or 8 mini-switches. Together, they represent a binary word of 4 or 8 bits used for circuit configuration.
      </p>

      <h2 className="text-2xl font-semibold mb-2">DIP Switch Symbol</h2>
      <p className="mb-4">
        In circuit diagrams, the DIP switch is represented with a specific symbol illustrating its individual toggle switches.
      </p>
      {/* You can include an actual SVG or image component here to show the DIP switch symbol if needed */}
    </div>
  );
};

export default DipSwitchInfo;
