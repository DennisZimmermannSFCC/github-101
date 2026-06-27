import { useState, useEffect } from 'react'
import GitHub101 from './presentations/GitHub101'
import HelloWorld from './presentations/HelloWorld'
import WorkingLocally from './presentations/WorkingLocally'

const presentations = [
  {
    id: 'hello-world',
    title: 'Hello World',
    description: 'Your very first GitHub repository — no experience needed',
    icon: '👋',
    duration: '5 min',
    slides: 9,
    color: 'from-amber-400 to-orange-400',
    border: 'border-amber-500/30 hover:border-amber-500/60',
    component: HelloWorld,
  },
  {
    id: 'working-locally',
    title: 'Working Locally',
    description: 'Clone, edit, commit, and push from your own machine',
    icon: '💻',
    duration: '10 min',
    slides: 13,
    color: 'from-violet-400 to-fuchsia-400',
    border: 'border-violet-500/30 hover:border-violet-500/60',
    component: WorkingLocally,
  },
  {
    id: 'github-101',
    title: 'GitHub 101',
    description: 'Store, reuse, improve, and share your demo assets',
    icon: '📦',
    duration: '20 min',
    slides: 16,
    color: 'from-emerald-400 to-cyan-400',
    border: 'border-emerald-500/30 hover:border-emerald-500/60',
    component: GitHub101,
  },
]

function HomePage({ onSelect }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
          GitHub for Pre-Sales
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Interactive presentations to help you get started with GitHub —
          from zero to collaborating with your team.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        {presentations.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`card text-left border ${p.border} transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800/70 cursor-pointer group`}
          >
            <div className="text-4xl mb-4">{p.icon}</div>
            <h2 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>
              {p.title}
            </h2>
            <p className="text-gray-400 mb-4">{p.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{p.slides} slides</span>
              <span>~{p.duration}</span>
            </div>
            <div className="mt-4 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
              Start →
            </div>
          </button>
        ))}
      </div>

      <p className="mt-12 text-gray-600 text-sm">
        Use arrow keys to navigate slides • Press Escape to return here
      </p>
    </div>
  )
}

function App() {
  const [view, setView] = useState(null)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) setView(hash)
  }, [])

  useEffect(() => {
    if (view) {
      window.location.hash = view
    } else {
      window.location.hash = ''
    }
  }, [view])

  const goHome = () => setView(null)

  if (view) {
    const pres = presentations.find((p) => p.id === view)
    if (pres) {
      const Component = pres.component
      return <Component onHome={goHome} />
    }
  }

  return <HomePage onSelect={setView} />
}

export default App
