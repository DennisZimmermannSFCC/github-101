import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Let Claude Do It
        </h1>
        <p className="text-2xl text-gray-400">
          Same workflow. You just talk.
        </p>
      </div>
    ),
  },

  {
    id: 'step-1',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Start</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full space-y-3">
          <CopyButton text={"mkdir my-demo\ncd my-demo\nclaude"} />
          <p className="text-emerald-400 font-mono">mkdir my-demo</p>
          <p className="text-emerald-400 font-mono">cd my-demo</p>
          <p className="text-emerald-400 font-mono">claude</p>
        </div>
        <p className="text-xl text-gray-500 mt-8 text-center">From here on, you just type English.</p>
      </div>
    ),
  },

  {
    id: 'step-2',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Create files</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Create an index.html with a hello world page, a style.css with a dark theme, and a README explaining the project. Also add a .gitignore that ignores .DS_Store and any .env files."} />
          <p className="text-gray-200 italic">"Create an index.html with a hello world page,</p>
          <p className="text-gray-200 italic">a style.css with a dark theme, and a README</p>
          <p className="text-gray-200 italic">explaining the project. Also add a .gitignore</p>
          <p className="text-gray-200 italic">that ignores .DS_Store and any .env files."</p>
        </div>
        <p className="text-xl text-gray-500 mt-8 text-center">4 files created. Including the .gitignore.</p>
      </div>
    ),
  },

  {
    id: 'step-3',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 3: Save and push</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Create a private GitHub repo called my-demo, commit everything, and push."} />
          <p className="text-gray-200 italic">"Create a private GitHub repo called my-demo,</p>
          <p className="text-gray-200 italic">commit everything, and push."</p>
        </div>
        <p className="text-xl text-gray-500 mt-8 text-center">It's on GitHub. Done.</p>
      </div>
    ),
  },

  {
    id: 'step-4',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 4: Make a change</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Change the heading to 'Welcome to My Demo'. Commit and push."} />
          <p className="text-gray-200 italic">"Change the heading to 'Welcome to My Demo'.</p>
          <p className="text-gray-200 italic">Commit and push."</p>
        </div>
        <p className="text-xl text-gray-500 mt-8 text-center">Edited, saved, pushed. One sentence.</p>
      </div>
    ),
  },

  {
    id: 'step-5',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 5: Create a customer branch</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Create a branch called customer/acme. Change the heading to 'Welcome ACME Corp'. Commit and push the branch."} />
          <p className="text-gray-200 italic">"Create a branch called customer/acme.</p>
          <p className="text-gray-200 italic">Change the heading to 'Welcome ACME Corp'.</p>
          <p className="text-gray-200 italic">Commit and push the branch."</p>
        </div>
        <p className="text-xl text-gray-500 mt-8 text-center">Branch created, customized, pushed.</p>
      </div>
    ),
  },

  {
    id: 'step-6',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 6: Share it</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Add elvira-demo as a collaborator."} />
          <p className="text-gray-200 italic">"Add elvira-demo as a collaborator."</p>
        </div>
        <p className="text-xl text-gray-500 mt-8 text-center">She gets an invite. Can clone the repo.</p>
      </div>
    ),
  },

  {
    id: 'step-7',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 7: Undo</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Undo the last commit and push."} />
          <p className="text-gray-200 italic">"Undo the last commit and push."</p>
        </div>
        <p className="text-xl text-gray-500 mt-8 text-center">Reverted. Safety net works.</p>
      </div>
    ),
  },

  {
    id: 'done',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Same workflow.<br />Zero commands.
        </h1>
        <div className="mt-6 space-y-2 text-xl text-gray-400 max-w-md text-left">
          <p>Create files + .gitignore ✓</p>
          <p>Commit and push ✓</p>
          <p>Make a change ✓</p>
          <p>Branch for a customer ✓</p>
          <p>Share with a colleague ✓</p>
          <p>Undo ✓</p>
        </div>
      </div>
    ),
  },
]

export default function HandsOnClaudeSession({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
