import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Setup
        </h1>
        <p className="text-2xl text-gray-400">
          Get Git and GitHub ready on your computer
        </p>
        <p className="text-lg text-gray-600 mt-4">One time. Takes 10 minutes.</p>
      </div>
    ),
  },

  {
    id: 'what-we-need',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Three things to set up</h2>
        <div className="space-y-6 text-2xl text-left max-w-lg">
          <p className="text-gray-300"><span className="text-emerald-400 font-semibold">1.</span> A GitHub account (free)</p>
          <p className="text-gray-300"><span className="text-emerald-400 font-semibold">2.</span> Git on your computer</p>
          <p className="text-gray-300"><span className="text-emerald-400 font-semibold">3.</span> Tell Git who you are</p>
        </div>
        <p className="text-xl text-gray-500 mt-10">After this, you never do it again.</p>
      </div>
    ),
  },

  {
    id: 'step-1-account',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Create a GitHub account</h2>
        <div className="max-w-xl w-full space-y-4 text-xl text-gray-300">
          <p><span className="text-emerald-400 font-semibold">1.</span> Go to <span className="text-emerald-400 font-mono">github.com</span></p>
          <p><span className="text-emerald-400 font-semibold">2.</span> Click "Sign up"</p>
          <p><span className="text-emerald-400 font-semibold">3.</span> Use your work email</p>
          <p><span className="text-emerald-400 font-semibold">4.</span> Pick a username (your name works)</p>
          <p><span className="text-emerald-400 font-semibold">5.</span> Create a password</p>
          <p><span className="text-emerald-400 font-semibold">6.</span> Check your email and verify</p>
        </div>
        <p className="text-lg text-gray-500 mt-8 text-center">Free plan. That's all you need.</p>
        <p className="text-lg text-gray-600 mt-2 text-center">Already have one? Skip to Step 2.</p>
      </div>
    ),
  },

  {
    id: 'step-2-install-mac',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Install Git (Mac)</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"xcode-select --install"} />
          <p className="text-emerald-400 font-mono">xcode-select --install</p>
        </div>
        <div className="mt-8 max-w-xl text-center space-y-4">
          <p className="text-xl text-gray-400">A popup appears. Click "Install". Wait 2-5 minutes.</p>
          <div className="card">
            <p className="text-gray-500 text-lg">Where is Terminal?</p>
            <p className="text-gray-300 text-lg mt-1">Press <span className="font-mono">Cmd + Space</span> → type "Terminal" → Enter</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-2-install-windows',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Install Git (Windows)</h2>
        <div className="max-w-xl w-full text-center space-y-6">
          <div className="space-y-4 text-xl text-gray-300">
            <p><span className="text-emerald-400 font-semibold">1.</span> Go to <span className="text-emerald-400 font-mono">git-scm.com</span></p>
            <p><span className="text-emerald-400 font-semibold">2.</span> Click "Download for Windows"</p>
            <p><span className="text-emerald-400 font-semibold">3.</span> Run the installer</p>
            <p><span className="text-emerald-400 font-semibold">4.</span> Click Next, Next, Next... (keep defaults)</p>
            <p><span className="text-emerald-400 font-semibold">5.</span> Click Install</p>
          </div>
          <div className="card">
            <p className="text-gray-500 text-lg">After installing, use "Git Bash" as your terminal</p>
            <p className="text-gray-300 text-lg mt-1">It gets installed alongside Git</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-2-verify',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Check: did it work?</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git --version"} />
          <p className="text-emerald-400 font-mono">git --version</p>
        </div>
        <div className="mt-8 max-w-xl text-center">
          <p className="text-xl text-gray-400 mb-4">You should see something like:</p>
          <p className="text-xl text-gray-300 font-mono">git version 2.39.0</p>
          <p className="text-lg text-gray-500 mt-6">The number doesn't matter. If you see it, Git is installed.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-3-name',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 3: Tell Git your name</h2>
        <div className="code-block text-xl relative max-w-2xl w-full space-y-3">
          <CopyButton text={'git config --global user.name "Your Name"\ngit config --global user.email "you@company.com"'} />
          <p className="text-emerald-400 font-mono">git config --global user.name "Your Name"</p>
          <p className="text-emerald-400 font-mono">git config --global user.email "you@company.com"</p>
        </div>
        <div className="mt-8 max-w-xl text-center">
          <p className="text-xl text-gray-400">Replace with your real name and your work email.</p>
          <p className="text-lg text-gray-500 mt-4">This labels your saves so people know who made them.</p>
          <p className="text-lg text-gray-600 mt-2">Use the same email as your GitHub account.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-4-gh-cli',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 4: Install GitHub CLI</h2>
        <p className="text-xl text-gray-400 mb-6 text-center max-w-xl">This lets you create repos and push from the terminal.</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl w-full">
          <div className="card text-center">
            <p className="text-lg text-gray-300 font-semibold mb-3">Mac</p>
            <div className="code-block !p-3 relative">
              <CopyButton text={"brew install gh"} />
              <p className="text-emerald-400 font-mono">brew install gh</p>
            </div>
            <p className="text-gray-600 text-sm mt-2">No Homebrew? Get it at brew.sh</p>
          </div>
          <div className="card text-center">
            <p className="text-lg text-gray-300 font-semibold mb-3">Windows</p>
            <div className="code-block !p-3 relative">
              <CopyButton text={"winget install --id GitHub.cli"} />
              <p className="text-emerald-400 font-mono">winget install --id GitHub.cli</p>
            </div>
            <p className="text-gray-600 text-sm mt-2">Or download from cli.github.com</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-5-login',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 5: Log in</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"gh auth login"} />
          <p className="text-emerald-400 font-mono">gh auth login</p>
        </div>
        <div className="mt-8 max-w-xl text-center space-y-4">
          <p className="text-xl text-gray-400">It asks you questions. Pick these:</p>
          <div className="text-lg text-left max-w-sm mx-auto space-y-2">
            <p className="text-gray-300">Where? → <span className="text-emerald-400 font-semibold">GitHub.com</span></p>
            <p className="text-gray-300">Protocol? → <span className="text-emerald-400 font-semibold">HTTPS</span></p>
            <p className="text-gray-300">How? → <span className="text-emerald-400 font-semibold">Login with a web browser</span></p>
          </div>
          <p className="text-lg text-gray-500">It opens your browser. Log in and say yes.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'final-check',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Final check</h2>
        <div className="code-block text-xl relative max-w-2xl w-full space-y-4">
          <CopyButton text={"git --version\ngh auth status"} />
          <p className="text-emerald-400 font-mono">git --version</p>
          <p className="text-gray-500"># git version 2.x.x ✓</p>
          <p className="text-emerald-400 font-mono mt-2">gh auth status</p>
          <p className="text-gray-500"># Logged in to github.com ✓</p>
        </div>
        <p className="text-2xl text-emerald-400 font-semibold mt-8 text-center">
          Both work? You're ready.
        </p>
      </div>
    ),
  },

  {
    id: 'done',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Setup complete!
        </h1>
        <div className="space-y-3 text-2xl text-gray-400 max-w-md">
          <p><span className="text-emerald-400">✓</span> GitHub account</p>
          <p><span className="text-emerald-400">✓</span> Git installed</p>
          <p><span className="text-emerald-400">✓</span> Git knows your name</p>
          <p><span className="text-emerald-400">✓</span> GitHub CLI logged in</p>
        </div>
        <p className="text-xl text-gray-600 mt-8">You'll never do this again. Let's build something.</p>
      </div>
    ),
  },
]

export default function Setup({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
