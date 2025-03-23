import { Layout } from "@/components/Layout";
import { ArrowRightIcon, HelpCircle } from "lucide-react";
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
          
          <GuidanceSection title="How to Use Calculators">
            <p>Our calculators are designed to be intuitive and easy to use:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Simply select the calculator that matches your needs</li>
              <li>Enter your values in the provided input fields</li>
              <li>Click the calculate button to get your results instantly</li>
              <li>Each calculator includes specific instructions on its page</li>
              <li>Results can be copied to clipboard or downloaded as needed</li>
            </ul>
            <p className="mt-2">For more complex calculators, step-by-step guides are included on each page.</p>
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
          
          <GuidanceSection title="How to Use PDF Tools">
            <p>Our PDF tools help you work with PDF files efficiently:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Convert images to PDF by uploading or dragging and dropping your files</li>
              <li>Multiple images can be combined into a single PDF document</li>
              <li>JPG and PNG converters offer specialized optimization for those formats</li>
              <li>The PDF Viewer allows you to read PDF files directly in your browser</li>
              <li>All processing happens locally on your device - your files are never uploaded to any server</li>
            </ul>
            <p className="mt-2">Processing time depends on the size and number of files you're converting.</p>
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
          
          <GuidanceSection title="How to Use Online Tools">
            <p>Our online utility tools are designed to be straightforward and useful:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Time tools like Current Time, Stopwatch, and Alarm Clock are synced with your device</li>
              <li>Productivity tools like To-Do Lists save data to your browser's local storage</li>
              <li>The Random Number Generator creates truly random numbers within your specified range</li>
              <li>Chart Maker provides various visualization options for your data</li>
              <li>Text tools process your input instantly without any external server connections</li>
            </ul>
            <p className="mt-2">All online tools work offline after initial load, perfect for reliable access anywhere.</p>
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
