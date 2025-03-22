
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Calculator, Percent, DivideSquare, BarChart2, GraduationCap, 
  Award, Home, DollarSign, TrendingUp, Weight, ChevronLeft, ArrowRightLeft, ChevronDown,
  Clock, BarChart, Calendar, Phone, Camera, FileText, MousePointer, Timer, Mic,
  Monitor, Lock, PieChart, Shuffle, Activity, Film, Smartphone, MessageSquare, Edit,
  Table, Volume2, CalendarDays, CheckSquare, Music, Ruler, Video, Wrench, Hash,
  AlignJustify, FileImage, Type
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
    // Close sidebar on mobile when a link is clicked
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

  return (
    <aside className={cn(
      "fixed top-0 left-0 h-full w-64 bg-white z-30 border-r border-gray-200/50 shadow-sm",
      "transition-transform duration-300 ease-in-out",
      open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
      "flex flex-col"
    )}>
      <div className="p-4 border-b border-gray-200/50 flex items-center justify-between">
        <h2 className="text-lg font-medium">Math Tools</h2>
        <button 
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100 md:hidden"
        >
          <ChevronLeft size={20} />
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
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 text-left">
              <div className="flex items-center">
                <Calculator size={18} className="mr-2" />
                <span className="text-sm font-medium">Calculators</span>
              </div>
              <ChevronDown 
                size={16} 
                className={cn(
                  "transition-transform duration-200",
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
          
          <SidebarLink to="/unit-converter" icon={ArrowRightLeft} label="Unit Converter" onClose={onClose} />
          
          <Collapsible
            open={textToolsOpen}
            onOpenChange={setTextToolsOpen}
            className="w-full mt-2"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 text-left">
              <div className="flex items-center">
                <Type size={18} className="mr-2" />
                <span className="text-sm font-medium">Text Tools</span>
              </div>
              <ChevronDown 
                size={16} 
                className={cn(
                  "transition-transform duration-200",
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
            open={toolsOpen}
            onOpenChange={setToolsOpen}
            className="w-full mt-2"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-gray-100 text-left">
              <div className="flex items-center">
                <Wrench size={18} className="mr-2" />
                <span className="text-sm font-medium">Online Tools</span>
              </div>
              <ChevronDown 
                size={16} 
                className={cn(
                  "transition-transform duration-200",
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
        </div>
      </div>

      <div className="p-4 border-t border-gray-200/50 text-center">
        <p className="text-xs text-gray-500">© 2025 Easy Tables</p>
      </div>
    </aside>
  );
};
