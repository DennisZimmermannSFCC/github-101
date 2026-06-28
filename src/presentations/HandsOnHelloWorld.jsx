import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Build a Website,<br />Save it with Git
        </h1>
        <p className="text-2xl text-gray-400">
          A hands-on tutorial
        </p>
      </div>
    ),
  },

  {
    id: 'what-we-build',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">We will create 3 files</h2>
        <div className="space-y-6 text-3xl text-left">
          <p className="text-emerald-400 font-mono">index.html</p>
          <p className="text-cyan-400 font-mono">style.css</p>
          <p className="text-amber-400 font-mono">README.md</p>
        </div>
        <p className="text-xl text-gray-500 mt-12">...and save every step with Git</p>
      </div>
    ),
  },

  {
    id: 'step-1-folder',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Create a folder</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"mkdir my-website\ncd my-website"} />
          <p className="text-emerald-400 font-mono">mkdir my-website</p>
          <p className="text-emerald-400 font-mono mt-2">cd my-website</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center">
          This creates an empty folder and goes inside it.
        </p>
      </div>
    ),
  },

  {
    id: 'step-2-init',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Initialize Git</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git init"} />
          <p className="text-emerald-400 font-mono">git init</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          This tells Git: "start tracking this folder."<br />
          From now on, Git watches every change you make.
        </p>
      </div>
    ),
  },

  {
    id: 'step-3-html',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 3: Create index.html</h2>
        <p className="text-xl text-gray-400 mb-4 text-center">Open your editor. Create a file called <span className="text-emerald-400 font-mono">index.html</span> and paste this:</p>
        <div className="code-block text-lg relative max-w-2xl w-full">
          <CopyButton text={'<!DOCTYPE html>\n<html>\n<head>\n  <title>My Website</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <p>This is my first website saved with Git.</p>\n</body>\n</html>'} />
          <p className="text-gray-400">{"<!DOCTYPE html>"}</p>
          <p className="text-gray-400">{"<html>"}</p>
          <p className="text-gray-400">{"<head>"}</p>
          <p className="text-gray-400">{"  <title>My Website</title>"}</p>
          <p className="text-gray-400">{'  <link rel="stylesheet" href="style.css">'}</p>
          <p className="text-gray-400">{"</head>"}</p>
          <p className="text-gray-400">{"<body>"}</p>
          <p className="text-emerald-400">{"  <h1>Hello World!</h1>"}</p>
          <p className="text-emerald-400">{"  <p>This is my first website saved with Git.</p>"}</p>
          <p className="text-gray-400">{"</body>"}</p>
          <p className="text-gray-400">{"</html>"}</p>
        </div>
        <p className="text-lg text-gray-500 mt-4">Save the file.</p>
      </div>
    ),
  },

  {
    id: 'step-4-status',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 4: Check what changed</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git status"} />
          <p className="text-emerald-400 font-mono">git status</p>
        </div>
        <div className="mt-8 max-w-xl text-center">
          <p className="text-xl text-gray-400 mb-4">Git will show you:</p>
          <p className="text-red-400 font-mono text-lg">index.html</p>
          <p className="text-lg text-gray-500 mt-4">Red = not saved yet. Git sees the file but hasn't saved it.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-5-add',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 5: Add the file</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git add index.html"} />
          <p className="text-emerald-400 font-mono">git add index.html</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          This tells Git: "I want to save this file in the next snapshot."
        </p>
        <p className="text-lg text-gray-600 mt-4 text-center">
          Think of it like putting something in a box before shipping it.
        </p>
      </div>
    ),
  },

  {
    id: 'step-6-commit',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 6: Commit = Save!</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={'git commit -m "Add hello world page"'} />
          <p className="text-emerald-400 font-mono">git commit -m "Add hello world page"</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          Done! Git saved a snapshot of your project.<br />
          The message describes what you did.
        </p>
        <p className="text-lg text-gray-600 mt-4 text-center">
          You can always come back to this moment.
        </p>
      </div>
    ),
  },

  {
    id: 'step-7-css',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 7: Create style.css</h2>
        <p className="text-xl text-gray-400 mb-4 text-center">Create a new file called <span className="text-cyan-400 font-mono">style.css</span>:</p>
        <div className="code-block text-lg relative max-w-2xl w-full">
          <CopyButton text={"body {\n  font-family: Arial, sans-serif;\n  text-align: center;\n  padding: 50px;\n  background: #1a1a2e;\n  color: white;\n}\n\nh1 {\n  color: #4ade80;\n  font-size: 3em;\n}"} />
          <p className="text-gray-400">{"body {"}</p>
          <p className="text-gray-400">{"  font-family: Arial, sans-serif;"}</p>
          <p className="text-gray-400">{"  text-align: center;"}</p>
          <p className="text-gray-400">{"  padding: 50px;"}</p>
          <p className="text-cyan-400">{"  background: #1a1a2e;"}</p>
          <p className="text-cyan-400">{"  color: white;"}</p>
          <p className="text-gray-400">{"}"}</p>
          <p className="text-gray-400 mt-2">{"h1 {"}</p>
          <p className="text-cyan-400">{"  color: #4ade80;"}</p>
          <p className="text-gray-400">{"  font-size: 3em;"}</p>
          <p className="text-gray-400">{"}"}</p>
        </div>
        <p className="text-lg text-gray-500 mt-4">Save it.</p>
      </div>
    ),
  },

  {
    id: 'step-8-readme',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 8: Create README.md</h2>
        <p className="text-xl text-gray-400 mb-4 text-center">Create a file called <span className="text-amber-400 font-mono">README.md</span>:</p>
        <div className="code-block text-lg relative max-w-2xl w-full">
          <CopyButton text={"# My Website\n\nA simple hello world page to learn Git.\n\n## How to open\n\nOpen index.html in your browser."} />
          <p className="text-amber-400"># My Website</p>
          <p className="text-gray-400 mt-2">A simple hello world page to learn Git.</p>
          <p className="text-amber-400 mt-2">## How to open</p>
          <p className="text-gray-400 mt-1">Open index.html in your browser.</p>
        </div>
        <p className="text-lg text-gray-500 mt-4">Save it.</p>
      </div>
    ),
  },

  {
    id: 'step-9-add-all',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 9: Add ALL files at once</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git add ."} />
          <p className="text-emerald-400 font-mono">git add .</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          The dot means "everything."<br />
          This adds style.css AND README.md in one go.
        </p>
        <div className="mt-8 max-w-md mx-auto text-left">
          <p className="text-gray-500 text-lg mb-2">Two ways to add:</p>
          <p className="font-mono text-lg"><span className="text-emerald-400">git add style.css</span> <span className="text-gray-600">= one file</span></p>
          <p className="font-mono text-lg"><span className="text-emerald-400">git add .</span> <span className="text-gray-600">= everything</span></p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-10-commit-all',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 10: Save both files</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={'git commit -m "Add styling and README"'} />
          <p className="text-emerald-400 font-mono">git commit -m "Add styling and README"</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center">
          Both files are saved together in one snapshot.
        </p>
      </div>
    ),
  },

  {
    id: 'step-11-log',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 11: See your history</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git log --oneline"} />
          <p className="text-emerald-400 font-mono">git log --oneline</p>
        </div>
        <div className="mt-8 max-w-xl text-center">
          <p className="text-xl text-gray-400 mb-4">You'll see:</p>
          <div className="code-block text-lg text-left">
            <p><span className="text-amber-400">b2c3d4e</span> <span className="text-gray-300">Add styling and README</span></p>
            <p><span className="text-amber-400">a1b2c3d</span> <span className="text-gray-300">Add hello world page</span></p>
          </div>
          <p className="text-lg text-gray-500 mt-4">Two saves. You can go back to either one.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-12-break',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 12: Break something</h2>
        <p className="text-xl text-gray-400 mb-6 text-center">Open <span className="text-emerald-400 font-mono">index.html</span> and delete everything inside. Replace it with:</p>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"oops I deleted everything"} />
          <p className="text-red-400 font-mono">oops I deleted everything</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center">
          Save the file. Your website is now broken.
        </p>
        <p className="text-2xl text-gray-500 mt-4 text-center">
          Don't worry.
        </p>
      </div>
    ),
  },

  {
    id: 'step-13-go-back',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 13: Go back in time</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git checkout -- index.html"} />
          <p className="text-emerald-400 font-mono">git checkout -- index.html</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          Open index.html again.<br />
          It's back! The "Hello World" page is restored.
        </p>
        <p className="text-2xl text-emerald-400 mt-6 text-center font-semibold">
          Git remembered it for you.
        </p>
      </div>
    ),
  },

  {
    id: 'explain-go-back',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">How "going back" works</h2>
        <div className="space-y-6 max-w-2xl w-full text-xl">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🗑️</span>
            <div>
              <p className="text-gray-200 font-semibold">Undo changes to one file</p>
              <p className="text-emerald-400 font-mono text-lg mt-1">git checkout -- filename</p>
              <p className="text-gray-500 text-base">Restores the file to its last saved version</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">⏪</span>
            <div>
              <p className="text-gray-200 font-semibold">See an old save (time travel)</p>
              <p className="text-emerald-400 font-mono text-lg mt-1">git checkout a1b2c3d</p>
              <p className="text-gray-500 text-base">Use the code from git log to visit any snapshot</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏠</span>
            <div>
              <p className="text-gray-200 font-semibold">Come back to the latest</p>
              <p className="text-emerald-400 font-mono text-lg mt-1">git checkout main</p>
              <p className="text-gray-500 text-base">Return to where you were</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'cheatsheet',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white text-center">Cheat Sheet</h2>
        <div className="space-y-3 text-xl max-w-3xl w-full">
          {[
            { cmd: 'git init', desc: 'start tracking a folder' },
            { cmd: 'git status', desc: 'see what changed' },
            { cmd: 'git add filename', desc: 'pick one file to save' },
            { cmd: 'git add .', desc: 'pick ALL files to save' },
            { cmd: 'git commit -m "msg"', desc: 'save a snapshot' },
            { cmd: 'git log --oneline', desc: 'see all snapshots' },
            { cmd: 'git checkout -- file', desc: 'undo changes to a file' },
            { cmd: 'git checkout abc123', desc: 'go back to an old save' },
            { cmd: 'git checkout main', desc: 'come back to latest' },
          ].map((item) => (
            <div key={item.cmd} className="flex items-center gap-4">
              <code className="text-emerald-400 font-mono w-72 shrink-0">{item.cmd}</code>
              <span className="text-gray-400">= {item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: 'done',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          You did it!
        </h1>
        <p className="text-2xl text-gray-400 max-w-lg">
          You built a website, saved it step by step, broke it, and brought it back.
        </p>
        <div className="mt-12 space-y-2 text-xl text-gray-500">
          <p>3 files created</p>
          <p>2 commits saved</p>
          <p>1 undo — like magic</p>
        </div>
      </div>
    ),
  },
]

export default function HandsOnHelloWorld({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
