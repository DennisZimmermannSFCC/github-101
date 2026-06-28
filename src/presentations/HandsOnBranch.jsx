import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Branches
        </h1>
        <p className="text-2xl text-gray-400">
          Customize without breaking the original
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
          <p className="text-gray-300">You cloned a shared demo.</p>
          <p className="text-gray-300">You want to customize it for ACME Corp.</p>
          <p className="text-red-400 font-semibold">But if you change the files directly, you break it for everyone.</p>
        </div>
        <p className="text-xl text-gray-500 mt-10">Solution: make your changes on a <span className="text-teal-400 font-semibold">branch</span>.</p>
      </div>
    ),
  },

  {
    id: 'what-is-branch',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">What is a branch?</h2>
        <p className="text-2xl text-gray-300 max-w-xl mb-10">
          A <span className="text-teal-400 font-semibold">copy</span> where you can make changes without touching the original.
        </p>
        <div className="code-block text-lg max-w-md text-left">
          <p className="text-emerald-400">main              ← the original (safe)</p>
          <p className="text-gray-600 ml-4">  \</p>
          <p className="text-teal-400 ml-8">customer/acme  ← your version (change freely)</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-1',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Create a branch</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git checkout -b customer/acme-corp"} />
          <p className="text-teal-400 font-mono">git checkout -b customer/acme-corp</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          You're now on your own branch.<br />
          Everything you do here is separate from main.
        </p>
      </div>
    ),
  },

  {
    id: 'step-2',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Edit index.html for ACME</h2>
        <p className="text-xl text-gray-400 mb-6 text-center">Replace the content with:</p>
        <div className="code-block text-lg relative max-w-2xl w-full">
          <CopyButton text={'<!DOCTYPE html>\n<html>\n<head>\n  <title>Demo for ACME Corp</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Welcome ACME Corp!</h1>\n  <p>This demo shows how our product solves your logistics challenge.</p>\n</body>\n</html>'} />
          <p className="text-gray-400">{"<!DOCTYPE html>"}</p>
          <p className="text-gray-400">{"<html>"}</p>
          <p className="text-gray-400">{"<head>"}</p>
          <p className="text-teal-400">{"  <title>Demo for ACME Corp</title>"}</p>
          <p className="text-gray-400">{'  <link rel="stylesheet" href="style.css">'}</p>
          <p className="text-gray-400">{"</head>"}</p>
          <p className="text-gray-400">{"<body>"}</p>
          <p className="text-teal-400">{"  <h1>Welcome ACME Corp!</h1>"}</p>
          <p className="text-teal-400">{"  <p>This demo shows how our product solves your logistics challenge.</p>"}</p>
          <p className="text-gray-400">{"</body>"}</p>
          <p className="text-gray-400">{"</html>"}</p>
        </div>
        <p className="text-lg text-gray-500 mt-4">Save it.</p>
      </div>
    ),
  },

  {
    id: 'step-3',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 3: Save it</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full space-y-3">
          <CopyButton text={"git add .\ngit commit -m \"Customize for ACME Corp\""} />
          <p className="text-teal-400 font-mono">git add .</p>
          <p className="text-teal-400 font-mono">git commit -m "Customize for ACME Corp"</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center">
          Saved on your branch. Main is still untouched.
        </p>
      </div>
    ),
  },

  {
    id: 'step-4',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 4: See the difference</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git diff main"} />
          <p className="text-teal-400 font-mono">git diff main</p>
        </div>
        <div className="mt-8 max-w-xl text-center">
          <p className="text-xl text-gray-400 mb-4">Git shows what's different from main:</p>
          <div className="code-block text-lg text-left">
            <p className="text-red-400">-  {"<h1>Hello World!</h1>"}</p>
            <p className="text-emerald-400">+  {"<h1>Welcome ACME Corp!</h1>"}</p>
          </div>
          <p className="text-lg text-gray-500 mt-4"><span className="text-red-400">Red</span> = main. <span className="text-emerald-400">Green</span> = your branch.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-5',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 5: Switch between versions</h2>
        <div className="max-w-md w-full space-y-6 text-2xl">
          <div className="code-block relative !p-4">
            <CopyButton text={"git checkout main"} />
            <p className="text-emerald-400 font-mono">git checkout main</p>
            <p className="text-gray-500 text-base mt-1">→ open index.html → "Hello World!"</p>
          </div>
          <div className="code-block relative !p-4">
            <CopyButton text={"git checkout customer/acme-corp"} />
            <p className="text-teal-400 font-mono">git checkout customer/acme-corp</p>
            <p className="text-gray-500 text-base mt-1">→ open index.html → "Welcome ACME Corp!"</p>
          </div>
        </div>
        <p className="text-xl text-emerald-400 mt-8 text-center font-semibold">
          Two versions. Same folder. Switch instantly.
        </p>
      </div>
    ),
  },

  {
    id: 'many-branches',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">One repo, many customers</h2>
        <div className="code-block text-xl max-w-lg text-left">
          <p className="text-emerald-400">main                  ← the base demo</p>
          <p className="text-teal-400">customer/acme-corp    ← for ACME</p>
          <p className="text-cyan-400">customer/bigretail    ← for BigRetail</p>
          <p className="text-violet-400">customer/techstart    ← for TechStart</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 max-w-md">
          Each customer gets their own branch. The base stays clean.
        </p>
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
          You created a branch, customized a file, compared it to main, and switched between both.
        </p>
        <div className="mt-10 space-y-2 text-xl text-gray-500">
          <p><span className="text-teal-400 font-mono">git checkout -b name</span> = create a branch</p>
          <p><span className="text-teal-400 font-mono">git diff main</span> = see what's different</p>
          <p><span className="text-teal-400 font-mono">git checkout main</span> = back to original</p>
        </div>
      </div>
    ),
  },
]

export default function HandsOnBranch({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
