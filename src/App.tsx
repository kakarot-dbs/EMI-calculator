import React from 'react';
import { Toaster } from 'react-hot-toast';
import { LoanProvider } from './context/LoanContext';
import Calculator from './components/Calculator';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';
import ReferralSystem from './components/ReferralSystem';

function App() {
  return (
    <LoanProvider>
      <div className="min-h-screen bg-gray-100">
        {/* Ad Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 text-center">
          <p className="text-sm">Special Offer: Get up to 50% off on loan processing fees! Limited time only.</p>
        </div>

        <main className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Smart EMI Calculator
            </h1>
            <p className="text-lg text-gray-600">
              Calculate EMIs, compare loans, and get personalized offers
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Calculator />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>

          <div className="mt-8">
            <ReferralSystem />
          </div>
        </main>

        <Chatbot />
        <Toaster position="bottom-center" />
      </div>
    </LoanProvider>
  );
}

export default App;