import SlideViewer from '../components/SlideViewer'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🛠️</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
          Hands-On: Build a Demo
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Follow along — build and share a working demo with Claude Code
        </p>
        <div className="card max-w-lg">
          <h3 className="text-gray-200 font-semibold mb-2">Prerequisites</h3>
          <ul className="text-gray-400 text-sm space-y-1 text-left">
            <li>✓ GitHub account created</li>
            <li>✓ Git, Node.js, GitHub CLI installed</li>
            <li>✓ Claude Code installed</li>
            <li>✓ <code className="bg-gray-700 px-1 rounded">gh auth login</code> completed</li>
          </ul>
          <p className="text-gray-500 text-xs mt-3">See presentation 5 (Claude Code + GitHub) for setup instructions.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'what-we-build',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">What we're building</h2>
        <p className="text-gray-400 text-lg mb-6">
          A <span className="text-sky-400 font-semibold">Product Advisor</span> demo — a simple web app where a customer chats with an AI agent that recommends products.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-sky-400 font-semibold mb-3">The demo includes</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• A chat interface</li>
              <li>• An AI agent that recommends products</li>
              <li>• A sample product catalog</li>
              <li>• A README explaining how to run it</li>
              <li>• Starts with one command: <code className="bg-gray-700 px-1 rounded">npm start</code></li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-sky-400 font-semibold mb-3">What we'll practice</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Telling Claude Code what to build</li>
              <li>• Creating a GitHub repo</li>
              <li>• Committing and pushing</li>
              <li>• Creating a customer branch</li>
              <li>• Making a pull request</li>
            </ul>
          </div>
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center">
            Estimated time: <span className="text-sky-400 font-semibold">15-20 minutes</span> including waiting for Claude Code to write code.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-1-create-folder',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Do it now</span>
          <h2 className="text-3xl font-bold">Create the project folder</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Open your terminal and type</h3>
          <div className="code-block text-lg">
            <p className="text-sky-400">mkdir product-advisor-demo</p>
            <p className="text-sky-400">cd product-advisor-demo</p>
            <p className="text-sky-400">claude</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-2">What this does</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li><span className="text-sky-400 font-mono">mkdir</span> — creates a new empty folder</li>
              <li><span className="text-sky-400 font-mono">cd</span> — moves into that folder</li>
              <li><span className="text-sky-400 font-mono">claude</span> — starts Claude Code here</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-2">You should see</h3>
            <p className="text-gray-400 text-sm">Claude Code starts up and shows a prompt waiting for your input. You're now in a conversation with it.</p>
            <p className="text-gray-500 text-xs mt-2">If it asks about permissions, accept the defaults.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-2-build',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Do it now</span>
          <h2 className="text-3xl font-bold">Tell Claude Code what to build</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Copy and paste this into Claude Code</h3>
          <div className="code-block">
            <p className="text-gray-200">Build a product advisor demo app. Requirements:</p>
            <p className="text-gray-200 mt-2">- Express server with a simple chat UI</p>
            <p className="text-gray-200">- The user types a question, the "agent" responds with product recommendations</p>
            <p className="text-gray-200">- Mock the AI responses (no real API needed) — match keywords to products</p>
            <p className="text-gray-200">- Include 8 sample products (mix of electronics and accessories)</p>
            <p className="text-gray-200">- Clean, modern UI with dark theme</p>
            <p className="text-gray-200">- Must start with: npm start</p>
            <p className="text-gray-200">- Create a README.md explaining what this is and how to run it</p>
            <p className="text-gray-200 mt-2">Keep it simple — this is for demoing, not production.</p>
          </div>
        </div>
        <div className="card">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⏳</span>
            <div>
              <p className="text-gray-300">Wait for Claude Code to finish. It will create files, install packages, and may test that it runs.</p>
              <p className="text-gray-500 text-sm mt-1">This usually takes 2-4 minutes. Watch it work — you'll see each file being created.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-3-test',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Do it now</span>
          <h2 className="text-3xl font-bold">Test the demo</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block text-lg">
            <p className="text-gray-200 italic">"Start the app so I can test it in my browser"</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-3">Try it out</h3>
            <p className="text-gray-400 text-sm mb-2">Open the URL Claude Code shows (usually http://localhost:3000) and test:</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Type "I need headphones" → see recommendations</li>
              <li>• Type "something for a gift" → see suggestions</li>
              <li>• Check the UI looks good</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-3">If something is off</h3>
            <p className="text-gray-400 text-sm mb-2">Just tell Claude Code what to fix:</p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-200 italic">"The font is too small, make it bigger"</p>
              <p className="text-gray-200 italic">"Add more products about accessories"</p>
              <p className="text-gray-200 italic">"The responses are too short, make them more helpful"</p>
            </div>
          </div>
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center text-sm">
            Once you're happy with it, stop the server (Ctrl+C in the terminal where it's running, or tell Claude Code "stop the server").
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-4-github',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Do it now</span>
          <h2 className="text-3xl font-bold">Push to GitHub</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block text-lg">
            <p className="text-gray-200 italic">"Create a public GitHub repository called product-advisor-demo,</p>
            <p className="text-gray-200 italic">commit all files, and push."</p>
          </div>
        </div>
        <div className="card mb-6">
          <h3 className="text-gray-200 font-semibold mb-3">Claude Code will</h3>
          <div className="space-y-2 text-sm">
            <p className="text-gray-300 flex gap-2"><span className="text-emerald-400">✓</span> Run <code className="bg-gray-700 px-1 rounded">git init</code></p>
            <p className="text-gray-300 flex gap-2"><span className="text-emerald-400">✓</span> Create a .gitignore (node_modules, .env, etc.)</p>
            <p className="text-gray-300 flex gap-2"><span className="text-emerald-400">✓</span> Stage and commit all files</p>
            <p className="text-gray-300 flex gap-2"><span className="text-emerald-400">✓</span> Create the repo on GitHub with <code className="bg-gray-700 px-1 rounded">gh repo create</code></p>
            <p className="text-gray-300 flex gap-2"><span className="text-emerald-400">✓</span> Push everything</p>
          </div>
        </div>
        <div className="card">
          <h3 className="text-gray-200 font-semibold mb-2">Verify</h3>
          <p className="text-gray-400 text-sm">Claude Code will show you the GitHub URL. Open it in your browser — you should see your files and README displayed nicely.</p>
          <p className="text-sky-400 text-sm mt-2 font-mono">https://github.com/YOUR-NAME/product-advisor-demo</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-5-branch',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Do it now</span>
          <h2 className="text-3xl font-bold">Create a customer version</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block">
            <p className="text-gray-200 italic">"Create a branch called customer/luxe-fashion.</p>
            <p className="text-gray-200 italic mt-2">Customize the demo for a luxury fashion brand:</p>
            <p className="text-gray-200 italic">- Replace all products with luxury items (bags, watches, shoes)</p>
            <p className="text-gray-200 italic">- Change the UI accent color to gold (#d4af37)</p>
            <p className="text-gray-200 italic">- Rename the agent to 'Style Concierge'</p>
            <p className="text-gray-200 italic mt-2">Commit when done."</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-2">What's happening</h3>
            <p className="text-gray-400 text-sm">Claude Code creates a parallel version. Your original demo on main is untouched. This branch has the luxury customization.</p>
          </div>
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-2">Test it</h3>
            <p className="text-gray-400 text-sm">Say <span className="text-gray-200 italic">"Start the app"</span> and check the changes in your browser. You should see luxury products and the gold accent.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-6-push-branch',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Do it now</span>
          <h2 className="text-3xl font-bold">Push the branch and open a PR</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block text-lg">
            <p className="text-gray-200 italic">"Push this branch to GitHub and open a pull request</p>
            <p className="text-gray-200 italic">to merge it into main."</p>
          </div>
        </div>
        <div className="card mb-6">
          <h3 className="text-gray-200 font-semibold mb-3">Claude Code will</h3>
          <div className="space-y-2 text-sm">
            <p className="text-gray-300 flex gap-2"><span className="text-emerald-400">✓</span> Push the branch to GitHub</p>
            <p className="text-gray-300 flex gap-2"><span className="text-emerald-400">✓</span> Create a pull request with a title and description</p>
            <p className="text-gray-300 flex gap-2"><span className="text-emerald-400">✓</span> Show you the PR URL</p>
          </div>
        </div>
        <div className="card">
          <h3 className="text-gray-200 font-semibold mb-2">Check it out on GitHub</h3>
          <p className="text-gray-400 text-sm mb-2">Open the PR URL. You'll see:</p>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• A description of the changes</li>
            <li>• A diff showing exactly what was modified</li>
            <li>• A green "Merge" button</li>
          </ul>
          <p className="text-gray-500 text-sm mt-3">On a team, someone would review this before merging. For now, you can merge it yourself.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-7-merge',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Do it now</span>
          <h2 className="text-3xl font-bold">Merge or switch back</h2>
        </div>
        <p className="text-gray-400 text-lg mb-6">You have two options — pick one:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card border border-sky-500/30">
            <h3 className="text-sky-400 font-semibold text-lg mb-3">Option A: Merge the PR</h3>
            <p className="text-gray-400 text-sm mb-3">If you like the luxury version and want it in main:</p>
            <div className="code-block !p-3 text-sm">
              <p className="text-gray-200 italic">"Merge the pull request"</p>
            </div>
            <p className="text-gray-500 text-xs mt-3">Or click the green "Merge" button on GitHub.</p>
          </div>
          <div className="card border border-gray-700/50">
            <h3 className="text-gray-200 font-semibold text-lg mb-3">Option B: Keep it separate</h3>
            <p className="text-gray-400 text-sm mb-3">Keep the luxury version on its branch, go back to the original:</p>
            <div className="code-block !p-3 text-sm">
              <p className="text-gray-200 italic">"Switch back to main"</p>
            </div>
            <p className="text-gray-500 text-xs mt-3">The luxury branch stays on GitHub — use it when presenting to that customer.</p>
          </div>
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center">
            This is the real workflow: main is your generic template, branches are customer-specific versions.
            You can have as many branches as you have customers.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-8-improve',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Do it now</span>
          <h2 className="text-3xl font-bold">Make an improvement</h2>
        </div>
        <p className="text-gray-400 text-lg mb-6">Let's improve the base demo. Make sure you're on main:</p>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block">
            <p className="text-gray-200 italic">"Make sure I'm on main. Then add a typing indicator —</p>
            <p className="text-gray-200 italic">when the user sends a message, show '...' for 1 second</p>
            <p className="text-gray-200 italic">before the agent responds. Makes it feel more real.</p>
            <p className="text-gray-200 italic mt-2">Commit and push when done."</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-2">What happens</h3>
            <p className="text-gray-400 text-sm">Claude Code switches to main (if needed), edits the code, tests it, commits with a clear message, and pushes to GitHub.</p>
          </div>
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-2">Check GitHub</h3>
            <p className="text-gray-400 text-sm">Refresh your repo on GitHub. You'll see the new commit in the history. Click it to see exactly what changed.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-9-history',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Do it now</span>
          <h2 className="text-3xl font-bold">See your history</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Say this to Claude Code</h3>
          <div className="code-block text-lg">
            <p className="text-gray-200 italic">"Show me the commit history"</p>
          </div>
        </div>
        <div className="card mb-6">
          <h3 className="text-gray-200 font-semibold mb-3">You'll see something like</h3>
          <div className="code-block text-sm">
            <p className="text-emerald-400">abc1234</p><p className="text-gray-300 ml-4">Add typing indicator to agent responses</p>
            <p className="text-emerald-400 mt-2">def5678</p><p className="text-gray-300 ml-4">Initial product advisor demo</p>
          </div>
          <p className="text-gray-500 text-sm mt-3">(If you merged the PR, you'll see that commit too.)</p>
        </div>
        <div className="card">
          <h3 className="text-gray-200 font-semibold mb-2">What this means</h3>
          <p className="text-gray-400 text-sm">
            Every change is recorded. If you ever break something, you can say <span className="text-gray-200 italic">"go back to the previous commit"</span> and Claude Code will restore it.
            This is your safety net.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-10-share',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm font-mono">Try it</span>
          <h2 className="text-3xl font-bold">Share with a colleague</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-sky-400 font-semibold text-lg mb-3">Send them these 3 commands</h3>
          <div className="code-block text-base">
            <p className="text-sky-400">git clone https://github.com/YOUR-NAME/product-advisor-demo</p>
            <p className="text-sky-400">cd product-advisor-demo</p>
            <p className="text-sky-400">npm install && npm start</p>
          </div>
          <p className="text-gray-500 text-sm mt-3">Replace YOUR-NAME with your GitHub username.</p>
        </div>
        <div className="card">
          <h3 className="text-gray-200 font-semibold mb-3">What they get</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> Your complete demo, ready to run</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> The README explaining what it is</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> The full history of changes</li>
            <li className="flex gap-2"><span className="text-emerald-400">✓</span> Any customer branches you created</li>
          </ul>
          <p className="text-gray-400 text-sm mt-4">
            If they have Claude Code too, they can start customizing it immediately for their own customers.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'recap',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">What you just did</h2>
        <div className="space-y-3 mb-8">
          {[
            { num: '1', text: 'Created a project folder and started Claude Code', done: true },
            { num: '2', text: 'Built a working demo app from a description', done: true },
            { num: '3', text: 'Tested it in your browser', done: true },
            { num: '4', text: 'Created a GitHub repo and pushed — one sentence', done: true },
            { num: '5', text: 'Created a customer branch with customizations', done: true },
            { num: '6', text: 'Opened a pull request', done: true },
            { num: '7', text: 'Made an improvement and pushed it', done: true },
            { num: '8', text: 'Checked the commit history', done: true },
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">✓</span>
              <span className="text-gray-300">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="card">
          <p className="text-gray-400 text-center text-lg">
            You didn't type a single Git command. Claude Code did it all.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'next-steps',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-4xl font-bold mb-6">You're ready for the real thing</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-lg">
          Next time you need a demo, just open a folder and start talking to Claude Code.
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mb-8">
          <div className="card text-left">
            <h3 className="text-sky-400 font-semibold mb-2">Day-to-day phrases</h3>
            <div className="space-y-1 text-sm text-gray-300">
              <p className="italic">"Build me a demo that..."</p>
              <p className="italic">"Commit and push"</p>
              <p className="italic">"Create a branch for [customer]"</p>
              <p className="italic">"Fix the [thing], commit"</p>
              <p className="italic">"Open a PR"</p>
              <p className="italic">"Switch back to main"</p>
            </div>
          </div>
          <div className="card text-left">
            <h3 className="text-sky-400 font-semibold mb-2">When something goes wrong</h3>
            <div className="space-y-1 text-sm text-gray-300">
              <p className="italic">"Undo that last change"</p>
              <p className="italic">"Go back to the previous commit"</p>
              <p className="italic">"Delete this branch"</p>
              <p className="italic">"What changed since yesterday?"</p>
              <p className="italic">"Start fresh from main"</p>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm max-w-md">
          The more you use it, the more natural it becomes. Claude Code learns your project from the CLAUDE.md file and the code itself.
        </p>
      </div>
    ),
  },
]

export default function HandsOnClaudeCode({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
