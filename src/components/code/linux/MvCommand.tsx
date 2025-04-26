import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

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
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>mv Command in Linux/Unix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            The <strong>mv</strong> command is used to move or rename files and directories in Linux/Unix.
          </p>

          {/* Syntax Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv [options] source dest</code>
            </pre>
          </div>

          {/* Options Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Options</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>-f</strong>: Force move, overwrite destination file without prompt</li>
              <li><strong>-i</strong>: Interactive prompt before overwrite</li>
              <li><strong>-u</strong>: Update, move only if source is newer than destination</li>
              <li><strong>-v</strong>: Verbose, print source and destination files</li>
              <li><strong>man mv</strong>: Help manual</li>
            </ul>
          </div>

          {/* Examples Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              <Example title="Move multiple files to a directory:" code={`$ mv main.c def.h /home/usr/rapid/`} />
              <Example title="Move all .c files to a subdirectory:" code={`$ mv *.c bak`} />
              <Example title="Move files from subdirectory to current directory:" code={`$ mv bak/* .`} />
              <Example title="Rename a file:" code={`$ mv main.c main.bak`} />
              <Example title="Rename a directory:" code={`$ mv bak bak2`} />
              <Example title="Update only if source is newer:" code={`$ mv -u main.c bak`} />
              <Example title="Move with verbose output:" code={`$ mv -v main.c bak`} />
            </div>
          </div>

          {/* Command Generator Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">mv Command Generator</h2>
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

            {/* Command Output */}
            <div className="bg-gray-100 p-4 rounded text-sm mt-4">
              <code>{generateCommand()}</code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Example Component to handle repetitive example display
const Example: React.FC<{ title: string; code: string }> = ({ title, code }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
      <code>{code}</code>
    </pre>
  </div>
);

export default MvCommand;
