import { BaseQuoteData, BaseCustomer, BaseAdvisor, BaseStepProps, BaseContactInfo, BaseNextStep } from './shared'

export interface ThuisbatterijQuoteData extends BaseQuoteData {
  productType: 'thuisbatterij'
  
  data: {
    energyProfile: {
      yearlyUsage: number        // 4200 kWh
      electricityCost: number    // €1260
      currentRate: number        // €0.30 per kWh
      
      // Zonnepanelen info
      hasSolar: boolean          // true/false
      solarCapacity?: string     // "5.4kWp"
      solarPanels?: number       // 12
      yearlyProduction?: number  // 4860 kWh
      
      // Teruglevering
      feedInKwh: number         // 2100 kWh
      feedInRate: number        // €0.08 per kWh
      
      // Contract type
      hasDynamicContract: boolean // false
      currentSupplier: string     // "Vattenfall"
      
      // High consumption devices (Stroomvreters)
      highConsumptionDevices: HighConsumptionDevice[]
      
      // Electrical panel configuration
      electricalPanelPhases: 1 | 3  // 1-fase of 3-fase
      
      // Usage pattern (voor grafiek)
      usagePattern?: {
        winter: Array<number>    // 24 uur data
        summer: Array<number>    // 24 uur data
      }
    }
    
    selectedBattery: {
      name: string              // "Alpha ESS SMILE5 13.3kWh"
      capacity: number          // 13.3
      image: string            // "/products/alpha-ess-13kw.jpg"
      specs: Array<string>     // Specificaties array
      warranty: number         // 10 jaar
      placement: string        // "Binnen/buiten"
      modularity: boolean      // true voor modulair
      
      // Technische specs
      maxPower: number         // 5kW
      efficiency: number       // 95%
      cycles: number          // 6000
      
      // Prijzen
      price: number           // €7500
      installationCost: number // €1500
      totalPrice: number      // €9000
    }
    
    calculations: {
      // Huidige situatie
      currentYearlyCost: number     // €1260 (uit energyProfile)
      currentDayRate: number        // €0.32 per kWh
      currentNightRate?: number     // €0.28 per kWh (als dynamisch)
      feedInLoss: number           // €168 (feedIn * (dayRate - feedInRate))
      
      // Met batterij
      newYearlyCost: number        // €890
      batterySavings: number       // €370 per jaar
      selfConsumption: number      // 67% zelfvoorzienend
      
      // Investering
      batteryPrice: number         // €7500
      installationPrice: number    // €1500
      totalInvestment: number      // €9000
      btwSavings: number          // €1588 (21% van totaal)
      netInvestment: number       // €7412 (na BTW voordeel)
      
      // ROI
      paybackTime: number         // 16 jaar (netInvestment / savings)
      
      // Extra potentie
      dynamicContractSavings?: number  // €200/jaar extra
    }
    
    guarantees: {
      installation: {
        years: number           // 2
        description: string     // "Voltera installatiegarantie"
      }
      manufacturer: {
        years: number          // 10  
        description: string    // "Alpha ESS fabrieksgarantie"
        coverage: string       // "Capaciteit & prestatie"
      }
      delivery: {
        timeframe: string      // "Streven ernaar binnen 4 weken te installeren"
        planning: string       // "Na akkoord direct inplannen"
      }
      permits: {
        handled: boolean       // true
        description: string    // "Vergunningen door Voltera geregeld"
      }
      grid: {
        handled: boolean       // true  
        description: string    // "Netaanmelding door ons"
      }
      support: {
        available: boolean     // false (nog niet live)
        future: string        // "24/7 storing hotline (binnenkort beschikbaar)"
      }
    }
    
    btwAdvantage: number        // €1588
    
    // Nieuwe data voor stappen 4-6
    savingsAnalysis: {
      yearlySavings: number           // €370
      totalSavings15Years: number     // €5,550
      roiYears: number               // 16.0
      monthlyNetCost: number         // €45 (na subsidie)
      subsidyAmount: number          // €2,500 (ISDE)
      comparisonWithoutBattery: {
        year5Cost: number            // €7,560 zonder batterij
        year10Cost: number           // €15,120 zonder batterij  
        year15Cost: number           // €22,680 zonder batterij
      }
      financingOptions: FinancingOption[]
    }
    
    servicePackage: {
      productWarranty: number        // 15 jaar
      performanceWarranty: number    // 80% na 15 jaar
      installationTimeline: InstallationStep[]
      maintenanceIncluded: string[]  // Jaarlijkse check, monitoring
      insurance: InsuranceDetails
      certifications: string[]       // CE, VDE, IEC certificaten
    }
    
    financeOptions: {
      cash: {
        orderPrice: number         // Product price
        installationPrice: number  // Installation cost
        totalPrice: number         // Total before subsidies
        subsidies: number          // Total subsidies
        netPrice: number          // Final price after subsidies
      }
      financing: {
        loanTerm: number                    // 15 jaar
        interestRate: number                // 4.1%
        totalCost: number                   // Total including interest
        monthlyPayment: number              // Monthly payment
        expectedMonthlySavings: number      // Expected monthly savings
        totalSubsidies: number              // Total subsidies received
        netCostPrice: number                // Total cost minus subsidies
      }
      comparison: {
        cash15Year: number                  // Total cost cash option over 15 years
        financing15Year: number             // Total cost financing over 15 years
        difference15Year: number            // Difference between options
      }
    }
    
    orderConfirmation: {
      orderSummary: OrderSummaryData
      legalTerms: string[]
      nextSteps: ThuisbatterijNextStep[]
      advisorContact: ThuisbatterijContactInfo  
      expectedDelivery: string     // "6-8 weken"
      confirmationMethod: 'digital' | 'email' | 'print'
    }
  }
}

export interface HighConsumptionDevice {
  name: string
  icon: string
  consumption: number  // kWh per year
  category: 'electric_vehicle' | 'heat_pump' | 'jacuzzi' | 'sauna' | 'charging_station' | 'other'
}

export interface FinancingOption {
  type: 'lease' | 'loan' | 'cash'
  name: string
  monthlyPayment?: number
  totalCost: number
  term?: number
  interestRate?: number
  benefits: string[]
}

export interface InstallationStep {
  step: number
  title: string
  description: string
  duration: string
  status?: 'pending' | 'completed' | 'current'
}

export interface InsuranceDetails {
  coverage: string
  provider: string
  includedInPrice: boolean
  details: string[]
}

export interface OrderSummaryData {
  product: string
  capacity: string
  price: number
  installation: number
  total: number
  subsidyDiscount: number
  finalPrice: number
}

export interface ThuisbatterijNextStep extends BaseNextStep {}

export interface ThuisbatterijContactInfo extends BaseContactInfo {}

export interface ThuisbatterijStepProps extends BaseStepProps<ThuisbatterijQuoteData> {}