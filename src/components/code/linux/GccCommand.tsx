import React, { useState } from "react";

const GccCommand: React.FC = () => {
  const [sourceFiles, setSourceFiles] = useState("");
  const [objectFiles, setObjectFiles] = useState("");
  const [includeDirs, setIncludeDirs] = useState("");
  const [libFiles, setLibFiles] = useState("");
  const [libDirs, setLibDirs] = useState("");
  const [outputFile, setOutputFile] = useState("");
  const [warning, setWarning] = useState(false);
  const [debug, setDebug] = useState(false);
  const [optimize, setOptimize] = useState(false);
  const [verbose, setVerbose] = useState(false);

  const generateCommand = () => {
    let cmd = "gcc ";
    if (warning) cmd += "-Wall ";
    if (debug) cmd += "-g ";
    if (optimize) cmd += "-O ";
    if (verbose) cmd += "-v ";

    if (includeDirs.trim()) {
      includeDirs.split(" ").forEach((dir) => {
        if (dir) cmd += `-I${dir} `;
      });
    }

    if (libDirs.trim()) {
      libDirs.split(" ").forEach((dir) => {
        if (dir) cmd += `-L${dir} `;
      });
    }

    if (libFiles.trim()) {
      libFiles.split(" ").forEach((lib) => {
        if (lib.startsWith("lib") && lib.endsWith(".a")) {
          const libName = lib.slice(3, -2);
          cmd += `-l${libName} `;
        }
      });
    }

    if (sourceFiles.trim()) {
      cmd += sourceFiles + " ";
    }

    if (objectFiles.trim()) {
      cmd += objectFiles + " ";
    }

    if (outputFile.trim()) {
      cmd += `-o ${outputFile}`;
    }

    return cmd.trim();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <nav className="text-sm text-gray-500">
          Home › Tools › <span className="text-black">GCC C Compiler</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-6">GCC C Compiler</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <p>
          <strong>GCC</strong> (GNU Compiler Collection) is a popular compiler for the C programming language on Linux/Unix systems.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>$ gcc [options] [source files] [object files] [-o output file]</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Options</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>-c</strong>: compile without linking</li>
            <li><strong>-Dname[=value]</strong>: define preprocessor macro</li>
            <li><strong>-fPIC</strong>: position-independent code</li>
            <li><strong>-g</strong>: debug information for GDB</li>
            <li><strong>-I</strong>: add include directory</li>
            <li><strong>-l</strong>: link with library</li>
            <li><strong>-L</strong>: library search directory</li>
            <li><strong>-o</strong>: output file name</li>
            <li><strong>-O</strong>: optimization level</li>
            <li><strong>-shared</strong>: create shared object</li>
            <li><strong>-U</strong>: undefine preprocessor macro</li>
            <li><strong>-w</strong>: disable all warnings</li>
            <li><strong>-Wall</strong>: enable all warnings</li>
            <li><strong>-Wextra</strong>: enable extra warnings</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Compile and link:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ gcc file1.c file2.c -o execfile</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Compile only (no linking):</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ gcc -c file1.c file2.c</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Compile with debugging:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ gcc -g myfile.c -o execfile</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Compile with warnings enabled:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ gcc -Wall myfile.c -o execfile</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Link with static library:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ gcc -static myfile.c -L/user/local/math -lmath -o execfile</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Compile with optimization:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ gcc -O myfile.c -o execfile</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">GCC Code Generator</h2>

          <div className="grid gap-4 mb-4">
            <div className="space-y-2">
              <label className="font-medium">Source files:</label>
              <input
                type="text"
                placeholder="file1.c file2.c"
                value={sourceFiles}
                onChange={(e) => setSourceFiles(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Object files:</label>
              <input
                type="text"
                placeholder="file3.o file4.o"
                value={objectFiles}
                onChange={(e) => setObjectFiles(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Include directories:</label>
              <input
                type="text"
                placeholder="dir1 dir2"
                value={includeDirs}
                onChange={(e) => setIncludeDirs(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Library files:</label>
              <input
                type="text"
                placeholder="liba.a libb.a"
                value={libFiles}
                onChange={(e) => setLibFiles(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Library directories:</label>
              <input
                type="text"
                placeholder="dir3 dir4"
                value={libDirs}
                onChange={(e) => setLibDirs(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Output file name:</label>
              <input
                type="text"
                placeholder="a.out"
                value={outputFile}
                onChange={(e) => setOutputFile(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={warning} onChange={() => setWarning(!warning)} />
                <span>All Warnings (-Wall)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={debug} onChange={() => setDebug(!debug)} />
                <span>Debug Info (-g)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={optimize} onChange={() => setOptimize(!optimize)} />
                <span>Optimize (-O)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={verbose} onChange={() => setVerbose(!verbose)} />
                <span>Verbose (-v)</span>
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

export default GccCommand;
