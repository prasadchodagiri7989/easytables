import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GuidanceSection } from "../GuidanceSection";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom"; // Or use `next/link` for Next.js

interface MortgageResults {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  amortizationSchedule: {
    year: number;
    remainingBalance: number;
    totalPaid: number;
    interestPaid: number;
    principalPaid: number;
  }[];
}

type CalculationMode = "standard" | "findTerm" | "findLoanAmount" | "findPayment";

export const MortgageCalculator = () => {
  const [calculationMode, setCalculationMode] = useState<CalculationMode>("standard");
  const [housePrice, setHousePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("30");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [results, setResults] = useState<MortgageResults | null>(null);

  const [downPaymentPercent, setDownPaymentPercent] = useState<number[]>([20]);

  const handleDownPaymentPercentChange = (value: number[]) => {
    setDownPaymentPercent(value);
    if (housePrice) {
      const house = parseFloat(housePrice);
      if (!isNaN(house)) {
        setDownPayment(((house * value[0]) / 100).toFixed(0));
      }
    }
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDownPayment(e.target.value);
    if (housePrice) {
      const house = parseFloat(housePrice);
      const down = parseFloat(e.target.value);
      if (!isNaN(house) && !isNaN(down) && house > 0) {
        setDownPaymentPercent([(down / house) * 100]);
      }
    }
  };

  const handleHousePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHousePrice(e.target.value);
    if (downPaymentPercent[0]) {
      const house = parseFloat(e.target.value);
      if (!isNaN(house)) {
        setDownPayment(((house * downPaymentPercent[0]) / 100).toFixed(0));
      }
    }
  };

  const calculateMortgage = () => {
    if (calculationMode === "standard") {
      calculateStandardMortgage();
    } else if (calculationMode === "findTerm") {
      calculateLoanTerm();
    } else if (calculationMode === "findLoanAmount") {
      calculateLoanAmount();
    } else if (calculationMode === "findPayment") {
      calculateMonthlyPayment();
    }
  };

  const calculateStandardMortgage = () => {
    const house = parseFloat(housePrice);
    const down = parseFloat(downPayment);
    const term = parseFloat(loanTerm);
    const rate = parseFloat(interestRate) / 100 / 12;

    if (isNaN(house) || isNaN(down) || isNaN(term) || isNaN(rate) || rate <= 0) {
      return;
    }

    const loanAmount = house - down;
    const numberOfPayments = term * 12;

    const monthlyPayment = (loanAmount * rate * Math.pow(1 + rate, numberOfPayments)) / 
                         (Math.pow(1 + rate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    generateAmortizationSchedule(loanAmount, rate, numberOfPayments, monthlyPayment, totalPayment, totalInterest);
  };

  const calculateLoanTerm = () => {
    const loan = parseFloat(loanAmount);
    const payment = parseFloat(monthlyPayment);
    const rate = parseFloat(interestRate) / 100 / 12;

    if (isNaN(loan) || isNaN(payment) || isNaN(rate) || rate <= 0 || payment <= 0 || loan <= 0) {
      return;
    }

    let t = 1;
    const maxIterations = 600;
    let found = false;

    for (let i = 1; i <= maxIterations; i++) {
      const calculatedPayment = (loan * rate * Math.pow(1 + rate, i)) / 
                              (Math.pow(1 + rate, i) - 1);
      
      if (Math.abs(calculatedPayment - payment) < 0.1) {
        t = i;
        found = true;
        break;
      }
    }

    if (!found) {
      return;
    }

    const termInYears = t / 12;
    setLoanTerm(termInYears.toFixed(1));

    const totalPayment = payment * t;
    const totalInterest = totalPayment - loan;

    generateAmortizationSchedule(loan, rate, t, payment, totalPayment, totalInterest);
  };

  const calculateLoanAmount = () => {
    const payment = parseFloat(monthlyPayment);
    const term = parseFloat(loanTerm);
    const rate = parseFloat(interestRate) / 100 / 12;

    if (isNaN(payment) || isNaN(term) || isNaN(rate) || rate <= 0 || payment <= 0) {
      return;
    }

    const numberOfPayments = term * 12;
    
    const loanAmount = payment * ((Math.pow(1 + rate, numberOfPayments) - 1) / 
                      (rate * Math.pow(1 + rate, numberOfPayments)));

    setLoanAmount(loanAmount.toFixed(0));
    
    const totalPayment = payment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    generateAmortizationSchedule(loanAmount, rate, numberOfPayments, payment, totalPayment, totalInterest);
  };

  const calculateMonthlyPayment = () => {
    const loan = parseFloat(loanAmount);
    const term = parseFloat(loanTerm);
    const rate = parseFloat(interestRate) / 100 / 12;

    if (isNaN(loan) || isNaN(term) || isNaN(rate) || rate <= 0) {
      return;
    }

    const numberOfPayments = term * 12;
    
    const monthlyPayment = (loan * rate * Math.pow(1 + rate, numberOfPayments)) / 
                         (Math.pow(1 + rate, numberOfPayments) - 1);

    setMonthlyPayment(monthlyPayment.toFixed(2));
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loan;

    generateAmortizationSchedule(loan, rate, numberOfPayments, monthlyPayment, totalPayment, totalInterest);
  };

  const generateAmortizationSchedule = (
    loanAmount: number, 
    rate: number, 
    numberOfPayments: number, 
    monthlyPayment: number,
    totalPayment: number,
    totalInterest: number
  ) => {
    const amortizationSchedule = [];
    let remainingBalance = loanAmount;
    let yearlyInterestPaid = 0;
    let yearlyPrincipalPaid = 0;
    let yearlyTotalPaid = 0;

    for (let month = 1; month <= numberOfPayments; month++) {
      const interestPayment = remainingBalance * rate;
      const principalPayment = monthlyPayment - interestPayment;

      yearlyInterestPaid += interestPayment;
      yearlyPrincipalPaid += principalPayment;
      yearlyTotalPaid += monthlyPayment;
      remainingBalance -= principalPayment;

      if (month % 12 === 0 || month === numberOfPayments) {
        amortizationSchedule.push({
          year: Math.ceil(month / 12),
          remainingBalance: remainingBalance,
          totalPaid: yearlyTotalPaid,
          interestPaid: yearlyInterestPaid,
          principalPaid: yearlyPrincipalPaid
        });

        yearlyInterestPaid = 0;
        yearlyPrincipalPaid = 0;
        yearlyTotalPaid = 0;
      }
    }

    setResults({
      monthlyPayment,
      totalPayment,
      totalInterest,
      amortizationSchedule
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const resetFields = () => {
    if (calculationMode === "standard") {
      setHousePrice("");
      setDownPayment("");
      setLoanTerm("30");
      setInterestRate("");
      setDownPaymentPercent([20]);
    } else if (calculationMode === "findTerm") {
      setLoanAmount("");
      setMonthlyPayment("");
      setInterestRate("");
    } else if (calculationMode === "findLoanAmount") {
      setMonthlyPayment("");
      setLoanTerm("30");
      setInterestRate("");
    } else if (calculationMode === "findPayment") {
      setLoanAmount("");
      setLoanTerm("30");
      setInterestRate("");
    }
    setResults(null);
  };

  const handleModeChange = (value: string) => {
    setCalculationMode(value as CalculationMode);
    resetFields();
  };

  return (
    <>
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Mortgage Calculator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
    <div className="calculator-container bg-white/40 dark:bg-transparent">
      <h2 className="calculator-header">Mortgage Calculator</h2>
      
      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
          <TabsTrigger value="amortization">Amortization Schedule</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calculator" className="animate-fade-in">
          <Card className="p-6 glass-card">
            <div className="space-y-6">
              <div className="form-group">
                <Label htmlFor="calculation-mode" className="form-label">Calculation Mode</Label>
                <Select value={calculationMode} onValueChange={handleModeChange}>
                  <SelectTrigger id="calculation-mode">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Mortgage Calculation</SelectItem>
                    <SelectItem value="findTerm">Find Loan Term</SelectItem>
                    <SelectItem value="findLoanAmount">Find Loan Amount</SelectItem>
                    <SelectItem value="findPayment">Find Monthly Payment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-4">
                {calculationMode === "standard" && (
                  <>
                    <div className="form-group">
                      <Label htmlFor="house-price" className="form-label">House Price</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <Input
                          id="house-price"
                          type="number"
                          value={housePrice}
                          onChange={handleHousePriceChange}
                          placeholder="300,000"
                          className="calculator-input pl-8"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <div className="flex justify-between">
                        <Label htmlFor="down-payment" className="form-label">Down Payment</Label>
                        <span className="text-sm text-gray-600">{downPaymentPercent[0].toFixed(0)}%</span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <Input
                          id="down-payment"
                          type="number"
                          value={downPayment}
                          onChange={handleDownPaymentChange}
                          placeholder="60,000"
                          className="calculator-input pl-8"
                        />
                      </div>
                      <div className="mt-2">
                        <Slider 
                          value={downPaymentPercent} 
                          onValueChange={handleDownPaymentPercentChange}
                          min={0}
                          max={100}
                          step={1}
                        />
                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                          <span>0%</span>
                          <span>20%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {(calculationMode === "findTerm" || calculationMode === "findPayment") && (
                  <div className="form-group">
                    <Label htmlFor="loan-amount" className="form-label">Loan Amount</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <Input
                        id="loan-amount"
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        placeholder="240,000"
                        className="calculator-input pl-8"
                      />
                    </div>
                  </div>
                )}
                
                {(calculationMode === "findTerm" || calculationMode === "findLoanAmount") && (
                  <div className="form-group">
                    <Label htmlFor="monthly-payment" className="form-label">Monthly Payment</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <Input
                        id="monthly-payment"
                        type="number"
                        value={monthlyPayment}
                        onChange={(e) => setMonthlyPayment(e.target.value)}
                        placeholder="1,200"
                        className="calculator-input pl-8"
                      />
                    </div>
                  </div>
                )}
                
                {(calculationMode === "standard" || calculationMode === "findLoanAmount" || calculationMode === "findPayment") && (
                  <div className="form-group">
                    <div className="flex justify-between">
                      <Label htmlFor="loan-term" className="form-label">Loan Term (years)</Label>
                      {calculationMode !== "findTerm" && (
                        <span className="text-sm text-gray-600">{(parseFloat(loanTerm) / 30 * 100).toFixed(0)}%</span>
                      )}
                    </div>
                    {calculationMode !== "findTerm" && (
                      <div className="mt-2">
                        <Slider 
                          value={[parseFloat(loanTerm)]} 
                          onValueChange={(value) => setLoanTerm(value[0].toString())}
                          min={0}
                          max={30}
                          step={1}
                        />
                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                          <span>0</span>
                          <span>30</span>
                        </div>
                      </div>
                    )}
                    {calculationMode === "findTerm" && loanTerm && (
                      <div className="bg-blue-50 p-3 rounded-md mt-2">
                        <div className="font-medium text-blue-800">Calculated Term: {loanTerm} years</div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="form-group">
                  <Label htmlFor="interest-rate" className="form-label">Interest Rate (%)</Label>
                  <div className="relative">
                    <Input
                      id="interest-rate"
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      placeholder="4.5"
                      className="calculator-input pr-8"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                </div>
                
                <Button 
                  onClick={calculateMortgage}
                  className="calculator-button w-full"
                >
                  Calculate
                </Button>
                
                {results && (
                  <div className="calculator-result">
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-lg font-medium mb-2">Monthly Payment</h3>
                        <div className="text-3xl font-bold text-primary">
                          {formatCurrency(results.monthlyPayment)}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                        <div>
                          <div className="text-sm text-gray-600">
                            {calculationMode === "findLoanAmount" ? "Calculated Loan Amount" : "Loan Amount"}
                          </div>
                          <div className="text-lg font-semibold">
                            {calculationMode === "standard" 
                              ? formatCurrency(parseFloat(housePrice) - parseFloat(downPayment))
                              : formatCurrency(parseFloat(loanAmount))}
                          </div>
                        </div>
                        {calculationMode === "standard" && (
                          <div>
                            <div className="text-sm text-gray-600">Down Payment</div>
                            <div className="text-lg font-semibold">
                              {formatCurrency(parseFloat(downPayment))}
                            </div>
                          </div>
                        )}
                        {calculationMode !== "standard" && (
                          <div>
                            <div className="text-sm text-gray-600">Loan Term</div>
                            <div className="text-lg font-semibold">
                              {loanTerm} years
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                        <div>
                          <div className="text-sm text-gray-600">Total Principal</div>
                          <div className="text-lg font-semibold">
                            {calculationMode === "standard" 
                              ? formatCurrency(parseFloat(housePrice) - parseFloat(downPayment))
                              : formatCurrency(parseFloat(loanAmount))}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Total Interest</div>
                          <div className="text-lg font-semibold">
                            {formatCurrency(results.totalInterest)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-gray-200">
                        <div className="text-sm text-gray-600">Total Cost (Principal + Interest)</div>
                        <div className="text-lg font-semibold">
                          {formatCurrency(results.totalPayment)}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="amortization" className="animate-fade-in">
          <Card className="p-6 glass-card">
            {!results ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Calculate a mortgage first to see the amortization schedule.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Yearly Amortization Schedule</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-4 py-2 text-left">Year</th>
                        <th className="px-4 py-2 text-right">Principal Paid</th>
                        <th className="px-4 py-2 text-right">Interest Paid</th>
                        <th className="px-4 py-2 text-right">Total Paid</th>
                        <th className="px-4 py-2 text-right">Remaining Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.amortizationSchedule.map((row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="px-4 py-2">{row.year}</td>
                          <td className="px-4 py-2 text-right">
                            {formatCurrency(row.principalPaid)}
                          </td>
                          <td className="px-4 py-2 text-right">
                            {formatCurrency(row.interestPaid)}
                          </td>
                          <td className="px-4 py-2 text-right">
                            {formatCurrency(row.totalPaid)}
                          </td>
                          <td className="px-4 py-2 text-right">
                            {formatCurrency(row.remainingBalance)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </Card>
        </TabsContent>
      </Tabs>
      <GuidanceSection title="How to Use the Mortgage Calculator">
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-1">Understanding the Mortgage Calculator</h4>
      <p>The Mortgage Calculator helps you estimate mortgage details based on different scenarios:</p>

      <p className="mt-2"><strong>Calculator Modes:</strong></p>
      <ul className="list-disc pl-5">
        <li><strong>Standard Mortgage Calculation:</strong> Calculate monthly payments based on house price, down payment, term, and interest rate.</li>
        <li><strong>Find Loan Term:</strong> Determine how long it will take to pay off a loan amount with a specific monthly payment.</li>
        <li><strong>Find Loan Amount:</strong> Calculate how much you can borrow based on what you can afford to pay monthly.</li>
        <li><strong>Find Monthly Payment:</strong> Determine your monthly payment for a specific loan amount and term.</li>
      </ul>
    </div>

    <div>
      <h4 className="font-medium mb-1">How to Use</h4>
      <ol className="list-decimal pl-5">
        <li>Select the calculation mode that fits your needs.</li>
        <li>Enter the required information based on the selected mode.</li>
        <li>Click "Calculate" to get your results.</li>
        <li>View the amortization schedule to see the loan payoff timeline.</li>
      </ol>
    </div>

    <div>
      <h4 className="font-medium mb-1">Features</h4>
      <ul className="list-disc pl-5">
        <li>Interactive sliders for adjusting values easily.</li>
        <li>Amortization schedule showing yearly payment breakdowns.</li>
        <li>Multiple calculation modes for different scenarios.</li>
        <li>Clear breakdown of principal, interest, and total costs.</li>
      </ul>
    </div>
  </div>
</GuidanceSection>

    </div>
    </>
  );
};
