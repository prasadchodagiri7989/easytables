
import { Layout } from "@/components/Layout";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { GuidanceSection } from "@/components/GuidanceSection";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-2rem)] flex flex-col items-center justify-center p-6">
        <div className="glass-card p-8 max-w-3xl w-full animate-scale-in mb-8">
          <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Welcome to EasyTables
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Your all-in-one suite of mathematical calculators and educational tools
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/scientific" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Scientific Calculator</h3>
              <p className="text-sm text-gray-500">Advanced math operations</p>
            </a>
            <a href="/percentage" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Percentage Calculator</h3>
              <p className="text-sm text-gray-500">Calculate percentages easily</p>
            </a>
            <a href="/fraction" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Fraction Calculator</h3>
              <p className="text-sm text-gray-500">Work with fractions</p>
            </a>
            <a href="/average" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Average Calculator</h3>
              <p className="text-sm text-gray-500">Find means and averages</p>
            </a>
            <a href="/unit-converter" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Unit Converter</h3>
              <p className="text-sm text-gray-500">Convert between units</p>
            </a>
            <a href="/grade" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Grade Calculator</h3>
              <p className="text-sm text-gray-500">Calculate your grades</p>
            </a>
            <a href="/gpa" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">GPA Calculator</h3>
              <p className="text-sm text-gray-500">Calculate your GPA</p>
            </a>
            <a href="/final-grade" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Final Grade Calculator</h3>
              <p className="text-sm text-gray-500">What you need on your final</p>
            </a>
            <a href="/mortgage" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Mortgage Calculator</h3>
              <p className="text-sm text-gray-500">Calculate mortgage payments</p>
            </a>
            <a href="/compound-interest" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Compound Interest</h3>
              <p className="text-sm text-gray-500">Calculate investment growth</p>
            </a>
            <a href="/bmi" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">BMI Calculator</h3>
              <p className="text-sm text-gray-500">Calculate your BMI</p>
            </a>
          </div>
          
          <GuidanceSection title="How to use Calculator Tools">
            <p>Our calculator tools are designed to be intuitive and easy to use:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Scientific Calculator</strong>: Use for complex mathematical operations. Supports trigonometric functions, logarithms, exponents, and more.</li>
              <li><strong>Percentage Calculator</strong>: Calculate percentages of values or find what percentage one number is of another.</li>
              <li><strong>Fraction Calculator</strong>: Add, subtract, multiply, or divide fractions with automatic simplification.</li>
              <li><strong>Average Calculator</strong>: Enter a set of numbers to find the mean, median, and mode.</li>
              <li><strong>Unit Converter</strong>: Convert between different units of measurement across various categories.</li>
              <li><strong>Grade Calculator</strong>: Enter your assignment scores and weights to calculate your current grade.</li>
              <li><strong>GPA Calculator</strong>: Calculate your GPA by entering course credits and grades.</li>
              <li><strong>Final Grade Calculator</strong>: Determine what score you need on your final exam to achieve your desired grade.</li>
              <li><strong>Mortgage Calculator</strong>: Calculate monthly mortgage payments based on principal, interest rate, and term.</li>
              <li><strong>Compound Interest Calculator</strong>: Project investment growth with different compounding frequencies.</li>
              <li><strong>BMI Calculator</strong>: Calculate your Body Mass Index based on height and weight.</li>
            </ul>
          </GuidanceSection>
        </div>
        
        <div className="glass-card p-8 max-w-3xl w-full animate-scale-in mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            PDF Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <a href="/image-to-pdf" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Image to PDF</h3>
              <p className="text-sm text-gray-500">Convert images to PDF format</p>
            </a>
            <a href="/jpg-to-pdf" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">JPG to PDF</h3>
              <p className="text-sm text-gray-500">Convert JPG files to PDF</p>
            </a>
            <a href="/png-to-pdf" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">PNG to PDF</h3>
              <p className="text-sm text-gray-500">Convert PNG files to PDF</p>
            </a>
            <a href="/pdf-viewer" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">PDF Viewer</h3>
              <p className="text-sm text-gray-500">View and interact with PDFs</p>
            </a>
          </div>
          
          <GuidanceSection title="How to use PDF Tools">
            <p>Our PDF tools help you work with PDF documents efficiently:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Image to PDF</strong>: Upload one or more image files (multiple formats supported) to convert them into a single PDF document. Drag and drop or use the file selection dialog.</li>
              <li><strong>JPG to PDF</strong>: Specifically optimized for JPG images. Upload your JPG files and convert them to a professional-looking PDF. Multiple JPGs will be converted to multiple pages.</li>
              <li><strong>PNG to PDF</strong>: Convert PNG images with transparency to PDF format. Great for diagrams, logos, and screenshots that need to maintain quality.</li>
              <li><strong>PDF Viewer</strong>: View PDF documents directly in your browser. Supports zooming, page navigation, and text selection without downloading the file.</li>
            </ul>
            <p className="mt-2">All PDF tools work entirely in your browser - no files are uploaded to our servers, ensuring your data privacy and security.</p>
          </GuidanceSection>
        </div>
        
        <div className="glass-card p-8 max-w-3xl w-full animate-scale-in">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Online Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/current-time" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Current Time</h3>
              <p className="text-sm text-gray-500">Display current date and time</p>
            </a>
            <a href="/stopwatch" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Stopwatch</h3>
              <p className="text-sm text-gray-500">Time events with precision</p>
            </a>
            <a href="/alarm-clock" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Alarm Clock</h3>
              <p className="text-sm text-gray-500">Set alarms with notifications</p>
            </a>
            <a href="/todo-list" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">To-Do List</h3>
              <p className="text-sm text-gray-500">Manage your tasks</p>
            </a>
            <a href="/random-number" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Random Number Generator</h3>
              <p className="text-sm text-gray-500">Generate random numbers</p>
            </a>
            <a href="/chart-maker" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Chart Maker</h3>
              <p className="text-sm text-gray-500">Create various chart types</p>
            </a>
            <a href="/countdown" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Countdown Timer</h3>
              <p className="text-sm text-gray-500">Count down to events</p>
            </a>
            <a href="/password-generator" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Password Generator</h3>
              <p className="text-sm text-gray-500">Create secure passwords</p>
            </a>
            <a href="/text-editor" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Text Editor</h3>
              <p className="text-sm text-gray-500">Edit and format text</p>
            </a>
          </div>
          
          <GuidanceSection title="How to use Online Tools">
            <p>Our collection of online tools provides everyday utilities for various tasks:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Current Time</strong>: Displays accurate date and time based on your local timezone. Updates automatically in real-time.</li>
              <li><strong>Stopwatch</strong>: Precision timer with lap recording functionality. Start, stop, reset, and record lap times with millisecond precision.</li>
              <li><strong>Alarm Clock</strong>: Set multiple alarms with custom labels. Receive browser notifications when alarms trigger.</li>
              <li><strong>To-Do List</strong>: Create, edit, and manage tasks. Mark items as complete, set priorities, and organize your daily activities.</li>
              <li><strong>Random Number Generator</strong>: Generate random numbers within custom ranges. Options for integers, decimals, and unique number sets.</li>
              <li><strong>Chart Maker</strong>: Create professional charts and graphs from your data. Supports bar, line, pie, and other chart types with customization options.</li>
              <li><strong>Countdown Timer</strong>: Set timers for specific durations or count down to important dates and events.</li>
              <li><strong>Password Generator</strong>: Create strong, secure passwords with customizable length and character sets. Copy directly to clipboard.</li>
              <li><strong>Text Editor</strong>: Format and edit text with basic formatting options. Save and export your work in various formats.</li>
            </ul>
            <p className="mt-2">Most online tools save your data in your browser's local storage, so your information persists between sessions while keeping your data private.</p>
          </GuidanceSection>
          
          <div className="mt-6 text-center">
            <Link to="#" className="text-primary hover:underline inline-flex items-center">
              See all tools in the sidebar <ArrowRightIcon className="ml-1" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
