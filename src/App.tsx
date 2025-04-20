
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Tools
import RedirectGenerator from "./components/tools/RedirectGenerator";
import Base64Encode from "./components/tools/Base64Encode";
import Base64Decode from "./components/tools/Base64Decode";
import Base64ToImage from "./components/tools/Base64ToImage";
import ImageToBase64 from "./components/tools/ImageToBase64";
import ColorTester from "./components/tools/ColorTester";
import ColorPickerFromImage from "./components/tools/ColorPickerFromImage";
import HtmlEditor from "./components/tools/HtmlEditor";
import HtmlLinkGenerator from "./components/tools/HtmlLinkGenerator";
import HtmlTableGenerator from "./components/tools/HtmlTableGenerator";
import HttpHeaderChecker from "./components/tools/HttpHeaderChecker";
import HttpStatusChecker from "./components/tools/HttpStatusChecker";
import SvgViewer from "./components/tools/SvgViewer";
import UrlEncode from "./components/tools/UrlEncode";
import UrlDecode from "./components/tools/UrlDecode";
import ScreenResolution from "./components/tools/ScreenResolution";
import PixelRuler from "./components/tools/PixelRuler";
import WindowSize from "./components/tools/WindowSize";

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
import { UnitConverter } from "./components/calculators/UnitConverter";

// Import the online tools components
import { CurrentTime } from "./components/tools/CurrentTime";
import { Stopwatch } from "./components/tools/Stopwatch";
import { AlarmClock } from "./components/tools/AlarmClock";
import { TodoList } from "./components/tools/TodoList";
import { RandomNumberGenerator } from "./components/tools/RandomNumberGenerator";
import { BarGraphMaker } from "./components/tools/BarGraphMaker";
import { Calendar } from "./components/tools/Calendar";
import { CallRecorder } from "./components/tools/CallRecorder";
import { CameraOnline } from "./components/tools/CameraOnline";
import { ChartMaker } from "./components/tools/ChartMaker";
import { ClickCounter } from "./components/tools/ClickCounter";
import { CPSTest } from "./components/tools/CPSTest";
import { CountdownTimer } from "./components/tools/CountdownTimer";
import { LineGraphMaker } from "./components/tools/LineGraphMaker";
import { GroceryList } from "./components/tools/GroceryList";
import { MicTest } from "./components/tools/MicTest";
import { OnlineClock } from "./components/tools/OnlineClock";
import { OnlineMirror } from "./components/tools/OnlineMirror";
import { OnlineNotepad } from "./components/tools/OnlineNotepad";
import { OnlineNotes } from "./components/tools/OnlineNotes";
import { PasswordGenerator } from "./components/tools/PasswordGenerator";
import { PieChartMaker } from "./components/tools/PieChartMaker";
import { ScatterPlot } from "./components/tools/ScatterPlot";
import { Scoreboard } from "./components/tools/Scoreboard";
import { ScreenRecorder } from "./components/tools/ScreenRecorder";
import { Screenshot } from "./components/tools/Screenshot";
import { SpeechToText } from "./components/tools/SpeechToText";
import { TextEditor } from "./components/tools/TextEditor";
import { TableChartMaker } from "./components/tools/TableChartMaker";
import { TextToSpeech } from "./components/tools/TextToSpeech";
import { ToneGenerator } from "./components/tools/ToneGenerator";
import { RulerCm } from "./components/tools/RulerCm";
import { RulerInch } from "./components/tools/RulerInch";
import { VoiceRecorder } from "./components/tools/VoiceRecorder";
import { WebcamTest } from "./components/tools/WebcamTest";
import { Layout } from "./components/Layout";

// Import text tools
import { WordCounter } from "./components/tools/WordCounter";
import { CharacterCounter } from "./components/tools/CharacterCounter";
import { LineCounter } from "./components/tools/LineCounter";
import { WordFrequency } from "./components/tools/WordFrequency";
import { PDFReader } from "./components/tools/PDFReader";
import { ImageToText } from "./components/tools/ImageToText";

// Import PDF tools
import { ImageToPDF } from "./components/tools/ImageToPDF";
import { JPGtoPDF } from "./components/tools/JPGtoPDF";
import { PNGtoPDF } from "./components/tools/PNGtoPDF";
import { PDFViewer } from "./components/tools/PDFViewer";

