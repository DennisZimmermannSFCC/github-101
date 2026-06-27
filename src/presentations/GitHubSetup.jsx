import SlideViewer from '../components/SlideViewer'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">⚙️</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
          GitHub Setup
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Everything you need to install before using GitHub
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">One-time setup — takes about 15 minutes</p>
          <p className="text-gray-500 mt-2">After this, you're ready for all other tutorials</p>
        </div>
      </div>
    ),
  },

  {
    id: 'overview',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">What we'll set up</h2>
        <div className="space-y-4">
          {[
            { num: '1', title: 'GitHub account', desc: 'Where your projects live online', time: '3 min' },
            { num: '2', title: 'Git', desc: 'The version control tool that runs on your machine', time: '3 min' },
            { num: '3', title: 'Git identity', desc: 'Tell Git your name and email', time: '1 min' },
            { num: '4', title: 'GitHub CLI', desc: 'Create repos and PRs from your terminal', time: '5 min' },
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono text-sm shrink-0">{item.num}</span>
              <div className="flex-1">
                <span className="text-gray-200 font-semibold">{item.title}</span>
                <span className="text-gray-500 ml-2 text-sm">— {item.desc}</span>
              </div>
              <span className="text-gray-600 text-sm">~{item.time}</span>
            </div>
          ))}
        </div>
        <div className="card mt-8">
          <p className="text-gray-400 text-center">
            You only do this once. After that, everything just works.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'github-account',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono">Step 1</span>
          <h2 className="text-3xl font-bold">Create a GitHub account</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-blue-400 font-semibold text-lg mb-3">What to do</h3>
              <ol className="space-y-3 text-gray-300">
                <li><span className="text-blue-400 font-semibold">1.</span> Go to <span className="text-blue-400 font-mono">github.com</span></li>
                <li><span className="text-blue-400 font-semibold">2.</span> Click "Sign up"</li>
                <li><span className="text-blue-400 font-semibold">3.</span> Enter your email</li>
                <li><span className="text-blue-400 font-semibold">4.</span> Create a password</li>
                <li><span className="text-blue-400 font-semibold">5.</span> Choose a username</li>
                <li><span className="text-blue-400 font-semibold">6.</span> Verify your email</li>
              </ol>
            </div>
          </div>
          <div>
            <div className="card mb-4">
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why</h3>
              <p className="text-gray-400">GitHub is where your files live online. It's free, it backs up your work, and it lets you share with colleagues.</p>
            </div>
            <div className="card">
              <h3 className="text-gray-200 font-semibold mb-2">Tips</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Use your work email</li>
                <li>• Pick a professional username (your name works)</li>
                <li>• The free plan is all you need</li>
                <li>• Already have an account? Skip to Step 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'install-git',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono">Step 2</span>
          <h2 className="text-3xl font-bold">Install Git</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-blue-400 font-semibold text-lg mb-4">Mac</h3>
            <p className="text-gray-400 text-sm mb-3">Open Terminal and run:</p>
            <div className="code-block">
              <p className="text-blue-400">xcode-select --install</p>
            </div>
            <p className="text-gray-500 text-sm mt-3">A popup appears — click "Install". Wait for it to finish (2-5 min).</p>
            <div className="mt-4 bg-gray-900 rounded-lg p-3 text-sm">
              <p className="text-gray-500">Where is Terminal?</p>
              <p className="text-gray-400 mt-1">Spotlight (Cmd+Space) → type "Terminal" → Enter</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-blue-400 font-semibold text-lg mb-4">Windows</h3>
            <p className="text-gray-400 text-sm mb-3">Download and install:</p>
            <div className="code-block">
              <p className="text-blue-400">https://git-scm.com/download/win</p>
            </div>
            <p className="text-gray-500 text-sm mt-3">Run the installer. Accept all defaults — just keep clicking Next.</p>
            <div className="mt-4 bg-gray-900 rounded-lg p-3 text-sm">
              <p className="text-gray-500">After installing, use "Git Bash" as your terminal</p>
              <p className="text-gray-400 mt-1">(it gets installed alongside Git)</p>
            </div>
          </div>
        </div>
        <div className="card mt-6">
          <h3 className="text-gray-200 font-semibold mb-2">Verify it worked</h3>
          <div className="code-block !p-3">
            <p className="text-blue-400">git --version</p>
            <p className="text-gray-500 mt-1"># Should show: git version 2.x.x</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'configure-git',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono">Step 3</span>
          <h2 className="text-3xl font-bold">Configure your Git identity</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-blue-400 font-semibold text-lg mb-3">Run these two commands</h3>
          <div className="code-block text-lg">
            <p className="text-blue-400">git config --global user.name "Your Name"</p>
            <p className="text-blue-400 mt-2">git config --global user.email "you@company.com"</p>
          </div>
          <p className="text-gray-500 text-sm mt-3">Replace with your actual name and the email you used for GitHub.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-cyan-400 font-semibold mb-2">Why</h3>
            <p className="text-gray-400 text-sm">Every change you save (commit) is labeled with your name and email. This is how your team knows who did what.</p>
          </div>
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-2">Verify</h3>
            <div className="code-block !p-3 text-sm">
              <p className="text-blue-400">git config --global user.name</p>
              <p className="text-gray-500"># Your Name</p>
              <p className="text-blue-400 mt-2">git config --global user.email</p>
              <p className="text-gray-500"># you@company.com</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'install-gh',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono">Step 4</span>
          <h2 className="text-3xl font-bold">Install GitHub CLI</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-blue-400 font-semibold text-lg mb-4">Mac</h3>
            <div className="code-block">
              <p className="text-blue-400">brew install gh</p>
            </div>
            <div className="mt-4 bg-gray-900 rounded-lg p-3 text-sm">
              <p className="text-gray-500">Don't have Homebrew?</p>
              <p className="text-gray-400 mt-1">Install it first from <span className="text-blue-400">brew.sh</span></p>
              <p className="text-gray-500 mt-2">Or download directly from</p>
              <p className="text-gray-400"><span className="text-blue-400">cli.github.com</span></p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-blue-400 font-semibold text-lg mb-4">Windows</h3>
            <div className="code-block">
              <p className="text-blue-400">winget install --id GitHub.cli</p>
            </div>
            <div className="mt-4 bg-gray-900 rounded-lg p-3 text-sm">
              <p className="text-gray-500">Or download the installer from</p>
              <p className="text-gray-400"><span className="text-blue-400">cli.github.com</span></p>
            </div>
          </div>
        </div>
        <div className="card mt-6">
          <h3 className="text-cyan-400 font-semibold mb-2">Why</h3>
          <p className="text-gray-400 text-sm">The GitHub CLI lets you create repositories, open pull requests, and more — all from your terminal. Without it, you'd have to do these steps manually on the GitHub website.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'login-gh',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono">Step 5</span>
          <h2 className="text-3xl font-bold">Log in to GitHub from your terminal</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-blue-400 font-semibold text-lg mb-3">Run this</h3>
          <div className="code-block text-lg">
            <p className="text-blue-400">gh auth login</p>
          </div>
        </div>
        <div className="card mb-6">
          <h3 className="text-gray-200 font-semibold mb-3">It will ask you questions — choose these</h3>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="text-gray-500 w-48 shrink-0">Where do you use GitHub?</span>
              <span className="text-blue-400 font-semibold">GitHub.com</span>
            </div>
            <div className="flex gap-3">
              <span className="text-gray-500 w-48 shrink-0">Preferred protocol?</span>
              <span className="text-blue-400 font-semibold">HTTPS</span>
            </div>
            <div className="flex gap-3">
              <span className="text-gray-500 w-48 shrink-0">Authenticate how?</span>
              <span className="text-blue-400 font-semibold">Login with a web browser</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">It opens your browser — log in and authorize the app.</p>
        </div>
        <div className="card">
          <h3 className="text-gray-200 font-semibold mb-2">Verify</h3>
          <div className="code-block !p-3">
            <p className="text-blue-400">gh auth status</p>
            <p className="text-gray-500 mt-1"># ✓ Logged in to github.com as YourUsername</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'verify-all',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Final check — run all of these</h2>
        <div className="card mb-6">
          <div className="code-block">
            <p className="text-blue-400">git --version</p>
            <p className="text-gray-500"># git version 2.x.x ✓</p>
            <p className="text-blue-400 mt-3">git config --global user.name</p>
            <p className="text-gray-500"># Your Name ✓</p>
            <p className="text-blue-400 mt-3">gh --version</p>
            <p className="text-gray-500"># gh version 2.x.x ✓</p>
            <p className="text-blue-400 mt-3">gh auth status</p>
            <p className="text-gray-500"># ✓ Logged in to github.com</p>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-300 text-center text-lg">
            All four pass? <span className="text-emerald-400 font-semibold">You're ready to go.</span>
          </p>
          <p className="text-gray-500 text-center text-sm mt-2">
            You can now follow along with any of the other tutorials.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'troubleshooting',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Troubleshooting</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="text-red-400 font-semibold mb-2">"git" is not recognized</h3>
            <p className="text-gray-400 text-sm">Git isn't installed or not in your PATH.</p>
            <p className="text-gray-500 text-sm mt-1">Windows: restart your terminal after installing. Mac: run the xcode-select command again.</p>
          </div>
          <div className="card">
            <h3 className="text-red-400 font-semibold mb-2">"gh" is not recognized</h3>
            <p className="text-gray-400 text-sm">GitHub CLI isn't installed.</p>
            <p className="text-gray-500 text-sm mt-1">Download from cli.github.com and restart your terminal.</p>
          </div>
          <div className="card">
            <h3 className="text-red-400 font-semibold mb-2">gh auth login fails</h3>
            <p className="text-gray-400 text-sm">Browser didn't open or authorization failed.</p>
            <p className="text-gray-500 text-sm mt-1">Try again. If browser doesn't open, copy the URL it shows and paste it manually.</p>
          </div>
          <div className="card">
            <h3 className="text-red-400 font-semibold mb-2">"brew" is not recognized (Mac)</h3>
            <p className="text-gray-400 text-sm">Homebrew isn't installed.</p>
            <p className="text-gray-500 text-sm mt-1">Go to brew.sh and follow the install instructions, or download gh directly from cli.github.com.</p>
          </div>
        </div>
      </div>
    ),
  },
]

export default function GitHubSetup({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
