import React from "react";

const CdCommand: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <nav className="text-sm text-gray-500">
          Home › Tools › <span className="text-black">cd Command in Linux/Unix</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-6">cd Command in Linux/Unix</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <p>
          The <strong>cd</strong> (change directory) command is used in Linux and Unix to move between directories in the terminal shell.
        </p>
        <p>
          💡 Tip: You can press the <strong>Tab</strong> key to auto-complete directory names!
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>$ cd [directory]</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Go to home directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cd</code>
              </pre>
              <p className="text-sm text-gray-600">or</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cd ~</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Go to root directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cd /</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Move to parent directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cd ..</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Go to subdirectory (e.g., Documents):</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cd Documents</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Go to nested directory (e.g., Documents/Books):</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cd Documents/Books</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Use an absolute path:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cd /home/user/Desktop</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Directory with spaces (e.g., "My Images"):</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cd My\ Images</code>
              </pre>
              <p className="text-sm text-gray-600">or</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cd "My Images"</code>
              </pre>
              <p className="text-sm text-gray-600">or</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cd 'My Images'</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CdCommand;
