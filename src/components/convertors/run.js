import { writeFile, mkdir, access } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";

// Get the current directory (ESM doesn't support __dirname directly)
const __filename = fileURLToPath(import.meta.url);
const __dirname = __filename.substring(0, __filename.lastIndexOf("/"));

const converters = [
  "AreaConverter",
  "VolumeConverter",
  "TimeConverter",
  "SpeedConverter",
  "PressureConverter",
  "EnergyConverter",
  "PowerConverter",
  "DataConverter",
  "AngleConverter",
  "FrequencyConverter",
  "FuelEconomyConverter",
  "VoltageConverter",
  "CurrentConverter"
];

const directory = join(__dirname);

// Ensure the directory exists
async function ensureDirectoryExists(dir) {
  try {
    await access(dir); // Check if directory exists
  } catch {
    await mkdir(dir, { recursive: true }); // Create directory if not exists
  }
}

// Template for converter components (TypeScript)
const template = (name) => `import React from "react";

const ${name}: React.FC = () => {
  return <div>${name} Component</div>;
};

export default ${name};
`;

async function createFiles() {
  await ensureDirectoryExists(directory);

  for (const converter of converters) {
    const filePath = join(directory, `${converter}.tsx`);
    try {
      await writeFile(filePath, template(converter), { flag: "wx" });
      console.log(`✅ Created: ${converter}.tsx`);
    } catch (err) {
      if (err.code === "EEXIST") {
        console.log(`⚠️ Already exists: ${converter}.tsx`);
      } else {
        console.error(`❌ Error creating ${converter}.tsx:`, err);
      }
    }
  }

  console.log("🎉 All TypeScript converter files generated successfully!");
}

createFiles();
