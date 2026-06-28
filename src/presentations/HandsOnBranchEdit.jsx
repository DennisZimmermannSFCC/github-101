import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Edit on a Branch
        </h1>
        <p className="text-2xl text-gray-400">
          Change a file, then compare it to the original
        </p>
        <p className="text-lg text-gray-600 mt-4">Still on your customer/acme-corp branch</p>
      </div>
    ),
  },

  {
    id: 'step-1-check',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Make sure you're on your branch</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git checkout customer/acme-corp"} />
          <p className="text-teal-400 font-mono">git checkout customer/acme-corp</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center">
          If you're already on it, Git will just say so. No harm done.
        </p>
      </div>
    ),
  },

  {
    id: 'step-2-edit',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Change index.html for ACME</h2>
        <p className="text-xl text-gray-400 mb-6 text-center">Open <span className="text-emerald-400 font-mono">index.html</span> in your editor. Replace the content with:</p>
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
        <p className="text-lg text-gray-500 mt-4">Save the file.</p>
      </div>
    ),
  },

  {
    id: 'step-3-commit',
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
    id: 'step-4-diff',
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
          <p className="text-xl text-gray-400 mb-4">Git shows you what's different from main:</p>
          <div className="code-block text-lg text-left">
            <p className="text-red-400">-  {"<h1>Hello World!</h1>"}</p>
            <p className="text-emerald-400">+  {"<h1>Welcome ACME Corp!</h1>"}</p>
            <p className="text-red-400 mt-2">-  {"<p>This is my first website saved with Git.</p>"}</p>
            <p className="text-emerald-400">+  {"<p>This demo shows how our product solves your logistics challenge.</p>"}</p>
          </div>
          <p className="text-lg text-gray-500 mt-4"><span className="text-red-400">Red</span> = removed from main. <span className="text-emerald-400">Green</span> = added on your branch.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-5-switch',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 5: Switch back and see</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git checkout main"} />
          <p className="text-teal-400 font-mono">git checkout main</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          Open index.html — it says "Hello World!" again.
        </p>
        <div className="code-block text-2xl relative max-w-2xl w-full mt-6">
          <CopyButton text={"git checkout customer/acme-corp"} />
          <p className="text-teal-400 font-mono">git checkout customer/acme-corp</p>
        </div>
        <p className="text-xl text-gray-400 mt-6 text-center max-w-xl">
          Open index.html — it says "Welcome ACME Corp!" again.
        </p>
        <p className="text-xl text-emerald-400 mt-6 text-center font-semibold">
          Two versions. Same folder. Switch instantly.
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
          You edited a file on a branch, saved it, and compared it to main. The original is untouched.
        </p>
        <div className="mt-10 space-y-2 text-xl text-gray-500">
          <p><span className="text-teal-400 font-mono">git diff main</span> = see what's different</p>
          <p><span className="text-teal-400 font-mono">git checkout main</span> = back to original</p>
          <p><span className="text-teal-400 font-mono">git checkout branch</span> = back to your version</p>
        </div>
      </div>
    ),
  },
]

export default function HandsOnBranchEdit({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
