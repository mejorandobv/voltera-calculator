import { redirect } from 'next/navigation'

export default function HomePage() {
  // Voor demo purposes redirect naar een test aanbod
  redirect('/checkout/BAT-2024-001')
}