// Import Convertors
import { LengthConverter } from "./components/convertors/LengthConverter";
import { MassConverter } from "./components/convertors/MassConverter";
import { TemperatureConverter } from "./components/convertors/TemparatureConverter";
import { AreaConverter } from "./components/convertors/AreaConverter";
import { VolumeConverter } from "./components/convertors/VolumeConverter";
import { TimeConverter } from "./components/convertors/TimeConverter";
import { SpeedConverter } from "./components/convertors/SpeedConverter";
import { PressureConverter } from "./components/convertors/PressureConverter";
import { EnergyConverter } from "./components/convertors/EnergyConverter";
import { PowerConverter } from "./components/convertors/PowerConverter";
import { DataConverter } from "./components/convertors/DataConverter";
import { AngleConverter } from "./components/convertors/AngleConverter";
import { FrequencyConverter } from "./components/convertors/FrequencyConverter";
import { FuelEconomyConverter } from "./components/convertors/FuelEconomyConverter";
import { VoltageConverter } from "./components/convertors/VoltageConverter";
import { CurrentConverter } from "./components/convertors/CurrentConverter";
import { ColorConverter } from "./components/convertors/ColorConverter";

// Import Electrical & Electronics
import BasicElectricalTerms from "./components/electrical/BasicElectricalTerms";
import OhmsLawCalculator from "./components/electrical/calculators/OhmsLawCalculator";
import ElectricalUnits from "./components/electrical/ElectricalUnits";
import ElectronicComponents from "./components/electrical/ElectricalComponents";
import ElectricalSymbols from "./components/electrical/ElectricalSymbols";
import ElectronicCircuit from "./components/electrical/ElectronicCircuit";
import HowTo from "./components/electrical/HowTo";

import PowerCalculator from "./components/electrical/calculators/PowerCalculator";
import VoltageDividerCalculator from "./components/electrical/calculators/VoltageDivider";
import CapacitanceCalculator from "./components/electrical/calculators/Capacitance";
import ResistanceCalculator from "./components/electrical/calculators/Resistence";
import FrequencyCalculator from "./components/electrical/calculators/Frequency";

import LumensCalculator from "./components/lighting/calculators/lumensCalculator";
import LEDSavingsCalculator from "./components/lighting/calculators/ledsavings";
import WattageConverter from "./components/lighting/calculators/wattageConvertor";
import ColorTemperatureConverter from "./components/lighting/calculators/colorTemperature";
import EnergyUsageCalculator from "./components/lighting/calculators/energyUsage";

import AmpereInfo from "./components/electrical/content/Ampere";
import DbmInfo from "./components/electrical/content/DBmilli";
import DbmilliInfo from "./components/electrical/content/DBmilli";
import DecibelInfo from "./components/electrical/content/Decibel";
import FaradInfo from "./components/electrical/content/Farad";
import KvaInfo from "./components/electrical/content/Kilovolt-amp";
import KwhInfo from "./components/electrical/content/Kilowatt-hour";
import KilowattInfo from "./components/electrical/content/Kilowatt";
import OhmLaw from "./components/electrical/content/Ohm";
import VoltInfo from "./components/electrical/content/Volt";
import WattInfo from "./components/electrical/content/Watt";

import ResistorChart from "./components/electrical/content/resistor";
import CapacitorInfo from "./components/electrical/content/CapacitorInfo";
import InductorInfo from "./components/electrical/content/InductorInfo";
import DipSwitchInfo from "./components/electrical/content/DIPSwitchInfo";
import SolderBridgeInfo from "./components/electrical/content/SolderBridgeInfo";

import ElectricCurrent from "./components/electrical/content/electricalcurrent";
import ElectricPower from "./components/electrical/content/electricpower";
import ElectricalVoltage from "./components/electrical/content/electricalvoltage";
import ElectricalResistance from "./components/electrical/content/electricalresistance";
import ElectricCharge from "./components/electrical/content/electricalCharge";
import PowerEfficiency from "./components/electrical/content/powerefficiency";
import PowerFactor from "./components/electrical/content/powerfactor";

import SwitchSymbols from "./components/electrical/content/SwitchSymbols";
import GroundSymbols from "./components/electrical/content/GroundSymbol";
import ResistorSymbols from "./components/electrical/content/ResistorSymbols";
import DiodeSymbols from "./components/electrical/content/DiodeSymbols";
import CapacitorSymbols from "./components/electrical/content/CapacitorSymbols";
import TransistorSymbols from "./components/electrical/content/Transistorsymbols";

import OhmsLaw from "./components/electrical/content/ohmslaw";
import VoltageDivider from "./components/electrical/content/voltagedriver";
import KirchhoffLaws from "./components/electrical/content/Kirchhoffslaws";
import CoulombsLaw from "./components/electrical/content/Coulombslaw";

