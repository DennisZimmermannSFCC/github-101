import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎯</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
          Hands-On: Issues (Claude)
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Create, fix, and close Issues by talking to Claude Code
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">Same result, zero commands to memorize</p>
          <p className="text-gray-500 mt-2">You need: Claude Code running in a cloned repo</p>
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
          <h2 className="text-3xl font-bold">Create an Issue</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block text-lg relative">
            <CopyButton text={'Create a GitHub Issue titled "Add a FAQ section to the demo". In the body explain that customers always ask about pricing, integrations, and setup time, so we need a FAQ section. Add a task list with two items: add FAQ to demo-script.md, and include example answers. Label it "enhancement" and assign it to me.'} />
            <p className="text-gray-200 italic">"Create a GitHub Issue titled 'Add a FAQ section</p>
            <p className="text-gray-200 italic">to the demo'. In the body explain that customers</p>
            <p className="text-gray-200 italic">always ask about pricing, integrations, and setup</p>
            <p className="text-gray-200 italic">time, so we need a FAQ section. Add a task list</p>
            <p className="text-gray-200 italic">with two items: add FAQ to demo-script.md, and</p>
            <p className="text-gray-200 italic">include example answers. Label it 'enhancement'</p>
            <p className="text-gray-200 italic">and assign it to me."</p>
          </div>
        </div>
        <div className="card">
          <h3 className="text-gray-200 font-semibold mb-2">Claude Code will</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Create the Issue with a structured body</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Add the "enhancement" label</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Assign it to you</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Show you the Issue URL and number</p>
          </div>
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
          <h2 className="text-3xl font-bold">Add a comment</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block text-lg relative">
            <CopyButton text={"Add a comment to that Issue saying I'm starting on it now, and I'll cover pricing, integrations, and setup time."} />
            <p className="text-gray-200 italic">"Add a comment to that Issue saying I'm starting</p>
            <p className="text-gray-200 italic">on it now, and I'll cover pricing, integrations,</p>
            <p className="text-gray-200 italic">and setup time."</p>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400">Claude Code posts the comment. Anyone watching the Issue gets notified.</p>
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
          <h2 className="text-3xl font-bold">Fix the Issue</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block text-lg relative">
            <CopyButton text={"Add a FAQ section to the demo script (or README) with answers for: How much does it cost? What integrations are available? How long does setup take? Then commit with a message that closes the Issue, and push."} />
            <p className="text-gray-200 italic">"Add a FAQ section to the demo script (or README)</p>
            <p className="text-gray-200 italic">with answers for: How much does it cost? What</p>
            <p className="text-gray-200 italic">integrations are available? How long does setup</p>
            <p className="text-gray-200 italic">take? Then commit with a message that closes the</p>
            <p className="text-gray-200 italic">Issue, and push."</p>
          </div>
        </div>
        <div className="card">
          <h3 className="text-gray-200 font-semibold mb-2">Claude Code will</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Edit the file and add the FAQ</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Commit with "Add FAQ section. Closes #1"</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Push to GitHub</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> The Issue auto-closes</p>
          </div>
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
          <h2 className="text-3xl font-bold">Verify</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block text-lg relative">
            <CopyButton text={"Show me the status of that Issue."} />
            <p className="text-gray-200 italic">"Show me the status of that Issue."</p>
          </div>
        </div>
        <div className="card">
          <h3 className="text-gray-200 font-semibold mb-3">You should see</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> State: CLOSED</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Linked to the commit that closed it</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Your comment is visible in the history</p>
          </div>
          <p className="text-gray-500 text-sm mt-3">Open the Issue URL in your browser to see it all rendered nicely.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'done',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-4xl font-bold mb-6">Full cycle, zero commands</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md">
          You created, discussed, fixed, and closed an Issue — all in plain English.
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-xl mb-8">
          <div className="card text-left">
            <h3 className="text-orange-400 font-semibold mb-2">What you said</h3>
            <div className="space-y-1 text-sm text-gray-300 italic">
              <p>"Create an Issue..."</p>
              <p>"Add a comment..."</p>
              <p>"Add a FAQ and close the Issue..."</p>
              <p>"Show me the status..."</p>
            </div>
          </div>
          <div className="card text-left">
            <h3 className="text-emerald-400 font-semibold mb-2">What Claude Code did</h3>
            <div className="space-y-1 text-sm text-gray-400 font-mono">
              <p>gh issue create ...</p>
              <p>gh issue comment ...</p>
              <p>edit + commit "Closes #1" + push</p>
              <p>gh issue view ...</p>
            </div>
          </div>
        </div>
        <div className="card max-w-lg">
          <p className="text-gray-400 text-sm">
            Same workflow as the browser and CLI versions — just faster when you're already talking to Claude Code.
          </p>
        </div>
      </div>
    ),
  },
]

export default function HandsOnIssuesClaude({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
