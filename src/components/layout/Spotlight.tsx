import { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'motion/react'

export default function Spotlight() {
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const reduce = useReducedMotion()

  const background = useMotionTemplate`radial-gradient(450px circle at ${x}px ${y}px, rgba(251,191,36,0.12), transparent 70%)`

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  if (reduce) return null

  return (
    <motion.div
      aria-hidden
      style={{ background }}
      className="pointer-events-none fixed inset-0 z-30 hidden [@media(hover:hover)]:block"
    />
  )
}