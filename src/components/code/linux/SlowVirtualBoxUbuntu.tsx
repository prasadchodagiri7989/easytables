import React from "react";

const SlowVirtualBoxUbuntu: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <nav className="text-sm text-gray-500">
          Home › Tools › <span className="text-black">Slow VirtualBox Ubuntu</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-6">Fix Slow Ubuntu in VirtualBox</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <p>
          If your Ubuntu system runs slow inside VirtualBox, it could be due to insufficient resources or missing configurations.
          Here are common reasons and solutions to speed up your Ubuntu VM.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Common Causes</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Low RAM or CPU allocated to the VM</li>
            <li>Missing VirtualBox Guest Additions</li>
            <li>3D Acceleration not enabled</li>
            <li>Using slow storage controller (IDE instead of SATA)</li>
            <li>Outdated VirtualBox version</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Recommended Settings</h2>
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

        <div>
          <h2 className="text-2xl font-semibold mb-2">Steps to Install Guest Additions</h2>
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

        <div>
          <h2 className="text-2xl font-semibold mb-2">Extra Tips</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Use Lighter Ubuntu Flavors like <strong>Xubuntu</strong> or <strong>Lubuntu</strong></li>
            <li>Disable animations and transparency effects</li>
            <li>Update VirtualBox and Extension Pack to the latest version</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Example Configurations</h2>

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
      </div>
    </div>
  );
};

export default SlowVirtualBoxUbuntu;