import SaveElectricityTips from "./components/electrical/content/SaveElectricity";
import HowToSaveEnergy from "./components/electrical/content/SaveEnergy";

import ElectricalCalculations from "./components/electrical/calculations/ElectricalCalculations";
import ConversionPage from "./components/conversions/ConversionPage";
import CalculatorTool from "./components/conversions/ConversionsElectrical";
import AmpsToKWCalculator from "./components/conversion-calculators/AmpsToKwCalculator";
import AmpsToKVACalculator from "./components/conversion-calculators/AmpsToKVACalculator";
import AmpsToVACalculator from "./components/conversion-calculators/AmpsToVACalculator";
import AmpsToVoltsCalculator from "./components/conversion-calculators/AmpsToVoltsCalculator";
import AmpsToWattsCalculator from "./components/conversion-calculators/AmpsToWattsCalculator";
import ElectricityBillCalculator from "./components/conversion-calculators/ElectricityBillCalculator";
import EnergyConsumptionCalculator from "./components/conversion-calculators/EnergyConsumption";
import EnergyCostCalculator from "./components/conversion-calculators/EnergyCostCalculator";
import EVToVoltsCalculator from "./components/conversion-calculators/EVToVoltsCalculator";
import JoulesToVoltsCalculator from "./components/conversion-calculators/JoulesToVoltsCalculator";
import JoulesToWattsCalculator from "./components/conversion-calculators/JoulesToWattsCalculator";
import KVAToAmpsCalculator from "./components/conversion-calculators/KVAToAmpsCalculator";
import KVAToWattsCalculator from "./components/conversion-calculators/KVAToWattsCalculator";
import KVAToKWCalculator from "./components/conversion-calculators/KVAToKWCalculator";
import KVAToVACalculator from "./components/conversion-calculators/KVAToVACalculator";
import KWToAmpsCalculator from "./components/conversion-calculators/KWToAmpsCalculator";
import KWToVoltsCalculator from "./components/conversion-calculators/KWToVoltsCalculator";
import KWToKWhCalculator from "./components/conversion-calculators/KWToKWhCalculator";
import KWToVACalculator from "./components/conversion-calculators/KWToVACalculator";
import KWToKVACalculator from "./components/conversion-calculators/KWToKVACalculator";
import KWhToKWCalculator from "./components/conversion-calculators/KWhToKWCalculator";
import KWhToWattsCalculator from "./components/conversion-calculators/KWhToWattsCalculator";
import MAhToWhCalculator from "./components/conversion-calculators/MAhToWhCalculator";
import PowerFactorCalculator from "./components/conversion-calculators/PowerFactorCalculator";
import VAToAmpsCalculator from "./components/conversion-calculators/VAToAmpsCalculator";
import VAToWattsCalculator from "./components/conversion-calculators/VAToWattsCalculator";
import VAToKWCalculator from "./components/conversion-calculators/VAToKWCalculator";
import VAToKVACalculator from "./components/conversion-calculators/VAToKVACalculator";
import VoltageDropCalculator from "./components/conversion-calculators/VoltageDropCalculator";
import VoltsToAmpsCalculator from "./components/conversion-calculators/VoltsToAmpsCalculator";
import VoltsToWattsCalculator from "./components/conversion-calculators/VoltsToWattsCalculator";
import VoltsToKWCalculator from "./components/conversion-calculators/VoltsToKWCalculator";
import VoltsToJoulesCalculator from "./components/conversion-calculators/VoltsToJoulesCalculator";
import VoltsToEVCalculator from "./components/conversion-calculators/VoltsToEVCalculator";
import WattsVoltsAmpsOhmsCalculator from "./components/conversion-calculators/WattsVoltsAmpsOhmsCalculator";
import WattsToAmpsCalculator from "./components/conversion-calculators/WattsToAmpsCalculator";
import WattsToKWhCalculator from "./components/conversion-calculators/WattsToKWhCalculator";
import WattsToVoltsCalculator from "./components/conversion-calculators/WattsToVoltsCalculator";
import WattsToVACalculator from "./components/conversion-calculators/WattsToVACalculator";
import WattsToKVACalculator from "./components/conversion-calculators/WattsToKVA";
import WattsToJoulesCalculator from "./components/conversion-calculators/WattsToJoulesCalculator";
import WhTomAhCalculator from "./components/conversion-calculators/WhTomAhCalculator";
import WireGaugeCalculator from "./components/conversion-calculators/WireGaugeCalculator";
import ElectricalCalculators from "./components/conversion-calculators/ElectricalCalculators";

