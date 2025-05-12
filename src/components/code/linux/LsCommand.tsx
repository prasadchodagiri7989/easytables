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
          <div>
  <h2 className="text-lg font-semibold mb-2">Common Use Cases</h2>
  <ul className="list-disc pl-6 space-y-1">
    <li><strong>Check Permissions:</strong> Use <code>ls -l</code> to view file permissions, owner, and group details.</li>
    <li><strong>Organize by Size:</strong> Use <code>ls -S</code> to identify large files quickly.</li>
    <li><strong>Find Recently Modified Files:</strong> Use <code>ls -lt</code> to sort files by modification time.</li>
    <li><strong>Navigate Subdirectories:</strong> Use <code>ls -R</code> to list all files recursively in nested folders.</li>
    <li><strong>Work with Dotfiles:</strong> Use <code>ls -a</code> to see hidden files like <code>.env</code>, <code>.git</code>, etc.</li>
  </ul>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Combining Flags</h2>
  <p>
    You can combine multiple flags together for efficiency. For example, <code>ls -la</code> is the same as <code>ls -l -a</code>. Here's a quick list:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li><code>ls -la</code> – Long list format including hidden files.</li>
    <li><code>ls -ltr</code> – List by modification time in reverse order.</li>
    <li><code>ls -lh</code> – Long format with human-readable file sizes.</li>
  </ul>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Human-Readable File Sizes</h2>
  <p>
    Use the <code>-h</code> option with <code>-l</code> to display file sizes in KB, MB, or GB instead of bytes. Example:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
    <code>$ ls -lh</code>
  </pre>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Color-Coded Output</h2>
  <p>
    Most modern terminals colorize the output of <code>ls</code> to differentiate between files, directories, and executable files. To enable this manually, use:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
    <code>$ ls --color=auto</code>
  </pre>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Creating Useful Aliases</h2>
  <p>
    You can create shortcuts for commonly used `ls` commands by defining aliases in your shell configuration (e.g., <code>~/.bashrc</code> or <code>~/.zshrc</code>):
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
    <code>alias ll='ls -lh'</code>
  </pre>
  <p>
    After adding an alias, run <code>source ~/.bashrc</code> (or relevant file) to activate it.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Using Wildcards with ls</h2>
  <p>
    Wildcards are powerful in shell commands. Use them with <code>ls</code> to filter specific files:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li><code>ls *.txt</code> – Lists all files ending with <code>.txt</code></li>
    <li><code>ls a*</code> – Lists files starting with <code>a</code></li>
    <li><code>ls *[0-9]*</code> – Lists files with numbers in their names</li>
  </ul>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Sorting with ls</h2>
  <p>Use these options to control how the output is sorted:</p>
  <ul className="list-disc pl-6 space-y-1">
    <li><code>-t</code> – Sort by modification time (newest first)</li>
    <li><code>-u</code> – Use access time for sorting</li>
    <li><code>-U</code> – Show entries in directory order (no sorting)</li>
    <li><code>--sort=size</code> – Explicitly sort by size</li>
  </ul>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">What Are Hidden Files?</h2>
  <p>
    In Linux, files starting with a dot (.) are considered hidden. These often store configuration settings, such as:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li><code>.bashrc</code> – Shell configuration</li>
    <li><code>.git/</code> – Git repository metadata</li>
    <li><code>.env</code> – Environment variables</li>
  </ul>
  <p>
    Use <code>ls -a</code> or <code>ls -la</code> to view them.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">ls vs find vs tree</h2>
  <p>Here’s how <code>ls</code> compares with other Linux commands:</p>
  <ul className="list-disc pl-6 space-y-1">
    <li><strong>ls</strong> – Lists contents of directories</li>
    <li><strong>find</strong> – Searches for files and directories recursively with advanced filters</li>
    <li><strong>tree</strong> – Displays directories as a tree structure (needs to be installed separately)</li>
  </ul>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Common Errors with ls</h2>
  <ul className="list-disc pl-6 space-y-1">
    <li><code>ls: cannot access 'xyz': No such file or directory</code> – Check for typos in the filename or path.</li>
    <li><code>Permission denied</code> – You may not have read access. Try using <code>sudo</code> if appropriate.</li>
  </ul>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Default ls Aliases</h2>
  <p>
    Many Linux distributions alias <code>ls</code> to something like <code>ls --color=auto</code>. To see your active aliases:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
    <code>$ alias ls</code>
  </pre>
  <p>To remove or override an alias:</p>
  <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
    <code>$ unalias ls</code>
  </pre>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
  <p>
    The <code>ls</code> command is one of the most frequently used and versatile tools in Linux and Unix environments. Whether you're listing files in a directory, viewing detailed file information, or organizing outputs with advanced flags, mastering <code>ls</code> improves your efficiency and confidence in navigating the terminal.
  </p>
  <p>
    By combining different options and understanding how output formatting, sorting, and file visibility work, you can tailor the <code>ls</code> command to meet various real-world needs. As you explore further, integrating <code>ls</code> with wildcards, redirections, and scripts opens the door to more powerful file management.
  </p>
  <p>
    Keep practicing different combinations and use cases to become fluent in working with files and directories via the command line.
  </p>
