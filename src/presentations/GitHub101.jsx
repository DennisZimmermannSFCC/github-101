import SlideViewer from '../components/SlideViewer'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">📦</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          GitHub 101
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Store, reuse, improve, and share your demo assets
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">A guide for Pre-Sales Engineers</p>
          <p className="text-gray-500 mt-2">Use arrow keys or buttons to navigate</p>
        </div>
      </div>
    ),
  },

  {
    id: 'why-github',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Why GitHub matters for Pre-Sales demos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="highlight text-xl mb-3">The Problem</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Demo scripts live in random folders</li>
              <li>• "Which version did I show last week?"</li>
              <li>• No way to share improvements</li>
              <li>• Customer variations get lost</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl mb-3 text-cyan-400 font-semibold">The Solution</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• One place for all demo assets</li>
              <li>• Full version history</li>
              <li>• Easy collaboration with colleagues</li>
              <li>• Customer-specific branches</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-gray-400 text-center text-lg">
          <span className="highlight">Why:</span> You spend time building great demos — GitHub ensures that work compounds instead of getting lost.
        </p>
      </div>
    ),
  },

  {
    id: 'github-history',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">A quick GitHub history</h2>
        <div className="space-y-4">
          {[
            { year: '2005', event: 'Linus Torvalds creates Git for Linux kernel development' },
            { year: '2008', event: 'GitHub launches — makes Git accessible via the web' },
            { year: '2018', event: 'Microsoft acquires GitHub for $7.5B' },
            { year: 'Today', event: '100M+ developers, 420M+ repositories worldwide' },
          ].map((item) => (
            <div key={item.year} className="flex items-start gap-4">
              <span className="highlight text-lg font-mono w-16 shrink-0">{item.year}</span>
              <span className="text-gray-300 text-lg">{item.event}</span>
            </div>
          ))}
        </div>
        <div className="card mt-8">
          <p className="text-gray-400">
            <span className="highlight">Why this matters:</span> GitHub is the industry standard. Your colleagues, partners, and customers already use it.
            Learning it means speaking a common language.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'demo-asset-problem',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">The demo asset problem</h2>
        <p className="text-gray-400 text-lg mb-6">You built a great demo. Now what?</p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-red-400 mb-4">Sharing is broken</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• "Can you send me your demo?" → email attachment, outdated by tomorrow</li>
              <li>• Colleague improves it → you never get those improvements back</li>
              <li>• Two people edit the same script → someone's work gets lost</li>
              <li>• New team member joins → "ask Sarah, she has the latest... maybe"</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-red-400 mb-4">Files are chaos</h3>
            <div className="code-block text-gray-400 text-sm">
              <p>📁 Desktop/</p>
              <p className="ml-4">📁 demo-final/</p>
              <p className="ml-4">📁 demo-final-v2/</p>
              <p className="ml-4">📁 demo-ACTUAL-final/</p>
              <p className="ml-4">📁 demo-for-acme-corp/</p>
              <p className="ml-4">📁 demo-copy-from-sarah/</p>
              <p className="ml-4">📄 demo-script-old.docx</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-3">
          <div className="card text-center !p-4">
            <p className="text-2xl mb-1">🔍</p>
            <p className="text-gray-400 text-xs">Can't find the latest</p>
          </div>
          <div className="card text-center !p-4">
            <p className="text-2xl mb-1">📧</p>
            <p className="text-gray-400 text-xs">Sharing by email fails</p>
          </div>
          <div className="card text-center !p-4">
            <p className="text-2xl mb-1">💥</p>
            <p className="text-gray-400 text-xs">Changes overwrite each other</p>
          </div>
          <div className="card text-center !p-4">
            <p className="text-2xl mb-1">🚪</p>
            <p className="text-gray-400 text-xs">New people can't onboard</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'core-concepts',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Core GitHub concepts</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { term: 'Repository', icon: '📦', desc: 'A project folder with full history — your single source of truth' },
            { term: 'README', icon: '📖', desc: 'The front page of your repo — explains what this demo is and how to use it' },
            { term: 'Commit', icon: '💾', desc: 'A saved snapshot — "Added setup steps for ACME demo"' },
            { term: 'Branch', icon: '🌿', desc: 'A parallel version — customize for a customer without touching the original' },
            { term: 'Pull Request', icon: '🔀', desc: 'A proposal to merge changes — lets colleagues review before merging' },
            { term: 'Issue', icon: '🎯', desc: 'A tracked task or idea — "Add mobile checkout flow to demo"' },
          ].map((item) => (
            <div key={item.term} className="card flex items-start gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="highlight text-lg">{item.term}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: 'typical-flow',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">The daily workflow</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center gap-2">
            {[
              { step: 'Edit files', color: 'text-violet-400' },
              { step: 'git status', color: 'text-cyan-400' },
              { step: 'git add', color: 'text-teal-400' },
              { step: 'git commit', color: 'text-emerald-400' },
              { step: 'git push', color: 'text-amber-400' },
            ].map((item, i) => (
              <div key={item.step} className="w-full max-w-xs">
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-5 py-2.5 text-center">
                  <span className={`font-mono font-semibold ${item.color}`}>{item.step}</span>
                </div>
                {i < 4 && <div className="text-center text-gray-700">↓</div>}
              </div>
            ))}
            <div className="text-center text-amber-400 text-sm mt-1">↻ back to editing</div>
          </div>
          <div className="space-y-4">
            <div className="card !py-3">
              <p className="text-violet-400 font-semibold text-sm">Edit files</p>
              <p className="text-gray-400 text-sm">Make changes in your editor — code, docs, anything</p>
            </div>
            <div className="card !py-3">
              <p className="text-cyan-400 font-semibold text-sm">git status</p>
              <p className="text-gray-400 text-sm">Check what changed — no surprises before saving</p>
            </div>
            <div className="card !py-3">
              <p className="text-teal-400 font-semibold text-sm">git add</p>
              <p className="text-gray-400 text-sm">Stage the files you want to include in this save</p>
            </div>
            <div className="card !py-3">
              <p className="text-emerald-400 font-semibold text-sm">git commit</p>
              <p className="text-gray-400 text-sm">Save a snapshot with a message — a checkpoint you can return to</p>
            </div>
            <div className="card !py-3">
              <p className="text-amber-400 font-semibold text-sm">git push</p>
              <p className="text-gray-400 text-sm">Upload to GitHub — now it's backed up and shared with the team</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'repo-structure',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Recommended demo repository structure</h2>
        <p className="text-gray-400 mb-6 text-lg">
          <span className="highlight">Why:</span> A consistent structure means any colleague can pick up your demo in minutes.
        </p>
        <div className="code-block text-base">
          <p className="text-cyan-400">commerce-agent-demo/</p>
          <p className="ml-4 text-gray-300">├── <span className="text-emerald-400">README.md</span>           — What this demo does, quick start</p>
          <p className="ml-4 text-gray-300">├── <span className="text-emerald-400">CHANGELOG.md</span>       — What changed and when</p>
          <p className="ml-4 text-gray-300">├── <span className="text-cyan-400">setup/</span></p>
          <p className="ml-8 text-gray-300">│   └── setup-instructions.md  — Environment prep steps</p>
          <p className="ml-4 text-gray-300">├── <span className="text-cyan-400">demo-script/</span></p>
          <p className="ml-8 text-gray-300">│   └── main-demo-flow.md      — Step-by-step talk track</p>
          <p className="ml-4 text-gray-300">├── <span className="text-cyan-400">sample-data/</span></p>
          <p className="ml-8 text-gray-300">│   └── example-products.csv   — Test data for the demo</p>
          <p className="ml-4 text-gray-300">└── <span className="text-cyan-400">screenshots/</span>          — Visual references</p>
        </div>
      </div>
    ),
  },

  {
    id: 'good-habits',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Good habits for demo repositories</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { habit: 'Commit often', why: 'Small saves are easy to understand and revert', icon: '💾' },
            { habit: 'Write clear messages', why: '"Add ACME pricing" not "update stuff"', icon: '✍️' },
            { habit: 'Use branches', why: 'Keep main clean, experiment safely', icon: '🌿' },
            { habit: 'Keep README current', why: 'New team members can start immediately', icon: '📖' },
            { habit: 'Use Issues for ideas', why: 'Track what to improve without losing it', icon: '🎯' },
            { habit: 'Review before merge', why: 'Catch mistakes, share knowledge', icon: '👀' },
          ].map((item) => (
            <div key={item.habit} className="card flex items-start gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <h3 className="highlight">{item.habit}</h3>
                <p className="text-gray-400 text-sm">{item.why}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: 'summary',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Now you know the concepts</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="card">
            <p className="text-3xl mb-2">📦</p>
            <h3 className="highlight">Store</h3>
            <p className="text-gray-400 text-sm">One place for all demo assets with full history</p>
          </div>
          <div className="card">
            <p className="text-3xl mb-2">🔀</p>
            <h3 className="text-cyan-400 font-semibold">Collaborate</h3>
            <p className="text-gray-400 text-sm">Branches and PRs for safe teamwork</p>
          </div>
          <div className="card">
            <p className="text-3xl mb-2">🚀</p>
            <h3 className="text-purple-400 font-semibold">Improve</h3>
            <p className="text-gray-400 text-sm">Every demo gets better over time</p>
          </div>
        </div>
        <div className="card max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-3 text-gray-200">Next: try it yourself</h3>
          <p className="text-gray-300 text-lg">
            Head to <span className="highlight">GitHub 102</span> for the hands-on walkthrough — build a demo repo on github.com step by step.
          </p>
        </div>
      </div>
    ),
  },
]

export default function GitHub101({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
