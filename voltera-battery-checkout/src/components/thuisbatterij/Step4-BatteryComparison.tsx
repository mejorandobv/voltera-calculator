'use client'

import { ThuisbatterijStepProps } from '@/types/thuisbatterij'

export function Step4BatteryComparison({ quote, onNext, onBack, currentStep = 1, onStepNavigation }: ThuisbatterijStepProps) {
  
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
                        strokeDasharray={`${50 * 3.5} 351.86`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#76d055]">50%</span>
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Waarom Alpha ESS?</h1>
              <p className="text-gray-600">De batterij die VOLTERA voor u heeft gekozen</p>
            </div>
            
            {/* PRODUCT HERO SECTION - Zonneplan inspired */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-gray-200">
              <div className="grid grid-cols-12 gap-8 items-center">
                
                {/* Product Image */}
                <div className="col-span-5">
                  <div className="relative">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <img 
                        src="/images/alpha-ess-battery-hero.jpg" 
                        alt="Alpha ESS Batterij Systeem"
                        className="w-full h-64 object-contain"
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI0NSUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzc2ZDA1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWxwaGEgRVNTPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iNjAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2Yjc0ODUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJhdHRlcmlqIFN5c3RlZW08L3RleHQ+PC9zdmc+";
                        }}
                      />
                    </div>
                    
                    {/* Trust Badge Overlay */}
                    <div className="absolute -top-3 -right-3 bg-[#76d055] text-black px-4 py-2 rounded-full shadow-lg">
                      <span className="font-bold text-sm">VOLTERA KEUZE</span>
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="col-span-7">
                  <div className="mb-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Alpha ESS Batterij Systeem</h2>
                    <p className="text-gray-600 text-lg">De intelligente energieoplossing voor uw huis</p>
                  </div>
                  
                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-2xl mb-2">🔋</div>
                      <div className="font-semibold text-gray-900">Capaciteit</div>
                      <div className="text-[#76d055] font-bold text-lg">{quote.data.selectedBattery.capacity} kWh</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="font-semibold text-gray-900">Vermogen</div>
                      <div className="text-[#76d055] font-bold text-lg">5 kW continu</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-2xl mb-2">🛡️</div>
                      <div className="font-semibold text-gray-900">Garantie</div>
                      <div className="text-[#76d055] font-bold text-lg">10 jaar</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-2xl mb-2">🏆</div>
                      <div className="font-semibold text-gray-900">Levensduur</div>
                      <div className="text-[#76d055] font-bold text-lg">10.000+ cycli</div>
                    </div>
                  </div>
                  
                  {/* VOLTERA Trust Badges */}
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-[#76d055] text-black px-4 py-2 rounded-full text-sm font-bold shadow-md">
                      ✓ Erkend door VOLTERA
                    </div>
                    <div className="bg-blue-600 text-black px-4 py-2 rounded-full text-sm font-bold shadow-md">
                      ✓ Premium A-Merk
                    </div>
                    <div className="bg-purple-600 text-black px-4 py-2 rounded-full text-sm font-bold shadow-md">
                      ✓ Duurzaam & Efficiënt
                    </div>
                  </div>
                </div>
              </div>
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
                        <span className="text-black font-bold text-lg">A</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Alpha ESS</h3>
                        <p className="text-sm text-[#76d055]">Uw gekozen merk</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-[#76d055]">10.000 cycli</p>
                      <p className="text-sm text-gray-700">Gaat 67% langer mee</p>
                    </div>
                  </div>
                  
                  {/* Other Brands */}
                  <div className="bg-gray-50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center">
                        <span className="text-black font-bold text-lg">?</span>
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
            <div className="bg-[#76d055] rounded-xl p-6 mt-6 text-black">
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
                className="flex-1 px-8 py-4 bg-[#76d055] text-black font-bold text-lg rounded-xl hover:bg-[#6bc24a] transform hover:scale-105 transition-all shadow-lg"
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