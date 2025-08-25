import { ThuisbatterijQuoteData } from '@/types/thuisbatterij'

export const mockThuisbatterijQuote: ThuisbatterijQuoteData = {
  quoteId: "BAT-2024-001",
  productType: "thuisbatterij",
  validUntil: "2024-09-07",
  
  customer: {
    name: "Johan Ketelaars",
    address: "Steurstraat 44, Woudrichem",
    email: "j.ketelaars@email.nl",
    phone: "06-12345678"
  },
  
  advisor: {
    name: "Mark Vuursteen",
    photo: "/images/advisor-mark.jpg",
    phone: "088-020-3000",
    email: "mark@voltera.nl"
  },
  
  data: {
    energyProfile: {
      yearlyUsage: 4200,
      electricityCost: 1260,
      currentRate: 0.30,
      
      hasSolar: true,
      solarCapacity: "5.4kWp",
      solarPanels: 12,
      yearlyProduction: 4860,
      
      feedInKwh: 2100,
      feedInRate: 0.08,
      
      hasDynamicContract: false,
      currentSupplier: "Vattenfall",
      
      highConsumptionDevices: [
        {
          name: "Tesla Model 3",
          icon: "🚗",
          consumption: 3200,
          category: "electric_vehicle"
        },
        {
          name: "Warmtepomp",
          icon: "🔥",
          consumption: 2800,
          category: "heat_pump"
        }
      ],
      
      electricalPanelPhases: 3,
    },
    
    selectedBattery: {
      name: "Alpha ESS SMILE5 13.3kWh",
      capacity: 13.3,
      image: "/images/alpha-ess-battery.jpg",
      specs: [
        "13.3 kWh nuttige capaciteit",
        "5 kW max ontlaadvermogen",
        "95% efficiency",
        "6000+ laadcycli",
        "Modulair uitbreidbaar",
        "Binnen/buiten plaatsing",
        "App monitoring inbegrepen"
      ],
      warranty: 10,
      placement: "Binnen/buiten",
      modularity: true,
      maxPower: 5,
      efficiency: 95,
      cycles: 6000,
      price: 7500,
      installationCost: 1500,
      totalPrice: 9000
    },
    
    calculations: {
      currentYearlyCost: 1260,
      currentDayRate: 0.32,
      feedInLoss: 168,
      
      newYearlyCost: 890,
      batterySavings: 370,
      selfConsumption: 67,
      
      batteryPrice: 7500,
      installationPrice: 1500,
      totalInvestment: 9000,
      btwSavings: 1588,
      netInvestment: 7412,
      
      paybackTime: 20,
      dynamicContractSavings: 200
    },
    
    guarantees: {
      installation: {
        years: 2,
        description: "Voltera installatiegarantie"
      },
      manufacturer: {
        years: 10,
        description: "Alpha ESS fabrieksgarantie",
        coverage: "Capaciteit & prestatie"
      },
      delivery: {
        timeframe: "Streven ernaar binnen 4 weken te installeren",
        planning: "Na akkoord direct inplannen"
      },
      permits: {
        handled: true,
        description: "Vergunningen door Voltera geregeld"
      },
      grid: {
        handled: true,
        description: "Netaanmelding door ons"
      },
      support: {
        available: false,
        future: "24/7 storing hotline (binnenkort beschikbaar)"
      }
    },
    
    btwAdvantage: 1588,
    
    savingsAnalysis: {
      yearlySavings: 370,
      totalSavings15Years: 5550,
      roiYears: 20.0,
      monthlyNetCost: 45,
      subsidyAmount: 2500,
      comparisonWithoutBattery: {
        year5Cost: 7560,
        year10Cost: 15120,
        year15Cost: 22680
      },
      financingOptions: [
        {
          type: 'cash',
          name: 'Contant betalen',
          totalCost: 6500,
          benefits: [
            'Laagste totaalkosten',
            'Direct eigenaar',
            'Maximale BTW voordelen'
          ]
        },
        {
          type: 'loan',
          name: 'Financiering 5 jaar',
          monthlyPayment: 125,
          totalCost: 7500,
          term: 60,
          interestRate: 4.2,
          benefits: [
            'Lage maandlasten',
            'Direct eigenaar',
            'Vaste rente'
          ]
        },
        {
          type: 'lease',
          name: 'Operationele lease',
          monthlyPayment: 89,
          totalCost: 8010,
          term: 72,
          benefits: [
            'Geen investering',
            'Service inbegrepen',
            'Fiscaal voordelig'
          ]
        }
      ]
    },
    
    servicePackage: {
      productWarranty: 15,
      performanceWarranty: 80,
      installationTimeline: [
        {
          step: 1,
          title: 'Technische keuring',
          description: 'Onze monteur controleert uw technische installatie',
          duration: '1 uur',
          status: 'pending'
        },
        {
          step: 2,
          title: 'Planning installatie',
          description: 'Afspraak maken voor installatiedag',
          duration: '2-3 weken',
          status: 'pending'
        },
        {
          step: 3,
          title: 'Installatie batterij',
          description: 'Volledige installatie door gecertificeerde monteurs',
          duration: '4-6 uur',
          status: 'pending'
        },
        {
          step: 4,
          title: 'Oplevering & training',
          description: 'Systeem testen en uitleg over bediening',
          duration: '1 uur',
          status: 'pending'
        }
      ],
      maintenanceIncluded: [
        'Jaarlijkse systeemcheck',
        '24/7 online monitoring',
        'Directe waarschuwing bij storingen',
        'Firmware updates'
      ],
      insurance: {
        coverage: 'Volledige dekking installatie en batterij',
        provider: 'Voltera Insurance',
        includedInPrice: true,
        details: [
          'Schade tijdens transport/installatie',
          'Productdefecten eerste 2 jaar',
          'Blikseminslag en overspanning',
          'Brand- en waterschade'
        ]
      },
      certifications: [
        'CE Conformiteit',
        'VDE Veiligheid',
        'IEC 62619 Batterij',
        'RVO Erkend installateur',
        'VEH Gecertificeerd'
      ]
    },
    
    financeOptions: {
      cash: {
        orderPrice: 7500,
        installationPrice: 1500,
        totalPrice: 9000,
        subsidies: 2500,
        netPrice: 6500
      },
      financing: {
        loanTerm: 15,
        interestRate: 4.1,
        totalCost: 10250,
        monthlyPayment: 145,
        expectedMonthlySavings: 175,
        totalSubsidies: 2500,
        netCostPrice: 7750
      },
      comparison: {
        cash15Year: 6500,  // No additional costs over 15 years for cash
        financing15Year: 8750, // Monthly payment * 12 * 5 years (remaining after 10 year loan) + loan amount
        difference15Year: 2250 // Financing costs more
      }
    },
    
    orderConfirmation: {
      orderSummary: {
        product: 'Alpha ESS SMILE5 13.3kWh',
        capacity: '13.3 kWh',
        price: 7500,
        installation: 1500,
        total: 9000,
        subsidyDiscount: 2500,
        finalPrice: 6500
      },
      legalTerms: [
        'Deze offerte is geldig tot 7 september 2024',
        'Prijzen zijn inclusief BTW en installatie',
        'ISDE subsidie van €2.500 wordt automatisch verrekend',
        'Levertijd 6-8 weken na akkoord',
        'Garantie conform fabrikant specificaties'
      ],
      nextSteps: [
        {
          step: 1,
          title: 'Bevestiging verwerken',
          description: 'Uw akkoord wordt binnen 24 uur verwerkt',
          timeframe: '1 dag'
        },
        {
          step: 2,
          title: 'Technische keuring',
          description: 'Onze monteur plant een technische keuring in',
          timeframe: '3-5 dagen'
        },
        {
          step: 3,
          title: 'Productie & levering',
          description: 'Batterij wordt geproduceerd en geleverd',
          timeframe: '4-6 weken'
        },
        {
          step: 4,
          title: 'Installatie',
          description: 'Professionele installatie door ons team',
          timeframe: '1 dag'
        }
      ],
      advisorContact: {
        name: 'Mark Vuursteen',
        phone: '088-020-3000',
        email: 'mark@voltera.nl',
        whatsapp: '06-87654321',
        availableHours: 'Ma-Vr 09:00-17:00'
      },
      expectedDelivery: '6-8 weken',
      confirmationMethod: 'digital'
    }
  }
}