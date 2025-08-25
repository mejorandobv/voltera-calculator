'use client'

import { ThuisbatterijStepProps } from '@/types/thuisbatterij'

export function Step5EnergySystem({ quote, onNext, onBack, currentStep = 1, onStepNavigation }: ThuisbatterijStepProps) {
  
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
                        strokeDasharray={`${62.5 * 3.5} 351.86`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#76d055]">62.5%</span>
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
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Uw Alpha ESS Energiesysteem</h1>
              <p className="text-gray-600">Smart monitoring en controle via de Alpha Cloud app</p>
            </div>
            
            {/* ALPHA ESS APP SHOWCASE - Zonneplan inspired */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-12 mb-8 border-2 border-blue-200">
              <div className="grid grid-cols-12 gap-8 items-center">
                
                {/* App Mockup */}
                <div className="col-span-5">
                  <div className="relative mx-auto w-64">
                    {/* Phone Frame */}
                    <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                      <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                        {/* Status Bar */}
                        <div className="bg-gray-50 px-6 py-2 text-xs text-gray-600 flex justify-between">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <span>●●●●</span>
                            <span>📶</span>
                            <span>🔋</span>
                          </div>
                        </div>
                        
                        {/* App Content */}
                        <div className="p-4 h-full bg-gradient-to-b from-green-50 to-blue-50">
                          <div className="text-center mb-4">
                            <h3 className="font-bold text-gray-900 text-sm">Alpha Cloud</h3>
                            <p className="text-xs text-gray-600">Uw batterij dashboard</p>
                          </div>
                          
                          {/* Energy Flow */}
                          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
                            <div className="text-center mb-3">
                              <div className="text-2xl font-bold text-[#76d055]">2.4 kW</div>
                              <div className="text-xs text-gray-600">Huidig verbruik</div>
                            </div>
                            
                            {/* Battery Status */}
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs">🔋 Batterij</span>
                              <span className="text-xs font-bold text-[#76d055]">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-[#76d055] h-2 rounded-full w-[85%]"></div>
                            </div>
                          </div>
                          
                          {/* Quick Stats */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white rounded-lg p-3 text-center">
                              <div className="text-lg font-bold text-blue-600">☀️</div>
                              <div className="text-xs text-gray-600">Zonnepanelen</div>
                              <div className="text-xs font-bold">3.2 kW</div>
                            </div>
                            <div className="bg-white rounded-lg p-3 text-center">
                              <div className="text-lg font-bold text-orange-600">⚡</div>
                              <div className="text-xs text-gray-600">Netverbruik</div>
                              <div className="text-xs font-bold">0.8 kW</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-3 -right-3 bg-blue-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      LIVE DATA
                    </div>
                  </div>
                </div>
                
                {/* App Features */}
                <div className="col-span-7">
                  <div className="mb-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Alpha Cloud App</h2>
                    <p className="text-gray-600 text-lg">Volledige controle over uw energiesysteem</p>
                  </div>
                  
                  {/* Feature List */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <span className="text-xl">📊</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Real-time monitoring</h4>
                        <p className="text-sm text-gray-600">Live inzicht in energie-opwekking, verbruik en batterijstatus</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <span className="text-xl">⚡</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Smart laden & ontladen</h4>
                        <p className="text-sm text-gray-600">Automatische optimalisatie op basis van energieprijzen</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <span className="text-xl">📱</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Remote controle</h4>
                        <p className="text-sm text-gray-600">Beheer uw systeem vanaf elke locatie via smartphone</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <span className="text-xl">🔔</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Smart meldingen</h4>
                        <p className="text-sm text-gray-600">Automatische waarschuwingen bij onderhoud of problemen</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Store Downloads */}
                  <div className="flex gap-4">
                    <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer shadow-lg">
                      <span className="text-2xl">📱</span>
                      <div>
                        <div className="text-xs">Download via</div>
                        <div className="font-bold text-sm">App Store</div>
                      </div>
                    </div>
                    
                    <div className="bg-green-600 text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors cursor-pointer shadow-lg">
                      <span className="text-2xl">🤖</span>
                      <div>
                        <div className="text-xs">Download via</div>
                        <div className="font-bold text-sm">Play Store</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* SMART HOME INTEGRATION VISUAL */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Slimme integratie met uw huis</h3>
              
              <div className="relative max-w-4xl mx-auto">
                {/* House Illustration */}
                <div className="bg-gradient-to-b from-blue-100 to-green-100 rounded-2xl p-8 border-2 border-gray-200">
                  <div className="grid grid-cols-3 gap-6 items-center">
                    
                    {/* Zonnepanelen */}
                    <div className="text-center">
                      <div className="bg-yellow-100 rounded-xl p-6 mb-3">
                        <span className="text-4xl">☀️</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Zonnepanelen</h4>
                      <p className="text-sm text-gray-600">Energie opwekken</p>
                    </div>
                    
                    {/* Alpha ESS Batterij */}
                    <div className="text-center">
                      <div className="bg-[#76d055] rounded-xl p-6 mb-3 shadow-lg">
                        <span className="text-4xl text-black">🔋</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alpha ESS Batterij</h4>
                      <p className="text-sm text-gray-600">Energie opslaan & beheren</p>
                    </div>
                    
                    {/* Huis verbruik */}
                    <div className="text-center">
                      <div className="bg-blue-100 rounded-xl p-6 mb-3">
                        <span className="text-4xl">🏠</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Uw Huis</h4>
                      <p className="text-sm text-gray-600">Energie verbruiken</p>
                    </div>
                  </div>
                  
                  {/* Energy Flow Arrows */}
                  <div className="flex justify-between items-center mt-6">
                    <div className="text-center">
                      <div className="text-2xl text-[#76d055]">→</div>
                      <p className="text-xs text-gray-600">Laden batterij</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-blue-600">→</div>
                      <p className="text-xs text-gray-600">Direct verbruik</p>
                    </div>
                  </div>
                </div>
                
                {/* Smart Features */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🧠</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">AI Optimalisatie</h4>
                        <p className="text-sm text-gray-600">Leert uw verbruikspatronen</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💰</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Dynamische Prijzen</h4>
                        <p className="text-sm text-gray-600">Koopt laag, verkoopt hoog</p>
                      </div>
                    </div>
                  </div>
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
                Volgende - Bekijk serviceplan
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}