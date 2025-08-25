import { NextRequest, NextResponse } from 'next/server'
import { mockThuisbatterijQuote } from '@/lib/mock-data'

function detectProductType(quoteId: string): string {
  if (quoteId.startsWith('BAT-')) return 'thuisbatterij'
  if (quoteId.startsWith('SOL-')) return 'zonnepanelen' 
  if (quoteId.startsWith('HP-')) return 'warmtepomp'
  return 'thuisbatterij' // default fallback
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ quoteId: string }> }
) {
  const { quoteId } = await params
  
  try {
    const productType = detectProductType(quoteId)
    
    // In productie: haal data uit Voltera CRM op basis van productType
    // const quoteData = await volteraCRM.getQuote(quoteId, productType)
    
    // Voor nu: gebruik mock data op basis van productType
    let quoteData
    switch (productType) {
      case 'thuisbatterij':
        quoteData = {
          ...mockThuisbatterijQuote,
          quoteId: quoteId
        }
        break
      case 'zonnepanelen':
        // TODO: Implement zonnepanelen mock data
        throw new Error('Zonnepanelen quotes not implemented yet')
      case 'warmtepomp':
        // TODO: Implement warmtepomp mock data  
        throw new Error('Warmtepomp quotes not implemented yet')
      default:
        throw new Error('Unknown product type')
    }
    
    return NextResponse.json(quoteData)
    
  } catch (error) {
    console.error('Error fetching quote:', error)
    return NextResponse.json(
      { error: 'Quote not found' },
      { status: 404 }
    )
  }
}