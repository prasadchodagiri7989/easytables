import React from "react";

export default function DIPSwitchChart() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">DIP Switch</h1>

      <section>
        <h2 className="text-2xl font-semibold">What is a DIP Switch?</h2>
        <p className="text-base">
          A DIP switch (Dual Inline Package switch) is an electrical component used
          to disconnect or connect wires in an electrical circuit. It is commonly
          used on printed circuit boards (PCBs) for permanent configuration or
          settings of the circuit, similar to jumpers or solder bridges.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">DIP Switch Settings</h2>
        <p className="text-base">
          A DIP switch typically has 4 or 8 small toggle switches arranged side by
          side. Each switch can be set to ON or OFF, representing binary values. A
          4-switch DIP can represent a 4-bit binary word, and an 8-switch DIP can
          represent an 8-bit binary word.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">DIP Switch Symbol</h2>
        <p className="text-base mb-4">The symbol commonly used in circuit diagrams is shown below:</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/DIP_Switch_Symbol.svg/512px-DIP_Switch_Symbol.svg.png"
          alt="DIP Switch Symbol"
          className="w-40 mx-auto"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold">See Also</h2>
        <ul className="list-disc list-inside text-base">
          <li>Decimal to Binary Converter</li>
          <li>Solder Bridge</li>
          <li>Electrical Symbols</li>
          <li>Electronic Components</li>
        </ul>
      </section>
    </div>
  );
}
