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
    id: 'step-8-save-css',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 8: Save the CSS</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full space-y-4">
          <CopyButton text={"git add style.css\ngit commit -m \"Add styling\""} />
          <p className="text-emerald-400 font-mono">git add style.css</p>
          <p className="text-emerald-400 font-mono">git commit -m "Add styling"</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center">
          Second save! Your project now has 2 snapshots in history.
        </p>
      </div>
    ),
  },

  {
    id: 'step-9-readme',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 9: Create README.md</h2>
        <p className="text-xl text-gray-400 mb-4 text-center">Create a file called <span className="text-amber-400 font-mono">README.md</span>:</p>
        <div className="code-block text-lg relative max-w-2xl w-full">
          <CopyButton text={"# My Website\n\nA simple hello world page to learn Git.\n\n## How to open\n\nOpen index.html in your browser."} />
          <p className="text-amber-400"># My Website</p>
          <p className="text-gray-400 mt-2">A simple hello world page to learn Git.</p>
          <p className="text-amber-400 mt-2">## How to open</p>
          <p className="text-gray-400 mt-1">Open index.html in your browser.</p>
        </div>
        <p className="text-lg text-gray-500 mt-4">This is the "front page" people see on GitHub.</p>
      </div>
    ),
  },

  {
    id: 'step-10-save-readme',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 10: Save the README</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full space-y-4">
          <CopyButton text={"git add README.md\ngit commit -m \"Add README\""} />
          <p className="text-emerald-400 font-mono">git add README.md</p>
          <p className="text-emerald-400 font-mono">git commit -m "Add README"</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center">
          Third save! Three snapshots in history.
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
          <p className="text-xl text-gray-400 mb-4">You'll see something like:</p>
          <div className="code-block text-lg text-left">
            <p><span className="text-amber-400">c3d4e5f</span> <span className="text-gray-300">Add README</span></p>
            <p><span className="text-amber-400">b2c3d4e</span> <span className="text-gray-300">Add styling</span></p>
            <p><span className="text-amber-400">a1b2c3d</span> <span className="text-gray-300">Add hello world page</span></p>
          </div>
          <p className="text-lg text-gray-500 mt-4">Every save you made, with its message. You can go back to any of these.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-12-push',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 12: Push to GitHub</h2>
        <div className="code-block text-xl relative max-w-2xl w-full space-y-4">
          <CopyButton text={"gh repo create my-website --private --source=. --push"} />
          <p className="text-emerald-400 font-mono">gh repo create my-website --private --source=. --push</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          This creates a repo on GitHub and uploads everything.<br />
          Open the URL it shows — your website is online!
        </p>
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
            { cmd: 'git add filename', desc: 'pick a file to save' },
            { cmd: 'git add .', desc: 'pick ALL files to save' },
            { cmd: 'git commit -m "msg"', desc: 'save a snapshot' },
            { cmd: 'git log --oneline', desc: 'see all saved snapshots' },
            { cmd: 'git push', desc: 'upload to GitHub' },
          ].map((item) => (
            <div key={item.cmd} className="flex items-center gap-4">
              <code className="text-emerald-400 font-mono w-64 shrink-0">{item.cmd}</code>
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
          You built a website, saved it step by step, and pushed it to GitHub.
        </p>
        <div className="mt-12 space-y-2 text-xl text-gray-500">
          <p>3 files created</p>
          <p>3 commits saved</p>
          <p>1 repo on GitHub</p>
        </div>
      </div>
    ),
  },
]

export default function HandsOnHelloWorld({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
