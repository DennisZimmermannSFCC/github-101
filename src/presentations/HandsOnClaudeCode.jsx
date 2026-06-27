import SlideViewer from '../components/SlideViewer'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🛠️</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
          Hands-On: Hello World
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Your first project with Claude Code — follow along
        </p>
        <div className="card max-w-lg">
          <h3 className="text-gray-200 font-semibold mb-2">You need</h3>
          <ul className="text-gray-400 text-sm space-y-1 text-left">
            <li>✓ GitHub account</li>
            <li>✓ Git, Node.js, GitHub CLI installed</li>
            <li>✓ Claude Code installed</li>
            <li>✓ <code className="bg-gray-700 px-1 rounded">gh auth login</code> done</li>
          </ul>
          <p className="text-gray-500 text-xs mt-3">See presentation 5 for setup.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-1',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Step 1</span>
          <h2 className="text-3xl font-bold">Create a folder and start Claude Code</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Open your terminal and type</h3>
          <div className="code-block text-lg">
            <p className="text-sky-400">mkdir my-hello-world</p>
            <p className="text-sky-400">cd my-hello-world</p>
            <p className="text-sky-400">claude</p>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400">You should see Claude Code start up, waiting for your input.</p>
          <p className="text-gray-500 text-sm mt-2">If it asks about permissions, accept the defaults.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-2',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Step 2</span>
          <h2 className="text-3xl font-bold">Create a README and a demo script</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block">
            <p className="text-gray-200 italic">"Create two files:</p>
            <p className="text-gray-200 italic mt-2">1. README.md — explain that this is my first repo,</p>
            <p className="text-gray-200 italic">   what's inside, and that I'm learning GitHub.</p>
            <p className="text-gray-200 italic mt-2">2. demo-script.md — a short demo talk track with</p>
            <p className="text-gray-200 italic">   an opening, a main section, and a closing."</p>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400">Claude Code creates both files. You'll see them appear in your folder.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-3',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Step 3</span>
          <h2 className="text-3xl font-bold">Push to GitHub</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block text-lg">
            <p className="text-gray-200 italic">"Create a private GitHub repo called my-hello-world,</p>
            <p className="text-gray-200 italic">commit everything, and push."</p>
          </div>
        </div>
        <div className="card mb-6">
          <h3 className="text-gray-200 font-semibold mb-3">Claude Code will</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Initialize Git</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Commit the files</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Create the repo on GitHub</p>
            <p className="flex gap-2"><span className="text-emerald-400">✓</span> Push</p>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400">Open the URL it shows — you'll see your files on GitHub with the README displayed.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-4',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Step 4</span>
          <h2 className="text-3xl font-bold">Make a change</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block text-lg">
            <p className="text-gray-200 italic">"Add a tips section to the demo script with</p>
            <p className="text-gray-200 italic">3 tips for a good demo. Commit and push."</p>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400">Claude Code edits the file, commits with a descriptive message, and pushes. Refresh GitHub — you'll see the new commit.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'done',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-4xl font-bold mb-6">That's it!</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md">
          You just created a repo, pushed it, and made a change — all by talking to Claude Code.
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-xl mb-8">
          <div className="card text-left">
            <h3 className="text-sky-400 font-semibold mb-2">What you said</h3>
            <div className="space-y-1 text-sm text-gray-300 italic">
              <p>"Create two files..."</p>
              <p>"Create a GitHub repo and push"</p>
              <p>"Add tips, commit and push"</p>
            </div>
          </div>
          <div className="card text-left">
            <h3 className="text-emerald-400 font-semibold mb-2">What Claude Code did</h3>
            <div className="space-y-1 text-sm text-gray-400">
              <p>Created README + demo script</p>
              <p>git init, commit, gh repo create, push</p>
              <p>Edited file, committed, pushed</p>
            </div>
          </div>
        </div>
        <div className="card max-w-md">
          <p className="text-gray-400 text-sm">
            From here you can build anything — apps, APIs, full demos — using the same pattern:
            describe it, commit, push.
          </p>
        </div>
      </div>
    ),
  },
]

export default function HandsOnClaudeCode({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
