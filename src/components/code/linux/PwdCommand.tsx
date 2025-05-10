import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const PwdCommand: React.FC = () => {
  const [absolutePath, setAbsolutePath] = useState(true);

  const generateCommand = () => {
    return absolutePath ? "pwd" : "pwd -P"; // '-P' shows physical path if there are symlinks
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
                  <BreadcrumbPage>pwd Command</BreadcrumbPage>
                </BreadcrumbList>
              </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>pwd Command in Linux/Unix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            The <strong>pwd</strong> ("print working directory") command displays the current working directory path in your terminal session.
          </p>

          {/* Syntax Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ pwd [options]</code>
            </pre>
          </div>

          {/* Options Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Options</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>-L</strong>: Show logical path (default, can include symlinks)</li>
              <li><strong>-P</strong>: Show physical path (resolves symlinks)</li>
            </ul>
          </div>

          {/* Examples Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              <Example title="Current working directory:" code={`$ pwd`} />
              <Example title="Physical path without symlinks:" code={`$ pwd -P`} />
            </div>
          </div>

          {/* Command Generator Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">pwd Command Generator</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <label className="flex items-center space-x-1 text-sm ">
                <input
                  type="checkbox"
                  checked={!absolutePath}
                  onChange={() => setAbsolutePath(!absolutePath)}
                />
                <span>Physical path (-P)</span>
              </label>
            </div>

            {/* Command Output */}
            <div className="bg-gray-100 p-4 rounded text-sm mt-4 dark:text-black">
              <code>{generateCommand()}</code>
            </div>
          </div>
                    {/* Understanding the Output of pwd */}
                    <div>
            <h2 className="text-lg font-semibold mb-2">Understanding the Output of pwd</h2>
            <p>
              The output of the <code>pwd</code> command displays the absolute path of the current working directory (CWD). This is essential for knowing exactly where
              you are within the filesystem.
            </p>

            <h3 className="text-md font-semibold mt-4">What is the Current Working Directory (CWD)?</h3>
            <p>
              The <strong>current working directory (CWD)</strong> is the directory in which a user is currently working. It serves as a reference point for relative file
              paths. When you navigate the filesystem, your CWD changes depending on the commands you issue. For example, using the <code>cd</code> command to change
              directories will modify your CWD, and calling <code>pwd</code> will display your new location.
            </p>

            <h3 className="text-md font-semibold mt-4">What is the Absolute Path?</h3>
            <p>
              The <strong>absolute path</strong> is the full path from the root directory (<code>/</code>) to the current directory. It shows the exact location in
              the filesystem, ensuring there is no ambiguity about where you are.
            </p>

            <p>
              For instance, if your CWD is <code>/home/user/documents/project</code>, running the <code>pwd</code> command will output this absolute path, which
              uniquely identifies your location in the filesystem.
            </p>
          </div>

          {/* Common Use Cases for pwd */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common Use Cases for pwd</h2>
            <p>
              While the <code>pwd</code> command is simple, it plays a crucial role in navigation, scripting, and system administration. Below are some common
              scenarios where it can be useful:
            </p>

            <h3 className="text-md font-semibold mt-4">1. Navigating to Directories</h3>
            <p>
              As a user navigates the filesystem, it's important to know the current directory. If you find yourself lost or unsure of your location, simply type
              <code>pwd</code> to print your current path. This can help you avoid mistakes when working with file paths.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ cd /home/user/documents/project</code>
              <code>$ pwd</code>
              <code>/home/user/documents/project</code>
            </pre>

            <h3 className="text-md font-semibold mt-4">2. Scripting with pwd</h3>
            <p>
              The <code>pwd</code> command is often used in shell scripts to record the current directory and perform tasks relative to it. For instance, you can
              save the result of <code>pwd</code> to a variable, and later use it to navigate back to the same location:
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>current_dir=$(pwd)</code>
              <code>cd /some/other/directory</code>
              <code>echo "Now in directory: $(pwd)"</code>
              <code>cd "$current_dir"</code>
              <code>echo "Back in the original directory: $(pwd)"</code>
            </pre>

            <p>
              This script uses the output of <code>pwd</code> to store the current directory and then navigate to another directory. After performing tasks in the new
              directory, the script returns to the original directory using the saved path.
            </p>

            <h3 className="text-md font-semibold mt-4">3. System Administration</h3>
            <p>
              When managing system processes and files, administrators often need to confirm the current directory or perform tasks in a specific directory. By
              running <code>pwd</code>, you can verify your location in the filesystem before performing critical operations like moving or deleting files.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>cd /etc/</code>
              <code>pwd</code>
              <code>/etc</code>
            </pre>
            <p>
              In this example, the administrator uses <code>pwd</code> to verify their location before making changes in the <code>/etc</code> directory, which contains
              configuration files for the system.
            </p>
          </div>

          {/* How pwd Works with Symlinks */}
          <div>
            <h2 className="text-lg font-semibold mb-2">How pwd Works with Symlinks</h2>
            <p>
              In some cases, directories may contain symbolic links (symlinks), which are pointers to other directories or files. These symlinks may alter the output
              of <code>pwd</code> depending on the options you use.
            </p>

            <h3 className="text-md font-semibold mt-4">Logical vs. Physical Path</h3>
            <p>
              By default, <code>pwd</code> displays the logical path, which includes symlinks. This means that if your current directory is a symlink, the path
              displayed will show the symlink itself rather than the actual physical path.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ ln -s /home/user/documents /home/user/link</code>
              <code>$ cd /home/user/link</code>
              <code>$ pwd</code>
              <code>/home/user/link</code>
            </pre>

            <p>
              Here, <code>link</code> is a symlink to the <code>documents</code> directory. If you run <code>pwd</code> in the <code>/home/user/link</code> directory,
              it will show the symlink path rather than the actual path to <code>/home/user/documents</code>.
            </p>

            <h3 className="text-md font-semibold mt-4">Using -P to Show Physical Path</h3>
            <p>
              To see the physical path, resolving any symlinks in the directory, use the <code>-P</code> option. This will return the actual directory path, excluding
              any symlinks.
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ pwd -P</code>
              <code>/home/user/documents</code>
            </pre>

            <p>
              In this case, <code>pwd -P</code> resolves the symlink and returns the actual location of the directory.
            </p>
          </div>

          {/* Using pwd in Combination with Other Commands */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Using pwd in Combination with Other Commands</h2>
            <p>
              The <code>pwd</code> command is often used in combination with other commands to simplify tasks. For instance, you can combine it with <code>cd</code>
              (change directory) or use it within shell scripts for automating tasks.
            </p>

            <h3 className="text-md font-semibold mt-4">Printing the Current Directory Before Moving Files</h3>
            <p>
              It's often helpful to print the current directory before performing file operations, such as moving files. For example, you can combine <code>pwd</code>
              with <code>mv</code> to show the location before moving a file:
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ pwd</code>
              <code>/home/user/documents</code>
              <code>$ mv file.txt /home/user/backup/</code>
              <code>$ pwd</code>
              <code>/home/user/backup</code>
            </pre>

            <p>
              Here, the first <code>pwd</code> confirms the current location before moving the file, and the second <code>pwd</code> verifies that the file has been
              moved to the correct directory.
            </p>

            <h3 className="text-md font-semibold mt-4">Using pwd to Check Your Directory in Scripts</h3>
            <p>
              You can also use <code>pwd</code> in scripts to confirm your current directory before running commands. For example, a script might perform different
              actions depending on where it is run:
            </p>

            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>current_dir=$(pwd)</code>
              <code>if [ "$current_dir" == "/home/user/documents" ]; then</code>
              <code>  echo "In the right directory!"</code>
              <code>else</code>
              <code>  echo "You are not in the right directory!"</code>
              <code>fi</code>
            </pre>

            <p>
              This script checks if the current directory is the correct one before performing tasks. It will display a message depending on whether you are in the
              expected directory or not.
            </p>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              The <code>pwd</code> command may seem simple at first, but it provides essential functionality for working within the filesystem. Whether you are
              navigating directories, scripting, or handling system administration tasks, knowing the current working directory is key to efficient operations.
            </p>
            <p>
              With the option to show either the logical or physical path, <code>pwd</code> is adaptable to different needs. By understanding how it interacts with
              symlinks and other commands, you can leverage it to create more robust shell scripts and improve your command-line workflows.
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

export default PwdCommand;
