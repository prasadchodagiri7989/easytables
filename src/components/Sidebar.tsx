
import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Calculator, Percent, DivideSquare, BarChart2, GraduationCap, 
  Award, Home, DollarSign, TrendingUp, Weight, ChevronLeft 
} from "lucide-react";

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
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider pl-4 mb-2">
            Calculators
          </div>
          <div className="space-y-1">
            <SidebarLink to="/scientific" icon={Calculator} label="Scientific" onClose={onClose} />
            <SidebarLink to="/percentage" icon={Percent} label="Percentage" onClose={onClose} />
            <SidebarLink to="/fraction" icon={DivideSquare} label="Fraction" onClose={onClose} />
            <SidebarLink to="/average" icon={BarChart2} label="Average" onClose={onClose} />
          </div>
        </div>

        <div className="py-2">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider pl-4 mb-2">
            Education
          </div>
          <div className="space-y-1">
            <SidebarLink to="/grade" icon={Award} label="Grade" onClose={onClose} />
            <SidebarLink to="/gpa" icon={GraduationCap} label="GPA" onClose={onClose} />
            <SidebarLink to="/final-grade" icon={Award} label="Final Grade" onClose={onClose} />
          </div>
        </div>

        <div className="py-2">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider pl-4 mb-2">
            Finance
          </div>
          <div className="space-y-1">
            <SidebarLink to="/mortgage" icon={Home} label="Mortgage" onClose={onClose} />
            <SidebarLink to="/compound-interest" icon={TrendingUp} label="Compound Interest" onClose={onClose} />
          </div>
        </div>

        <div className="py-2">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider pl-4 mb-2">
            Health
          </div>
          <div className="space-y-1">
            <SidebarLink to="/bmi" icon={Weight} label="BMI" onClose={onClose} />
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200/50 text-center">
        <p className="text-xs text-gray-500">© 2023 Math Tools</p>
      </div>
    </aside>
  );
};
