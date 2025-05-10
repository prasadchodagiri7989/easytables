import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const AltCodes: React.FC = () => {
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
          <BreadcrumbPage>ls Command</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle>ALT Codes for Symbols & Characters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            ALT codes are keyboard shortcuts for typing special characters and symbols using the numeric keypad.
            Just hold down the <strong>ALT</strong> key and type the numeric code on your keyboard's numpad.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">How to Use</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hold down the <strong>ALT</strong> key</li>
              <li>Type the code using the numeric keypad (e.g., ALT + 0176 for °)</li>
              <li>Release the ALT key and the symbol will appear</li>
              <li>Works only with numpad (not top-row numbers)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Common ALT Codes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 dark:text-black">
              {[
                { code: "ALT + 0176", symbol: "°", name: "Degree" },
                { code: "ALT + 0153", symbol: "™", name: "Trademark" },
                { code: "ALT + 0169", symbol: "©", name: "Copyright" },
                { code: "ALT + 0174", symbol: "®", name: "Registered" },
                { code: "ALT + 3", symbol: "♥", name: "Heart" },
                { code: "ALT + 1", symbol: "☺", name: "Smiley" },
                { code: "ALT + 21", symbol: "§", name: "Section" },
                { code: "ALT + 0177", symbol: "±", name: "Plus-minus" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded">
                  <code>{item.code} = {item.symbol}</code> ({item.name})
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2v">Tips</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Make sure <strong>Num Lock</strong> is on</li>
              <li>Works only in Windows (not macOS)</li>
              <li>For laptops without a numpad, use <strong>Fn + NumPad overlay</strong></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Example Use</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>
                ALT + 0169 → © 2025 YourCompanyName{"\n"}
                ALT + 0176 → Temperature: 23° C{"\n"}
                ALT + 0153 → BrandName™
              </code>
            </pre>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Extended ALT Code Table</h2>
            <p>
              Here are more useful ALT codes that cover a variety of symbols including currency, math, arrows, and accented characters:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                { code: "ALT + 0128", symbol: "€", name: "Euro" },
                { code: "ALT + 36", symbol: "$", name: "Dollar" },
                { code: "ALT + 0162", symbol: "¢", name: "Cent" },
                { code: "ALT + 0163", symbol: "£", name: "Pound" },
                { code: "ALT + 0247", symbol: "÷", name: "Division" },
                { code: "ALT + 0215", symbol: "×", name: "Multiplication" },
                { code: "ALT + 26", symbol: "→", name: "Right Arrow" },
                { code: "ALT + 27", symbol: "←", name: "Left Arrow" },
                { code: "ALT + 24", symbol: "↑", name: "Up Arrow" },
                { code: "ALT + 25", symbol: "↓", name: "Down Arrow" },
                { code: "ALT + 0223", symbol: "ß", name: "Eszett (Sharp S)" },
                { code: "ALT + 0225", symbol: "á", name: "a Acute" },
                { code: "ALT + 0233", symbol: "é", name: "e Acute" },
                { code: "ALT + 0241", symbol: "ñ", name: "n Tilde" },
                { code: "ALT + 0191", symbol: "¿", name: "Inverted Question Mark" },
                { code: "ALT + 0161", symbol: "¡", name: "Inverted Exclamation" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded">
                  <code>{item.code} = {item.symbol}</code> ({item.name})
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Why ALT Codes Matter</h2>
            <p>
              ALT codes give you fast access to characters not found on standard keyboards. This includes punctuation marks, accented letters, symbols for currencies, and typographic marks used in publishing and academic work. They're especially useful in:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Typing in multiple languages (e.g., French, Spanish, German)</li>
              <li>Adding math or scientific symbols without copy-paste</li>
              <li>Inserting legal and copyright symbols into documents</li>
              <li>Designing ASCII art or retro-style interfaces</li>
              <li>Working with forms, where exact characters are required</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Technical Background</h2>
            <p>
              ALT codes are based on the <strong>extended ASCII (American Standard Code for Information Interchange)</strong> table, also known as Windows-1252 or ANSI. When you type an ALT code, you're directly invoking the numeric value of that character in the Windows encoding system.
            </p>
            <p>
              For example, the ASCII decimal value for © is 169, so <code>ALT + 0169</code> displays that symbol. Unicode has mostly replaced ASCII in modern systems, but Windows still supports legacy ALT codes for backward compatibility.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Limitations & Compatibility</h2>
            <p>
              ALT codes are limited to the Windows platform. On macOS, you'll need to use different shortcuts (like <code>Option + G</code> for ©). ALT codes also require:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>A functioning numeric keypad (not just top row keys)</li>
              <li>Num Lock to be enabled</li>
              <li>A program that supports extended characters (e.g., Notepad, Word, browsers)</li>
            </ul>
            <p>
              Some ALT codes may not work on all fonts, especially in minimalist or monospaced typefaces. Use standard fonts like Arial or Times New Roman for broadest support.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode vs ALT Codes</h2>
            <p>
              ALT codes are primarily decimal values of characters in Windows-1252, but Unicode provides a global character set with over 140,000 characters. Unicode characters can also be typed using <code>ALT + x</code> in some apps like Microsoft Word.
            </p>
            <p>
              Example: Type <code>00A9</code> and press <code>ALT + x</code> in Word to get ©.
            </p>
            <p>
              While ALT codes are fast, Unicode is more universal and works across platforms and devices, including web and mobile.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Creating ALT Code Cheatsheets</h2>
            <p>
              If you frequently use certain symbols, create a personal cheatsheet by saving ALT codes in a text file or printable document. You can categorize them by:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Language accents</li>
              <li>Math and engineering symbols</li>
              <li>Business and legal characters</li>
              <li>Graphic elements (like arrows or shapes)</li>
            </ul>
            <p>
              This can save time when writing documents, emails, or creating digital designs.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Fun with ALT Art</h2>
            <p>
              ALT characters have long been used to create basic art and diagrams in text format. This is known as ASCII or ANSI art. Characters like <code>─│┐└╬</code> can help build menus, borders, or schematic layouts in terminal apps or retro games.
            </p>
            <p>
              Example:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>
                ┌──────────────┐{"\n"}
                │ ALT ART BOX  │{"\n"}
                └──────────────┘
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Best Practices</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Memorize commonly used ALT codes (e.g., © = 0169, ™ = 0153, ° = 0176)</li>
              <li>Use Unicode when developing websites or mobile apps</li>
              <li>Keep a reference handy for less common characters</li>
              <li>Test ALT characters in the context you’ll use them (some may not render correctly in all editors)</li>
              <li>Use ALT codes for productivity — don’t rely solely on copy-paste</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Using ALT Codes in HTML</h2>
            <p>
              In web development, ALT codes aren’t typically used directly. Instead, HTML entity codes are preferred for consistency across platforms. However, the concept is similar — you use a code to represent a special character.
            </p>
            <p>
              For example, the copyright symbol can be represented using:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><code>&amp;copy;</code> — named HTML entity</li>
              <li><code>&amp;#169;</code> — decimal entity</li>
              <li><code>&amp;#xA9;</code> — hexadecimal entity</li>
            </ul>
            <p>
              If you're working in React or JSX, you can use Unicode characters directly or embed them with HTML entity syntax using `dangerouslySetInnerHTML`, though the direct Unicode approach is usually cleaner.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">International ALT Codes</h2>
            <p>
              ALT codes support many accented and non-English characters, which makes them useful when typing in languages like French, Spanish, Portuguese, German, and Italian. These include characters like:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                { code: "ALT + 0193", symbol: "Á", name: "A Acute (Uppercase)" },
                { code: "ALT + 0225", symbol: "á", name: "a Acute (Lowercase)" },
                { code: "ALT + 0201", symbol: "É", name: "E Acute (Uppercase)" },
                { code: "ALT + 0233", symbol: "é", name: "e Acute (Lowercase)" },
                { code: "ALT + 0211", symbol: "Ó", name: "O Acute (Uppercase)" },
                { code: "ALT + 0243", symbol: "ó", name: "o Acute (Lowercase)" },
                { code: "ALT + 0220", symbol: "Ü", name: "U Umlaut (Uppercase)" },
                { code: "ALT + 0252", symbol: "ü", name: "u Umlaut (Lowercase)" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded">
                  <code>{item.code} = {item.symbol}</code> ({item.name})
                </div>
              ))}
            </div>
            <p>
              These ALT codes can be helpful when writing names, citations, or working with multilingual content.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ALT Code Alternatives for macOS</h2>
            <p>
              macOS does not support Windows-style ALT codes, but you can use the <strong>Option</strong> key with letter combinations to create special characters. Here are a few examples:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Option + G</strong> → ©</li>
              <li><strong>Option + 2</strong> → ™</li>
              <li><strong>Option + R</strong> → ®</li>
              <li><strong>Option + Shift + 8</strong> → °</li>
            </ul>
            <p>
              Alternatively, macOS users can press <strong>Control + Command + Space</strong> to open the emoji and character viewer and search for any symbol they need.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Mobile Use & Limitations</h2>
            <p>
              On mobile devices (Android and iOS), ALT codes do not work. Instead, character selection is handled via long-press menus on the virtual keyboard. For example:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Long-press <strong>"e"</strong> to select é, è, ê, etc.</li>
              <li>Long-press <strong>"$"</strong> to see other currency symbols like €, £, or ¥</li>
            </ul>
            <p>
              For emoji and symbols, modern smartphones offer built-in search and recent character suggestions, making ALT codes obsolete on these platforms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Accessibility and ALT Characters</h2>
            <p>
              ALT characters can improve accessibility by allowing users to express precise mathematical or scientific notation, or use visually meaningful symbols. However, they should be used responsibly:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Screen readers may skip or misread special characters</li>
              <li>Use proper <code>aria-label</code> attributes or alt-text for images containing symbols</li>
              <li>Ensure visual clarity by testing characters in different fonts</li>
            </ul>
            <p>
              For example, symbols like ± or ∞ can improve comprehension for users who rely on assistive technology if paired with explanatory context.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Historical Context</h2>
            <p>
              ALT codes trace their origins back to the original IBM PCs and DOS systems, where entering control characters and box-drawing symbols was essential for software like Norton Commander or early BBS interfaces.
            </p>
            <p>
              These systems used code pages like CP437 and CP850, which defined the glyphs rendered on screen. Over time, Windows adopted the ANSI standard, expanding to support more symbols — but the legacy numeric system stuck around.
            </p>
            <p>
              Even today, terminal emulators and legacy software may still support or require the use of ALT code entry for precise formatting.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Troubleshooting ALT Code Issues</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>ALT code not working? Ensure Num Lock is ON.</li>
              <li>Make sure you are using the numeric keypad, not the number row.</li>
              <li>Some laptop keyboards may need <strong>Fn</strong> key toggling to activate numpad overlay.</li>
              <li>Not all applications support all codes — try Notepad, Word, or browser input fields.</li>
              <li>For obscure characters, try Unicode instead of ALT codes.</li>
            </ul>
            <p>
              Still having trouble? Consider using a character map utility (type <code>charmap</code> in the Windows Run dialog) or an online ALT code generator.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Developer Note</h2>
            <p>
              If you're building a UI or software that deals with internationalization or special characters, ALT codes may appear in user input. Normalize character sets to Unicode for storage and processing. Tools like <code>String.prototype.normalize()</code> in JavaScript can help handle composed vs. decomposed characters.
            </p>
            <p>
              For instance, the character é could be represented as a single code (U+00E9) or as "e" + "´" (U+0065 U+0301). Always sanitize and validate character inputs when parsing or displaying user-generated data.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Symbol Styling Tips</h2>
            <p>
              Symbols entered via ALT codes can sometimes look out of place depending on the font. Consider applying typographic adjustments such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><code>font-family: serif</code> or <code>sans-serif</code> for better visual match</li>
              <li><code>font-size</code> tweaks to align them with surrounding text</li>
              <li><code>letter-spacing</code> or <code>vertical-align</code> for mathematical symbols</li>
            </ul>
            <p>
              Consistent styling improves the legibility and professionalism of documents or apps that use custom symbols.
            </p>
          </div>


        </CardContent>
      </Card>
    </div>
  );
};

export default AltCodes;
