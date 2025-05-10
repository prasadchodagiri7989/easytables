import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const CpCommand = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOptions((prev) =>
      prev.includes(value) ? prev.filter((opt) => opt !== value) : [...prev, value]
    );
  };

  const generateCommand = () => {
    let cmd = "cp ";
    if (options.length > 0) {
      cmd += "-" + options.join("") + " ";
    }
    if (source) {
      cmd += source + " ";
    }
    if (destination) {
      cmd += destination + " ";
    }
    if (stdout) {
      cmd += `> ${stdout} `;
    }
    if (stderr) {
      cmd += `2> ${stderr}`;
    }
    return cmd.trim();
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
                  <BreadcrumbPage>cp Command</BreadcrumbPage>
                </BreadcrumbList>
              </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>cp Command in Linux/Unix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>The <strong>cp</strong> command copies files and directories in Linux/Unix systems.</p>

          <section>
            <h2 className="text-lg font-semibold mb-2">Syntax</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>$ cp [options] source dest</code>
            </pre>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Options</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {[
                { label: "-a", description: "archive files" },
                { label: "-f", description: "force copy by removing destination if needed" },
                { label: "-i", description: "interactive - ask before overwrite" },
                { label: "-l", description: "link files instead of copy" },
                { label: "-L", description: "follow symbolic links" },
                { label: "-n", description: "no overwrite" },
                { label: "-R", description: "recursive copy (include hidden files)" },
                { label: "-u", description: "update newer files only" },
                { label: "-v", description: "verbose messages" },
              ].map((opt) => (
                <li key={opt.label}>
                  <strong>{opt.label}</strong>: {opt.description}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Examples</h2>
            <div className="space-y-4">
              {[
                { title: "Copy a single file:", code: "$ cp main.c bak" },
                { title: "Copy multiple files to a directory:", code: "$ cp main.c def.h /home/usr/rapid/" },
                { title: "Copy all C files:", code: "$ cp *.c bak" },
                { title: "Copy directories recursively:", code: "$ cp -R dev bak" },
                { title: "Force copy a file:", code: "$ cp -f test.c bak" },
                { title: "Interactive prompt before overwrite:", code: "$ cp -i test.c bak" },
                { title: "Update newer files only:", code: "$ cp -u * bak" },
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
            <h2 className="text-lg font-semibold mb-4">cp Code Generator</h2>
            <div className="grid gap-4 mb-4">
              <OptionsSection options={options} handleOptionChange={handleOptionChange} />
              <InputSection label="Source files/folders:" value={source} setValue={setSource} placeholder="file1 file2 dir1 dir2" />
              <InputSection label="Destination folder/file:" value={destination} setValue={setDestination} placeholder="destdir" />
              <InputSection label="Redirect stdout to:" value={stdout} setValue={setStdout} placeholder="out.txt" />
              <InputSection label="Redirect stderr to:" value={stderr} setValue={setStderr} placeholder="err.txt" />
            </div>

            <div className="bg-gray-100 p-4 rounded text-sm mt-4">
              <code>{generateCommand()}</code>
            </div>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2">Understanding cp Behavior</h2>
            <p>
              The <code>cp</code> command doesn't just copy bytes—it handles file metadata, permissions, symbolic links, timestamps, and directory structures, depending on the options used. Understanding how <code>cp</code> behaves under different scenarios helps prevent data loss or confusion.
            </p>
            <p>
              For example, copying a symbolic link without the <code>-L</code> or <code>-a</code> option may result in a literal copy of the link, not its target. To force resolution of the link and copy the actual file, use <code>-L</code>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Symbolic vs Hard Links</h2>
            <p>
              When using <code>cp -l</code>, hard links are created instead of copying the file contents. A hard link points directly to the file's inode, making it indistinguishable from the original. Symbolic links, on the other hand, are references by path.
            </p>
            <p>
              Hard links can't span across different filesystems, whereas symlinks can. Consider your system’s structure before choosing this method.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Handling Permissions with cp</h2>
            <p>
              By default, <code>cp</code> tries to retain the original file's permissions. However, in some contexts (e.g., copying to a USB stick with a FAT filesystem), permissions may be lost. Use <code>-p</code> or <code>-a</code> to preserve timestamps, modes, and ownership where applicable.
            </p>
            <p>
              Be cautious when copying as root or with <code>sudo</code>, since this may preserve ownership in ways that affect user access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Combining cp with Wildcards</h2>
            <p>
              Wildcards (globs) let you copy batches of files quickly:
            </p>
            <ul className="list-disc list-inside">
              <li><code>*.txt</code> – All .txt files</li>
              <li><code>file[1-5].jpg</code> – Files numbered 1 to 5</li>
              <li><code>data_??.csv</code> – Files with two characters after "data_"</li>
            </ul>
            <p>
              Always double-check with <code>ls</code> before copying large batches to avoid unexpected matches.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Copying Hidden Files</h2>
            <p>
              Hidden files (starting with <code>.</code>) are not matched by default with <code>*</code>. Use <code>.*</code> or consider a glob pattern like:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{"cp -R .* * /destination"}</code>
            </pre>
            <p>
              Be cautious—<code>.*</code> includes <code>.</code> and <code>..</code> (current and parent directories). Safer alternatives include <code>.??*</code> to avoid copying <code>..</code>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Difference Between cp and rsync</h2>
            <p>
              While <code>cp</code> is great for local copies, <code>rsync</code> is better suited for backups, syncing, and large directory trees. It supports delta transfers, progress bars, and remote hosts.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{"rsync -av source/ destination/"}</code>
            </pre>
            <p>
              Use <code>rsync</code> when performance, bandwidth, or synchronization matters.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Handling Spaces and Special Characters</h2>
            <p>
              Spaces in filenames require quoting or escaping:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{'cp "My File.txt" "Backup Folder/"'}</code>
            </pre>
            <p>
              Avoid errors by always quoting filenames with special characters or using tab-completion in the terminal to escape automatically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Copying to External Drives</h2>
            <p>
              Copying files to USB drives or network mounts may introduce filesystem differences. Use the <code>-v</code> option to monitor copy progress and <code>sync</code> afterward to flush the buffer:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                cp -Rv myfolder /media/usb <br />
                sync
              </code>
            </pre>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Preventing Data Loss</h2>
            <p>
              Using <code>-i</code> (interactive) or <code>-n</code> (no-clobber) helps protect from accidental overwrites. <code>-i</code> will prompt before overwriting, and <code>-n</code> will skip existing files.
            </p>
            <p>
              For scripted or automated tasks, favor <code>-n</code> or build checks around <code>[ -f filename ]</code> before executing <code>cp</code>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Recursive Copies and File Trees</h2>
            <p>
              Without <code>-R</code> or <code>-r</code>, directories won’t be copied. Use <code>-R</code> to ensure subdirectories and their contents are included.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{"cp -R projects backup/"}</code>
            </pre>
            <p>
              To include hidden files inside directories, ensure your glob patterns or commands explicitly reference them or use <code>rsync</code>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Useful Aliases</h2>
            <p>
              To make <code>cp</code> safer by default, many users create an alias in their <code>.bashrc</code> or <code>.zshrc</code>:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{"alias cp='cp -i'"}</code>
            </pre>
            <p>
              This ensures you’re prompted before overwriting files. For automation scripts, override it using <code>\\cp</code> or <code>command cp</code>.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2">Using cp in Scripts</h2>
            <p>
              When using <code>cp</code> in shell scripts, you should always consider the possibility of failure (missing files, permission issues, disk full). It's good practice to check the exit status:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>
                cp file.txt /backup/ <br />
                if [ $? -ne 0 ]; then <br />
                &nbsp;&nbsp;echo "Copy failed!" <br />
                &nbsp;&nbsp;exit 1 <br />
                fi
              </code>
            </pre>
            <p>
              This ensures your scripts are robust and fail-safe. Also, use quotes to wrap variable paths to prevent errors from spaces or special characters.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Copying with Progress</h2>
            <p>
              The standard <code>cp</code> command doesn’t show progress by default. You can use <code>rsync</code> or <code>pv</code> (pipe viewer) to visualize it:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{"pv bigfile.iso > /mnt/usb/bigfile.iso"}</code>
            </pre>
            <p>
              Alternatively, use <code>rsync -a --progress</code> for large directory copies when feedback is important.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Copying with Timestamps</h2>
            <p>
              To preserve timestamps, use the <code>-p</code> or <code>-a</code> flags. This is important when backup tools rely on modified time:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{"cp -p data.csv backup/"}</code>
            </pre>
            <p>
              The <code>-a</code> (archive) flag also preserves symlinks, device files, ownership, and permissions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Handling Symbolic Links</h2>
            <p>
              By default, <code>cp</code> copies the content of the symlink’s target. Use <code>-d</code> to copy the link itself or <code>-L</code> to follow it:
            </p>
            <ul className="list-disc list-inside">
              <li><code>cp -d link.txt /dest/</code> – Copies the symlink</li>
              <li><code>cp -L link.txt /dest/</code> – Copies the linked file</li>
            </ul>
            <p>
              This behavior is critical in deployment scripts where symlinks point to versioned builds or configuration paths.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">File Ownership Considerations</h2>
            <p>
              If you're copying files as root or between users, ownership becomes important. By default, files copied by root retain the original owner. Use <code>--preserve=ownership</code> or <code>-a</code> to retain ownership, or avoid it if you want the destination user to own the files.
            </p>
            <p>
              Consider using <code>chown</code> after copying if permissions are incorrect:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{"chown user:group /dest/file.txt"}</code>
            </pre>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Creating Backup Copies</h2>
            <p>
              Use the <code>--backup</code> option to make backup copies if a file would be overwritten:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{"cp --backup file.txt /dest/"}</code>
            </pre>
            <p>
              This will create files like <code>file.txt~</code>. You can control the suffix with <code>--suffix=.bak</code>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Using cp in Crontabs</h2>
            <p>
              Scheduled copying can be useful for backups or logs. Example crontab entry to back up every hour:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{"0 * * * * cp -u /logs/app.log /backup/logs/"}</code>
            </pre>
            <p>
              Always ensure full paths are used in crontabs, as environment variables are minimal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Copying Files Across Disks</h2>
            <p>
              When copying files between disks or partitions, disk speed and filesystem compatibility matter. Use <code>cp -v</code> or <code>rsync</code> for feedback, and run <code>df -h</code> to ensure you have space:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>{"cp -Rv /mnt/disk1/photos /mnt/disk2/backup/"}</code>
            </pre>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Best Practices for Beginners</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Always quote file and folder names with spaces.</li>
              <li>Use <code>-i</code> until you’re confident with copy operations.</li>
              <li>Double-check destination paths before running recursive copies.</li>
              <li>Combine <code>-v</code> with other flags to get feedback on operations.</li>
              <li>Use <code>--dry-run</code> with <code>rsync</code> for trial runs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Common Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Copying <code>.*</code> unintentionally includes <code>..</code>.</li>
              <li>Overwriting without confirmation when omitting <code>-i</code> or <code>-n</code>.</li>
              <li>Assuming <code>cp</code> keeps permissions on FAT/NTFS drives.</li>
              <li>Using <code>cp</code> instead of <code>mv</code> when the intent is to move files.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Learning More</h2>
            <p>
              Run <code>man cp</code> for the official documentation, or explore online Linux manuals. You can also try:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><a className="text-blue-600 underline" href="https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html" target="_blank">GNU Coreutils Manual</a></li>
              <li><a className="text-blue-600 underline" href="https://linux.die.net/man/1/cp" target="_blank">Linux man page</a></li>
              <li><a className="text-blue-600 underline" href="https://explainshell.com/explain?cmd=cp+-R+dir1+dir2" target="_blank">ExplainShell for cp</a></li>
            </ul>
          </section>


        </CardContent>
      </Card>
    </div>
  );
};

const OptionsSection = ({ options, handleOptionChange }) => (
  <div>
    <label className="font-medium">Options:</label>
    <div className="flex flex-wrap gap-2">
      {[
        { value: "f", label: "Force (-f)" },
        { value: "i", label: "Interactive (-i)" },
        { value: "l", label: "Link (-l)" },
        { value: "L", label: "Follow symlinks (-L)" },
        { value: "n", label: "No overwrite (-n)" },
        { value: "R", label: "Recursive (-R)" },
        { value: "u", label: "Update newer (-u)" },
        { value: "v", label: "Verbose (-v)" },
      ].map((opt) => (
        <label key={opt.value} className="flex items-center space-x-1 text-sm">
          <input
            type="checkbox"
            value={opt.value}
            checked={options.includes(opt.value)}
            onChange={handleOptionChange}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  </div>
);

const InputSection = ({ label, value, setValue, placeholder }) => (
  <div className="space-y-2">
    <label className="font-medium">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border rounded p-2 w-full text-sm dark:text-black"
    />
  </div>
);

export default CpCommand;
