import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  CommandDialog, 
  CommandEmpty, 
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";

type SearchResult = {
  id: string;
  title: string;
  path: string;
  description?: string;
};

const staticRoutes: SearchResult[] = [
  // Calculator
  { id: "scientific", title: "Scientific Calculator", path: "/scientific" },
  { id: "percentage", title: "Percentage Calculator", path: "/percentage" },
  { id: "fraction", title: "Fraction Calculator", path: "/fraction" },
  { id: "average", title: "Average Calculator", path: "/average" },
  { id: "grade", title: "Grade Calculator", path: "/grade" },
  { id: "gpa", title: "GPA Calculator", path: "/gpa" },
  { id: "final-grade", title: "Final Grade Calculator", path: "/final-grade" },
  { id: "mortgage", title: "Mortgage Calculator", path: "/mortgage" },
  { id: "compound-interest", title: "Compound Interest Calculator", path: "/compound-interest" },
  { id: "bmi", title: "BMI Calculator", path: "/bmi" },
  { id: "unit-converter", title: "All Unit Converters", path: "/unit-converter" },

  // Unit Converters
  { id: "length", title: "Length Converter", path: "/convertor/length" },
  { id: "mass", title: "Mass Converter", path: "/convertor/mass" },
  { id: "temperature", title: "Temperature Converter", path: "/convertor/temperature" },
  { id: "area", title: "Area Converter", path: "/convertor/area" },
  { id: "volume", title: "Volume Converter", path: "/convertor/volume" },
  { id: "time", title: "Time Converter", path: "/convertor/time" },
  { id: "speed", title: "Speed Converter", path: "/convertor/speed" },
  { id: "pressure", title: "Pressure Converter", path: "/convertor/pressure" },
  { id: "energy", title: "Energy Converter", path: "/convertor/energy" },
  { id: "power", title: "Power Converter", path: "/convertor/power" },
  { id: "data", title: "Data Converter", path: "/convertor/data" },
  { id: "angle", title: "Angle Converter", path: "/convertor/angle" },
  { id: "frequency", title: "Frequency Converter", path: "/convertor/frequency" },
  { id: "fuel", title: "Fuel Economy Converter", path: "/convertor/fuel_economy" },
  { id: "voltage", title: "Voltage Converter", path: "/convertor/voltage" },
  { id: "current", title: "Current Converter", path: "/convertor/current" },

  // Text Tools
  { id: "word-counter", title: "Word Counter", path: "/word-counter" },
  { id: "character-counter", title: "Character Counter", path: "/character-counter" },
  { id: "line-counter", title: "Line Counter", path: "/line-counter" },
  { id: "word-frequency", title: "Word Frequency", path: "/word-frequency" },
  { id: "pdf-reader", title: "PDF Reader", path: "/pdf-reader" },
  { id: "image-to-text", title: "Image to Text", path: "/image-to-text" },

  // PDF Tools
  { id: "image-to-pdf", title: "Image to PDF", path: "/image-to-pdf" },
  { id: "jpg-to-pdf", title: "JPG to PDF", path: "/jpg-to-pdf" },
  { id: "png-to-pdf", title: "PNG to PDF", path: "/png-to-pdf" },
  { id: "pdf-viewer", title: "PDF Viewer", path: "/pdf-viewer" },

  // Online Tools (add more as needed)
  { id: "current-time", title: "Current Time", path: "/current-time" },
  { id: "stopwatch", title: "Stopwatch", path: "/stopwatch" },
  { id: "alarm-clock", title: "Alarm Clock", path: "/alarm-clock" },
  { id: "todo-list", title: "Todo List", path: "/todo-list" },
  { id: "random-number", title: "Random Number Generator", path: "/random-number" },

  // Tools
  { id: "base64-encode", title: "Base64 Encode", path: "/tools/base64-encode" },
  { id: "base64-decode", title: "Base64 Decode", path: "/tools/base64-decode" },
  { id: "image-to-base64", title: "Image to Base64", path: "/tools/image-to-base64" },
  { id: "html-editor", title: "HTML Editor", path: "/tools/html-editor" },
  { id: "http-header-checker", title: "HTTP Header Checker", path: "/tools/http-header-checker" },
  { id: "url-encode", title: "URL Encode", path: "/tools/url-encode" },
  { id: "url-decode", title: "URL Decode", path: "/tools/url-decode" },
  // Add more tools from your route list

  // Auto-generated Current Conversions
{ id: "a-to-ma", title: "Ampere to Milliampere", path: "/convertor/current?from=a&to=ma" },
{ id: "a-to-ka", title: "Ampere to Kiloampere", path: "/convertor/current?from=a&to=ka" },
{ id: "ma-to-a", title: "Milliampere to Ampere", path: "/convertor/current?from=ma&to=a" },
{ id: "ma-to-ka", title: "Milliampere to Kiloampere", path: "/convertor/current?from=ma&to=ka" },
{ id: "ka-to-a", title: "Kiloampere to Ampere", path: "/convertor/current?from=ka&to=a" },
{ id: "ka-to-ma", title: "Kiloampere to Milliampere", path: "/convertor/current?from=ka&to=ma" },

// Power Conversions
{ id: "w-to-kw", title: "Watt to Kilowatt", path: "/convertor/power?from=w&to=kw" },
{ id: "w-to-hp", title: "Watt to Horsepower", path: "/convertor/power?from=w&to=hp" },
{ id: "kw-to-w", title: "Kilowatt to Watt", path: "/convertor/power?from=kw&to=w" },
{ id: "kw-to-hp", title: "Kilowatt to Horsepower", path: "/convertor/power?from=kw&to=hp" },
{ id: "hp-to-w", title: "Horsepower to Watt", path: "/convertor/power?from=hp&to=w" },
{ id: "hp-to-kw", title: "Horsepower to Kilowatt", path: "/convertor/power?from=hp&to=kw" },

// Voltage Conversions
{ id: "v-to-mv", title: "Volt to Millivolt", path: "/convertor/voltage?from=v&to=mv" },
{ id: "v-to-kv", title: "Volt to Kilovolt", path: "/convertor/voltage?from=v&to=kv" },
{ id: "mv-to-v", title: "Millivolt to Volt", path: "/convertor/voltage?from=mv&to=v" },
{ id: "mv-to-kv", title: "Millivolt to Kilovolt", path: "/convertor/voltage?from=mv&to=kv" },
{ id: "kv-to-v", title: "Kilovolt to Volt", path: "/convertor/voltage?from=kv&to=v" },
{ id: "kv-to-mv", title: "Kilovolt to Millivolt", path: "/convertor/voltage?from=kv&to=mv" },

// Length Conversions (only a subset due to size)
{ id: "m-to-cm", title: "Meter to Centimeter", path: "/convertor/length?from=m&to=cm" },
{ id: "m-to-km", title: "Meter to Kilometer", path: "/convertor/length?from=m&to=km" },
{ id: "cm-to-mm", title: "Centimeter to Millimeter", path: "/convertor/length?from=cm&to=mm" },
{ id: "km-to-mi", title: "Kilometer to Mile", path: "/convertor/length?from=km&to=mi" },
{ id: "ft-to-in", title: "Foot to Inch", path: "/convertor/length?from=ft&to=in" },
// (you can request full length combinations if needed)

// Mass Conversions (subset)
{ id: "g-to-kg", title: "Gram to Kilogram", path: "/convertor/mass?from=g&to=kg" },
{ id: "kg-to-mg", title: "Kilogram to Milligram", path: "/convertor/mass?from=kg&to=mg" },
{ id: "lb-to-oz", title: "Pound to Ounce", path: "/convertor/mass?from=lb&to=oz" },
{ id: "oz-to-g", title: "Ounce to Gram", path: "/convertor/mass?from=oz&to=g" },

// Time Conversions (subset)
{ id: "s-to-ms", title: "Second to Millisecond", path: "/convertor/time?from=s&to=ms" },
{ id: "min-to-s", title: "Minute to Second", path: "/convertor/time?from=min&to=s" },
{ id: "h-to-min", title: "Hour to Minute", path: "/convertor/time?from=h&to=min" },
{ id: "d-to-h", title: "Day to Hour", path: "/convertor/time?from=d&to=h" },
{ id: "ms-to-s", title: "Millisecond to Second", path: "/convertor/time?from=ms&to=s" },

];

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = staticRoutes.filter(route =>
      route.title.toLowerCase().includes(query)
    );
    setSearchResults(filtered.slice(0, 10));
  }, [searchQuery]);

  const handleResultClick = (result: SearchResult) => {
    setOpen(false);
    navigate(result.path);
  };

  return (
    <>
      <Button 
        variant="outline" 
        className="relative h-9 w-full justify-start rounded-md text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <span className="hidden lg:inline-flex">Search tools...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search tools..." 
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          {searchResults.length > 0 && (
            <CommandGroup heading="Results">
              {searchResults.map((result) => (
                <CommandItem
                  key={result.id}
                  onSelect={() => handleResultClick(result)}
                >
                  {result.title}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};
