import React, { useState } from "react";

const LsCommand: React.FC = () => {
  const [longFormat, setLongFormat] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  const [recursive, setRecursive] = useState(false);
  const [reverseOrder, setReverseOrder] = useState(false);
  const [fullPath, setFullPath] = useState(false);
  const [sortBySize, setSortBySize] = useState(false);
  const [files, setFiles] = useState("");
  const [folders, setFolders] = useState("");
  const [stdoutFile, setStdoutFile] = useState("");
  const [stderrFile, setStderrFile] = useState("");

  const generateCommand = () => {
    let cmd = "ls ";
    if (longFormat) cmd += "-l ";
    if (showHidden) cmd += "-a ";
    if (recursive) cmd += "-R ";
    if (reverseOrder) cmd += "-r ";
    if (sortBySize) cmd += "-S ";

    if (fullPath) {
      cmd += "-d $PWD/* ";
    } else {
      if (folders.trim()) cmd += folders + " ";
      if (files.trim()) cmd += files + " ";
    }

    if (stdoutFile.trim()) {
      cmd += `> ${stdoutFile} `;
    }
    if (stderrFile.trim()) {
      cmd += `2> ${stderrFile} `;
    }

    return cmd.trim();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <nav className="text-sm text-gray-500">
          Home › Tools › <span className="text-black">ls Command</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-6">ls Command in Linux/Unix</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <p>
          <strong>ls</strong> is a Linux shell command that lists directory contents of files and directories.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>$ ls [options] [file|dir]</code>
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Options</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>-a</strong>: list all files including hidden</li>
            <li><strong>--color</strong>: colored list (always/never/auto)</li>
            <li><strong>-d</strong>: list directories only</li>
            <li><strong>-F</strong>: classify entries with */={'>'}@|</li>
            <li><strong>-i</strong>: show inode number</li>
            <li><strong>-l</strong>: long format list (permissions, size)</li>
            <li><strong>-la</strong>: long format with hidden files</li>
            <li><strong>-lh</strong>: long format human readable size</li>
            <li><strong>-ls</strong>: long format with file size</li>
            <li><strong>-r</strong>: reverse order</li>
            <li><strong>-R</strong>: recursive directory tree</li>
            <li><strong>-s</strong>: list file size</li>
            <li><strong>-S</strong>: sort by file size</li>
            <li><strong>-t</strong>: sort by date/time</li>
            <li><strong>-X</strong>: sort by extension name</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">List directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ ls Documents/Books</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Absolute path:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ ls /home/user/Documents/Books</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Root directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ ls /</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Parent directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ ls ..</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Home directory:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ ls ~</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">List hidden files:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ ls -a</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Long format and hidden:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ ls -la</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Sort by file size:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ ls -S</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Recursive list:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>$ ls -R</code>
              </pre>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">ls Code Generator</h2>

          <div className="grid gap-4 mb-4">
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={longFormat} onChange={() => setLongFormat(!longFormat)} />
                <span>Long list format (-l)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={showHidden} onChange={() => setShowHidden(!showHidden)} />
                <span>List hidden files (-a)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={recursive} onChange={() => setRecursive(!recursive)} />
                <span>Recursive (-R)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={reverseOrder} onChange={() => setReverseOrder(!reverseOrder)} />
                <span>Reverse (-r)</span>
              </label>
              <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={fullPath} onChange={() => setFullPath(!fullPath)} />
                <span>Full path (-d $PWD/*)</span>
              </label>
            </div>

            <div className="space-y-2 mt-4">
              <label className="font-medium">Files:</label>
              <input
                type="text"
                placeholder="file1 file2"
                value={files}
                onChange={(e) => setFiles(e.target.value)}
                className="border rounded p-2 w-full text-sm"
                disabled={fullPath}
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Folders:</label>
              <input
                type="text"
                placeholder="dir1 dir2"
                value={folders}
                onChange={(e) => setFolders(e.target.value)}
                className="border rounded p-2 w-full text-sm"
                disabled={fullPath}
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Redirect stdout to file:</label>
              <input
                type="text"
                placeholder="out.txt"
                value={stdoutFile}
                onChange={(e) => setStdoutFile(e.target.value)}
                className="border rounded p-2 w-full text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Redirect stderr to file:</label>
              <input
                type="text"
                placeholder="err.txt"
                value={stderrFile}
                onChange={(e) => setStderrFile(e.target.value)}
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

export default LsCommand;
