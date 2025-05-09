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
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
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
                    {/* Additional Examples Section */}
                    <div>
            <h2 className="text-lg font-semibold mb-2">Additional Examples</h2>
            <div className="space-y-4">
              <Example title="Move multiple files to a directory:" code={`$ mv file1.txt file2.txt /home/user/Documents`} />
              <Example title="Rename a directory:" code={`$ mv old_directory new_directory`} />
              <Example title="Move files using wildcards:" code={`$ mv *.txt /home/user/Documents`} />
              <Example title="Move a file to a different directory while renaming:" code={`$ mv file.txt /home/user/Documents/newfile.txt`} />
              <Example title="Move files with confirmation on overwrite:" code={`$ mv -i *.txt /home/user/Documents`} />
              <Example title="Backup files before overwriting in a directory:" code={`$ mv -b *.txt /home/user/backup`} />
              <Example title="Move files with verbosity:" code={`$ mv -v *.jpg /home/user/Pictures`} />
            </div>
          </div>

          {/* Additional Information Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Additional Information</h2>
            <p>
              The <code>mv</code> command is a powerful utility in Linux/Unix systems for moving files and directories.
              It can be used to move files to different directories, rename files, or even move files across different file systems.
              By using various options with the <code>mv</code> command, you can add more flexibility and control over how the files
              are moved and renamed.
            </p>

            <p>
              One important thing to note is that when using <code>mv</code>, the files are not copied; they are moved.
              This means that the files no longer exist in the source location once the move operation is completed.
              However, if you are using the command on a different file system, the files may actually be copied and then removed from the source.
            </p>

            <h3 className="text-md font-semibold mt-4">Considerations When Using `mv`:</h3>
            <ul className="list-disc ml-6 mt-2">
              <li>
                The <strong>-i</strong> option is especially useful if you’re moving files to a location where files with the same name might already exist.
                It will prompt you before overwriting any existing files, which can prevent accidental data loss.
              </li>
              <li>
                Using <strong>-v</strong> can provide you with more context during the file move process, helping you track exactly which files are moved
                and where they are moved.
              </li>
              <li>
                The <strong>-n</strong> option ensures that no files will be overwritten, which is crucial when you want to avoid data loss when moving files.
              </li>
              <li>
                <strong>-b</strong> can help create backups of files before they are overwritten, which is ideal for users who wish to keep the previous versions of files.
              </li>
            </ul>

            <p className="mt-4">
              A common use case for the <code>mv</code> command is when working with large numbers of files. For example, you might have files in different
              subdirectories and you want to move them all into one central directory for easier access. In this case, the <strong>-v</strong> and <strong>-n</strong> options
              can be very helpful, as they allow you to see which files are moved and prevent overwriting.
            </p>

            <h3 className="text-md font-semibold mt-4">Best Practices</h3>
            <p>
              When using the <code>mv</code> command, always double-check the source and destination paths to avoid moving files to the wrong location.
              It is a good habit to use the <strong>-i</strong> option, especially if you’re working with important or sensitive files, to ensure that no files
              are accidentally overwritten.
            </p>

            <p>
              Another useful strategy is to run the <code>mv</code> command with the <strong>-v</strong> option first to view the operations, and then repeat the command
              without the <strong>-v</strong> option for the final move operation.
            </p>
          </div>

          {/* Troubleshooting Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Troubleshooting</h2>
            <p>
              While the <code>mv</code> command is straightforward, users might encounter issues related to permissions, non-existent files, or wrong paths.
            </p>

            <h3 className="text-md font-semibold mt-4">Common Errors and Fixes:</h3>
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Permission Denied Error:</strong> This occurs when you don't have the required permissions to move a file. You can fix this by
                either changing the file's permissions with <code>chmod</code> or using <code>sudo</code> to run the command with administrative privileges.
              </li>
              <li>
                <strong>File Not Found Error:</strong> This error appears when the source file or directory doesn’t exist. Double-check the file path or use the
                <code>ls</code> command to verify that the file exists before attempting to move it.
              </li>
              <li>
                <strong>Overwriting File Error:</strong> If the <code>-i</code> option is not used and the target file exists, the <code>mv</code> command will
                overwrite the file without prompting you, potentially causing data loss. Use <code>-i</code> or <code>-n</code> to prevent this.
              </li>
            </ul>
          </div>

                    {/* History Section */}
                    <div>
            <h2 className="text-lg font-semibold mb-2">History of the `mv` Command</h2>
            <p>
              The <code>mv</code> command has been a staple in Unix and Linux systems for decades. The primary purpose of this command is to move files
              and directories from one location to another, or to rename them. It is an essential part of the toolkit for anyone working with Linux/Unix systems
              and has remained largely unchanged in its core functionality. The command is part of the GNU core utilities in Linux, which are foundational tools
              that help manage the system's file structure.
            </p>

            <p>
              Originally, Unix-like operating systems used commands that operated on a file's inode, which is a data structure that contains metadata about files.
              The <code>mv</code> command operates on the file's inode to move it from one location to another or to change its name. This operation is generally
              fast because it doesn’t involve copying the file's data, but simply updating its metadata. This is why the <code>mv</code> command can be faster than
              other methods of moving files, such as copying and deleting files.
            </p>

            <h3 className="text-md font-semibold mt-4">Evolution of the `mv` Command</h3>
            <p>
              Over time, the <code>mv</code> command has evolved with new options and features to make it more useful and adaptable. Early versions of Unix allowed
              users to move files within the same filesystem only. As operating systems advanced, the <code>mv</code> command was enhanced to allow for the moving
              of files between different filesystems.
            </p>

            <p>
              The introduction of the <code>-i</code>, <code>-v</code>, <code>-b</code>, and other options in later versions of the command allowed users to have
              greater control over file operations, especially when moving multiple files at once. These improvements reflected a growing understanding of users’
              needs, such as the desire to avoid accidental overwriting of files or the need for more feedback during complex operations.
            </p>

            <p>
              Today, the <code>mv</code> command is still in active use in both server-side and desktop Linux systems, and it remains one of the most commonly
              used commands for managing files and directories. The flexibility and simplicity of the command have made it an integral tool in the command-line
              interface (CLI) toolkit.
            </p>
          </div>

          {/* Advanced Use Cases Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Advanced Use Cases for the `mv` Command</h2>
            <div className="space-y-4">
              <Example title="Moving Files Between Different Filesystems:" code={`$ mv /mnt/usb/file.txt /home/user/Documents`} />
              <Example title="Using `mv` with Symbolic Links:" code={`$ mv -i symlink.txt /home/user/Documents`} />
              <Example title="Renaming Multiple Files Using Wildcards:" code={`$ mv *.txt newdir/`} />
              <Example title="Using `mv` to Organize Files by Date:" code={`$ mv *.txt $(date +\%Y)/`} />
            </div>

            <h3 className="text-md font-semibold mt-4">Organizing Files with `mv`</h3>
            <p>
              One of the most useful advanced applications of the <code>mv</code> command is for organizing files. For example, you can use wildcards with <code>mv</code>
              to move multiple files that match a particular pattern into a new directory. This is helpful when you have a large number of files that need to be moved
              based on their name or type. For instance, if you have a directory filled with text files and want to move them to a different folder, you could use:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv *.txt /path/to/destination/</code>
            </pre>

            <p>
              This will move all files with the `.txt` extension to the destination directory. Using wildcards in conjunction with <code>mv</code> can significantly
              reduce the time needed to move large batches of files that fit a particular criteria, without needing to specify each file individually.
            </p>

            <p>
              Another example of advanced usage is organizing files by date. For example, if you want to organize your files into folders based on the year they were
              created or modified, you can use the <code>date</code> command to create folders dynamically and move the corresponding files into them:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ mv *.txt $(date +\%Y)/</code>
            </pre>

            <p>
              This command will move all `.txt` files into a folder named after the current year, such as `2025`, helping you to easily categorize files over time.
            </p>
          </div>

          {/* Handling Large File Operations Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Handling Large File Operations</h2>
            <p>
              When dealing with large files or directories that contain many files, the <code>mv</code> command may take a long time to complete. In these cases,
              there are a few strategies you can use to ensure the operation is efficient and smooth.
            </p>

            <h3 className="text-md font-semibold mt-4">Moving Large Files Across Filesystems</h3>
            <p>
              Moving large files between different filesystems can be slow because <code>mv</code> may end up copying the file to the destination and then deleting
              it from the source, rather than just updating the metadata. To optimize this operation, it’s important to ensure that the source and destination
              are on the same filesystem. If you are working with large files regularly, consider optimizing the filesystem or moving files in smaller batches.
            </p>

            <p>
              You can check if two directories are on the same filesystem by using the <code>df</code> command:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ df /source/directory /destination/directory</code>
            </pre>

            <p>
              If both directories are on the same filesystem, the operation will be faster because only the metadata will be updated, rather than copying and deleting
              the file. If they are on different filesystems, be prepared for the process to take longer, and consider using other tools like <code>rsync</code> for more
              efficient copying.
            </p>

            <h3 className="text-md font-semibold mt-4">Speeding Up File Transfers</h3>
            <p>
              To speed up file transfers, especially for large files, you can use other tools like <code>rsync</code> or <code>cp</code> for copying files across
              filesystems, and then use <code>rm</code> to remove the original files. Here's an example of using <code>rsync</code> to copy files:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ rsync -av /source/file /destination/</code>
            </pre>

            <p>
              After the file is copied, you can then remove it from the original location using the <code>rm</code> command:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ rm /source/file</code>
            </pre>

            <p>
              This method can sometimes be faster because <code>rsync</code> is designed to efficiently transfer large files, especially across different filesystems.
            </p>
          </div>

          {/* More Troubleshooting Tips Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">More Troubleshooting Tips</h2>
            <p>
              While the <code>mv</code> command is powerful, users may encounter various issues, especially when working with symbolic links, directories,
              or when moving a large number of files. Here are some additional troubleshooting tips to help with common issues:
            </p>

            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Symbolic Link Issues:</strong> If you're trying to move a symbolic link, you need to ensure that you're handling it properly. The <code>mv</code> command
                moves the symlink itself, not the file it points to. To move the target file along with the symlink, you’ll need to copy the target file and then remove
                the symlink.
              </li>
              <li>
                <strong>Moving Directories:</strong> By default, the <code>mv</code> command will move an entire directory, including all its contents. However, if there
                are files that are read-only or locked by another process, you might encounter issues. Use the <code>chmod</code> or <code>chattr</code> commands to change
                file permissions or check for file locks.
              </li>
              <li>
                <strong>Permissions Errors:</strong> If you're not able to move files, ensure that you have the necessary permissions to access the source and destination directories.
                You can modify file permissions using the <code>chmod</code> command, or use <code>sudo</code> for elevated privileges.
              </li>
            </ul>
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
