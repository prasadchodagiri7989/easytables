import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const ViewFiles: React.FC = () => {
  const [path, setPath] = useState("");
  const [all, setAll] = useState(false);
  const [longListing, setLongListing] = useState(false);
  const [humanReadable, setHumanReadable] = useState(false);
  const [recursive, setRecursive] = useState(false);

  const generateCommand = () => {
    let cmd = "ls ";
    if (all) cmd += "-a ";
    if (longListing) cmd += "-l ";
    if (humanReadable) cmd += "-h ";
    if (recursive) cmd += "-R ";

    if (path.trim()) cmd += `${path}`;

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
                  <BreadcrumbPage>ls Command</BreadcrumbPage>
                </BreadcrumbList>
              </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>ls Command in Linux/Unix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            The <strong>ls</strong> command is used to <strong>list files and directories</strong> in Linux.
          </p>

          {/* Syntax Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls [options] [path]</code>
            </pre>
          </div>

          {/* Options Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Options</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>-a</strong>: Show all files including hidden files</li>
              <li><strong>-l</strong>: Use a long listing format</li>
              <li><strong>-h</strong>: With -l, print sizes in human-readable format (e.g., 1K, 234M)</li>
              <li><strong>-R</strong>: List subdirectories recursively</li>
            </ul>
          </div>

          {/* Examples Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold">List files in current directory:</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>$ ls</code>
                </pre>
              </div>

              <div>
                <h3 className="text-sm font-semibold">List all files including hidden ones:</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>$ ls -a</code>
                </pre>
              </div>

              <div>
                <h3 className="text-sm font-semibold">Long listing with human readable sizes:</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>$ ls -lh</code>
                </pre>
              </div>

              <div>
                <h3 className="text-sm font-semibold">Recursively list all files and directories:</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>$ ls -R</code>
                </pre>
              </div>
            </div>
          </div>

          {/* ls Code Generator Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">ls Code Generator</h2>
            <div className="grid gap-4 mb-4">
              <div className="space-y-2">
                <label className="font-medium">Path (optional):</label>
                <input
                  type="text"
                  placeholder="/home/user/Documents"
                  value={path}
                  onChange={(e) => setPath(e.target.value)}
                  className="border rounded p-2 w-full text-sm"
                />
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <label className="flex items-center space-x-1 text-sm">
                  <input type="checkbox" checked={all} onChange={() => setAll(!all)} />
                  <span>Show all (-a)</span>
                </label>
                <label className="flex items-center space-x-1 text-sm">
                  <input type="checkbox" checked={longListing} onChange={() => setLongListing(!longListing)} />
                  <span>Long listing (-l)</span>
                </label>
                <label className="flex items-center space-x-1 text-sm">
                  <input type="checkbox" checked={humanReadable} onChange={() => setHumanReadable(!humanReadable)} />
                  <span>Human readable (-h)</span>
                </label>
                <label className="flex items-center space-x-1 text-sm">
                  <input type="checkbox" checked={recursive} onChange={() => setRecursive(!recursive)} />
                  <span>Recursive (-R)</span>
                </label>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded text-sm mt-4">
              <code>{generateCommand()}</code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewFiles;
