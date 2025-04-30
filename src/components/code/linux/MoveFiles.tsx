import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const MoveFiles: React.FC = () => {
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [interactive, setInteractive] = useState<boolean>(false);
  const [verbose, setVerbose] = useState<boolean>(false);
  const [noClobber, setNoClobber] = useState<boolean>(false);
  const [backup, setBackup] = useState<boolean>(false);

  const generateCommand = (): string => {
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
    <div className="w-full max-w-3xl mx-auto">
<Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/code/all">Code Tools</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/linux/all">Linux Commands</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Move Files Command</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Move Files in Linux/Unix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            The <strong>mv</strong> command is used to <strong>move or rename files and directories</strong> in Linux/Unix.
          </p>

          {/* Syntax Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv [options] source target</code>
            </pre>
          </div>

          {/* Options Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Options</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b p-2">Option</th>
                    <th className="border-b p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { option: "-i", desc: "Prompt before overwrite" },
                    { option: "-v", desc: "Verbose mode (show what’s happening)" },
                    { option: "-n", desc: "Do not overwrite an existing file" },
                    { option: "-b", desc: "Make a backup of each file that would be overwritten" },
                  ].map(({ option, desc }) => (
                    <tr key={option}>
                      <td className="border-b p-2">
                        <code>{option}</code>
                      </td>
                      <td className="border-b p-2">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Examples Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              <Example title="Rename a file:" code={`$ mv oldname.txt newname.txt`} />
              <Example title="Move file to a directory:" code={`$ mv file.txt /home/user/Documents`} />
              <Example title="Prompt before overwriting:" code={`$ mv -i file.txt existing.txt`} />
              <Example title="Backup before overwrite:" code={`$ mv -b file.txt backup.txt`} />
            </div>
          </div>

          {/* Command Generator Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">mv Command Generator</h2>
            <div className="space-y-4">
              <div>
                <label className="font-medium">Source File(s):</label>
                <input
                  type="text"
                  placeholder="file1.txt"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="border rounded p-2 w-full text-sm"
                />
              </div>

              <div>
                <label className="font-medium">Destination:</label>
                <input
                  type="text"
                  placeholder="folder/ or newname.txt"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="border rounded p-2 w-full text-sm"
                />
              </div>

              {/* Option Checkboxes */}
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

export default MoveFiles;
