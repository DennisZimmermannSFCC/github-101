import SlideViewer from '../components/SlideViewer'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">👋</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
          Hello World
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Your very first GitHub repository in 5 minutes
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">No experience needed</p>
          <p className="text-gray-500 mt-2">Just a browser and a free GitHub account</p>
        </div>
      </div>
    ),
  },

  {
    id: 'what-is-github',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">What is GitHub?</h2>
        <div className="card mb-6">
          <p className="text-xl text-gray-300 leading-relaxed">
            Think of GitHub as <span className="highlight">Google Drive for projects</span> — but with a superpower:
            it remembers every change you ever made.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <p className="text-2xl mb-2">📁</p>
            <h3 className="text-gray-200 font-semibold mb-1">Files in the cloud</h3>
            <p className="text-gray-400 text-sm">Your work is saved online, accessible from anywhere</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">⏪</p>
            <h3 className="text-gray-200 font-semibold mb-1">Full history</h3>
            <p className="text-gray-400 text-sm">You can always go back to any previous version</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">🤝</p>
            <h3 className="text-gray-200 font-semibold mb-1">Built for sharing</h3>
            <p className="text-gray-400 text-sm">Colleagues can see, use, and improve your work</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">🌐</p>
            <h3 className="text-gray-200 font-semibold mb-1">Works in the browser</h3>
            <p className="text-gray-400 text-sm">No software to install — just github.com</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'what-we-build',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">What we'll build today</h2>
        <p className="text-gray-400 text-lg mb-6">
          A tiny project with two files — enough to learn the fundamentals.
        </p>
        <div className="code-block text-lg mb-6">
          <p className="text-amber-400">my-first-repo/</p>
          <p className="ml-4 text-gray-300">├── <span className="text-emerald-400">README.md</span></p>
          <p className="ml-4 text-gray-300">└── <span className="text-emerald-400">demo-script.md</span></p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="highlight mb-2">README.md</h3>
            <p className="text-gray-400 text-sm">The front page of your project. GitHub displays it automatically when someone visits your repository.</p>
          </div>
          <div className="card">
            <h3 className="text-amber-400 font-semibold mb-2">demo-script.md</h3>
            <p className="text-gray-400 text-sm">A second file — proves you can add anything you want to a repo.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-1-signup',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-mono">Step 1</span>
          <h2 className="text-3xl font-bold">Create a GitHub account</h2>
        </div>
        <div className="card mb-6">
          <h3 className="highlight text-lg mb-3">What we do</h3>
          <p className="text-gray-300 text-lg">Go to <span className="text-amber-400 font-mono">github.com</span> and sign up for a free account.</p>
        </div>
        <div className="card mb-6">
          <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
          <p className="text-gray-400">GitHub is where your files will live. A free account gives you unlimited repositories — public or private.</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along</h3>
          <ol className="space-y-2 text-gray-300">
            <li><span className="highlight">1.</span> Open <span className="font-mono text-amber-400">github.com</span></li>
            <li><span className="highlight">2.</span> Click "Sign up"</li>
            <li><span className="highlight">3.</span> Enter your email, create a password, pick a username</li>
            <li><span className="highlight">4.</span> Verify your email</li>
          </ol>
          <p className="text-gray-500 text-sm mt-4">Already have an account? Skip to the next step.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-2-create-repo',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-mono">Step 2</span>
          <h2 className="text-3xl font-bold">Create your first repository</h2>
        </div>
        <div className="card mb-6">
          <h3 className="highlight text-lg mb-3">What we do</h3>
          <p className="text-gray-300">Create a new repository — this is the folder where your project lives on GitHub.</p>
        </div>
        <div className="card mb-6">
          <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
          <p className="text-gray-400">A repository (or "repo") is your project's home. It holds all your files and tracks every change.</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along</h3>
          <ol className="space-y-2 text-gray-300">
            <li><span className="highlight">1.</span> Click the <span className="font-mono bg-gray-700 px-1 rounded">+</span> icon in the top-right corner</li>
            <li><span className="highlight">2.</span> Select "New repository"</li>
            <li><span className="highlight">3.</span> Name it: <span className="font-mono text-amber-400">my-first-repo</span></li>
            <li><span className="highlight">4.</span> Check <span className="font-mono bg-gray-700 px-1 rounded">Add a README file</span></li>
            <li><span className="highlight">5.</span> Click <span className="text-emerald-400 font-semibold">"Create repository"</span></li>
          </ol>
        </div>
      </div>
    ),
  },

  {
    id: 'step-3-edit-readme',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-mono">Step 3</span>
          <h2 className="text-3xl font-bold">Edit the README</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="highlight text-lg mb-3">What we do</h3>
              <p className="text-gray-300">Replace the default README with something meaningful.</p>
            </div>
            <div className="code-block text-sm">
              <p className="text-amber-400"># My First Repo</p>
              <p className="text-gray-400 mt-2">This is my first GitHub repository!</p>
              <p className="text-gray-400 mt-2">## What's here</p>
              <p className="text-gray-400">- A README (this file)</p>
              <p className="text-gray-400">- A demo script for presentations</p>
              <p className="text-gray-400 mt-2">## About me</p>
              <p className="text-gray-400">I'm learning GitHub to manage and</p>
              <p className="text-gray-400">share my demo assets with colleagues.</p>
            </div>
          </div>
          <div>
            <div className="card mb-4">
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
              <p className="text-gray-400">The README is what people see first. It tells visitors what this project is and why it exists.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along</h3>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li><span className="highlight">1.</span> Click the pencil icon on README.md</li>
                <li><span className="highlight">2.</span> Delete the default text</li>
                <li><span className="highlight">3.</span> Type your own content (copy from left)</li>
                <li><span className="highlight">4.</span> Click "Commit changes"</li>
                <li><span className="highlight">5.</span> Add message: "Update README with project description"</li>
                <li><span className="highlight">6.</span> Click "Commit changes" again</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-4-add-file',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-mono">Step 4</span>
          <h2 className="text-3xl font-bold">Add a demo script</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="highlight text-lg mb-3">What we do</h3>
              <p className="text-gray-300">Create a new file called <span className="font-mono text-amber-400">demo-script.md</span></p>
            </div>
            <div className="code-block text-sm">
              <p className="text-amber-400"># Demo Script</p>
              <p className="text-gray-400 mt-2">## Opening</p>
              <p className="text-gray-400">Welcome the customer and introduce</p>
              <p className="text-gray-400">the product.</p>
              <p className="text-gray-400 mt-2">## Main Demo</p>
              <p className="text-gray-400">1. Show the dashboard</p>
              <p className="text-gray-400">2. Walk through the key feature</p>
              <p className="text-gray-400">3. Highlight the integration</p>
              <p className="text-gray-400 mt-2">## Closing</p>
              <p className="text-gray-400">Summarize value and discuss next steps.</p>
            </div>
          </div>
          <div>
            <div className="card mb-4">
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
              <p className="text-gray-400">This proves GitHub isn't just for code — any text file works. Markdown files get nicely formatted automatically.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along</h3>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li><span className="highlight">1.</span> Click "Add file" → "Create new file"</li>
                <li><span className="highlight">2.</span> Type the filename: <code className="bg-gray-700 px-1 rounded">demo-script.md</code></li>
                <li><span className="highlight">3.</span> Paste or type the content</li>
                <li><span className="highlight">4.</span> Click "Commit changes"</li>
                <li><span className="highlight">5.</span> Message: "Add demo script"</li>
                <li><span className="highlight">6.</span> Click "Commit changes"</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'what-happened',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">What just happened?</h2>
        <p className="text-gray-400 text-lg mb-6">You made three <span className="highlight">commits</span> — three saved snapshots of your project:</p>
        <div className="space-y-4 mb-8">
          {[
            { num: '1', msg: 'Initial commit', desc: 'GitHub created the repo with a README' },
            { num: '2', msg: 'Update README with project description', desc: 'You edited the README' },
            { num: '3', msg: 'Add demo script', desc: 'You added a new file' },
          ].map((c) => (
            <div key={c.num} className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-sm shrink-0">{c.num}</span>
              <div className="card flex-1 !py-3">
                <p className="text-gray-200 font-mono text-sm">{c.msg}</p>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="card">
          <p className="text-gray-300 text-center">
            You can click the <span className="font-mono bg-gray-700 px-1 rounded">commits</span> link on your repo page to see this history.
            You can go back to any of these snapshots at any time.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'you-did-it',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">You did it!</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-xl">
          You just created a GitHub repository, edited a file, and added a new one.
        </p>
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mb-8">
          <div className="card">
            <p className="text-2xl mb-2">📦</p>
            <p className="text-gray-300 text-sm">Created a repo</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">✏️</p>
            <p className="text-gray-300 text-sm">Edited a file</p>
          </div>
          <div className="card">
            <p className="text-2xl mb-2">➕</p>
            <p className="text-gray-300 text-sm">Added a file</p>
          </div>
        </div>
        <div className="card max-w-lg">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Ready for more?</h3>
          <p className="text-gray-400">
            Check out the <span className="highlight">GitHub 101</span> presentation to learn about branches,
            pull requests, and team collaboration.
          </p>
        </div>
      </div>
    ),
  },
]

export default function HelloWorld({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