</div>
{/* Exploring ls with Sorting and Filtering */}
<div>
  <h2 className="text-lg font-semibold mb-2">Advanced Sorting and Filtering</h2>
  <p>
    Beyond listing files, <code>ls</code> can sort output in various ways. Combine these options to customize how results appear:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li><code>-t</code>: Sort by modification time (most recent first).</li>
    <li><code>-u</code>: Sort by access time instead of modification.</li>
    <li><code>-c</code>: Sort by inode change time.</li>
    <li><code>-X</code>: Sort by file extension alphabetically.</li>
    <li><code>--sort=size</code>: Explicit sort by size (alternative to <code>-S</code>).</li>
  </ul>
  <p>
    You can reverse any of these by adding <code>-r</code>. For example:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>$ ls -lt</code>
  </pre>
</div>

{/* Understanding File Indicators */}
<div>
  <h2 className="text-lg font-semibold mb-2">Understanding File Type Indicators</h2>
  <p>
    When using the <code>-F</code> option, <code>ls</code> appends characters to filenames to indicate their type:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li><code>/</code>: Directory</li>
    <li><code>*</code>: Executable</li>
    <li><code>@</code>: Symbolic link</li>
    <li><code>=</code>: Socket</li>
    <li><code>|</code>: FIFO (named pipe)</li>
  </ul>
  <p>
    Example:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>$ ls -F</code>
  </pre>
</div>

{/* Using ls to Identify Symlinks */}
<div>
  <h2 className="text-lg font-semibold mb-2">Identifying Symbolic Links</h2>
  <p>
    To view symbolic links and their targets, use:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>$ ls -l</code>
  </pre>
  <p>
    Output will include an arrow (<code>→</code>) showing where the link points:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>lrwxrwxrwx 1 user user 11 Apr 10 15:20 shortcut → /etc/hosts</code>
  </pre>
</div>

{/* Combining ls with grep */}
<div>
  <h2 className="text-lg font-semibold mb-2">Filtering ls Output with grep</h2>
  <p>
    Use <code>grep</code> with <code>ls</code> to show only files matching certain patterns:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>$ ls -l | grep ".log"</code>
  </pre>
  <p>This will list only files that end with <code>.log</code>.</p>
</div>

{/* Performance Optimization with ls */}
<div>
  <h2 className="text-lg font-semibold mb-2">Performance Tips</h2>
  <p>
    In directories with thousands of files, <code>ls</code> may be slow. Optimize with:
  </p>
  <ul className="list-disc pl-6 space-y-1">
    <li><code>ls -U</code>: Outputs in directory order, skips sorting.</li>
    <li><code>ls -f</code>: Disables sorting and includes hidden files.</li>
    <li><code>ls | head</code>: Only shows the first few files.</li>
  </ul>
</div>

{/* ls and Scripting Considerations */}
<div>
  <h2 className="text-lg font-semibold mb-2">Scripting with ls</h2>
  <p>
    Avoid using <code>ls</code> in scripts to parse filenames—especially if they contain spaces. Use <code>find</code> or <code>glob</code> patterns instead.
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>{`for file in *.txt; do\n  echo "$file"\ndone`}</code>
  </pre>
</div>

{/* Common Mistakes */}
<div>
  <h2 className="text-lg font-semibold mb-2">Common Mistakes with ls</h2>
  <ul className="list-disc pl-6 space-y-1">
    <li>Using <code>ls</code> in scripts where filenames might contain spaces.</li>
    <li>Expecting <code>ls</code> to always return sorted output—locale settings affect behavior.</li>
    <li>Forgetting that <code>ls</code> by default doesn’t show hidden files or directories.</li>
  </ul>
</div>

{/* Comparing Directories */}
<div>
  <h2 className="text-lg font-semibold mb-2">Comparing Two Directories</h2>
  <p>
    To compare contents of two folders, you can use:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>$ diff &lt;(ls dir1) &lt;(ls dir2)</code>
  </pre>
  <p>
    This uses process substitution to compare file lists.
  </p>
</div>

{/* Viewing Only Directories or Files */}
<div>
  <h2 className="text-lg font-semibold mb-2">Show Only Directories or Files</h2>
  <p>Use <code>ls -d */</code> to list directories only:</p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>$ ls -d */</code>
  </pre>
  <p>To list only files:</p>
  <pre className="bg-gray-100 p-4 rounded text-sm">
    <code>$ find . -maxdepth 1 -type f</code>
  </pre>
</div>

