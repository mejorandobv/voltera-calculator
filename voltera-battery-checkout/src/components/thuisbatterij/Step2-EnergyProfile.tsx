'use client'

import { ThuisbatterijStepProps } from '@/types/thuisbatterij'
import { formatNumber, formatCurrency } from '@/lib/utils'

export function Step2EnergyProfile({ quote, onNext, onBack }: ThuisbatterijStepProps) {
  const { energyProfile } = quote.data
  const firstName = quote.customer.name.split(' ')[0]
  
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
                        strokeDasharray={`${32 * 3.5} 351.86`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-green-600">32%</span>
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
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-sm font-medium text-green-700">Uw situatie</span>
                  </div>
                  
                  {[
                    'Zonnepanelen',
                    'Besparing',
                    'Energiesysteem',
                    'Serviceplan',
                    'Uw aanbod'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm">{index + 3}</span>
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Analyse van uw huidige situatie</h1>
              <p className="text-gray-600">Uw energieprofiel in één overzicht</p>
            </div>
            
            {/* Compact Overview Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              
              {/* Stroomverbruik */}
              <div className="bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">⚡</span>
                  <h3 className="font-semibold text-gray-900">Stroomverbruik</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">{formatNumber(energyProfile.yearlyUsage)} kWh</p>
                  <p className="text-lg font-semibold text-blue-600">{formatCurrency(energyProfile.electricityCost)}/jaar</p>
                  <p className="text-xs text-gray-500">€{energyProfile.currentRate.toFixed(2)}/kWh • {energyProfile.currentSupplier}</p>
                </div>
              </div>

              {/* Zonnepanelen */}
              <div className="bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">☀️</span>
                  <h3 className="font-semibold text-gray-900">Zonnepanelen</h3>
                </div>
                {energyProfile.hasSolar ? (
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-green-600">{formatNumber(energyProfile.yearlyProduction || 0)} kWh</p>
                    <p className="text-sm text-gray-600">{energyProfile.solarPanels} panelen • {energyProfile.solarCapacity}</p>
                    <div className="flex gap-1 mt-2">
                      <div className="flex-1 bg-blue-200 rounded h-2">
                        <div className="bg-blue-500 rounded h-2" style={{ width: '70%' }} />
                      </div>
                      <div className="flex-1 bg-green-200 rounded h-2">
                        <div className="bg-green-500 rounded h-2" style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-sm text-amber-600 font-medium">Geen panelen</p>
                    <p className="text-xs text-gray-600">Overweeg combinatiepakket</p>
                  </div>
                )}
              </div>

              {/* Teruglevering */}
              <div className="bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🔄</span>
                  <h3 className="font-semibold text-gray-900">Teruglevering</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-orange-600">{formatNumber(energyProfile.feedInKwh)} kWh</p>
                  <div className="bg-red-50 rounded-lg p-2 mt-2">
                    <p className="text-sm font-semibold text-red-700">Terugleverkosten: {formatCurrency(energyProfile.feedInKwh * 0.08)}/jaar</p>
                    <p className="text-xs text-red-600">U betaalt voor teruglevering!</p>
                  </div>
                  <p className="text-xs text-orange-600 font-medium mt-1">💡 Met batterij bespaart u deze kosten</p>
                </div>
              </div>

              {/* Meterkast */}
              <div className="bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">⚡</span>
                  <h3 className="font-semibold text-gray-900">Meterkast</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-blue-600">{energyProfile.electricalPanelPhases}-fase</p>
                  <p className="text-sm text-gray-600">Max {energyProfile.electricalPanelPhases === 1 ? '3.5kW' : '11kW'}</p>
                  <p className="text-xs text-green-600 font-medium">✓ Batterij compatibel</p>
                </div>
              </div>
            </div>

            {/* Stroomvreters - Only if present */}
            {energyProfile.highConsumptionDevices.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🔌</span>
                  <h3 className="font-semibold text-gray-900">Stroomvreters</h3>
                </div>
                <div className="flex gap-4">
                  {energyProfile.highConsumptionDevices.map((device, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2">
                      <span className="text-lg">{device.icon}</span>
                      <div>
                        <p className="font-medium text-sm text-gray-900">{device.name}</p>
                        <p className="text-xs text-gray-600">{device.consumption} kWh/jaar</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                Volgende - Bekijk uw batterij opties
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}