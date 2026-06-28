import SlideViewer from '../components/SlideViewer'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Git & GitHub
        </h1>
        <p className="text-2xl text-gray-400">
          What they are, why they matter
        </p>
      </div>
    ),
  },

  {
    id: 'the-problem',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">The problem</h2>
        <div className="space-y-4 text-2xl text-gray-400 max-w-2xl text-left">
          <p>You build a great demo.</p>
          <p>A colleague asks for it. You email a ZIP.</p>
          <p>They improve it. You never get those changes back.</p>
          <p>You make your own changes. Now there are 2 versions.</p>
          <p>Nobody knows which one is current.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'two-things',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Two tools, two jobs</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl w-full">
          <div className="card text-center">
            <p className="text-5xl mb-4">💾</p>
            <h3 className="text-3xl font-bold text-emerald-400 mb-2">Git</h3>
            <p className="text-xl text-gray-400">Runs on your computer</p>
          </div>
          <div className="card text-center">
            <p className="text-5xl mb-4">🌐</p>
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">GitHub</h3>
            <p className="text-xl text-gray-400">Lives on the internet</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'what-is-git',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">What is Git?</h2>
        <p className="text-2xl text-gray-300 max-w-2xl mb-10">
          A save system for your files — but smarter.
        </p>
        <div className="space-y-6 text-xl max-w-xl text-left">
          <div className="flex items-start gap-4">
            <span className="text-2xl">💾</span>
            <p className="text-gray-300">Save your work at any point (a "commit")</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📜</span>
            <p className="text-gray-300">See the full history of every change</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">⏪</span>
            <p className="text-gray-300">Go back to any previous save</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🌿</span>
            <p className="text-gray-300">Try things without breaking the original</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'git-analogy',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Think of Git like...</h2>
        <div className="max-w-2xl text-2xl text-gray-300 space-y-8">
          <p><span className="text-emerald-400 font-semibold">Ctrl+Z</span> — but for your entire project, forever</p>
          <p><span className="text-emerald-400 font-semibold">Track Changes</span> — but for any type of file</p>
          <p><span className="text-emerald-400 font-semibold">A time machine</span> — for your work</p>
        </div>
        <p className="text-xl text-gray-500 mt-12">It works on your computer. No internet needed.</p>
      </div>
    ),
  },

  {
    id: 'what-is-github',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">What is GitHub?</h2>
        <p className="text-2xl text-gray-300 max-w-2xl mb-10">
          A place on the internet to store your Git projects — and share them.
        </p>
        <div className="space-y-6 text-xl max-w-xl text-left">
          <div className="flex items-start gap-4">
            <span className="text-2xl">☁️</span>
            <p className="text-gray-300">Your files backed up online</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔗</span>
            <p className="text-gray-300">A link you can send to anyone</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">👥</span>
            <p className="text-gray-300">Colleagues can see, clone, and improve your work</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔒</span>
            <p className="text-gray-300">Private or public — you choose who sees it</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'github-analogy',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Think of GitHub like...</h2>
        <div className="max-w-2xl text-2xl text-gray-300 space-y-8">
          <p><span className="text-cyan-400 font-semibold">Google Drive</span> — but with full version history</p>
          <p><span className="text-cyan-400 font-semibold">Dropbox</span> — but you control exactly what syncs</p>
          <p><span className="text-cyan-400 font-semibold">A shared folder</span> — where nobody's changes get lost</p>
        </div>
        <p className="text-xl text-gray-500 mt-12">It needs internet. That's where the sharing happens.</p>
      </div>
    ),
  },

  {
    id: 'together',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">How they work together</h2>
        <div className="max-w-2xl w-full space-y-4">
          <div className="flex items-center gap-4 text-xl">
            <span className="text-emerald-400 font-mono w-28 shrink-0 text-right">You</span>
            <span className="text-gray-600">→</span>
            <span className="text-gray-300">edit files on your computer</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <span className="text-emerald-400 font-mono w-28 shrink-0 text-right">Git</span>
            <span className="text-gray-600">→</span>
            <span className="text-gray-300">saves snapshots locally</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <span className="text-cyan-400 font-mono w-28 shrink-0 text-right">GitHub</span>
            <span className="text-gray-600">→</span>
            <span className="text-gray-300">stores them online for everyone</span>
          </div>
        </div>
        <div className="mt-10 text-2xl text-gray-500">
          <p>Git saves. GitHub shares.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'collaboration',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Collaboration</h2>
        <p className="text-2xl text-gray-400 mb-10 max-w-xl">Multiple people working on the same project, without chaos.</p>
        <div className="space-y-4 text-xl max-w-2xl text-left">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📤</span>
            <p className="text-gray-300">You push your changes to GitHub</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📥</span>
            <p className="text-gray-300">A colleague pulls them to their computer</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">✏️</span>
            <p className="text-gray-300">They improve it and push back</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📥</span>
            <p className="text-gray-300">You pull their improvements</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">✅</span>
            <p className="text-gray-300">Everyone always has the latest version</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'reusability',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Reusability</h2>
        <p className="text-2xl text-gray-400 mb-10 max-w-xl">Build once, use many times.</p>
        <div className="space-y-6 text-xl max-w-2xl text-left">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📦</span>
            <p className="text-gray-300">One base demo on GitHub</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏢</span>
            <p className="text-gray-300">Clone it for Customer A — customize</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏪</span>
            <p className="text-gray-300">Clone it for Customer B — different customization</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔄</span>
            <p className="text-gray-300">Improve the base — everyone gets the improvement</p>
          </div>
        </div>
        <p className="text-xl text-gray-500 mt-10">Your work compounds instead of getting lost.</p>
      </div>
    ),
  },

  {
    id: 'before-after',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Before vs. After</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl w-full">
          <div className="card">
            <h3 className="text-2xl font-bold text-red-400 mb-4">Before</h3>
            <div className="space-y-2 text-lg text-gray-400 text-left">
              <p>Email ZIP files around</p>
              <p>"Which version is latest?"</p>
              <p>Changes overwrite each other</p>
              <p>New person: "where do I find the demo?"</p>
              <p>Build from scratch every time</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">After</h3>
            <div className="space-y-2 text-lg text-gray-400 text-left">
              <p>One link to the repo</p>
              <p>Full history — always clear</p>
              <p>Changes merge cleanly</p>
              <p>New person: clone and run</p>
              <p>Reuse and customize the base</p>
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
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">In short</h2>
        <div className="space-y-8 text-2xl max-w-2xl">
          <p><span className="text-emerald-400 font-bold">Git</span> <span className="text-gray-400">saves your work so you never lose anything</span></p>
          <p><span className="text-cyan-400 font-bold">GitHub</span> <span className="text-gray-400">puts it online so your team can use it</span></p>
          <p><span className="text-amber-400 font-bold">Together</span> <span className="text-gray-400">you collaborate without chaos and reuse without rebuilding</span></p>
        </div>
      </div>
    ),
  },
]

export default function WhatIsGit({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
