'use client'

import { useState } from 'react'
import { ThuisbatterijStepProps } from '@/types/thuisbatterij'
import { NavigationButtons } from '@/components/shared/NavigationButtons'
import { formatCurrency } from '@/lib/utils'

export function Step7FinanceOptions({ quote, onNext, onBack, currentStep = 1, onStepNavigation }: ThuisbatterijStepProps) {
  const [selectedOption, setSelectedOption] = useState<'cash' | 'financing'>('cash')
  const { financeOptions } = quote.data
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Progress Sidebar - 30% */}
          <div className="col-span-3">
            <div className="sticky top-0 min-h-screen flex flex-col justify-center">
              {/* Progress Circle with Logo */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                {/* VOLTERA Logo in header */}
                <div className="text-center mb-6">
                  <img src="/images/voltera-logo-text.png" alt="VOLTERA" className="h-16 mx-auto" />
                </div>
                <div className="text-center mb-6">
                  <div className="relative inline-flex items-center justify-center">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#76d055"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${87.5 * 3.5} 351.86`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#76d055]">87.5%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Voortgang aanbod</p>
                </div>
                
                {/* Steps List */}
                <div className="space-y-3">
                  {[
                    { label: 'Introductie', step: 1 },
                    { label: 'Uw situatie nu', step: 2 },
                    { label: 'De optimale situatie', step: 3 },
                    { label: 'De oplossing', step: 4 },
                    { label: 'Energiesysteem', step: 5 },
                    { label: 'Serviceplan', step: 6 },
                    { label: 'Financieringsmogelijkheden', step: 7 },
                    { label: 'Uw aanbod', step: 8 }
                  ].map((stepItem, index) => {
                    const isCurrentStep = currentStep === stepItem.step
                    const isCompletedStep = currentStep > stepItem.step
                    const isClickable = onStepNavigation && stepItem.step <= currentStep
                    
                    return (
                      <div 
                        key={index} 
                        className={`flex items-center gap-3 ${isClickable ? 'cursor-pointer hover:bg-gray-50 rounded-lg p-1 -m-1' : ''}`}
                        onClick={isClickable ? () => onStepNavigation(stepItem.step) : undefined}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          isCurrentStep 
                            ? 'bg-green-600' 
                            : isCompletedStep 
                              ? 'bg-green-100' 
                              : 'bg-gray-100'
                        }`}>
                          {isCompletedStep && !isCurrentStep ? (
                            <span className="text-[#76d055] text-sm">✓</span>
                          ) : (
                            <span className={`text-sm ${
                              isCurrentStep 
                                ? 'text-black font-bold' 
                                : isCompletedStep 
                                  ? 'text-[#76d055] font-medium' 
                                  : 'text-gray-400'
                            }`}>
                              {stepItem.step}
                            </span>
                          )}
                        </div>
                        <span className={`text-sm ${
                          isCurrentStep 
                            ? 'font-medium text-[#76d055]' 
                            : isCompletedStep 
                              ? 'font-medium text-[#76d055]' 
                              : 'text-gray-600'
                        }`}>
                          {stepItem.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Main Content - 70% */}
          <div className="col-span-9">
            
            {/* Page Title */}
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Financieringsmogelijkheden</h1>
              <p className="text-gray-600">Kies uw financieringsoptie</p>
            </div>
        
        {/* Toggle Header */}
        <div className="bg-gray-100 rounded-xl p-1 mb-6">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => setSelectedOption('cash')}
              className={`py-3 px-4 rounded-lg font-medium text-sm transition-all ${
                selectedOption === 'cash'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Eigen middelen
            </button>
            <button
              onClick={() => setSelectedOption('financing')}
              className={`py-3 px-4 rounded-lg font-medium text-sm transition-all ${
                selectedOption === 'financing'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Met financiering
            </button>
          </div>
        </div>

        {/* Cash Payment Option */}
        {selectedOption === 'cash' && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mb-6 border border-blue-200">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm">
              <span className="text-xl">💰</span>
              <span className="text-gray-900">Betaling eigen middelen</span>
            </h3>
            
            <div className="bg-white rounded-lg p-3 border border-blue-100 mb-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Batterij systeem</span>
                  <span className="text-xs font-medium text-gray-900">{formatCurrency(financeOptions.cash.orderPrice)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Installatie</span>
                  <span className="text-xs font-medium text-gray-900">{formatCurrency(financeOptions.cash.installationPrice)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#76d055] font-medium">ISDE subsidie</span>
                  <span className="text-xs font-bold text-[#76d055]">-{formatCurrency(financeOptions.cash.subsidies)}</span>
                </div>
                <hr className="border-gray-200"/>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-gray-900">Uw investering</span>
                  <span className="font-bold text-lg text-blue-600">{formatCurrency(financeOptions.cash.netPrice)}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-100 rounded-lg p-3">
              <div className="text-center">
                <p className="text-xs text-blue-800 font-medium">✓ Geen rente • ✓ Directe eigendom • ✓ Maximale ROI</p>
              </div>
            </div>
          </div>
        )}

        {/* Financing Option */}
        {selectedOption === 'financing' && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 mb-6 border border-green-200">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm">
              <span className="text-xl">🏦</span>
              <span className="text-gray-900">Financiering via lening</span>
            </h3>
            
            <div className="bg-white rounded-lg p-3 border border-green-100 mb-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Looptijd</span>
                  <span className="text-xs font-medium text-gray-900">{financeOptions.financing.loanTerm} jaar • {financeOptions.financing.interestRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Totale kosten</span>
                  <span className="text-xs font-medium text-gray-900">{formatCurrency(financeOptions.financing.totalCost)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#76d055] font-medium">Subsidies</span>
                  <span className="text-xs font-bold text-[#76d055]">-{formatCurrency(financeOptions.financing.totalSubsidies)}</span>
                </div>
                <hr className="border-gray-200"/>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-gray-900">Per maand</span>
                  <span className="font-bold text-lg text-[#76d055]">{formatCurrency(financeOptions.financing.monthlyPayment)}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-100 rounded-lg p-3 mb-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-green-800">Maandelijkse besparing</span>
                <span className="text-xs font-bold text-green-800">{formatCurrency(financeOptions.financing.expectedMonthlySavings)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#76d055] font-medium">Netto voordeel per maand</span>
                <span className="text-xs font-bold text-[#76d055]">
                  {formatCurrency(financeOptions.financing.expectedMonthlySavings - financeOptions.financing.monthlyPayment)}
                </span>
              </div>
            </div>
            
            <div className="bg-green-100 rounded-lg p-3">
              <div className="text-center">
                <p className="text-xs text-green-800 font-medium">✓ Direct besparen • ✓ Lage maandlasten • ✓ Mogelijk renteaftrek</p>
              </div>
            </div>
          </div>
        )}

        {/* Summary Comparison */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6 border">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm">
            <span className="text-xl">📊</span>
            <span className="text-gray-900">Vergelijking 15 jaar</span>
          </h3>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-white rounded-lg p-3 border text-center">
              <h4 className="text-xs font-medium text-gray-900 mb-1">Eigen middelen</h4>
              <p className="text-sm font-bold text-blue-600">{formatCurrency(financeOptions.comparison.cash15Year)}</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 border text-center">
              <h4 className="text-xs font-medium text-gray-900 mb-1">Met financiering</h4>
              <p className="text-sm font-bold text-[#76d055]">{formatCurrency(financeOptions.comparison.financing15Year)}</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
            <div className="text-center">
              <p className="text-xs text-blue-700">
                <span className="font-medium">Verschil:</span> {formatCurrency(Math.abs(financeOptions.comparison.difference15Year))}
              </p>
            </div>
          </div>
        </div>

        <NavigationButtons onBack={onBack} onNext={onNext} />
          </div>
        </div>
      </div>
    </div>
  )
}