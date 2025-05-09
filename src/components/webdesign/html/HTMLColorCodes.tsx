import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const HTMLColorCodes: React.FC = () => {
  const hexColors = [
    { code: "#000000", name: "Black" },
    { code: "#FFFFFF", name: "White" },
    { code: "#FF0000", name: "Red" },
    { code: "#00FF00", name: "Lime" },
    { code: "#0000FF", name: "Blue" },
    { code: "#FFFF00", name: "Yellow" },
    { code: "#00FFFF", name: "Aqua" },
    { code: "#FF00FF", name: "Fuchsia" },
    { code: "#C0C0C0", name: "Silver" },
    { code: "#808080", name: "Gray" },
  ];

  const rgbColors = [
    { code: "rgb(255, 0, 0)", name: "Red" },
    { code: "rgb(0, 255, 0)", name: "Lime" },
    { code: "rgb(0, 0, 255)", name: "Blue" },
    { code: "rgb(255, 255, 0)", name: "Yellow" },
    { code: "rgb(0, 255, 255)", name: "Aqua" },
    { code: "rgb(255, 0, 255)", name: "Fuchsia" },
  ];

  const colorNames = [
    "Red", "Green", "Blue", "Yellow", "Aqua", "Fuchsia", "Gray", "Silver", "Black", "White",
  ];

  const extendedColors = [
    "AliceBlue", "AntiqueWhite", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "BlueViolet", "Brown",
  ];

  const otherColors = [
    { code: "rgb(139, 69, 19)", name: "Brown" },
    { code: "rgb(255, 99, 71)", name: "Tomato" },
    { code: "rgb(0, 128, 0)", name: "Green" },
    { code: "rgb(255, 105, 180)", name: "HotPink" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/web/html">HTML Tools</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>HTML Color Codes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">HTML Color Codes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            HTML color codes define colors for web pages using hex, RGB, or color names.
          </p>

          {/* Hexadecimal Color Codes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Hexadecimal Color Codes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {hexColors.map((color, idx) => (
                <div key={idx} className="text-center text-xs">
                  <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: color.code }} />
                  <span className="block mt-1">{color.code} - {color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RGB Color Codes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">RGB Color Codes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {rgbColors.map((color, idx) => (
                <div key={idx} className="text-center text-xs">
                  <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: color.code }} />
                  <span className="block mt-1">{color.code} - {color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HTML Color Names */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">HTML Color Names</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {colorNames.map((name, idx) => (
                <div key={idx} className="text-center text-xs">
                  <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: name.toLowerCase() }} />
                  <span className="block mt-1">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extended Color Names */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Extended Color Names</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {extendedColors.map((name, idx) => (
                <div key={idx} className="text-center text-xs">
                  <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: name.toLowerCase() }} />
                  <span className="block mt-1">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other Color Codes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Other Color Codes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {otherColors.map((color, idx) => (
                <div key={idx} className="text-center text-xs">
                  <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: color.code }} />
                  <span className="block mt-1">{color.code} - {color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* External Resource Link */}
          <div className="mt-6">
            <a
              href="https://www.rapidtables.com/web/color/html-color-codes.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Visit HTML Color Codes Resource
            </a>
          </div>
          {/* Explanation of Color Models */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Understanding Color Models</h3>
  <p className="text-sm text-muted-foreground mb-2">
    HTML colors can be represented using various models like HEX, RGB, RGBA, HSL, and HSLA. Understanding these models helps developers create vibrant and accessible color palettes for the web.
  </p>
  <ul className="list-disc pl-5 text-sm mb-2">
    <li><strong>HEX:</strong> Uses a hexadecimal notation to specify colors, e.g., <code>#FF5733</code>.</li>
    <li><strong>RGB:</strong> Specifies the red, green, and blue components from 0 to 255.</li>
    <li><strong>RGBA:</strong> Same as RGB but adds an alpha channel for opacity.</li>
    <li><strong>HSL:</strong> Stands for hue, saturation, and lightness. Example: <code>hsl(120, 100%, 50%)</code>.</li>
    <li><strong>HSLA:</strong> Adds alpha transparency to HSL.</li>
  </ul>
</div>

{/* RGBA Color Codes */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">RGBA Color Codes (with Transparency)</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {[
      { code: "rgba(255, 0, 0, 0.5)", name: "Transparent Red" },
      { code: "rgba(0, 255, 0, 0.5)", name: "Transparent Green" },
      { code: "rgba(0, 0, 255, 0.5)", name: "Transparent Blue" },
      { code: "rgba(0, 0, 0, 0.3)", name: "Transparent Black" },
      { code: "rgba(255, 255, 255, 0.3)", name: "Transparent White" },
    ].map((color, idx) => (
      <div key={idx} className="text-center text-xs">
        <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: color.code }} />
        <span className="block mt-1">{color.name}</span>
      </div>
    ))}
  </div>
</div>

{/* HSL Color Codes */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">HSL Color Codes</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {[
      { code: "hsl(0, 100%, 50%)", name: "Red" },
      { code: "hsl(120, 100%, 50%)", name: "Green" },
      { code: "hsl(240, 100%, 50%)", name: "Blue" },
      { code: "hsl(60, 100%, 50%)", name: "Yellow" },
      { code: "hsl(180, 100%, 50%)", name: "Cyan" },
    ].map((color, idx) => (
      <div key={idx} className="text-center text-xs">
        <div className="w-12 h-12 rounded border mx-auto" style={{ backgroundColor: color.code }} />
        <span className="block mt-1">{color.code}</span>
      </div>
    ))}
  </div>
</div>

{/* How to Choose Colors for Accessibility */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Color Accessibility Tips</h3>
  <p className="text-sm text-muted-foreground mb-2">
    Choosing accessible color combinations is crucial for users with visual impairments, including color blindness. Consider the following tips:
  </p>
  <ul className="list-disc pl-5 text-sm mb-2">
    <li>Ensure sufficient contrast between background and text colors.</li>
    <li>Use tools like WebAIM's Contrast Checker to validate combinations.</li>
    <li>Don't rely on color alone to convey meaning (e.g., use icons or labels).</li>
    <li>Test your UI with grayscale or colorblindness simulators.</li>
  </ul>
</div>

{/* CSS Variables for Color Reuse */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Using CSS Variables for Color Management</h3>
  <p className="text-sm text-muted-foreground mb-2">
    CSS variables allow you to define and reuse color values consistently throughout your stylesheets. Here's an example:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black overflow-auto">
    <code>{`:root {\n  --primary-color: #3498db;\n  --secondary-color: #2ecc71;\n}\n\n.button {\n  background-color: var(--primary-color);\n}`}</code>
  </pre>
</div>

{/* Favorite Color Palettes */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Popular Color Palettes</h3>
  <ul className="list-disc pl-5 text-sm mb-2">
    <li><strong>Material Design:</strong> Offers a consistent system with a wide color range.</li>
    <li><strong>Flat UI Colors:</strong> Simple and bold colors used in modern flat design.</li>
    <li><strong>Tailwind CSS Palette:</strong> Extensive utility-first color system.</li>
    <li><strong>Coolors.co:</strong> Useful tool for generating palettes with harmony.</li>
  </ul>
</div>

{/* Color Naming Tips */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Custom Color Naming Tips</h3>
  <p className="text-sm text-muted-foreground mb-2">
    When creating custom themes or tokens, use clear and consistent naming conventions:
  </p>
  <ul className="list-disc pl-5 text-sm mb-2">
    <li><code>primary-light</code>, <code>primary-dark</code></li>
    <li><code>neutral-100</code>, <code>neutral-900</code> (used in systems like Tailwind)</li>
    <li>Avoid abstract names like "blue1" or "customRed" that don't describe usage or intent</li>
  </ul>
</div>

{/* Resources for More Color Codes */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Useful Resources for Color Codes</h3>
  <ul className="list-disc pl-5 text-sm mb-2">
    <li>
      <a href="https://colorhunt.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        Color Hunt
      </a> – curated color palette inspiration
    </li>
    <li>
      <a href="https://coolors.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        Coolors
      </a> – fast color scheme generator
    </li>
    <li>
      <a href="https://www.w3schools.com/colors/colors_picker.asp" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        W3Schools Color Picker
      </a> – interactive tool to explore hex and RGB values
    </li>
    <li>
      <a href="https://www.color-blindness.com/color-name-hue/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        Color Name & Hue Tool
      </a> – identify names and variations
    </li>
  </ul>
</div>

        {/* CSS Gradients */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">CSS Gradients</h3>
  <p className="text-sm text-muted-foreground mb-2">
    CSS gradients allow smooth transitions between two or more colors and are often used as backgrounds in modern web designs.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[
      { css: "linear-gradient(to right, #ff7e5f, #feb47b)", label: "Sunset" },
      { css: "linear-gradient(to right, #6a11cb, #2575fc)", label: "Purple-Blue" },
      { css: "linear-gradient(to right, #00c9ff, #92fe9d)", label: "Aqua-Green" },
    ].map((grad, idx) => (
      <div key={idx} className="rounded border p-2 text-xs text-center">
        <div className="w-full h-16 rounded mb-1" style={{ backgroundImage: grad.css }} />
        <div>{grad.label}</div>
      </div>
    ))}
  </div>
</div>

{/* Named Colors Table */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">HTML Named Colors Table</h3>
  <table className="w-full text-sm table-auto border">
    <thead>
      <tr className="bg-gray-100 dark:bg-gray-800">
        <th className="border px-2 py-1">Name</th>
        <th className="border px-2 py-1">HEX</th>
        <th className="border px-2 py-1">Sample</th>
      </tr>
    </thead>
    <tbody>
      {[
        { name: "Coral", hex: "#FF7F50" },
        { name: "DarkSlateBlue", hex: "#483D8B" },
        { name: "OliveDrab", hex: "#6B8E23" },
        { name: "MediumVioletRed", hex: "#C71585" },
      ].map((color, idx) => (
        <tr key={idx}>
          <td className="border px-2 py-1">{color.name}</td>
          <td className="border px-2 py-1">{color.hex}</td>
          <td className="border px-2 py-1">
            <div className="w-6 h-6 rounded" style={{ backgroundColor: color.hex }} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Color Psychology */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Color Psychology in Web Design</h3>
  <p className="text-sm text-muted-foreground mb-2">
    Colors influence emotions and behaviors. When designing websites, choose colors that align with your message or brand goals:
  </p>
  <ul className="list-disc pl-5 text-sm">
    <li><strong>Red:</strong> Urgency, passion, excitement (used in sales or call-to-actions).</li>
    <li><strong>Blue:</strong> Trust, calm, security (common in banking and healthcare).</li>
    <li><strong>Green:</strong> Growth, health, peace (often used in eco brands).</li>
    <li><strong>Yellow:</strong> Cheerfulness, optimism (used to grab attention).</li>
    <li><strong>Purple:</strong> Luxury, creativity, mystery (popular in beauty and tech).</li>
  </ul>
</div>

{/* Dark Mode vs Light Mode */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Dark Mode vs Light Mode Colors</h3>
  <p className="text-sm text-muted-foreground mb-2">
    Supporting both dark and light modes is a best practice in modern UI/UX design. Here's how you can manage color schemes:
  </p>
  <ul className="list-disc pl-5 text-sm mb-2">
    <li>Use CSS media query <code>prefers-color-scheme</code> to detect mode.</li>
    <li>Tailwind and other utility-first frameworks support dark variants natively.</li>
    <li>Define color tokens that switch values based on the theme.</li>
  </ul>
  <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black overflow-auto">
    <code>{`@media (prefers-color-scheme: dark) {\n  body {\n    background-color: #121212;\n    color: #ffffff;\n  }\n}`}</code>
  </pre>
</div>

{/* Web Safe Colors */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Web Safe Colors</h3>
  <p className="text-sm text-muted-foreground mb-2">
    Web-safe colors originated in early web development to ensure color consistency across 256-color monitors. While less relevant today, they still serve as a guideline for cross-platform compatibility.
  </p>
  <p className="text-sm mb-2">
    The palette is built from six values per channel: 0, 51, 102, 153, 204, 255 — resulting in 216 combinations.
  </p>
</div>

{/* Color Contrast Tools */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Color Contrast Testing Tools</h3>
  <p className="text-sm text-muted-foreground mb-2">
    Testing contrast between foreground and background ensures readability and WCAG compliance.
  </p>
  <ul className="list-disc pl-5 text-sm mb-2">
    <li><a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">WebAIM Contrast Checker</a></li>
    <li><a href="https://colorable.jxnblk.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Colorable</a></li>
    <li><a href="https://accessible-colors.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Accessible Colors</a></li>
  </ul>
</div>

{/* CSS Color Functions */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">CSS Color Functions</h3>
  <p className="text-sm text-muted-foreground mb-2">
    CSS supports color manipulation functions to enhance maintainability. Examples include:
  </p>
  <ul className="list-disc pl-5 text-sm mb-2">
    <li><code>color-mix()</code>: Mix two colors.</li>
    <li><code>color-contrast()</code>: Choose best contrast color from a set.</li>
    <li><code>hsl()</code> and <code>rgb()</code>: Define color using component values.</li>
  </ul>
  <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black overflow-auto">
    <code>{`background-color: color-mix(in srgb, red 60%, white);`}</code>
  </pre>
</div>

{/* Fallback Colors */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">CSS Fallback Colors</h3>
  <p className="text-sm text-muted-foreground mb-2">
    Not all browsers support modern color functions or values. Use fallback color definitions:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black overflow-auto">
    <code>{`background-color: #ff0000;\nbackground-color: color(display-p3 1 0 0);`}</code>
  </pre>
</div>

{/* Developer Tips */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-2">Developer Tips for Managing Colors</h3>
  <ul className="list-disc pl-5 text-sm">
    <li>Organize your color tokens in a central theme file.</li>
    <li>Use naming based on intent (e.g., <code>success-bg</code>, <code>error-text</code>).</li>
    <li>Use dev tools or browser extensions like ColorZilla to pick colors from any web page.</li>
    <li>Use design systems like Figma or Adobe XD to document and standardize palettes.</li>
  </ul>
</div>

              
        </CardContent>
      </Card>
    </div>
  );
};

export default HTMLColorCodes;
