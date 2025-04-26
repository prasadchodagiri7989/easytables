import React from 'react';

const HTMLCharacterCodes = () => {
  return (
    <div>
      <h2>HTML Character Codes</h2>
      <p>
        HTML character codes (or HTML entities) are used to display characters that are reserved in HTML or characters that might not be easily typed. These codes allow you to display special characters in HTML without confusing the browser or conflicting with HTML syntax.
      </p>

      <h3>Common HTML Character Codes</h3>

      <h4>&amp; (Ampersand)</h4>
      <p>
        The ampersand (&) character is used to represent the logical AND operator in HTML code. Since the ampersand is a special character in HTML (used to start character entities), you need to use the character code to display it:
      </p>
      <pre>
        <code>&amp;</code>
      </pre>
      <p>
        It will render as: <strong>&amp;</strong>
      </p>

      <h4>& (HTML code for Ampersand)</h4>
      <p>
        In addition to the general ampersand, you can use its corresponding character code, which is <code>&amp;</code>, to display the & symbol in HTML.
      </p>

      <h4>&#10003; (Check Mark)</h4>
      <p>
        The check mark (✓) symbol can be inserted into an HTML page using its character code:
      </p>
      <pre>
        <code>&#10003;</code>
      </pre>
      <p>
        It will render as: <strong>✓</strong>
      </p>

      <h4>&#169; (Copyright Symbol)</h4>
      <p>
        The copyright symbol (©) can be inserted with the following HTML character code:
      </p>
      <pre>
        <code>&#169;</code>
      </pre>
      <p>
        It will render as: <strong>©</strong>
      </p>

      <h4>&#8364; (Euro Symbol)</h4>
      <p>
        The Euro symbol (€) is represented by its character code:
      </p>
      <pre>
        <code>&#8364;</code>
      </pre>
      <p>
        It will render as: <strong>€</strong>
      </p>

      <h4>&#9829; (Heart Symbol)</h4>
      <p>
        To display a heart symbol (♥) in HTML, use the following character code:
      </p>
      <pre>
        <code>&#9829;</code>
      </pre>
      <p>
        It will render as: <strong>♥</strong>
      </p>

      <h4>&#8220; (Quotation Mark)</h4>
      <p>
        A left double quotation mark (“) can be displayed with the HTML character code:
      </p>
      <pre>
        <code>&#8220;</code>
      </pre>
      <p>
        It will render as: <strong>“</strong>
      </p>

      <h4>&#32; (Space)</h4>
      <p>
        To represent a space in HTML using a character code, you can use:
      </p>
      <pre>
        <code>&#32;</code>
      </pre>
      <p>
        It will render as a regular space: <strong> </strong>
      </p>

      <h4>&#8482; (Trademark Symbol)</h4>
      <p>
        The trademark symbol (™) can be represented using this character code:
      </p>
      <pre>
        <code>&#8482;</code>
      </pre>
      <p>
        It will render as: <strong>™</strong>
      </p>

      <h3>List of Common HTML Character Codes</h3>
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>HTML Entity Code</th>
            <th>Render</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ampersand</td>
            <td>&amp;</td>
            <td>&amp;</td>
          </tr>
          <tr>
            <td>Check Mark</td>
            <td>&#10003;</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Copyright</td>
            <td>&#169;</td>
            <td>©</td>
          </tr>
          <tr>
            <td>Euro</td>
            <td>&#8364;</td>
            <td>€</td>
          </tr>
          <tr>
            <td>Heart</td>
            <td>&#9829;</td>
            <td>♥</td>
          </tr>
          <tr>
            <td>Quotation Mark</td>
            <td>&#8220;</td>
            <td>“</td>
          </tr>
          <tr>
            <td>Space</td>
            <td>&#32;</td>
            <td> </td>
          </tr>
          <tr>
            <td>Trademark</td>
            <td>&#8482;</td>
            <td>™</td>
          </tr>
        </tbody>
      </table>

      <h3>Conclusion</h3>
      <p>
        HTML character codes are essential for displaying special characters or symbols that would otherwise conflict with HTML syntax. They are widely used to include characters such as ampersands, copyright symbols, or even more complex characters like the Euro and heart symbols.
      </p>

      <h3>Further Resources</h3>
      <p>
        For more detailed information and other character codes, you can visit:
      </p>
      <ul>
        <li>
          <a
            href="https://www.rapidtables.com/web/html/html-codes.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML Character Codes - RapidTables
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HTMLCharacterCodes;
