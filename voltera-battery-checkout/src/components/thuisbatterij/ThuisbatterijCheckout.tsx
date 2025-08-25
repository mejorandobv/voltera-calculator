'use client'

import { useState, useEffect } from 'react'
import { ThuisbatterijQuoteData } from '@/types/thuisbatterij'
import { WebHero } from './WebHero'
import { Step2EnergyProfile } from './Step2-EnergyProfile'
import { Step3OptimalSituation } from './Step3-OptimalSituation'
import { Step4BatteryComparison } from './Step4-BatteryComparison'
import { Step5EnergySystem } from './Step5-EnergySystem'
import { Step6ServiceGuarantees } from './Step6-ServiceGuarantees'
import { Step7FinanceOptions } from './Step7-FinanceOptions'
import { Step8Confirmation } from './Step8-Confirmation'

interface ThuisbatterijCheckoutProps {
  quoteId: string
}

export function ThuisbatterijCheckout({ quoteId }: ThuisbatterijCheckoutProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [quoteData, setQuoteData] = useState<ThuisbatterijQuoteData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchQuoteData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/quotes/${quoteId}`)
        
        if (!response.ok) {
          throw new Error('Aanbod niet gevonden')
        }
        
        const data = await response.json()
        setQuoteData(data)
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Er ging iets mis')
      } finally {
        setLoading(false)
      }
    }
    
    fetchQuoteData()
  }, [quoteId])
  
  const handleNext = () => {
    if (currentStep < 8) {
      setCurrentStep(prev => prev + 1)
    }
  }
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }
  
  const handleStepNavigation = (step: number) => {
    if (step <= currentStep) {
      setCurrentStep(step)
    }
  }
  
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Uw persoonlijke aanbod wordt geladen...</p>
        </div>
      </div>
    )
  }
  
  if (error || !quoteData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Aanbod niet gevonden</h1>
          <p className="text-gray-600 mb-6">
            {error || 'Het opgevraagde aanbod kon niet worden geladen.'}
          </p>
          <a 
            href="/"
            className="inline-block bg-green-600 text-black px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Terug naar homepage
          </a>
        </div>
      </div>
    )
  }
  
  const stepProps = {
    quote: quoteData,
    onNext: handleNext,
    onBack: handleBack,
    currentStep,
    onStepNavigation: handleStepNavigation
  }
  
  // Render component based on step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <WebHero {...stepProps} />
      case 2:
        return <Step2EnergyProfile {...stepProps} />
      case 3:
        return <Step3OptimalSituation {...stepProps} />
      case 4:
        return <Step4BatteryComparison {...stepProps} />
      case 5:
        return <Step5EnergySystem {...stepProps} />
      case 6:
        return <Step6ServiceGuarantees {...stepProps} />
      case 7:
        return <Step7FinanceOptions {...stepProps} />
      case 8:
        return <Step8Confirmation {...stepProps} />
      default:
        return <WebHero {...stepProps} />
    }
  }

  return renderCurrentStep()
}