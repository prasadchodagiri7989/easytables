
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
import OhmsLaw from "./components/electrical/content/ohmslaw";


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

          <Route path="/electrical/content/c" element={<Layout><WattInfo /></Layout>} />










          





          

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
