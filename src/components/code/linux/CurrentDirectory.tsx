import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const CurrentDirectory = () => {
  const [showLogical, setShowLogical] = useState(true);
  const [showPhysical, setShowPhysical] = useState(false);

  const generateCommand = () => {
    if (showPhysical) return "pwd -P";
    return "pwd";
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
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
          <BreadcrumbPage>Current Directory</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>Finding Current Directory in Linux</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            In Linux/Unix, you can view your <strong>current working directory</strong> using the <code>pwd</code> command. It prints the full, absolute path to where you are currently located in the filesystem.
          </p>

          <section>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ pwd [options]</code>
            </pre>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Options</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {[
                { label: "-L", description: "Show logical path (includes symbolic links)" },
                { label: "-P", description: "Show physical path (resolves all symbolic links)" },
              ].map((opt) => (
                <li key={opt.label}>
                  <strong>{opt.label}</strong>: {opt.description}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Environment Variable</h2>
            <p>
              You can also view the current directory stored in the environment variable <code>$PWD</code>:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>echo $PWD</code>
            </pre>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              {[
                { title: "Show current logical directory:", code: "$ pwd" },
                { title: "Show current physical directory (no symlinks):", code: "$ pwd -P" },
                { title: "Using environment variable:", code: "$ echo $PWD" },
              ].map(({ title, code }) => (
                <div key={title}>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <pre className="bg-gray-100 p-4 rounded text-sm">
                    <code>{code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">Current Directory Code Generator</h2>

            <div className="flex flex-wrap gap-4 mb-4">
              <OptionCheckbox
                label="Logical path (default)"
                checked={showLogical}
                onChange={() => {
                  setShowLogical(true);
                  setShowPhysical(false);
                }}
              />
              <OptionCheckbox
                label="Physical path (-P)"
                checked={showPhysical}
                onChange={() => {
                  setShowPhysical(true);
                  setShowLogical(false);
                }}
              />
            </div>

            <div className="bg-gray-100 p-4 rounded text-sm mt-4">
              <code>{generateCommand()}</code>
            </div>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2">Using pwd in Shell Scripts</h2>
            <p>
              The <code>pwd</code> command is often used in shell scripts to determine the current working directory and navigate programmatically. You can store the result of the <code>pwd</code> command into a variable for further use.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                current_dir=$(pwd) <br />
                echo "The current directory is $current_dir"
              </code>
            </pre>
            <p>
              In this example, the script saves the output of <code>pwd</code> into the <code>current_dir</code> variable and then prints it out. This can be helpful when you need to reference or log the current directory in automated tasks.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">pwd in Complex File Management</h2>
            <p>
              The <code>pwd</code> command is often used in file management tasks where you need to ensure you're working in the correct directory before performing operations. For example, using <code>pwd</code> in combination with <code>cd</code> can help you change directories in a controlled manner.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                echo "Starting directory:" $(pwd) <br />
                cd /home/user/important_folder <br />
                echo "Changed to directory:" $(pwd)
              </code>
            </pre>
            <p>
              This script changes the directory and then verifies the change by outputting the current directory before and after using <code>cd</code>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Automating Backup Scripts</h2>
            <p>
              One common task in Linux-based systems is automating backups. You can use the <code>pwd</code> command to capture the current directory before initiating a backup operation.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                backup_dir=$(pwd) <br />
                echo "Starting backup in directory: $backup_dir" <br />
                tar -czvf backup.tar.gz * <br />
                echo "Backup completed in directory: $backup_dir"
              </code>
            </pre>
            <p>
              This script captures the directory, runs a backup, and confirms the location of the backup after completion. It’s particularly useful in scheduled backup tasks via cron jobs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">pwd with Symbolic Links</h2>
            <p>
              As mentioned earlier, the <code>pwd</code> command has two modes: logical and physical. When you're working with symbolic links, it’s essential to understand the difference between these two:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Logical path:</strong> This includes symbolic links. If the current directory is a symlink, the output shows the symlink's path.</li>
              <li><strong>Physical path:</strong> This resolves all symlinks and shows the real path of the directory.</li>
            </ul>
            <p>
              For example, if you are in a directory that is a symlink to another directory, the logical path will show the symlink, while the physical path will show the destination of the symlink.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ ln -s /home/user/dir /home/user/symlink <br />
                $ cd /home/user/symlink <br />
                $ pwd <br />
                /home/user/symlink <br />
                $ pwd -P <br />
                /home/user/dir
              </code>
            </pre>
            <p>
              This example demonstrates the difference between <code>pwd</code> and <code>pwd -P</code> when working with symlinks.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">pwd in Multi-level Directory Navigation</h2>
            <p>
              If you navigate through multiple directories, it's easy to get lost. Using the <code>pwd</code> command after each <code>cd</code> command allows you to track your current location in the filesystem.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                cd /home/user <br />
                pwd <br />
                /home/user <br />
                cd /home/user/documents <br />
                pwd <br />
                /home/user/documents <br />
                cd /home/user/documents/projects <br />
                pwd <br />
                /home/user/documents/projects
              </code>
            </pre>
            <p>
              This workflow is useful for complex navigation where you might forget your exact location, especially when working with deep directory structures.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Combining pwd with Other Commands</h2>
            <p>
              The <code>pwd</code> command can be combined with other Linux commands to perform more complex tasks. For instance, you can list the contents of the current directory and simultaneously print the directory path.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                echo "Current directory: $(pwd)" <br />
                ls -l
              </code>
            </pre>
            <p>
              This script first prints the current directory, and then lists all files and folders in that directory.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">pwd in Network File Systems</h2>
            <p>
              In a networked environment (e.g., NFS, SSHFS), you might need to know your current directory relative to a mounted network location. The <code>pwd</code> command remains useful even in such environments.
            </p>
            <p>
              Just like in local directories, the <code>pwd</code> command will show you the absolute path of the current directory, which can be crucial when accessing files over the network.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Advanced pwd Usage: Cross-Platform Compatibility</h2>
            <p>
              While the <code>pwd</code> command is primarily used in Linux and Unix-based systems, the functionality is similar in other environments like macOS or WSL (Windows Subsystem for Linux).
            </p>
            <p>
              In cross-platform scripts, you can use <code>pwd</code> commands to ensure that directory paths are consistent, regardless of the underlying operating system.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                if [ "$(uname)" == "Darwin" ]; then <br />
                &nbsp;&nbsp;echo "MacOS detected, using pwd" <br />
                &nbsp;&nbsp;pwd <br />
                fi
              </code>
            </pre>
            <p>
              This script checks if the operating system is macOS, and if so, it runs the <code>pwd</code> command to output the current directory.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Other Useful Directory Navigation Commands</h2>
            <p>
              Besides <code>pwd</code>, there are other useful directory-related commands that are essential for Linux users:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><code>cd</code>: Changes the current directory.</li>
              <li><code>ls</code>: Lists the contents of a directory.</li>
              <li><code>mkdir</code>: Creates a new directory.</li>
              <li><code>rmdir</code>: Removes an empty directory.</li>
              <li><code>find</code>: Searches for files in a directory hierarchy.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2">Navigating to Parent and Home Directories</h2>
            <p>
              Often, when you are working with directories in Linux, you may need to navigate to the parent directory or your home directory. Understanding how to quickly move around using commands like <code>cd</code> can save you a lot of time.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Parent Directory:</strong> To move up one directory level, use <code>cd ..</code>. This is useful when you need to go back to the previous directory.</li>
              <li><strong>Home Directory:</strong> To quickly jump to your home directory from anywhere, use <code>cd ~</code> or simply <code>cd</code> with no arguments.</li>
              <li><strong>Previous Directory:</strong> You can also return to your last visited directory by using <code>cd -</code>.</li>
            </ul>
            <p>
              Example:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                cd /home/user/documents <br />
                pwd <br />
                /home/user/documents <br />
                cd .. <br />
                pwd <br />
                /home/user <br />
                cd ~ <br />
                pwd <br />
                /home/user
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Using pwd for Debugging</h2>
            <p>
              The <code>pwd</code> command is incredibly helpful when debugging shell scripts or command-line processes. It helps to quickly confirm if the script or command is executing in the correct directory. It's particularly useful when troubleshooting file not found errors or permission issues.
            </p>
            <p>
              For instance, if a script is supposed to access a specific file but fails, checking the directory using <code>pwd</code> can help you determine if the script is running in the wrong directory.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                echo "Debugging script, current directory:" $(pwd) <br />
                if [ ! -f "importantfile.txt" ]; then <br />
                &nbsp;&nbsp;echo "File does not exist in $(pwd)" <br />
                fi
              </code>
            </pre>
            <p>
              In this example, if the file isn't found, the script will print the current directory where it’s searching for the file. This can help you verify whether the script's directory context is correct.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Working with Multiple Directories</h2>
            <p>
              In some situations, you may need to interact with multiple directories in one session. You can use the <code>pwd</code> command in combination with other commands like <code>cd</code> and <code>ls</code> to check directories before performing other operations, such as copying or moving files.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Checking Multiple Directories:</strong> Using <code>pwd</code> along with <code>ls</code> can help you compare directories quickly.</li>
              <li><strong>Automating Directory Switches:</strong> You can automate directory changes based on conditions in a script.</li>
            </ul>
            <p>
              Example:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                cd /home/user/documents <br />
                pwd <br />
                /home/user/documents <br />
                ls <br />
                cd /home/user/pictures <br />
                pwd <br />
                /home/user/pictures <br />
                ls
              </code>
            </pre>
            <p>
              This example shows how to check the contents of two directories by switching between them, ensuring you are in the right directory before taking further action.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Advanced pwd Usage with Aliases</h2>
            <p>
              If you frequently use the <code>pwd</code> command, you may want to create a shortcut for it by using an alias in your shell configuration file. This can save you time and typing effort if you find yourself checking the directory path often.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                alias mypwd='pwd -P'
              </code>
            </pre>
            <p>
              By adding this alias to your shell configuration file (e.g., <code>.bashrc</code> or <code>.zshrc</code>), you can use <code>mypwd</code> instead of typing <code>pwd -P</code> every time. This alias will show the physical path, resolving symbolic links automatically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">pwd and File Permissions</h2>
            <p>
              In some cases, you may encounter permission-related issues when navigating through directories. The <code>pwd</code> command helps you confirm whether you have the necessary permissions to view or change directories. It’s essential to be aware of your current directory when troubleshooting permission issues.
            </p>
            <p>
              If you don't have the correct permissions to access a directory, the <code>pwd</code> command will still output the current directory, but you may not be able to use other commands like <code>ls</code> or <code>cd</code> to interact with its contents.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                $ ls /restricted_folder <br />
                ls: cannot open directory /restricted_folder: Permission denied <br />
                $ pwd <br />
                /home/user/restricted_folder
              </code>
            </pre>
            <p>
              In this example, the user can't list the directory contents due to permission restrictions, but <code>pwd</code> still confirms their location in the filesystem.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">How pwd Works Internally</h2>
            <p>
              The <code>pwd</code> command works by querying the operating system to determine the current directory. It reads the <code>current working directory</code> from the shell environment and outputs the absolute path to the terminal.
            </p>
            <p>
              Internally, <code>pwd</code> uses system calls to resolve the path of the current directory. When the <code>-P</code> option is used, it resolves any symbolic links by reading the system’s path structure.
            </p>
            <p>
              In the case of symbolic links, the kernel resolves the symlink to its physical location, which is why <code>pwd -P</code> shows the actual path.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">pwd in Desktop Environments</h2>
            <p>
              While the <code>pwd</code> command is typically used in terminal-based workflows, it’s also useful in graphical desktop environments like GNOME, KDE, or Xfce. Some file managers in Linux allow you to open a terminal at the current directory location. This functionality uses the same underlying principle as <code>pwd</code> to determine the current location.
            </p>
            <p>
              For instance, in the GNOME file manager (Nautilus), you can use the "Open in Terminal" option to start a terminal session in the current directory, which uses the <code>pwd</code> command under the hood.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Summary of pwd Command Usage</h2>
            <p>
              The <code>pwd</code> command is an essential tool for Linux/Unix users. It allows you to quickly check your current directory, whether you need the logical or physical path. It is invaluable in scripting, file management, and debugging tasks. Combined with other commands, it allows for powerful and efficient navigation and file operations in the terminal.
            </p>
            <p>
              Whether you're managing a small project or working in a complex filesystem, the <code>pwd</code> command provides a simple and reliable way to stay oriented in your work environment.
            </p>
          </section>


        </CardContent>
      </Card>
    </div>
  );
};

const OptionCheckbox = ({ label, checked, onChange }) => (
  <label className="flex items-center space-x-1 text-sm">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <span>{label}</span>
  </label>
);

export default CurrentDirectory;
