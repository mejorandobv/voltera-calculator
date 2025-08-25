'use client'

import { ThuisbatterijStepProps} from "@/types/thuisbatterij"
import { ProgressBar } from '@/components/shared/ProgressBar'
import { NavigationButtons } from '@/components/shared/NavigationButtons'
import { formatNumber, formatCurrency } from '@/lib/utils'

export function Step5SavingsAnalysis({ quote, onNext, onBack }: ThuisbatterijStepProps) {
  const { savingsAnalysis } = quote.data
  
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <ProgressBar percentage={62} step={5} total={8} />
      
      <div className="mt-16 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-6">Uw besparing berekening</h2>
        
        {/* Hero Savings Card */}
        <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl p-6 mb-6 border-2 border-green-200">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-3xl">💰</span>
              <h3 className="text-lg font-bold text-gray-900">Jaarlijkse besparing</h3>
            </div>
            <p className="text-4xl font-bold text-green-600">
              {formatCurrency(savingsAnalysis.yearlySavings)}
            </p>
            <p className="text-sm text-gray-600 mt-1">per jaar op uw energierekening</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {formatCurrency(savingsAnalysis.totalSavings15Years)}
              </p>
              <p className="text-xs text-gray-600">totaal in 15 jaar</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">
                {savingsAnalysis.roiYears} jaar
              </p>
              <p className="text-xs text-gray-600">terugverdientijd</p>
            </div>
          </div>
        </div>

        {/* Monthly Breakdown */}
        <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            <span className="text-gray-900">Maandelijkse kosten</span>
          </h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Huidige energiekosten</span>
              <span className="text-sm font-medium text-red-600">€{Math.round(quote.data.calculations.currentYearlyCost/12)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Met batterij systeem</span>
              <span className="text-sm font-medium text-green-600">€{Math.round(quote.data.calculations.newYearlyCost/12)}</span>
            </div>
            <hr className="border-gray-200"/>
            <div className="flex justify-between items-center font-semibold">
              <span className="text-gray-900">Netto besparing</span>
              <span className="text-green-600">€{Math.round(savingsAnalysis.yearlySavings/12)}</span>
            </div>
          </div>
        </div>

        {/* Subsidy Information */}
        <div className="bg-orange-50 rounded-xl p-6 mb-6 border border-orange-200">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span className="text-gray-900">ISDE Subsidie</span>
          </h3>
          
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border border-orange-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Batterij investering</span>
                <span className="text-sm text-gray-900">{formatCurrency(quote.data.selectedBattery.totalPrice)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-green-700 font-medium">ISDE subsidie</span>
                <span className="text-sm font-bold text-green-600">-{formatCurrency(savingsAnalysis.subsidyAmount)}</span>
              </div>
              <hr className="my-2 border-gray-200"/>
              <div className="flex justify-between items-center font-bold">
                <span className="text-gray-900">Uw investering</span>
                <span className="text-blue-600">{formatCurrency(quote.data.selectedBattery.totalPrice - savingsAnalysis.subsidyAmount)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 15-Year Comparison Chart */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6 border">
          <h3 className="font-semibold mb-4 text-gray-900">Kosten vergelijking 15 jaar</h3>
          
          <div className="space-y-4">
            {/* Year 5 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Na 5 jaar</span>
                <span className="font-medium">Verschil: {formatCurrency(savingsAnalysis.comparisonWithoutBattery.year5Cost - (savingsAnalysis.yearlySavings * 5))}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-red-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-red-700">Zonder batterij</p>
                  <p className="font-bold text-red-800">{formatCurrency(savingsAnalysis.comparisonWithoutBattery.year5Cost)}</p>
                </div>
                <div className="bg-green-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-green-700">Met batterij</p>
                  <p className="font-bold text-green-800">{formatCurrency(quote.data.selectedBattery.totalPrice - savingsAnalysis.subsidyAmount - (savingsAnalysis.yearlySavings * 5))}</p>
                </div>
              </div>
            </div>

            {/* Year 10 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Na 10 jaar</span>
                <span className="font-medium">Verschil: {formatCurrency(savingsAnalysis.comparisonWithoutBattery.year10Cost - (savingsAnalysis.yearlySavings * 10))}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-red-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-red-700">Zonder batterij</p>
                  <p className="font-bold text-red-800">{formatCurrency(savingsAnalysis.comparisonWithoutBattery.year10Cost)}</p>
                </div>
                <div className="bg-green-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-green-700">Met batterij</p>
                  <p className="font-bold text-green-800">{formatCurrency(quote.data.selectedBattery.totalPrice - savingsAnalysis.subsidyAmount - (savingsAnalysis.yearlySavings * 10))}</p>
                </div>
              </div>
            </div>

            {/* Year 15 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Na 15 jaar</span>
                <span className="font-medium text-green-600">Verschil: {formatCurrency(savingsAnalysis.comparisonWithoutBattery.year15Cost - (savingsAnalysis.yearlySavings * 15))}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-red-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-red-700">Zonder batterij</p>
                  <p className="font-bold text-red-800">{formatCurrency(savingsAnalysis.comparisonWithoutBattery.year15Cost)}</p>
                </div>
                <div className="bg-green-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-green-700">Met batterij</p>
                  <p className="font-bold text-green-800">{formatCurrency(quote.data.selectedBattery.totalPrice - savingsAnalysis.subsidyAmount - (savingsAnalysis.yearlySavings * 15))}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financing Options */}
        <div className="bg-purple-50 rounded-xl p-6 mb-8 border border-purple-200">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">💳</span>
            <span className="text-gray-900">Financieringsmogelijkheden</span>
          </h3>
          
          <div className="space-y-4">
            {savingsAnalysis.financingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-purple-100">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{option.name}</h4>
                    {option.monthlyPayment && (
                      <p className="text-sm text-gray-600">€{option.monthlyPayment}/maand</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-purple-600">{formatCurrency(option.totalCost)}</p>
                    <p className="text-xs text-gray-500">totaal</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {option.benefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-purple-600 text-xs">✓</span>
                      <span className="text-xs text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 bg-white rounded-lg p-3 border border-purple-100">
            <p className="text-xs text-purple-700">
              <span className="font-semibold">💡 Tip:</span> Alle opties zijn mogelijk - kies wat het beste bij uw situatie past!
            </p>
          </div>
        </div>

        <NavigationButtons onBack={onBack} onNext={onNext} />
      </div>
    </div>
  )
}