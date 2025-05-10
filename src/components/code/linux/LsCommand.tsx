import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



/**
 * LsCommand component generates a list of files and directories in a Linux/Unix system.
 * The component allows users to customize the `ls` command with various options like
 * displaying hidden files, using long formats, and sorting by file size.
 */
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

  /**
   * Generates the command based on selected options and input fields.
   * @returns {string} The generated `ls` command with options and arguments.
   */
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
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            The <strong>ls</strong> command is used in Linux/Unix to list the contents of a directory, such as files and subdirectories.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls [options] [file|dir]</code>
            </pre>
          </div>

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
                    { option: "-a", desc: "List all files, including hidden ones." },
                    { option: "-l", desc: "Use long listing format (permissions, size, etc.)" },
                    { option: "-r", desc: "Reverse the order of the output" },
                    { option: "-R", desc: "Recursively list directories" },
                    { option: "-S", desc: "Sort by file size" },
                    { option: "-d", desc: "List directories only" },
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

          <div>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              <Example title="List files in a directory:" code={`$ ls Documents/Books`} />
              <Example title="List all files, including hidden:" code={`$ ls -a`} />
              <Example title="Use long format to view details:" code={`$ ls -l`} />
              <Example title="Sort by file size:" code={`$ ls -S`} />
              <Example title="List files recursively:" code={`$ ls -R`} />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ls Command Generator</h2>
            <div className="space-y-4">
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
                className="border rounded p-2 w-full text-sm dark:text-black"
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
                className="border rounded p-2 w-full text-sm dark:text-black"
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
                className="border rounded p-2 w-full text-sm dark:text-black"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Redirect stderr to file:</label>
              <input
                type="text"
                placeholder="err.txt"
                value={stderrFile}
                onChange={(e) => setStderrFile(e.target.value)}
                className="border rounded p-2 w-full text-sm dark:text-black"
              />
            </div>

            <div className="bg-gray-100 p-4 rounded text-sm mt-4 dark:text-black">
              <code>{generateCommand()}</code>
            </div>
          </div>
          
        </CardContent>
      </Card>
    </div>
  );
};

/**
 * Example component is used to display a code example with a title.
 * @param {string} title The title of the example.
 * @param {string} code The code to be displayed.
 */
const Example: React.FC<{ title: string; code: string }> = ({ title, code }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
      <code>{code}</code>
    </pre>
  </div>
);

export default LsCommand;
