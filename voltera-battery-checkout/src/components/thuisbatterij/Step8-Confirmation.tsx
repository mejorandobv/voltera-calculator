'use client'

import { useState } from 'react'
import { ThuisbatterijStepProps} from "@/types/thuisbatterij"
import { formatCurrency } from '@/lib/utils'

export function Step8Confirmation({ quote, onBack }: ThuisbatterijStepProps) {
  const { orderConfirmation, savingsAnalysis } = quote.data
  const [agreed, setAgreed] = useState(false)
  const [isConfirming, setIsConfirming] = useState(false)
  
  const handleConfirm = async () => {
    setIsConfirming(true)
    
    // Simuleer API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsConfirming(false)
    // In productie: redirect naar bedankpagina
    alert('Bedankt! Uw aanbod is bevestigd. U ontvangt binnen 24 uur contact van ons team.')
  }
  
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
                        strokeDasharray={`${100 * 3.5} 351.86`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#76d055]">100%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Voortgang aanbod</p>
                </div>
                
                {/* Steps List */}
                <div className="space-y-3">
                  {[
                    'Introductie',
                    'Uw situatie nu', 
                    'De optimale situatie',
                    'De oplossing',
                    'Energiesysteem',
                    'Serviceplan'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-[#76d055] text-sm">✓</span>
                      </div>
                      <span className="text-sm font-medium text-[#76d055]">{step}</span>
                    </div>
                  ))}
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-black text-sm font-bold">7</span>
                    </div>
                    <span className="text-sm font-medium text-[#76d055]">Uw aanbod</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Main Content - 70% */}
          <div className="col-span-9">
            
            {/* Page Title */}
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Bevestig uw aanbod</h1>
              <p className="text-gray-600">Controleer uw bestelling en bevestig</p>
            </div>
            {/* Two-column Layout */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              
              {/* Left Column: Order Summary */}
              <div className="space-y-6">
                
                {/* Price Summary Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Uw bestelling</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-700">{orderConfirmation.orderSummary.product}</span>
                      <span className="font-medium">{formatCurrency(orderConfirmation.orderSummary.price)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Installatie & inbedrijfstelling</span>
                      <span className="font-medium">{formatCurrency(orderConfirmation.orderSummary.installation)}</span>
                    </div>
                    <hr className="border-gray-200"/>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Subtotaal</span>
                      <span className="font-medium">{formatCurrency(orderConfirmation.orderSummary.total)}</span>
                    </div>
                    <div className="flex justify-between text-[#76d055]">
                      <span className="font-medium">ISDE Subsidie</span>
                      <span className="font-bold">-{formatCurrency(orderConfirmation.orderSummary.subsidyDiscount)}</span>
                    </div>
                    <hr className="border-gray-300"/>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg text-gray-900">Totaal</span>
                      <span className="font-bold text-2xl text-[#76d055]">{formatCurrency(orderConfirmation.orderSummary.finalPrice)}</span>
                    </div>
                  </div>

                  {/* Expected Savings */}
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="text-center">
                      <p className="text-sm text-green-700 mb-1">Verwachte jaarlijkse besparing</p>
                      <p className="text-2xl font-bold text-[#76d055]">{formatCurrency(savingsAnalysis.yearlySavings)}</p>
                    </div>
                  </div>
                </div>

                {/* What You Get - Checkmarks */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    <span>Inbegrepen</span>
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[#76d055]">✓</span>
                      <span className="text-gray-700">{quote.data.selectedBattery.capacity} kWh batterij systeem</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#76d055]">✓</span>
                      <span className="text-gray-700">Professionele installatie & training</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#76d055]">✓</span>
                      <span className="text-gray-700">15 jaar volledige garantie</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#76d055]">✓</span>
                      <span className="text-gray-700">24/7 monitoring via app</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#76d055]">✓</span>
                      <span className="text-gray-700">Verzekering inbegrepen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#76d055]">✓</span>
                      <span className="text-gray-700">Persoonlijke begeleiding door {quote.advisor.name}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Conditions & Validity */}
              <div className="space-y-6">
                
                {/* Validity Period */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200 shadow-lg">
                  <div className="text-center mb-4">
                    <span className="text-4xl">⏰</span>
                    <h3 className="font-bold text-2xl text-red-700 mt-2">Nog 7 dagen geldig</h3>
                    <p className="text-red-600 font-medium">Bevestig vandaag en profiteer van dit exclusieve aanbod</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="bg-red-100 rounded-full px-4 py-2 inline-block">
                      <span className="text-red-800 font-bold">LIMITED TIME OFFER</span>
                    </div>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📋</span>
                    <span>Voorwaarden</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {orderConfirmation.legalTerms.slice(0, 5).map((term, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-gray-400 text-xs mt-1 flex-shrink-0">•</span>
                        <span className="text-xs text-gray-600">{term}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    <span>Volgende stappen</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {orderConfirmation.nextSteps.slice(0, 3).map((step, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-[#76d055] text-black rounded-full flex items-center justify-center text-xs font-bold">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{step.title}</h4>
                          <p className="text-xs text-gray-600">{step.description}</p>
                          <p className="text-xs text-[#76d055] font-medium">{step.timeframe}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement Section */}
            <div className="bg-white rounded-xl p-6 mb-6 border-2 border-gray-200 shadow-sm">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 text-[#76d055] border-gray-300 rounded focus:ring-green-500"
                />
                <div className="text-sm text-gray-700">
                  <p className="mb-2">
                    Ik, <strong>{firstName}</strong>, ga akkoord met dit persoonlijk aanbod van Voltera 
                    en geef toestemming voor de installatie van het batterij systeem zoals beschreven.
                  </p>
                  <p className="text-xs text-gray-600">
                    Door akkoord te gaan accepteert u de algemene voorwaarden en privacyverklaring van Voltera.
                  </p>
                </div>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              {/* Main Confirmation Button */}
              <button
                onClick={handleConfirm}
                disabled={!agreed || isConfirming}
                className={`w-full py-6 px-8 rounded-xl font-bold text-xl transition-all shadow-lg ${
                  !agreed || isConfirming
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'text-black hover:scale-105 hover:shadow-xl transform transition-all bg-gradient-to-r from-[#76d055] to-[#6bc24a] hover:from-[#6bc24a] hover:to-[#5ab939]'
                }`}
              >
                {isConfirming ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Bevestiging versturen...</span>
                  </div>
                ) : (
                  'Bevestig bestelling'
                )}
              </button>

              {/* Contact Options */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`tel:${quote.advisor.phone}`}
                  className="bg-blue-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                >
                  📞 Direct bellen
                </a>
                <a
                  href={`https://wa.me/${orderConfirmation.advisorContact.whatsapp?.replace(/[^0-9]/g, '')}`}
                  className="bg-green-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-green-700 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>

              {/* Back Button */}
              <button
                onClick={onBack}
                className="w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                ← Terug naar financieringsmogelijkheden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}