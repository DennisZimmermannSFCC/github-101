import SlideViewer from '../components/SlideViewer'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🤖</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
          Claude Code + GitHub
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Build complex demos with AI — manage them with Git
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">From simple scripts to full applications</p>
          <p className="text-gray-500 mt-2">Let Claude Code do the heavy lifting</p>
        </div>
      </div>
    ),
  },

  {
    id: 'why-claude-code',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Why Claude Code for demos?</h2>
        <p className="text-gray-400 text-lg mb-6">
          Pre-sales demos are getting more complex. Customers want to see real working code, not just slides.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <p className="text-2xl mb-2">⚡</p>
            <h3 className="text-gray-200 font-semibold mb-1">Generate code fast</h3>
            <p className="text-gray-400 text-sm">Claude Code writes working apps, APIs, scripts — in minutes</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">🔧</p>
            <h3 className="text-gray-200 font-semibold mb-1">Modify for each customer</h3>
            <p className="text-gray-400 text-sm">"Change the theme to ACME's brand colors" — done</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">🧪</p>
            <h3 className="text-gray-200 font-semibold mb-1">Iterate without fear</h3>
            <p className="text-gray-400 text-sm">Git tracks everything — experiment freely, revert if needed</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">📦</p>
            <h3 className="text-gray-200 font-semibold mb-1">Share with the team</h3>
            <p className="text-gray-400 text-sm">Push to GitHub — colleagues can clone and run it instantly</p>
          </div>
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center">
            <span className="text-rose-400 font-semibold">The combo:</span> Claude Code builds it, Git tracks it, GitHub shares it.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'what-is-claude-code',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">What is Claude Code?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                An AI assistant that lives in your terminal. You describe what you want in plain English —
                it writes code, runs commands, <span className="text-rose-400 font-semibold">and handles all the Git operations for you</span>.
              </p>
            </div>
            <div className="code-block">
              <p className="text-gray-500"># Install it</p>
              <p className="text-rose-400">npm install -g @anthropic-ai/claude-code</p>
              <p className="text-gray-500 mt-3"># Start it in any project folder</p>
              <p className="text-rose-400">cd commerce-agent-demo</p>
              <p className="text-rose-400">claude</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">You talk, it does everything</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2"><span className="text-rose-400">→</span> Creates entire applications</li>
              <li className="flex gap-2"><span className="text-rose-400">→</span> Edits existing files</li>
              <li className="flex gap-2"><span className="text-rose-400">→</span> Runs terminal commands</li>
              <li className="flex gap-2"><span className="text-rose-400">→</span> Commits with clear messages</li>
              <li className="flex gap-2"><span className="text-rose-400">→</span> Creates branches</li>
              <li className="flex gap-2"><span className="text-rose-400">→</span> Pushes to GitHub</li>
              <li className="flex gap-2"><span className="text-rose-400">→</span> Creates pull requests</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'claude-does-git',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Claude Code handles Git for you</h2>
        <p className="text-gray-400 text-lg mb-6">
          You don't need to memorize Git commands. Just tell Claude Code what you want in plain English.
        </p>
        <div className="space-y-4">
          {[
            { you: '"Commit what we have so far"', claude: 'git add . && git commit -m "Add product search endpoint and chat UI"' },
            { you: '"Push this to GitHub"', claude: 'git push origin main' },
            { you: '"Create a branch for the ACME customer"', claude: 'git checkout -b customer/acme-retail' },
            { you: '"Commit this, then switch back to main"', claude: 'git add . && git commit -m "..." && git checkout main' },
            { you: '"Create a pull request for this branch"', claude: 'gh pr create --title "..." --body "..."' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
              <p className="text-gray-200 text-sm"><span className="text-rose-400 font-semibold">You:</span> {item.you}</p>
              <p className="text-gray-500 text-xs font-mono mt-1">Claude Code runs: <span className="text-emerald-400">{item.claude}</span></p>
            </div>
          ))}
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center">
            Claude Code picks the right commands and writes meaningful commit messages based on what actually changed.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'complex-demo-structure',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">A complex demo repository</h2>
        <p className="text-gray-400 mb-6 text-lg">
          Real demos often include code, configurations, and documentation together.
        </p>
        <div className="code-block text-sm">
          <p className="text-rose-400">commerce-agent-demo/</p>
          <p className="ml-4 text-gray-300">├── <span className="text-emerald-400">README.md</span>                  — How to run this demo</p>
          <p className="ml-4 text-gray-300">├── <span className="text-cyan-400">app/</span>                       — The actual demo application</p>
          <p className="ml-8 text-gray-300">│   ├── package.json</p>
          <p className="ml-8 text-gray-300">│   ├── src/</p>
          <p className="ml-8 text-gray-300">│   │   ├── index.js           — API server</p>
          <p className="ml-8 text-gray-300">│   │   ├── agent.js           — AI agent logic</p>
          <p className="ml-8 text-gray-300">│   │   └── ui/                — Frontend</p>
          <p className="ml-8 text-gray-300">│   └── .env.example           — Required env vars</p>
          <p className="ml-4 text-gray-300">├── <span className="text-cyan-400">demo-script/</span>               — Talk track and flow</p>
          <p className="ml-8 text-gray-300">│   └── main-demo-flow.md</p>
          <p className="ml-4 text-gray-300">├── <span className="text-cyan-400">setup/</span>                     — Environment preparation</p>
          <p className="ml-8 text-gray-300">│   ├── setup-instructions.md</p>
          <p className="ml-8 text-gray-300">│   └── seed-data.sql</p>
          <p className="ml-4 text-gray-300">└── <span className="text-cyan-400">sample-data/</span>               — Test fixtures</p>
          <p className="ml-8 text-gray-300">    └── products.json</p>
        </div>
      </div>
    ),
  },

  {
    id: 'workflow-create',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm font-mono">Workflow 1</span>
          <h2 className="text-3xl font-bold">Create a demo from scratch</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-rose-400 font-semibold text-lg mb-3">What you tell Claude Code</h3>
              <div className="code-block text-sm">
                <p className="text-gray-300">Create a simple Express API that simulates</p>
                <p className="text-gray-300">an AI commerce agent. It should:</p>
                <p className="text-gray-300 mt-2">- Accept product search queries</p>
                <p className="text-gray-300">- Return mock recommendations</p>
                <p className="text-gray-300">- Have a simple chat UI</p>
                <p className="text-gray-300">- Include sample product data</p>
                <p className="text-gray-300 mt-2">Make it easy to demo — no external</p>
                <p className="text-gray-300">dependencies, runs with npm start.</p>
              </div>
            </div>
            <div className="card">
              <h3 className="text-cyan-400 font-semibold mb-2">Why this works</h3>
              <p className="text-gray-400 text-sm">Claude Code creates all the files, installs dependencies, and tests it. You get a working demo in minutes, not hours.</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">What Claude Code does</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Creates package.json with dependencies</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Writes the API server code</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Builds a chat UI frontend</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Adds sample product data</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Runs npm install and tests it</span>
              </div>
            </div>
            <div className="mt-4 bg-gray-900 rounded-lg p-3">
              <p className="text-gray-400 text-sm">Then just say:</p>
              <p className="text-gray-200 text-sm mt-1 italic">"Commit this and push it to GitHub"</p>
              <p className="text-gray-500 text-xs mt-2">Claude Code stages, commits with a good message, and pushes.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'workflow-customize',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm font-mono">Workflow 2</span>
          <h2 className="text-3xl font-bold">Customize for a customer</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-rose-400 font-semibold text-lg mb-3">Just tell Claude Code</h3>
              <div className="code-block text-sm">
                <p className="text-gray-200 italic">"Create a branch for ACME Retail and</p>
                <p className="text-gray-200 italic">customize this demo for them:</p>
                <p className="text-gray-200 italic mt-2">- Change product data to fashion items</p>
                <p className="text-gray-200 italic">- Update UI colors to navy blue #1a237e</p>
                <p className="text-gray-200 italic">  and gold #ffd700</p>
                <p className="text-gray-200 italic">- Add a style advisor persona to the</p>
                <p className="text-gray-200 italic">  agent responses</p>
                <p className="text-gray-200 italic mt-2">Then commit and push the branch."</p>
              </div>
              <p className="text-gray-500 text-xs mt-3">Claude Code creates the branch, makes all changes, commits, and pushes — one conversation.</p>
            </div>
          </div>
          <div>
            <div className="card mb-4">
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why this is powerful</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Main branch stays as your generic template</li>
                <li>• Each customer gets their own branch</li>
                <li>• Claude Code handles the actual code changes</li>
                <li>• You focus on what the customer needs, not how to code it</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Revert if needed</h3>
              <p className="text-gray-400 text-sm mb-2">
                Don't like the result? Just say:
              </p>
              <div className="space-y-2">
                <div className="bg-gray-900 rounded-lg p-3 text-sm">
                  <p className="text-gray-200 italic">"Undo that last change"</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-3 text-sm">
                  <p className="text-gray-200 italic">"Switch back to main"</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-3 text-sm">
                  <p className="text-gray-200 italic">"Delete this branch, it didn't work out"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'workflow-iterate',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm font-mono">Workflow 3</span>
          <h2 className="text-3xl font-bold">Iterate and improve</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-rose-400 font-semibold text-lg mb-3">The feedback loop</h3>
          <p className="text-gray-300 mb-4">After a demo, tell Claude Code what to improve. It makes the changes and commits them.</p>
          <div className="space-y-4">
            {[
              { prompt: '"The checkout flow was confusing — simplify it to 2 steps. Commit when done."', commit: 'Simplify checkout to 2-step flow' },
              { prompt: '"Add a loading animation when the agent is thinking. Commit and push."', commit: 'Add thinking indicator to agent responses' },
              { prompt: '"The customer asked about returns — add a returns FAQ to the agent knowledge base. Commit."', commit: 'Add returns FAQ to agent knowledge base' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 rounded-lg p-3">
                <p className="text-gray-200 text-sm italic">{item.prompt}</p>
                <p className="text-gray-500 text-xs mt-1">Claude Code commits: <span className="text-emerald-400">{item.commit}</span></p>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400 text-center">
            Each improvement becomes a commit automatically. Your demo gets better after every customer interaction — and the history tells the story.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'practical-tips',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Practical tips</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="text-rose-400 font-semibold mb-3">Say "commit" after each step</h3>
            <p className="text-gray-400 text-sm mb-2">After each working change, tell Claude Code to commit:</p>
            <div className="code-block !p-3 text-sm">
              <p className="text-gray-200 italic">"Add the product search endpoint"</p>
              <p className="text-gray-500 mt-1"># Claude Code builds it, you test it</p>
              <p className="text-gray-200 italic mt-1">"Looks good, commit this"</p>
            </div>
            <p className="text-gray-500 text-xs mt-2">If the next change breaks something, say "undo last commit".</p>
          </div>
          <div className="card">
            <h3 className="text-rose-400 font-semibold mb-3">Use .env for secrets</h3>
            <p className="text-gray-400 text-sm mb-2">Never commit API keys. Use environment variables:</p>
            <div className="code-block !p-3 text-sm">
              <p className="text-gray-500"># .env (not committed)</p>
              <p className="text-gray-300">API_KEY=sk-live-xxx</p>
              <p className="text-gray-500 mt-2"># .env.example (committed)</p>
              <p className="text-gray-300">API_KEY=your-key-here</p>
              <p className="text-gray-500 mt-2"># .gitignore</p>
              <p className="text-gray-300">.env</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-rose-400 font-semibold mb-3">CLAUDE.md as your brief</h3>
            <p className="text-gray-400 text-sm mb-2">Add a CLAUDE.md file so Claude Code always has context:</p>
            <div className="code-block !p-3 text-sm">
              <p className="text-gray-300">This is a pre-sales demo app.</p>
              <p className="text-gray-300">Keep it simple — no auth, no DB.</p>
              <p className="text-gray-300">Must start with just: npm start</p>
              <p className="text-gray-300">Target audience: retail executives.</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-rose-400 font-semibold mb-3">Branch per experiment</h3>
            <p className="text-gray-400 text-sm mb-2">Trying something risky? Tell Claude Code:</p>
            <div className="code-block !p-3 text-sm">
              <p className="text-gray-200 italic">"Create a branch called experiment/voice-ui</p>
              <p className="text-gray-200 italic">and try adding a voice interface"</p>
              <p className="text-gray-500 mt-2"># Doesn't work?</p>
              <p className="text-gray-200 italic">"Switch back to main and delete that branch"</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'gitignore',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">What NOT to commit</h2>
        <p className="text-gray-400 text-lg mb-6">
          Code projects generate files that should stay local. A <span className="text-rose-400 font-mono">.gitignore</span> file tells Git to skip them.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card">
              <h3 className="text-rose-400 font-semibold mb-3">Typical .gitignore</h3>
              <div className="code-block text-sm">
                <p className="text-gray-500"># Dependencies (reinstall with npm install)</p>
                <p className="text-gray-300">node_modules/</p>
                <p className="text-gray-500 mt-2"># Secrets</p>
                <p className="text-gray-300">.env</p>
                <p className="text-gray-500 mt-2"># Build output</p>
                <p className="text-gray-300">dist/</p>
                <p className="text-gray-300">build/</p>
                <p className="text-gray-500 mt-2"># OS files</p>
                <p className="text-gray-300">.DS_Store</p>
                <p className="text-gray-300">Thumbs.db</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card mb-4">
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• <span className="text-gray-300">node_modules/</span> can be 500MB+ — anyone can recreate it with <code className="bg-gray-700 px-1 rounded">npm install</code></li>
                <li>• <span className="text-gray-300">.env</span> has secrets — never push credentials</li>
                <li>• <span className="text-gray-300">dist/</span> is generated — rebuild anytime</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Ask Claude Code</h3>
              <p className="text-gray-400 text-sm italic">"Create a .gitignore for a Node.js project"</p>
              <p className="text-gray-500 text-sm mt-2">It knows the right defaults for every language.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'full-example',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Full example: start to share</h2>
        <p className="text-gray-400 mb-4">An entire session — you only type the plain-English parts:</p>
        <div className="space-y-2">
          {[
            { step: '1', who: 'you', text: 'mkdir commerce-agent-demo && cd commerce-agent-demo && claude' },
            { step: '2', who: 'you', text: '"Create a commerce agent demo with a chat UI, product search, and sample data. Make it run with npm start."' },
            { step: '3', who: 'claude', text: 'Creates files, installs deps, verifies it runs' },
            { step: '4', who: 'you', text: '"Create a GitHub repo for this and push everything"' },
            { step: '5', who: 'claude', text: 'Runs git init, gh repo create, commits, pushes' },
            { step: '6', who: 'you', text: '"Add a returns FAQ to the agent knowledge base"' },
            { step: '7', who: 'claude', text: 'Edits code, tests it' },
            { step: '8', who: 'you', text: '"Commit and push"' },
            { step: '9', who: 'claude', text: 'git add . && git commit -m "Add returns FAQ" && git push' },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-mono text-xs shrink-0">{item.step}</span>
              <span className={`px-2 py-0.5 rounded text-xs font-mono shrink-0 ${item.who === 'you' ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}`}>{item.who === 'you' ? 'you' : 'claude'}</span>
              <span className={`text-xs md:text-sm ${item.who === 'you' ? 'text-gray-200 italic' : 'text-gray-500'}`}>{item.text}</span>
            </div>
          ))}
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center text-sm">
            Your colleague can now clone the repo, run <code className="bg-gray-700 px-1 rounded">npm install && npm start</code>, and present the demo.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'team-workflow',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Team workflow with Claude Code</h2>
        <p className="text-gray-400 text-lg mb-6">
          Multiple SEs building and customizing the same demo:
        </p>
        <div className="space-y-3">
          {[
            { who: 'You', action: 'Build the base demo with Claude Code, push to main', icon: '🟢' },
            { who: 'Sarah', action: 'Clones it, creates branch customer/bigretail', icon: '🌿' },
            { who: 'Sarah', action: 'Uses Claude Code: "Add grocery product catalog"', icon: '🤖' },
            { who: 'Sarah', action: 'Pushes branch, opens PR: "BigRetail customization"', icon: '🔀' },
            { who: 'You', action: 'Review PR — the grocery data is useful for everyone', icon: '👀' },
            { who: 'You', action: 'Merge into main — base demo now has grocery support', icon: '✅' },
            { who: 'Marcus', action: 'Pulls latest main, gets the grocery data for free', icon: '⬇️' },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-xl">{step.icon}</span>
              <span className="text-rose-400 font-semibold w-16 shrink-0 text-sm">{step.who}</span>
              <span className="text-gray-300 text-sm">{step.action}</span>
            </div>
          ))}
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center">
            Everyone has Claude Code as their copilot. Git keeps the collaboration clean.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'summary',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🚀</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Build demos at the speed of thought</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-xl">
          Claude Code builds the code. Git tracks every version. GitHub shares it with your team.
        </p>
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mb-8">
          <div className="card">
            <p className="text-2xl mb-2">🤖</p>
            <h3 className="text-rose-400 font-semibold text-sm">Claude Code</h3>
            <p className="text-gray-500 text-xs">Builds and modifies code from natural language</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">💾</p>
            <h3 className="text-rose-400 font-semibold text-sm">Git</h3>
            <p className="text-gray-500 text-xs">Tracks every change, lets you revert safely</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">🌐</p>
            <h3 className="text-rose-400 font-semibold text-sm">GitHub</h3>
            <p className="text-gray-500 text-xs">Shares with team, enables collaboration</p>
          </div>
        </div>
        <div className="card max-w-lg">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Everything through conversation</h3>
          <div className="text-left text-sm space-y-1">
            <p><span className="text-gray-200 italic">"Build me a demo that..."</span> <span className="text-gray-500">— creates the app</span></p>
            <p><span className="text-gray-200 italic">"Commit and push this"</span> <span className="text-gray-500">— handles all the Git</span></p>
            <p><span className="text-gray-200 italic">"Create a branch for ACME"</span> <span className="text-gray-500">— customer variations</span></p>
            <p><span className="text-gray-200 italic">"Open a PR for this"</span> <span className="text-gray-500">— team collaboration</span></p>
          </div>
        </div>
      </div>
    ),
  },
]

export default function ClaudeCode({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
