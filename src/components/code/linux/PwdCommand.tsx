import React, { useState } from "react";

const PwdCommand: React.FC = () => {
  const [absolutePath, setAbsolutePath] = useState(true);

  const generateCommand = () => {
    return absolutePath ? "pwd" : "pwd -P"; // '-P' shows physical path if there are symlinks
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <nav className="text-sm text-gray-500">
          Home › Tools › <span className="text-black">pwd Command</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-6">pwd Command in Linux/Unix</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <p>
          <strong>pwd</strong> ("print working directory") displays the current working directory path in your terminal session.
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
            <li><strong>-L</strong>: Show logical path (default, can include symlinks)</li>
            <li><strong>-P</strong>: Show physical path (resolves symlinks)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Current working directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ pwd</code>
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Physical path without symlinks:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ pwd -P</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">pwd Code Generator</h2>

          <div className="flex flex-wrap gap-4 mb-4">
            <label className="flex items-center space-x-1 text-sm">
              <input
                type="checkbox"
                checked={!absolutePath}
                onChange={() => setAbsolutePath(!absolutePath)}
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

export default PwdCommand;
