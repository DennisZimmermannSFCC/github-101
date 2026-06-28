import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Use a Shared Repo
        </h1>
        <p className="text-2xl text-gray-400">
          Clone it, customize it, make it yours
        </p>
        <p className="text-lg text-gray-600 mt-4">You are Elvira now.</p>
      </div>
    ),
  },

  {
    id: 'the-situation',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">The situation</h2>
        <div className="max-w-xl space-y-6 text-2xl text-left">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🧑</span>
            <p className="text-gray-300">Your colleague shared a demo repo with you</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">👩</span>
            <p className="text-gray-300"><span className="text-cyan-400 font-semibold">You (Elvira)</span> accepted the invite</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🎯</span>
            <p className="text-gray-300">You want to customize it for your prospect</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-1-clone',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Clone the repo</h2>
        <div className="code-block text-xl relative max-w-2xl w-full space-y-3">
          <CopyButton text={"git clone https://github.com/COLLEAGUE/my-website.git\ncd my-website"} />
          <p className="text-cyan-400 font-mono">git clone https://github.com/COLLEAGUE/my-website.git</p>
          <p className="text-cyan-400 font-mono">cd my-website</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          You now have the full project on your computer.<br />
          All files, all history.
        </p>
        <p className="text-lg text-gray-600 mt-4 text-center">
          Replace COLLEAGUE with their GitHub username.
        </p>
      </div>
    ),
  },

  {
    id: 'step-2-look',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Look around</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full space-y-3">
          <CopyButton text={"ls"} />
          <p className="text-cyan-400 font-mono">ls</p>
        </div>
        <div className="mt-8 max-w-xl text-center">
          <p className="text-xl text-gray-400 mb-4">You'll see the files:</p>
          <div className="space-y-2 text-xl text-gray-300 font-mono">
            <p>index.html</p>
            <p>style.css</p>
            <p>README.md</p>
          </div>
          <p className="text-lg text-gray-500 mt-6">Open index.html in your browser to see the demo.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-3-customize',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 3: Customize for your prospect</h2>
        <p className="text-xl text-gray-400 mb-6 text-center">Open <span className="text-emerald-400 font-mono">index.html</span> in your editor. Change it:</p>
        <div className="code-block text-lg relative max-w-2xl w-full">
          <CopyButton text={'<!DOCTYPE html>\n<html>\n<head>\n  <title>Demo for ACME Corp</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Welcome ACME Corp!</h1>\n  <p>This demo shows how our product solves your logistics challenge.</p>\n</body>\n</html>'} />
          <p className="text-gray-400">{"<!DOCTYPE html>"}</p>
          <p className="text-gray-400">{"<html>"}</p>
          <p className="text-gray-400">{"<head>"}</p>
          <p className="text-cyan-400">{"  <title>Demo for ACME Corp</title>"}</p>
          <p className="text-gray-400">{'  <link rel="stylesheet" href="style.css">'}</p>
          <p className="text-gray-400">{"</head>"}</p>
          <p className="text-gray-400">{"<body>"}</p>
          <p className="text-cyan-400">{"  <h1>Welcome ACME Corp!</h1>"}</p>
          <p className="text-cyan-400">{"  <p>This demo shows how our product solves your logistics challenge.</p>"}</p>
          <p className="text-gray-400">{"</body>"}</p>
          <p className="text-gray-400">{"</html>"}</p>
        </div>
        <p className="text-lg text-gray-500 mt-4">Save it.</p>
      </div>
    ),
  },

  {
    id: 'step-4-save',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 4: Save your changes</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full space-y-3">
          <CopyButton text={"git add .\ngit commit -m \"Customize for ACME Corp\"\ngit push"} />
          <p className="text-cyan-400 font-mono">git add .</p>
          <p className="text-cyan-400 font-mono">git commit -m "Customize for ACME Corp"</p>
          <p className="text-cyan-400 font-mono">git push</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          Your customization is saved and pushed to GitHub.
        </p>
      </div>
    ),
  },

  {
    id: 'what-happened',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">What you did</h2>
        <div className="space-y-6 text-2xl max-w-lg text-left">
          <p className="text-gray-300"><span className="text-cyan-400">✓</span> Cloned a shared repo</p>
          <p className="text-gray-300"><span className="text-cyan-400">✓</span> Looked at the files</p>
          <p className="text-gray-300"><span className="text-cyan-400">✓</span> Customized it for your prospect</p>
          <p className="text-gray-300"><span className="text-cyan-400">✓</span> Saved and pushed</p>
        </div>
        <p className="text-xl text-gray-500 mt-10 max-w-md">
          You didn't start from scratch. You reused someone else's work and made it your own.
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
          You took a colleague's demo, customized it for ACME Corp, and pushed it back. That's reusability.
        </p>
        <p className="text-xl text-gray-600 mt-6">
          Clone → Customize → Push. Every time.
        </p>
      </div>
    ),
  },
]

export default function HandsOnUse({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
