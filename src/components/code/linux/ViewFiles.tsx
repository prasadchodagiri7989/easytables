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
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
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
                  className="border rounded p-2 w-full text-sm dark:text-black"
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

            <div className="bg-gray-100 p-4 rounded text-sm mt-4 dark:text-black">
              <code>{generateCommand()}</code>
            </div>
          </div>
                    {/* Advanced Usage Section */}
                    <div>
            <h2 className="text-lg font-semibold mb-2">Advanced Usage</h2>
            <p>
              Beyond the basic options, <code>ls</code> supports a variety of flags for customizing output, sorting, and formatting. These are particularly useful for scripting and professional sysadmin work.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>-t</strong>: Sort by modification time, newest first</li>
              <li><strong>-S</strong>: Sort by file size, largest first</li>
              <li><strong>-r</strong>: Reverse the sorting order</li>
              <li><strong>-X</strong>: Sort alphabetically by extension</li>
              <li><strong>--sort=size|time|extension</strong>: More verbose sort options</li>
              <li><strong>-1</strong>: List one file per line</li>
              <li><strong>--group-directories-first</strong>: Show directories before files</li>
            </ul>
            <p className="mt-2">
              You can combine these with <code>-l</code> for maximum detail. For example:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls -lhtr</code>
            </pre>
            <p>This command lists files with details, in reverse order of time modified, with human-readable sizes.</p>
          </div>

          {/* Color and Formatting */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Color and Visual Formatting</h2>
            <p>
              The <code>ls</code> command can show files in different colors based on type and permissions, helping you distinguish directories, executables, symlinks, and more.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>--color=auto</strong>: Enables color output when writing to a terminal</li>
              <li><strong>--color=always</strong>: Forces color output (useful for piping)</li>
              <li><strong>alias ls='ls --color=auto'</strong>: Set a default in your <code>.bashrc</code> or <code>.zshrc</code></li>
              <li>Color schemes can be customized using the <code>LS_COLORS</code> environment variable</li>
            </ul>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>LS_COLORS="di=1;34:ln=1;36:so=1;35:pi=33:ex=1;32"</code>
            </pre>
          </div>

          {/* Understanding Hidden Files */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Understanding Hidden Files</h2>
            <p>
              In Unix-like systems, hidden files are those whose names begin with a dot (<code>.</code>). These are usually configuration files or folders, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><code>.bashrc</code>: Bash shell configuration</li>
              <li><code>.config/</code>: Application-specific settings</li>
              <li><code>.ssh/</code>: SSH keys and configs</li>
            </ul>
            <p className="mt-2">
              Use <code>ls -a</code> or <code>ls -A</code> to view hidden files. The <code>-A</code> option omits the <code>.</code> and <code>..</code> entries for cleaner output.
            </p>
          </div>

          {/* Sorting by Time and File Type */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Sorting by Time and File Type</h2>
            <p>
              You can inspect how recently files were accessed, modified, or changed by using these options:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>--time=atime</strong>: Sort by last access time</li>
              <li><strong>--time=ctime</strong>: Sort by last status change time</li>
              <li><strong>--time=use</strong>: Use time of last access (same as <code>atime</code>)</li>
              <li><strong>--indicator-style=slash</strong>: Append a <code>/</code> to directories, <code>*</code> to executables, etc.</li>
            </ul>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls -lh --time=atime --indicator-style=slash</code>
            </pre>
          </div>

          {/* Listing File Inodes and Metadata */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Listing File Inodes and Metadata</h2>
            <p>
              An inode stores metadata about a file in Linux. You can view it using:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls -i</code>
            </pre>
            <p>This shows the inode number of each file, which is useful for low-level file management and debugging.</p>
          </div>

          {/* Using Tree and Alternatives */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Alternatives to ls: Using tree</h2>
            <p>
              The <code>tree</code> command gives a recursive, visually structured view of files and directories.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ tree</code>
            </pre>
            <p>
              Install it with <code>sudo apt install tree</code> or <code>brew install tree</code> depending on your OS.
              It's a great alternative when you want to view folder hierarchy quickly.
            </p>
            <p className="mt-2">
              Example usage:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ tree -L 2 -h --dirsfirst</code>
            </pre>
            <p>This lists the directory tree up to 2 levels, with human-readable file sizes and directories listed first.</p>
          </div>

          {/* Listing by File Permissions */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Viewing File Permissions with ls</h2>
            <p>
              The long listing format <code>-l</code> shows file permissions in symbolic form, e.g., <code>-rw-r--r--</code>.
            </p>
            <p>
              Each character represents:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>First character: file type (<code>-</code> for file, <code>d</code> for directory)</li>
              <li>Next 3: owner permissions (read, write, execute)</li>
              <li>Next 3: group permissions</li>
              <li>Last 3: others' permissions</li>
            </ul>
            <p>
              Combine with <code>-n</code> to see numeric user and group IDs:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls -ln</code>
            </pre>
          </div>

          {/* Combining ls with Other Commands */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Combining ls with Other Tools</h2>
            <p>
              The output of <code>ls</code> can be piped to other commands for processing:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls -lh | grep ".txt"</code>
            </pre>
            <p>Filters output for .txt files only.</p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ls -1 | wc -l</code>
            </pre>
            <p>Counts how many files and folders are in the current directory.</p>
          </div>
                    {/* Symbolic Links and ls */}
                    <div>
            <h2 className="text-lg font-semibold mb-2">Handling Symbolic Links with ls</h2>
            <p>
              Symbolic links (symlinks) are special files that point to other files or directories. When using <code>ls -l</code>, symlinks appear with an arrow indicating their target:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>lrwxrwxrwx 1 user group 11 Apr 10 15:20 shortcut → /etc/hosts</code>
            </pre>
            <p>
              Use <code>ls -l</code> or <code>ls -lL</code> to follow symlinks and show the file info of the target.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>-l</strong>: Shows symlink as is</li>
              <li><strong>-L</strong>: Dereferences symlink and shows target’s info</li>
              <li><strong>-H</strong>: Similar, but only for command line arguments</li>
            </ul>
          </div>

          {/* Security and Permissions Visibility */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Security Awareness with ls</h2>
            <p>
              When managing multi-user systems, inspecting file permissions is critical. Use <code>ls -l</code> to look for overly open files (like <code>777</code> permissions), which may lead to vulnerabilities.
            </p>
            <p>
              Example of an insecure file:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>-rwxrwxrwx 1 user user 1234 May 9 11:45 script.sh</code>
            </pre>
            <p>
              Also look for files owned by <code>root</code> in user directories or setuid binaries that could be exploited.
            </p>
            <p>
              Use <code>lsattr</code> and <code>getfacl</code> for deeper permission checks beyond <code>ls</code>.
            </p>
          </div>

          {/* File Type Indicators */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Understanding File Types in ls Output</h2>
            <p>
              In long format (<code>-l</code>), the first character indicates the file type:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><code>-</code>: Regular file</li>
              <li><code>d</code>: Directory</li>
              <li><code>l</code>: Symbolic link</li>
              <li><code>b</code>: Block device</li>
              <li><code>c</code>: Character device</li>
              <li><code>p</code>: Named pipe</li>
              <li><code>s</code>: Socket</li>
            </ul>
            <p>
              These indicators help you understand how to interact with the file and whether it's executable, navigable, or part of the system hardware abstraction.
            </p>
          </div>

          {/* Performance Tips */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Performance Considerations</h2>
            <p>
              When running <code>ls</code> in directories with thousands of files, performance can suffer. Here are some tips:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Use <code>ls | head</code> to preview output without loading everything</li>
              <li><code>ls -U</code>: Outputs in directory order without sorting (fastest)</li>
              <li><code>ls -f</code>: Similar to <code>-U</code> but includes hidden files</li>
              <li>Redirect output to a file: <code>ls -l &gt; file_list.txt</code></li>
            </ul>
            <p>
              These tricks reduce I/O and CPU load on large or remote file systems.
            </p>
          </div>

          {/* ls in Shell Scripts */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Using ls in Shell Scripts</h2>
            <p>
              The <code>ls</code> command is often used in shell scripts to iterate over files or filter output:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{`for file in $(ls *.txt); do\n  echo "Processing $file"\ndone`}</code>
            </pre>
            <p>
              However, this can break with filenames that include spaces. A safer way is:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{`find . -name "*.txt" -print0 | while IFS= read -r -d '' file; do\n  echo "Processing $file"\ndone`}</code>
            </pre>
          </div>

          {/* Cross-Platform Behavior */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Cross-Platform Behavior</h2>
            <p>
              The <code>ls</code> command behaves slightly differently across Unix variants (e.g., Linux, macOS, BSD). For example:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>macOS uses BSD <code>ls</code>, which lacks some GNU-specific flags (e.g., <code>--group-directories-first</code>)</li>
              <li>On macOS, use <code>gls</code> from coreutils for GNU compatibility</li>
              <li>Always test scripts on the target OS to ensure flag compatibility</li>
            </ul>
          </div>

          {/* Combining ls with find and xargs */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Combining ls with find and xargs</h2>
            <p>
              When you want more complex file selection or batch processing, <code>find</code> and <code>xargs</code> are powerful tools:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ find . -type f -name "*.log" | xargs ls -lh</code>
            </pre>
            <p>
              This command lists all <code>.log</code> files under the current directory with detailed file size information.
            </p>
          </div>

          {/* Accessibility and Customization */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Accessibility and Customization</h2>
            <p>
              You can customize <code>ls</code> output for better readability. For example:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><code>alias ll='ls -lh'</code>: Create a shorthand alias for frequent use</li>
              <li><code>alias la='ls -la --color=auto'</code>: List all with color output</li>
              <li>Use <code>dircolors</code> to set or theme LS_COLORS</li>
            </ul>
            <p>
              Add aliases to your shell profile (e.g., <code>.bashrc</code>, <code>.zshrc</code>) to persist them.
            </p>
          </div>

          {/* Common Mistakes to Avoid */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Parsing <code>ls</code> output in scripts — use <code>find</code> or <code>glob</code> instead</li>
              <li>Forgetting quotes around filenames with spaces</li>
              <li>Misusing <code>ls</code> flags that don’t exist on all platforms</li>
              <li>Assuming <code>ls</code> output is sorted alphabetically — sorting depends on locale and flags</li>
            </ul>
          </div>

          {/* Summary and Best Practices */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Summary and Best Practices</h2>
            <p>
              The <code>ls</code> command is more powerful than it appears. For best results:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Use <code>-lh</code> for readability and size clarity</li>
              <li>Enable colors with <code>--color=auto</code> for visual parsing</li>
              <li>Create helpful aliases for your workflow</li>
              <li>Avoid using <code>ls</code> in scripts when filenames may include whitespace</li>
              <li>Test your <code>ls</code> usage across environments to ensure compatibility</li>
            </ul>
            <p>
              Mastery of <code>ls</code> not only speeds up navigation but deepens your understanding of the file system, permissions, and scripting essentials in Unix-like environments.
            </p>
          </div>


        </CardContent>
      </Card>
    </div>
  );
};

export default ViewFiles;
