'use client'

import { useState } from 'react'
import { ThuisbatterijStepProps} from "@/types/thuisbatterij"
import { ProgressBar } from '@/components/shared/ProgressBar'
import { formatCurrency } from '@/lib/utils'

export function Step9Confirmation({ quote, onNext, onBack }: ThuisbatterijStepProps) {
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
    <div className="min-h-screen bg-white px-4 py-6">
      <ProgressBar percentage={100} step={8} total={8} />
      
      <div className="mt-16 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-6">Bevestiging van uw aanbod</h2>
        
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 mb-6 border-2 border-red-200">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⏰</span>
            <div>
              <p className="font-bold text-red-700">Geldig tot {quote.validUntil}</p>
              <p className="text-sm text-red-600">Bevestig vandaag en profiteer van dit aanbod</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl p-6 mb-6 border-2 border-green-200">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Uw persoonlijk aanbod</h3>
          
          <div className="space-y-3 mb-4">
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
            <div className="flex justify-between text-green-700">
              <span className="font-medium">ISDE Subsidie</span>
              <span className="font-bold">-{formatCurrency(orderConfirmation.orderSummary.subsidyDiscount)}</span>
            </div>
            <hr className="border-gray-300"/>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg text-gray-900">Uw investering</span>
              <span className="font-bold text-2xl text-blue-600">{formatCurrency(orderConfirmation.orderSummary.finalPrice)}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-green-100">
            <div className="text-center">
              <p className="text-sm text-gray-600">Jaarlijkse besparing</p>
              <p className="text-xl font-bold text-green-600">{formatCurrency(savingsAnalysis.yearlySavings)}</p>
            </div>
          </div>
        </div>

        {/* Key Benefits Reminder */}
        <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-gray-900">Wat u krijgt</span>
          </h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-sm text-gray-700">{quote.data.selectedBattery.capacity} kWh batterij systeem</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-sm text-gray-700">15 jaar volledige garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-sm text-gray-700">Professionele installatie & training</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-sm text-gray-700">24/7 monitoring via app</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-sm text-gray-700">Verzekering inbegrepen</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              <span className="text-sm text-gray-700">Persoonlijke begeleiding door {quote.advisor.name}</span>
            </div>
          </div>
        </div>

        {/* Legal Terms */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6 border">
          <h3 className="font-semibold mb-3 text-gray-900">Belangrijke voorwaarden</h3>
          
          <div className="space-y-2">
            {orderConfirmation.legalTerms.map((term, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-gray-400 text-xs mt-1">•</span>
                <span className="text-xs text-gray-700">{term}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Agreement Checkbox */}
        <div className="bg-white rounded-xl p-6 mb-6 border-2 border-gray-200">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
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

        {/* Social Proof */}
        <div className="bg-purple-50 rounded-xl p-4 mb-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">👥</span>
            <span className="font-semibold text-purple-800">47 klanten gingen u deze maand voor</span>
          </div>
          <p className="text-sm text-purple-700">
            Sluit u aan bij duizenden tevreden Voltera klanten die al besparen op hun energierekening
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            disabled={!agreed || isConfirming}
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all ${
              !agreed || isConfirming
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
            }`}
          >
            {isConfirming ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Bevestiging versturen...</span>
              </div>
            ) : (
              `✅ JA, ik ga akkoord - Bespaar ${formatCurrency(savingsAnalysis.yearlySavings)}/jaar`
            )}
          </button>

          {/* Contact Options */}
          <div className="grid grid-cols-2 gap-3">
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

        {/* Next Steps Preview */}
        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="text-gray-900">Wat gebeurt er nu?</span>
          </h3>
          
          <div className="space-y-3">
            {orderConfirmation.nextSteps.slice(0, 3).map((step, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{step.title}</h4>
                  <p className="text-xs text-gray-600">{step.description}</p>
                  <p className="text-xs text-indigo-600 font-medium">{step.timeframe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}