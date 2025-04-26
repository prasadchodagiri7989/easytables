const HTMLComments = () => {
    return (
      <div>
        <h2>HTML Comments</h2>
        <p>
          HTML comments are used to insert notes or explanations within the HTML code. These comments are not visible to users when viewing the web page in a browser but can help developers understand the structure of the code. 
        </p>
  
        <h3>Syntax of HTML Comments</h3>
        <p>
          An HTML comment begins with <code>&lt;!--</code> and ends with <code>--&gt;</code>. Anything between these markers will be treated as a comment and will not be rendered on the web page.
        </p>
  
        <h4>Basic Example</h4>
        <pre>
          <code>{`<!-- This is a comment -->`}</code>
        </pre>
        <p>
          In the example above, the text between <code>&lt;!--</code> and <code>--&gt;</code> will not be displayed in the browser.
        </p>
  
        <h3>Usage of HTML Comments</h3>
        <p>
          HTML comments are useful in several situations:
        </p>
        <ul>
          <li>Providing explanations about the code for future reference.</li>
          <li>Temporarily hiding portions of the code during testing or development.</li>
          <li>Adding notes on the purpose or functionality of specific sections of HTML code.</li>
        </ul>
  
        <h4>Example: Commenting Out HTML Code</h4>
        <p>
          Comments can be used to hide elements temporarily without deleting the code. For example:
        </p>
        <pre>
          <code>{`<!-- <div>This section is under development</div> -->`}</code>
        </pre>
        <p>
          In the above example, the <code>&lt;div&gt;</code> element will not appear on the webpage because it is commented out.
        </p>
  
        <h3>Multi-Line Comments</h3>
        <p>
          You can use HTML comments to comment out multiple lines of code, making it easier to explain large sections or temporarily disable parts of your code.
        </p>
        <pre>
          <code>{`<!--
  <h1>Title</h1>
  <p>This section is under construction.</p>
  -->`}</code>
        </pre>
        <p>
          In this example, everything between <code>&lt;!--</code> and <code>--&gt;</code> is commented out, and none of it will be displayed on the web page.
        </p>
  
        <h3>HTML Comments in HTML5</h3>
        <p>
          HTML comments work in HTML5 just as they do in previous versions of HTML. However, in HTML5, comments are often used to include feature detection or conditional HTML statements, which are sometimes essential in ensuring compatibility across different browsers.
        </p>
  
        <h4>Example: Conditional Comments for Internet Explorer</h4>
        <p>
          Internet Explorer (IE) supports conditional comments that allow you to target specific versions of the browser:
        </p>
        <pre>
          <code>{`<!--[if lt IE 9]>
  <script src="html5shiv.js"></script>
  <![endif]-->`}</code>
        </pre>
        <p>
          In this example, the code within the <code>&lt;!--</code> and <code>--&gt;</code> will only be executed if the user is running a version of Internet Explorer earlier than version 9.
        </p>
  
        <h3>Best Practices for Using HTML Comments</h3>
        <ul>
          <li>Do not overuse comments. If your code is well-structured and self-explanatory, comments are unnecessary.</li>
          <li>Use comments to explain the "why" behind a piece of code, not the "what". The code itself should explain "what" it does.</li>
          <li>Always remove unnecessary comments before moving your project to production to reduce unnecessary clutter in your HTML files.</li>
        </ul>
  
        <h3>Common Mistakes to Avoid with HTML Comments</h3>
        <ul>
          <li>
            <strong>Missing the closing comment tag:</strong> Always ensure that you close your comment properly with <code>--&gt;</code>. Missing the closing tag can cause issues with rendering HTML properly.
          </li>
          <li>
            <strong>Commenting out large sections of code:</strong> While comments are helpful, commenting out too much code can make it difficult to read and maintain your project.
          </li>
        </ul>
  
        <h3>Conclusion</h3>
        <p>
          HTML comments are a simple yet powerful tool for adding context, explanations, and temporary changes in your HTML code. However, it’s important to use them wisely and follow best practices to maintain clean, readable code.
        </p>
  
        <h3>Further Resources</h3>
        <p>
          For more information on HTML comments, check out the following resources:
        </p>
        <ul>
          <li>
            <a
              href="https://www.rapidtables.com/web/html/html-comment.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML Comments - RapidTables
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default HTMLComments;
  