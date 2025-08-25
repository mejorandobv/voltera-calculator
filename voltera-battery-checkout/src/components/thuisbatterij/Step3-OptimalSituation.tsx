'use client'

import { ThuisbatterijStepProps } from '@/types/thuisbatterij'
import { formatCurrency } from '@/lib/utils'

export function Step3OptimalSituation({ quote, onNext, onBack }: ThuisbatterijStepProps) {
  const { selectedBattery, energyProfile } = quote.data
  
  // Calculate savings (these would normally come from backend calculations)
  const savingsOnFeedIn = Math.round(energyProfile.feedInKwh * 0.08) // Save on feed-in costs
  const savingsOnEnergyPurchase = Math.round(energyProfile.yearlyUsage * 0.15) // Save on buying energy
  const dynamicTradingEarnings = 350 // Potential earnings from dynamic trading
  const totalYearlySavings = savingsOnFeedIn + savingsOnEnergyPurchase + dynamicTradingEarnings
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-green-600">Voltera</div>
              <div className="ml-2 text-sm text-gray-500">Thuisbatterij Specialist</div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-gray-900">9.4</span>
                  <span className="text-gray-600 ml-1">10.000+ beoordelingen</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Progress Sidebar - 30% */}
          <div className="col-span-4">
            <div className="sticky top-8">
              {/* Progress Circle */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
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
                        stroke="#10B981"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${48 * 3.5} 351.86`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-green-600">48%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Voortgang aanbod</p>
                </div>
                
                {/* Steps List */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-sm font-medium text-green-700">Introductie</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-sm font-medium text-green-700">Uw situatie</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-sm font-medium text-green-700">Optimale situatie</span>
                  </div>
                  
                  {[
                    'Besparing details',
                    'Energiesysteem',
                    'Serviceplan',
                    'Uw aanbod'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm">{index + 4}</span>
                      </div>
                      <span className="text-sm text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Options */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Aanbod opties</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="text-xl">📥</span>
                    <div>
                      <div className="font-medium text-sm">Downloaden</div>
                      <div className="text-xs text-gray-500">PDF opslaan</div>
                    </div>
                  </button>
                  
                  <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="text-xl">🖨️</span>
                    <div>
                      <div className="font-medium text-sm">Afdrukken</div>
                      <div className="text-xs text-gray-500">Papieren kopie</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - 70% */}
          <div className="col-span-8">
            
            {/* Page Title */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Uw optimale situatie</h1>
              <p className="text-gray-600">Uw besparingen en gekozen batterij systeem</p>
            </div>
            
            {/* Savings Overview Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              
              {/* Bespaard op terugleverkosten */}
              <div className="bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🔄</span>
                  <h3 className="font-semibold text-gray-900">Bespaard op terugleverkosten</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-green-600">{formatCurrency(savingsOnFeedIn)}</p>
                  <p className="text-xs text-gray-600">per jaar</p>
                  <p className="text-xs text-gray-500 mt-2">U gebruikt uw eigen stroom in plaats van terugleveren</p>
                </div>
              </div>

              {/* Bespaard op energie kopen */}
              <div className="bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">⚡</span>
                  <h3 className="font-semibold text-gray-900">Bespaard op energie kopen</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-green-600">{formatCurrency(savingsOnEnergyPurchase)}</p>
                  <p className="text-xs text-gray-600">per jaar</p>
                  <p className="text-xs text-gray-500 mt-2">Gebruik opgeslagen energie in plaats van inkopen</p>
                </div>
              </div>

              {/* Verdient met dynamisch handelen */}
              <div className="bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📈</span>
                  <h3 className="font-semibold text-gray-900">Verdient met dynamisch handelen*</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-purple-600">{formatCurrency(dynamicTradingEarnings)}</p>
                  <p className="text-xs text-gray-600">per jaar</p>
                  <p className="text-xs text-gray-500 mt-2">Slim laden bij lage en ontladen bij hoge prijzen</p>
                  <p className="text-xs text-purple-600 mt-1">* Gebaseerd op verwachting</p>
                </div>
              </div>

              {/* Totale jaarlijkse besparing */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-5 border-2 border-green-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">💰</span>
                  <h3 className="font-semibold text-gray-900">Totale jaarlijkse besparing</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-green-600">{formatCurrency(totalYearlySavings)}</p>
                  <p className="text-sm text-gray-600">per jaar</p>
                  <p className="text-xs text-green-700 font-medium mt-2">Terugverdientijd: ~8 jaar</p>
                </div>
              </div>
            </div>


            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={onBack}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                ← Vorige
              </button>
              <button
                onClick={onNext}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all shadow-lg"
              >
                Volgende - Bekijk gedetailleerde besparing
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}