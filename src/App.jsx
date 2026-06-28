import { useState, useEffect } from 'react'
import WhatIsGit from './presentations/WhatIsGit'
import Setup from './presentations/Setup'
import HandsOnHelloWorld from './presentations/HandsOnHelloWorld'
import HandsOnGitHub from './presentations/HandsOnGitHub'
import HandsOnPush from './presentations/HandsOnPush'
import HandsOnShare from './presentations/HandsOnShare'
import HandsOnUse from './presentations/HandsOnUse'
import HandsOnBranch from './presentations/HandsOnBranch'
import HandsOnGitignore from './presentations/HandsOnGitignore'
import HandsOnClaudeSession from './presentations/HandsOnClaudeSession'
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

const newCourse = [
  {
    title: '101 — Getting Started',
    items: [
      { id: 'what-is-git', title: 'Git & GitHub', subtitle: 'What they are, why they matter', icon: '💡', component: WhatIsGit },
      { id: 'setup', title: 'Setup', subtitle: 'Install Git, create a GitHub account, connect them', icon: '⚙️', component: Setup },
      { id: 'hands-on-claude-session', title: 'Shortcut: Let Claude Do It All', subtitle: 'Skip ahead — do the whole workflow by talking to Claude Code', icon: '⚡', component: HandsOnClaudeSession },
    ],
  },
  {
    title: '102 — Working with Files',
    items: [
      { id: 'hands-on-hello-world', title: 'Build a Website, Save it with Git', subtitle: 'Hands-on: create files, save with Git, undo mistakes', icon: '🌐', component: HandsOnHelloWorld },
      { id: 'hands-on-github', title: 'Your First Repo on GitHub', subtitle: 'Hands-on: create a repo, add files, see history — all in the browser', icon: '🌐', component: HandsOnGitHub },
    ],
  },
  {
    title: '103 — Sharing Your Work',
    items: [
      { id: 'hands-on-push', title: 'Put Your Project on GitHub', subtitle: 'Hands-on: push your local project to GitHub from the terminal', icon: '⬆️', component: HandsOnPush },
      { id: 'hands-on-share', title: 'Share with a Colleague', subtitle: 'Hands-on: invite someone so they can see and clone your project', icon: '🤝', component: HandsOnShare },
    ],
  },
  {
    title: '104 — Using a Shared Repo',
    items: [
      { id: 'hands-on-use', title: 'Use a Shared Repo', subtitle: 'Hands-on: clone a shared repo, explore the files', icon: '🔄', component: HandsOnUse },
    ],
  },
  {
    title: '201 — Branches',
    items: [
      { id: 'hands-on-branch', title: 'Customize Without Breaking', subtitle: 'Hands-on: create a branch, edit for ACME, compare to main', icon: '🌿', component: HandsOnBranch },
    ],
  },
  {
    title: '301 — Keeping It Clean',
    items: [
      { id: 'hands-on-gitignore', title: '.gitignore', subtitle: 'Hands-on: tell Git what NOT to save (secrets, junk, big folders)', icon: '🙈', component: HandsOnGitignore },
    ],
  },
  {
    title: '401 — Let Claude Do It',
    items: [
      { id: 'hands-on-claude-session', title: 'A Full Session with Claude Code', subtitle: 'Hands-on: build, push, branch, share, undo — all by talking', icon: '🤖', component: HandsOnClaudeSession },
    ],
  },
]

const newCourseItems = newCourse.flatMap((s) => s.items)

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

const allPresentations = [...newCourseItems, ...oldSections.flatMap((s) => s.items)]

function HomePage({ onSelect }) {
  const [showOld, setShowOld] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12">
      <div className="text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
          GitHub for Pre-Sales
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Learn Git and GitHub step by step.
        </p>
      </div>

      <div className="max-w-3xl w-full">
        <div className="mb-12 space-y-8">
          {newCourse.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-3 px-1">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onSelect(p.id)}
                    className="card text-left border border-gray-700/50 hover:border-gray-500/60 transition-all duration-200 hover:scale-[1.01] hover:bg-gray-800/70 cursor-pointer group w-full flex items-center gap-5"
                  >
                    <span className="text-3xl">{p.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{p.title}</h3>
                      <p className="text-gray-500 text-sm">{p.subtitle}</p>
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors">Start →</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
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
