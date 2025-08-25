'use client'

import { useState, useEffect } from 'react'
import { ThuisbatterijStepProps } from '@/types/thuisbatterij'
import { formatCurrency } from '@/lib/utils'

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const startTime = performance.now()
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      setCount(Math.floor(end * easeOut))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration])
  
  return (
    <span>{prefix}{count.toLocaleString('nl-NL')}{suffix}</span>
  )
}

export function Step3OptimalSituation({ quote, onNext, onBack, currentStep = 1, onStepNavigation }: ThuisbatterijStepProps) {
  const { selectedBattery, energyProfile } = quote.data
  
  // Calculate savings (these would normally come from backend calculations)
  const savingsOnFeedIn = Math.round(energyProfile.feedInKwh * 0.08) // Save on feed-in costs
  const savingsOnEnergyPurchase = Math.round(energyProfile.yearlyUsage * 0.15) // Save on buying energy
  const dynamicTradingEarnings = 350 // Potential earnings from dynamic trading
  const totalYearlySavings = savingsOnFeedIn + savingsOnEnergyPurchase + dynamicTradingEarnings
  
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
                        strokeDasharray={`${48 * 3.5} 351.86`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#76d055]">48%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Voortgang aanbod</p>
                </div>
                
                {/* Steps List */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-[#76d055] text-sm">✓</span>
                    </div>
                    <span className="text-sm font-medium text-[#76d055]">Introductie</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-[#76d055] text-sm">✓</span>
                    </div>
                    <span className="text-sm font-medium text-[#76d055]">Uw situatie nu</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-black text-sm font-bold">3</span>
                    </div>
                    <span className="text-sm font-medium text-[#76d055]">De optimale situatie</span>
                  </div>
                  
                  {[
                    { label: 'De oplossing', step: 4 },
                    { label: 'Energiesysteem', step: 5 },
                    { label: 'Serviceplan', step: 6 },
                    { label: 'Financieringsmogelijkheden', step: 7 },
                    { label: 'Uw aanbod', step: 8 }
                  ].map((stepItem, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm">{stepItem.step}</span>
                      </div>
                      <span className="text-sm text-gray-600">{stepItem.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Main Content - 70% */}
          <div className="col-span-9">
            
            {/* Page Title */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Uw optimale situatie</h1>
              <p className="text-gray-600">Deze besparingen zijn mogelijk met VOLTERA</p>
            </div>
            
            {/* HERO SAVINGS SECTION - Zonneplan inspired */}
            <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl shadow-2xl p-12 mb-8 border-2 border-green-200">
              <div className="text-center mb-8">
                <div className="mb-6">
                  <p className="text-2xl text-gray-700 mb-4">Uw jaarlijkse besparing met VOLTERA</p>
                  <div className="text-8xl font-black text-[#76d055] mb-4" style={{
                    textShadow: '0 4px 8px rgba(118, 208, 85, 0.3)',
                    letterSpacing: '-0.02em'
                  }}>
                    €<AnimatedCounter end={totalYearlySavings} duration={2500} />
                  </div>
                  <p className="text-xl text-gray-600 font-medium">bespaard per jaar</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🔄</div>
                      <p className="text-sm text-gray-600 mb-1">Terugleverkosten</p>
                      <p className="text-2xl font-bold text-[#76d055]">
                        €<AnimatedCounter end={savingsOnFeedIn} duration={2000} />
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <p className="text-sm text-gray-600 mb-1">Energie inkoop</p>
                      <p className="text-2xl font-bold text-[#76d055]">
                        €<AnimatedCounter end={savingsOnEnergyPurchase} duration={2200} />
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">📈</div>
                      <p className="text-sm text-gray-600 mb-1">Smart Trading</p>
                      <p className="text-2xl font-bold text-purple-600">
                        €<AnimatedCounter end={dynamicTradingEarnings} duration={2400} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg font-bold text-gray-700">
                  💡 Terugverdientijd: ~8 jaar | 25+ jaar besparen
                </p>
              </div>
            </div>
            
            {/* Detailed Breakdown */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Hoe u deze besparingen realiseert</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <div className="text-3xl mb-3">🏠</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Eigen stroom gebruiken</h4>
                  <p className="text-sm text-gray-600">Gebruik opgeslagen zonne-energie in plaats van dure netwerkstroom</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Energy Trading</h4>
                  <p className="text-sm text-gray-600">Automatisch laden bij lage prijzen, ontladen bij hoge prijzen</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="text-3xl mb-3">🔋</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Optimale benutting</h4>
                  <p className="text-sm text-gray-600">Alpha ESS batterij met 95%+ efficiëntie en 10 jaar garantie</p>
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
                Volgende - Bekijk batterij vergelijking
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}