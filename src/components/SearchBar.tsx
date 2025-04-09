
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
import { getAllTools } from "@/data/tools-data";
import { useNavigate } from "react-router-dom";
import { unitCategories, getUnitsForCategory } from "@/lib/unit-conversions";

type SearchResult = {
  id: string;
  title: string;
  path: string;
  type: 'tool' | 'unit-converter';
  description?: string;
};

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  
  // Close with escape key
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
  
  // Generate search results from tools and unit conversions
  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const tools = getAllTools();
    
    // Search through tools
    const toolResults = tools
      .filter(tool => 
        tool.title.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query)
      )
      .map(tool => ({
        id: tool.id,
        title: tool.title,
        path: tool.path,
        type: 'tool' as const,
        description: tool.description
      }));
    
    // Search through unit converters for specific unit pairs
    const unitResults: SearchResult[] = [];
    
    // For each unit category
    unitCategories.forEach(category => {
      const units = getUnitsForCategory(category.value);
      
      // Check all possible combinations of from/to units
      for (let i = 0; i < units.length; i++) {
        for (let j = 0; j < units.length; j++) {
          if (i !== j) {
            const fromUnit = units[i];
            const toUnit = units[j];
            
            // Create search strings for this unit conversion
            const searchString = `${fromUnit.label} to ${toUnit.label}`.toLowerCase();
            const searchString2 = `convert ${fromUnit.label} to ${toUnit.label}`.toLowerCase();
            
            if (searchString.includes(query) || searchString2.includes(query)) {
              unitResults.push({
                id: `${category.value}-${fromUnit.value}-${toUnit.value}`,
                title: `Convert ${fromUnit.label} to ${toUnit.label}`,
                path: `/convertor/${category.value}?from=${fromUnit.value}&to=${toUnit.value}`,
                type: 'unit-converter',
                description: `${category.label} conversion`
              });
            }
          }
        }
      }
    });
    
    // Combine and limit results
    setSearchResults([...toolResults, ...unitResults].slice(0, 10));
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
        <span className="hidden lg:inline-flex">Search tools...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search tools and conversions..." 
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
                  <div className="flex flex-col">
                    <span>{result.title}</span>
                    {result.description && (
                      <span className="text-xs text-muted-foreground">{result.description}</span>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          
          <CommandGroup heading="Tip">
            <CommandItem>
              <span className="text-xs text-muted-foreground">
                Search for tools or specific unit conversions like "amp to kamp"
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
