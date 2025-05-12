import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CdCommand: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Breadcrumb */}
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
              <Link to="/all-tools">All Tools</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/linux/all">Linux Commands</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>cd Command</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>cd Command in Linux/Unix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            The <strong>cd</strong> (change directory) command is used in Linux and Unix to move between directories in the terminal shell.
          </p>
          <p>
            💡 Tip: You can press the <strong>Tab</strong> key to auto-complete directory names!
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ cd [directory]</code>
            </pre>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-6">
              <Example title="Go to home directory:" codes={["$ cd", "$ cd ~"]} />
              <Example title="Go to root directory:" codes={["$ cd /"]} />
              <Example title="Move to parent directory:" codes={["$ cd .."]} />
              <Example title="Go to subdirectory (e.g., Documents):" codes={["$ cd Documents"]} />
              <Example title="Go to nested directory (e.g., Documents/Books):" codes={["$ cd Documents/Books"]} />
              <Example title="Use an absolute path:" codes={["$ cd /home/user/Desktop"]} />
              <Example
                title='Directory with spaces (e.g., "My Images"):'
                codes={["$ cd My\\ Images", '$ cd "My Images"', `$ cd 'My Images'`]}
              />
            </div>
          </div>
                    <div>
            <h2 className="text-lg font-semibold mb-2">Understanding Relative vs Absolute Paths</h2>
            <p>
              When using the <code>cd</code> command, you can specify either a relative path or an absolute path:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Absolute path:</strong> Starts from the root directory and specifies the full path (e.g., <code>/home/user/Documents</code>).
              </li>
              <li>
                <strong>Relative path:</strong> Starts from the current directory (e.g., <code>../Downloads</code> to move one level up and into Downloads).
              </li>
            </ul>
            <p>
              Use absolute paths when you need to access a known location regardless of where you currently are, and relative paths when navigating from your current position.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Special Characters in cd</h2>
            <p>The <code>cd</code> command supports several shorthand notations and symbols:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><code>~</code>: Refers to your home directory.</li>
              <li><code>-</code>: Switches to the previous directory.</li>
              <li><code>.</code>: Represents the current directory.</li>
              <li><code>..</code>: Moves one level up to the parent directory.</li>
            </ul>
            <Example title="Switch to previous directory:" codes={["$ cd -"]} />
            <Example title="Stay in the current directory:" codes={["$ cd ."]} />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Tab Completion for Faster Navigation</h2>
            <p>
              Typing out long directory names can be tedious. Pressing the <strong>Tab</strong> key after typing part of a name will auto-complete it if it's unique.
            </p>
            <p>
              For example, typing <code>cd Doc</code> and pressing <code>Tab</code> will auto-complete to <code>cd Documents</code> if that folder exists.
            </p>
            <p>
              If multiple matches are found, pressing <code>Tab</code> twice will list all available completions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Using cd in Scripts</h2>
            <p>
              In shell scripts, <code>cd</code> can be used to change the working directory before running a command. This is helpful for executing commands in specific folders.
            </p>
            <Example
              title="Navigate before executing:"
              codes={[
                "#!/bin/bash",
                "cd /var/log",
                "ls -l",
              ]}
            />
            <p>
              Be aware that each shell script runs in a subshell, so directory changes don't persist outside the script unless explicitly sourced.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Handling Errors</h2>
            <p>
              If you try to <code>cd</code> into a directory that doesn't exist or for which you lack permission, you’ll receive an error:
            </p>
            <Example
              title="Error example:"
              codes={["$ cd nonexistent", "bash: cd: nonexistent: No such file or directory"]}
            />
            <p>
              To avoid this, verify the directory exists using <code>ls</code> or <code>find</code> before changing into it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Combining cd with Other Commands</h2>
            <p>
              You can combine <code>cd</code> with other commands using semicolons (<code>;</code>) or logical operators (<code>&&</code>, <code>||</code>) for more powerful one-liners.
            </p>
            <Example
              title="Run command after changing directory:"
              codes={["$ cd /var/log && ls -l"]}
            />
            <p>
              The <code>&&</code> ensures the second command runs only if the first one succeeds, while <code>;</code> will run the second command regardless.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">cd Command and Environment Variables</h2>
            <p>
              The shell uses environment variables like <code>$HOME</code> to determine your home directory. You can use these variables with <code>cd</code> for dynamic navigation.
            </p>
            <Example title="Use $HOME variable:" codes={["$ cd $HOME"]} />
            <p>
              Custom environment variables can be created to store paths you access frequently:
            </p>
            <Example
              title="Create and use a custom path variable:"
              codes={[
                '$ export PROJECTS=~/Documents/Projects',
                '$ cd $PROJECTS',
              ]}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Useful Aliases for Navigation</h2>
            <p>
              You can set aliases in your shell configuration file (like <code>.bashrc</code> or <code>.zshrc</code>) to make directory navigation quicker.
            </p>
            <Example
              title="Alias examples:"
              codes={[
                "alias ..='cd ..'",
                "alias ...='cd ../..'",
                "alias proj='cd ~/Documents/Projects'",
              ]}
            />
            <p>
              These shortcuts make frequent navigation tasks faster and more intuitive.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">cd vs pushd/popd</h2>
            <p>
              The <code>cd</code> command changes your current directory but doesn’t track history. If you need to navigate multiple directories and return easily, use <code>pushd</code> and <code>popd</code> to maintain a directory stack.
            </p>
            <Example
              title="Using pushd and popd:"
              codes={[
                "$ pushd /tmp",
                "$ do_something_here",
                "$ popd  # returns to previous directory",
              ]}
            />
            <p>
              These commands are particularly useful in scripts and advanced terminal workflows.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Understanding Permissions and cd</h2>
            <p>
              You can only <code>cd</code> into directories that you have execute (search) permissions for. If you try to access a directory without the proper permissions, you'll get a "Permission denied" error.
            </p>
            <Example
              title="Permission error:"
              codes={[
                "$ cd /root",
                "bash: cd: /root: Permission denied",
              ]}
            />
            <p>
              To inspect permissions, use <code>ls -ld [directory]</code>. You’ll see something like:
            </p>
            <Example
              title="Check directory permissions:"
              codes={["$ ls -ld /root", "drwx------  5 root root 4096 Jan 1 12:00 /root"]}
            />
            <p>
              If you need access and you’re the system administrator, you can use <code>sudo</code> or adjust permissions using <code>chmod</code> or <code>chown</code>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Using cd with Symlinks</h2>
            <p>
              A symbolic link (symlink) is a shortcut to another file or directory. You can <code>cd</code> into a symlink just like a regular folder.
            </p>
            <p>
              However, using symlinks can sometimes affect commands like <code>pwd</code>, depending on whether they resolve to the physical or logical path.
            </p>
            <Example
              title="Navigating through a symlink:"
              codes={[
                "$ ln -s /var/log logs",
                "$ cd logs",
                "$ pwd",
              ]}
            />
            <p>
              To get the physical directory, use <code>pwd -P</code>; for the logical path (as entered), use <code>pwd -L</code>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">cd Behavior in Different Shells</h2>
            <p>
              While <code>cd</code> works similarly in most Unix-like environments, some features differ between shells (like Bash, Zsh, Fish).
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Bash:</strong> Commonly uses <code>CDPATH</code> for global search paths.
              </li>
              <li>
                <strong>Zsh:</strong> Offers smarter auto-correction and spelling fixes.
              </li>
              <li>
                <strong>Fish:</strong> Uses syntax like <code>cd ../</code> but includes autosuggestions and history-based completions.
              </li>
            </ul>
            <p>
              Always check your shell's documentation for shell-specific enhancements to <code>cd</code>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">CDPATH: Navigating Smarter</h2>
            <p>
              <code>CDPATH</code> is an environment variable that specifies a list of base directories to search when using <code>cd</code> with relative paths.
            </p>
            <Example
              title="Using CDPATH:"
              codes={[
                '$ export CDPATH=.:~/Projects:/usr/local',
                '$ cd myproject',
              ]}
            />
            <p>
              This will allow <code>cd</code> to locate <code>myproject</code> even if it's not in your current directory, as long as it's in one of the CDPATH directories.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Create Bookmark Functions for Directories</h2>
            <p>
              If you frequently navigate to the same directories, consider defining shell functions as bookmarks:
            </p>
            <Example
              title="Bookmark function:"
              codes={[
                'proj() { cd ~/Documents/Projects/"My App"; }',
                '$ proj',
              ]}
            />
            <p>
              Add this to your <code>.bashrc</code> or <code>.zshrc</code> to make it persistent.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">View and Change Directory History</h2>
            <p>
              Most shells maintain a history of visited directories. Some allow navigation through history using shortcuts or special commands.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><code>cd -</code>: Go to the previous directory.</li>
              <li><code>dirs</code>: Show the directory stack (used with <code>pushd</code>/<code>popd</code>).</li>
              <li><code>cd ~-2</code>: Go back two directories ago (Zsh feature).</li>
            </ul>
            <p>
              Zsh users can even enable automatic directory tracking with:
            </p>
            <Example
              title="Enable AUTO_PUSHD in Zsh:"
              codes={["setopt AUTO_PUSHD"]}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Autojump and z: Smarter cd Alternatives</h2>
            <p>
              Tools like <code>autojump</code> and <code>z</code> provide intelligent navigation by learning your directory habits.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><code>autojump docs</code>: Jumps to the most used folder containing "docs".</li>
              <li><code>z downloads</code>: Navigate to your Downloads folder without the full path.</li>
            </ul>
            <p>
              These tools enhance <code>cd</code> by minimizing typing and improving efficiency.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Practical Tips</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Use <code>cd -</code> frequently to toggle between two locations.</li>
              <li>Remember that <code>cd</code> without arguments brings you back home.</li>
              <li>Quote or escape directories with spaces (e.g., <code>cd "My Folder"</code> or <code>cd My\ Folder</code>).</li>
              <li>Add aliases and shell functions for repeated paths.</li>
              <li>Check and leverage <code>CDPATH</code> for smarter relative pathing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
            <p>
              The <code>cd</code> command may appear simple at first, but it is central to efficient navigation and scripting in Unix-like environments. By mastering its options, integrating it with aliases, paths, bookmarks, and advanced tools like <code>z</code> and <code>autojump</code>, you can greatly enhance your workflow. Whether you're managing a server, writing a script, or just organizing your personal directories, a strong command over <code>cd</code> is a foundational Linux skill worth refining.
            </p>
          </div>
