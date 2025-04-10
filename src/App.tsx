
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import IndexPage from "./pages/Index";
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
import HtmlTableGenerator from "./components/tools/HtmlTableGenerator";
import BasicElectricalTerms from "./components/electrical/BasicElectricalTerms";
import OhmsLawCalculator from "./components/electrical/calculators/OhmsLawCalculator";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";

// Import PDF tools
import { ImageToPDF } from "./components/tools/ImageToPDF";
import { JPGtoPDF } from "./components/tools/JPGtoPDF";
import { PNGtoPDF } from "./components/tools/PNGtoPDF";
import { PDFViewer } from "./components/tools/PDFViewer";

// Import Text tools
import { WordCounter } from "./components/tools/WordCounter";
import { CharacterCounter } from "./components/tools/CharacterCounter";
import { LineCounter } from "./components/tools/LineCounter";
import { WordFrequency } from "./components/tools/WordFrequency";
import { PDFReader } from "./components/tools/PDFReader";
import { ImageToText } from "./components/tools/ImageToText";

// Import Online tools
import { CurrentTime } from "./components/tools/CurrentTime";
import { Stopwatch } from "./components/tools/Stopwatch";
import { AlarmClock } from "./components/tools/AlarmClock";
import { TodoList } from "./components/tools/TodoList";
import { RandomNumberGenerator } from "./components/tools/RandomNumberGenerator";
import { ChartMaker } from "./components/tools/ChartMaker";
import { CountdownTimer } from "./components/tools/CountdownTimer";
import { PasswordGenerator } from "./components/tools/PasswordGenerator";
import { TextEditor } from "./components/tools/TextEditor";
import { Calendar } from "./components/tools/Calendar";
import { BarGraphMaker } from "./components/tools/BarGraphMaker";
import { CallRecorder } from "./components/tools/CallRecorder";
import { CameraOnline } from "./components/tools/CameraOnline";
import { ClickCounter } from "./components/tools/ClickCounter";
import { CPSTest } from "./components/tools/CPSTest";
import { LineGraphMaker } from "./components/tools/LineGraphMaker";
import { GroceryList } from "./components/tools/GroceryList";
import { MicTest } from "./components/tools/MicTest";
import { OnlineClock } from "./components/tools/OnlineClock";
import { OnlineMirror } from "./components/tools/OnlineMirror";
import { OnlineNotepad } from "./components/tools/OnlineNotepad";
import { OnlineNotes } from "./components/tools/OnlineNotes";
import { PieChartMaker } from "./components/tools/PieChartMaker";
import { ScatterPlot } from "./components/tools/ScatterPlot";
import { Scoreboard } from "./components/tools/Scoreboard";
import { ScreenRecorder } from "./components/tools/ScreenRecorder";
import { Screenshot } from "./components/tools/Screenshot";
import { SpeechToText } from "./components/tools/SpeechToText";
import { TableChartMaker } from "./components/tools/TableChartMaker";
import { TextToSpeech } from "./components/tools/TextToSpeech";
import { ToneGenerator } from "./components/tools/ToneGenerator";
import { RulerCm } from "./components/tools/RulerCm";
import { RulerInch } from "./components/tools/RulerInch";
import { VoiceRecorder } from "./components/tools/VoiceRecorder";
import { WebcamTest } from "./components/tools/WebcamTest";

