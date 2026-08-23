import { useEffect, useRef, useState } from 'react'

interface SplitFlapTextProps {
  text: string
  flapDelay?: number      // ms between each letter starting its flip
  flipSpeed?: number      // ms between each random-letter frame
  className?: string      // styles for each flap cell
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '

export const SplitFlapText = ({
  text,
  flapDelay = 70,
  flipSpeed = 45,
  className = '',
}: SplitFlapTextProps) => {
  const [display, setDisplay] = useState<string[]>(() => text.split('').map(() => ''))
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([])
  const intervals = useRef<ReturnType<typeof setInterval>[]>([])

  const play = () => {
    // clear any running timers from a previous play
    timeouts.current.forEach(clearTimeout)
    intervals.current.forEach(clearInterval)
    timeouts.current = []
    intervals.current = []

    const chars = text.split('')

    chars.forEach((finalChar, i) => {
      const steps = 8 + Math.floor(Math.random() * 6)
      let step = 0

      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          if (step >= steps) {
            setDisplay((prev) => {
              const next = [...prev]
              next[i] = finalChar
              return next
            })
            clearInterval(interval)
            return
          }
          const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)]
          setDisplay((prev) => {
            const next = [...prev]
            next[i] = randomChar
            return next
          })
          step++
        }, flipSpeed)

        intervals.current.push(interval)
      }, i * flapDelay)

      timeouts.current.push(timeout)
    })
  }

  useEffect(() => {
    play()
    return () => {
      timeouts.current.forEach(clearTimeout)
      intervals.current.forEach(clearInterval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return (
    <div className="flex gap-1.5 flex-wrap justify-center">
      {display.map((char, i) => (
        <div
          key={i}
          className={`relative w-9 h-12 bg-yellow-100 rounded overflow-hidden flex items-center justify-center font-mono text-3xl font-semibold text-slate-900 ${className}`}
        >
          {/* center divider line, mimics real split-flap boards */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-950 z-10" />
          <span>{char === ' ' ? '\u00A0' : char}</span>
        </div>
      ))}
    </div>
  )
}