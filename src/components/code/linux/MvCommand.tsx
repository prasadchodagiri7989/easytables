import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const MvCommand: React.FC = () => {
  const [force, setForce] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [updateOnly, setUpdateOnly] = useState(false);
  const [verbose, setVerbose] = useState(false);
  const [sources, setSources] = useState("");
  const [destination, setDestination] = useState("");

  const generateCommand = () => {
    let cmd = "mv ";
    if (force) cmd += "-f ";
    if (interactive) cmd += "-i ";
    if (updateOnly) cmd += "-u ";
    if (verbose) cmd += "-v ";

    if (sources.trim()) cmd += sources + " ";
    if (destination.trim()) cmd += destination;

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
                  <BreadcrumbPage>mv Command</BreadcrumbPage>
                </BreadcrumbList>
              </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>mv Command in Linux/Unix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            The <strong>mv</strong> command is used to move or rename files and directories in Linux/Unix.
          </p>

          {/* Syntax Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv [options] source dest</code>
            </pre>
          </div>

          {/* Options Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Options</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>-f</strong>: Force move, overwrite destination file without prompt</li>
              <li><strong>-i</strong>: Interactive prompt before overwrite</li>
              <li><strong>-u</strong>: Update, move only if source is newer than destination</li>
              <li><strong>-v</strong>: Verbose, print source and destination files</li>
              <li><strong>man mv</strong>: Help manual</li>
            </ul>
          </div>

          {/* Examples Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              <Example title="Move multiple files to a directory:" code={`$ mv main.c def.h /home/usr/rapid/`} />
              <Example title="Move all .c files to a subdirectory:" code={`$ mv *.c bak`} />
              <Example title="Move files from subdirectory to current directory:" code={`$ mv bak/* .`} />
              <Example title="Rename a file:" code={`$ mv main.c main.bak`} />
              <Example title="Rename a directory:" code={`$ mv bak bak2`} />
              <Example title="Update only if source is newer:" code={`$ mv -u main.c bak`} />
              <Example title="Move with verbose output:" code={`$ mv -v main.c bak`} />
            </div>
          </div>

          {/* Command Generator Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">mv Command Generator</h2>
            <div className="grid gap-4 mb-4">
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center space-x-1 text-sm">
                  <input type="checkbox" checked={force} onChange={() => setForce(!force)} />
                  <span>Force move (-f)</span>
                </label>
                <label className="flex items-center space-x-1 text-sm">
                  <input type="checkbox" checked={interactive} onChange={() => setInteractive(!interactive)} />
                  <span>Interactive (-i)</span>
                </label>
                <label className="flex items-center space-x-1 text-sm">
                  <input type="checkbox" checked={updateOnly} onChange={() => setUpdateOnly(!updateOnly)} />
                  <span>Update only if newer (-u)</span>
                </label>
                <label className="flex items-center space-x-1 text-sm">
                  <input type="checkbox" checked={verbose} onChange={() => setVerbose(!verbose)} />
                  <span>Verbose (-v)</span>
                </label>
              </div>

              <div className="space-y-2 mt-4">
                <label className="font-medium">Source files/folders:</label>
                <input
                  type="text"
                  placeholder="e.g., file1 file2 dir1"
                  value={sources}
                  onChange={(e) => setSources(e.target.value)}
                  className="border rounded p-2 w-full text-sm dark:text-black"
                />
              </div>

              <div className="space-y-2">
                <label className="font-medium">Destination:</label>
                <input
                  type="text"
                  placeholder="e.g., /path/to/destination/"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="border rounded p-2 w-full text-sm dark:text-black"
                />
              </div>
            </div>

            {/* Command Output */}
            <div className="bg-gray-100 p-4 rounded text-sm mt-4 dark:text-black">
              <code>{generateCommand()}</code>
            </div>
          </div>
                    {/* Advanced Options Section */}
                    <div>
            <h2 className="text-lg font-semibold mb-2">Advanced Options and Edge Cases</h2>
            <p>
              The <code>mv</code> command, while simple to use, can be quite powerful when combined with various advanced options. Below, we'll dive into some
              less commonly used options that can make your file-moving operations more efficient, flexible, and tailored to your needs.
            </p>

            <h3 className="text-md font-semibold mt-4">Moving Directories</h3>
            <p>
              When moving directories, the <code>mv</code> command will move the entire directory, including all files and subdirectories within it. This is useful
              when you need to restructure directories. For example:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv mydir /home/user/newdir/</code>
            </pre>

            <p>
              However, if you're trying to move a directory that contains files with restricted permissions, or that is currently in use by another process, you
              might encounter errors. In such cases, ensure that you have the appropriate permissions to move the directory, and check for any processes that might
              be accessing files in that directory.
            </p>

            <h3 className="text-md font-semibold mt-4">Renaming Directories and Files</h3>
            <p>
              Renaming files and directories is one of the most basic uses of <code>mv</code>. However, a common mistake is forgetting that the destination path is
              also considered the new name. For example, if you're trying to rename a file:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv oldname.txt newname.txt</code>
            </pre>

            <p>
              This will rename the file <code>oldname.txt</code> to <code>newname.txt</code>. If you specify a directory as the destination, the source file will
              be renamed to the directory name, which may not be the intended behavior. So, always verify your destination path before executing the command.
            </p>

            <h3 className="text-md font-semibold mt-4">Handling Files with Special Characters</h3>
            <p>
              Files that contain spaces, special characters, or even leading hyphens can cause issues when using the <code>mv</code> command. For example, if you have
              a file with spaces in its name, you need to enclose the file name in quotes or escape the spaces with backslashes:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv "My File.txt" "New Folder/"</code>
            </pre>

            <p>
              Similarly, if the file starts with a hyphen (e.g., <code>-file.txt</code>), the shell may treat it as an option. To avoid this, you can use a double
              dash (<code>--</code>) to signal the end of options:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv -- -file.txt destination_folder/</code>
            </pre>

            <h3 className="text-md font-semibold mt-4">Dealing with Non-Existent Files</h3>
            <p>
              If you attempt to move a file that does not exist, <code>mv</code> will return an error. To prevent such errors from interrupting your scripts or
              operations, you can combine <code>mv</code> with the <code>-n</code> (no-clobber) option to avoid overwriting existing files. For example, if the destination
              file exists, <code>mv</code> won't move the file:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv -n source.txt destination.txt</code>
            </pre>

            <h3 className="text-md font-semibold mt-4">Recursive Move</h3>
            <p>
              If you're dealing with directories and want to ensure all contents are moved recursively, you can combine the <code>mv</code> command with the
              <code>-r</code> option. While the <code>-r</code> option is typically used with <code>cp</code> or <code>rm</code>, it can also be used in some cases
              with <code>mv</code> to ensure subdirectories are moved properly. However, the <code>mv</code> command typically handles directories recursively by default,
              so this is often not necessary unless you're working with special cases:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv -r dir1 dir2</code>
            </pre>
          </div>

          {/* Troubleshooting Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Troubleshooting Common Issues</h2>
            <p>
              While the <code>mv</code> command is fairly straightforward, users may encounter some issues depending on the context of their file movement operations.
              Here are a few troubleshooting tips to help resolve common problems:
            </p>

            <h3 className="text-md font-semibold mt-4">Permission Denied Errors</h3>
            <p>
              One of the most common issues when moving files or directories is encountering a "Permission Denied" error. This can occur if the user does not have
              sufficient permissions to access the source or destination directories. You can resolve this by:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Using <code>chmod</code> to change the file's permissions to allow read/write access.</li>
              <li>Using <code>sudo</code> to execute the <code>mv</code> command with elevated privileges.</li>
              <li>Ensuring the destination directory is writable and that the file isn't in use by another process.</li>
            </ul>

            <h3 className="text-md font-semibold mt-4">File Not Found Errors</h3>
            <p>
              If you receive a "File Not Found" error, double-check the file paths you've provided for the source and destination. This error may also occur if the
              file path contains special characters, spaces, or typos. Ensure that you:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Escape special characters or enclose file paths in quotes.</li>
              <li>Use <code>ls</code> to verify that the source file exists and is accessible before moving it.</li>
            </ul>

            <h3 className="text-md font-semibold mt-4">File Already Exists Errors</h3>
            <p>
              If the destination file already exists and you haven’t specified the <code>-f</code> (force) option, you may encounter a "File Exists" error. To fix
              this, you can:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Use the <code>-f</code> option to force the move and overwrite the destination file.</li>
              <li>Use the <code>-i</code> option to prompt before overwriting the file.</li>
              <li>Check whether the destination file is writable, or if it's being used by another process.</li>
            </ul>

            <h3 className="text-md font-semibold mt-4">Dealing with Read-Only Files</h3>
            <p>
              Moving files that are marked as read-only may also trigger errors. To move read-only files, you'll need to adjust the file's attributes:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ chmod +w file.txt</code>
            </pre>
            <p>
              This command adds write permissions, allowing you to move the file. You can also check if any file system attributes (like <code>chattr</code>) are preventing
              modifications.
            </p>
          </div>

          {/* Conclusion Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              The <code>mv</code> command is a versatile tool in the Linux/Unix ecosystem, allowing you to move, rename, and organize files and directories with ease.
              Whether you are managing files for development, system administration, or daily tasks, mastering the <code>mv</code> command is essential. With the
              added options and understanding of potential pitfalls, you can use this command to optimize your workflow and prevent common issues.
            </p>

            <p>
              As always, it's important to test your commands carefully, especially when moving or renaming critical files. Consider using the <code>-i</code> option to
              ensure that you don’t overwrite files accidentally. And for complex operations, don’t hesitate to explore additional tools like <code>rsync</code> and
              <code>cp</code> for copying files across filesystems or handling large file transfers.
            </p>
          </div>
                    {/* Understanding File Overwrites */}
                    <div>
            <h2 className="text-lg font-semibold mb-2">Understanding File Overwrites</h2>
            <p>
              One of the most common actions when using the <code>mv</code> command is overwriting a file. If the destination file already exists, the default behavior
              of the <code>mv</code> command is to replace the existing file with the one being moved. This can be risky if you are not careful, as the original file
              will be lost permanently without a prompt (unless specified otherwise).
            </p>

            <h3 className="text-md font-semibold mt-4">Overwriting Without Confirmation</h3>
            <p>
              To overwrite a file without any prompt, use the <code>-f</code> (force) option. This tells the <code>mv</code> command to proceed with the move even if
              the destination file already exists, without confirming or asking for permission.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv -f file1.txt file2.txt</code>
            </pre>

            <p>
              While this is a convenient option, it comes with risks. The <code>-f</code> option bypasses the interactive check and overwrites the destination file
              immediately. If the destination file contains important data, it will be lost.
            </p>

            <h3 className="text-md font-semibold mt-4">Prompting Before Overwriting</h3>
            <p>
              On the other hand, if you want to ensure that you are prompted before overwriting a file, you can use the <code>-i</code> (interactive) option. This will
              cause the <code>mv</code> command to ask for confirmation before overwriting any existing files. For example:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv -i file1.txt file2.txt</code>
            </pre>

            <p>
              When you use the <code>-i</code> option, the system will ask you whether you want to overwrite the file. You can choose to proceed or cancel the action,
              which provides an extra layer of safety when dealing with important files.
            </p>

            <h3 className="text-md font-semibold mt-4">Preventing Overwrites</h3>
            <p>
              If you want to ensure that a file is only moved if the destination does not already exist (i.e., no overwriting), you can use the <code>-n</code> (no-clobber)
              option. This prevents <code>mv</code> from overwriting an existing file. The command will simply fail if the destination file already exists, leaving the
              original file intact.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv -n file1.txt file2.txt</code>
            </pre>

            <p>
              The <code>-n</code> option is useful when you don't want to risk losing any data by accident, and it is especially helpful when you're automating tasks with
              scripts.
            </p>
          </div>

          {/* Working with Wildcards */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Using Wildcards for Multiple Files</h2>
            <p>
              Wildcards, also known as globbing patterns, allow you to select multiple files or directories based on specific patterns, making it easier to work with
              groups of files. The <code>mv</code> command works seamlessly with wildcards like <code>*</code>, <code>?</code>, and square brackets (<code>[]</code>),
              which enable you to select files based on their names.
            </p>

            <h3 className="text-md font-semibold mt-4">Moving All Files with a Specific Extension</h3>
            <p>
              A common use case is moving all files with a specific extension. For example, to move all <code>.txt</code> files to a different directory, you can use
              the <code>*</code> wildcard to match all files with the extension:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv *.txt /path/to/destination/</code>
            </pre>

            <p>
              The <code>*</code> wildcard matches all files in the current directory that end with <code>.txt</code>, allowing you to move them all at once. This can be
              very efficient when you need to organize files in bulk.
            </p>

            <h3 className="text-md font-semibold mt-4">Moving Files with Specific Patterns</h3>
            <p>
              You can also use other patterns with wildcards to match files with specific characteristics. For example, if you want to move all files starting with
              <code>data</code>, you can use the <code>?</code> wildcard to match a single character in filenames:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv data?.txt /path/to/destination/</code>
            </pre>

            <p>
              This will move files like <code>data1.txt</code>, <code>data2.txt</code>, etc., but not <code>data12.txt</code> since the <code>?</code> wildcard matches
              only a single character.
            </p>

            <h3 className="text-md font-semibold mt-4">Moving Files with Character Ranges</h3>
            <p>
              Wildcards can also be used to match files with a range of characters. For example, if you want to move all files whose names start with any letter between
              <code>a</code> and <code>f</code>, you can use square brackets:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv [a-f]*.txt /path/to/destination/</code>
            </pre>

            <p>
              This command will match files like <code>apple.txt</code>, <code>banana.txt</code>, and so on, but will not match files that start with letters outside
              the <code>a-f</code> range.
            </p>

            <h3 className="text-md font-semibold mt-4">Excluding Files</h3>
            <p>
              While <code>mv</code> does not have a built-in exclusion option like <code>rsync</code>, you can combine it with other tools like <code>find</code> to
              exclude files from being moved. For example, to move all files except those that end in <code>.log</code>, you can use the following:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ find . -type f ! -name "*.log" -exec mv {} /path/to/destination/ \;</code>
            </pre>

            <p>
              The <code>find</code> command here is used to search for all files that do not end with <code>.log</code>, and then moves them to the destination
              directory.
            </p>
          </div>

          {/* Using mv for System Administration */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Using mv for System Administration</h2>
            <p>
              As a system administrator, you’ll find that the <code>mv</code> command is invaluable for maintaining and organizing directories and files. From
              moving configuration files to cleaning up temporary directories, the <code>mv</code> command is an essential tool for managing the Linux filesystem.
            </p>

            <h3 className="text-md font-semibold mt-4">Moving Configuration Files</h3>
            <p>
              System administrators frequently move configuration files when upgrading or replacing software, or when restructuring system directories. For example, to
              move a configuration file from one directory to another:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv /etc/old_config.conf /etc/new_config.conf</code>
            </pre>

            <p>
              This command moves <code>old_config.conf</code> to the new location, overwriting any existing configuration files in the destination if necessary. You may
              want to use the <code>-i</code> option in this case to prevent accidental overwriting of important configuration files.
            </p>

            <h3 className="text-md font-semibold mt-4">Cleaning Up Temporary Directories</h3>
            <p>
              Many systems have temporary directories, such as <code>/tmp</code>, which store files that are no longer needed. You may want to move files out of the
              temporary directory for backup or archiving. This can be done with the <code>mv</code> command:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv /tmp/*.log /var/log/archived/</code>
            </pre>

            <p>
              This command moves all <code>.log</code> files from the <code>/tmp</code> directory to an archived directory, ensuring that old log files are organized
              and not taking up space in the temporary directory.
            </p>
          </div>

          {/* Conclusion of Additional Content */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              The <code>mv</code> command is more than just a simple tool for moving files around. It is an essential utility for managing file systems, automating file
              moves in scripts, and handling complex file operations. By understanding the full range of options, from basic syntax to advanced features like wildcards
              and file exclusion, you can use <code>mv</code> to improve your efficiency and maintain a well-organized system.
            </p>

            <p>
              Always remember to use caution when moving or renaming critical files, especially when using options like <code>-f</code> or <code>-i</code>, and
              consider backing up important data before making irreversible changes. By practicing safe file management techniques, you can leverage the power of the
              <code>mv</code> command to streamline your workflows and keep your files organized.
            </p>
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

export default MvCommand;
