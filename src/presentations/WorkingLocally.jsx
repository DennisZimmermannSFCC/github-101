import SlideViewer from '../components/SlideViewer'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">💻</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Working Locally
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Edit files on your computer, then push changes to GitHub
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">The real-world workflow</p>
          <p className="text-gray-500 mt-2">Clone → Edit → Stage → Commit → Push</p>
        </div>
      </div>
    ),
  },

  {
    id: 'why-local',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Why work locally?</h2>
        <p className="text-gray-400 text-lg mb-6">
          The GitHub browser editor is great for quick edits — but for real work, you want your own machine.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <p className="text-2xl mb-2">⚡</p>
            <h3 className="text-gray-200 font-semibold mb-1">Use your favorite editor</h3>
            <p className="text-gray-400 text-sm">VS Code, Sublime, or whatever you're comfortable with</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">📂</p>
            <h3 className="text-gray-200 font-semibold mb-1">Edit multiple files at once</h3>
            <p className="text-gray-400 text-sm">Change several things, then commit them together</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">✈️</p>
            <h3 className="text-gray-200 font-semibold mb-1">Work offline</h3>
            <p className="text-gray-400 text-sm">Commit locally, push when you have internet</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">🔍</p>
            <h3 className="text-gray-200 font-semibold mb-1">Preview your work</h3>
            <p className="text-gray-400 text-sm">Test scripts, check formatting before pushing</p>
          </div>
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center">
            <span className="text-violet-400 font-semibold">Why:</span> Local editing is faster, more flexible, and how teams actually work day-to-day.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'prerequisite',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm font-mono">Before we start</span>
          <h2 className="text-3xl font-bold">Prerequisites</h2>
        </div>
        <div className="card mb-6">
          <p className="text-gray-300 text-lg">This tutorial uses the terminal and Git commands. You need:</p>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> Git installed</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> Git identity configured</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> GitHub account</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> A repository on GitHub (from the Hello World tutorial)</li>
          </ul>
        </div>
        <div className="card">
          <p className="text-gray-400">Not set up yet? Complete <span className="text-blue-400 font-semibold">GitHub Setup</span> (presentation 1) first.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'clone',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm font-mono">Step 1</span>
          <h2 className="text-3xl font-bold">Clone the repository</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-violet-400 font-semibold text-lg mb-3">What we do</h3>
              <p className="text-gray-300 mb-3">Download your GitHub repository to your computer.</p>
              <div className="code-block">
                <p className="text-gray-500"># Navigate to where you keep projects</p>
                <p className="text-violet-400">cd ~/Documents</p>
                <p className="text-violet-400 mt-2">git clone https://github.com/</p>
                <p className="text-violet-400">  YOUR-NAME/commerce-agent-demo.git</p>
                <p className="text-violet-400 mt-2">cd commerce-agent-demo</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card mb-4">
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
              <p className="text-gray-400">
                Cloning creates a local copy with the full history. You now have the same files as on GitHub,
                plus Git tracking everything you do.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along</h3>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li><span className="text-violet-400 font-semibold">1.</span> On GitHub, click the green "Code" button</li>
                <li><span className="text-violet-400 font-semibold">2.</span> Copy the HTTPS URL</li>
                <li><span className="text-violet-400 font-semibold">3.</span> Open Terminal (Mac) or Git Bash (Windows)</li>
                <li><span className="text-violet-400 font-semibold">4.</span> Run the clone command</li>
                <li><span className="text-violet-400 font-semibold">5.</span> <code className="bg-gray-700 px-1 rounded">cd</code> into the new folder</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'edit-files',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm font-mono">Step 2</span>
          <h2 className="text-3xl font-bold">Edit files locally</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-violet-400 font-semibold text-lg mb-3">What we do</h3>
              <p className="text-gray-300 mb-3">Open the project in your editor and make changes.</p>
              <div className="code-block">
                <p className="text-gray-500"># Open in VS Code</p>
                <p className="text-violet-400">code .</p>
                <p className="text-gray-500 mt-3"># Or open the folder manually in any editor</p>
              </div>
            </div>
            <div className="card">
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
              <p className="text-gray-400">
                Your editor has autocomplete, spell check, and preview. You can open multiple files side by side.
                This is where you do your actual work.
              </p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Try it now</h3>
            <p className="text-gray-400 mb-3">Let's edit the demo script to add a new section:</p>
            <div className="code-block text-sm">
              <p className="text-violet-400"># Main Demo Flow</p>
              <p className="text-gray-400 mt-2">## Opening (2 min)</p>
              <p className="text-gray-400">- Show the storefront</p>
              <p className="text-gray-400">- Introduce the AI agent</p>
              <p className="text-gray-400 mt-2"><span className="text-emerald-400">## NEW: Live Q&A (3 min)</span></p>
              <p className="text-gray-400"><span className="text-emerald-400">- Let the customer ask the agent</span></p>
              <p className="text-gray-400"><span className="text-emerald-400">- Show real-time responses</span></p>
              <p className="text-gray-400 mt-2">## Closing (2 min)</p>
              <p className="text-gray-400">- Recap and next steps</p>
            </div>
            <p className="text-gray-500 text-sm mt-3">Save the file (Cmd+S / Ctrl+S)</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'git-status',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm font-mono">Step 3</span>
          <h2 className="text-3xl font-bold">Check what changed</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-violet-400 font-semibold text-lg mb-3">What we do</h3>
          <p className="text-gray-300 mb-3">Ask Git what's different since the last commit.</p>
          <div className="code-block">
            <p className="text-violet-400">git status</p>
            <p className="text-gray-500 mt-2"># Output:</p>
            <p className="text-red-400">modified:   demo-script/main-demo-flow.md</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
            <p className="text-gray-400">
              Always check before committing. You want to know exactly what you're about to save.
              No surprises.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Bonus: see the diff</h3>
            <div className="code-block !p-3 text-sm">
              <p className="text-violet-400">git diff</p>
              <p className="text-gray-500 mt-1"># Shows exact lines added/removed</p>
              <p className="text-emerald-400">+ ## NEW: Live Q&A (3 min)</p>
              <p className="text-emerald-400">+ - Let the customer ask the agent</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'git-add',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm font-mono">Step 4</span>
          <h2 className="text-3xl font-bold">Stage your changes</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-violet-400 font-semibold text-lg mb-3">What we do</h3>
          <p className="text-gray-300 mb-3">Tell Git which changes to include in the next commit.</p>
          <div className="code-block">
            <p className="text-gray-500"># Stage a specific file</p>
            <p className="text-violet-400">git add demo-script/main-demo-flow.md</p>
            <p className="text-gray-500 mt-3"># Or stage everything that changed</p>
            <p className="text-violet-400">git add .</p>
          </div>
        </div>
        <div className="card mb-6">
          <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
          <p className="text-gray-400">
            Staging is like putting items in a box before shipping. You might have changed 5 files but only want
            to commit 2 right now. Staging lets you choose.
          </p>
        </div>
        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 flex items-center gap-4">
          <div className="text-center px-4">
            <p className="text-red-400 font-mono text-sm">modified</p>
            <p className="text-gray-500 text-xs mt-1">changed but not staged</p>
          </div>
          <div className="text-2xl text-gray-600">→</div>
          <div className="text-center px-4">
            <p className="text-amber-400 font-mono text-sm">staged</p>
            <p className="text-gray-500 text-xs mt-1">ready to commit</p>
          </div>
          <div className="text-2xl text-gray-600">→</div>
          <div className="text-center px-4">
            <p className="text-emerald-400 font-mono text-sm">committed</p>
            <p className="text-gray-500 text-xs mt-1">saved in history</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'git-commit',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm font-mono">Step 5</span>
          <h2 className="text-3xl font-bold">Commit — save a snapshot</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-violet-400 font-semibold text-lg mb-3">What we do</h3>
          <p className="text-gray-300 mb-3">Save your staged changes with a message describing what you did.</p>
          <div className="code-block">
            <p className="text-violet-400">git commit -m "Add live Q&A section to demo script"</p>
            <p className="text-gray-500 mt-2"># Output:</p>
            <p className="text-gray-400">[main abc1234] Add live Q&A section to demo script</p>
            <p className="text-gray-400"> 1 file changed, 3 insertions(+)</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
            <p className="text-gray-400">
              A commit is a permanent checkpoint. You can always come back to this exact state.
              The message helps future-you (and teammates) understand what happened.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Important</h3>
            <p className="text-gray-400 text-sm mb-2">
              This saves <span className="text-violet-400 font-semibold">locally only</span>. GitHub doesn't know about this yet.
            </p>
            <p className="text-gray-400 text-sm">
              Think of it like saving a document — it's on your computer, not yet shared.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'git-push',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm font-mono">Step 6</span>
          <h2 className="text-3xl font-bold">Push to GitHub</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-violet-400 font-semibold text-lg mb-3">What we do</h3>
          <p className="text-gray-300 mb-3">Send your local commits to GitHub so others can see them.</p>
          <div className="code-block">
            <p className="text-violet-400">git push</p>
            <p className="text-gray-500 mt-2"># Output:</p>
            <p className="text-gray-400">To https://github.com/YOU/commerce-agent-demo.git</p>
            <p className="text-gray-400">   def4567..abc1234  main → main</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
            <p className="text-gray-400">
              Push uploads your changes to GitHub. Now your commits are backed up in the cloud
              and visible to your team.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Verify</h3>
            <p className="text-gray-400 text-sm mb-2">
              Go to your repo on github.com and refresh the page.
            </p>
            <p className="text-gray-400 text-sm">
              You'll see your new commit and the updated files.
            </p>
            <p className="text-emerald-400 text-sm mt-3 font-semibold">
              That's it — your changes are live!
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'git-pull',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm font-mono">Step 7</span>
          <h2 className="text-3xl font-bold">Pull — get changes from others</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-violet-400 font-semibold text-lg mb-3">What we do</h3>
          <p className="text-gray-300 mb-3">Download changes that others have pushed to GitHub.</p>
          <div className="code-block">
            <p className="text-violet-400">git pull</p>
            <p className="text-gray-500 mt-2"># Output:</p>
            <p className="text-gray-400">Updating abc1234..xyz9876</p>
            <p className="text-gray-400">Fast-forward</p>
            <p className="text-gray-400"> setup/setup-instructions.md | 5 +++++</p>
            <p className="text-gray-400"> 1 file changed, 5 insertions(+)</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
            <p className="text-gray-400">
              If a colleague edited files on GitHub (or pushed from their machine), you need to pull
              those changes before continuing. Otherwise you're working on an old version.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Good habit</h3>
            <p className="text-gray-400 text-sm">
              Start every work session with <code className="bg-gray-700 px-1 rounded">git pull</code> to make sure you have the latest version.
            </p>
            <div className="mt-3 bg-gray-900 rounded-lg p-3 text-sm">
              <p className="text-gray-500">Morning routine:</p>
              <p className="text-violet-400 mt-1">cd commerce-agent-demo</p>
              <p className="text-violet-400">git pull</p>
              <p className="text-gray-500"># now start working</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'full-workflow',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">The daily workflow</h2>
        <p className="text-gray-400 text-lg mb-6">This is what working with Git looks like every day:</p>
        <div className="space-y-3">
          {[
            { cmd: 'git pull', desc: 'Get latest changes from team', icon: '⬇️' },
            { cmd: '(edit files)', desc: 'Do your work in your editor', icon: '✏️' },
            { cmd: 'git status', desc: 'See what you changed', icon: '🔍' },
            { cmd: 'git add .', desc: 'Stage the changes', icon: '📦' },
            { cmd: 'git commit -m "message"', desc: 'Save a snapshot with a description', icon: '💾' },
            { cmd: 'git push', desc: 'Share with the team on GitHub', icon: '⬆️' },
          ].map((step) => (
            <div key={step.cmd} className="flex items-center gap-4">
              <span className="text-xl w-8">{step.icon}</span>
              <code className="text-violet-400 font-mono text-sm w-52 shrink-0">{step.cmd}</code>
              <span className="text-gray-400">{step.desc}</span>
            </div>
          ))}
        </div>
        <div className="card mt-8">
          <p className="text-gray-400 text-center">
            That's it. Six commands for 90% of daily Git usage.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'cheat-sheet',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Cheat sheet</h2>
        <p className="text-gray-400 mb-6">Keep this handy until it becomes muscle memory.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="text-violet-400 font-semibold mb-3">Getting started</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <code className="text-gray-300">git clone URL</code>
                <span className="text-gray-500">Download a repo</span>
              </div>
              <div className="flex justify-between">
                <code className="text-gray-300">git pull</code>
                <span className="text-gray-500">Get latest changes</span>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="text-violet-400 font-semibold mb-3">Checking state</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <code className="text-gray-300">git status</code>
                <span className="text-gray-500">What changed?</span>
              </div>
              <div className="flex justify-between">
                <code className="text-gray-300">git diff</code>
                <span className="text-gray-500">Show exact changes</span>
              </div>
              <div className="flex justify-between">
                <code className="text-gray-300">git log --oneline</code>
                <span className="text-gray-500">Recent commits</span>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="text-violet-400 font-semibold mb-3">Saving work</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <code className="text-gray-300">git add .</code>
                <span className="text-gray-500">Stage all changes</span>
              </div>
              <div className="flex justify-between">
                <code className="text-gray-300">git add file.md</code>
                <span className="text-gray-500">Stage one file</span>
              </div>
              <div className="flex justify-between">
                <code className="text-gray-300">git commit -m "msg"</code>
                <span className="text-gray-500">Save snapshot</span>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="text-violet-400 font-semibold mb-3">Sharing</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <code className="text-gray-300">git push</code>
                <span className="text-gray-500">Upload to GitHub</span>
              </div>
              <div className="flex justify-between">
                <code className="text-gray-300">git pull</code>
                <span className="text-gray-500">Download from GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'summary',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🚀</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">You've got the workflow</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-xl">
          Clone, edit, stage, commit, push — that's professional version control.
        </p>
        <div className="grid md:grid-cols-4 gap-3 max-w-3xl mb-8">
          <div className="card !p-4">
            <p className="text-xl mb-1">⬇️</p>
            <p className="text-gray-300 text-sm font-mono">clone/pull</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">✏️</p>
            <p className="text-gray-300 text-sm font-mono">edit</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">💾</p>
            <p className="text-gray-300 text-sm font-mono">add + commit</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">⬆️</p>
            <p className="text-gray-300 text-sm font-mono">push</p>
          </div>
        </div>
        <div className="card max-w-lg">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Next up</h3>
          <p className="text-gray-400">
            Check out <span className="text-emerald-400 font-semibold">GitHub 101</span> to learn branching,
            pull requests, and team collaboration.
          </p>
        </div>
      </div>
    ),
  },
]

export default function WorkingLocally({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
