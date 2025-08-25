'use client'

import { ThuisbatterijQuoteData } from '@/types/thuisbatterij'
import { ProgressSidebar } from './ProgressSidebar'

interface CheckoutLayoutProps {
  children: React.ReactNode
  currentStep: number
  totalSteps: number
  quoteData: ThuisbatterijQuoteData
}

export function CheckoutLayout({ 
  children, 
  currentStep, 
  totalSteps, 
  quoteData 
}: CheckoutLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {children}
      </div>
      
      {/* Desktop Layout with Sidebar */}
      <div className="hidden lg:flex max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <ProgressSidebar 
          currentStep={currentStep}
          totalSteps={totalSteps}
          quoteData={quoteData}
        />
        
        {/* Main Content */}
        <main className="flex-1 bg-white ml-6 rounded-l-xl shadow-sm">
          {children}
        </main>
      </div>
    </div>
  )
}