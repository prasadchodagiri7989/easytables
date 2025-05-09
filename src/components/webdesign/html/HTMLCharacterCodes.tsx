import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

const HtmlCharacterCodes: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto dark:text-white">
           <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/web/html">HTML Tools</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>HTML Character Codes</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>HTML Character Codes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed dark:text-white">
          {/* Introduction */}
          <p>
            HTML character codes (or HTML entities) are used to display characters that are reserved in HTML
            or characters that might not be easily typed. These codes allow you to display special characters 
            without confusing the browser or conflicting with HTML syntax.
          </p>

          {/* Common Codes Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Common HTML Character Codes</h2>
            <div className="space-y-6">

              {/* Ampersand */}
              <div>
                <h3 className="text-sm font-semibold">&amp; (Ampersand)</h3>
                <p>
                  The ampersand (<strong>&amp;</strong>) character is used in HTML code to represent "AND." Since 
                  the ampersand is a special character, use its character code to display it safely.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
                  <code>&amp;amp;</code>
                </pre>
                <p>It will render as: &amp;</p>
              </div>

              {/* Check Mark */}
              <div>
                <h3 className="text-sm font-semibold">✓ (Check Mark)</h3>
                <p>
                  The check mark (<strong>✓</strong>) symbol can be inserted using its character code.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
                  <code>&amp;#10003;</code>
                </pre>
                <p>It will render as: ✓</p>
              </div>

              {/* Copyright */}
              <div>
                <h3 className="text-sm font-semibold">© (Copyright Symbol)</h3>
                <p>
                  To display a copyright symbol (<strong>©</strong>), use the following character code.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
                  <code>&amp;copy;</code>
                </pre>
                <p>It will render as: ©</p>
              </div>

              {/* Euro */}
              <div>
                <h3 className="text-sm font-semibold">€ (Euro Symbol)</h3>
                <p>
                  The Euro symbol (<strong>€</strong>) is represented by its character code.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
                  <code>&amp;euro;</code>
                </pre>
                <p>It will render as: €</p>
              </div>

              {/* Heart */}
              <div>
                <h3 className="text-sm font-semibold">♥ (Heart Symbol)</h3>
                <p>
                  Use this character code to display a heart symbol (<strong>♥</strong>).
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
                  <code>&amp;#9829;</code>
                </pre>
                <p>It will render as: ♥</p>
              </div>

              {/* Quotation Mark */}
              <div>
                <h3 className="text-sm font-semibold">“ (Quotation Mark)</h3>
                <p>
                  A left double quotation mark (<strong>“</strong>) can be displayed with this code.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
                  <code>&amp;#8220;</code>
                </pre>
                <p>It will render as: “</p>
              </div>

              {/* Space */}
              <div>
                <h3 className="text-sm font-semibold">(Space)</h3>
                <p>
                  To represent a space in HTML using a character code:
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
                  <code>&amp;nbsp;</code>
                </pre>
                <p>It will render as a regular space.</p>
              </div>

              {/* Trademark */}
              <div>
                <h3 className="text-sm font-semibold">™ (Trademark Symbol)</h3>
                <p>
                  The trademark symbol (<strong>™</strong>) can be displayed using this character code.
                </p>
                <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
                  <code>&amp;trade;</code>
                </pre>
                <p>It will render as: ™</p>
              </div>

            </div>
          </div>

          {/* Table of Codes */}
          <div>
            <h2 className="text-lg font-semibold mb-2 ">List of Common HTML Character Codes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300 ">
                <thead className="bg-gray-100 dark:text-black">
                  <tr>
                    <th className="border border-gray-300 p-2">Character</th>
                    <th className="border border-gray-300 p-2">HTML Entity Code</th>
                    <th className="border border-gray-300 p-2">Render</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">&amp;</td>
                    <td className="border border-gray-300 p-2">&amp;amp;</td>
                    <td className="border border-gray-300 p-2">&amp;</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">✓</td>
                    <td className="border border-gray-300 p-2">&amp;#10003;</td>
                    <td className="border border-gray-300 p-2">✓</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">©</td>
                    <td className="border border-gray-300 p-2">&amp;copy;</td>
                    <td className="border border-gray-300 p-2">©</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">€</td>
                    <td className="border border-gray-300 p-2">&amp;euro;</td>
                    <td className="border border-gray-300 p-2">€</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">♥</td>
                    <td className="border border-gray-300 p-2">&amp;#9829;</td>
                    <td className="border border-gray-300 p-2">♥</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">“</td>
                    <td className="border border-gray-300 p-2">&amp;#8220;</td>
                    <td className="border border-gray-300 p-2">“</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">(space)</td>
                    <td className="border border-gray-300 p-2">&amp;nbsp;</td>
                    <td className="border border-gray-300 p-2">(space)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">™</td>
                    <td className="border border-gray-300 p-2">&amp;trade;</td>
                    <td className="border border-gray-300 p-2">™</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

         

          {/* Further Resources */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Further Resources</h2>
            <p>
              For a full list and more detailed information, you can visit:{" "}
              <a href="https://www.rapidtables.com/web/html/html-codes.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                HTML Character Codes - RapidTables
              </a>
            </p>
          </div>
          <div>
  <h2 className="text-lg font-semibold mb-2">Why Use HTML Character Codes?</h2>
  <p>
    HTML character codes are essential when you want to display reserved characters or symbols that might not appear properly in a browser. For example, characters like &lt;, &gt;, and &amp; have specific meanings in HTML and must be encoded to appear as text. Using these codes helps prevent errors and ensures that your content is interpreted correctly by the browser.
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">Where HTML Entities Are Commonly Used</h2>
  <p>
    HTML character entities are used across various scenarios in web development and design:
  </p>
  <ul className="list-disc pl-5 my-2">
    <li><strong>In text content:</strong> To display reserved characters like quotes, ampersands, and angle brackets.</li>
    <li><strong>In form inputs:</strong> Especially when dynamically displaying user input or form values in a safe manner.</li>
    <li><strong>In code examples:</strong> When writing tutorials or documentation, you’ll often need to use entities to display code correctly.</li>
    <li><strong>In meta tags and SEO:</strong> To ensure that character data in titles, descriptions, and Open Graph tags render properly.</li>
  </ul>

  <h2 className="text-lg font-semibold mt-6 mb-2">Named vs Numeric Entities</h2>
  <p>
    HTML entities can be written in two main ways: named and numeric.
  </p>
  <ul className="list-disc pl-5 my-2">
    <li><strong>Named Entities:</strong> These use predefined names (like <code>&amp;copy;</code> or <code>&amp;lt;</code>). They are easy to remember and are supported by all modern browsers.</li>
    <li><strong>Numeric Entities:</strong> These use the Unicode code point of the character (e.g., <code>&amp;#169;</code> for © or <code>&amp;#60;</code> for &lt;). They’re useful when no named entity exists or for less common characters.</li>
  </ul>

  <h2 className="text-lg font-semibold mt-6 mb-2">Tips for Using Character Codes in HTML</h2>
  <ul className="list-disc pl-5 my-2">
    <li>Always use character codes when you need to include HTML reserved symbols in content.</li>
    <li>Use semantic HTML when appropriate, but fall back on entities when symbols are necessary.</li>
    <li>Be aware that not all entities are supported in every email client—stick with the most common for email templates.</li>
    <li>Test your output to make sure the entity renders correctly, especially on multilingual or internationalized pages.</li>
  </ul>

  <h2 className="text-lg font-semibold mt-6 mb-2">Popular Symbols and Their Uses</h2>
  <p>
    Here's a closer look at some of the most popular HTML character codes and their typical applications:
  </p>
  <ul className="list-disc pl-5 my-2">
    <li><strong>&amp;lt; and &amp;gt;:</strong> Used in blogs, tutorials, and documentation to display code or mathematical expressions.</li>
    <li><strong>&amp;copy;:</strong> Often used in footers to denote copyright.</li>
    <li><strong>&amp;mdash; and &amp;ndash;:</strong> Em dashes and en dashes for editorial text formatting.</li>
    <li><strong>&amp;hellip;:</strong> An ellipsis character (…) commonly used in UI/UX copy.</li>
    <li><strong>&amp;trade;:</strong> To indicate trademarks in legal or commercial text.</li>
    <li><strong>&amp;hearts;, &amp;spades;, &amp;clubs;, &amp;diams;:</strong> Great for card games or playful designs.</li>
  </ul>

  <h2 className="text-lg font-semibold mt-6 mb-2">Accessibility Considerations</h2>
  <p>
    When using HTML entities, accessibility is also a factor. Screen readers will interpret common named entities (like © or ™) correctly, but overuse or using obscure symbols may confuse users. Always consider the meaning and necessity of symbols in your content.
  </p>
  <p>
    For accessibility:
  </p>
  <ul className="list-disc pl-5 my-2">
    <li>Use semantic HTML where possible instead of relying purely on entities.</li>
    <li>Test content with screen readers if you’re using a lot of symbols or special characters.</li>
    <li>Provide tooltips or ARIA labels for characters that convey important meaning.</li>
  </ul>

  <h2 className="text-lg font-semibold mt-6 mb-2">Unicode Support in Modern Browsers</h2>
  <p>
    Most modern browsers have excellent support for Unicode characters, meaning you can often paste symbols directly into HTML without needing an entity. However, to ensure compatibility and avoid parsing issues—especially in dynamic content or legacy systems—character codes remain a robust and safe solution.
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">Copying and Converting HTML Entities</h2>
  <p>
    There are many online tools that allow you to convert symbols into HTML character codes or decode entities into readable text. Some useful sites include:
  </p>
  

  
</div>

<div>
  <h2 className="text-lg font-semibold mt-6 mb-2">HTML Character Codes in Internationalization (i18n)</h2>
  <p>
    When building websites that support multiple languages, HTML character codes become even more essential. Many languages include accented characters, symbols, and punctuation marks that don’t appear in standard English. Using numeric character references can ensure these characters display correctly across all browsers and systems.
  </p>
  <p>
    For example:
  </p>
  <ul className="list-disc pl-5 my-2">
    <li><code>&amp;eacute;</code> for é</li>
    <li><code>&amp;ntilde;</code> for ñ</li>
    <li><code>&amp;uuml;</code> for ü</li>
  </ul>
  <p>
    This is particularly useful when the content is dynamically generated or sourced from a CMS where encoding might be inconsistent.
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">HTML Entities and Character Encoding (UTF-8)</h2>
  <p>
    In modern web development, UTF-8 is the standard character encoding for web pages, as it supports nearly every character and symbol in every language. When using UTF-8, you can often type special characters directly into your HTML. However, using entities adds an extra layer of safety, especially in older systems or when parsing HTML as plain text.
  </p>
  <p>
    Declaring the correct charset in your HTML <code>&lt;head&gt;</code> section ensures that all characters and entities render properly:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
    <code>{`<meta charset="UTF-8">`}</code>
  </pre>

  <h2 className="text-lg font-semibold mt-6 mb-2">Using Entities in JavaScript & JSX</h2>
  <p>
    When working in JavaScript or React JSX files, remember that HTML entities must be escaped properly. You can either use their Unicode form (e.g., <code>\u00A9</code> for ©) in JavaScript strings or embed them as raw strings in JSX:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
    <code>{`const symbol = "\\u00A9"; // JavaScript escape code\nconst jsx = <span>&copy;</span>; // JSX entity`}</code>
  </pre>
  <p>
    If you're dynamically inserting symbols via JavaScript, consider using Unicode instead of raw HTML entities for better control and rendering performance.
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">Combining Symbols with CSS</h2>
  <p>
    HTML character codes are often used alongside CSS to create visual effects or styled elements, especially for UI icons or decorative text. For instance, the heart character (♥) can be styled using color, size, or animations:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
    <code>{`.heart {\n  color: red;\n  font-size: 2rem;\n  animation: pulse 1s infinite;\n}`}</code>
  </pre>
  <p>
    You can combine them with pseudo-elements in CSS for decorative purposes:
  </p>
  <pre className="bg-gray-100 p-4 rounded text-sm dark:text-black">
    <code>{`.button::after {\n  content: '\\2665'; /* Unicode for ♥ */\n  margin-left: 8px;\n}`}</code>
  </pre>

  <h2 className="text-lg font-semibold mt-6 mb-2">Avoiding Common Mistakes</h2>
  <p>
    While HTML entities are useful, there are some common pitfalls to avoid:
  </p>
  <ul className="list-disc pl-5 my-2">
    <li>Don’t forget the semicolon (<code>;</code>) at the end of the entity code. Without it, the browser might not render it correctly.</li>
    <li>Use character codes for reserved HTML characters like <code>&lt;</code>, <code>&gt;</code>, and <code>&amp;</code> in all places except inside JavaScript or JSX logic.</li>
    <li>Don’t double encode. If you already use <code>&amp;copy;</code>, don’t wrap it again inside another encoder or it may render incorrectly as literal code.</li>
  </ul>

  <h2 className="text-lg font-semibold mt-6 mb-2">Fun with Special Characters</h2>
  <p>
    HTML character codes can also be used creatively for design elements or UI feedback:
  </p>
  <ul className="list-disc pl-5 my-2">
    <li><code>&#9888;</code> – ⚠️ Warning Symbol</li>
    <li><code>&#9993;</code> – ✉️ Email Icon</li>
    <li><code>&#128640;</code> – 🚀 Rocket (emoji)</li>
    <li><code>&#9733;</code> – ★ Star</li>
    <li><code>&#9658;</code> – ▶ Play Button</li>
  </ul>
  <p>
    These can be inserted in headings, buttons, or cards to enhance the user experience without relying on images or external icons.
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">Entities in Email Templates</h2>
  <p>
    HTML emails often require entities because many email clients have outdated rendering engines. Always use character codes for symbols in email HTML. For instance, use <code>&amp;nbsp;</code> for spacing, <code>&amp;copy;</code> for footers, and avoid relying on emoji or custom fonts that might not load.
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">Printable Cheat Sheet</h2>
  <p>
    If you’re working offline or frequently using character codes, keep a printable cheat sheet of common HTML entities at your desk. It can save time and prevent errors.
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">HTML Entities vs SVG Icons vs Font Icons</h2>
  <p>
    Developers often ask when to use HTML character codes versus other visual options like SVG or icon fonts (e.g., Font Awesome).
  </p>
  <ul className="list-disc pl-5 my-2">
    <li><strong>Use HTML entities</strong> when you need lightweight symbols or typographic characters.</li>
    <li><strong>Use SVG icons</strong> when you need complex, scalable, and fully customizable graphics.</li>
    <li><strong>Use icon fonts</strong> for consistent UI kits, especially when integrating with design systems or CSS frameworks.</li>
  </ul>

  <h2 className="text-lg font-semibold mt-6 mb-2">Helpful Keyboard Shortcuts for Developers</h2>
  <p>
    Memorizing key entities can improve productivity. Here are a few that are worth knowing by heart:
  </p>
  <ul className="list-disc pl-5 my-2">
    <li><code>&amp;amp;</code> = &amp;</li>
    <li><code>&amp;lt;</code> = &lt;</li>
    <li><code>&amp;gt;</code> = &gt;</li>
    <li><code>&amp;nbsp;</code> = (non-breaking space)</li>
    <li><code>&amp;copy;</code> = ©</li>
    <li><code>&amp;reg;</code> = ®</li>
  </ul>
</div>
<h2 className="text-lg font-semibold mt-6 mb-2">Conclusion</h2>
  <p>
    HTML character codes are a powerful part of HTML that give you full control over how text is rendered in the browser. Whether you’re writing documentation, displaying special characters, or encoding symbols in SEO tags, these codes offer compatibility, safety, and precision.
  </p>
  <p>
    By learning and using them properly, you enhance both the user experience and technical stability of your web pages. Bookmark common entities and keep reference guides handy—especially when working on multilingual content or with dynamic user-generated text.
  </p>

        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlCharacterCodes;