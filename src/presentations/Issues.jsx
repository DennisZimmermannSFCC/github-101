import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎯</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Issues
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Track ideas, tasks, and bugs — all in one place
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">Your team's to-do list, built into GitHub</p>
          <p className="text-gray-500 mt-2">No extra tools needed</p>
        </div>
      </div>
    ),
  },

  {
    id: 'why-issues',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Why use Issues?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-red-400 font-semibold text-lg mb-3">Without Issues</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Ideas in Slack messages — lost in days</li>
              <li>• "Can you add X?" — forgotten by next week</li>
              <li>• No one knows what's planned vs. done</li>
              <li>• Feedback lives in email threads</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-emerald-400 font-semibold text-lg mb-3">With Issues</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Every idea is captured and visible</li>
              <li>• Assign tasks to people</li>
              <li>• Track what's open vs. closed</li>
              <li>• Discussion stays with the task</li>
            </ul>
          </div>
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center">
            <span className="text-orange-400 font-semibold">Think of Issues as sticky notes</span> that everyone can see, comment on, and check off.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'what-to-track',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">What to track with Issues</h2>
        <div className="space-y-4">
          {[
            { title: 'Add mobile checkout flow to demo', label: 'enhancement', color: 'text-blue-400', icon: '✨' },
            { title: 'Demo script is missing the closing section', label: 'bug', color: 'text-red-400', icon: '🐛' },
            { title: 'Update screenshots for new UI', label: 'task', color: 'text-emerald-400', icon: '📋' },
            { title: 'Should we add a voice demo?', label: 'question', color: 'text-purple-400', icon: '💬' },
            { title: 'Customer X wants a returns flow', label: 'customer request', color: 'text-amber-400', icon: '🏢' },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3">
              <span className="text-xl">{item.icon}</span>
              <span className="text-gray-200 flex-1">{item.title}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full border border-gray-700 ${item.color}`}>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center text-sm">
            Anything that should be done, discussed, or not forgotten — make it an Issue.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'create-issue',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono">Step 1</span>
          <h2 className="text-3xl font-bold">Create an Issue</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-orange-400 font-semibold text-lg mb-3">What we do</h3>
              <p className="text-gray-300">Open a new Issue to capture an idea or task.</p>
            </div>
            <div className="card">
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
              <p className="text-gray-400">Writing it down means it won't get lost. Other team members can see it, comment, and pick it up.</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along on github.com</h3>
            <ol className="space-y-3 text-gray-300 text-sm">
              <li><span className="text-orange-400 font-semibold">1.</span> Go to your repo</li>
              <li><span className="text-orange-400 font-semibold">2.</span> Click the <span className="font-semibold">"Issues"</span> tab</li>
              <li><span className="text-orange-400 font-semibold">3.</span> Click <span className="text-emerald-400 font-semibold">"New issue"</span></li>
              <li><span className="text-orange-400 font-semibold">4.</span> Title: <code className="bg-gray-700 px-1 rounded">Add return policy flow to demo</code></li>
              <li><span className="text-orange-400 font-semibold">5.</span> Description: explain what and why</li>
              <li><span className="text-orange-400 font-semibold">6.</span> Click "Submit new issue"</li>
            </ol>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'anatomy',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono">Step 2</span>
          <h2 className="text-3xl font-bold">Anatomy of a good Issue</h2>
        </div>
        <div className="card mb-6">
          <div className="code-block text-sm relative">
            <CopyButton text={"## What\nAdd a return policy section to the demo script.\n\n## Why\nCustomer ACME asked about returns during the last demo.\nWe didn't have an answer ready.\n\n## How\n- Add a returns FAQ to the agent knowledge base\n- Add a \"returns\" section to the demo script\n- Test with: \"What's your return policy?\""} />
            <p className="text-orange-400 font-semibold">Title: Add return policy flow to demo</p>
            <p className="text-gray-400 mt-3">## What</p>
            <p className="text-gray-400">Add a return policy section to the demo script.</p>
            <p className="text-gray-400 mt-2">## Why</p>
            <p className="text-gray-400">Customer ACME asked about returns during the last demo.</p>
            <p className="text-gray-400">We didn't have an answer ready.</p>
            <p className="text-gray-400 mt-2">## How</p>
            <p className="text-gray-400">- Add a returns FAQ to the agent knowledge base</p>
            <p className="text-gray-400">- Add a "returns" section to the demo script</p>
            <p className="text-gray-400">- Test with: "What's your return policy?"</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card text-center !p-3">
            <p className="text-orange-400 font-semibold text-sm">What</p>
            <p className="text-gray-500 text-xs">What needs to be done</p>
          </div>
          <div className="card text-center !p-3">
            <p className="text-orange-400 font-semibold text-sm">Why</p>
            <p className="text-gray-500 text-xs">Context and motivation</p>
          </div>
          <div className="card text-center !p-3">
            <p className="text-orange-400 font-semibold text-sm">How</p>
            <p className="text-gray-500 text-xs">Steps or acceptance criteria</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'labels-assign',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono">Step 3</span>
          <h2 className="text-3xl font-bold">Organize with labels and assignees</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-orange-400 font-semibold text-lg mb-3">Labels</h3>
            <p className="text-gray-400 text-sm mb-3">Color-coded tags to categorize Issues.</p>
            <div className="space-y-2">
              {[
                { label: 'bug', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
                { label: 'enhancement', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
                { label: 'customer-request', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
                { label: 'good first issue', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
              ].map((item) => (
                <span key={item.label} className={`inline-block text-xs px-2 py-0.5 rounded-full border mr-2 ${item.color}`}>{item.label}</span>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-3">Add labels from the right sidebar of any Issue.</p>
          </div>
          <div className="card">
            <h3 className="text-orange-400 font-semibold text-lg mb-3">Assignees</h3>
            <p className="text-gray-400 text-sm mb-3">Who's working on this?</p>
            <div className="space-y-3 text-sm text-gray-300">
              <p>• Assign yourself → "I'll do this"</p>
              <p>• Assign a colleague → "Can you handle this?"</p>
              <p>• Unassigned → up for grabs</p>
            </div>
            <p className="text-gray-500 text-xs mt-3">Click "Assignees" in the right sidebar.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'discuss-close',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono">Step 4</span>
          <h2 className="text-3xl font-bold">Discuss and close</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-3">Comment on Issues</h3>
          <p className="text-gray-400 mb-3">Issues have a conversation thread. Use it to:</p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Ask questions: "Should we cover international returns too?"</li>
            <li>• Share progress: "Added the FAQ, working on the script next"</li>
            <li>• Link to PRs: "Fixed in #12" — GitHub auto-links it</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-emerald-400 font-semibold text-lg mb-3">Close when done</h3>
          <p className="text-gray-400 text-sm mb-3">When the work is complete, close the Issue:</p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Click <span className="text-emerald-400 font-semibold">"Close issue"</span> manually</li>
            <li>• Or include <code className="bg-gray-700 px-1 rounded">Closes #5</code> in your commit message — GitHub closes it automatically</li>
          </ul>
          <p className="text-gray-500 text-xs mt-3">Closed Issues stay in the history. You can always reopen them.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'workflow',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">The Issue workflow</h2>
        <p className="text-gray-400 text-lg mb-6">How Issues connect to the rest of GitHub:</p>
        <div className="space-y-3">
          {[
            { step: 'Someone opens an Issue', desc: '"Add return policy flow"', icon: '🎯' },
            { step: 'Assign it', desc: 'Marcus takes it on', icon: '👤' },
            { step: 'Create a branch', desc: 'feature/return-policy', icon: '🌿' },
            { step: 'Do the work, commit', desc: 'Add the returns section', icon: '✏️' },
            { step: 'Open a Pull Request', desc: 'References the Issue: "Closes #5"', icon: '🔀' },
            { step: 'Merge the PR', desc: 'Issue closes automatically', icon: '✅' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-xl">{item.icon}</span>
              <div>
                <span className="text-gray-200 font-semibold text-sm">{item.step}</span>
                <span className="text-gray-500 text-sm ml-2">— {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center text-sm">
            Issue → Branch → PR → Merge → Issue closes. Full traceability from idea to done.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'summary',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎯</div>
        <h2 className="text-4xl font-bold mb-6">Never lose a good idea again</h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-2xl mb-8">
          <div className="card !p-4">
            <p className="text-xl mb-1">📝</p>
            <p className="text-orange-400 font-semibold text-xs">Capture</p>
            <p className="text-gray-500 text-xs">Write it down as an Issue</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">💬</p>
            <p className="text-orange-400 font-semibold text-xs">Discuss</p>
            <p className="text-gray-500 text-xs">Comment, assign, label</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">✅</p>
            <p className="text-orange-400 font-semibold text-xs">Close</p>
            <p className="text-gray-500 text-xs">Done — stays in history</p>
          </div>
        </div>
        <div className="card max-w-lg">
          <p className="text-gray-400 text-sm">
            Start using Issues today: open one for the next improvement you want to make to your demo.
          </p>
        </div>
      </div>
    ),
  },
]

export default function Issues({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
