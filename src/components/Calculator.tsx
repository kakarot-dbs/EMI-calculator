import React from 'react';
import { Calculator as CalculatorIcon, PieChart, Calendar, DollarSign } from 'lucide-react';
import { useLoan } from '../context/LoanContext';

export default function Calculator() {
  const {
    loanAmount,
    interestRate,
    loanTerm,
    setLoanAmount,
    setInterestRate,
    setLoanTerm,
    calculateEMI,
    totalPayment,
    totalInterest
  } = useLoan();

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <CalculatorIcon className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">EMI Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Amount (₹)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (% per annum)
            </label>
            <div className="relative">
              <PieChart className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Term (months)
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-600 font-medium">Monthly EMI</p>
            <p className="text-3xl font-bold text-blue-700">
              ₹{calculateEMI().toFixed(2)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-600">Total Payment</p>
              <p className="text-lg font-semibold text-gray-800">
                ₹{totalPayment().toFixed(2)}
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-600">Total Interest</p>
              <p className="text-lg font-semibold text-gray-800">
                ₹{totalInterest().toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}