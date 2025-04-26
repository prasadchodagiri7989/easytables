import React from "react";

const AltCodes: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <nav className="text-sm text-gray-500">
          Home › Tools › <span className="text-black">ALT Codes</span>
        </nav>
      </div>

      <h1 className="text-3xl font-bold mb-6">ALT Codes for Symbols & Characters</h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <p>
          ALT codes are keyboard shortcuts for typing special characters and symbols using the numeric keypad.
          Just hold down the <strong>ALT</strong> key and type the numeric code on your keyboard's numpad.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Hold down the <strong>ALT</strong> key</li>
            <li>Type the code using the numeric keypad (e.g., ALT + 0176 for °)</li>
            <li>Release the ALT key and the symbol will appear</li>
            <li>Works only with numpad (not top-row numbers)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Common ALT Codes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-gray-100 p-3 rounded">
              <code>ALT + 0176 = °</code> (Degree)
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <code>ALT + 0153 = ™</code> (Trademark)
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <code>ALT + 0169 = ©</code> (Copyright)
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <code>ALT + 0174 = ®</code> (Registered)
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <code>ALT + 3 = ♥</code> (Heart)
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <code>ALT + 1 = ☺</code> (Smiley)
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <code>ALT + 21 = §</code> (Section)
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <code>ALT + 0177 = ±</code> (Plus-minus)
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Make sure <strong>Num Lock</strong> is on</li>
            <li>Works only in Windows (not macOS)</li>
            <li>For laptops without a numpad, use <strong>Fn + NumPad overlay</strong></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Example Use</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            <code>
              ALT + 0169 → © 2025 YourCompanyName{"\n"}
              ALT + 0176 → Temperature: 23° C{"\n"}
              ALT + 0153 → BrandName™
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AltCodes;

