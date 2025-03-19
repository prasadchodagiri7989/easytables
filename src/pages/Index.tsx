
import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-2rem)] flex flex-col items-center justify-center p-6">
        <div className="glass-card p-8 max-w-3xl w-full animate-scale-in">
          <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Welcome to Math Tools
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Your all-in-one suite of mathematical calculators and educational tools
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/scientific" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Scientific Calculator</h3>
              <p className="text-sm text-gray-500">Advanced math operations</p>
            </a>
            <a href="/percentage" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Percentage Calculator</h3>
              <p className="text-sm text-gray-500">Calculate percentages easily</p>
            </a>
            <a href="/fraction" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Fraction Calculator</h3>
              <p className="text-sm text-gray-500">Work with fractions</p>
            </a>
            <a href="/average" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Average Calculator</h3>
              <p className="text-sm text-gray-500">Find means and averages</p>
            </a>
            <a href="/unit-converter" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Unit Converter</h3>
              <p className="text-sm text-gray-500">Convert between units</p>
            </a>
            <a href="/grade" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Grade Calculator</h3>
              <p className="text-sm text-gray-500">Calculate your grades</p>
            </a>
            <a href="/gpa" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">GPA Calculator</h3>
              <p className="text-sm text-gray-500">Calculate your GPA</p>
            </a>
            <a href="/final-grade" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Final Grade Calculator</h3>
              <p className="text-sm text-gray-500">What you need on your final</p>
            </a>
            <a href="/mortgage" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Mortgage Calculator</h3>
              <p className="text-sm text-gray-500">Calculate mortgage payments</p>
            </a>
            <a href="/compound-interest" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">Compound Interest</h3>
              <p className="text-sm text-gray-500">Calculate investment growth</p>
            </a>
            <a href="/bmi" className="glass-card p-5 hover:shadow-md transition-all text-center">
              <h3 className="font-medium mb-2">BMI Calculator</h3>
              <p className="text-sm text-gray-500">Calculate your BMI</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
