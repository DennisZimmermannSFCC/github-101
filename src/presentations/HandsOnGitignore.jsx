import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          .gitignore
        </h1>
        <p className="text-2xl text-gray-400">
          Tell Git what NOT to save
        </p>
      </div>
    ),
  },

  {
    id: 'the-problem',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">The problem</h2>
        <div className="max-w-xl space-y-6 text-2xl text-left">
          <p className="text-gray-300">Some files should never be saved to Git:</p>
          <p className="text-red-400">• Passwords and API keys</p>
          <p className="text-red-400">• Huge folders (node_modules)</p>
          <p className="text-red-400">• Personal system files (.DS_Store)</p>
          <p className="text-red-400">• Files that can be re-generated (build output)</p>
        </div>
        <p className="text-xl text-gray-500 mt-10">If you push these, everyone gets them. Bad idea.</p>
      </div>
    ),
  },

  {
    id: 'the-solution',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">The solution: .gitignore</h2>
        <p className="text-2xl text-gray-300 max-w-xl mb-8">
          A file that lists what Git should ignore. If it's in .gitignore, Git pretends it doesn't exist.
        </p>
        <div className="code-block text-xl max-w-md text-left">
          <p className="text-emerald-400 font-mono">.gitignore</p>
          <p className="text-gray-500 mt-2">↓</p>
          <p className="text-gray-400 mt-2">Git reads this list and skips those files</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-1',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Create a secret file</h2>
        <p className="text-xl text-gray-400 mb-6 text-center">Let's pretend you have a file with a password. Create <span className="text-red-400 font-mono">secrets.txt</span>:</p>
        <div className="code-block text-lg relative max-w-2xl w-full">
          <CopyButton text={"my-api-key=sk-12345-super-secret\nmy-password=dont-push-this"} />
          <p className="text-red-400">my-api-key=sk-12345-super-secret</p>
          <p className="text-red-400">my-password=dont-push-this</p>
        </div>
        <p className="text-lg text-gray-500 mt-6 text-center">Save it in your project folder.</p>
        <p className="text-xl text-gray-400 mt-4 text-center">Now check:</p>
        <div className="code-block text-2xl relative max-w-2xl w-full mt-3">
          <CopyButton text={"git status"} />
          <p className="text-emerald-400 font-mono">git status</p>
        </div>
        <p className="text-lg text-gray-500 mt-3 text-center">Git sees it. <span className="text-red-400">secrets.txt</span> shows up. We don't want that.</p>
      </div>
    ),
  },

  {
    id: 'step-2',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Create .gitignore</h2>
        <p className="text-xl text-gray-400 mb-6 text-center">Create a file called <span className="text-emerald-400 font-mono">.gitignore</span> (starts with a dot):</p>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"secrets.txt\n.DS_Store\nThumbs.db"} />
          <p className="text-emerald-400">secrets.txt</p>
          <p className="text-emerald-400">.DS_Store</p>
          <p className="text-emerald-400">Thumbs.db</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          One filename per line. Git will now ignore all of these.
        </p>
      </div>
    ),
  },

  {
    id: 'step-3',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 3: Check again</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git status"} />
          <p className="text-emerald-400 font-mono">git status</p>
        </div>
        <div className="mt-8 max-w-xl text-center">
          <p className="text-xl text-gray-400 mb-4">Now you see:</p>
          <div className="code-block text-lg text-left">
            <p className="text-emerald-400">.gitignore</p>
          </div>
          <p className="text-xl text-gray-400 mt-4"><span className="text-red-400">secrets.txt</span> is gone from the list!</p>
          <p className="text-lg text-gray-500 mt-2">Git is ignoring it. It won't be saved or pushed. Ever.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-4',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 4: Save the .gitignore</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full space-y-3">
          <CopyButton text={"git add .gitignore\ngit commit -m \"Add gitignore\""} />
          <p className="text-emerald-400 font-mono">git add .gitignore</p>
          <p className="text-emerald-400 font-mono">git commit -m "Add gitignore"</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          The .gitignore itself gets saved (so your team knows what to ignore too). But secrets.txt does not.
        </p>
      </div>
    ),
  },

  {
    id: 'common-ignores',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Common things to ignore</h2>
        <div className="code-block text-lg relative max-w-2xl w-full">
          <CopyButton text={"# Secrets\n.env\nsecrets.txt\n\n# Dependencies (re-install with npm install)\nnode_modules/\n\n# Build output (re-generate with build command)\ndist/\nbuild/\n\n# System files\n.DS_Store\nThumbs.db"} />
          <p className="text-gray-500"># Secrets</p>
          <p className="text-gray-300">.env</p>
          <p className="text-gray-300">secrets.txt</p>
          <p className="text-gray-500 mt-3"># Dependencies (re-install with npm install)</p>
          <p className="text-gray-300">node_modules/</p>
          <p className="text-gray-500 mt-3"># Build output (re-generate with build command)</p>
          <p className="text-gray-300">dist/</p>
          <p className="text-gray-300">build/</p>
          <p className="text-gray-500 mt-3"># System files</p>
          <p className="text-gray-300">.DS_Store</p>
          <p className="text-gray-300">Thumbs.db</p>
        </div>
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
          Files in .gitignore will never be committed or pushed. Your secrets stay secret.
        </p>
        <div className="mt-10 space-y-2 text-xl text-gray-500">
          <p>Rule: if it's secret, generated, or huge → ignore it.</p>
        </div>
      </div>
    ),
  },
]

export default function HandsOnGitignore({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
