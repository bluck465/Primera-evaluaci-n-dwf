import { useEffect } from 'react'

export function useLucideIcons(deps = []) {
  useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons()
    }
  }, deps)
}
