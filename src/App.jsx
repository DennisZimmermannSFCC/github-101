import { useState, useEffect } from 'react'
import GitHubSetup from './presentations/GitHubSetup'
import GitHub101 from './presentations/GitHub101'
import GitHub102 from './presentations/GitHub102'
import GitHub104 from './presentations/GitHub104'
import HelloWorld from './presentations/HelloWorld'
import WorkingLocally from './presentations/WorkingLocally'
import Branches from './presentations/Branches'
import Issues from './presentations/Issues'
import HandsOnIssues from './presentations/HandsOnIssues'
import HandsOnIssuesCLI from './presentations/HandsOnIssuesCLI'
import HandsOnIssuesClaude from './presentations/HandsOnIssuesClaude'
import ClaudeCode from './presentations/ClaudeCode'
import HandsOnClaudeCode from './presentations/HandsOnClaudeCode'

const oldSections = [
  {
    title: 'Getting Started',
    items: [
      { id: 'github-101', title: 'GitHub 101', icon: '📦', component: GitHub101 },
      { id: 'github-setup', title: 'GitHub Setup', icon: '⚙️', component: GitHubSetup },
      { id: 'github-102', title: 'GitHub 102', icon: '🚀', component: GitHub102 },
      { id: 'github-103', title: 'GitHub 103', icon: '💻', component: WorkingLocally },
      { id: 'github-104', title: 'GitHub 104', icon: '🤝', component: GitHub104 },
      { id: 'hands-on-claude-code', title: 'Hands-On: Claude Code', icon: '🛠️', component: HandsOnClaudeCode },
    ],
  },
  {
    title: 'Understanding More',
    items: [
      { id: 'branches', title: 'Branches', icon: '🌿', component: Branches },
      { id: 'issues', title: 'Issues', icon: '🎯', component: Issues },
      { id: 'hands-on-issues', title: 'Hands-On: Issues', icon: '✅', component: HandsOnIssues },
      { id: 'hands-on-issues-cli', title: 'Hands-On: Issues (CLI)', icon: '💻', component: HandsOnIssuesCLI },
      { id: 'hands-on-issues-claude', title: 'Hands-On: Issues (Claude)', icon: '🤖', component: HandsOnIssuesClaude },
      { id: 'claude-code', title: 'Claude Code + GitHub', icon: '🤖', component: ClaudeCode },
    ],
  },
]

const allPresentations = oldSections.flatMap((s) => s.items)

function HomePage({ onSelect }) {
  const [showOld, setShowOld] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12">
      <div className="text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
          GitHub for Pre-Sales
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Course redesign in progress.
        </p>
      </div>

      <div className="max-w-5xl w-full">
        <button
          onClick={() => setShowOld(!showOld)}
          className="text-sm text-gray-600 hover:text-gray-400 transition-colors mb-4"
        >
          {showOld ? '▾ Hide' : '▸ Show'} old lessons
        </button>

        {showOld && (
          <div className="space-y-8">
            {oldSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xs font-mono uppercase tracking-wider text-gray-600 mb-3 px-1">
                  {section.title}
                </h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {section.items.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => onSelect(p.id)}
                      className="card text-left border border-gray-700/30 hover:border-gray-600/50 transition-all hover:bg-gray-800/50 cursor-pointer opacity-60 hover:opacity-100"
                    >
                      <span className="text-xl">{p.icon}</span>
                      <p className="text-sm font-semibold text-gray-300 mt-2">{p.title}</p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
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