// HTML Tools - Fixed import syntax for default exports
import HtmlEditor from "./components/tools/HtmlEditor";
import HtmlLinkGenerator from "./components/tools/HtmlLinkGenerator";
import HttpHeaderChecker from "./components/tools/HttpHeaderChecker";
import HttpStatusChecker from "./components/tools/HttpStatusChecker";
import Base64Encode from "./components/tools/Base64Encode";
import Base64Decode from "./components/tools/Base64Decode";
import ImageToBase64 from "./components/tools/ImageToBase64";
import Base64ToImage from "./components/tools/Base64ToImage";
import UrlEncode from "./components/tools/UrlEncode";
import UrlDecode from "./components/tools/UrlDecode";
import ColorTester from "./components/tools/ColorTester";
import ColorPickerFromImage from "./components/tools/ColorPickerFromImage";
import SvgViewer from "./components/tools/SvgViewer";
import ScreenResolution from "./components/tools/ScreenResolution";
import WindowSize from "./components/tools/WindowSize";
import RedirectGenerator from "./components/tools/RedirectGenerator";
import PixelRuler from "./components/tools/PixelRuler";

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
          
          {/* PDF Tools Routes */}
          <Route path="/image-to-pdf" element={<ImageToPDF />} />
          <Route path="/jpg-to-pdf" element={<JPGtoPDF />} />
          <Route path="/png-to-pdf" element={<PNGtoPDF />} />
          <Route path="/pdf-viewer" element={<PDFViewer />} />
          
          {/* Text Tools Routes */}
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/character-counter" element={<CharacterCounter />} />
          <Route path="/line-counter" element={<LineCounter />} />
          <Route path="/word-frequency" element={<WordFrequency />} />
          <Route path="/pdf-reader" element={<PDFReader />} />
          <Route path="/image-to-text" element={<ImageToText />} />
          
          {/* Online Tools Routes */}
          <Route path="/current-time" element={<CurrentTime />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/alarm-clock" element={<AlarmClock />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/random-number" element={<RandomNumberGenerator />} />
          <Route path="/chart-maker" element={<ChartMaker />} />
          <Route path="/countdown" element={<CountdownTimer />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/text-editor" element={<TextEditor />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/bar-graph" element={<BarGraphMaker />} />
          <Route path="/call-recorder" element={<CallRecorder />} />
          <Route path="/camera" element={<CameraOnline />} />
          <Route path="/click-counter" element={<ClickCounter />} />
          <Route path="/cps-test" element={<CPSTest />} />
          <Route path="/line-graph" element={<LineGraphMaker />} />
          <Route path="/grocery-list" element={<GroceryList />} />
          <Route path="/mic-test" element={<MicTest />} />
          <Route path="/online-clock" element={<OnlineClock />} />
          <Route path="/online-mirror" element={<OnlineMirror />} />
          <Route path="/notepad" element={<OnlineNotepad />} />
          <Route path="/notes" element={<OnlineNotes />} />
          <Route path="/pie-chart" element={<PieChartMaker />} />
          <Route path="/scatter-plot" element={<ScatterPlot />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/screen-recorder" element={<ScreenRecorder />} />
          <Route path="/screenshot" element={<Screenshot />} />
          <Route path="/speech-to-text" element={<SpeechToText />} />
          <Route path="/table-chart" element={<TableChartMaker />} />
          <Route path="/text-to-speech" element={<TextToSpeech />} />
          <Route path="/tone-generator" element={<ToneGenerator />} />
          <Route path="/ruler-cm" element={<RulerCm />} />
          <Route path="/ruler-inch" element={<RulerInch />} />
          <Route path="/voice-recorder" element={<VoiceRecorder />} />
          <Route path="/webcam-test" element={<WebcamTest />} />
          
          {/* HTML Tools Routes */}
          <Route path="/html-editor" element={<HtmlEditor />} />
          <Route path="/html-link-generator" element={<HtmlLinkGenerator />} />
          <Route path="/http-header-checker" element={<HttpHeaderChecker />} />
          <Route path="/http-status-checker" element={<HttpStatusChecker />} />
          <Route path="/base64-encode" element={<Base64Encode />} />
          <Route path="/base64-decode" element={<Base64Decode />} />
          <Route path="/image-to-base64" element={<ImageToBase64 />} />
          <Route path="/base64-to-image" element={<Base64ToImage />} />
          <Route path="/url-encode" element={<UrlEncode />} />
          <Route path="/url-decode" element={<UrlDecode />} />
          <Route path="/color-tester" element={<ColorTester />} />
          <Route path="/color-picker-from-image" element={<ColorPickerFromImage />} />
          <Route path="/svg-viewer" element={<SvgViewer />} />
          <Route path="/screen-resolution" element={<ScreenResolution />} />
          <Route path="/window-size" element={<WindowSize />} />
          <Route path="/redirect-generator" element={<RedirectGenerator />} />
          <Route path="/pixel-ruler" element={<PixelRuler />} />
          
          {/* Add route for electrical/units */}
          <Route path="/electrical/units" element={<NotFound />} />
          <Route path="/electrical/components" element={<NotFound />} />
          <Route path="/electrical/symbols" element={<NotFound />} />
          <Route path="/electrical/laws" element={<NotFound />} />
          <Route path="/electrical/save-electricity" element={<NotFound />} />
          <Route path="/electrical/save-energy" element={<NotFound />} />
          <Route path="/electrical/calculators/power" element={<NotFound />} />
          <Route path="/electrical/calculators/voltage-divider" element={<NotFound />} />
          <Route path="/electrical/calculators/capacitance" element={<NotFound />} />
          <Route path="/electrical/calculators/resistance" element={<NotFound />} />
          <Route path="/electrical/calculators/frequency" element={<NotFound />} />
          <Route path="/electrical/lighting/lumens" element={<NotFound />} />
          <Route path="/electrical/lighting/led-savings" element={<NotFound />} />
          <Route path="/electrical/lighting/wattage" element={<NotFound />} />
          <Route path="/electrical/lighting/color-temp" element={<NotFound />} />
          <Route path="/electrical/lighting/energy-usage" element={<NotFound />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
