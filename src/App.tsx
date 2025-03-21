
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
          <Route path="/unit-converter" element={<Layout><UnitConverter /></Layout>} />
          
          {/* Online Tools Routes */}
          <Route path="current-time" element={<Layout><CurrentTime /></Layout>} />
          <Route path="todays-date" element={<Layout><CurrentTime /></Layout>} />
          <Route path="stopwatch" element={<Layout><Stopwatch /></Layout>} />
          <Route path="alarm-clock" element={<Layout><AlarmClock /></Layout>} />
          <Route path="todo-list" element={<Layout><TodoList /></Layout>} />
          <Route path="random-number" element={<Layout><RandomNumberGenerator /></Layout>} />
          <Route path="bar-graph" element={<Layout><BarGraphMaker /></Layout>} />
          <Route path="calendar" element={<Layout><Calendar /></Layout>} />
          <Route path="call-recorder" element={<Layout><CallRecorder /></Layout>} />
          <Route path="camera" element={<Layout><CameraOnline /></Layout>} />
          <Route path="chart-maker" element={<Layout><ChartMaker /></Layout>} />
          <Route path="click-counter" element={<Layout><ClickCounter /></Layout>} />
          <Route path="cps-test" element={<Layout><CPSTest /></Layout>} />
          <Route path="countdown" element={<Layout><CountdownTimer /></Layout>} />
          <Route path="line-graph" element={<Layout><LineGraphMaker /></Layout>} />
          <Route path="grocery-list" element={<Layout><GroceryList /></Layout>} />
          <Route path="mic-test" element={<Layout><MicTest /></Layout>} />
          <Route path="online-clock" element={<Layout><OnlineClock /></Layout>} />
          <Route path="online-mirror" element={<Layout><OnlineMirror /></Layout>} />
          <Route path="notepad" element={<Layout><OnlineNotepad /></Layout>} />
          <Route path="notes" element={<Layout><OnlineNotes /></Layout>} />
          <Route path="password-generator" element={<Layout><PasswordGenerator /></Layout>} />
          <Route path="pie-chart" element={<Layout><PieChartMaker /></Layout>} />
          <Route path="scatter-plot" element={<Layout><ScatterPlot /></Layout>} />
          <Route path="scoreboard" element={<Layout><Scoreboard /></Layout>} />
          <Route path="screen-recorder" element={<Layout><ScreenRecorder /></Layout>} />
          <Route path="screenshot" element={<Layout><Screenshot /></Layout>} />
          <Route path="speech-to-text" element={<Layout><SpeechToText /></Layout>} />
          <Route path="text-editor" element={<Layout><TextEditor /></Layout>} />
          <Route path="table-chart" element={<Layout><TableChartMaker /></Layout>} />
          <Route path="text-to-speech" element={<Layout><TextToSpeech /></Layout>} />
          <Route path="tone-generator" element={<Layout><ToneGenerator /></Layout>} />
          <Route path="ruler-cm" element={<Layout><RulerCm /></Layout>} />
          <Route path="ruler-inch" element={<Layout><RulerInch /></Layout>} />
          <Route path="voice-recorder" element={<Layout><VoiceRecorder /></Layout>} />
          <Route path="webcam-test" element={<Layout><WebcamTest /></Layout>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
