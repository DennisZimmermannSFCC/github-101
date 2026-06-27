import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🌿</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
          Branches
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Work on changes without breaking what already works
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">Safe experimentation for your demos</p>
          <p className="text-gray-500 mt-2">Create variations without risk</p>
        </div>
      </div>
    ),
  },

  {
    id: 'why-branches',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Why use branches?</h2>
        <div className="card mb-6">
          <h3 className="text-red-400 font-semibold text-lg mb-3">Without branches</h3>
          <p className="text-gray-400 mb-3">Everyone edits the same files. If you break something, it's broken for everyone immediately.</p>
          <div className="code-block text-sm">
            <p className="text-gray-400">You: editing demo-script.md ← half-finished</p>
            <p className="text-gray-400">Colleague: opens the repo ← sees broken demo</p>
            <p className="text-red-400">Customer presentation tomorrow ← panic</p>
          </div>
        </div>
        <div className="card">
          <h3 className="text-emerald-400 font-semibold text-lg mb-3">With branches</h3>
          <p className="text-gray-400 mb-3">You work in your own space. Main stays clean until you're done.</p>
          <div className="code-block text-sm">
            <p className="text-emerald-400">main: always works, always presentable</p>
            <p className="text-teal-400">your-branch: experiment freely, break things, iterate</p>
            <p className="text-gray-400">When ready → merge back to main</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'what-is-branch',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">What is a branch?</h2>
        <div className="card mb-6">
          <p className="text-xl text-gray-300 leading-relaxed">
            A branch is a <span className="text-teal-400 font-semibold">parallel copy</span> of your project.
            Changes on one branch don't affect other branches until you merge them.
          </p>
        </div>
        <div className="code-block text-base mb-6">
          <p className="text-gray-500">        ○ ─ ○ ─ ○  feature/new-intro</p>
          <p className="text-gray-500">       /</p>
          <p className="text-emerald-400">○ ─ ○ ─ ○ ─ ○ ─ ○  main</p>
          <p className="text-gray-500">           \</p>
          <p className="text-gray-500">            ○ ─ ○  customer/acme</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card text-center">
            <p className="text-2xl mb-2">🛡️</p>
            <h3 className="text-gray-200 font-semibold text-sm">Main is protected</h3>
            <p className="text-gray-500 text-xs">Always in a working state</p>
          </div>
          <div className="card text-center">
            <p className="text-2xl mb-2">🧪</p>
            <h3 className="text-gray-200 font-semibold text-sm">Branches are experiments</h3>
            <p className="text-gray-500 text-xs">Try things without consequences</p>
          </div>
          <div className="card text-center">
            <p className="text-2xl mb-2">🔀</p>
            <h3 className="text-gray-200 font-semibold text-sm">Merge when ready</h3>
            <p className="text-gray-500 text-xs">Bring changes back cleanly</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'branch-use-cases',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">When to create a branch</h2>
        <p className="text-gray-400 text-lg mb-6">
          As a pre-sales engineer, you'll use branches for:
        </p>
        <div className="space-y-4">
          {[
            { name: 'customer/acme-corp', reason: 'Customize the demo for a specific customer', icon: '🏢' },
            { name: 'feature/mobile-checkout', reason: 'Add a new section to the demo script', icon: '✨' },
            { name: 'fix/outdated-screenshots', reason: 'Update screenshots without breaking anything', icon: '🔧' },
            { name: 'experiment/new-opening', reason: 'Try a different opening — discard if it doesn\'t work', icon: '🧪' },
          ].map((item) => (
            <div key={item.name} className="card flex items-start gap-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <code className="text-teal-400 font-mono text-sm">{item.name}</code>
                <p className="text-gray-400 text-sm mt-1">{item.reason}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center">
            <span className="text-teal-400 font-semibold">Rule of thumb:</span> If you're not 100% sure the change is ready, use a branch.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'create-branch',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-mono">Step 1</span>
          <h2 className="text-3xl font-bold">Create a branch</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-teal-400 font-semibold text-lg mb-3">What we do</h3>
              <p className="text-gray-300 mb-3">Create a new branch and switch to it.</p>
              <div className="code-block relative">
                <CopyButton text={"git checkout -b feature/live-qa"} />
                <p className="text-gray-500"># Create and switch in one command</p>
                <p className="text-teal-400">git checkout -b feature/live-qa</p>
                <p className="text-gray-500 mt-2"># Output:</p>
                <p className="text-gray-400">Switched to a new branch 'feature/live-qa'</p>
              </div>
            </div>
            <div className="card">
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
              <p className="text-gray-400">
                This creates a safe space to work. Everything you do now happens on this branch only.
                Main stays untouched.
              </p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Naming conventions</h3>
            <div className="space-y-3">
              <div>
                <code className="text-teal-400 text-sm">feature/description</code>
                <p className="text-gray-500 text-sm">Adding something new</p>
              </div>
              <div>
                <code className="text-teal-400 text-sm">fix/description</code>
                <p className="text-gray-500 text-sm">Fixing something broken</p>
              </div>
              <div>
                <code className="text-teal-400 text-sm">customer/company-name</code>
                <p className="text-gray-500 text-sm">Customer-specific version</p>
              </div>
              <div>
                <code className="text-teal-400 text-sm">experiment/idea</code>
                <p className="text-gray-500 text-sm">Might discard later</p>
              </div>
            </div>
            <div className="mt-4 bg-gray-900 rounded-lg p-3 text-sm">
              <p className="text-gray-400">Use lowercase, hyphens, no spaces.</p>
              <p className="text-gray-400 mt-1">Keep it short but descriptive.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'work-on-branch',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-mono">Step 2</span>
          <h2 className="text-3xl font-bold">Work on your branch</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-teal-400 font-semibold text-lg mb-3">What we do</h3>
          <p className="text-gray-300 mb-3">Edit, stage, and commit — exactly like before. The only difference: you're on a branch.</p>
          <div className="code-block relative">
            <CopyButton text={"git add demo-script/main-demo-flow.md\ngit commit -m \"Add live Q&A section to demo\"\n\ngit add demo-script/main-demo-flow.md\ngit commit -m \"Add suggested questions for Q&A\""} />
            <p className="text-gray-500"># Edit your files...</p>
            <p className="text-teal-400 mt-2">git add demo-script/main-demo-flow.md</p>
            <p className="text-teal-400">git commit -m "Add live Q&A section to demo"</p>
            <p className="text-teal-400 mt-2">git add demo-script/main-demo-flow.md</p>
            <p className="text-teal-400">git commit -m "Add suggested questions for Q&A"</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
            <p className="text-gray-400">
              You can make multiple commits on a branch. This builds up a complete feature
              step by step, without any pressure to get it perfect in one go.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Check where you are</h3>
            <div className="code-block !p-3 text-sm relative">
              <CopyButton text={"git branch"} />
              <p className="text-teal-400">git branch</p>
              <p className="text-gray-500 mt-1">  main</p>
              <p className="text-emerald-400">* feature/live-qa</p>
            </div>
            <p className="text-gray-500 text-sm mt-2">The * shows your current branch</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'push-branch',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-mono">Step 3</span>
          <h2 className="text-3xl font-bold">Push the branch to GitHub</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-teal-400 font-semibold text-lg mb-3">What we do</h3>
          <p className="text-gray-300 mb-3">Upload your branch so it exists on GitHub too.</p>
          <div className="code-block relative">
            <CopyButton text={"git push -u origin feature/live-qa"} />
            <p className="text-gray-500"># First time pushing a new branch:</p>
            <p className="text-teal-400">git push -u origin feature/live-qa</p>
            <p className="text-gray-500 mt-2"># After that, just:</p>
            <p className="text-teal-400">git push</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
            <p className="text-gray-400">
              Pushing backs up your work and makes the branch visible to colleagues. They can see your progress,
              review it, or continue where you left off.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">What's <code className="text-teal-400">-u origin</code>?</h3>
            <p className="text-gray-400 text-sm mb-2">
              <span className="text-teal-400">origin</span> = the GitHub copy of your repo
            </p>
            <p className="text-gray-400 text-sm">
              <span className="text-teal-400">-u</span> = "remember this connection" so next time <code className="bg-gray-700 px-1 rounded">git push</code> is enough
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'switch-branches',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-mono">Step 4</span>
          <h2 className="text-3xl font-bold">Switch between branches</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-teal-400 font-semibold text-lg mb-3">What we do</h3>
          <p className="text-gray-300 mb-3">Jump back to main (or any branch) whenever you want.</p>
          <div className="code-block relative">
            <CopyButton text={"git checkout main\ngit checkout feature/live-qa\ngit branch"} />
            <p className="text-gray-500"># Go back to main</p>
            <p className="text-teal-400">git checkout main</p>
            <p className="text-gray-500 mt-2"># Go to your feature branch</p>
            <p className="text-teal-400">git checkout feature/live-qa</p>
            <p className="text-gray-500 mt-2"># See all branches</p>
            <p className="text-teal-400">git branch</p>
          </div>
        </div>
        <div className="card">
          <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
          <p className="text-gray-400 mb-3">
            You might be working on a new feature but need to quickly check the current main demo for a call.
            Switch to main — your files instantly become the stable version. Switch back — your work-in-progress returns.
          </p>
          <div className="bg-gray-900 rounded-lg p-3 text-sm">
            <p className="text-gray-400">Your files literally change on disk when you switch branches.</p>
            <p className="text-gray-400 mt-1">Git swaps them in and out — nothing is lost.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'merge-branch',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-mono">Step 5</span>
          <h2 className="text-3xl font-bold">Merge your branch</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-teal-400 font-semibold text-lg mb-3">What we do</h3>
              <p className="text-gray-300 mb-3">Bring your finished work into main.</p>
              <div className="code-block text-sm relative">
                <CopyButton text={"git checkout main\ngit pull\ngit merge feature/live-qa\ngit push"} />
                <p className="text-gray-500"># First, switch to main</p>
                <p className="text-teal-400">git checkout main</p>
                <p className="text-teal-400 mt-2">git pull</p>
                <p className="text-gray-500 mt-2"># Merge your branch into main</p>
                <p className="text-teal-400">git merge feature/live-qa</p>
                <p className="text-gray-500 mt-2"># Push the updated main</p>
                <p className="text-teal-400">git push</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card mb-4">
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
              <p className="text-gray-400">
                Merging integrates your completed work into the main branch. Now everyone gets your improvements
                when they pull.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Alternative: Pull Request</h3>
              <p className="text-gray-400 text-sm mb-2">
                On a team, you'd typically push the branch and open a Pull Request on GitHub instead of merging locally.
              </p>
              <p className="text-gray-400 text-sm">
                This lets colleagues review before the merge happens.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'delete-branch',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-mono">Step 6</span>
          <h2 className="text-3xl font-bold">Clean up old branches</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-teal-400 font-semibold text-lg mb-3">What we do</h3>
          <p className="text-gray-300 mb-3">Delete branches after they've been merged.</p>
          <div className="code-block relative">
            <CopyButton text={"git branch -d feature/live-qa\ngit push origin --delete feature/live-qa"} />
            <p className="text-gray-500"># Delete locally</p>
            <p className="text-teal-400">git branch -d feature/live-qa</p>
            <p className="text-gray-500 mt-2"># Delete on GitHub too</p>
            <p className="text-teal-400">git push origin --delete feature/live-qa</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
            <p className="text-gray-400">
              Merged branches are done — their changes are in main now. Deleting them keeps your repo tidy.
              You won't accidentally work on a stale branch later.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Safe to delete?</h3>
            <p className="text-gray-400 text-sm mb-2">
              Git won't let you delete an unmerged branch with <code className="bg-gray-700 px-1 rounded">-d</code>.
              It protects you from losing work.
            </p>
            <p className="text-gray-500 text-sm">
              If you truly want to discard unmerged work, use <code className="bg-gray-700 px-1 rounded">-D</code> (capital D).
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'conflicts',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">What if two people edit the same line?</h2>
        <p className="text-gray-400 text-lg mb-6">
          This is called a <span className="text-teal-400 font-semibold">merge conflict</span>. It sounds scary but it's easy to fix.
        </p>
        <div className="card mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-200">What it looks like</h3>
          <div className="code-block text-sm">
            <p className="text-gray-500">{"<<<<<<< HEAD"}</p>
            <p className="text-teal-400">## Opening (3 min)</p>
            <p className="text-gray-500">=======</p>
            <p className="text-violet-400">## Opening (2 min)</p>
            <p className="text-gray-500">{">>>>>>> main"}</p>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            Git shows both versions. You pick the one you want (or combine them), delete the markers, and commit.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="text-teal-400 font-semibold mb-2">How to fix</h3>
            <ol className="text-gray-400 text-sm space-y-1">
              <li>1. Open the file in your editor</li>
              <li>2. Find the {"<<<<<<"} markers</li>
              <li>3. Keep what you want, delete markers</li>
              <li>4. <code className="bg-gray-700 px-1 rounded">git add</code> the file</li>
              <li>5. <code className="bg-gray-700 px-1 rounded">git commit</code></li>
            </ol>
          </div>
          <div className="card">
            <h3 className="text-teal-400 font-semibold mb-2">How to avoid</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Pull from main often</li>
              <li>• Keep branches short-lived</li>
              <li>• Communicate with your team</li>
              <li>• Work on different files when possible</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'branch-workflow',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">The branch workflow</h2>
        <p className="text-gray-400 text-lg mb-6">Every new piece of work follows this pattern:</p>
        <div className="space-y-3">
          {[
            { cmd: 'git checkout main && git pull', desc: 'Start from the latest main', icon: '⬇️' },
            { cmd: 'git checkout -b feature/name', desc: 'Create your branch', icon: '🌿' },
            { cmd: '(edit, add, commit...)', desc: 'Do your work, commit as you go', icon: '✏️' },
            { cmd: 'git push -u origin feature/name', desc: 'Push branch to GitHub', icon: '⬆️' },
            { cmd: 'Open a Pull Request', desc: 'Ask for review (or merge yourself)', icon: '🔀' },
            { cmd: 'Merge → delete branch', desc: 'Clean up when done', icon: '✅' },
          ].map((step) => (
            <div key={step.cmd} className="flex items-center gap-4">
              <span className="text-xl w-8">{step.icon}</span>
              <code className="text-teal-400 font-mono text-xs md:text-sm w-64 shrink-0">{step.cmd}</code>
              <span className="text-gray-400">{step.desc}</span>
            </div>
          ))}
        </div>
        <div className="card mt-8">
          <p className="text-gray-400 text-center">
            This keeps main stable and your work organized. One branch per task, merged when complete.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'summary',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🌿</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Branch with confidence</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-xl">
          Branches let you experiment freely while keeping your main demo always ready.
        </p>
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mb-8">
          <div className="card">
            <p className="text-2xl mb-2">🛡️</p>
            <h3 className="text-teal-400 font-semibold text-sm">Main stays safe</h3>
            <p className="text-gray-500 text-xs">Always presentation-ready</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">🧪</p>
            <h3 className="text-teal-400 font-semibold text-sm">Experiment freely</h3>
            <p className="text-gray-500 text-xs">Try ideas without risk</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">🤝</p>
            <h3 className="text-teal-400 font-semibold text-sm">Collaborate cleanly</h3>
            <p className="text-gray-500 text-xs">Multiple people, no conflicts</p>
          </div>
        </div>
        <div className="card max-w-lg">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Key commands</h3>
          <div className="text-left text-sm space-y-1">
            <p><code className="text-teal-400">git checkout -b name</code> <span className="text-gray-500">— create branch</span></p>
            <p><code className="text-teal-400">git checkout main</code> <span className="text-gray-500">— switch back</span></p>
            <p><code className="text-teal-400">git merge name</code> <span className="text-gray-500">— merge into current</span></p>
            <p><code className="text-teal-400">git branch -d name</code> <span className="text-gray-500">— delete when done</span></p>
          </div>
        </div>
      </div>
    ),
  },
]

export default function Branches({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
