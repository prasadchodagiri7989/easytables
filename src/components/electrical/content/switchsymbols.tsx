import React from 'react';

const SwitchSymbols = () => {
  const symbols = [
    {
      name: "SPST Toggle Switch",
      symbol: "SPST switch symbol",
      description: "Disconnects current when open",
    },
    {
      name: "SPDT Toggle Switch",
      symbol: "SPDT switch symbol",
      description: "Selects between two connections",
    },
    {
      name: "Pushbutton Switch (N.O)",
      symbol: "push button symbol",
      description: "Momentary switch - normally open",
    },
    {
      name: "Pushbutton Switch (N.C)",
      symbol: "push button symbol",
      description: "Momentary switch - normally closed",
    },
    {
      name: "DIP Switch",
      symbol: "dip switch symbol",
      description: "DIP switch is used for onboard configuration",
    },
    {
      name: "SPST Relay",
      symbol: "spst relay symbol",
      description: "Relay open / close connection by an electromagnet",
    },
    {
      name: "SPDT Relay",
      symbol: "spdt relay symbol",
      description: "Single pole double throw relay",
    },
    {
      name: "Jumper",
      symbol: "jumper symbol",
      description: "Close connection by jumper insertion on pins.",
    },
    {
      name: "Solder Bridge",
      symbol: "solder bridge symbol",
      description: "Solder to close connection",
    },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Electronic Switch Symbols</h1>
      <p className="mb-6 text-gray-700">Electrical & electronic switch symbols of schematic diagram - toggle switch, pushbutton switch, DIP switch, relay, jumper, solder bridge.</p>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Symbol</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {symbols.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{item.symbol}</td>
              <td className="border p-2 font-semibold">{item.name}</td>
              <td className="border p-2 text-gray-700">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-sm text-gray-600">
        <p><strong>See also:</strong></p>
        <ul className="list-disc list-inside">
          <li>Electronic symbols</li>
          <li>Resistor symbols</li>
          <li>Capacitor symbols</li>
          <li>Diode symbols</li>
          <li>Transistor symbols</li>
        </ul>
      </div>
    </div>
  );
};

export default SwitchSymbols;
