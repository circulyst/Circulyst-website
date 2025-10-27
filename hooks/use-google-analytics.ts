'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview } from '@/lib/gtag'

export function useGoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const url = pathname + searchParams.toString()
      pageview(url)
    }
  }, [pathname, searchParams])
}

// Custom hook for tracking events
export function useTrackEvent() {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (process.env.NODE_ENV === 'production') {
      // Import event function dynamically to avoid SSR issues
      import('@/lib/gtag').then(({ event }) => {
        event({ action, category, label, value })
      })
    }
  }

  return { trackEvent }
}
