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
        <p className="text-xl text-gray-500 mt-10">We need a way to make changes in our own space.</p>
      </div>
    ),
  },

  {
    id: 'what-is-branch',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">What is a branch?</h2>
        <p className="text-2xl text-gray-300 max-w-xl mb-10">
          A branch is a <span className="text-teal-400 font-semibold">copy of your project</span> where you can make changes without touching the original.
        </p>
        <div className="code-block text-lg max-w-md text-left">
          <p className="text-emerald-400">main              ← the original (don't touch)</p>
          <p className="text-gray-600 ml-4">  \</p>
          <p className="text-teal-400 ml-8">customer/acme  ← your version (change freely)</p>
        </div>
        <p className="text-xl text-gray-500 mt-8">You work on your branch. Main stays safe.</p>
      </div>
    ),
  },

  {
    id: 'step-1-branch',
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
          You customized a demo without breaking the original. That's what branches are for.
        </p>
        <div className="mt-10 space-y-2 text-xl text-gray-500">
          <p><span className="text-teal-400 font-mono">git checkout -b name</span> = create a branch</p>
          <p><span className="text-teal-400 font-mono">git checkout main</span> = go back to original</p>
        </div>
      </div>
    ),
  },
]

export default function HandsOnBranch({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
