import { useState, useEffect } from 'react'
import GitHubSetup from './presentations/GitHubSetup'
import GitHub101 from './presentations/GitHub101'
import GitHub102 from './presentations/GitHub102'
import HelloWorld from './presentations/HelloWorld'
import WorkingLocally from './presentations/WorkingLocally'
import Branches from './presentations/Branches'
import ClaudeCode from './presentations/ClaudeCode'
import HandsOnClaudeCode from './presentations/HandsOnClaudeCode'

const sections = [
  {
    title: 'Getting Started',
    items: [
      {
        id: 'github-101',
        title: 'GitHub 101',
        description: 'Why GitHub matters — concepts, structure, and good habits',
        icon: '📦',
        duration: '10 min',
        slides: 8,
        color: 'from-emerald-400 to-cyan-400',
        border: 'border-emerald-500/30 hover:border-emerald-500/60',
        component: GitHub101,
      },
      {
        id: 'github-setup',
        title: 'GitHub Setup',
        description: 'Install everything you need — one-time setup',
        icon: '⚙️',
        duration: '15 min',
        slides: 9,
        color: 'from-blue-400 to-sky-400',
        border: 'border-blue-500/30 hover:border-blue-500/60',
        component: GitHubSetup,
      },
      {
        id: 'github-102',
        title: 'GitHub 102',
        description: 'Hands-on: build a demo repository on github.com',
        icon: '🚀',
        duration: '15 min',
        slides: 10,
        color: 'from-emerald-400 to-teal-400',
        border: 'border-teal-500/30 hover:border-teal-500/60',
        component: GitHub102,
      },
      {
        id: 'github-103',
        title: 'GitHub 103',
        description: 'Clone, edit, commit, and push from your own machine',
        icon: '💻',
        duration: '10 min',
        slides: 11,
        color: 'from-violet-400 to-fuchsia-400',
        border: 'border-violet-500/30 hover:border-violet-500/60',
        component: WorkingLocally,
      },
      {
        id: 'hands-on-claude-code',
        title: 'Hands-On: Claude Code',
        description: 'Follow along — create your first repo with Claude Code',
        icon: '🛠️',
        duration: '5 min',
        slides: 6,
        color: 'from-sky-400 to-indigo-400',
        border: 'border-sky-500/30 hover:border-sky-500/60',
        component: HandsOnClaudeCode,
      },
    ],
  },
  {
    title: 'Understanding More',
    items: [
      {
        id: 'branches',
        title: 'Branches',
        description: 'Work on changes without breaking what already works',
        icon: '🌿',
        duration: '10 min',
        slides: 12,
        color: 'from-teal-400 to-emerald-400',
        border: 'border-teal-500/30 hover:border-teal-500/60',
        component: Branches,
      },
      {
        id: 'claude-code',
        title: 'Claude Code + GitHub',
        description: 'Build complex demos with AI — from zero to shared with your team',
        icon: '🤖',
        duration: '15 min',
        slides: 11,
        color: 'from-rose-400 to-pink-400',
        border: 'border-rose-500/30 hover:border-rose-500/60',
        component: ClaudeCode,
      },
    ],
  },
]

const allPresentations = sections.flatMap((s) => s.items)

function HomePage({ onSelect }) {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12">
      <div className="text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
          GitHub for Pre-Sales
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Interactive presentations to help you get started with GitHub —
          from zero to collaborating with your team.
        </p>
      </div>

      <div className="max-w-5xl w-full space-y-10">
        {sections.map((section, si) => (
          <div key={section.title}>
            <h2 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-4 px-1">
              {si + 1}. {section.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {section.items.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onSelect(p.id)}
                  className={`card text-left border ${p.border} transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800/70 cursor-pointer group`}
                >
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className={`text-lg font-bold mb-1 bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{p.description}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{p.slides} slides</span>
                    <span>~{p.duration}</span>
                  </div>
                  <div className="mt-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                    Start →
                  </div>
                </button>
              ))}
            </div>
          </div>
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
    const pres = allPresentations.find((p) => p.id === view)
    if (pres) {
      const Component = pres.component
      return <Component onHome={goHome} />
    }
  }

  return <HomePage onSelect={setView} />
}

export default App
