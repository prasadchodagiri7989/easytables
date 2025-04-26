import React, { useState } from "react";

const CpCommand: React.FC = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOptions((prev) =>
      prev.includes(value) ? prev.filter((opt) => opt !== value) : [...prev, value]
    );
  };

  const generateCommand = () => {
    let cmd = "cp ";
    if (options.length > 0) {
      cmd += "-" + options.join("") + " ";
    }
    if (source) {
      cmd += source + " ";
    }
    if (destination) {
      cmd += destination + " ";
    }
    if (stdout) {
      cmd += `> ${stdout} `;
    }
    if (stderr) {
      cmd += `2> ${stderr}`;
    }
    return cmd.trim();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <nav className="text-sm text-gray-500">
          Home › Tools › <span className="text-black">cp Command in Linux/Unix</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-6">cp Command in Linux/Unix</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <p>
          The <strong>cp</strong> command copies files and directories in Linux/Unix systems.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>$ cp [options] source dest</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Options</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>-a</strong>: archive files</li>
            <li><strong>-f</strong>: force copy by removing destination if needed</li>
            <li><strong>-i</strong>: interactive - ask before overwrite</li>
            <li><strong>-l</strong>: link files instead of copy</li>
            <li><strong>-L</strong>: follow symbolic links</li>
            <li><strong>-n</strong>: no overwrite</li>
            <li><strong>-R</strong>: recursive copy (include hidden files)</li>
            <li><strong>-u</strong>: update newer files only</li>
            <li><strong>-v</strong>: verbose messages</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Copy a single file:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cp main.c bak</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Copy multiple files to a directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cp main.c def.h /home/usr/rapid/</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Copy all C files:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cp *.c bak</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Copy directories recursively:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cp -R dev bak</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Force copy a file:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cp -f test.c bak</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Interactive prompt before overwrite:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cp -i test.c bak</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Update newer files only:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ cp -u * bak</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">cp Code Generator</h2>

          <div className="grid gap-4 mb-4">
            <div className="space-y-2">
              <label className="font-medium">Options:</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "f", label: "Force (-f)" },
                  { value: "i", label: "Interactive (-i)" },
                  { value: "l", label: "Link (-l)" },
                  { value: "L", label: "Follow symlinks (-L)" },
                  { value: "n", label: "No overwrite (-n)" },
                  { value: "R", label: "Recursive (-R)" },
                  { value: "u", label: "Update newer (-u)" },
                  { value: "v", label: "Verbose (-v)" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center space-x-1 text-sm">
                    <input
                      type="checkbox"
                      value={opt.value}
                      checked={options.includes(opt.value)}
                      onChange={handleOptionChange}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Source files/folders:</label>
              <input
                type="text"
                placeholder="file1 file2 dir1 dir2"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Destination folder/file:</label>
              <input
                type="text"
                placeholder="destdir"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Redirect stdout to:</label>
              <input
                type="text"
                placeholder="out.txt"
                value={stdout}
                onChange={(e) => setStdout(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Redirect stderr to:</label>
              <input
                type="text"
                placeholder="err.txt"
                value={stderr}
                onChange={(e) => setStderr(e.target.value)}
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

export default CpCommand;
