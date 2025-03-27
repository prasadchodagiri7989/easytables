
import { 
  Code, 
  Link, 
  Table, 
  RefreshCw, 
  Server, 
  Image, 
  MonitorSmartphone,
  Ruler, 
  ChevronsRight, 
  ChevronsLeft, 
  ExternalLink,
  Palette,
  FileCode2,
  FileCog,
  LayoutPanelLeft,
  MonitorCheck,
  ArrowRightLeft,
  Pipette
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ToolInfo {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  category: string;
  isNew?: boolean;
}

export const toolsData: ToolInfo[] = [
  {
    id: "redirect-generator",
    title: "301 Redirect Generator",
    description: "Generate code for URL redirects using different methods",
    icon: ArrowRightLeft,
    path: "/tools/redirect-generator",
    category: "SEO & URLs",
  },
  {
    id: "base64-encode",
    title: "Base64 Encode",
    description: "Convert text to Base64 encoded strings",
    icon: ChevronsRight,
    path: "/tools/base64-encode",
    category: "Encoders & Decoders",
  },
  {
    id: "base64-decode",
    title: "Base64 Decode",
    description: "Convert Base64 encoded strings back to plain text",
    icon: ChevronsLeft,
    path: "/tools/base64-decode",
    category: "Encoders & Decoders",
  },
  {
    id: "base64-to-image",
    title: "Base64 to Image",
    description: "Convert Base64 strings to viewable and downloadable images",
    icon: Image,
    path: "/tools/base64-to-image",
    category: "Converters",
  },
  {
    id: "image-to-base64",
    title: "Image to Base64",
    description: "Convert images to Base64 encoded strings",
    icon: FileCode2,
    path: "/tools/image-to-base64",
    category: "Converters",
  },
  {
    id: "color-tester",
    title: "Color Tester",
    description: "Test color combinations for contrast and accessibility",
    icon: Palette,
    path: "/tools/color-tester",
    category: "Design",
  },
  {
    id: "color-picker-from-image",
    title: "Color Picker from Image",
    description: "Upload an image and extract colors from it",
    icon: Pipette,
    path: "/tools/color-picker-from-image",
    category: "Design",
    isNew: true,
  },
  {
    id: "html-editor",
    title: "HTML Editor",
    description: "Write and preview HTML code in real time",
    icon: Code,
    path: "/tools/html-editor",
    category: "Development",
  },
  {
    id: "html-link-generator",
    title: "HTML Link Generator",
    description: "Generate HTML link code with custom attributes",
    icon: Link,
    path: "/tools/html-link-generator",
    category: "Development",
  },
  {
    id: "html-table-generator",
    title: "HTML Table Generator",
    description: "Generate HTML tables with custom styling",
    icon: Table,
    path: "/tools/html-table-generator",
    category: "Development",
  },
  {
    id: "http-header-checker",
    title: "HTTP Header Checker",
    description: "Check HTTP headers for any website",
    icon: Server,
    path: "/tools/http-header-checker",
    category: "Network & Security",
  },
  {
    id: "http-status-checker",
    title: "HTTP Status Checker",
    description: "Check HTTP status codes of any URL",
    icon: RefreshCw,
    path: "/tools/http-status-checker",
    category: "Network & Security",
  },
  {
    id: "svg-viewer",
    title: "SVG Viewer/Editor",
    description: "View, edit and optimize SVG files",
    icon: FileCog,
    path: "/tools/svg-viewer",
    category: "Design",
  },
  {
    id: "url-encode",
    title: "URL Encode",
    description: "Encode text for use in URLs",
    icon: ExternalLink,
    path: "/tools/url-encode",
    category: "Encoders & Decoders",
  },
  {
    id: "url-decode",
    title: "URL Decode",
    description: "Decode URL encoded strings",
    icon: ExternalLink,
    path: "/tools/url-decode",
    category: "Encoders & Decoders",
  },
  {
    id: "screen-resolution",
    title: "Screen Resolution",
    description: "Check your screen resolution and device properties",
    icon: MonitorCheck,
    path: "/tools/screen-resolution",
    category: "Design",
  },
  {
    id: "pixel-ruler",
    title: "Pixel Ruler",
    description: "Measure elements on your screen in pixels",
    icon: Ruler,
    path: "/tools/pixel-ruler",
    category: "Design",
  },
  {
    id: "window-size",
    title: "Window Size",
    description: "View your window dimensions with a clean white background",
    icon: LayoutPanelLeft,
    path: "/tools/window-size",
    category: "Design",
  },
];

export const getToolCategories = (): string[] => {
  const categories = new Set<string>();
  toolsData.forEach(tool => categories.add(tool.category));
  return Array.from(categories).sort();
};

export const getToolsByCategory = (category: string): ToolInfo[] => {
  return toolsData.filter(tool => tool.category === category);
};

export const getAllTools = (): ToolInfo[] => {
  return toolsData;
};

export const getToolById = (id: string): ToolInfo | undefined => {
  return toolsData.find(tool => tool.id === id);
};
