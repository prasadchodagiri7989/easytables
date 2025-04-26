import React, { useState } from "react";

const MoveFiles: React.FC = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [interactive, setInteractive] = useState(false);
  const [verbose, setVerbose] = useState(false);
  const [noClobber, setNoClobber] = useState(false);
  const [backup, setBackup] = useState(false);

  const generateCommand = () => {
    let cmd = "mv ";
    if (interactive) cmd += "-i ";
    if (verbose) cmd += "-v ";
    if (noClobber) cmd += "-n ";
    if (backup) cmd += "-b ";

    if (source.trim()) cmd += `${source} `;
    if (destination.trim()) cmd += `${destination}`;

    return cmd.trim();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <nav className="text-sm text-gray-500">
          Home › Tools › <span className="text-black">Move Files</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-6">mv Command in Linux/Unix</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <p>
          The <strong>mv</strong> command is used to <strong>move or rename files and directories</strong> in Linux.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>$ mv [options] source target</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Options</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>-i</strong>: Prompt before overwrite</li>
            <li><strong>-v</strong>: Verbose mode (show what’s happening)</li>
            <li><strong>-n</strong>: Do not overwrite an existing file</li>
            <li><strong>-b</strong>: Make a backup of each file that would be overwritten</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Rename a file:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ mv oldname.txt newname.txt</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Move file to a directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ mv file.txt /home/user/Documents</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Prompt before overwriting:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ mv -i file.txt existing.txt</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Backup before overwrite:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ mv -b file.txt backup.txt</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">mv Code Generator</h2>

          <div className="grid gap-4 mb-4">
            <div className="space-y-2">
              <label className="font-medium">Source File(s):</label>
              <input
                type="text"
                placeholder="file1.txt"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Destination:</label>
              <input
                type="text"
                placeholder="folder/ or newname.txt"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={interactive} onChange={() => setInteractive(!interactive)} />
                <span>Interactive (-i)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={verbose} onChange={() => setVerbose(!verbose)} />
                <span>Verbose (-v)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={noClobber} onChange={() => setNoClobber(!noClobber)} />
                <span>No overwrite (-n)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={backup} onChange={() => setBackup(!backup)} />
                <span>Backup (-b)</span>
              </label>
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

export default MoveFiles;
