'use client'

interface NavigationButtonsProps {
  onBack: () => void
  onNext: () => void
  nextDisabled?: boolean
  nextText?: string
}

export function NavigationButtons({ 
  onBack, 
  onNext, 
  nextDisabled = false,
  nextText = "Volgende →"
}: NavigationButtonsProps) {
  return (
    <div className="flex gap-3">
      <button 
        onClick={onBack}
        className="flex-1 border border-gray-300 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
      >
        ← Vorige
      </button>
      <button 
        onClick={onNext}
        disabled={nextDisabled}
        className={`flex-1 py-3 rounded-lg font-medium transition-all ${
          nextDisabled
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg hover:shadow-xl'
        }`}
      >
        {nextText}
      </button>
    </div>
  )
}