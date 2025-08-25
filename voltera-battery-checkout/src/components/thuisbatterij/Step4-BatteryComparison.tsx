'use client'

import { ThuisbatterijStepProps } from '@/types/thuisbatterij'

export function Step4BatteryComparison({ quote, onNext, onBack }: ThuisbatterijStepProps) {
  
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
                        strokeDasharray={`${64 * 3.5} 351.86`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-green-600">64%</span>
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
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-sm font-medium text-green-700">Optimale situatie</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <span className="text-sm font-medium text-green-700">Batterij vergelijking</span>
                  </div>
                  
                  {[
                    'Energiesysteem',
                    'Serviceplan',
                    'Uw aanbod'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm">{index + 5}</span>
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Waarom Alpha ESS?</h1>
              <p className="text-gray-600">Vergelijking met andere thuisbatterij merken</p>
            </div>
            
            {/* Comparison Cards */}
            <div className="space-y-4">
              
              {/* Cycles Comparison */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  {/* Alpha ESS */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 border-r border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">A</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Alpha ESS</h3>
                        <p className="text-sm text-green-600">Uw gekozen merk</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-green-600">10.000 cycli</p>
                      <p className="text-sm text-gray-700">Gaat 67% langer mee</p>
                    </div>
                  </div>
                  
                  {/* Other Brands */}
                  <div className="bg-gray-50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">?</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Andere merken</h3>
                        <p className="text-sm text-gray-500">Gemiddelde markt</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-gray-600">6.000 cycli</p>
                      <p className="text-sm text-gray-500">Standaard levensduur</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discharge Speed Comparison */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  {/* Alpha ESS */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 border-r border-gray-200">
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900">Ontlaadsnelheid</h4>
                      <p className="text-2xl font-bold text-blue-600">5 kW continu</p>
                      <p className="text-sm text-gray-700">Voorziet heel uw huis van stroom</p>
                    </div>
                  </div>
                  
                  {/* Other Brands */}
                  <div className="bg-gray-50 p-6">
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900">Ontlaadsnelheid</h4>
                      <p className="text-2xl font-bold text-gray-600">3 kW continu</p>
                      <p className="text-sm text-gray-500">Beperkte stroombehoefte</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warranty Comparison */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  {/* Alpha ESS */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 border-r border-gray-200">
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900">Garantie</h4>
                      <p className="text-2xl font-bold text-purple-600">10 jaar fabrieksgarantie</p>
                      <p className="text-sm text-gray-700">Volledige dekking en zekerheid</p>
                    </div>
                  </div>
                  
                  {/* Other Brands */}
                  <div className="bg-gray-50 p-6">
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900">Garantie</h4>
                      <p className="text-2xl font-bold text-gray-600">5-7 jaar garantie</p>
                      <p className="text-sm text-gray-500">Beperkte garantieperiode</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Comparison */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  {/* Alpha ESS */}
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 border-r border-gray-200">
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900">Marktpositie</h4>
                      <p className="text-2xl font-bold text-orange-600">15 jaar A-merk ervaring</p>
                      <p className="text-sm text-gray-700">Bewezen kwaliteit en betrouwbaarheid</p>
                    </div>
                  </div>
                  
                  {/* Other Brands */}
                  <div className="bg-gray-50 p-6">
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900">Marktpositie</h4>
                      <p className="text-2xl font-bold text-gray-600">Net nieuw in de markt</p>
                      <p className="text-sm text-gray-500">Onbewezen lange termijn prestaties</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Summary Card */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 mt-6 text-white">
              <h3 className="text-xl font-bold mb-3">Waarom Alpha ESS de beste keuze is</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-200">✓</span>
                  <span className="text-sm">67% langere levensduur</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-200">✓</span>
                  <span className="text-sm">Hogere ontlaadsnelheid</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-200">✓</span>
                  <span className="text-sm">Langere garantieperiode</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-200">✓</span>
                  <span className="text-sm">Bewezen A-merk kwaliteit</span>
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
                Volgende - Bekijk uw systeem details
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}