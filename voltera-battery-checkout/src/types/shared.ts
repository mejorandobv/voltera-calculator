// Shared types used across all product checkout flows

export type ProductType = 'thuisbatterij' | 'zonnepanelen' | 'warmtepomp'

export interface BaseCustomer {
  name: string
  address: string
  email?: string
  phone?: string
}

export interface BaseAdvisor {
  name: string
  photo: string
  phone: string
  email?: string
}

export interface BaseQuoteData {
  quoteId: string
  validUntil: string // "2024-02-01"
  customer: BaseCustomer
  advisor: BaseAdvisor
}

export interface BaseStepProps<T = any> {
  quote: T
  onNext: () => void
  onBack: () => void
  currentStep?: number
  onStepNavigation?: (step: number) => void
}

export interface BaseContactInfo {
  name: string
  phone: string
  email: string
  whatsapp?: string
  availableHours: string
}

export interface BaseNextStep {
  step: number
  title: string
  description: string
  timeframe: string
}