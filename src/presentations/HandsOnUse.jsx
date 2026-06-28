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
    id: 'what-now',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Now what?</h2>
        <p className="text-2xl text-gray-300 max-w-xl mb-8">
          You want to customize this for your prospect ACME Corp. But you can't just change the original — other people use it too.
        </p>
        <p className="text-2xl text-gray-400 max-w-xl">
          You need a way to make your own version without breaking theirs.
        </p>
        <p className="text-xl text-gray-500 mt-10">
          That's what <span className="text-teal-400 font-semibold">branches</span> are for. → Next lesson.
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
          You cloned a shared repo and explored it. You're ready to work with it — without overwriting the original.
        </p>
        <p className="text-xl text-gray-600 mt-6">
          Next: learn branches to safely customize.
        </p>
      </div>
    ),
  },
]

export default function HandsOnUse({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
