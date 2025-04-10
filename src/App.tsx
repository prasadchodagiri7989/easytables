
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import IndexPage from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScientificCalculator from "./components/calculators/ScientificCalculator";
import PercentageCalculator from "./components/calculators/PercentageCalculator";
import FractionCalculator from "./components/calculators/FractionCalculator";
import AverageCalculator from "./components/calculators/AverageCalculator";
import GradeCalculator from "./components/calculators/GradeCalculator";
import GPACalculator from "./components/calculators/GPACalculator";
import FinalGradeCalculator from "./components/calculators/FinalGradeCalculator";
import MortgageCalculator from "./components/calculators/MortgageCalculator";
import CompoundInterestCalculator from "./components/calculators/CompoundInterestCalculator";
import BMICalculator from "./components/calculators/BMICalculator";
import LengthConverter from "./components/convertors/LengthConverter";
import MassConverter from "./components/convertors/MassConverter";
import TemperatureConverter from "./components/convertors/TemparatureConverter";
import AreaConverter from "./components/convertors/AreaConverter";
import VolumeConverter from "./components/convertors/VolumeConverter";
import TimeConverter from "./components/convertors/TimeConverter";
import SpeedConverter from "./components/convertors/SpeedConverter";
import PressureConverter from "./components/convertors/PressureConverter";
import EnergyConverter from "./components/convertors/EnergyConverter";
import PowerConverter from "./components/convertors/PowerConverter";
import DataConverter from "./components/convertors/DataConverter";
import AngleConverter from "./components/convertors/AngleConverter";
import FrequencyConverter from "./components/convertors/FrequencyConverter";
import FuelEconomyConverter from "./components/convertors/FuelEconomyConverter";
import VoltageConverter from "./components/convertors/VoltageConverter";
import CurrentConverter from "./components/convertors/CurrentConverter";
import HtmlTableGenerator from "./components/tools/HtmlTableGenerator";
import BasicElectricalTerms from "./components/electrical/BasicElectricalTerms";
import OhmsLawCalculator from "./components/electrical/calculators/OhmsLawCalculator";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";

function App() {
  return (
    <Router>
      <Toaster />
      <SonnerToaster richColors position="top-right" />
      <Layout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/scientific" element={<ScientificCalculator />} />
          <Route path="/percentage" element={<PercentageCalculator />} />
          <Route path="/fraction" element={<FractionCalculator />} />
          <Route path="/average" element={<AverageCalculator />} />
          <Route path="/grade" element={<GradeCalculator />} />
          <Route path="/gpa" element={<GPACalculator />} />
          <Route path="/final-grade" element={<FinalGradeCalculator />} />
          <Route path="/mortgage" element={<MortgageCalculator />} />
          <Route path="/compound-interest" element={<CompoundInterestCalculator />} />
          <Route path="/bmi" element={<BMICalculator />} />
          
          {/* Converter Routes */}
          <Route path="/convertor/length" element={<LengthConverter />} />
          <Route path="/convertor/mass" element={<MassConverter />} />
          <Route path="/convertor/temperature" element={<TemperatureConverter />} />
          <Route path="/convertor/area" element={<AreaConverter />} />
          <Route path="/convertor/volume" element={<VolumeConverter />} />
          <Route path="/convertor/time" element={<TimeConverter />} />
          <Route path="/convertor/speed" element={<SpeedConverter />} />
          <Route path="/convertor/pressure" element={<PressureConverter />} />
          <Route path="/convertor/energy" element={<EnergyConverter />} />
          <Route path="/convertor/power" element={<PowerConverter />} />
          <Route path="/convertor/data" element={<DataConverter />} />
          <Route path="/convertor/angle" element={<AngleConverter />} />
          <Route path="/convertor/frequency" element={<FrequencyConverter />} />
          <Route path="/convertor/fuel_economy" element={<FuelEconomyConverter />} />
          <Route path="/convertor/voltage" element={<VoltageConverter />} />
          <Route path="/convertor/current" element={<CurrentConverter />} />
          
          {/* Tool Routes */}
          <Route path="/tools/html-table-generator" element={<HtmlTableGenerator />} />
          
          {/* Electrical & Electronic Routes */}
          <Route path="/electrical/basic-terms" element={<BasicElectricalTerms />} />
          <Route path="/electrical/calculators/ohms-law" element={<OhmsLawCalculator />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
