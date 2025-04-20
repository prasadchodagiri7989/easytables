import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Calculator, Percent, DivideSquare, BarChart2, GraduationCap, Package, Activity,
  Award, Home, DollarSign, TrendingUp, Weight, ChevronLeft, ArrowRightLeft, ChevronDown,
  Clock, BarChart, Calendar, Phone, Camera, FileText, MousePointer, Timer, Mic,
  Monitor, Lock, PieChart, Shuffle, Film, Smartphone, MessageSquare, Edit,
  Table, Volume2, CalendarDays, CheckSquare, Music, Ruler, Video, Wrench, Hash,
  AlignJustify, FileImage, Type, FileIcon, ImageIcon, Image, Code,
  Zap, CircuitBoard, Lightbulb, Battery, Feather, BookOpen, Workflow, Info,
  Gauge, Droplet, Flame, X
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { toolsData } from "@/data/tools-data";
import { Thermometer, Square, Wind, Bolt, Database, Compass, Fuel, BatteryCharging, Plug } from "lucide-react";

export const unitCategories = [ 
  { label: "allconversions", value: "allconversions", path: "/convertor/all-conversions", icon: Ruler },
  { label: "Length", value: "length", path: "/convertor/length", icon: Ruler }
  { label: "Mass", value: "mass", path: "/convertor/mass", icon: Weight },
  { label: "Temperature", value: "temperature", path: "/convertor/temperature", icon: Thermometer },
  { label: "Area", value: "area", path: "/convertor/area", icon: Square },
  { label: "Volume", value: "volume", path: "/convertor/volume", icon: Package },
  { label: "Time", value: "time", path: "/convertor/time", icon: Clock },
  { label: "Speed", value: "speed", path: "/convertor/speed", icon: Gauge },
  { label: "Pressure", value: "pressure", path: "/convertor/pressure", icon: Wind },
  { label: "Energy", value: "energy", path: "/convertor/energy", icon: Bolt },
  { label: "Power", value: "power", path: "/convertor/power", icon: Zap },
  { label: "Data", value: "data", path: "/convertor/data", icon: Database },
  { label: "Angle", value: "angle", path: "/convertor/angle", icon: Compass },
  { label: "Frequency", value: "frequency", path: "/convertor/frequency", icon: Activity },
  { label: "Fuel Economy", value: "fuel_economy", path: "/convertor/fuel_economy", icon: Fuel },
  { label: "Voltage", value: "voltage", path: "/convertor/voltage", icon: BatteryCharging },
  { label: "Current", value: "current", path: "/convertor/current", icon: Plug },
  { label: "Color", value: "color", path: "/convertor/color", icon: Plug }
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
  onClose: () => void;
}

const SidebarLink = ({ to, icon: Icon, label, onClose }: SidebarLinkProps) => {
  const handleClick = () => {
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <NavLink 
      to={to} 
      onClick={handleClick}
      className={({ isActive }) => 
        cn("sidebar-link", isActive && "active")
      }
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  );
};

