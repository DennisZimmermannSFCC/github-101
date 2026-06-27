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
          Build complex demos with AI — from zero to shared with your team
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">No GitHub account? No Git installed? No problem.</p>
          <p className="text-gray-500 mt-2">We'll set up everything from scratch.</p>
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
          Customers want to see real working code. Claude Code builds it — and handles all the Git and GitHub parts too.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <p className="text-2xl mb-2">⚡</p>
            <h3 className="text-gray-200 font-semibold mb-1">You describe, it builds</h3>
            <p className="text-gray-400 text-sm">Working apps, APIs, UIs — in minutes, from plain English</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">💾</p>
            <h3 className="text-gray-200 font-semibold mb-1">It handles Git for you</h3>
            <p className="text-gray-400 text-sm">"Commit this" / "Push to GitHub" — no commands to memorize</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">🔧</p>
            <h3 className="text-gray-200 font-semibold mb-1">Customize per customer</h3>
            <p className="text-gray-400 text-sm">"Create a branch for ACME and change the branding" — done</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">🤝</p>
            <h3 className="text-gray-200 font-semibold mb-1">Share with the team</h3>
            <p className="text-gray-400 text-sm">Colleagues clone your repo and run the demo immediately</p>
          </div>
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center">
            <span className="text-rose-400 font-semibold">You focus on what the demo should do.</span> Claude Code handles the how.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'prerequisites',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm font-mono">Setup 1</span>
          <h2 className="text-3xl font-bold">Create accounts and install tools</h2>
        </div>
        <p className="text-gray-400 mb-6">One-time setup. Takes about 10 minutes.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="card">
              <h3 className="text-rose-400 font-semibold mb-2">1. GitHub account</h3>
              <p className="text-gray-400 text-sm">Go to <span className="text-rose-400 font-mono">github.com</span> → Sign up (free)</p>
              <p className="text-gray-500 text-xs mt-1">This is where your demos will live online.</p>
            </div>
            <div className="card">
              <h3 className="text-rose-400 font-semibold mb-2">2. Install Git</h3>
              <div className="code-block !p-3 text-sm">
                <p className="text-gray-500">Mac:</p>
                <p className="text-rose-400">xcode-select --install</p>
                <p className="text-gray-500 mt-2">Windows:</p>
                <p className="text-gray-400">Download from git-scm.com</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="card">
              <h3 className="text-rose-400 font-semibold mb-2">3. Install Node.js</h3>
              <p className="text-gray-400 text-sm">Download from <span className="text-rose-400 font-mono">nodejs.org</span> (LTS version)</p>
              <p className="text-gray-500 text-xs mt-1">Needed to run Claude Code and JavaScript demos.</p>
            </div>
            <div className="card">
              <h3 className="text-rose-400 font-semibold mb-2">4. Install Claude Code</h3>
              <div className="code-block !p-3 text-sm">
                <p className="text-rose-400">npm install -g @anthropic-ai/claude-code</p>
              </div>
              <p className="text-gray-500 text-xs mt-2">Needs an Anthropic API key or Max subscription.</p>
            </div>
            <div className="card">
              <h3 className="text-rose-400 font-semibold mb-2">5. Install GitHub CLI</h3>
              <div className="code-block !p-3 text-sm">
                <p className="text-gray-500">Mac:</p>
                <p className="text-rose-400">brew install gh</p>
                <p className="text-gray-500 mt-1">Then:</p>
                <p className="text-rose-400">gh auth login</p>
              </div>
              <p className="text-gray-500 text-xs mt-2">Lets Claude Code create repos and PRs for you.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'verify-setup',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm font-mono">Setup 2</span>
          <h2 className="text-3xl font-bold">Verify everything works</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-rose-400 font-semibold text-lg mb-3">Open your terminal and run these</h3>
          <div className="code-block">
            <p className="text-rose-400">git --version</p>
            <p className="text-gray-500"># git version 2.x.x ✓</p>
            <p className="text-rose-400 mt-3">node --version</p>
            <p className="text-gray-500"># v20.x.x or higher ✓</p>
            <p className="text-rose-400 mt-3">gh --version</p>
            <p className="text-gray-500"># gh version 2.x.x ✓</p>
            <p className="text-rose-400 mt-3">claude --version</p>
            <p className="text-gray-500"># claude-code x.x.x ✓</p>
          </div>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-2 text-gray-200">Configure Git identity</h3>
          <div className="code-block !p-3 text-sm">
            <p className="text-rose-400">git config --global user.name "Your Name"</p>
            <p className="text-rose-400">git config --global user.email "you@company.com"</p>
          </div>
          <p className="text-gray-500 text-xs mt-2">Use the same email as your GitHub account. One-time setup.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'start-claude',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm font-mono">Step 1</span>
          <h2 className="text-3xl font-bold">Start a project with Claude Code</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-rose-400 font-semibold text-lg mb-3">What you do</h3>
              <p className="text-gray-300 mb-3">Create a folder and start Claude Code in it:</p>
              <div className="code-block">
                <p className="text-rose-400">mkdir commerce-agent-demo</p>
                <p className="text-rose-400">cd commerce-agent-demo</p>
                <p className="text-rose-400">claude</p>
              </div>
              <p className="text-gray-500 text-sm mt-3">That's it. You're now talking to Claude Code.</p>
            </div>
            <div className="card">
              <h3 className="text-cyan-400 font-semibold mb-2">Why this way</h3>
              <p className="text-gray-400 text-sm">Starting in an empty folder gives Claude Code a clean slate. It will create all files, set up Git, and handle everything from here.</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">What is Claude Code?</h3>
            <p className="text-gray-400 text-sm mb-4">
              An AI assistant in your terminal. You describe what you want in English — it writes code, runs commands, and manages Git. All in one conversation.
            </p>
            <h3 className="text-lg font-semibold mb-3 text-gray-200">It handles</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex gap-2"><span className="text-rose-400">→</span> Writing all the code</li>
              <li className="flex gap-2"><span className="text-rose-400">→</span> Running terminal commands</li>
              <li className="flex gap-2"><span className="text-rose-400">→</span> Git commits and branches</li>
              <li className="flex gap-2"><span className="text-rose-400">→</span> Creating GitHub repos</li>
              <li className="flex gap-2"><span className="text-rose-400">→</span> Pushing and pulling</li>
              <li className="flex gap-2"><span className="text-rose-400">→</span> Opening pull requests</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'build-demo',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm font-mono">Step 2</span>
          <h2 className="text-3xl font-bold">Tell Claude Code what to build</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-rose-400 font-semibold text-lg mb-3">What you say</h3>
              <div className="code-block text-sm">
                <p className="text-gray-200 italic">Build a commerce agent demo. It should have:</p>
                <p className="text-gray-200 italic mt-2">- A simple chat UI where you can talk to an AI agent</p>
                <p className="text-gray-200 italic">- The agent recommends products from a sample catalog</p>
                <p className="text-gray-200 italic">- Include 10 example products (fashion items)</p>
                <p className="text-gray-200 italic">- Must run with just: npm start</p>
                <p className="text-gray-200 italic">- No external APIs needed — mock the AI responses</p>
                <p className="text-gray-200 italic mt-2">Also create a README explaining what this is</p>
                <p className="text-gray-200 italic">and how to run it.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Claude Code will</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Create package.json</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Write the server code</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Build the chat UI</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Add sample product data</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Write the README</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Run npm install</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Test that it starts</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">You watch it work. Takes 2-5 minutes.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'push-to-github',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm font-mono">Step 3</span>
          <h2 className="text-3xl font-bold">Put it on GitHub</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-rose-400 font-semibold text-lg mb-3">What you say</h3>
          <div className="code-block">
            <p className="text-gray-200 italic text-lg">"Create a GitHub repository for this project</p>
            <p className="text-gray-200 italic text-lg">and push everything."</p>
          </div>
        </div>
        <div className="card mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-200">Claude Code will</h3>
          <div className="space-y-2 text-sm">
            <div className="flex gap-3 items-center">
              <span className="text-emerald-400">✓</span>
              <span className="text-gray-300">Initialize Git in the folder</span>
              <span className="text-gray-600 font-mono text-xs">git init</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-emerald-400">✓</span>
              <span className="text-gray-300">Create a .gitignore (skips node_modules, .env, etc.)</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-emerald-400">✓</span>
              <span className="text-gray-300">Commit all files with a descriptive message</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-emerald-400">✓</span>
              <span className="text-gray-300">Create a new repo on GitHub</span>
              <span className="text-gray-600 font-mono text-xs">gh repo create</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-emerald-400">✓</span>
              <span className="text-gray-300">Push everything up</span>
              <span className="text-gray-600 font-mono text-xs">git push</span>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400 text-center">
            Your demo is now live on GitHub. Anyone with the link can see it and clone it.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'claude-does-git',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">You talk, Claude Code does the Git</h2>
        <p className="text-gray-400 text-lg mb-6">
          No commands to memorize. Just say what you want in plain English.
        </p>
        <div className="space-y-3">
          {[
            { you: '"Commit what we have so far"', claude: 'git add . && git commit -m "Add product search and chat UI"' },
            { you: '"Push this to GitHub"', claude: 'git push origin main' },
            { you: '"Create a branch for the ACME customer"', claude: 'git checkout -b customer/acme-retail' },
            { you: '"Undo that last change"', claude: 'git revert HEAD' },
            { you: '"Open a pull request for this branch"', claude: 'gh pr create --title "..." --body "..."' },
            { you: '"What did we change since yesterday?"', claude: 'git log --oneline --since=yesterday' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3">
              <p className="text-gray-200 text-sm"><span className="text-rose-400 font-semibold">You:</span> {item.you}</p>
              <p className="text-gray-500 text-xs font-mono mt-1">Claude Code runs: <span className="text-emerald-400">{item.claude}</span></p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: 'customize-customer',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm font-mono">Step 4</span>
          <h2 className="text-3xl font-bold">Customize for a customer</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-rose-400 font-semibold text-lg mb-3">What you say</h3>
              <div className="code-block text-sm">
                <p className="text-gray-200 italic">"Create a branch for ACME Retail.</p>
                <p className="text-gray-200 italic mt-2">Customize the demo for them:</p>
                <p className="text-gray-200 italic">- Change products to luxury fashion</p>
                <p className="text-gray-200 italic">- Update colors to navy #1a237e and gold #ffd700</p>
                <p className="text-gray-200 italic">- Make the agent a personal style advisor</p>
                <p className="text-gray-200 italic mt-2">Commit and push when done."</p>
              </div>
            </div>
            <div className="card">
              <h3 className="text-cyan-400 font-semibold mb-2">Why branches</h3>
              <p className="text-gray-400 text-sm">Your base demo stays untouched on main. Each customer gets their own version. Switch between them anytime.</p>
            </div>
          </div>
          <div>
            <div className="card mb-4">
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Claude Code will</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex gap-2"><span className="text-emerald-400">✓</span> Create branch customer/acme-retail</p>
                <p className="flex gap-2"><span className="text-emerald-400">✓</span> Replace product data</p>
                <p className="flex gap-2"><span className="text-emerald-400">✓</span> Update CSS colors</p>
                <p className="flex gap-2"><span className="text-emerald-400">✓</span> Rewrite agent personality</p>
                <p className="flex gap-2"><span className="text-emerald-400">✓</span> Commit: "Customize for ACME Retail"</p>
                <p className="flex gap-2"><span className="text-emerald-400">✓</span> Push the branch to GitHub</p>
              </div>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Don't like it?</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-200 italic">"Switch back to main"</p>
                <p className="text-gray-200 italic">"Delete that branch"</p>
                <p className="text-gray-200 italic">"Try again with a sporty vibe instead"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'iterate',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm font-mono">Step 5</span>
          <h2 className="text-3xl font-bold">Improve after each demo</h2>
        </div>
        <div className="card mb-6">
          <p className="text-gray-300 mb-4">After presenting to a customer, you learn what worked. Tell Claude Code to make it better — it changes the code and commits.</p>
          <div className="space-y-3">
            {[
              { prompt: '"The checkout was confusing — simplify it to 2 steps. Commit when done."', commit: 'Simplify checkout to 2-step flow' },
              { prompt: '"Add a loading animation when the agent is thinking. Commit and push."', commit: 'Add thinking indicator to agent responses' },
              { prompt: '"The customer asked about returns — add that to the agent. Commit."', commit: 'Add returns handling to agent' },
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
            Each improvement is automatically committed. Your demo gets better after every customer meeting — and you can always go back to any previous version.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'share-with-team',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-sm font-mono">Step 6</span>
          <h2 className="text-3xl font-bold">Share with your team</h2>
        </div>
        <p className="text-gray-400 text-lg mb-6">Your demo is on GitHub. Here's how a colleague uses it:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">They start Claude Code in the repo</h3>
            <div className="code-block text-sm">
              <p className="text-rose-400">git clone https://github.com/you/commerce-agent-demo</p>
              <p className="text-rose-400">cd commerce-agent-demo</p>
              <p className="text-rose-400">npm install</p>
              <p className="text-rose-400">claude</p>
            </div>
            <p className="text-gray-500 text-sm mt-3">Or even simpler — they tell Claude Code:</p>
            <div className="bg-gray-900 rounded-lg p-3 mt-2 text-sm">
              <p className="text-gray-200 italic">"Clone the commerce-agent-demo repo from my-org, install it, and start it so I can preview the demo"</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">They can customize too</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-gray-900 rounded-lg p-3">
                <p className="text-gray-200 italic">"Create a branch for my BigRetail meeting and add grocery products. Push when done."</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-3">
                <p className="text-gray-200 italic">"Open a PR to merge the grocery data into main — it's useful for everyone."</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-3">Claude Code creates the PR. You review it on GitHub and merge.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'practical-tips',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Tips for working with Claude Code</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="text-rose-400 font-semibold mb-3">Say "commit" after each step</h3>
            <p className="text-gray-400 text-sm mb-2">Build in small steps, commit each one:</p>
            <div className="code-block !p-3 text-sm">
              <p className="text-gray-200 italic">"Add the product search. Commit."</p>
              <p className="text-gray-200 italic mt-1">"Add the chat UI. Commit."</p>
              <p className="text-gray-200 italic mt-1">"Add sample data. Commit and push."</p>
            </div>
            <p className="text-gray-500 text-xs mt-2">If something breaks, say "undo last commit".</p>
          </div>
          <div className="card">
            <h3 className="text-rose-400 font-semibold mb-3">Add a CLAUDE.md file</h3>
            <p className="text-gray-400 text-sm mb-2">Give Claude Code permanent context about your project:</p>
            <div className="code-block !p-3 text-sm">
              <p className="text-gray-200 italic">"Create a CLAUDE.md that says: this is a</p>
              <p className="text-gray-200 italic">pre-sales demo, keep it simple, no auth,</p>
              <p className="text-gray-200 italic">no database, must run with npm start,</p>
              <p className="text-gray-200 italic">target audience is retail executives."</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-rose-400 font-semibold mb-3">Never commit secrets</h3>
            <p className="text-gray-400 text-sm mb-2">If your demo needs API keys:</p>
            <div className="code-block !p-3 text-sm">
              <p className="text-gray-200 italic">"Create a .env.example with placeholder</p>
              <p className="text-gray-200 italic">values and make sure .env is in .gitignore"</p>
            </div>
            <p className="text-gray-500 text-xs mt-2">Claude Code knows to do this, but good to be explicit.</p>
          </div>
          <div className="card">
            <h3 className="text-rose-400 font-semibold mb-3">Use branches for experiments</h3>
            <p className="text-gray-400 text-sm mb-2">Trying something risky?</p>
            <div className="code-block !p-3 text-sm">
              <p className="text-gray-200 italic">"Create a branch called experiment/voice-ui</p>
              <p className="text-gray-200 italic">and try adding voice input to the chat"</p>
              <p className="text-gray-500 mt-2"># Didn't work?</p>
              <p className="text-gray-200 italic">"Switch back to main and delete that branch"</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'full-session',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">A complete session from zero</h2>
        <p className="text-gray-400 mb-4">From empty folder to shared demo — everything you type:</p>
        <div className="space-y-2">
          {[
            { step: '1', who: 'terminal', text: 'mkdir commerce-agent-demo && cd commerce-agent-demo && claude' },
            { step: '2', who: 'you', text: '"Build a commerce agent demo with chat UI, product search, and 10 sample products. Runs with npm start."' },
            { step: '3', who: 'claude', text: 'Creates files, installs dependencies, tests it works' },
            { step: '4', who: 'you', text: '"Create a GitHub repo and push everything"' },
            { step: '5', who: 'claude', text: 'Inits Git, creates repo, commits, pushes' },
            { step: '6', who: 'you', text: '"Create a branch for ACME, change branding to navy and gold, commit and push"' },
            { step: '7', who: 'claude', text: 'Creates branch, edits code, commits, pushes' },
            { step: '8', who: 'you', text: '"Switch back to main"' },
            { step: '9', who: 'you', text: '"The demo needs a loading indicator, add one and push"' },
            { step: '10', who: 'claude', text: 'Adds animation, commits, pushes to main' },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-mono text-xs shrink-0">{item.step}</span>
              <span className={`px-2 py-0.5 rounded text-xs font-mono shrink-0 ${
                item.who === 'you' ? 'bg-rose-500/20 text-rose-400' :
                item.who === 'claude' ? 'bg-emerald-500/20 text-emerald-400' :
                'bg-gray-700 text-gray-400'
              }`}>{item.who}</span>
              <span className={`text-xs md:text-sm ${item.who === 'you' ? 'text-gray-200 italic' : 'text-gray-500'}`}>{item.text}</span>
            </div>
          ))}
        </div>
        <div className="card mt-4">
          <p className="text-gray-400 text-center text-sm">
            Total time: ~10 minutes. Your colleague can now clone the repo, <code className="bg-gray-700 px-1 rounded">npm install && npm start</code>, and run the demo.
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
          You describe what you want. Claude Code builds it, versions it, and shares it.
        </p>
        <div className="grid md:grid-cols-4 gap-3 max-w-3xl mb-8">
          <div className="card !p-4">
            <p className="text-xl mb-1">📝</p>
            <p className="text-rose-400 font-semibold text-xs">Describe</p>
            <p className="text-gray-500 text-xs">what to build</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">🤖</p>
            <p className="text-rose-400 font-semibold text-xs">Claude Code</p>
            <p className="text-gray-500 text-xs">builds it</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">💾</p>
            <p className="text-rose-400 font-semibold text-xs">"Commit"</p>
            <p className="text-gray-500 text-xs">saves it</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">⬆️</p>
            <p className="text-rose-400 font-semibold text-xs">"Push"</p>
            <p className="text-gray-500 text-xs">shares it</p>
          </div>
        </div>
        <div className="card max-w-lg">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Everything through conversation</h3>
          <div className="text-left text-sm space-y-1">
            <p><span className="text-gray-200 italic">"Build me a demo that..."</span> <span className="text-gray-500">— creates the app</span></p>
            <p><span className="text-gray-200 italic">"Create a GitHub repo and push"</span> <span className="text-gray-500">— shares it</span></p>
            <p><span className="text-gray-200 italic">"Create a branch for ACME"</span> <span className="text-gray-500">— customer version</span></p>
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
