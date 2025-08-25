'use client'

import { ThuisbatterijStepProps} from "@/types/thuisbatterij"
import { formatCurrency } from '@/lib/utils'

export function WebHero({ quote, onNext, onBack }: ThuisbatterijStepProps) {
  const firstName = quote.customer.name.split(' ')[0]
  const { energyProfile, selectedBattery, calculations } = quote.data
  
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
                        strokeDasharray={`${16 * 3.5} 351.86`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-green-600">16%</span>
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
                  
                  {[
                    'Uw situatie',
                    'Zonnepanelen',
                    'Besparing',
                    'Energiesysteem',
                    'Serviceplan',
                    'Uw aanbod'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm">{index + 2}</span>
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
            
            {/* Welcome Section */}
            <div className="bg-white rounded-2xl shadow-lg p-12 mb-8">
              <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Beste meneer {quote.customer.name.split(' ').slice(-1)[0]},
                </h1>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Op basis van uw situatie en de mogelijkheden van uw dak heb ik een persoonlijk plan opgesteld 
                  dat nu en in de toekomst een hoge besparing biedt op uw energierekening. 
                  Klik op 'Volgende' om uw optimale thuisbatterij systeem te ontdekken.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Kunnen wij iets verduidelijken? <a href={`tel:${quote.advisor.phone}`} className="text-green-600 font-medium hover:text-green-700">Bel</a> of <a href={`mailto:${quote.advisor.email}`} className="text-green-600 font-medium hover:text-green-700">mail</a> mij gerust.
                </p>
                
                <div className="text-gray-600">
                  <p>Met vriendelijke groet,</p>
                  <p className="font-medium text-gray-900 mt-1">{quote.advisor.name}</p>
                </div>
              </div>
            </div>

            {/* Action Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center">
                <button
                  onClick={onNext}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all shadow-lg"
                >
                  Volgende
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}