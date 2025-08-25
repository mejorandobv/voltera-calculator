'use client'

import { ThuisbatterijStepProps} from "@/types/thuisbatterij"
import { ProgressBar } from '@/components/shared/ProgressBar'
import { NavigationButtons } from '@/components/shared/NavigationButtons'

export function Step7ServiceGuarantees({ quote, onNext, onBack }: ThuisbatterijStepProps) {
  const { servicePackage, guarantees } = quote.data
  
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <ProgressBar percentage={75} step={6} total={8} />
      
      <div className="mt-16 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-6">Service & garanties</h2>
        
        {/* Warranty Overview */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border-2 border-green-200">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">🛡️</span>
            <span>Volledige garantiepakket</span>
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">{servicePackage.productWarranty}</p>
              <p className="text-sm text-gray-600">jaar product garantie</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{servicePackage.performanceWarranty}%</p>
              <p className="text-sm text-gray-600">prestatie na 15 jaar</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm font-medium text-gray-900">Fabrieksgarantie: {guarantees.manufacturer.years} jaar</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm font-medium text-gray-900">Installatiegarantie: {guarantees.installation.years} jaar</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm font-medium text-gray-900">Verzekering inbegrepen</span>
            </div>
          </div>
        </div>

        {/* Installation Timeline */}
        <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">📅</span>
            <span className="text-gray-900">Installatieproces</span>
          </h3>
          
          <div className="space-y-4">
            {servicePackage.installationTimeline.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600 mb-1">{step.description}</p>
                  <p className="text-xs text-blue-600 font-medium">{step.duration}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 bg-white rounded-lg p-3 border border-blue-100">
            <p className="text-sm text-blue-700">
              <span className="font-semibold">📞 Planning:</span> {guarantees.delivery.planning}
            </p>
          </div>
        </div>

        {/* Maintenance & Monitoring */}
        <div className="bg-purple-50 rounded-xl p-6 mb-6 border border-purple-200">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🔧</span>
            <span className="text-gray-900">Onderhoud & monitoring</span>
          </h3>
          
          <div className="space-y-3 mb-4">
            {servicePackage.maintenanceIncluded.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-purple-600">✓</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="flex items-start gap-2">
              <span className="text-2xl">📱</span>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Voltera App</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Volg real-time uw batterij prestaties, opslag niveau en besparingen
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 text-xs">📊</span>
                  <span className="text-xs text-gray-600">Live data & historische grafieken</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Coverage */}
        <div className="bg-orange-50 rounded-xl p-6 mb-6 border border-orange-200">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            <span className="text-gray-900">Verzekering & aansprakelijkheid</span>
          </h3>
          
          <div className="bg-white rounded-lg p-4 border border-orange-100 mb-4">
            <h4 className="font-medium text-gray-900 mb-2">{servicePackage.insurance.coverage}</h4>
            <p className="text-sm text-gray-600 mb-3">Door {servicePackage.insurance.provider}</p>
            
            <div className="space-y-2">
              {servicePackage.insurance.details.map((detail, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-orange-600">✓</span>
                  <span className="text-sm text-gray-700">{detail}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-600 font-bold">GRATIS</span>
            <span className="text-gray-600">- Volledig inbegrepen in uw aanbod</span>
          </div>
        </div>

        {/* Certifications & Quality */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6 border">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="text-gray-900">Kwaliteit & certificeringen</span>
          </h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            {servicePackage.certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-3 border text-center">
                <div className="text-2xl mb-1">📜</div>
                <p className="text-xs text-gray-700 font-medium">{cert}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-4 border">
            <div className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Voltera kwaliteitsgarantie</h4>
                <p className="text-sm text-gray-600">
                  Al 15 jaar specialist in duurzame energie oplossingen. 
                  Meer dan 10.000 tevreden klanten vertrouwen op onze expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Support */}
        <div className="bg-green-50 rounded-xl p-6 mb-8 border border-green-200">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">📞</span>
            <span className="text-gray-900">Klantenservice</span>
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <h4 className="font-medium text-gray-900 mb-2">Uw persoonlijke adviseur</h4>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {quote.advisor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{quote.advisor.name}</p>
                  <p className="text-sm text-gray-600">{quote.advisor.phone}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Uw vaste aanspreekpunt voor alle vragen over installatie en service
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border border-green-100 text-center">
                <div className="text-xl mb-1">⚡</div>
                <p className="text-xs font-medium text-gray-900">Technische hulp</p>
                <p className="text-xs text-gray-600">24/7 beschikbaar</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-100 text-center">
                <div className="text-xl mb-1">🔧</div>
                <p className="text-xs font-medium text-gray-900">Storing melden</p>
                <p className="text-xs text-gray-600">24/7 beschikbaar*</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3 border border-green-100">
              <p className="text-xs text-green-700">
                <span className="font-semibold">*Binnenkort:</span> {guarantees.support.future}
              </p>
            </div>
          </div>
        </div>

        <NavigationButtons onBack={onBack} onNext={onNext} />
      </div>
    </div>
  )
}