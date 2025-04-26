import React from 'react';

const ScreenResolutionStatistics = () => {
  return (
    <div>
      <h2>Screen Resolution Statistics</h2>
      <p>
        <strong>Screen resolution</strong> refers to the number of pixels displayed on a screen. It is often represented as width × height, such as 1920x1080 pixels. The resolution of a screen directly affects the clarity and amount of content visible on the screen.
      </p>

      <h3>Common Screen Resolutions</h3>
      <p>
        Below are some of the most common screen resolutions used by desktop and mobile devices:
      </p>
      <ul>
        <li><strong>1920x1080</strong> - Full HD (1920 pixels wide and 1080 pixels high). Common in many laptops and monitors.</li>
        <li><strong>1366x768</strong> - HD (1366 pixels wide and 768 pixels high). A common resolution for budget laptops.</li>
        <li><strong>1440x900</strong> - WXGA+ (1440 pixels wide and 900 pixels high). Common in older monitors.</li>
        <li><strong>2560x1440</strong> - QHD (2560 pixels wide and 1440 pixels high). Common in higher-end monitors.</li>
        <li><strong>3840x2160</strong> - 4K Ultra HD (3840 pixels wide and 2160 pixels high). Increasingly popular in high-end monitors and TVs.</li>
        <li><strong>375x667</strong> - iPhone 6, 7, and 8 (375px wide and 667px high). A common resolution for older iPhones.</li>
        <li><strong>1080x1920</strong> - Mobile Full HD (1080px wide and 1920px high). Common on many smartphones.</li>
        <li><strong>414x896</strong> - iPhone X, 11 (414px wide and 896px high). A typical resolution for modern iPhones.</li>
      </ul>

      <h3>Why Screen Resolution Matters in Web Development</h3>
      <p>
        Knowing the common screen resolutions is important for web developers to ensure that websites are optimized for different screen sizes. Responsive web design aims to create layouts that look great across a variety of devices, from mobile phones to desktop monitors. Below are some reasons why screen resolution matters:
      </p>
      <ul>
        <li><strong>User Experience:</strong> If a website is not optimized for a particular screen resolution, elements may be cut off, or the website may appear distorted.</li>
        <li><strong>Mobile-first Design:</strong> More users access the internet on mobile devices than desktops, so websites must be optimized for smaller screen resolutions.</li>
        <li><strong>Performance:</strong> Larger screen resolutions often require higher-quality images and assets. Optimizing these assets can reduce load times and improve performance.</li>
        <li><strong>Content Layout:</strong> A website should adapt its content layout depending on the screen resolution to ensure that text, images, and buttons are properly displayed.</li>
      </ul>

      <h3>Detecting Screen Resolution in JavaScript</h3>
      <p>
        You can detect the screen resolution using JavaScript. The <code>window.screen</code> object provides information about the screen's width and height. Here's an example:
      </p>
      <pre>
        <code>{`
console.log("Screen width: " + window.screen.width);
console.log("Screen height: " + window.screen.height);
        `}</code>
      </pre>
      <p>
        This will output the screen's width and height in pixels. You can also detect the resolution available for the browser window, including the height of the taskbar and browser UI, using the <code>window.innerWidth</code> and <code>window.innerHeight</code> properties.
      </p>

      <h3>Common Screen Resolution Statistics (2023)</h3>
      <p>
        According to recent statistics, here are the most commonly used screen resolutions among desktop and mobile users:
      </p>
      <table>
        <thead>
          <tr>
            <th>Resolution</th>
            <th>Percentage of Users</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1920x1080 (Full HD)</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>1366x768 (HD)</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>1440x900 (WXGA+)</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>2560x1440 (QHD)</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>3840x2160 (4K)</td>
            <td>3%</td>
          </tr>
          <tr>
            <td>375x667 (iPhone 6/7/8)</td>
            <td>15%</td>
          </tr>
          <tr>
            <td>1080x1920 (Mobile Full HD)</td>
            <td>8%</td>
          </tr>
          <tr>
            <td>414x896 (iPhone X/11)</td>
            <td>9%</td>
          </tr>
        </tbody>
      </table>

      <h3>Responsive Design Tips</h3>
      <p>
        Here are some tips for ensuring your website looks great on all screen resolutions:
      </p>
      <ul>
        <li><strong>Use Media Queries:</strong> CSS media queries allow you to apply different styles based on the screen width. This helps create a responsive layout that adapts to different screen sizes.</li>
        <li><strong>Flexible Layouts:</strong> Use flexible units like percentages or viewport widths (vw) and heights (vh) instead of fixed pixel values to create fluid layouts.</li>
        <li><strong>Image Optimization:</strong> Use responsive images that adjust based on the user's screen size to improve performance. You can use the <code>srcset</code> attribute in the <code>img</code> tag.</li>
        <li><strong>Test on Multiple Devices:</strong> Regularly test your website on multiple devices with different screen resolutions to ensure your layout works well on all devices.</li>
      </ul>

      <h3>Further Reading</h3>
      <p>
        For more details on screen resolutions and responsive web design, check out these resources:
      </p>
      <ul>
        <li>
          <a
            href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3Schools - Media Queries
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
            target="_blank"
            rel="noopener noreferrer"
          >
            MDN - Media Queries
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ScreenResolutionStatistics;

