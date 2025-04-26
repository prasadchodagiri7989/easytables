import React, { useState } from "react";

const CurrentDirectory: React.FC = () => {
  const [showLogical, setShowLogical] = useState(true);
  const [showPhysical, setShowPhysical] = useState(false);

  const generateCommand = () => {
    if (showPhysical) return "pwd -P";
    if (showLogical) return "pwd";
    return "pwd";
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <nav className="text-sm text-gray-500">
          Home › Tools › <span className="text-black">Current Directory</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-6">Finding Current Directory in Linux</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <p>
          In Linux/Unix, you can view your <strong>current working directory</strong> using the <code>pwd</code> command. It prints the full, absolute path to where you are currently located in the filesystem.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>$ pwd [options]</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Options</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>-L</strong>: Show logical path (includes symbolic links)</li>
            <li><strong>-P</strong>: Show physical path (resolves all symbolic links)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Environment Variable</h2>
          <p>
            You can also view the current directory stored in the environment variable <code>$PWD</code>:
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>echo $PWD</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Show current logical directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ pwd</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Show current physical directory (no symlinks):</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ pwd -P</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Using environment variable:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ echo $PWD</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Current Directory Code Generator</h2>

          <div className="flex flex-wrap gap-4 mb-4">
            <label className="flex items-center space-x-1 text-sm">
              <input
                type="checkbox"
                checked={showLogical}
                onChange={() => {
                  setShowLogical(true);
                  setShowPhysical(false);
                }}
              />
              <span>Logical path (default)</span>
            </label>
            <label className="flex items-center space-x-1 text-sm">
              <input
                type="checkbox"
                checked={showPhysical}
                onChange={() => {
                  setShowPhysical(true);
                  setShowLogical(false);
                }}
              />
              <span>Physical path (-P)</span>
            </label>
          </div>

          <div className="bg-gray-100 p-4 rounded text-sm mt-4">
            <code>{generateCommand()}</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDirectory;
