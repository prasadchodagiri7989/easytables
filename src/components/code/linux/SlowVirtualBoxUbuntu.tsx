import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const SlowVirtualBoxUbuntu: React.FC = () => {
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
                  <BreadcrumbPage>Slow Ubuntu</BreadcrumbPage>
                </BreadcrumbList>
              </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>Fix Slow Ubuntu in VirtualBox</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            If your Ubuntu system runs slow inside VirtualBox, it could be due to insufficient resources or missing configurations. Here are common reasons and solutions to speed up your Ubuntu VM.
          </p>

          {/* Common Causes Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common Causes</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Low RAM or CPU allocated to the VM</li>
              <li>Missing VirtualBox Guest Additions</li>
              <li>3D Acceleration not enabled</li>
              <li>Using slow storage controller (IDE instead of SATA)</li>
              <li>Outdated VirtualBox version</li>
            </ul>
          </div>

          {/* Recommended Settings Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Recommended Settings</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Allocate at least <strong>2 CPUs</strong> (System › Processor)</li>
              <li>Assign <strong>2GB+ RAM</strong> (System › Motherboard)</li>
              <li>Enable <strong>VT-x/AMD-V</strong> and <strong>Nested Paging</strong></li>
              <li>Enable <strong>3D Acceleration</strong> (Display › Screen)</li>
              <li>Increase <strong>Video Memory</strong> to 128 MB</li>
              <li>Use <strong>SATA</strong> controller for the virtual disk</li>
              <li>Install the <strong>Guest Additions</strong> inside Ubuntu</li>
            </ul>
          </div>

          {/* Steps to Install Guest Additions Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Steps to Install Guest Additions</h2>
            <div className="space-y-2 text-sm">
              <p>Inside your Ubuntu Virtual Machine:</p>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>
                  sudo apt update {"\n"}
                  sudo apt install build-essential dkms linux-headers-$(uname -r)
                </code>
              </pre>
              <p>Then, in the VirtualBox menu: Devices › Insert Guest Additions CD Image › Follow the installer.</p>
            </div>
          </div>

          {/* Extra Tips Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Extra Tips</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Use Lighter Ubuntu Flavors like <strong>Xubuntu</strong> or <strong>Lubuntu</strong></li>
              <li>Disable animations and transparency effects</li>
              <li>Update VirtualBox and Extension Pack to the latest version</li>
            </ul>
          </div>

          {/* Example Configurations Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Example Configurations</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">System › Processor</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>CPU: 2 cores {"\n"}Execution Cap: 100%</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold">System › Motherboard</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>Base Memory: 4096 MB {"\n"}Boot Order: Hard Disk, Optical</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Display › Screen</h3>
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>Video Memory: 128 MB {"\n"}Enable 3D Acceleration: Yes</code>
                </pre>
              </div>
            </div>
          </div>
                    {/* Advanced Troubleshooting Section */}
                    <div>
            <h2 className="text-lg font-semibold mb-2">Advanced Troubleshooting</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                <strong>Check CPU usage:</strong> Use <code>top</code> or <code>htop</code> inside Ubuntu to identify processes consuming high CPU.
              </li>
              <li>
                <strong>Inspect disk I/O:</strong> Run <code>iotop</code> to see if disk access is a bottleneck.
              </li>
              <li>
                <strong>Verify swap usage:</strong> Use <code>free -h</code> to check if your system is swapping too early; consider increasing RAM or adjusting swappiness.
              </li>
              <li>
                <strong>Analyze boot performance:</strong> Install <code>systemd-analyze</code> and run <code>systemd-analyze blame</code> to identify slow boot services.
              </li>
              <li>
                <strong>Disable unnecessary services:</strong> Use <code>systemctl disable</code> for services you don't use (e.g., bluetooth, cups).
              </li>
              <li>
                <strong>Use SSD-backed host storage:</strong> Place the virtual disk file on an SSD to improve read/write performance.
              </li>
            </ul>
          </div>

          {/* Performance Tuning Inside Ubuntu */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Performance Tuning Inside Ubuntu</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Install a lightweight desktop environment such as <strong>XFCE</strong> or <strong>LXQt</strong>.</li>
              <li>Edit <code>/etc/default/grub</code> to disable splash and quiet boot for faster startup:</li>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>GRUB_CMDLINE_LINUX_DEFAULT=""</code>
              </pre>
              <li>Run <code>sudo update-grub</code> after editing GRUB settings.</li>
              <li>Install <code>preload</code> to improve app launch times using adaptive readahead:</li>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>sudo apt install preload</code>
              </pre>
              <li>Disable indexing with <code>tracker3</code> to reduce background CPU usage:</li>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>gsettings set org.freedesktop.Tracker3.Miner.Files enable-monitors false</code>
              </pre>
            </ul>
          </div>

          {/* VirtualBox Host System Tweaks */}
          <div>
            <h2 className="text-lg font-semibold mb-2">VirtualBox Host System Tweaks</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Close heavy applications on the host to free up CPU and memory.</li>
              <li>Make sure your host OS supports hardware virtualization (VT-x/AMD-V) and that it is enabled in the BIOS.</li>
              <li>Run VirtualBox as administrator/root to avoid permission bottlenecks.</li>
              <li>If using Windows as a host, disable Hyper-V as it may interfere with VirtualBox’s performance:</li>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>dism.exe /Online /Disable-Feature:Microsoft-Hyper-V</code>
              </pre>
            </ul>
          </div>

          {/* Consider Using Dynamic vs Fixed Disk */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Dynamic vs Fixed Disk Performance</h2>
            <p>
              VirtualBox allows you to choose between a dynamically allocated virtual disk and a fixed-size one. While dynamic disks save space initially, fixed disks typically offer better performance.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Dynamic Disk:</strong> Grows as needed. May suffer from fragmentation and slower access times.</li>
              <li><strong>Fixed Disk:</strong> Preallocates full space. Better performance and more predictable behavior.</li>
            </ul>
            <p>
              You can convert a dynamic disk to a fixed one using the following command:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm">
              <code>VBoxManage clonemedium disk ubuntu.vdi fixed.vdi --variant Fixed</code>
            </pre>
          </div>

          {/* Alternative Virtualization Tools */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Alternatives to VirtualBox</h2>
            <p>
              If performance remains poor despite optimizations, consider switching to other virtualization platforms that may offer better integration and resource handling:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>VMware Workstation Player:</strong> More performant in many use cases with better graphics support.</li>
              <li><strong>GNOME Boxes:</strong> Lightweight and simpler on Linux desktops using KVM.</li>
              <li><strong>QEMU + KVM:</strong> Native Linux virtualization stack with excellent performance, especially for advanced users.</li>
              <li><strong>Hyper-V:</strong> Windows-native hypervisor for those using Windows Pro editions.</li>
            </ul>
          </div>

          {/* Common Misconceptions */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common Misconceptions</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>“More RAM always means better performance”</strong> — Overshooting RAM on the host may starve the VM or host OS.</li>
              <li><strong>“You need 3D acceleration for everything”</strong> — Some desktop environments may run slower with 3D enabled due to driver issues.</li>
              <li><strong>“Guest Additions are optional”</strong> — They're essential for smooth mouse integration, graphics, and shared folders.</li>
            </ul>
          </div>

          {/* Final Checklist */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Final Checklist</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Latest VirtualBox and Extension Pack installed</li>
              <li>VT-x/AMD-V enabled in BIOS and VirtualBox settings</li>
              <li>2+ CPUs and 2GB+ RAM allocated</li>
              <li>3D Acceleration enabled, video memory set to 128 MB</li>
              <li>Guest Additions installed and updated</li>
              <li>Ubuntu is updated and using lightweight desktop</li>
              <li>Background services and animations disabled</li>
              <li>Disk I/O is monitored and optimized</li>
            </ul>
          </div>
                  {/* Analyzing Ubuntu System Logs */}
                  <div>
            <h2 className="text-lg font-semibold mb-2">Analyzing System Logs for Performance Issues</h2>
            <p>
              Ubuntu maintains detailed logs that can reveal startup delays, driver problems, or kernel warnings. Reviewing these logs can help pinpoint what's slowing your system down.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                View system logs with:
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>journalctl -xe</code>
                </pre>
              </li>
              <li>
                Check for hardware or service errors in:
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>/var/log/syslog</code>
                </pre>
              </li>
              <li>
                Look for delayed services at boot:
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>systemd-analyze blame</code>
                </pre>
              </li>
              <li>
                Analyze the boot chain timing:
                <pre className="bg-gray-100 p-4 rounded text-sm">
                  <code>systemd-analyze critical-chain</code>
                </pre>
              </li>
            </ul>
          </div>

          {/* Optimizing the Host Operating System */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Host OS Optimization Tips</h2>
            <p>
              Sometimes the issue lies with the host machine. Ensuring your host OS is performing optimally can have a major impact on VM performance.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Keep your host OS drivers (especially graphics and chipset) up to date.</li>
              <li>Ensure background processes like antivirus or backup tools don’t interfere during VM use.</li>
              <li>Close browser tabs or apps that use excessive RAM/CPU before running VirtualBox.</li>
              <li>Use SSDs instead of HDDs for VM storage whenever possible.</li>
              <li>Monitor host resource usage using tools like Task Manager (Windows), Activity Monitor (macOS), or htop/top (Linux).</li>
            </ul>
          </div>

          {/* Graphics Driver Tuning and Compositing */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Graphics and Compositing Tweaks</h2>
            <p>
              Poor graphics performance in a VM often results in sluggish behavior and tearing. These steps can help improve responsiveness.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>After installing Guest Additions, verify 3D acceleration is active:</li>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>glxinfo | grep "OpenGL renderer"</code>
              </pre>
              <li>If the output mentions "VBoxVGA" or "llvmpipe", 3D acceleration is not fully enabled.</li>
              <li>Try disabling desktop compositing (on XFCE: Settings › Window Manager Tweaks › Compositor).</li>
              <li>Switch to a window manager without compositing like Openbox or Fluxbox.</li>
              <li>Disable window animations and fade effects in the system settings.</li>
            </ul>
          </div>

          {/* Shared Folders and Performance */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Shared Folder Performance</h2>
            <p>
              If you're using VirtualBox shared folders, performance can degrade if not configured properly. Use these tips to optimize shared folder access.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Use the VirtualBox Guest Additions shared folder feature instead of network shares for better performance.</li>
              <li>Mount shared folders with <code>cache=none</code> to reduce filesystem overhead.</li>
              <li>Avoid real-time indexing (e.g., Tracker or Zeitgeist) on shared folders inside the VM.</li>
              <li>Example mount command:</li>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>sudo mount -t vboxsf -o uid=1000,gid=1000,cache=none SharedFolder /mnt/shared</code>
              </pre>
            </ul>
          </div>

          {/* Using VM Snapshots and States Wisely */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Snapshot and Save State Management</h2>
            <p>
              Snapshots and saved states are convenient, but improper usage can slow down your VM or consume excess disk space.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Keep the number of snapshots minimal; too many can fragment the disk and reduce I/O performance.</li>
              <li>Always shut down the VM fully after major updates instead of using “Save State.”</li>
              <li>Delete old or unnecessary snapshots to consolidate disk usage.</li>
              <li>Periodically clone and reset your VM to reduce snapshot bloat.</li>
            </ul>
          </div>

          {/* Networking and Internet Performance in VirtualBox */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Improving Network Performance</h2>
            <p>
              If your Ubuntu VM experiences slow internet or network access, the problem may lie in the network adapter settings.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Use the <strong>Bridged Adapter</strong> instead of NAT for faster speeds and better compatibility.</li>
              <li>Ensure the VirtualBox extension pack is installed for optimal network support.</li>
              <li>Switch the adapter type in VirtualBox settings to <strong>Intel PRO/1000 MT Server</strong> or <strong>VirtIO</strong> (if supported).</li>
              <li>Inside Ubuntu, test speed with:</li>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>speedtest-cli</code>
              </pre>
              <li>Use <code>ethtool</code> to inspect and optimize your VM’s virtual network interface:</li>
              <pre className="bg-gray-100 p-4 rounded text-sm">
                <code>sudo apt install ethtool {"\n"}sudo ethtool eth0</code>
              </pre>
            </ul>
          </div>

          {/* Choosing the Right Ubuntu Flavor for VirtualBox */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Best Ubuntu Flavors for VirtualBox</h2>
            <p>
              Not all Ubuntu variants perform equally well in virtual machines. Lightweight options reduce RAM and CPU usage significantly.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>Xubuntu:</strong> XFCE desktop, great balance between usability and performance.</li>
              <li><strong>Lubuntu:</strong> LXQt-based, extremely lightweight and ideal for minimal VMs.</li>
              <li><strong>Ubuntu MATE:</strong> Resource-friendly yet full-featured.</li>
              <li><strong>Ubuntu Server:</strong> Headless, no GUI — great for CLI-only environments.</li>
            </ul>
            <p>
              You can also install minimal ISO versions and manually add only the software you need.
            </p>
          </div>

          {/* Final Thoughts and Monitoring Tools */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Final Thoughts & Monitoring Tools</h2>
            <p>
              Regular monitoring and targeted configuration can dramatically improve VirtualBox performance. Use built-in and third-party tools to stay informed:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>htop:</strong> Visual CPU and memory usage</li>
              <li><strong>iotop:</strong> Real-time disk I/O monitoring</li>
              <li><strong>glances:</strong> All-in-one system monitoring tool</li>
              <li><strong>systemd-analyze:</strong> Startup time and service profiling</li>
              <li><strong>VirtualBox logs:</strong> Review logs from the VM folder or in the VirtualBox GUI for hardware emulation warnings</li>
            </ul>
            <p>
              By applying both guest and host optimizations, you can create a smooth and responsive Ubuntu experience inside VirtualBox—even on modest hardware.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default SlowVirtualBoxUbuntu;
