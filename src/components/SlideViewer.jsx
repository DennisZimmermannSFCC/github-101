import { useState, useEffect, useCallback } from 'react'

export default function SlideViewer({ slides, onHome }) {
  const [current, setCurrent] = useState(0)

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, slides.length - 1))
  }, [slides.length])

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0))
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      }
      if (e.key === 'Escape' && onHome) {
        onHome()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev, onHome])

  const SlideContent = slides[current].content

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <main className="flex-1 overflow-y-auto slide-enter" key={current}>
        <div className="min-h-full flex flex-col justify-center py-8">
          <SlideContent />
        </div>
      </main>

      <footer className="shrink-0 border-t border-gray-800 bg-gray-950/90 backdrop-blur-sm px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {onHome && (
            <button
              onClick={onHome}
              className="px-3 py-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 transition-colors text-sm"
            >
              Home
            </button>
          )}
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
        </div>

        <span className="text-gray-500 font-mono text-sm">
          {current + 1} / {slides.length}
        </span>

        <button
          onClick={goNext}
          disabled={current === slides.length - 1}
          className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </footer>
    </div>
  )
}
