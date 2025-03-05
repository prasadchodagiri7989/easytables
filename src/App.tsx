
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ScientificCalculator } from "./components/calculators/ScientificCalculator";
import { PercentageCalculator } from "./components/calculators/PercentageCalculator";
import { FractionCalculator } from "./components/calculators/FractionCalculator";
import { AverageCalculator } from "./components/calculators/AverageCalculator";
import { GradeCalculator } from "./components/calculators/GradeCalculator";
import { GPACalculator } from "./components/calculators/GPACalculator";
import { FinalGradeCalculator } from "./components/calculators/FinalGradeCalculator";
import { MortgageCalculator } from "./components/calculators/MortgageCalculator";
import { CompoundInterestCalculator } from "./components/calculators/CompoundInterestCalculator";
import { BMICalculator } from "./components/calculators/BMICalculator";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/scientific" element={<Layout><ScientificCalculator /></Layout>} />
          <Route path="/percentage" element={<Layout><PercentageCalculator /></Layout>} />
          <Route path="/fraction" element={<Layout><FractionCalculator /></Layout>} />
          <Route path="/average" element={<Layout><AverageCalculator /></Layout>} />
          <Route path="/grade" element={<Layout><GradeCalculator /></Layout>} />
          <Route path="/gpa" element={<Layout><GPACalculator /></Layout>} />
          <Route path="/final-grade" element={<Layout><FinalGradeCalculator /></Layout>} />
          <Route path="/mortgage" element={<Layout><MortgageCalculator /></Layout>} />
          <Route path="/compound-interest" element={<Layout><CompoundInterestCalculator /></Layout>} />
          <Route path="/bmi" element={<Layout><BMICalculator /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