{/* Summary Best Practices */}
<div>
  <h2 className="text-lg font-semibold mb-2">Summary of Best Practices</h2>
  <ul className="list-disc pl-6 space-y-1">
    <li>Use <code>-lh</code> for readable file sizes.</li>
    <li>Combine <code>-la</code> to see hidden files with metadata.</li>
    <li>Create aliases like <code>alias ll='ls -lh'</code> to speed up workflows.</li>
    <li>Use <code>tree</code> for visual directory structure (must be installed).</li>
    <li>Know when to use <code>find</code> instead of <code>ls</code>.</li>
  </ul>
</div>
          {/* Visualizing Directory Structure */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Visualizing Directory Structures</h2>
            <p>
              Although <code>ls</code> doesn't show nested structures visually, you can combine it with the <code>tree</code> command (if installed) for a better view of folder hierarchies:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ tree -L 2 -h --dirsfirst</code>
            </pre>
            <p>
              The <code>-L 2</code> option limits the depth to 2 levels, <code>-h</code> shows sizes, and <code>--dirsfirst</code> lists folders before files.
            </p>
          </div>

          {/* Exporting ls Output to Files */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Exporting ls Output to Files</h2>
            <p>
              You can redirect the output of <code>ls</code> to a file for later analysis or sharing:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls -lh {">"} filelist.txt</code>
            </pre>
            <p>
              Use <code>cat filelist.txt</code> or open with an editor to review.
            </p>
          </div>

          {/* Filtering File Types */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Filtering File Types with grep</h2>
            <p>
              You can filter <code>ls</code> output by file type. For example, show only PNG files:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls -l | grep ".png"</code>
            </pre>
            <p>
              This is useful for media directories or grouped file processing.
            </p>
          </div>

          {/* Using ls in Cron Jobs */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Using ls in Cron Jobs</h2>
            <p>
              You can run periodic <code>ls</code> commands in cron jobs to track file changes:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>0 * * * * ls -l /var/log &gt;&gt; /tmp/log_snapshot.txt</code>
            </pre>
            <p>
              This appends a log listing every hour for monitoring or compliance.
            </p>
          </div>

          {/* Comparing Directories */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Compare Directory Listings</h2>
            <p>
              Use <code>diff</code> to compare the output of <code>ls</code> in two directories:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ diff &lt;(ls dir1) &lt;(ls dir2)</code>
            </pre>
            <p>
              This reveals missing or additional files between locations.
            </p>
          </div>

          {/* Showing Hidden Metadata */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Displaying Extended Metadata</h2>
            <p>
              Use the <code>lsattr</code> and <code>getfacl</code> tools alongside <code>ls</code> to understand hidden file attributes and access control lists:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ lsattr file.txt</code>
            </pre>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ getfacl file.txt</code>
            </pre>
          </div>

          {/* Shell Expansion with ls */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Shell Expansion Techniques</h2>
            <p>
              Combine <code>ls</code> with shell brace expansion to target multiple patterns:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls *.{`{jpg,png,gif}`}</code>
            </pre>
            <p>
              This lists all image files in those formats without needing multiple commands.
            </p>
          </div>

          {/* Color Key for ls Output */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Understanding ls Color Codes</h2>
            <p>
              The default colors are usually:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-blue-600">Blue</span>: Directories</li>
              <li><span className="text-green-600">Green</span>: Executables</li>
              <li><span className="text-cyan-600">Cyan</span>: Symbolic links</li>
              <li><span className="text-red-600">Red</span>: Archives or compressed files</li>
              <li><span className="text-gray-600">Gray</span>: Device files</li>
            </ul>
          </div>

          {/* Adding Timestamps to Output */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Adding Timestamps to Output</h2>
            <p>
              To log directory states with time context:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                echo "Snapshot taken at $(date)" &gt;&gt; log.txt{"\n"}
                ls -lh &gt;&gt; log.txt
              </code>
            </pre>
          </div>

          {/* Saving and Viewing Logs Later */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Saving and Reviewing Logs</h2>
            <p>
              You can combine with <code>less</code> or <code>cat</code> to analyze saved output:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ less log.txt</code>
            </pre>
          </div>

          {/* Bonus Tip: Export for CSV Use */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Exporting File List as CSV</h2>
            <p>
              Extract just names and sizes to import into Excel:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls -lh | awk '{"print $9 , $5"}' &gt; files.csv</code>
            </pre>
          </div>

          {/* Summary Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Summary</h2>
            <p>
              These advanced techniques transform <code>ls</code> into a flexible tool for scripting, automation, visualization, and analysis. Mastering these helps with tasks such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Monitoring and reporting file changes</li>
              <li>Debugging system behavior with ownership and permission checks</li>
              <li>Filtering and formatting for readability or automated processing</li>
              <li>Combining with <code>awk</code>, <code>grep</code>, <code>find</code>, and <code>tree</code> for deep file inspection</li>
            </ul>
            <p>
              Whether used interactively or in scripts, <code>ls</code> remains an essential command in every Unix user's toolkit.
            </p>
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
