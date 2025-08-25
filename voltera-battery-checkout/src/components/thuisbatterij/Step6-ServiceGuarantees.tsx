'use client'

import { ThuisbatterijStepProps} from "@/types/thuisbatterij"
import { NavigationButtons } from '@/components/shared/NavigationButtons'

export function Step6ServiceGuarantees({ quote, onNext, onBack, currentStep = 1, onStepNavigation }: ThuisbatterijStepProps) {
  const { servicePackage, guarantees } = quote.data
  
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
                        strokeDasharray={`${75 * 3.5} 351.86`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#76d055]">75%</span>
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">VOLTERA Serviceplan</h1>
              <p className="text-gray-600">Professionele service van A tot Z</p>
            </div>
            
            {/* VOLTERA TECHNICIAN HERO - Zonneplan inspired */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-12 mb-8 border-2 border-blue-200">
              <div className="grid grid-cols-12 gap-8 items-center">
                
                {/* Technician Photo */}
                <div className="col-span-3">
                  <div className="relative">
                    <div className="w-56 h-56 mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-[#76d055]">
                      <img 
                        src="/images/voltera-technician-hero.jpg" 
                        alt="VOLTERA Monteur aan het werk"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to professional technician avatar
                          e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzZkMDU1Ii8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI2MCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMjAgMzIwcTAtNjAgODAtNjAgODAgMCA4MCA2MHoiIGZpbGw9IiNmZmYiLz48dGV4dCB4PSI1MCUiIHk9IjQwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb50LXNpemU9IjI0IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn4-N4oCNVk9MVEVSQSDwn5ORwqBNb250ZXVyPC90ZXh0Pjwvc3ZnPg==";
                        }}
                      />
                    </div>
                    
                    {/* Professional Badge */}
                    <div className="absolute -top-3 -right-3 bg-[#76d055] text-black px-4 py-2 rounded-full shadow-lg">
                      <span className="font-bold text-sm">VAKSPECIALIST</span>
                    </div>
                  </div>
                </div>
                
                {/* Service Info */}
                <div className="col-span-9">
                  <div className="mb-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Professionele VOLTERA Monteurs</h2>
                    <p className="text-gray-600 text-lg">Gecertificeerde specialisten voor uw volledige installatie</p>
                  </div>
                  
                  {/* Service Features */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-2xl mb-2">👷‍♂️</div>
                      <div className="font-semibold text-gray-900">Vakbekwaam</div>
                      <div className="text-sm text-gray-600">Gecertificeerde installatieurs met 15+ jaar ervaring</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="font-semibold text-gray-900">Veilig & Snel</div>
                      <div className="text-sm text-gray-600">Professionele installatie binnen één dag</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-2xl mb-2">🔧</div>
                      <div className="font-semibold text-gray-900">Compleet Service</div>
                      <div className="text-sm text-gray-600">Van levering tot inbedrijfstelling</div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="text-2xl mb-2">📞</div>
                      <div className="font-semibold text-gray-900">24/7 Support</div>
                      <div className="text-sm text-gray-600">Altijd bereikbaar voor support</div>
                    </div>
                  </div>
                  
                  <div className="bg-[#76d055] text-black rounded-xl p-4 shadow-lg">
                    <p className="font-bold text-lg">
                      ✅ 10 jaar volledige VOLTERA service garantie
                    </p>
                  </div>
                </div>
              </div>
            </div>
        
        {/* Warranty Overview */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border-2 border-green-200">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">🛡️</span>
            <span>Volledige garantiepakket</span>
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#76d055]">{servicePackage.productWarranty}</p>
              <p className="text-sm text-gray-600">jaar product garantie</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{servicePackage.performanceWarranty}%</p>
              <p className="text-sm text-gray-600">prestatie na 15 jaar</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#76d055]">✓</span>
              <span className="text-sm font-medium text-gray-900">10 jaar fabrieksgarantie Alpha ESS</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#76d055]">✓</span>
              <span className="text-sm font-medium text-gray-900">Installatiegarantie: {guarantees.installation.years} jaar</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#76d055]">✓</span>
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
                  <div className="w-8 h-8 bg-blue-600 text-black rounded-full flex items-center justify-center text-sm font-bold">
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
            <span className="text-[#76d055] font-bold">GRATIS</span>
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
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-black font-bold text-lg">
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
              <p className="text-xs text-[#76d055]">
                <span className="font-semibold">*Binnenkort:</span> {guarantees.support.future}
              </p>
            </div>
          </div>
        </div>

        <NavigationButtons onBack={onBack} onNext={onNext} />
          </div>
        </div>
      </div>
    </div>
  )
}