import LightingCalculators from "./components/lighting/calculators/LightingCalculators";

import CandelaToLumensCalculator from "./components/lighting/calculators/CandelaToLumensCalculator";
import CandelaToLuxCalculator from "./components/lighting/calculators/CandelaToLuxCalculator";
import FootcandlesToLuxCalculator from "./components/lighting/calculators/FootCandlesToLuxCalculator";
import LumensToCandelaCalculator from "./components/lighting/calculators/LumensToCandelaCalculator";
import LumensToLuxCalculator from "./components/lighting/calculators/LumensToLuxCalculator";
import LumensToMillicandelaCalculator from "./components/lighting/calculators/LumensToMillicandelaCalculator";
import LumensToWattsCalculator from "./components/lighting/calculators/LumensToWattsCalculator";
import LuxToCandelaCalculator from "./components/lighting/calculators/LuxToCandelaCalculator";
import LuxToFootcandlesCalculator from "./components/lighting/calculators/LuxToFootcandlesCalculator";
import LuxToLumensCalculator from "./components/lighting/calculators/LuxToLumensCalculator";
import LuxToWattsCalculator from "./components/lighting/calculators/LuxToWattsCalculator";
import MillicandelaToLumensCalculator from "./components/lighting/calculators/MillicandelaToLumensCalculator";
import WattsToLumensCalculator from "./components/lighting/calculators/WattsToLumensCalculator";
import WattsToLuxCalculator from "./components/lighting/calculators/WattsToLuxCalculator";

