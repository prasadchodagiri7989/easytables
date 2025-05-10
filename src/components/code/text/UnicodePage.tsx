import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js



const UnicodePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const unicodeData = [
    { char: "©", name: "Copyright", unicode: "U+00A9", escapeSequence: "\\u00A9", htmlCode: "&#169;", htmlNamedCode: "&copy;" },
    { char: "®", name: "Registered", unicode: "U+00AE", escapeSequence: "\\u00AE", htmlCode: "&#174;", htmlNamedCode: "&reg;" },
    { char: "™", name: "Trademark", unicode: "U+2122", escapeSequence: "\\u2122", htmlCode: "&#8482;", htmlNamedCode: "&trade;" },
    { char: "∞", name: "Infinity", unicode: "U+221E", escapeSequence: "\\u221E", htmlCode: "&#8734;", htmlNamedCode: "&infin;" },
    { char: "$", name: "Dollar", unicode: "U+0024", escapeSequence: "\\u0024", htmlCode: "&#36;", htmlNamedCode: "" },
    { char: "€", name: "Euro", unicode: "U+20AC", escapeSequence: "\\u20AC", htmlCode: "&#8364;", htmlNamedCode: "&euro;" },
    { char: "¥", name: "Yen", unicode: "U+00A5", escapeSequence: "\\u00A5", htmlCode: "&#165;", htmlNamedCode: "&yen;" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredUnicodeList = unicodeData.filter((unicode) =>
    unicode.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
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
          <CardTitle>Unicode Characters Table</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 text-sm text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold mb-2">Search for Unicode</h2>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search Unicode Name"
              className="border rounded p-2 w-full text-sm dark:bg-transparent"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode Character Symbols</h2>
            <p className="text-xs text-gray-500 mb-4">Mouse click on character to get the code.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-xs">
                <thead>
                  <tr>
                    {["Character", "Name", "Unicode", "Escape Sequence", "HTML Code", "HTML Named Code"].map((header, index) => (
                      <th key={index} className="px-4 py-2 border bg-gray-100 font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredUnicodeList.map((unicode, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border text-center">{unicode.char}</td>
                      <td className="px-4 py-2 border">{unicode.name}</td>
                      <td className="px-4 py-2 border text-center">{unicode.unicode}</td>
                      <td className="px-4 py-2 border text-center">{unicode.escapeSequence}</td>
                      <td className="px-4 py-2 border text-center">{unicode.htmlCode}</td>
                      <td className="px-4 py-2 border text-center">{unicode.htmlNamedCode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Special Codes</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-xs">
                <thead>
                  <tr>
                    {["Unicode", "Escape Sequence", "HTML Numeric Code", "HTML Named Code", "Description"].map((header, index) => (
                      <th key={index} className="px-4 py-2 border bg-gray-100 font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">U+0009</td>
                    <td className="px-4 py-2 border">\\u0009</td>
                    <td className="px-4 py-2 border">&#09;</td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border">horizontal tab</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">U+00A0</td>
                    <td className="px-4 py-2 border">\\u00A0</td>
                    <td className="px-4 py-2 border">&#160;</td>
                    <td className="px-4 py-2 border">&nbsp;</td>
                    <td className="px-4 py-2 border">non-breaking space</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Greek Alphabet Codes</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-xs">
                <thead>
                  <tr>
                    {["Character", "Unicode", "Escape Sequence", "HTML Numeric Code", "HTML Named Code", "Description"].map((header, index) => (
                      <th key={index} className="px-4 py-2 border bg-gray-100 font-semibold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">α</td>
                    <td className="px-4 py-2 border">U+03B1</td>
                    <td className="px-4 py-2 border">\\u03B1</td>
                    <td className="px-4 py-2 border">&#945;</td>
                    <td className="px-4 py-2 border">&alpha;</td>
                    <td className="px-4 py-2 border">small alpha</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">β</td>
                    <td className="px-4 py-2 border">U+03B2</td>
                    <td className="px-4 py-2 border">\\u03B2</td>
                    <td className="px-4 py-2 border">&#946;</td>
                    <td className="px-4 py-2 border">&beta;</td>
                    <td className="px-4 py-2 border">small beta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode in Programming Languages</h2>
            <p>
              Many programming languages have built-in support for Unicode, making it easier to handle multilingual text and special characters. Whether you are developing in Python, JavaScript, or C#, Unicode is essential for dealing with internationalized applications and ensuring that characters from various writing systems are properly handled.
            </p>
            <p>
              For example, in JavaScript, Unicode characters can be represented using escape sequences. You can insert Unicode characters directly into a string:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {`const smiley = "😊";`}
            </pre>
            <p>
              Additionally, JavaScript allows Unicode characters to be inserted using escape sequences:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {`const smiley = "\\uD83D\\uDE0A";`}
            </pre>
            <p>
              Python also provides support for Unicode strings. In Python 3, strings are Unicode by default:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {`text = "こんにちは"  # Hello in Japanese`}
            </pre>
            <p>
              Understanding how to use Unicode in programming languages allows developers to create applications that can function globally, supporting various languages and characters.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode and Text Encodings</h2>
            <p>
              Text encoding defines how characters are represented in memory or files. Unicode is the most widely used text encoding system, providing a unique number for every character, regardless of the platform, program, or language. 
            </p>
            <p>
              There are several text encodings that support Unicode. The most common ones are:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>UTF-8:</strong> A variable-length encoding that uses one to four bytes for each character. It's the most commonly used encoding on the web and is backward-compatible with ASCII.</li>
              <li><strong>UTF-16:</strong> A fixed-length encoding that uses two or four bytes for each character. UTF-16 is commonly used in many programming environments, including JavaScript and Windows OS.</li>
              <li><strong>UTF-32:</strong> A fixed-length encoding that uses four bytes for every character. It provides a direct way to access the Unicode code points, but at the cost of increased memory usage.</li>
            </ul>
            <p>
              When choosing the right encoding for your application, it's important to consider factors such as file size, compatibility, and performance. UTF-8 is often the best choice for web development, as it's the most efficient for documents that contain mostly ASCII characters.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode and Emojis</h2>
            <p>
              Emojis are a popular part of modern digital communication, and they are represented in Unicode. Each emoji has a unique Unicode code point, and this allows them to be displayed consistently across platforms, operating systems, and devices.
            </p>
            <p>
              Emojis are typically composed of one or more code points. For example, the smiling face emoji "😊" has the Unicode code point U+1F60A. Some emojis, such as family emojis or skin tone variations, are made up of multiple code points.
            </p>
            <p>
              A great way to implement emojis is to use the character directly in your HTML or JavaScript, or by referencing the Unicode code point using escape sequences:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {`const smiley = "😊";`}
            </pre>
            <p>
              Alternatively, you can use the following escape sequence:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {`const smiley = "\\uD83D\\uDE0A";`}
            </pre>
            <p>
              When working with emojis, it's important to ensure that the system you are using supports the emoji characters. Some older devices and browsers may not display newer emojis.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode and Web Accessibility</h2>
            <p>
              Web accessibility is a key consideration when developing websites, and Unicode plays an important role in ensuring that content is accessible to users with different needs. For example, screen readers rely on Unicode to properly pronounce characters and symbols, including foreign language characters, special symbols, and emojis.
            </p>
            <p>
              By ensuring that your website uses Unicode encoding, you make it easier for assistive technologies to interpret and convey content to users with disabilities. It's crucial to use clear and simple markup, including correct character encoding (such as UTF-8), to avoid issues with misinterpreting text.
            </p>
            <p>
              Furthermore, many accessibility guidelines recommend providing alternative text for images and symbols, especially when using emojis or other non-text content. This allows screen readers to describe the content appropriately.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Common Unicode Problems</h2>
            <p>
              While Unicode provides a universal character encoding system, there are still some challenges when working with Unicode in different systems and environments. Some of the common issues include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Character Rendering Issues:</strong> Some older systems or browsers may not support certain Unicode characters or symbols. This can result in missing characters or question marks appearing instead of the intended symbol.</li>
              <li><strong>Encoding Mismatches:</strong> If a file or application is not using the correct encoding, it may display strange characters or garbled text. It's crucial to ensure that both the source and target systems use the same encoding, typically UTF-8.</li>
              <li><strong>Emoji Compatibility:</strong> Newer emojis may not be supported on older devices, leading to missing or incorrect displays. It's important to check compatibility when using emojis across different platforms.</li>
            </ul>
            <p>
              To mitigate these issues, it's essential to test your website or application in various environments and with different character sets. Regularly updating systems and browsers can help ensure compatibility with the latest Unicode characters and symbols.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode and Databases</h2>
            <p>
              When storing Unicode data in databases, it's important to choose the right character set to ensure that text is stored and retrieved correctly. Most modern databases, such as MySQL and PostgreSQL, support Unicode through character sets like UTF-8 and UTF-16.
            </p>
            <p>
              In MySQL, for example, you can specify the character set when creating a table:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) CHARACTER SET utf8mb4,
  bio TEXT CHARACTER SET utf8mb4
);`}
            </pre>
            <p>
              It's important to use the `utf8mb4` character set in MySQL to support the full range of Unicode characters, including emojis. Using the wrong character set can result in data loss or incorrect display of characters.
            </p>
            <p>
              Similarly, in PostgreSQL, you can use the `UTF8` character set to store Unicode data. Always ensure that the database encoding is correctly configured to handle Unicode input and output.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Best Practices for Working with Unicode</h2>
            <p>
              To ensure that your application works seamlessly with Unicode, it's important to follow some best practices:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Use UTF-8 Encoding:</strong> UTF-8 is the most widely supported and efficient encoding for Unicode on the web. Use it for web pages, databases, and APIs.</li>
              <li><strong>Test on Multiple Platforms:</strong> Make sure to test your application on various devices, browsers, and operating systems to ensure proper Unicode support.</li>
              <li><strong>Handle Special Characters:</strong> Pay attention to special characters like quotes, backslashes, and non-breaking spaces. Proper escaping and encoding can prevent errors in text processing.</li>
              <li><strong>Consider User Input:</strong> If your application accepts user input, ensure that it properly handles Unicode input, especially for non-Latin scripts and special symbols.</li>
            </ul>
            <p>
              By following these best practices, you can ensure that your application is Unicode-compliant and accessible to users across the globe.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode for Web Accessibility</h2>
            <p>
              Web accessibility is an essential aspect of modern web development. Unicode characters are critical in ensuring that users with different language preferences or visual needs can interact with the web effectively. Accessibility tools, such as screen readers, rely heavily on Unicode encoding to properly interpret and read out text for users who are visually impaired.
            </p>
            <p>
              Ensuring that text is displayed using Unicode enables screen readers to recognize and pronounce characters correctly. For example, if you are developing an e-commerce website, using Unicode for currency symbols like € or ¥ ensures that a screen reader will read out the correct currency during a shopping session.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Handling Right-to-Left (RTL) Languages</h2>
            <p>
              RTL (right-to-left) languages, such as Arabic, Hebrew, and Farsi, present a challenge for web developers when it comes to text rendering and layout. Unicode provides a solution by allowing proper support for these languages through bidirectional text support.
            </p>
            <p>
              In HTML, CSS, and JavaScript, developers can use the `dir="rtl"` attribute or the CSS `direction: rtl;` rule to specify the reading direction of text. When working with RTL languages, developers need to be mindful of text alignment, punctuation, and form layouts. It's also crucial to test RTL content across browsers and devices to ensure proper rendering.
            </p>
            <p>
              For example, the Arabic word "مرحبا" (which means "hello") should be displayed correctly with the `dir="rtl"` attribute in HTML:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {`<p dir="rtl">مرحبا</p>`}
            </pre>
            <p>
              When developing websites or applications for global audiences, it's essential to take into account the complexities of bidirectional text and ensure that both RTL and LTR (left-to-right) languages are supported seamlessly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">The Role of Unicode in SEO</h2>
            <p>
              Unicode plays a crucial role in Search Engine Optimization (SEO). Websites that support a wide range of characters, including non-Latin scripts and symbols, can reach a broader audience and rank higher in search engines across different countries and languages.
            </p>
            <p>
              For instance, if you're building a website that targets Russian-speaking users, using Unicode to display Cyrillic characters will improve the accessibility and visibility of your site. Unicode also enables web crawlers to index content accurately, regardless of the script or characters used.
            </p>
            <p>
              It's also essential for web developers to optimize Unicode-based content for keywords, titles, and meta tags that include multilingual characters. Using the correct character encoding ensures that search engines can accurately interpret and index your content, which is especially important for global websites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Character Encoding and Its Impact on Performance</h2>
            <p>
              While Unicode offers significant advantages in supporting multiple languages, its encoding can have an impact on web performance, especially in large-scale applications. Different Unicode encodings, such as UTF-8, UTF-16, and UTF-32, have different space requirements and performance implications.
            </p>
            <p>
              UTF-8, being variable-length, is more space-efficient for texts containing primarily ASCII characters, such as English. UTF-16 and UTF-32, on the other hand, may increase the size of documents containing primarily ASCII characters due to their use of more bytes per character.
            </p>
            <p>
              Web developers should consider the following when selecting a character encoding:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>UTF-8:</strong> Ideal for text-heavy websites and applications, especially those with a large international audience. It is widely used for web content and ensures compatibility with most modern browsers.</li>
              <li><strong>UTF-16:</strong> Better suited for text containing a wide range of Unicode characters, such as emojis or CJK scripts. It is commonly used in JavaScript and is more space-efficient than UTF-32.</li>
              <li><strong>UTF-32:</strong> A good choice for systems that need to process large amounts of non-Latin text. However, its use of 4 bytes per character makes it less efficient in terms of storage and transmission.</li>
            </ul>
            <p>
              To optimize performance, developers should assess their target audience, the languages and scripts they are using, and choose the appropriate encoding accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode in JSON and API Data</h2>
            <p>
              Unicode is often used in JSON and other data interchange formats to handle text data. Whether it's user-generated content, comments, or product descriptions, storing and transmitting Unicode data ensures that the application works seamlessly across different systems.
            </p>
            <p>
              When sending JSON data over APIs, Unicode characters are typically encoded in UTF-8. This ensures that characters from multiple languages, including emojis and symbols, can be transmitted without data loss or misinterpretation.
            </p>
            <p>
              For example, the following JSON object contains Unicode characters in UTF-8 encoding:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {`{
  "user": "张伟",
  "message": "Hello, world! 🌍"
}`}
            </pre>
            <p>
              In this example, the Chinese name "张伟" and the emoji "🌍" are both encoded in Unicode and transmitted as UTF-8. This allows the receiving application to accurately display the data, regardless of the system's locale or language settings.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode Support in Fonts</h2>
            <p>
              Unicode characters are rendered using fonts. However, not all fonts support the entire Unicode standard. For example, common fonts like Arial or Times New Roman may support Latin characters but may not include symbols, emojis, or CJK (Chinese, Japanese, Korean) characters.
            </p>
            <p>
              To ensure that your web pages display all Unicode characters correctly, it’s crucial to choose a font with extensive Unicode support. Some widely used fonts with broad Unicode coverage include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Noto Sans:</strong> A family of fonts designed by Google with comprehensive support for multiple scripts and symbols.</li>
              <li><strong>DejaVu Sans:</strong> An open-source font that covers a wide range of characters, including Greek, Cyrillic, and more.</li>
              <li><strong>Segoe UI Emoji:</strong> A font developed by Microsoft to render emojis on Windows systems.</li>
              <li><strong>Apple Color Emoji:</strong> A font used on Apple devices for rendering colorful emojis.</li>
            </ul>
            <p>
              By using a font with full Unicode support, you can ensure that all users, regardless of their device or system, can view your web content as intended.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode in Databases</h2>
            <p>
              Storing Unicode data in a database requires the correct configuration of character sets and collations. Many modern databases, such as MySQL and PostgreSQL, support Unicode through character sets like UTF-8 or UTF-16.
            </p>
            <p>
              When designing a database to store multilingual content, it's essential to choose the right character set (e.g., `utf8mb4` for MySQL, `UTF8` for PostgreSQL) to ensure that all characters, including emojis and non-Latin scripts, are stored correctly.
            </p>
            <p>
              For example, in MySQL, you would set the character set to `utf8mb4` to support the full range of Unicode characters, including emojis:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) CHARACTER SET utf8mb4,
  bio TEXT CHARACTER SET utf8mb4
);`}
            </pre>
            <p>
              By ensuring that the correct encoding is used for your database, you can prevent issues with storing or retrieving multilingual content.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Unicode in Programming Languages</h2>
            <p>
              Most modern programming languages support Unicode, allowing developers to handle text in different scripts and languages easily. However, the implementation and syntax for working with Unicode may vary between languages.
            </p>
            <p>
              In Python, Unicode strings are represented by default in Python 3. Strings are Unicode, and you can define them as follows:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {`text = "こんにちは"  # Hello in Japanese`}
            </pre>
            <p>
              In JavaScript, you can handle Unicode characters using escape sequences or directly within strings. For example:
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {`const hello = "こんにちは"; // Hello in Japanese`}
            </pre>
            <p>
              Understanding how Unicode is represented and processed in different programming languages is essential for handling multilingual data and ensuring compatibility across systems.
            </p>
          </div>

          
        </CardContent>
      </Card>
    </div>
  );
};

export default UnicodePage;
