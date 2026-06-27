import SlideViewer from '../components/SlideViewer'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🚀</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          GitHub 102
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Hands-on: build a demo repository on github.com
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">Follow along in your browser</p>
          <p className="text-gray-500 mt-2">All you need is a GitHub account</p>
        </div>
      </div>
    ),
  },

  {
    id: 'hands-on-create-repo',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-mono">Hands-on 1</span>
          <h2 className="text-3xl font-bold">Create the repository</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-emerald-400 font-semibold text-lg mb-3">What we do</h3>
            <div className="code-block mb-4">
              <p className="text-gray-400"># On github.com click "New repository"</p>
              <p className="text-gray-300">Name: <span className="text-emerald-400">commerce-agent-demo</span></p>
              <p className="text-gray-300">Visibility: Public</p>
              <p className="text-gray-300">✓ Add a README</p>
            </div>
            <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
            <p className="text-gray-400">
              A repository is your project's home. Creating it on GitHub means it's immediately accessible,
              backed up, and ready to share.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along</h3>
            <ol className="space-y-3 text-gray-300">
              <li className="flex gap-2"><span className="text-emerald-400 font-semibold">1.</span> Go to github.com</li>
              <li className="flex gap-2"><span className="text-emerald-400 font-semibold">2.</span> Click the "+" icon → New repository</li>
              <li className="flex gap-2"><span className="text-emerald-400 font-semibold">3.</span> Name it <code className="bg-gray-700 px-1 rounded">commerce-agent-demo</code></li>
              <li className="flex gap-2"><span className="text-emerald-400 font-semibold">4.</span> Check "Add a README file"</li>
              <li className="flex gap-2"><span className="text-emerald-400 font-semibold">5.</span> Click "Create repository"</li>
            </ol>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'hands-on-readme',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-mono">Hands-on 2</span>
          <h2 className="text-3xl font-bold">Write the README</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-emerald-400 font-semibold text-lg mb-3">What we do</h3>
            <div className="code-block text-sm">
              <p className="text-cyan-400"># Commerce Agent Demo</p>
              <p className="text-gray-400 mt-2">A reusable demo showing AI-powered</p>
              <p className="text-gray-400">commerce agent capabilities.</p>
              <p className="text-gray-400 mt-2">## Quick Start</p>
              <p className="text-gray-400">1. Clone this repo</p>
              <p className="text-gray-400">2. Follow setup/setup-instructions.md</p>
              <p className="text-gray-400">3. Run through demo-script/main-demo-flow.md</p>
              <p className="text-gray-400 mt-2">## Who is this for?</p>
              <p className="text-gray-400">Pre-sales engineers demoing commerce agent</p>
              <p className="text-gray-400">features to retail customers.</p>
            </div>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
            <p className="text-gray-400 mb-4">
              The README is the first thing anyone sees. A good README means a colleague can pick up your demo
              without asking you questions.
            </p>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along</h3>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li><span className="text-emerald-400 font-semibold">1.</span> Click the pencil icon on README.md</li>
                <li><span className="text-emerald-400 font-semibold">2.</span> Replace the default content</li>
                <li><span className="text-emerald-400 font-semibold">3.</span> Add a title, quick start, and audience</li>
                <li><span className="text-emerald-400 font-semibold">4.</span> Click "Commit changes"</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'hands-on-demo-script',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-mono">Hands-on 3</span>
          <h2 className="text-3xl font-bold">Add the demo script</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-emerald-400 font-semibold text-lg mb-3">What we do</h3>
            <p className="text-gray-400 mb-3">Create <code className="bg-gray-700 px-1 rounded">demo-script/main-demo-flow.md</code></p>
            <div className="code-block text-sm">
              <p className="text-cyan-400"># Main Demo Flow</p>
              <p className="text-gray-400 mt-2">## Opening (2 min)</p>
              <p className="text-gray-400">- Show the storefront</p>
              <p className="text-gray-400">- Introduce the AI agent concept</p>
              <p className="text-gray-400 mt-2">## Core Demo (8 min)</p>
              <p className="text-gray-400">- Customer asks agent for recommendations</p>
              <p className="text-gray-400">- Agent searches product catalog</p>
              <p className="text-gray-400">- Agent handles checkout questions</p>
              <p className="text-gray-400 mt-2">## Closing (2 min)</p>
              <p className="text-gray-400">- Recap key capabilities</p>
              <p className="text-gray-400">- Next steps discussion</p>
            </div>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
            <p className="text-gray-400 mb-4">
              A structured demo script ensures consistency. Every team member delivers the same quality demo,
              and you never forget a key talking point.
            </p>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along</h3>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li><span className="text-emerald-400 font-semibold">1.</span> Click "Add file" → "Create new file"</li>
                <li><span className="text-emerald-400 font-semibold">2.</span> Type <code className="bg-gray-700 px-1 rounded">demo-script/main-demo-flow.md</code> as filename</li>
                <li><span className="text-emerald-400 font-semibold">3.</span> Paste your demo script content</li>
                <li><span className="text-emerald-400 font-semibold">4.</span> Commit with message: "Add main demo flow script"</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'hands-on-setup',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-mono">Hands-on 4</span>
          <h2 className="text-3xl font-bold">Add setup instructions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-emerald-400 font-semibold text-lg mb-3">What we do</h3>
            <p className="text-gray-400 mb-3">Create <code className="bg-gray-700 px-1 rounded">setup/setup-instructions.md</code></p>
            <div className="code-block text-sm">
              <p className="text-cyan-400"># Setup Instructions</p>
              <p className="text-gray-400 mt-2">## Prerequisites</p>
              <p className="text-gray-400">- Access to Commerce Cloud sandbox</p>
              <p className="text-gray-400">- Agent API credentials (see vault)</p>
              <p className="text-gray-400 mt-2">## Steps</p>
              <p className="text-gray-400">1. Clone this repository</p>
              <p className="text-gray-400">2. Import sample-data/example-products.csv</p>
              <p className="text-gray-400">3. Configure agent endpoint in settings</p>
              <p className="text-gray-400">4. Run a test query to verify</p>
              <p className="text-gray-400 mt-2">## Troubleshooting</p>
              <p className="text-gray-400">- If agent times out: check VPN connection</p>
            </div>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
            <p className="text-gray-400 mb-4">
              Setup instructions remove the "it works on my machine" problem. A colleague in another timezone
              can prepare the demo without waiting for you.
            </p>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along</h3>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li><span className="text-emerald-400 font-semibold">1.</span> Click "Add file" → "Create new file"</li>
                <li><span className="text-emerald-400 font-semibold">2.</span> Type <code className="bg-gray-700 px-1 rounded">setup/setup-instructions.md</code></li>
                <li><span className="text-emerald-400 font-semibold">3.</span> Document your environment requirements</li>
                <li><span className="text-emerald-400 font-semibold">4.</span> Commit: "Add setup instructions"</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'hands-on-commit',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-mono">Hands-on 5</span>
          <h2 className="text-3xl font-bold">Understanding commits</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-emerald-400 font-semibold text-lg mb-3">What just happened</h3>
          <p className="text-gray-300 text-lg">Every time you clicked "Commit changes" on GitHub, you created a <span className="text-emerald-400 font-semibold">commit</span> — a saved snapshot with a message describing what you did.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-cyan-400 font-semibold mb-3">Why commits matter</h3>
            <p className="text-gray-400">
              Commits create a timeline. If a demo breaks after a change, you can always go back to a previous version.
              Click "Commits" on your repo page to see the full history.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Good commit messages</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="text-emerald-400">✓ "Add mobile checkout flow to demo script"</li>
              <li className="text-emerald-400">✓ "Fix agent timeout in setup instructions"</li>
              <li className="text-red-400">✗ "update stuff"</li>
              <li className="text-red-400">✗ "changes"</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'hands-on-branch',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-mono">Hands-on 6</span>
          <h2 className="text-3xl font-bold">Create a customer branch</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-emerald-400 font-semibold text-lg mb-3">What we do</h3>
            <p className="text-gray-400 mb-3">Create a parallel version for an ACME Corp customization — directly on GitHub:</p>
            <h3 className="text-cyan-400 font-semibold text-lg mt-4 mb-3">Why we do it</h3>
            <p className="text-gray-400">
              Branches let you customize for each customer without changing the base demo. Your main branch stays clean
              and reusable. Each customer gets their own version.
            </p>
            <div className="mt-4 bg-gray-900 rounded-lg p-3 text-sm">
              <p className="text-gray-400">Naming convention:</p>
              <p className="text-gray-300 mt-1"><code>customer/company-name</code></p>
              <p className="text-gray-300"><code>feature/new-capability</code></p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along on github.com</h3>
            <ol className="space-y-3 text-gray-300 text-sm">
              <li><span className="text-emerald-400 font-semibold">1.</span> Click the branch dropdown (says "main")</li>
              <li><span className="text-emerald-400 font-semibold">2.</span> Type <code className="bg-gray-700 px-1 rounded">customer/acme-corp</code></li>
              <li><span className="text-emerald-400 font-semibold">3.</span> Click "Create branch: customer/acme-corp"</li>
              <li><span className="text-emerald-400 font-semibold">4.</span> You're now on the new branch</li>
              <li><span className="text-emerald-400 font-semibold">5.</span> Edit a file (e.g. change the README title to "ACME Demo")</li>
              <li><span className="text-emerald-400 font-semibold">6.</span> Commit the change</li>
              <li><span className="text-emerald-400 font-semibold">7.</span> Switch back to main — your original is untouched</li>
            </ol>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'hands-on-pr',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-mono">Hands-on 7</span>
          <h2 className="text-3xl font-bold">Open and merge a Pull Request</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-emerald-400 font-semibold text-lg mb-3">What we do</h3>
            <p className="text-gray-400 mb-3">After customizing the ACME branch, merge improvements back:</p>
            <div className="code-block text-sm">
              <p className="text-cyan-400">Pull Request: "Add ACME product catalog"</p>
              <p className="text-gray-400 mt-1">from: customer/acme-corp</p>
              <p className="text-gray-400">to: main</p>
              <p className="text-gray-400 mt-2">Description:</p>
              <p className="text-gray-400">- Added ACME-specific products</p>
              <p className="text-gray-400">- These are useful for all retail demos</p>
            </div>
            <h3 className="text-cyan-400 font-semibold text-lg mt-4 mb-3">Why we do it</h3>
            <p className="text-gray-400">
              Pull Requests let you propose changes visibly. Colleagues can review, suggest improvements,
              and approve — catching issues before they reach the main demo.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along</h3>
            <ol className="space-y-2 text-gray-300 text-sm">
              <li><span className="text-emerald-400 font-semibold">1.</span> Go to "Pull requests" tab</li>
              <li><span className="text-emerald-400 font-semibold">2.</span> Click "New pull request"</li>
              <li><span className="text-emerald-400 font-semibold">3.</span> Select your branch → main</li>
              <li><span className="text-emerald-400 font-semibold">4.</span> Add a title and description</li>
              <li><span className="text-emerald-400 font-semibold">5.</span> Click "Create pull request"</li>
              <li><span className="text-emerald-400 font-semibold">6.</span> Review the changes shown</li>
              <li><span className="text-emerald-400 font-semibold">7.</span> Click "Merge pull request"</li>
            </ol>
            <div className="mt-4 bg-gray-900 rounded-lg p-3 text-sm text-gray-400">
              In a team, someone else would review before merging
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'collaboration',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Collaboration in action</h2>
        <p className="text-gray-400 text-lg mb-6">
          <span className="text-emerald-400 font-semibold">Scenario:</span> Three SEs work on the same demo repository
        </p>
        <div className="space-y-4">
          {[
            { who: 'You', action: 'Created the base commerce-agent-demo', icon: '🟢' },
            { who: 'Sarah', action: 'Opens an Issue: "Add return policy flow"', icon: '🎯' },
            { who: 'Marcus', action: 'Creates branch feature/return-policy, adds the flow', icon: '🌿' },
            { who: 'Marcus', action: 'Opens a Pull Request for review', icon: '🔀' },
            { who: 'You', action: 'Review the PR, suggest adding a screenshot', icon: '👀' },
            { who: 'Marcus', action: 'Adds the screenshot, PR is approved', icon: '✅' },
            { who: 'Everyone', action: 'Main branch now has the improved demo', icon: '🎉' },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-xl">{step.icon}</span>
              <span className="text-emerald-400 font-semibold w-20 shrink-0">{step.who}</span>
              <span className="text-gray-300">{step.action}</span>
            </div>
          ))}
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center">
            No email attachments. No "which version?" questions. Everyone stays in sync.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'summary',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-4xl font-bold mb-6">You just used GitHub</h2>
        <div className="grid md:grid-cols-4 gap-3 max-w-3xl mb-8">
          <div className="card !p-4">
            <p className="text-xl mb-1">📦</p>
            <p className="text-emerald-400 font-semibold text-xs">Created a repo</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">✏️</p>
            <p className="text-emerald-400 font-semibold text-xs">Edited files</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">🌿</p>
            <p className="text-emerald-400 font-semibold text-xs">Made a branch</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">🔀</p>
            <p className="text-emerald-400 font-semibold text-xs">Merged a PR</p>
          </div>
        </div>
        <div className="card max-w-lg">
          <p className="text-gray-300 text-lg">
            Everything you did was on github.com — no terminal needed.
          </p>
          <p className="text-gray-400 mt-3">
            Next up: learn to work locally with Git, or use Claude Code to build complex demos.
          </p>
        </div>
      </div>
    ),
  },
]

export default function GitHub102({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
