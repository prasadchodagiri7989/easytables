import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GuidanceSection } from "../GuidanceSection";

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

export const MortgageCalculator = () => {
  const [housePrice, setHousePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("30");
  const [interestRate, setInterestRate] = useState("");
  const [results, setResults] = useState<MortgageResults | null>(null);

  // Derived state for sliders
  const [downPaymentPercent, setDownPaymentPercent] = useState<number[]>([20]);

  // Update downPayment when downPaymentPercent changes
  const handleDownPaymentPercentChange = (value: number[]) => {
    setDownPaymentPercent(value);
    if (housePrice) {
      const house = parseFloat(housePrice);
      if (!isNaN(house)) {
        setDownPayment(((house * value[0]) / 100).toFixed(0));
      }
    }
  };

  // Update downPaymentPercent when downPayment changes
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

  // Update downPayment when housePrice changes
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
    const house = parseFloat(housePrice);
    const down = parseFloat(downPayment);
    const term = parseFloat(loanTerm);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate

    if (isNaN(house) || isNaN(down) || isNaN(term) || isNaN(rate) || rate <= 0) {
      return;
    }

    const loanAmount = house - down;
    const numberOfPayments = term * 12;

    // Calculate monthly payment
    const monthlyPayment = (loanAmount * rate * Math.pow(1 + rate, numberOfPayments)) / 
                         (Math.pow(1 + rate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    // Generate amortization schedule by year
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

  // Formatter for currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-header">Mortgage Calculator</h2>
      
      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
          <TabsTrigger value="amortization">Amortization Schedule</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calculator" className="animate-fade-in">
          <Card className="p-6 glass-card">
            <div className="space-y-6">
              <div className="space-y-4">
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
                <div className="form-group">
                  <div className="flex justify-between">
                    <Label htmlFor="loan-term" className="form-label">Loan Term (years)</Label>
                    <span className="text-sm text-gray-600">{(parseFloat(loanTerm) / 30 * 100).toFixed(0)}%</span>
                  </div>
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
                </div>
                
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
                  Calculate Mortgage
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
                          <div className="text-sm text-gray-600">Loan Amount</div>
                          <div className="text-lg font-semibold">
                            {formatCurrency(parseFloat(housePrice) - parseFloat(downPayment))}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Down Payment</div>
                          <div className="text-lg font-semibold">
                            {formatCurrency(parseFloat(downPayment))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                        <div>
                          <div className="text-sm text-gray-600">Total Principal</div>
                          <div className="text-lg font-semibold">
                            {formatCurrency(parseFloat(housePrice) - parseFloat(downPayment))}
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
      <p>The Mortgage Calculator helps you estimate your monthly loan payments based on house price, down payment, interest rate, and loan term.</p>

      <p className="mt-2"><strong>How to Use:</strong></p>
      <ol className="list-decimal pl-5">
        <li>Enter the house price in the input field.</li>
        <li>Adjust the down payment percentage or enter a custom amount.</li>
        <li>Select the loan term (15, 20, or 30 years).</li>
        <li>Enter the interest rate percentage.</li>
        <li>Click "Calculate Mortgage" to get estimated monthly payments.</li>
      </ol>
    </div>

    <div>
      <h4 className="font-medium mb-1">Features</h4>
      <ul className="list-disc pl-5">
        <li>Calculates monthly mortgage payments instantly.</li>
        <li>Supports adjustable down payments and loan terms.</li>
        <li>Simple and easy-to-use interface.</li>
        <li>Provides an amortization schedule for better loan tracking.</li>
      </ul>
    </div>
  </div>
</GuidanceSection>

    </div>
  );
};
