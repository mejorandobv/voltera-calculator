'use client'

import { ThuisbatterijQuoteData } from '@/types/thuisbatterij'

interface ProgressSidebarProps {
  currentStep: number
  totalSteps: number
  quoteData: ThuisbatterijQuoteData
}

const steps = [
  { id: 1, name: 'Introductie', icon: '👋' },
  { id: 2, name: 'Uw situatie', icon: '🏠' },
  { id: 3, name: 'Zonnepanelen', icon: '☀️' },
  { id: 4, name: 'Besparing', icon: '💰' },
  { id: 5, name: 'Serviceplan', icon: '🛡️' },
  { id: 6, name: 'Energiesysteem', icon: '🔋' },
  { id: 7, name: 'Uw aanbod', icon: '📋' }
]

export function ProgressSidebar({ currentStep, totalSteps, quoteData }: ProgressSidebarProps) {
  const progressPercentage = Math.round((currentStep / totalSteps) * 100)
  
  return (
    <aside className="w-80 bg-white rounded-xl shadow-sm border border-gray-200 sticky top-6 h-fit">
      <div className="p-6">
        {/* Voltera Branding */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-gray-900">Voltera</span>
            <span className="text-sm text-gray-500">Thuisbatterij Specialist</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i} className="text-sm">{star}</span>
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">9.4</span>
            <span className="text-xs text-gray-500">10.000+ beoordelingen</span>
          </div>
        </div>

        {/* Progress Circle */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#E5E7EB"
                strokeWidth="8"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#10B981"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${(progressPercentage / 100) * 314} 314`}
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-green-600">{progressPercentage}%</span>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-2">Voortgang aanbod</p>
        </div>

        {/* Steps List */}
        <div className="space-y-3 mb-8">
          {steps.map((step) => {
            const isCompleted = step.id < currentStep
            const isCurrent = step.id === currentStep
            const isUpcoming = step.id > currentStep
            
            return (
              <div key={step.id} className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isCurrent ? 'bg-green-50 border border-green-200' : ''
              }`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                  isCompleted 
                    ? 'bg-green-600 text-white' 
                    : isCurrent 
                    ? 'bg-green-600 text-white border-2 border-green-300' 
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {isCompleted ? '✓' : isCurrent ? step.id : '○'}
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-lg">{step.icon}</span>
                  <span className={`text-sm font-medium ${
                    isCurrent ? 'text-green-700' : isCompleted ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Aanbod Opties */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-semibold text-gray-900 mb-4">Aanbod opties</h3>
          
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm">📄</span>
              </div>
              <span className="text-sm text-gray-700">PDF opslaan</span>
            </button>
            
            <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-sm">🖨️</span>
              </div>
              <span className="text-sm text-gray-700">Papieren kopie</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}