<div>
  <h2 className="text-lg font-semibold mb-2">Auto-Correcting Mistyped Paths (Zsh)</h2>
  <p>
    If you're using <code>Zsh</code>, it can automatically fix minor typos when changing directories.
  </p>
  <Example
    title="Enable AUTO_CD and CORRECT options:"
    codes={[
      "setopt AUTO_CD",
      "setopt CORRECT",
    ]}
  />
  <p>
    After enabling this, you can simply type a directory name (without <code>cd</code>) or even mistype it slightly, and Zsh will attempt to correct it.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Listing Contents While Navigating</h2>
  <p>
    Combine <code>cd</code> with <code>ls</code> to navigate and immediately list the new directory's contents.
  </p>
  <Example
    title="One-liner for changing and listing:"
    codes={["$ cd Documents && ls"]}
  />
  <p>
    You can even create an alias for this in your shell configuration file:
  </p>
  <Example
    title="Alias for auto-listing:"
    codes={["alias cdl='cd \"$1\" && ls'"]}
  />
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Navigating to Mounted Drives or Devices</h2>
  <p>
    On Linux, external drives and mounted file systems are typically located under <code>/media</code> or <code>/mnt</code>. You can use <code>cd</code> to access these:
  </p>
  <Example
    title="Example with USB drive:"
    codes={["$ cd /media/username/USB_DRIVE_NAME"]}
  />
  <p>
    Use <code>lsblk</code> or <code>df -h</code> to find your mount points before navigating.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Zsh Directory Markers (~NAME)</h2>
  <p>
    Zsh allows you to create directory markers (like bookmarks) using <code>~NAME</code> syntax:
  </p>
  <Example
    title="Create custom marker:"
    codes={["hash -d proj=~/Documents/Projects", "$ cd ~proj"]}
  />
  <p>
    These are useful for navigating deep folder structures quickly.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Hidden Behavior: cd Is a Built-In</h2>
  <p>
    The <code>cd</code> command is a shell built-in — not a standalone program like most others. This is why it changes the current working directory of the shell itself.
  </p>
  <Example
    title="Check if cd is built-in:"
    codes={["$ type cd", "cd is a shell builtin"]}
  />
  <p>
    Understanding this helps clarify why <code>cd</code> works differently from regular programs.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Combine <code>cd</code> and <code>pwd</code> for Clarity</h2>
  <p>
    Especially in scripts or tutorials, combining <code>cd</code> with <code>pwd</code> ensures you’re in the right place:
  </p>
  <Example
    title="Check path after change:"
    codes={["$ cd /etc && pwd"]}
  />
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Edit Files After Navigating with <code>cd</code></h2>
  <p>
    One of the most common tasks after changing directories is editing a file using a terminal-based editor like <code>nano</code>, <code>vim</code>, or <code>code</code> (VSCode).
  </p>
  <Example
    title="Navigate and edit a config file:"
    codes={[
      "$ cd /etc",
      "$ sudo nano hostname",
    ]}
  />
  <p>
    This sequence is typical when working with system files or project configuration files.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Confirm Current Directory with <code>pwd</code></h2>
  <p>
    After using <code>cd</code>, you can verify your current location with <code>pwd</code> (print working directory).
  </p>
  <Example
    title="Example:"
    codes={[
      "$ cd /usr/local/bin",
      "$ pwd",
      "/usr/local/bin",
    ]}
  />
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Navigate to Installed Application Paths</h2>
  <p>
    Developers and sysadmins often use <code>cd</code> to navigate to locations where apps or packages are installed (e.g., <code>/opt</code>, <code>/usr/bin</code>, <code>/var/www</code>).
  </p>
  <Example
    title="Move into a web server directory:"
    codes={["$ cd /var/www/html"]} 
  />
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Use Shell History to Recall Directories</h2>
  <p>
    Your shell keeps a history of commands. Use the up arrow key or history commands to repeat previous <code>cd</code> actions quickly.
  </p>
  <Example
    title="View command history:"
    codes={["$ history | grep cd"]} 
  />
  <p>
    Use <code>Ctrl+R</code> in most shells to reverse search past commands (e.g., <code>cd /var</code>).
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Access Hidden Folders</h2>
  <p>
    Directories that start with a dot (.) are hidden. Use <code>cd</code> with their exact name to enter them.
  </p>
  <Example
    title="Example:"
    codes={["$ cd ~/.config"]} 
  />
  <p>
    Use <code>ls -a</code> to see hidden files and folders.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Bookmark Long Paths</h2>
  <p>
    If you often navigate to deep paths, store them in variables:
  </p>
  <Example
    title="Create and use:"
    codes={[
      '$ export WORKDIR="/home/user/Documents/Projects/MyProject"',
      '$ cd $WORKDIR',
    ]}
  />
  <p>
    Add this line to your <code>~/.bashrc</code> or <code>~/.zshrc</code> for persistence.
  </p>
</div>
<div>
  <h2 className="text-lg font-semibold mb-2">Combine <code>find</code> and <code>cd</code></h2>
  <p>
    Use <code>find</code> to locate folders and navigate dynamically.
  </p>
  <Example
    title="Find and enter a directory:"
    codes={[
      '$ cd $(find . -type d -name "target-dir-name" | head -1)',
    ]}
  />
  <p>
    This is useful in large codebases or when folder names are uncertain.
  </p>
</div>


        </CardContent>
      </Card>
    </div>
  );
};

const Example: React.FC<{ title: string; codes: string[] }> = ({ title, codes }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {codes.map((code, idx) => (
      <div key={idx} className="mb-2">
        <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
        {idx < codes.length - 1 && <p className="text-sm text-gray-600">or</p>}
      </div>
    ))}
  </div>
);

export default CdCommand;
