'use client'

import { ThuisbatterijStepProps} from "@/types/thuisbatterij"

export function WebHero({ quote, onNext, currentStep = 1, onStepNavigation }: ThuisbatterijStepProps) {
  const firstName = quote.customer.name.split(' ')[0]
  
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
                  <img src="/images/voltera-logo-text.png" alt="VOLTERA" className="h-56 mx-auto" />
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
                        strokeDasharray={`${16 * 3.5} 351.86`}
                        className="transition-all duration-2000 ease-out animate-pulse"
                        style={{
                          filter: 'drop-shadow(0 4px 8px rgba(118, 208, 85, 0.3))',
                          animation: 'progressGlow 3s ease-in-out infinite alternate'
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#76d055]">16%</span>
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
          <div className="col-span-9">
            
            {/* VOLTERA Advisor Integration - Zonneplan Inspired */}
            <div className="bg-white rounded-2xl shadow-lg p-12 mb-8">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-12 gap-8 items-center">
                  
                  {/* Advisor Photo Section */}
                  <div className="col-span-3">
                    <div className="relative">
                      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-[#76d055]">
                        <img 
                          src="/images/voltera-advisor-placeholder.jpg" 
                          alt={`${quote.advisor.name} - VOLTERA Energie Adviseur`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to professional avatar if image doesn't exist
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(quote.advisor.name)}&background=76d055&color=fff&size=192&font-size=0.6&bold=true`;
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-[#76d055] text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        VOLTERA Expert
                      </div>
                    </div>
                  </div>
                  
                  {/* Personal Intro Section */}
                  <div className="col-span-9 text-left">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-100">
                      <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Beste {firstName},
                      </h1>
                      
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Als <strong>VOLTERA energie-expert</strong> heb ik uw situatie grondig geanalyseerd en een 
                        <span className="text-[#76d055] font-semibold"> persoonlijk batterijplan</span> opgesteld dat perfect 
                        past bij uw energieverbruik en besparingsdoelen.
                      </p>
                      
                      <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">⚡</span>
                          <span className="font-bold text-[#76d055] text-lg">Wat dit voor u betekent:</span>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center gap-2">
                            <span className="text-[#76d055]">✓</span>
                            Maximale energiebesparing op maat
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-[#76d055]">✓</span>
                            Professionele begeleiding van A tot Z
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-[#76d055]">✓</span>
                            10 jaar volledige VOLTERA garantie
                          </li>
                        </ul>
                      </div>
                      
                      <div className="text-gray-600">
                        <p className="mb-3">
                          <strong>Vragen?</strong> Bel me direct op <a href={`tel:${quote.advisor.phone}`} className="text-[#76d055] font-medium hover:underline">{quote.advisor.phone}</a> 
                          of stuur een mail naar <a href={`mailto:${quote.advisor.email}`} className="text-[#76d055] font-medium hover:underline">{quote.advisor.email}</a>
                        </p>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-gray-600">Met vriendelijke groet,</span>
                          <span className="font-bold text-[#76d055] text-lg">{quote.advisor.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center">
                <button
                  onClick={onNext}
                  className="inline-flex items-center px-8 py-4 bg-[#76d055] text-black font-bold text-lg rounded-xl hover:bg-[#6bc24a] transform hover:scale-105 transition-all shadow-lg"
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