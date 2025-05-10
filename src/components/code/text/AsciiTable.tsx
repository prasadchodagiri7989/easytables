import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const AsciiTable: React.FC = () => {
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
                <BreadcrumbPage>ls Command</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            
      <Card>
        <CardHeader>
          <CardTitle>ASCII Table (American Standard Code for Information Interchange)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          <p>
            ASCII is a character encoding standard for electronic communication, representing text in computers, telecommunications equipment, and other devices. Each character is assigned a number from 0 to 127.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">Printable ASCII Characters</h2>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:text-black">
                    <th className="border px-4 py-2">Decimal</th>
                    <th className="border px-4 py-2">Hex</th>
                    <th className="border px-4 py-2">Character</th>
                    <th className="border px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dec: 32, hex: "20", char: "Space", desc: "Space" },
                    { dec: 33, hex: "21", char: "!", desc: "Exclamation mark" },
                    { dec: 34, hex: "22", char: '"', desc: "Double quote" },
                    { dec: 35, hex: "23", char: "#", desc: "Number sign" },
                    { dec: 36, hex: "24", char: "$", desc: "Dollar sign" },
                    { dec: 37, hex: "25", char: "%", desc: "Percent" },
                    { dec: 38, hex: "26", char: "&", desc: "Ampersand" },
                    { dec: 39, hex: "27", char: "'", desc: "Single quote" },
                    { dec: 40, hex: "28", char: "(", desc: "Left parenthesis" },
                    { dec: 41, hex: "29", char: ")", desc: "Right parenthesis" },
                    { dec: 42, hex: "2A", char: "*", desc: "Asterisk" },
                    { dec: 43, hex: "2B", char: "+", desc: "Plus" },
                    { dec: 44, hex: "2C", char: ",", desc: "Comma" },
                    { dec: 45, hex: "2D", char: "-", desc: "Hyphen" },
                    { dec: 46, hex: "2E", char: ".", desc: "Period" },
                    { dec: 47, hex: "2F", char: "/", desc: "Slash" },
                    { dec: 48, hex: "30", char: "0", desc: "Digit zero" },
                    { dec: 49, hex: "31", char: "1", desc: "Digit one" },
                    { dec: 65, hex: "41", char: "A", desc: "Uppercase A" },
                    { dec: 66, hex: "42", char: "B", desc: "Uppercase B" },
                    { dec: 97, hex: "61", char: "a", desc: "Lowercase a" },
                    { dec: 98, hex: "62", char: "b", desc: "Lowercase b" },
                  ].map((item) => (
                    <tr key={item.dec}>
                      <td className="border px-4 py-2 text-center">{item.dec}</td>
                      <td className="border px-4 py-2 text-center">{item.hex}</td>
                      <td className="border px-4 py-2 text-center">{item.char}</td>
                      <td className="border px-4 py-2">{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Control Characters (0–31)</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>0 - NULL (null character)</li>
              <li>7 - BEL (bell)</li>
              <li>8 - BS (backspace)</li>
              <li>9 - TAB (horizontal tab)</li>
              <li>10 - LF (line feed)</li>
              <li>13 - CR (carriage return)</li>
              <li>27 - ESC (escape)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Notes</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>ASCII includes 128 characters.</li>
              <li>Extended ASCII (0–255) includes more symbols.</li>
              <li>Commonly used for text files and communication protocols.</li>
            </ul>
          </div>
                    <div>
            <h2 className="text-lg font-semibold mb-2">Extended ASCII (128–255)</h2>
            <p>
              Extended ASCII, also referred to as ISO 8859 or code page 437, is an 8-bit extension of the original 7-bit ASCII standard. It includes additional symbols, letters with diacritics, box-drawing characters, and special glyphs that are useful in various languages and graphical UIs on legacy systems.
            </p>
            <p>Here are some examples of extended ASCII characters:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm dark:text-black">
              {[
                { dec: 128, char: "Ç", desc: "Latin capital letter C with cedilla" },
                { dec: 130, char: "é", desc: "Latin small letter e with acute" },
                { dec: 135, char: "ç", desc: "Latin small letter c with cedilla" },
                { dec: 138, char: "Š", desc: "Latin capital letter S with caron" },
                { dec: 144, char: "É", desc: "Latin capital letter E with acute" },
                { dec: 154, char: "š", desc: "Latin small letter s with caron" },
                { dec: 156, char: "œ", desc: "Latin small ligature oe" },
                { dec: 159, char: "Ÿ", desc: "Latin capital letter Y with diaeresis" },
              ].map((item, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded">
                  <code>{item.dec}</code>: <strong>{item.char}</strong> — {item.desc}
                </div>
              ))}
            </div>
            <p className="mt-4">
              These characters were particularly useful in DOS-based programs and early GUIs to create borders, menus, and basic graphical elements using only text. They also helped support European languages more effectively.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Why ASCII Still Matters</h2>
            <p>
              Despite being over 60 years old, ASCII is still foundational in computer systems. It's used in programming languages, data interchange formats, network protocols, file encodings, and operating system commands.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Source code files (C, JavaScript, Python, etc.) are often saved in ASCII-compatible formats.</li>
              <li>Internet protocols like HTTP, FTP, and SMTP are text-based and rely on ASCII encoding.</li>
              <li>Log files, configuration files, and scripts often use ASCII due to its simplicity and compatibility.</li>
            </ul>
            <p>
              Many programming languages include direct methods to work with ASCII codes via character-to-code conversions, such as `ord()` and `chr()` in Python or `charCodeAt()` in JavaScript.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ASCII in Programming</h2>
            <p>
              Developers frequently work with ASCII when parsing or formatting data. Here are a few common examples:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Validation:</strong> Checking if input is within `A-Z`, `a-z`, or `0-9` using ASCII values.</li>
              <li><strong>Sorting:</strong> Sorting strings alphabetically using ASCII code order.</li>
              <li><strong>Encoding:</strong> Writing custom serialization formats or working with low-level communication protocols.</li>
            </ul>
            <p>In JavaScript:</p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto dark:text-black">
              {`const code = 'A'.charCodeAt(0); // 65
const char = String.fromCharCode(65); // 'A'`}
            </pre>
            <p>In Python:</p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto dark:text-black">
              {`code = ord('A')  # 65
char = chr(65)    # 'A'`}
            </pre>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Binary and Hex Representation</h2>
            <p>
              Every ASCII character has a binary and hexadecimal equivalent. For instance, the letter 'A' has:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Decimal: 65</li>
              <li>Hexadecimal: 0x41</li>
              <li>Binary: 01000001</li>
            </ul>
            <p>
              This is especially useful in computer engineering and networking, where binary and hexadecimal formats are more readable or compatible with hardware.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ASCII vs Unicode</h2>
            <p>
              ASCII is a subset of Unicode. Unicode was designed to overcome ASCII’s limitations by including symbols for every language, emoji, and historical scripts.
            </p>
            <table className="table-auto border-collapse w-full text-sm mt-2">
              <thead>
                <tr className="bg-gray-100 dark:text-black">
                  <th className="border px-4 py-2">Feature</th>
                  <th className="border px-4 py-2">ASCII</th>
                  <th className="border px-4 py-2">Unicode</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Bit Size</td>
                  <td className="border px-4 py-2">7-bit</td>
                  <td className="border px-4 py-2">Up to 32-bit</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Characters Supported</td>
                  <td className="border px-4 py-2">128</td>
                  <td className="border px-4 py-2">Over 140,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Languages Supported</td>
                  <td className="border px-4 py-2">English only</td>
                  <td className="border px-4 py-2">Virtually all languages</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-2">
              Unicode is now the standard encoding in modern applications (UTF-8 is the most popular variant), but ASCII compatibility ensures backward support.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Useful ASCII Character Ranges</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>32–47: Punctuation and symbols (space, !, ", #, etc.)</li>
              <li>48–57: Digits 0–9</li>
              <li>65–90: Uppercase A–Z</li>
              <li>97–122: Lowercase a–z</li>
              <li>127: DEL (delete)</li>
            </ul>
            <p>
              These ranges are helpful when creating parsers, validating input, or constructing regex patterns.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ASCII Art and Box Drawing</h2>
            <p>
              Before GUIs, ASCII was used to draw interfaces and graphics in terminal programs. Box-drawing characters in extended ASCII (like ╔, ═, ║, ╝) allowed the creation of visual UIs in text mode.
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto dark:text-black">
              {`╔══════════════╗
║  ASCII BOX   ║
╚══════════════╝`}
            </pre>
            <p>
              Even today, ASCII art remains a form of creative expression in code comments, README files, and retro-style games.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Common ASCII-Based Escape Sequences</h2>
            <p>
              Many control characters are used in escape sequences:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><code>\n</code> — Line feed (LF, ASCII 10)</li>
              <li><code>\r</code> — Carriage return (CR, ASCII 13)</li>
              <li><code>\t</code> — Tab (ASCII 9)</li>
              <li><code>\b</code> — Backspace (ASCII 8)</li>
              <li><code>\\</code> — Backslash (ASCII 92)</li>
            </ul>
            <p>
              These are used across many programming languages and platforms for formatting output or defining structured text.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Legacy Systems and ASCII</h2>
            <p>
              ASCII was especially vital in the era of early computing. Systems such as MS-DOS, Unix, and CP/M relied heavily on ASCII for file names, scripts, logs, and system messages. Many protocols like Telnet and early email systems (SMTP, POP3) were built entirely around ASCII.
            </p>
            <p>
              In Unix systems, control characters like line feed (`LF`, ASCII 10) and carriage return (`CR`, ASCII 13) are used to indicate new lines, but their usage differs slightly on other platforms. For example:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Unix/Linux: Newline is represented by LF (`\n`).</li>
              <li>Windows: Newline is represented by CR + LF (`\r\n`).</li>
              <li>Mac OS (pre-OS X): Used CR (`\r`) alone.</li>
            </ul>
            <p>
              Understanding these differences is critical when dealing with cross-platform text processing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ASCII in File Encoding</h2>
            <p>
              While modern files are typically encoded using UTF-8, the first 128 characters (0–127) of UTF-8 map directly to ASCII. This makes ASCII a subset of UTF-8, ensuring backward compatibility with legacy systems and simpler tools.
            </p>
            <p>
              If a file is encoded in pure ASCII, it's also valid UTF-8. However, a UTF-8 file can contain additional characters beyond the ASCII range, often used in internationalization.
            </p>
            <p>
              Some systems explicitly use ASCII for configuration files, such as `.ini`, `.env`, and legacy `.cfg` formats.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ASCII Tables and Debugging</h2>
            <p>
              ASCII tables are a handy reference during debugging, especially in low-level programming or reverse engineering. Developers working in C, embedded systems, or network packet inspection often need to translate hex or decimal values into readable characters.
            </p>
            <p>
              For instance, a hex dump of memory might show values like `0x41 0x42 0x43`, which corresponds to the ASCII characters "ABC". Having a mental model or quick lookup for these mappings helps decode raw data.
            </p>
            <p>
              Similarly, escape characters like `\n` (line feed) or `\x1B` (escape) can affect terminal behavior or output formatting, and knowing their ASCII representation helps troubleshoot unexpected results.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Creating Custom ASCII Tools</h2>
            <p>
              Many developers build or use ASCII-based tools in command-line environments. Examples include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>ASCII converters and decoders for educational or debugging purposes.</li>
              <li>CLI applications that use ASCII box drawing for UI layouts.</li>
              <li>Hex editors that display ASCII representation alongside binary/hex.</li>
            </ul>
            <p>
              Here's a simple logic example to map numbers to characters in JavaScript:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto dark:text-black">
              {`for (let i = 32; i < 127; i++) {
  console.log(i, String.fromCharCode(i));
}`}
            </pre>
            <p>
              This loop prints the printable ASCII characters and their decimal values. Such utilities are useful in education, debugging, and data inspection.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ASCII in Networking</h2>
            <p>
              Many internet and networking protocols still rely on ASCII for transmitting data. Examples include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>HTTP:</strong> All HTTP headers and methods are defined using ASCII strings.</li>
              <li><strong>FTP and SMTP:</strong> Command sequences are transmitted as ASCII text.</li>
              <li><strong>Telnet:</strong> An ASCII-based protocol used to remotely access systems.</li>
              <li><strong>DNS:</strong> Domain names and queries are ASCII-compatible (punycode is used for Unicode).</li>
            </ul>
            <p>
              ASCII’s simplicity and universal understanding make it ideal for defining the grammar of these protocols, ensuring they work reliably across all systems.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Control Characters in Depth</h2>
            <p>
              Control characters are non-printing characters in the ASCII table (codes 0–31 and 127). They were originally designed to control hardware like printers and terminals. Some examples include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>SOH (Start of Header):</strong> ASCII 1, marks the beginning of a message.</li>
              <li><strong>STX (Start of Text):</strong> ASCII 2, indicates the start of a text block.</li>
              <li><strong>ETX (End of Text):</strong> ASCII 3, used to mark the end of a message block.</li>
              <li><strong>EOT (End of Transmission):</strong> ASCII 4, often used to indicate the end of data.</li>
              <li><strong>ACK (Acknowledge):</strong> ASCII 6, used for acknowledgment in data transmission.</li>
              <li><strong>NAK (Negative Acknowledge):</strong> ASCII 21, signals failure or rejection.</li>
            </ul>
            <p>
              While rarely seen in high-level programming, these control characters are still used in protocols and serial communications.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">ASCII and Base64 Encoding</h2>
            <p>
              Base64 encoding is a method to encode binary data into ASCII characters to ensure safe transport over media designed for text. For example, when sending image or file data in an email, Base64 encodes it using the 64-character alphabet (A–Z, a–z, 0–9, +, /).
            </p>
            <p>
              Because Base64 uses only printable ASCII characters, it's ideal for embedding data in JSON, HTML, or XML, without breaking formatting or structure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Character Sets and Code Pages</h2>
            <p>
              While ASCII is a standard, different systems developed unique extensions. For instance:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>ISO 8859-1 (Latin-1):</strong> Extends ASCII to include Western European characters.</li>
              <li><strong>Windows-1252:</strong> A Microsoft variant similar to Latin-1 but with extra symbols.</li>
              <li><strong>Code page 437:</strong> The original IBM PC character set with graphical symbols.</li>
            </ul>
            <p>
              Knowing which code page is in use is important when interpreting byte data. Misinterpreting extended characters can lead to garbled output or encoding bugs.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Security Considerations with ASCII</h2>
            <p>
              ASCII characters are often exploited in security contexts. Consider:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>SQL Injection:</strong> Malicious ASCII-based input like `' OR 1=1 --` can compromise databases.</li>
              <li><strong>XSS Attacks:</strong> ASCII encodings like `&lt;script&gt;` are used to bypass filters.</li>
              <li><strong>Null Byte Injection:</strong> Using `\0` (ASCII 0) to terminate strings prematurely in unsafe languages like C.</li>
            </ul>
            <p>
              Sanitizing user input and understanding ASCII representations is crucial in web development, especially for building secure APIs and frontends.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AsciiTable;
