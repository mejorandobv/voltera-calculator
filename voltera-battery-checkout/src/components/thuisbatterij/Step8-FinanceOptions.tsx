'use client'

import { useState } from 'react'
import { ThuisbatterijStepProps } from '@/types/thuisbatterij'
import { ProgressBar } from '@/components/shared/ProgressBar'
import { NavigationButtons } from '@/components/shared/NavigationButtons'
import { formatCurrency } from '@/lib/utils'

export function Step8FinanceOptions({ quote, onNext, onBack }: ThuisbatterijStepProps) {
  const [selectedOption, setSelectedOption] = useState<'cash' | 'financing'>('cash')
  const { financeOptions } = quote.data
  
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <ProgressBar percentage={85} step={7} total={8} />
      
      <div className="mt-16 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-6">Financieringsmogelijkheden</h2>
        
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
                  <span className="text-xs text-green-700 font-medium">ISDE subsidie</span>
                  <span className="text-xs font-bold text-green-600">-{formatCurrency(financeOptions.cash.subsidies)}</span>
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
                  <span className="text-xs text-green-700 font-medium">Subsidies</span>
                  <span className="text-xs font-bold text-green-600">-{formatCurrency(financeOptions.financing.totalSubsidies)}</span>
                </div>
                <hr className="border-gray-200"/>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-gray-900">Per maand</span>
                  <span className="font-bold text-lg text-green-600">{formatCurrency(financeOptions.financing.monthlyPayment)}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-100 rounded-lg p-3 mb-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-green-800">Maandelijkse besparing</span>
                <span className="text-xs font-bold text-green-800">{formatCurrency(financeOptions.financing.expectedMonthlySavings)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-green-700 font-medium">Netto voordeel per maand</span>
                <span className="text-xs font-bold text-green-700">
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
              <p className="text-sm font-bold text-green-600">{formatCurrency(financeOptions.comparison.financing15Year)}</p>
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
  )
}