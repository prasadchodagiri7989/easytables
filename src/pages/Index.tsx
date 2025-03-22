
import { Layout } from "@/components/Layout";
import { ArrowRightIcon, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GuidanceSection } from "@/components/GuidanceSection";

const Index = () => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const toggleGuidance = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
            <div className="flex flex-col">
              <a href="/scientific" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Scientific Calculator</h3>
                <p className="text-sm text-gray-500">Advanced math operations</p>
              </a>
              <button 
                onClick={() => toggleGuidance("scientific")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections.scientific ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.scientific && (
                <GuidanceSection title="How to Use Scientific Calculator">
                  <p>The Scientific Calculator provides advanced mathematical functions beyond basic arithmetic:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Use the number pad for basic input</li>
                    <li>Access trigonometric functions (sin, cos, tan)</li>
                    <li>Calculate logarithms and exponentials</li>
                    <li>Work with square roots and powers</li>
                    <li>Switch between degrees and radians</li>
                    <li>Perform memory operations</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/percentage" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Percentage Calculator</h3>
                <p className="text-sm text-gray-500">Calculate percentages easily</p>
              </a>
              <button 
                onClick={() => toggleGuidance("percentage")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections.percentage ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.percentage && (
                <GuidanceSection title="How to Use Percentage Calculator">
                  <p>The Percentage Calculator helps with various percentage calculations:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Find what percent one number is of another</li>
                    <li>Calculate percent increases and decreases</li>
                    <li>Find the value after adding/subtracting a percentage</li>
                    <li>Calculate the original value before a percentage change</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/fraction" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Fraction Calculator</h3>
                <p className="text-sm text-gray-500">Work with fractions</p>
              </a>
              <button 
                onClick={() => toggleGuidance("fraction")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections.fraction ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.fraction && (
                <GuidanceSection title="How to Use Fraction Calculator">
                  <p>The Fraction Calculator helps with all fraction operations:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Add, subtract, multiply, and divide fractions</li>
                    <li>Convert fractions to decimals and percentages</li>
                    <li>Find the lowest common denominator</li>
                    <li>Simplify fractions to their lowest terms</li>
                    <li>Compare fractions to determine which is larger</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/average" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Average Calculator</h3>
                <p className="text-sm text-gray-500">Find means and averages</p>
              </a>
              <button 
                onClick={() => toggleGuidance("average")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections.average ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.average && (
                <GuidanceSection title="How to Use Average Calculator">
                  <p>The Average Calculator helps find different types of averages:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Calculate arithmetic mean (simple average)</li>
                    <li>Find weighted averages</li>
                    <li>Compute median (middle value) and mode (most frequent value)</li>
                    <li>Determine range and standard deviation</li>
                    <li>Add or remove values easily to recalculate</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/unit-converter" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Unit Converter</h3>
                <p className="text-sm text-gray-500">Convert between units</p>
              </a>
              <button 
                onClick={() => toggleGuidance("unit-converter")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["unit-converter"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["unit-converter"] && (
                <GuidanceSection title="How to Use Unit Converter">
                  <p>The Unit Converter handles various unit conversions:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Length: convert between meters, feet, inches, etc.</li>
                    <li>Weight: convert between kilograms, pounds, ounces, etc.</li>
                    <li>Volume: convert between liters, gallons, cups, etc.</li>
                    <li>Temperature: convert between Celsius, Fahrenheit, Kelvin</li>
                    <li>Time, area, speed, and many other unit types</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            {/* Continue with other calculator tools with their own toggle buttons and guidance sections */}
            <div className="flex flex-col">
              <a href="/grade" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Grade Calculator</h3>
                <p className="text-sm text-gray-500">Calculate your grades</p>
              </a>
              <button 
                onClick={() => toggleGuidance("grade")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections.grade ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.grade && (
                <GuidanceSection title="How to Use Grade Calculator">
                  <p>The Grade Calculator helps track academic performance:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Enter individual assignment scores and weights</li>
                    <li>Calculate weighted average grade</li>
                    <li>Set target grade goals</li>
                    <li>Track progress throughout a course</li>
                    <li>Determine the grade needed on remaining assignments</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            {/* Remaining calculator tools */}
            <div className="flex flex-col">
              <a href="/gpa" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">GPA Calculator</h3>
                <p className="text-sm text-gray-500">Calculate your GPA</p>
              </a>
              <button 
                onClick={() => toggleGuidance("gpa")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections.gpa ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.gpa && (
                <GuidanceSection title="How to Use GPA Calculator">
                  <p>The GPA Calculator helps track your academic standing:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Enter course grades and credit hours</li>
                    <li>Calculate semester GPA</li>
                    <li>Track cumulative GPA across semesters</li>
                    <li>Support for both 4.0 and other GPA scales</li>
                    <li>Determine how future grades will affect overall GPA</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/final-grade" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Final Grade Calculator</h3>
                <p className="text-sm text-gray-500">What you need on your final</p>
              </a>
              <button 
                onClick={() => toggleGuidance("final-grade")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["final-grade"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["final-grade"] && (
                <GuidanceSection title="How to Use Final Grade Calculator">
                  <p>The Final Grade Calculator helps plan for exam success:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Enter your current grade and final exam weight</li>
                    <li>Calculate the minimum final exam score needed to achieve your target grade</li>
                    <li>See how different final exam scores affect your course grade</li>
                    <li>Determine if your target grade is realistically achievable</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/mortgage" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Mortgage Calculator</h3>
                <p className="text-sm text-gray-500">Calculate mortgage payments</p>
              </a>
              <button 
                onClick={() => toggleGuidance("mortgage")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections.mortgage ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.mortgage && (
                <GuidanceSection title="How to Use Mortgage Calculator">
                  <p>The Mortgage Calculator helps plan home financing:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Enter loan amount, interest rate, and term</li>
                    <li>Calculate monthly mortgage payment</li>
                    <li>View amortization schedule</li>
                    <li>See breakdown of principal vs. interest payments</li>
                    <li>Compare different loan scenarios</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/compound-interest" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Compound Interest</h3>
                <p className="text-sm text-gray-500">Calculate investment growth</p>
              </a>
              <button 
                onClick={() => toggleGuidance("compound-interest")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["compound-interest"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["compound-interest"] && (
                <GuidanceSection title="How to Use Compound Interest Calculator">
                  <p>The Compound Interest Calculator helps with investment planning:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Enter principal amount, interest rate, and time period</li>
                    <li>Set compounding frequency (daily, monthly, quarterly, annually)</li>
                    <li>Add regular contributions to see accelerated growth</li>
                    <li>View projected investment value over time</li>
                    <li>See detailed breakdown of interest earned vs. principal</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/bmi" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">BMI Calculator</h3>
                <p className="text-sm text-gray-500">Calculate your BMI</p>
              </a>
              <button 
                onClick={() => toggleGuidance("bmi")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections.bmi ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.bmi && (
                <GuidanceSection title="How to Use BMI Calculator">
                  <p>The BMI Calculator helps assess weight relative to height:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Enter your height and weight</li>
                    <li>Toggle between metric (kg/cm) and imperial (lb/in) units</li>
                    <li>Get your BMI calculation instantly</li>
                    <li>See which weight category your BMI falls into</li>
                    <li>Understand healthy weight ranges for your height</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>
          </div>
        </div>
        
        <div className="glass-card p-8 max-w-3xl w-full animate-scale-in mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            PDF Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <a href="/image-to-pdf" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Image to PDF</h3>
                <p className="text-sm text-gray-500">Convert images to PDF format</p>
              </a>
              <button 
                onClick={() => toggleGuidance("image-to-pdf")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["image-to-pdf"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["image-to-pdf"] && (
                <GuidanceSection title="How to Use Image to PDF Converter">
                  <p>The Image to PDF tool helps convert image files to PDF documents:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Drag and drop or click to select multiple image files</li>
                    <li>Supports common image formats (JPG, PNG, GIF, etc.)</li>
                    <li>Preview images before conversion</li>
                    <li>Each image becomes a separate page in the PDF</li>
                    <li>Remove or reorder images before generating the PDF</li>
                    <li>Download the finished PDF with a single click</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/jpg-to-pdf" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">JPG to PDF</h3>
                <p className="text-sm text-gray-500">Convert JPG files to PDF</p>
              </a>
              <button 
                onClick={() => toggleGuidance("jpg-to-pdf")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["jpg-to-pdf"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["jpg-to-pdf"] && (
                <GuidanceSection title="How to Use JPG to PDF Converter">
                  <p>The JPG to PDF tool specializes in converting JPG/JPEG images to PDF documents:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Select one or multiple JPG files to convert</li>
                    <li>View thumbnails of selected images</li>
                    <li>Remove any images before conversion</li>
                    <li>Each JPEG becomes a separate page in the PDF</li>
                    <li>Automatically scales images to fit PDF page dimensions</li>
                    <li>Preview and download the final PDF document</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/png-to-pdf" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">PNG to PDF</h3>
                <p className="text-sm text-gray-500">Convert PNG files to PDF</p>
              </a>
              <button 
                onClick={() => toggleGuidance("png-to-pdf")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["png-to-pdf"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["png-to-pdf"] && (
                <GuidanceSection title="How to Use PNG to PDF Converter">
                  <p>The PNG to PDF tool helps convert PNG images to PDF documents:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Upload one or multiple PNG images</li>
                    <li>Maintains transparent backgrounds in the conversion</li>
                    <li>Preview PNG images before conversion</li>
                    <li>Remove unwanted images from the queue</li>
                    <li>Each PNG becomes a separate page in the PDF</li>
                    <li>Download the converted PDF for offline use</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/pdf-viewer" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">PDF Viewer</h3>
                <p className="text-sm text-gray-500">View and interact with PDFs</p>
              </a>
              <button 
                onClick={() => toggleGuidance("pdf-viewer")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["pdf-viewer"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["pdf-viewer"] && (
                <GuidanceSection title="How to Use PDF Viewer">
                  <p>The PDF Viewer allows you to open and interact with PDF files online:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Upload PDF files directly from your device</li>
                    <li>Navigate between pages with intuitive controls</li>
                    <li>Zoom in and out to adjust viewing size</li>
                    <li>Rotate pages for better viewing when needed</li>
                    <li>Search for text within the document</li>
                    <li>No installation required - works entirely in your browser</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>
          </div>
        </div>
        
        <div className="glass-card p-8 max-w-3xl w-full animate-scale-in">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Online Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <a href="/current-time" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Current Time</h3>
                <p className="text-sm text-gray-500">Display current date and time</p>
              </a>
              <button 
                onClick={() => toggleGuidance("current-time")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["current-time"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["current-time"] && (
                <GuidanceSection title="How to Use Current Time Tool">
                  <p>The Current Time tool displays accurate time information:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>View the current time in your local timezone</li>
                    <li>See date information including day of week and date</li>
                    <li>Option to view time in 12-hour or 24-hour format</li>
                    <li>Check time in different timezones around the world</li>
                    <li>Display seconds and milliseconds for precise timing</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/stopwatch" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Stopwatch</h3>
                <p className="text-sm text-gray-500">Time events with precision</p>
              </a>
              <button 
                onClick={() => toggleGuidance("stopwatch")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections.stopwatch ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.stopwatch && (
                <GuidanceSection title="How to Use Stopwatch">
                  <p>The Stopwatch tool provides precise timing functionality:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Start, pause, and reset the timer with simple controls</li>
                    <li>Record lap times while the stopwatch continues running</li>
                    <li>High-precision timing down to hundredths of a second</li>
                    <li>View lap history with individual and cumulative times</li>
                    <li>Use for athletic training, cooking, presentations, or any timed activity</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            {/* Continue with other online tools */}
            <div className="flex flex-col">
              <a href="/alarm-clock" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Alarm Clock</h3>
                <p className="text-sm text-gray-500">Set alarms with notifications</p>
              </a>
              <button 
                onClick={() => toggleGuidance("alarm-clock")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["alarm-clock"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["alarm-clock"] && (
                <GuidanceSection title="How to Use Alarm Clock">
                  <p>The Alarm Clock tool helps you manage time and reminders:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Set multiple alarms with custom labels</li>
                    <li>Choose from various alarm sounds</li>
                    <li>Enable browser notifications for alerts even when in another tab</li>
                    <li>Create one-time or repeating alarms</li>
                    <li>Easily enable, disable, or delete existing alarms</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/todo-list" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">To-Do List</h3>
                <p className="text-sm text-gray-500">Manage your tasks</p>
              </a>
              <button 
                onClick={() => toggleGuidance("todo-list")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["todo-list"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["todo-list"] && (
                <GuidanceSection title="How to Use To-Do List">
                  <p>The To-Do List helps you stay organized and productive:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Add tasks quickly with the input field</li>
                    <li>Mark tasks as complete by checking them off</li>
                    <li>Edit existing tasks by clicking on them</li>
                    <li>Delete completed or unnecessary tasks</li>
                    <li>Tasks are saved locally in your browser</li>
                    <li>Filter tasks by status (all, active, completed)</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/random-number" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Random Number Generator</h3>
                <p className="text-sm text-gray-500">Generate random numbers</p>
              </a>
              <button 
                onClick={() => toggleGuidance("random-number")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["random-number"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["random-number"] && (
                <GuidanceSection title="How to Use Random Number Generator">
                  <p>The Random Number Generator creates random values for various purposes:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Set minimum and maximum values for your random range</li>
                    <li>Generate one or multiple random numbers at once</li>
                    <li>Choose whether to allow duplicate numbers</li>
                    <li>Option to include or exclude decimal values</li>
                    <li>Copy generated numbers with a single click</li>
                    <li>View history of previously generated results</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            {/* Remaining online tools */}
            <div className="flex flex-col">
              <a href="/chart-maker" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Chart Maker</h3>
                <p className="text-sm text-gray-500">Create various chart types</p>
              </a>
              <button 
                onClick={() => toggleGuidance("chart-maker")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["chart-maker"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["chart-maker"] && (
                <GuidanceSection title="How to Use Chart Maker">
                  <p>The Chart Maker helps visualize data with various chart types:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Select from multiple chart types (bar, line, pie, scatter, etc.)</li>
                    <li>Enter data manually or import from CSV/Excel</li>
                    <li>Customize colors, labels, and chart appearance</li>
                    <li>Add titles, legends, and axes labels</li>
                    <li>Download charts as images or PDF</li>
                    <li>Save chart configurations for future use</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/countdown" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Countdown Timer</h3>
                <p className="text-sm text-gray-500">Count down to events</p>
              </a>
              <button 
                onClick={() => toggleGuidance("countdown")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections.countdown ? "rotate-180" : ""}`} />
              </button>
              {expandedSections.countdown && (
                <GuidanceSection title="How to Use Countdown Timer">
                  <p>The Countdown Timer helps track time remaining until events:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Set hours, minutes, and seconds for your countdown</li>
                    <li>Alternatively, set a specific date and time to count down to</li>
                    <li>Add a title for your countdown event</li>
                    <li>Pause, resume, or reset the timer as needed</li>
                    <li>Receive notification when countdown reaches zero</li>
                    <li>Create multiple countdown timers for different events</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/password-generator" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Password Generator</h3>
                <p className="text-sm text-gray-500">Create secure passwords</p>
              </a>
              <button 
                onClick={() => toggleGuidance("password-generator")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["password-generator"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["password-generator"] && (
                <GuidanceSection title="How to Use Password Generator">
                  <p>The Password Generator creates strong, secure passwords:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Set desired password length</li>
                    <li>Choose character types to include (uppercase, lowercase, numbers, symbols)</li>
                    <li>Exclude similar characters to avoid confusion</li>
                    <li>Generate multiple passwords at once</li>
                    <li>Copy passwords with a single click</li>
                    <li>Check password strength with built-in analyzer</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>

            <div className="flex flex-col">
              <a href="/text-editor" className="glass-card p-5 hover:shadow-md transition-all text-center">
                <h3 className="font-medium mb-2">Text Editor</h3>
                <p className="text-sm text-gray-500">Edit and format text</p>
              </a>
              <button 
                onClick={() => toggleGuidance("text-editor")}
                className="mt-1 text-xs text-primary flex items-center justify-center"
              >
                How to use <ChevronDown className={`ml-1 h-3 w-3 transition-transform ${expandedSections["text-editor"] ? "rotate-180" : ""}`} />
              </button>
              {expandedSections["text-editor"] && (
                <GuidanceSection title="How to Use Text Editor">
                  <p>The Text Editor provides tools for composing and formatting text:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Write or paste text in a clean, distraction-free interface</li>
                    <li>Format text with basic styling options (bold, italic, underline)</li>
                    <li>Apply heading styles, lists, and alignments</li>
                    <li>Use advanced text transformation tools (uppercase, lowercase, title case)</li>
                    <li>Count words, characters, and paragraphs in real-time</li>
                    <li>Save or export your work as TXT, HTML, or Markdown</li>
                  </ul>
                </GuidanceSection>
              )}
            </div>
          </div>
          
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