import AllConversions from "./components/conversions/AllConversions";




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          
          {/* Calculator Routes */}
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
          <Route path="/unit-converter" element={<Layout><UnitConverter /></Layout>} />
          
          {/* Convertors Routes */}
          <Route path="/convertor/length" element={<Layout><LengthConverter /></Layout>} />
          <Route path="/convertor/mass" element={<Layout><MassConverter /></Layout>} />
          <Route path="/convertor/temperature" element={<Layout><TemperatureConverter /></Layout>} />
          <Route path="/convertor/area" element={<Layout><AreaConverter /></Layout>} />
          <Route path="/convertor/volume" element={<Layout><VolumeConverter /></Layout>} />
          <Route path="/convertor/time" element={<Layout><TimeConverter /></Layout>} />
          <Route path="/convertor/speed" element={<Layout><SpeedConverter /></Layout>} />
          <Route path="/convertor/pressure" element={<Layout><PressureConverter /></Layout>} />
          <Route path="/convertor/energy" element={<Layout><EnergyConverter /></Layout>} />
          <Route path="/convertor/power" element={<Layout><PowerConverter /></Layout>} />
          <Route path="/convertor/data" element={<Layout><DataConverter /></Layout>} />
          <Route path="/convertor/angle" element={<Layout><AngleConverter /></Layout>} />
          <Route path="/convertor/frequency" element={<Layout><FrequencyConverter /></Layout>} />
          <Route path="/convertor/fuel_economy" element={<Layout><FuelEconomyConverter /></Layout>} />
          <Route path="/convertor/voltage" element={<Layout><VoltageConverter /></Layout>} />
          <Route path="/convertor/current" element={<Layout><CurrentConverter /></Layout>} />
          <Route path="/convertor/color" element={<Layout><ColorConverter /></Layout>} />


          {/* Electrical & Electronic Routes */}
          <Route path="/electrical/basic-terms" element={<Layout><BasicElectricalTerms /></Layout>} />
          <Route path="/electrical/calculators/ohms-law" element={<Layout><OhmsLawCalculator /></Layout>} />
          <Route path="/electrical/units" element={<Layout><ElectricalUnits /></Layout>} />
          <Route path="/electrical/components" element={<Layout><ElectronicComponents /></Layout>} />
          <Route path="/electrical/symbols" element={<Layout><ElectricalSymbols /></Layout>} />
          <Route path="/electrical/laws" element={<Layout><ElectronicCircuit /></Layout>} />
          <Route path="/electrical/save-electricity" element={<Layout><HowTo /></Layout>} />
          <Route path="/electrical/calculators/power" element={<Layout><PowerCalculator /></Layout>} />
          <Route path="/electrical/calculators/voltage-divider" element={<Layout><VoltageDividerCalculator /></Layout>} />
          <Route path="/electrical/calculators/capacitance" element={<Layout><CapacitanceCalculator /></Layout>} />
          <Route path="/electrical/calculators/resistance" element={<Layout><ResistanceCalculator /></Layout>} />
          <Route path="/electrical/calculators/frequency" element={<Layout><FrequencyCalculator /></Layout>} />

          <Route path="/electrical/lighting/lumens" element={<Layout><LumensCalculator /></Layout>} />
          <Route path="/electrical/lighting/led-savings" element={<Layout><LEDSavingsCalculator /></Layout>} />
          <Route path="/electrical/lighting/wattage" element={<Layout><WattageConverter /></Layout>} />
          <Route path="/electrical/lighting/color-temp" element={<Layout><ColorTemperatureConverter /></Layout>} />
          <Route path="/electrical/lighting/energy-usage" element={<Layout><EnergyUsageCalculator /></Layout>} />
          
          <Route path="/electrical/units/ampere" element={<Layout><AmpereInfo /></Layout>} />
          <Route path="/electrical/units/dbm" element={<Layout><DbmilliInfo /></Layout>} />
          <Route path="/electrical/units/dbw" element={<Layout><DbmInfo /></Layout>} />
          <Route path="/electrical/units/decibel" element={<Layout><DecibelInfo /></Layout>} />
          <Route path="/electrical/units/farad" element={<Layout><FaradInfo /></Layout>} />
          <Route path="/electrical/units/kva" element={<Layout><KvaInfo /></Layout>} />
          <Route path="/electrical/units/kw" element={<Layout><KilowattInfo /></Layout>} />
          <Route path="/electrical/units/kwh" element={<Layout><KwhInfo /></Layout>} />
          <Route path="/electrical/units/ohm" element={<Layout><OhmLaw /></Layout>} />
          <Route path="/electrical/units/volt" element={<Layout><VoltInfo /></Layout>} />
          <Route path="/electrical/units/watt" element={<Layout><WattInfo /></Layout>} />

          <Route path="/electrical/components/resistor" element={<Layout><ResistorChart /></Layout>} />
          <Route path="/electrical/components/capacitor" element={<Layout><CapacitorInfo /></Layout>} />
          <Route path="/electrical/components/inductor" element={<Layout><InductorInfo /></Layout>} />
          <Route path="/electrical/components/dip-switch" element={<Layout><DipSwitchInfo /></Layout>} />
          <Route path="/electrical/components/solder-bridge" element={<Layout><SolderBridgeInfo /></Layout>} />

          <Route path="/electrical/content/voltage" element={<Layout><ElectricalVoltage /></Layout>} />
          <Route path="/electrical/content/resistance" element={<Layout><ElectricalResistance /></Layout>} />
          <Route path="/electrical/content/current" element={<Layout><ElectricCurrent /></Layout>} />
          <Route path="/electrical/content/power" element={<Layout><ElectricPower /></Layout>} />
          <Route path="/electrical/content/charge" element={<Layout><ElectricCharge /></Layout>} />
          <Route path="/electrical/content/efficiency" element={<Layout><PowerEfficiency /></Layout>} />
          <Route path="/electrical/content/factor" element={<Layout><PowerFactor /></Layout>} />

          <Route path="/electrical/symbols/switch" element={<Layout><SwitchSymbols /></Layout>} />
          <Route path="/electrical/symbols/ground" element={<Layout><GroundSymbols /></Layout>} />
          <Route path="/electrical/symbols/resistor" element={<Layout><ResistorSymbols /></Layout>} />
          <Route path="/electrical/symbols/capacitor" element={<Layout><CapacitorSymbols /></Layout>} />
          <Route path="/electrical/symbols/diode" element={<Layout><DiodeSymbols /></Layout>} />
          <Route path="/electrical/symbols/transistor" element={<Layout><TransistorSymbols /></Layout>} />

          <Route path="/electrical/circuit-laws/ohm" element={<Layout><OhmsLaw /></Layout>} />
          <Route path="/electrical/circuit-laws/voltage-divider" element={<Layout><VoltageDivider /></Layout>} />
          <Route path="/electrical/circuit-laws/kirchhoff" element={<Layout><KirchhoffLaws /></Layout>} />
          <Route path="/electrical/circuit-laws/coulomb" element={<Layout><CoulombsLaw /></Layout>} />
          
          <Route path="/howto/save-electricity" element={<Layout><SaveElectricityTips /></Layout>} />
          <Route path="/howto/save-energy" element={<Layout><HowToSaveEnergy /></Layout>} />

          {/* Electrical Calculations */}

          <Route path="/electrical-calculations" element={<Layout><ElectricalCalculations /></Layout>} />
          <Route path="/calculations/:slug" element={<Layout><ConversionPage /></Layout>} />

          <Route path="/convertor-electrical/:slug" element={<Layout><ConversionPage /></Layout>} />

          {/* Electrical Calculators */}
          <Route path="/electrical-calculators" element={<Layout><ElectricalCalculators /></Layout>} />

          <Route path="/electrical-calculators/amps-to-kw-calculator" element={<Layout><AmpsToKWCalculator /></Layout>} />
          <Route path="/electrical-calculators/amps-to-kva-calculator" element={<Layout><AmpsToKVACalculator /></Layout>} />
          <Route path="/electrical-calculators/amps-to-va-calculator" element={<Layout><AmpsToVACalculator /></Layout>} />
          <Route path="/electrical-calculators/amps-to-volts-calculator" element={<Layout><AmpsToVoltsCalculator /></Layout>} />
          <Route path="/electrical-calculators/amps-to-watts-calculator" element={<Layout><AmpsToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/electricity-bill-calculator" element={<Layout><ElectricityBillCalculator /></Layout>} />
          <Route path="/electrical-calculators/energy-consumption-calculator" element={<Layout><EnergyConsumptionCalculator /></Layout>} />
          <Route path="/electrical-calculators/energy-cost-calculator" element={<Layout><EnergyCostCalculator /></Layout>} />
          <Route path="/electrical-calculators/ev-to-volts-calculator" element={<Layout><EVToVoltsCalculator /></Layout>} />
          <Route path="/electrical-calculators/joules-to-volts-calculator" element={<Layout><JoulesToVoltsCalculator /></Layout>} />
          <Route path="/electrical-calculators/joules-to-watts-calculator" element={<Layout><JoulesToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/kva-to-amps-calculator" element={<Layout><KVAToAmpsCalculator /></Layout>} />
          <Route path="/electrical-calculators/kva-to-watts-calculator" element={<Layout><KVAToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/kva-to-kw-calculator" element={<Layout><KVAToKWCalculator /></Layout>} />
          <Route path="/electrical-calculators/kva-to-va-calculator" element={<Layout><KVAToVACalculator /></Layout>} />
          <Route path="/electrical-calculators/kw-to-amps-calculator" element={<Layout><KWToAmpsCalculator /></Layout>} />
          <Route path="/electrical-calculators/kw-to-volts-calculator" element={<Layout><KWToVoltsCalculator /></Layout>} />
          <Route path="/electrical-calculators/kw-to-kwh-calculator" element={<Layout><KWToKWhCalculator /></Layout>} />
          <Route path="/electrical-calculators/kw-to-va-calculator" element={<Layout><KWToVACalculator /></Layout>} />
          <Route path="/electrical-calculators/kw-to-kva-calculator" element={<Layout><KWToKVACalculator /></Layout>} />
          <Route path="/electrical-calculators/kwh-to-kw-calculator" element={<Layout><KWhToKWCalculator /></Layout>} />
          <Route path="/electrical-calculators/kwh-to-watts-calculator" element={<Layout><KWhToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/mah-to-wh-calculator" element={<Layout><MAhToWhCalculator /></Layout>} />
          <Route path="/electrical-calculators/power-factor-calculator" element={<Layout><PowerFactorCalculator /></Layout>} />
          <Route path="/electrical-calculators/va-to-amps-calculator" element={<Layout><VAToAmpsCalculator /></Layout>} />
          <Route path="/electrical-calculators/va-to-watts-calculator" element={<Layout><VAToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/va-to-kw-calculator" element={<Layout><VAToKWCalculator /></Layout>} />
          <Route path="/electrical-calculators/va-to-kva-calculator" element={<Layout><VAToKVACalculator /></Layout>} />
          <Route path="/electrical-calculators/voltage-drop-calculator" element={<Layout><VoltageDropCalculator /></Layout>} />
          <Route path="/electrical-calculators/volts-to-amps-calculator" element={<Layout><VoltsToAmpsCalculator /></Layout>} />
          <Route path="/electrical-calculators/volts-to-watts-calculator" element={<Layout><VoltsToWattsCalculator /></Layout>} />
          <Route path="/electrical-calculators/volts-to-kw-calculator" element={<Layout><VoltsToKWCalculator /></Layout>} />
          <Route path="/electrical-calculators/volts-to-joules-calculator" element={<Layout><VoltsToJoulesCalculator /></Layout>} />
          <Route path="/electrical-calculators/volts-to-ev-calculator" element={<Layout><VoltsToEVCalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-volts-amps-ohms-calculator" element={<Layout><WattsVoltsAmpsOhmsCalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-amps-calculator" element={<Layout><WattsToAmpsCalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-kwh-calculator" element={<Layout><WattsToKWhCalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-volts-calculator" element={<Layout><WattsToVoltsCalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-va-calculator" element={<Layout><WattsToVACalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-kva-calculator" element={<Layout><WattsToKVACalculator /></Layout>} />
          <Route path="/electrical-calculators/watts-to-joules-calculator" element={<Layout><WattsToJoulesCalculator /></Layout>} />
          
          <Route path="/electrical-calculators/wh-to-mah-calculator" element={<Layout><WhTomAhCalculator /></Layout>} />
          <Route path="/electrical-calculators/wire-gauge-calculator" element={<Layout><WireGaugeCalculator /></Layout>} />

          <Route path="/lighting-calculators" element={<Layout><LightingCalculators /></Layout>} />
          <Route path="/lighting-calculators/candela-to-lumens-calculator" element={<Layout><CandelaToLumensCalculator /></Layout>} />
          <Route path="/lighting-calculators/candela-to-lux-calculator" element={<Layout><CandelaToLuxCalculator /></Layout>} />
          <Route path="/lighting-calculators/footcandles-to-lux-calculator" element={<Layout><FootcandlesToLuxCalculator /></Layout>} />
          <Route path="/lighting-calculators/lumens-to-candela-calculator" element={<Layout><LumensToCandelaCalculator /></Layout>} />
          <Route path="/lighting-calculators/lumens-to-lux-calculator" element={<Layout><LumensToLuxCalculator /></Layout>} />
          <Route path="/lighting-calculators/lumens-to-millicandela-calculator" element={<Layout><LumensToMillicandelaCalculator /></Layout>} />
          <Route path="/lighting-calculators/lumens-to-watts-calculator" element={<Layout><LumensToWattsCalculator /></Layout>} />
          <Route path="/lighting-calculators/lux-to-candela-calculator" element={<Layout><LuxToCandelaCalculator /></Layout>} />
          <Route path="/lighting-calculators/lux-to-footcandles-calculator" element={<Layout><LuxToFootcandlesCalculator /></Layout>} />
          <Route path="/lighting-calculators/lux-to-lumens-calculator" element={<Layout><LuxToLumensCalculator /></Layout>} />
          <Route path="/lighting-calculators/lux-to-watts-calculator" element={<Layout><LuxToWattsCalculator /></Layout>} />
          <Route path="/lighting-calculators/millicandela-to-lumens-calculator" element={<Layout><MillicandelaToLumensCalculator /></Layout>} />
          <Route path="/lighting-calculators/watts-to-lumens-calculator" element={<Layout><WattsToLumensCalculator /></Layout>} />
          <Route path="/lighting-calculators/watts-to-lux-calculator" element={<Layout><WattsToLuxCalculator /></Layout>} />

          <Route path="/all-conversions" element={<Layout><AllConversions /></Layout>} />



rhh

          





          

          {/* Text Tools Routes */}
          <Route path="/word-counter" element={<Layout><WordCounter /></Layout>} />
          <Route path="/character-counter" element={<Layout><CharacterCounter /></Layout>} />
          <Route path="/line-counter" element={<Layout><LineCounter /></Layout>} />
          <Route path="/word-frequency" element={<Layout><WordFrequency /></Layout>} />
          <Route path="/pdf-reader" element={<Layout><PDFReader /></Layout>} />
          <Route path="/image-to-text" element={<Layout><ImageToText /></Layout>} />
          
          {/* PDF Tools Routes */}
          <Route path="/image-to-pdf" element={<Layout><ImageToPDF /></Layout>} />
          <Route path="/jpg-to-pdf" element={<Layout><JPGtoPDF /></Layout>} />
          <Route path="/png-to-pdf" element={<Layout><PNGtoPDF /></Layout>} />
          <Route path="/pdf-viewer" element={<Layout><PDFViewer /></Layout>} />
          
          {/* Online Tools Routes */}
          <Route path="/current-time" element={<Layout><CurrentTime /></Layout>} />
          <Route path="/todays-date" element={<Layout><CurrentTime /></Layout>} />
          <Route path="/stopwatch" element={<Layout><Stopwatch /></Layout>} />
          <Route path="/alarm-clock" element={<Layout><AlarmClock /></Layout>} />
          <Route path="/todo-list" element={<Layout><TodoList /></Layout>} />
          <Route path="/random-number" element={<Layout><RandomNumberGenerator /></Layout>} />
          <Route path="/bar-graph" element={<Layout><BarGraphMaker /></Layout>} />
          <Route path="/calendar" element={<Layout><Calendar /></Layout>} />
          <Route path="/call-recorder" element={<Layout><CallRecorder /></Layout>} />
          <Route path="/camera" element={<Layout><CameraOnline /></Layout>} />
          <Route path="/chart-maker" element={<Layout><ChartMaker /></Layout>} />
          <Route path="/click-counter" element={<Layout><ClickCounter /></Layout>} />
          <Route path="/cps-test" element={<Layout><CPSTest /></Layout>} />
          <Route path="/countdown" element={<Layout><CountdownTimer /></Layout>} />
          <Route path="/line-graph" element={<Layout><LineGraphMaker /></Layout>} />
          <Route path="/grocery-list" element={<Layout><GroceryList /></Layout>} />
          <Route path="/mic-test" element={<Layout><MicTest /></Layout>} />
          <Route path="/online-clock" element={<Layout><OnlineClock /></Layout>} />
          <Route path="/online-mirror" element={<Layout><OnlineMirror /></Layout>} />
          <Route path="/notepad" element={<Layout><OnlineNotepad /></Layout>} />
          <Route path="/notes" element={<Layout><OnlineNotes /></Layout>} />
          <Route path="/password-generator" element={<Layout><PasswordGenerator /></Layout>} />
          <Route path="/pie-chart" element={<Layout><PieChartMaker /></Layout>} />
          <Route path="/scatter-plot" element={<Layout><ScatterPlot /></Layout>} />
          <Route path="/scoreboard" element={<Layout><Scoreboard /></Layout>} />
          <Route path="/screen-recorder" element={<Layout><ScreenRecorder /></Layout>} />
          <Route path="/screenshot" element={<Layout><Screenshot /></Layout>} />
          <Route path="/speech-to-text" element={<Layout><SpeechToText /></Layout>} />
          <Route path="/text-editor" element={<Layout><TextEditor /></Layout>} />
          <Route path="/table-chart" element={<Layout><TableChartMaker /></Layout>} />
          <Route path="/text-to-speech" element={<Layout><TextToSpeech /></Layout>} />
          <Route path="/tone-generator" element={<Layout><ToneGenerator /></Layout>} />
          <Route path="/ruler-cm" element={<Layout><RulerCm /></Layout>} />
          <Route path="/ruler-inch" element={<Layout><RulerInch /></Layout>} />
          <Route path="/voice-recorder" element={<Layout><VoiceRecorder /></Layout>} />
          <Route path="/webcam-test" element={<Layout><WebcamTest /></Layout>} />

          {/* HTML Tool Routes */}
          <Route path="/tools/redirect-generator" element={<Layout><RedirectGenerator /></Layout>} />
          <Route path="/tools/base64-encode" element={<Layout><Base64Encode /></Layout>} />
          <Route path="/tools/base64-decode" element={<Layout><Base64Decode /></Layout>} />
          <Route path="/tools/base64-to-image" element={<Layout><Base64ToImage /></Layout>} />
          <Route path="/tools/image-to-base64" element={<Layout><ImageToBase64 /></Layout>} />
          <Route path="/tools/color-tester" element={<Layout><ColorTester /></Layout>} />
          <Route path="/tools/color-picker-from-image" element={<Layout><ColorPickerFromImage /></Layout>} />
          <Route path="/tools/html-editor" element={<Layout><HtmlEditor /></Layout>} />
          <Route path="/tools/html-link-generator" element={<Layout><HtmlLinkGenerator /></Layout>} />
          <Route path="/tools/html-table-generator" element={<Layout><HtmlTableGenerator /></Layout>} />
          <Route path="/tools/http-header-checker" element={<Layout><HttpHeaderChecker /></Layout>} />
          <Route path="/tools/http-status-checker" element={<Layout><HttpStatusChecker /></Layout>} />
          <Route path="/tools/svg-viewer" element={<Layout><SvgViewer /></Layout>} />
          <Route path="/tools/url-encode" element={<Layout><UrlEncode /></Layout>} />
          <Route path="/tools/url-decode" element={<Layout><UrlDecode /></Layout>} />
          <Route path="/tools/screen-resolution" element={<Layout><ScreenResolution /></Layout>} />
          <Route path="/tools/pixel-ruler" element={<Layout><PixelRuler /></Layout>} />
          <Route path="/tools/window-size" element={<Layout><WindowSize /></Layout>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
