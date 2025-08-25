'use client'

import { ThuisbatterijStepProps} from "@/types/thuisbatterij"
import { ProgressBar } from '@/components/shared/ProgressBar'
import { formatDate } from '@/lib/utils'

export function Step1Intro({ quote, onNext }: ThuisbatterijStepProps) {
  const firstName = quote.customer.name.split(' ')[0]
  
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <ProgressBar percentage={12} step={1} total={8} />
      
      <div className="mt-16 max-w-md mx-auto">
        {/* Adviseur Card */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-6 border border-green-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-2 border-white shadow-md">
              <span className="text-2xl">👨‍💼</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">{quote.advisor.name}</p>
              <p className="text-sm text-gray-600">Uw energieadviseur</p>
              <a 
                href={`tel:${quote.advisor.phone}`} 
                className="inline-flex items-center gap-1 text-green-600 text-sm font-medium mt-1 hover:text-green-700"
              >
                📞 {quote.advisor.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Beste {firstName},
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Hierbij uw <span className="font-semibold text-blue-600">persoonlijke aanbod</span> voor een thuisbatterij systeem. 
            Maak uw woning energieonafhankelijk!
          </p>
        </div>

        {/* Validity Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-amber-600 text-lg">⏰</span>
            <p className="text-sm text-amber-800">
              Dit aanbod is geldig tot <strong>{formatDate(quote.validUntil)}</strong>
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-lg">💰</span>
            </div>
            <span className="text-gray-700">Bespaar direct op uw energierekening</span>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-lg">🔋</span>
            </div>
            <span className="text-gray-700">67% energieonafhankelijk worden</span>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-lg">⚡</span>
            </div>
            <span className="text-gray-700">Streven ernaar binnen 4 weken te installeren</span>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={onNext}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200"
        >
          Bekijk uw aanbod →
        </button>
        
        {/* Contact Option */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 mb-2">Vragen over dit aanbod?</p>
          <div className="flex gap-4 justify-center">
            <a 
              href={`tel:${quote.advisor.phone}`}
              className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700"
            >
              📞 Bel {quote.advisor.name}
            </a>
            {quote.advisor.email && (
              <a 
                href={`mailto:${quote.advisor.email}`}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
              >
                ✉️ E-mail versturen
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}