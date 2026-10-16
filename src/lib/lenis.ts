import type Lenis from 'lenis'
import type { MouseEvent } from 'react'

let instance: Lenis | null = null

export const setLenis = (l: Lenis | null) => {
  instance = l
}

export const getLenis = () => instance

export function scrollToId(e: MouseEvent, id: string) {
  const lenis = getLenis()
  if (!lenis) return

  e.preventDefault()
  document.documentElement.style.overflow = ''
  lenis.start()
  lenis.scrollTo(`#${id}`)
  history.replaceState(null, '', `#${id}`)
}