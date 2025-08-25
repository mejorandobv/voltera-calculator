import { ThuisbatterijCheckout } from '@/components/thuisbatterij/ThuisbatterijCheckout'

interface PageProps {
  params: Promise<{
    quoteId: string
  }>
}

function detectProductType(quoteId: string): string {
  if (quoteId.startsWith('BAT-')) return 'thuisbatterij'
  if (quoteId.startsWith('SOL-')) return 'zonnepanelen'
  if (quoteId.startsWith('HP-')) return 'warmtepomp'
  return 'thuisbatterij' // default fallback
}

export default async function CheckoutPage({ params }: PageProps) {
  const { quoteId } = await params
  const productType = detectProductType(quoteId)
  
  switch (productType) {
    case 'thuisbatterij':
      return <ThuisbatterijCheckout quoteId={quoteId} />
    case 'zonnepanelen':
      // TODO: Implement ZonnepanelenCheckout component
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Zonnepanelen Checkout</h1>
            <p className="text-gray-600">Deze functionaliteit wordt binnenkort toegevoegd.</p>
          </div>
        </div>
      )
    case 'warmtepomp':
      // TODO: Implement WarmtepompCheckout component
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Warmtepomp Checkout</h1>
            <p className="text-gray-600">Deze functionaliteit wordt binnenkort toegevoegd.</p>
          </div>
        </div>
      )
    default:
      return <ThuisbatterijCheckout quoteId={quoteId} />
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { quoteId } = await params
  const productType = detectProductType(quoteId)
  
  const productNames = {
    thuisbatterij: 'Thuisbatterij',
    zonnepanelen: 'Zonnepanelen',
    warmtepomp: 'Warmtepomp'
  }
  
  const productDescriptions = {
    thuisbatterij: 'Uw persoonlijke aanbod voor een thuisbatterij systeem van Voltera',
    zonnepanelen: 'Uw persoonlijke aanbod voor zonnepanelen van Voltera',
    warmtepomp: 'Uw persoonlijke aanbod voor een warmtepomp van Voltera'
  }
  
  return {
    title: `Voltera ${productNames[productType as keyof typeof productNames]} Aanbod - ${quoteId}`,
    description: productDescriptions[productType as keyof typeof productDescriptions],
  }
}