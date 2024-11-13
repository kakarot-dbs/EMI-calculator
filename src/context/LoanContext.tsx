import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoanContextType {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  setLoanAmount: (amount: number) => void;
  setInterestRate: (rate: number) => void;
  setLoanTerm: (term: number) => void;
  calculateEMI: () => number;
  totalPayment: () => number;
  totalInterest: () => number;
}

const LoanContext = createContext<LoanContextType | undefined>(undefined);

export function LoanProvider({ children }: { children: ReactNode }) {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTerm, setLoanTerm] = useState(12);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTerm;
    
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    return isNaN(emi) ? 0 : emi;
  };

  const totalPayment = () => {
    return calculateEMI() * loanTerm;
  };

  const totalInterest = () => {
    return totalPayment() - loanAmount;
  };

  return (
    <LoanContext.Provider value={{
      loanAmount,
      interestRate,
      loanTerm,
      setLoanAmount,
      setInterestRate,
      setLoanTerm,
      calculateEMI,
      totalPayment,
      totalInterest
    }}>
      {children}
    </LoanContext.Provider>
  );
}

export function useLoan() {
  const context = useContext(LoanContext);
  if (context === undefined) {
    throw new Error('useLoan must be used within a LoanProvider');
  }
  return context;
}