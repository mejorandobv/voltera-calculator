'use client'

import { ThuisbatterijStepProps } from '@/types/thuisbatterij'
import { formatDate } from '@/lib/utils'

export function Step1Intro({ quote, onNext, currentStep = 1, onStepNavigation }: ThuisbatterijStepProps) {
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
                        strokeDasharray={`${12.5 * 3.5} 351.86`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#76d055]">12.5%</span>
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

              {/* Advisor Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">👨‍💼</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{quote.advisor.name}</p>
                    <p className="text-xs text-gray-600">Uw energieadviseur</p>
                  </div>
                </div>
                <a 
                  href={`tel:${quote.advisor.phone}`} 
                  className="block w-full text-center bg-[#76d055] text-black py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#6bc24a] transition-colors"
                >
                  📞 Direct bellen
                </a>
              </div>
            </div>
          </div>

          {/* Main Content - 70% */}
          <div className="col-span-9">
            
            {/* Welcome Message */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Beste {firstName},
              </h1>
              <p className="text-gray-700 text-xl leading-relaxed">
                Hierbij uw <span className="font-semibold text-[#76d055]">persoonlijke aanbod</span> voor een thuisbatterij systeem. 
                Maak uw woning energieonafhankelijk!
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-3xl">💰</span>
                </div>
                <span className="text-gray-700 text-xl font-medium">Bespaar direct op uw energierekening</span>
              </div>
              
              <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-3xl">🔋</span>
                </div>
                <span className="text-gray-700 text-xl font-medium">67% energieonafhankelijk worden</span>
              </div>
              
              <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-3xl">⚡</span>
                </div>
                <span className="text-gray-700 text-xl font-medium">Streven ernaar binnen 4 weken te installeren</span>
              </div>
            </div>

            {/* Validity Notice */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <span className="text-amber-600 text-2xl">⏰</span>
                <p className="text-amber-800 font-medium text-lg">
                  Dit aanbod is geldig tot <strong>{formatDate(quote.validUntil)}</strong>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button 
                onClick={onNext}
                className="px-12 py-6 bg-gradient-to-r from-[#76d055] to-[#6bc24a] text-black font-bold text-2xl rounded-xl hover:from-[#6bc24a] hover:to-[#5ab939] transform hover:scale-105 transition-all shadow-xl"
              >
                Start uw aanbod →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}