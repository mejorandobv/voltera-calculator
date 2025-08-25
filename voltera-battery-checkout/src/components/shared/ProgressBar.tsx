'use client'

interface ProgressBarProps {
  percentage: number
  step: number
  total: number
}

export function ProgressBar({ percentage, step, total }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="h-1 bg-gray-200">
        <div 
          className="h-1 bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-center py-2 text-xs text-gray-500">
        Stap {step} van {total} • Thuisbatterij persoonlijk aanbod
      </div>
    </div>
  )
}