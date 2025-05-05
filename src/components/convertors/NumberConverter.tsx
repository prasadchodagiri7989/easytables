import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";
import { numberFormats, convertNumber } from "@/lib/number-conversions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation, useSearchParams } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const NumberConverter = () => {
  const [fromFormat, setFromFormat] = useState("ascii");
  const [toFormat, setToFormat] = useState("binary");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const query = useQuery();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const from = query.get("from");
    const to = query.get("to");

    const isValidFormat = (format: string | null) =>
      numberFormats.some((f) => f.value === format);

    if (isValidFormat(from)) setFromFormat(from!);
    if (isValidFormat(to)) setToFormat(to!);
  }, [query]);

  const handleSwap = () => {
    setFromFormat(toFormat);
    setToFormat(fromFormat);
    setResult(null);
  };

  const handleConvert = () => {
    try {
      const output = convertNumber(input, fromFormat, toFormat);
      setResult(output);
    } catch (error) {
      setResult("Invalid input. Please check the format.");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/all-conversions">All Conversions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Number Convertor</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Number Converter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-end">
            <div>
              <Label>From</Label>
              <Select value={fromFormat} onValueChange={setFromFormat}>
                <SelectTrigger disabled>
                  <SelectValue placeholder="From format" />
                </SelectTrigger>
                <SelectContent>
                  {numberFormats.map((fmt) => (
                    <SelectItem key={fmt.value} value={fmt.value}>
                      {fmt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button variant="ghost" className="self-center" onClick={handleSwap}>
              <ArrowRightLeft className="h-4 w-4" />
            </Button>

            <div>
              <Label>To</Label>
              <Select value={toFormat} onValueChange={setToFormat}>
                <SelectTrigger disabled>
                  <SelectValue placeholder="To format" />
                </SelectTrigger>
                <SelectContent>
                  {numberFormats.map((fmt) => (
                    <SelectItem key={fmt.value} value={fmt.value}>
                      {fmt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Value</Label>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter value to convert"
            />
          </div>

          <Button className="w-full" onClick={handleConvert}>
            Convert
          </Button>

          {result !== null && (
            <div className="p-4 mt-4 bg-muted rounded-md">
              <p className="text-sm mb-1 font-medium">Result:</p>
              <p className="text-lg font-mono break-words">{result}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
