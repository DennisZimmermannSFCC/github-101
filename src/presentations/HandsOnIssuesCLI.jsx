import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎯</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Hands-On: Issues (CLI)
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Create, discuss, and close Issues from your terminal
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">Using the GitHub CLI</p>
          <p className="text-gray-500 mt-2">You need: Git, GitHub CLI installed, a repo cloned locally</p>
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
          <h3 className="text-orange-400 font-semibold text-lg mb-3">In your terminal (inside your repo folder)</h3>
          <div className="code-block relative">
            <CopyButton text={'gh issue create --title "Add a FAQ section to the demo" --body "## What\nAdd a short FAQ section covering the 3 most common customer questions.\n\n## Why\nCustomers always ask about pricing, integrations, and setup time.\n\n## Tasks\n- [ ] Add FAQ to demo-script.md\n- [ ] Include example answers"'} />
            <p className="text-orange-400">gh issue create \</p>
            <p className="text-orange-400">  --title "Add a FAQ section to the demo" \</p>
            <p className="text-orange-400">  --body "## What</p>
            <p className="text-orange-400">Add a short FAQ section covering the 3 most</p>
            <p className="text-orange-400">common customer questions.</p>
            <p className="text-orange-400 mt-1">## Why</p>
            <p className="text-orange-400">Customers always ask about pricing, integrations,</p>
            <p className="text-orange-400">and setup time.</p>
            <p className="text-orange-400 mt-1">## Tasks</p>
            <p className="text-orange-400">- [ ] Add FAQ to demo-script.md</p>
            <p className="text-orange-400">- [ ] Include example answers"</p>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400">GitHub will print a URL to your new Issue. Note the Issue number (e.g. #1).</p>
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
          <h3 className="text-orange-400 font-semibold text-lg mb-3">Run these (replace 1 with your Issue number)</h3>
          <div className="code-block relative">
            <CopyButton text={"gh issue edit 1 --add-label \"enhancement\" --add-assignee \"@me\""} />
            <p className="text-orange-400">gh issue edit 1 --add-label "enhancement" --add-assignee "@me"</p>
          </div>
        </div>
        <div className="card mb-6">
          <h3 className="text-gray-200 font-semibold mb-3">Check it</h3>
          <div className="code-block relative">
            <CopyButton text={"gh issue view 1"} />
            <p className="text-orange-400">gh issue view 1</p>
          </div>
          <p className="text-gray-500 text-sm mt-2">Shows the full Issue with labels, assignees, and body.</p>
        </div>
        <div className="card">
          <p className="text-gray-400">You can also list all open Issues:</p>
          <div className="code-block !p-3 relative mt-2">
            <CopyButton text={"gh issue list"} />
            <p className="text-orange-400">gh issue list</p>
          </div>
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
          <div className="code-block relative">
            <CopyButton text={"gh issue comment 1 --body \"Starting on this now. Will add FAQ with answers for pricing, integrations, and setup time.\""} />
            <p className="text-orange-400">gh issue comment 1 --body "Starting on this now.</p>
            <p className="text-orange-400">Will add FAQ with answers for pricing,</p>
            <p className="text-orange-400">integrations, and setup time."</p>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400">The comment is now visible to anyone who opens the Issue on GitHub.</p>
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
          <h2 className="text-3xl font-bold">Do the work and commit</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-3">Edit the file in your editor, then:</h3>
          <div className="code-block relative">
            <CopyButton text={"git add .\ngit commit -m \"Add FAQ section. Closes #1\"\ngit push"} />
            <p className="text-orange-400">git add .</p>
            <p className="text-orange-400">git commit -m "Add FAQ section. Closes #1"</p>
            <p className="text-orange-400">git push</p>
          </div>
          <p className="text-gray-500 text-sm mt-3">Replace #1 with your actual Issue number.</p>
        </div>
        <div className="card">
          <h3 className="text-gray-200 font-semibold mb-2">What happens</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Your changes are pushed to GitHub</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> "Closes #1" in the commit message auto-closes the Issue</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> The Issue links to the commit that resolved it</p>
          </div>
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
          <h2 className="text-3xl font-bold">Verify it closed</h2>
        </div>
        <div className="card mb-6">
          <div className="code-block relative">
            <CopyButton text={"gh issue view 1"} />
            <p className="text-orange-400">gh issue view 1</p>
            <p className="text-gray-500 mt-2"># state: CLOSED</p>
          </div>
        </div>
        <div className="card mb-6">
          <h3 className="text-gray-200 font-semibold mb-2">See all closed Issues</h3>
          <div className="code-block !p-3 relative">
            <CopyButton text={"gh issue list --state closed"} />
            <p className="text-orange-400">gh issue list --state closed</p>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400">The Issue is closed but not gone — the full history (description, comments, commit link) stays forever.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'done',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-4xl font-bold mb-6">Full cycle from the terminal</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md">
          Create, label, comment, fix, and close — without leaving your terminal.
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-xl mb-8">
          <div className="card text-left">
            <h3 className="text-orange-400 font-semibold mb-2">Key commands</h3>
            <div className="space-y-1 text-sm text-gray-300 font-mono">
              <p>gh issue create</p>
              <p>gh issue list</p>
              <p>gh issue view 1</p>
              <p>gh issue comment 1</p>
              <p>gh issue edit 1</p>
              <p>gh issue close 1</p>
            </div>
          </div>
          <div className="card text-left">
            <h3 className="text-emerald-400 font-semibold mb-2">Auto-close trick</h3>
            <p className="text-gray-400 text-sm">Include any of these in a commit message:</p>
            <div className="space-y-1 text-sm text-gray-300 font-mono mt-2">
              <p>Closes #1</p>
              <p>Fixes #1</p>
              <p>Resolves #1</p>
            </div>
          </div>
        </div>
        <div className="card max-w-lg">
          <p className="text-gray-400 text-sm">
            Same result as the browser — just faster if you're already in the terminal.
          </p>
        </div>
      </div>
    ),
  },
]

export default function HandsOnIssuesCLI({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
