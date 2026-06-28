import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Put Your Project<br />on GitHub
        </h1>
        <p className="text-2xl text-gray-400">
          Store it online so it's backed up and shareable
        </p>
        <p className="text-lg text-gray-600 mt-4">Starting from the website we built in the Git tutorial</p>
      </div>
    ),
  },

  {
    id: 'where-we-are',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Where we left off</h2>
        <div className="max-w-xl w-full text-left">
          <p className="text-xl text-gray-400 mb-6">You have a folder called <span className="text-emerald-400 font-mono">my-website</span> with:</p>
          <div className="space-y-3 text-2xl">
            <p className="text-emerald-400 font-mono">index.html</p>
            <p className="text-cyan-400 font-mono">style.css</p>
            <p className="text-amber-400 font-mono">README.md</p>
          </div>
          <p className="text-xl text-gray-400 mt-8">Git is tracking it. You have 2 commits.</p>
          <p className="text-xl text-gray-500 mt-2">Right now it only lives on your computer.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'why',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Why put it on GitHub?</h2>
        <div className="space-y-6 text-2xl text-gray-300 max-w-xl text-left">
          <div className="flex items-start gap-4">
            <span className="text-2xl">☁️</span>
            <p>Backed up — if your laptop dies, your work survives</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔗</span>
            <p>Shareable — send a link instead of a ZIP file</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏠</span>
            <p>One home — no more "which folder was it in?"</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-1-cd',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Go to your project</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"cd my-website"} />
          <p className="text-emerald-400 font-mono">cd my-website</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center">
          Open your terminal and navigate to the project folder.
        </p>
      </div>
    ),
  },

  {
    id: 'step-2-create-repo',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Create the repo on GitHub</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"gh repo create my-website --private --source=. --push"} />
          <p className="text-emerald-400 font-mono">gh repo create my-website --private --source=. --push</p>
        </div>
        <div className="mt-8 max-w-xl text-center">
          <p className="text-xl text-gray-400 mb-6">This one command does everything:</p>
          <div className="space-y-2 text-lg text-gray-300 text-left max-w-md mx-auto">
            <p><span className="text-emerald-400">✓</span> Creates a private repo on GitHub</p>
            <p><span className="text-emerald-400">✓</span> Connects your local folder to it</p>
            <p><span className="text-emerald-400">✓</span> Pushes all your commits up</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-3-check',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 3: See it online</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"gh repo view --web"} />
          <p className="text-emerald-400 font-mono">gh repo view --web</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          This opens your repo in the browser.
        </p>
        <div className="mt-8 max-w-md text-center">
          <p className="text-xl text-gray-400 mb-4">You should see:</p>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-emerald-400">✓</span> Your 3 files listed</p>
            <p><span className="text-emerald-400">✓</span> The README displayed below</p>
            <p><span className="text-emerald-400">✓</span> Your 2 commits in history</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'what-happened',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">What just happened</h2>
        <div className="max-w-xl w-full space-y-4">
          <div className="flex items-center gap-4 text-xl">
            <span className="text-emerald-400 font-mono w-32 shrink-0 text-right">Before</span>
            <span className="text-gray-600">→</span>
            <span className="text-gray-400">files only on your computer</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <span className="text-cyan-400 font-mono w-32 shrink-0 text-right">After</span>
            <span className="text-gray-600">→</span>
            <span className="text-gray-300">files on your computer AND on GitHub</span>
          </div>
        </div>
        <p className="text-xl text-gray-500 mt-10 max-w-md">
          Your local project and GitHub are now connected.<br />
          Changes you push will show up online.
        </p>
      </div>
    ),
  },

  {
    id: 'step-4-change-push',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 4: Make a change and push</h2>
        <p className="text-xl text-gray-400 mb-6 text-center">Edit index.html — change "Hello World!" to "Hello GitHub!" — then:</p>
        <div className="code-block text-2xl relative max-w-2xl w-full space-y-3">
          <CopyButton text={"git add .\ngit commit -m \"Change greeting\"\ngit push"} />
          <p className="text-emerald-400 font-mono">git add .</p>
          <p className="text-emerald-400 font-mono">git commit -m "Change greeting"</p>
          <p className="text-emerald-400 font-mono">git push</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center">
          Refresh your repo on GitHub — the change is there.
        </p>
      </div>
    ),
  },

  {
    id: 'the-pattern',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">The pattern</h2>
        <div className="space-y-4 text-2xl max-w-md">
          <p className="text-gray-300">Edit your files</p>
          <p className="text-gray-600">↓</p>
          <p className="text-emerald-400 font-mono">git add .</p>
          <p className="text-gray-600">↓</p>
          <p className="text-emerald-400 font-mono">git commit -m "message"</p>
          <p className="text-gray-600">↓</p>
          <p className="text-emerald-400 font-mono">git push</p>
          <p className="text-gray-600">↓</p>
          <p className="text-gray-300">It's on GitHub</p>
        </div>
        <p className="text-xl text-gray-500 mt-8">That's the whole workflow. Repeat forever.</p>
      </div>
    ),
  },

  {
    id: 'done',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Done!
        </h1>
        <p className="text-2xl text-gray-400 max-w-lg">
          Your project is on GitHub. Backed up, shareable, and always up to date with one command: <span className="text-emerald-400 font-mono">git push</span>
        </p>
      </div>
    ),
  },
]

export default function HandsOnPush({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
