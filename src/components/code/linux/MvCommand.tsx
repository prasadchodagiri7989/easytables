import React, { useState } from "react";

const MvCommand: React.FC = () => {
  const [force, setForce] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [updateOnly, setUpdateOnly] = useState(false);
  const [verbose, setVerbose] = useState(false);
  const [sources, setSources] = useState("");
  const [destination, setDestination] = useState("");

  const generateCommand = () => {
    let cmd = "mv ";
    if (force) cmd += "-f ";
    if (interactive) cmd += "-i ";
    if (updateOnly) cmd += "-u ";
    if (verbose) cmd += "-v ";

    if (sources.trim()) cmd += sources + " ";
    if (destination.trim()) cmd += destination;

    return cmd.trim();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <nav className="text-sm text-gray-500">
          Home › Tools › <span className="text-black">mv Command</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-6">mv Command in Linux/Unix</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <p>
          <strong>mv</strong> command is used to move files and directories in Linux.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>$ mv [options] source dest</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Options</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>-f</strong>: force move by overwriting destination file without prompt</li>
            <li><strong>-i</strong>: interactive prompt before overwrite</li>
            <li><strong>-u</strong>: update - move only when source is newer than destination</li>
            <li><strong>-v</strong>: verbose - print source and destination files</li>
            <li><strong>man mv</strong>: help manual</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Move multiple files to a directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ mv main.c def.h /home/usr/rapid/</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Move all .c files to a subdirectory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ mv *.c bak</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Move files from subdirectory to current directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ mv bak/* .</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Rename a file:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ mv main.c main.bak</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Rename a directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ mv bak bak2</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Update only if source is newer:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ mv -u main.c bak</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Move with verbose output:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ mv -v main.c bak</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">mv Code Generator</h2>

          <div className="grid gap-4 mb-4">
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={force} onChange={() => setForce(!force)} />
                <span>Force move (-f)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={interactive} onChange={() => setInteractive(!interactive)} />
                <span>Interactive (-i)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={updateOnly} onChange={() => setUpdateOnly(!updateOnly)} />
                <span>Update only if newer (-u)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={verbose} onChange={() => setVerbose(!verbose)} />
                <span>Verbose (-v)</span>
              </label>
            </div>

            <div className="space-y-2 mt-4">
              <label className="font-medium">Source files/folders:</label>
              <input
                type="text"
                placeholder="e.g., file1 file2 dir1"
                value={sources}
                onChange={(e) => setSources(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Destination:</label>
              <input
                type="text"
                placeholder="e.g., /path/to/destination/"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded text-sm mt-4">
            <code>{generateCommand()}</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MvCommand;
