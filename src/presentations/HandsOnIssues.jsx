import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎯</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
          Hands-On: Issues
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Follow along — create, discuss, and close an Issue
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">All on github.com — no terminal needed</p>
          <p className="text-gray-500 mt-2">You need a repository (from GitHub 102 or Hands-On: Claude Code)</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-1',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono">Step 1</span>
          <h2 className="text-3xl font-bold">Open a new Issue</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-3">On github.com</h3>
          <ol className="space-y-3 text-gray-300">
            <li><span className="text-orange-400 font-semibold">1.</span> Go to your repo</li>
            <li><span className="text-orange-400 font-semibold">2.</span> Click the <span className="font-semibold">"Issues"</span> tab</li>
            <li><span className="text-orange-400 font-semibold">3.</span> Click <span className="text-emerald-400 font-semibold">"New issue"</span></li>
          </ol>
        </div>
        <div className="card">
          <h3 className="text-gray-200 font-semibold mb-3">Fill it in</h3>
          <div className="code-block relative">
            <CopyButton text={"Add a FAQ section to the demo"} />
            <p className="text-orange-400 font-semibold">Title:</p>
            <p className="text-gray-300">Add a FAQ section to the demo</p>
          </div>
          <div className="code-block relative mt-3">
            <CopyButton text={"## What\nAdd a short FAQ section covering the 3 most common customer questions.\n\n## Why\nCustomers always ask about pricing, integrations, and setup time.\nHaving answers ready makes the demo smoother.\n\n## Tasks\n- [ ] Add FAQ to demo-script.md\n- [ ] Include example answers"} />
            <p className="text-orange-400 font-semibold">Description:</p>
            <p className="text-gray-400 mt-1">## What</p>
            <p className="text-gray-400">Add a short FAQ section covering the 3 most</p>
            <p className="text-gray-400">common customer questions.</p>
            <p className="text-gray-400 mt-2">## Why</p>
            <p className="text-gray-400">Customers always ask about pricing, integrations,</p>
            <p className="text-gray-400">and setup time. Having answers ready makes the</p>
            <p className="text-gray-400">demo smoother.</p>
            <p className="text-gray-400 mt-2">## Tasks</p>
            <p className="text-gray-400">- [ ] Add FAQ to demo-script.md</p>
            <p className="text-gray-400">- [ ] Include example answers</p>
          </div>
          <p className="text-gray-500 text-sm mt-3">Click "Submit new issue".</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-2',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono">Step 2</span>
          <h2 className="text-3xl font-bold">Add a label and assign yourself</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-3">On the Issue page (right sidebar)</h3>
          <ol className="space-y-3 text-gray-300">
            <li><span className="text-orange-400 font-semibold">1.</span> Click <span className="font-semibold">"Labels"</span> → pick <span className="text-blue-400">enhancement</span></li>
            <li><span className="text-orange-400 font-semibold">2.</span> Click <span className="font-semibold">"Assignees"</span> → assign yourself</li>
          </ol>
        </div>
        <div className="card">
          <p className="text-gray-400">Now anyone looking at the Issues list can see: what it is (enhancement), and who's doing it (you).</p>
          <p className="text-gray-500 text-sm mt-2">Note the Issue number (e.g. #1) — you'll use it in the next step.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-3',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono">Step 3</span>
          <h2 className="text-3xl font-bold">Add a comment</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-3">Scroll to the bottom of the Issue</h3>
          <p className="text-gray-400 mb-3">Type a comment — as if you're updating your team:</p>
          <div className="code-block relative">
            <CopyButton text={"Starting on this now. I'll add the FAQ section with answers for:\n1. Pricing question\n2. Integration options\n3. Setup time estimate"} />
            <p className="text-gray-300 italic">Starting on this now. I'll add the FAQ section</p>
            <p className="text-gray-300 italic">with answers for:</p>
            <p className="text-gray-300 italic">1. Pricing question</p>
            <p className="text-gray-300 italic">2. Integration options</p>
            <p className="text-gray-300 italic">3. Setup time estimate</p>
          </div>
          <p className="text-gray-500 text-sm mt-3">Click "Comment".</p>
        </div>
        <div className="card">
          <p className="text-gray-400">This creates a record. Anyone visiting the Issue sees what's happening without asking you.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-4',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono">Step 4</span>
          <h2 className="text-3xl font-bold">Do the work (quick edit)</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-3">Edit a file on github.com</h3>
          <ol className="space-y-3 text-gray-300 text-sm">
            <li><span className="text-orange-400 font-semibold">1.</span> Go back to your repo's main page (click the repo name)</li>
            <li><span className="text-orange-400 font-semibold">2.</span> Open your demo script file (or README)</li>
            <li><span className="text-orange-400 font-semibold">3.</span> Click the pencil icon to edit</li>
            <li><span className="text-orange-400 font-semibold">4.</span> Add a FAQ section at the bottom:</li>
          </ol>
          <div className="code-block relative mt-3">
            <CopyButton text={"## FAQ\n\n**How much does it cost?**\nPricing depends on usage volume. We'll share a custom quote.\n\n**What integrations are available?**\nWe support Shopify, Salesforce, and custom APIs.\n\n**How long does setup take?**\nTypically 2-3 days for a basic integration."} />
            <p className="text-gray-400">## FAQ</p>
            <p className="text-gray-400 mt-1">**How much does it cost?**</p>
            <p className="text-gray-400">Pricing depends on usage volume.</p>
            <p className="text-gray-400 mt-1">**What integrations are available?**</p>
            <p className="text-gray-400">We support Shopify, Salesforce, and custom APIs.</p>
            <p className="text-gray-400 mt-1">**How long does setup take?**</p>
            <p className="text-gray-400">Typically 2-3 days for a basic integration.</p>
          </div>
        </div>
        <div className="card">
          <h3 className="text-gray-200 font-semibold mb-2">Commit with a special message</h3>
          <div className="code-block relative">
            <CopyButton text={"Add FAQ section. Closes #1"} />
            <p className="text-gray-300">Add FAQ section. Closes #1</p>
          </div>
          <p className="text-gray-500 text-sm mt-2">Replace #1 with your actual Issue number. Click "Commit changes".</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-5',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono">Step 5</span>
          <h2 className="text-3xl font-bold">Check: the Issue closed itself</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-3">Go back to the Issues tab</h3>
          <p className="text-gray-300 mb-3">Your Issue should now be closed — the purple "Closed" badge appears.</p>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> The commit message "Closes #1" triggered the auto-close</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> The Issue shows a link to the commit that resolved it</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> The full conversation history is preserved</p>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400">This is the power of Issues: from idea → discussion → work → done, all tracked in one place.</p>
          <p className="text-gray-500 text-sm mt-2">Click "Closed" filter to see your closed Issues anytime.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'done',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-4xl font-bold mb-6">You just completed the full cycle</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md">
          Open an Issue, discuss, do the work, close it with a commit.
        </p>
        <div className="grid md:grid-cols-4 gap-3 max-w-2xl mb-8">
          <div className="card !p-4">
            <p className="text-xl mb-1">🎯</p>
            <p className="text-orange-400 font-semibold text-xs">Opened</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">💬</p>
            <p className="text-orange-400 font-semibold text-xs">Discussed</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">✏️</p>
            <p className="text-orange-400 font-semibold text-xs">Fixed</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">✅</p>
            <p className="text-orange-400 font-semibold text-xs">Closed</p>
          </div>
        </div>
        <div className="card max-w-lg">
          <p className="text-gray-400 text-sm">
            From now on, whenever you think "we should improve X" — open an Issue.
            It takes 30 seconds and nothing gets lost.
          </p>
        </div>
      </div>
    ),
  },
]

export default function HandsOnIssues({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
