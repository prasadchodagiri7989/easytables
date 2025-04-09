
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
  
  // Close with escape key or cmd+k / ctrl+k
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
        (tool.description && tool.description.toLowerCase().includes(query))
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
      
      // First check if the category name matches
      if (category.label.toLowerCase().includes(query)) {
        unitResults.push({
          id: `category-${category.value}`,
          title: `${category.label} Converter`,
          path: `/convertor/${category.value}`,
          type: 'unit-converter',
          description: `Convert between ${category.label.toLowerCase()} units`
        });
      }
      
      // Check all possible combinations of from/to units
      for (let i = 0; i < units.length; i++) {
        for (let j = 0; j < units.length; j++) {
          if (i !== j) {
            const fromUnit = units[i];
            const toUnit = units[j];
            
            // Create search strings for this unit conversion
            const searchString = `${fromUnit.label} to ${toUnit.label}`.toLowerCase();
            const searchString2 = `convert ${fromUnit.label} to ${toUnit.label}`.toLowerCase();
            
            if (searchString.includes(query) || searchString2.includes(query) || 
                fromUnit.label.toLowerCase().includes(query) || toUnit.label.toLowerCase().includes(query)) {
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
    
    // Combine, deduplicate and limit results
    const combined = [...toolResults, ...unitResults];
    const unique = combined.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
    setSearchResults(unique.slice(0, 10));
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
          
          <CommandGroup heading="Tips">
            <CommandItem disabled>
              <span className="text-xs text-muted-foreground">
                Search for tools by name or description
              </span>
            </CommandItem>
            <CommandItem disabled>
              <span className="text-xs text-muted-foreground">
                Try unit conversions like "meter to foot" or "amp to kamp"
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