export const Sidebar = ({ open, onClose }: SidebarProps) => {
  const [calculatorsOpen, setCalculatorsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [textToolsOpen, setTextToolsOpen] = useState(false);
  const [pdfToolsOpen, setPdfToolsOpen] = useState(false);
  const [HtmltoolsOpen, setHtmltoolsOpen] = useState(false);
  const [convertorToolsOpen, setConvertorToolsOpen] = useState(false);
  const [electricalOpen, setElectricalOpen] = useState(false);
  const [electricalCalculatorsOpen, setElectricalCalculatorsOpen] = useState(false);
  const [lightingCalculatorsOpen, setLightingCalculatorsOpen] = useState(false);

  return (
    <aside className={cn(
      "fixed top-0 left-0 h-full w-64 bg-white z-30 border-r border-gray-200/50 shadow-sm dark:bg-gray-900 dark:border-gray-800/50",
      "transition-transform duration-300 ease-in-out",
      open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
      "flex flex-col"
    )}>
      <div className="p-4 border-b border-gray-200/50 dark:border-gray-800/50 flex items-center justify-between">
        <h2 className="text-lg font-medium dark:text-white">Math Tools</h2>
        <button 
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
        >
          <ChevronLeft size={20} className="dark:text-gray-300" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        <SidebarLink to="/" icon={Home} label="Home" onClose={onClose} />
        
        <div className="py-2">
          <Collapsible
            open={calculatorsOpen}
            onOpenChange={setCalculatorsOpen}
            className="w-full"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-left">
              <div className="flex items-center">
                <Calculator size={18} className="mr-2 dark:text-gray-300" />
                <span className="text-sm font-medium dark:text-gray-300">Calculators</span>
              </div>
              <ChevronDown 
                size={16} 
                className={cn(
                  "transition-transform duration-200 dark:text-gray-300",
                  calculatorsOpen ? "rotate-180" : ""
                )} 
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1 mt-1">
              <SidebarLink to="/scientific" icon={Calculator} label="Scientific" onClose={onClose} />
              <SidebarLink to="/percentage" icon={Percent} label="Percentage" onClose={onClose} />
              <SidebarLink to="/fraction" icon={DivideSquare} label="Fraction" onClose={onClose} />
              <SidebarLink to="/average" icon={BarChart2} label="Average" onClose={onClose} />
              <SidebarLink to="/grade" icon={Award} label="Grade" onClose={onClose} />
              <SidebarLink to="/gpa" icon={GraduationCap} label="GPA" onClose={onClose} />
              <SidebarLink to="/final-grade" icon={Award} label="Final Grade" onClose={onClose} />
              <SidebarLink to="/mortgage" icon={Home} label="Mortgage" onClose={onClose} />
              <SidebarLink to="/compound-interest" icon={TrendingUp} label="Compound Interest" onClose={onClose} />
              <SidebarLink to="/bmi" icon={Weight} label="BMI" onClose={onClose} />
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible open={convertorToolsOpen} onOpenChange={setConvertorToolsOpen} className="w-full mt-2">
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-left">
              <div className="flex items-center">
                <Code size={18} className="mr-2 dark:text-gray-300" />
                <span className="text-sm font-medium dark:text-gray-300">Converter Tools</span>
              </div>
              <ChevronDown 
                size={16} 
                className={cn("transition-transform duration-200 dark:text-gray-300", convertorToolsOpen ? "rotate-180" : "")} 
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1 mt-1">
              {unitCategories.map((category) => (
                <SidebarLink key={category.value} icon={category.icon} to={category.path} label={category.label} onClose={onClose} />
              ))}
            </CollapsibleContent>
          </Collapsible>

          <Collapsible
            open={electricalOpen}
            onOpenChange={setElectricalOpen}
            className="w-full mt-2"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-left">
              <div className="flex items-center">
                <Zap size={18} className="mr-2 dark:text-gray-300" />
                <span className="text-sm font-medium dark:text-gray-300">Electrical & Electronic</span>
              </div>
              <ChevronDown 
                size={16} 
                className={cn(
                  "transition-transform duration-200 dark:text-gray-300",
                  electricalOpen ? "rotate-180" : ""
                )} 
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1 mt-1">
              <SidebarLink to="/electrical-calculators" icon={BookOpen} label="Electrical Calculators" onClose={onClose} />
              <SidebarLink to="/electrical-calculations" icon={BookOpen} label="Electrical Calculations" onClose={onClose} />
              <SidebarLink to="/electrical/units" icon={Info} label="Electrical & Electronic Units" onClose={onClose} />
              <SidebarLink to="/electrical/basic-terms" icon={BookOpen} label="Basic Electrical Terms" onClose={onClose} />
              <SidebarLink to="/electrical/components" icon={CircuitBoard} label="Electronic Components" onClose={onClose} />
              <SidebarLink to="/electrical/symbols" icon={Feather} label="Electrical & Electronic Symbols" onClose={onClose} />
              <SidebarLink to="/electrical/laws" icon={Workflow} label="Electronic Circuit Laws" onClose={onClose} />
              <SidebarLink to="/electrical/save-electricity" icon={Lightbulb} label="How to Save Electricity & Energy" onClose={onClose} />
              
              
              
            </CollapsibleContent>
          </Collapsible>


          <Collapsible
                open={electricalCalculatorsOpen}
                onOpenChange={setElectricalCalculatorsOpen}
                className="w-full mt-2"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-left">
                  <div className="flex items-center">
                    <Calculator size={18} className="mr-2 dark:text-gray-300" />
                    <span className="text-sm font-medium dark:text-gray-300">Electrical Calculators</span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "transition-transform duration-200 dark:text-gray-300",
                      electricalCalculatorsOpen ? "rotate-180" : ""
                    )} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 space-y-1 mt-1">
                  <SidebarLink to="/electrical/calculators/ohms-law" icon={Zap} label="Ohm's Law" onClose={onClose} />
                  <SidebarLink to="/electrical/calculators/power" icon={Bolt} label="Power Calculator" onClose={onClose} />
                  <SidebarLink to="/electrical/calculators/voltage-divider" icon={Gauge} label="Voltage Divider" onClose={onClose} />
                  <SidebarLink to="/electrical/calculators/capacitance" icon={Battery} label="Capacitance" onClose={onClose} />
                  <SidebarLink to="/electrical/calculators/resistance" icon={Activity} label="Resistance" onClose={onClose} />
                  <SidebarLink to="/electrical/calculators/frequency" icon={Activity} label="Frequency" onClose={onClose} />
                </CollapsibleContent>
              </Collapsible>
              
              <Collapsible
                open={lightingCalculatorsOpen}
                onOpenChange={setLightingCalculatorsOpen}
                className="w-full mt-2"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-left">
                  <div className="flex items-center">
                    <Lightbulb size={18} className="mr-2 dark:text-gray-300" />
                    <span className="text-sm font-medium dark:text-gray-300">Lighting Calculators</span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "transition-transform duration-200 dark:text-gray-300",
                      lightingCalculatorsOpen ? "rotate-180" : ""
                    )} 
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 space-y-1 mt-1">
                  <SidebarLink to="/lighting-calculators" icon={Lightbulb} label="Lighting Calculators" onClose={onClose} />
                  <SidebarLink to="/electrical/lighting/lumens" icon={Lightbulb} label="Lumens Calculator" onClose={onClose} />
                  <SidebarLink to="/electrical/lighting/led-savings" icon={DollarSign} label="LED Savings" onClose={onClose} />
                  <SidebarLink to="/electrical/lighting/wattage" icon={Zap} label="Wattage Converter" onClose={onClose} />
                  <SidebarLink to="/electrical/lighting/color-temp" icon={Droplet} label="Color Temperature" onClose={onClose} />
                  <SidebarLink to="/electrical/lighting/energy-usage" icon={Flame} label="Energy Usage" onClose={onClose} />
                </CollapsibleContent>
              </Collapsible>


          <Collapsible
            open={textToolsOpen}
            onOpenChange={setTextToolsOpen}
            className="w-full mt-2"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-left">
              <div className="flex items-center">
                <Type size={18} className="mr-2 dark:text-gray-300" />
                <span className="text-sm font-medium dark:text-gray-300">Text Tools</span>
              </div>
              <ChevronDown 
                size={16} 
                className={cn(
                  "transition-transform duration-200 dark:text-gray-300",
                  textToolsOpen ? "rotate-180" : ""
                )} 
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1 mt-1">
              <SidebarLink to="/word-counter" icon={Hash} label="Word Counter" onClose={onClose} />
              <SidebarLink to="/character-counter" icon={Type} label="Character Counter" onClose={onClose} />
              <SidebarLink to="/line-counter" icon={AlignJustify} label="Line Counter" onClose={onClose} />
              <SidebarLink to="/word-frequency" icon={BarChart2} label="Word Frequency" onClose={onClose} />
              <SidebarLink to="/pdf-reader" icon={FileText} label="PDF Reader" onClose={onClose} />
              <SidebarLink to="/image-to-text" icon={FileImage} label="OCR - Image to Text" onClose={onClose} />
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible
            open={pdfToolsOpen}
            onOpenChange={setPdfToolsOpen}
            className="w-full mt-2"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-left">
              <div className="flex items-center">
                <FileIcon size={18} className="mr-2 dark:text-gray-300" />
                <span className="text-sm font-medium dark:text-gray-300">PDF Tools</span>
              </div>
              <ChevronDown 
                size={16} 
                className={cn(
                  "transition-transform duration-200 dark:text-gray-300",
                  pdfToolsOpen ? "rotate-180" : ""
                )} 
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1 mt-1">
              <SidebarLink to="/image-to-pdf" icon={FileImage} label="Image to PDF" onClose={onClose} />
              <SidebarLink to="/jpg-to-pdf" icon={ImageIcon} label="JPG to PDF" onClose={onClose} />
              <SidebarLink to="/png-to-pdf" icon={Image} label="PNG to PDF" onClose={onClose} />
              <SidebarLink to="/pdf-viewer" icon={FileText} label="PDF Viewer" onClose={onClose} />
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible
            open={toolsOpen}
            onOpenChange={setToolsOpen}
            className="w-full mt-2"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-left">
              <div className="flex items-center">
                <Wrench size={18} className="mr-2 dark:text-gray-300" />
                <span className="text-sm font-medium dark:text-gray-300">Online Tools</span>
              </div>
              <ChevronDown 
                size={16} 
                className={cn(
                  "transition-transform duration-200 dark:text-gray-300",
                  toolsOpen ? "rotate-180" : ""
                )} 
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1 mt-1">
              <SidebarLink to="/alarm-clock" icon={Clock} label="Alarm Clock" onClose={onClose} />
              <SidebarLink to="/bar-graph" icon={BarChart} label="Bar Graph Maker" onClose={onClose} />
              <SidebarLink to="/calendar" icon={Calendar} label="Calendar" onClose={onClose} />
              <SidebarLink to="/call-recorder" icon={Phone} label="Call Recorder" onClose={onClose} />
              <SidebarLink to="/camera" icon={Camera} label="Camera Online" onClose={onClose} />
              <SidebarLink to="/chart-maker" icon={BarChart2} label="Chart Maker" onClose={onClose} />
              <SidebarLink to="/click-counter" icon={MousePointer} label="Click Counter" onClose={onClose} />
              <SidebarLink to="/cps-test" icon={Timer} label="CPS Test" onClose={onClose} />
              <SidebarLink to="/countdown" icon={Timer} label="Countdown Timer" onClose={onClose} />
              <SidebarLink to="/current-time" icon={Clock} label="Current Time" onClose={onClose} />
              <SidebarLink to="/line-graph" icon={Activity} label="Line Graph Maker" onClose={onClose} />
              <SidebarLink to="/grocery-list" icon={FileText} label="Grocery List" onClose={onClose} />
              <SidebarLink to="/mic-test" icon={Mic} label="Mic Test" onClose={onClose} />
              <SidebarLink to="/online-clock" icon={Clock} label="Online Clock" onClose={onClose} />
              <SidebarLink to="/online-mirror" icon={Monitor} label="Online Mirror" onClose={onClose} />
              <SidebarLink to="/notepad" icon={Edit} label="Online Notepad" onClose={onClose} />
              <SidebarLink to="/notes" icon={FileText} label="Online Notes" onClose={onClose} />
              <SidebarLink to="/password-generator" icon={Lock} label="Password Generator" onClose={onClose} />
              <SidebarLink to="/pie-chart" icon={PieChart} label="Pie Chart Maker" onClose={onClose} />
              <SidebarLink to="/random-number" icon={Shuffle} label="Random Number Generator" onClose={onClose} />
              <SidebarLink to="/scatter-plot" icon={BarChart} label="XY Scatter Plot" onClose={onClose} />
              <SidebarLink to="/scoreboard" icon={Activity} label="Scoreboard" onClose={onClose} />
              <SidebarLink to="/screen-recorder" icon={Film} label="Screen Recorder" onClose={onClose} />
              <SidebarLink to="/screenshot" icon={Smartphone} label="Screenshot" onClose={onClose} />
              <SidebarLink to="/speech-to-text" icon={MessageSquare} label="Speech to Text" onClose={onClose} />
              <SidebarLink to="/stopwatch" icon={Clock} label="Stopwatch" onClose={onClose} />
              <SidebarLink to="/text-editor" icon={Edit} label="Text Editor" onClose={onClose} />
              <SidebarLink to="/table-chart" icon={Table} label="Table Chart Maker" onClose={onClose} />
              <SidebarLink to="/text-to-speech" icon={Volume2} label="Text to Speech" onClose={onClose} />
              <SidebarLink to="/todays-date" icon={CalendarDays} label="Today's Date" onClose={onClose} />
              <SidebarLink to="/todo-list" icon={CheckSquare} label="To-Do List" onClose={onClose} />
              <SidebarLink to="/tone-generator" icon={Music} label="Tone Generator" onClose={onClose} />
              <SidebarLink to="/ruler-cm" icon={Ruler} label="Ruler (cm/mm)" onClose={onClose} />
              <SidebarLink to="/ruler-inch" icon={Ruler} label="Ruler (inch)" onClose={onClose} />
              <SidebarLink to="/voice-recorder" icon={Mic} label="Voice Recorder" onClose={onClose} />
              <SidebarLink to="/webcam-test" icon={Video} label="Webcam Test" onClose={onClose} />
            </CollapsibleContent>
          </Collapsible>

          <Collapsible open={HtmltoolsOpen} onOpenChange={setHtmltoolsOpen} className="w-full mt-2">
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-left">
              <div className="flex items-center">
                <Code size={18} className="mr-2 dark:text-gray-300" />
                <span className="text-sm font-medium dark:text-gray-300">HTML Tools</span>
              </div>
              <ChevronDown 
                size={16} 
                className={cn("transition-transform duration-200 dark:text-gray-300", HtmltoolsOpen ? "rotate-180" : "")} 
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1 mt-1">
              {toolsData.map((tool) => (
                <SidebarLink key={tool.id} to={tool.path} icon={tool.icon} label={tool.title} onClose={onClose} />
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200/50 dark:border-gray-800/50 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Easy Tables</p>
      </div>
    </aside>
  );
};
