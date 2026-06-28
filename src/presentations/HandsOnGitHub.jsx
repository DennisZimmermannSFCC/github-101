import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Your First Repo<br />on GitHub
        </h1>
        <p className="text-2xl text-gray-400">
          Everything happens in the browser
        </p>
        <p className="text-lg text-gray-600 mt-4">No terminal, no installs, just github.com</p>
      </div>
    ),
  },

  {
    id: 'what-we-do',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">What we'll do</h2>
        <div className="space-y-6 text-2xl text-left max-w-lg">
          <p className="text-gray-300"><span className="text-emerald-400 font-semibold">1.</span> Create a repository</p>
          <p className="text-gray-300"><span className="text-emerald-400 font-semibold">2.</span> Write a README</p>
          <p className="text-gray-300"><span className="text-emerald-400 font-semibold">3.</span> Add a file</p>
          <p className="text-gray-300"><span className="text-emerald-400 font-semibold">4.</span> Edit a file</p>
          <p className="text-gray-300"><span className="text-emerald-400 font-semibold">5.</span> See the history</p>
        </div>
        <p className="text-xl text-gray-500 mt-10">All you need: a GitHub account at github.com</p>
      </div>
    ),
  },

  {
    id: 'step-1-create',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Create a repository</h2>
        <div className="max-w-2xl w-full space-y-6">
          <div className="space-y-4 text-xl text-gray-300">
            <p><span className="text-emerald-400 font-semibold">1.</span> Go to <span className="text-emerald-400 font-mono">github.com</span></p>
            <p><span className="text-emerald-400 font-semibold">2.</span> Click the <span className="font-semibold">+</span> icon (top right) → <span className="font-semibold">New repository</span></p>
            <p><span className="text-emerald-400 font-semibold">3.</span> Name it: <span className="text-emerald-400 font-mono">my-demo</span></p>
            <p><span className="text-emerald-400 font-semibold">4.</span> Choose <span className="font-semibold">Private</span></p>
            <p><span className="text-emerald-400 font-semibold">5.</span> Check <span className="font-semibold">"Add a README file"</span></p>
            <p><span className="text-emerald-400 font-semibold">6.</span> Click <span className="text-emerald-400 font-semibold">"Create repository"</span></p>
          </div>
        </div>
        <p className="text-xl text-gray-500 mt-8 text-center">
          You now have a repo with one file in it.
        </p>
      </div>
    ),
  },

  {
    id: 'step-2-look',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Look around</h2>
        <div className="max-w-2xl w-full">
          <p className="text-xl text-gray-400 mb-6 text-center">Your repo page shows:</p>
          <div className="space-y-4 text-xl">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📄</span>
              <p className="text-gray-300"><span className="text-emerald-400 font-mono">README.md</span> — the only file so far</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">📖</span>
              <p className="text-gray-300">Below the file list: your README rendered nicely</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">💾</span>
              <p className="text-gray-300"><span className="font-semibold">"1 commit"</span> — one save in history</p>
            </div>
          </div>
        </div>
        <p className="text-xl text-gray-500 mt-8 text-center">
          This is your project's home page. Anyone you invite sees this.
        </p>
      </div>
    ),
  },

  {
    id: 'step-3-edit-readme',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 3: Edit the README</h2>
        <div className="max-w-2xl w-full space-y-6">
          <div className="space-y-3 text-xl text-gray-300">
            <p><span className="text-emerald-400 font-semibold">1.</span> Click on <span className="text-emerald-400 font-mono">README.md</span></p>
            <p><span className="text-emerald-400 font-semibold">2.</span> Click the pencil icon (top right of file)</p>
            <p><span className="text-emerald-400 font-semibold">3.</span> Delete everything and paste this:</p>
          </div>
          <div className="code-block text-lg relative">
            <CopyButton text={"# My Demo\n\nA reusable demo for customer presentations.\n\n## What's inside\n\n- Demo script\n- Setup instructions\n- Sample data"} />
            <p className="text-emerald-400"># My Demo</p>
            <p className="text-gray-400 mt-2">A reusable demo for customer presentations.</p>
            <p className="text-emerald-400 mt-2">## What's inside</p>
            <p className="text-gray-400 mt-1">- Demo script</p>
            <p className="text-gray-400">- Setup instructions</p>
            <p className="text-gray-400">- Sample data</p>
          </div>
          <div className="space-y-3 text-xl text-gray-300">
            <p><span className="text-emerald-400 font-semibold">4.</span> Click <span className="text-emerald-400 font-semibold">"Commit changes"</span></p>
            <p><span className="text-emerald-400 font-semibold">5.</span> Add message: <span className="text-gray-400">"Update README with project description"</span></p>
            <p><span className="text-emerald-400 font-semibold">6.</span> Click <span className="text-emerald-400 font-semibold">"Commit changes"</span> again</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-4-add-file',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 4: Add a demo script</h2>
        <div className="max-w-2xl w-full space-y-6">
          <div className="space-y-3 text-xl text-gray-300">
            <p><span className="text-emerald-400 font-semibold">1.</span> Go back to the repo main page</p>
            <p><span className="text-emerald-400 font-semibold">2.</span> Click <span className="font-semibold">"Add file"</span> → <span className="font-semibold">"Create new file"</span></p>
            <p><span className="text-emerald-400 font-semibold">3.</span> Name it: <span className="text-emerald-400 font-mono">demo-script.md</span></p>
            <p><span className="text-emerald-400 font-semibold">4.</span> Paste this content:</p>
          </div>
          <div className="code-block text-lg relative">
            <CopyButton text={"# Demo Script\n\n## Opening (2 min)\n\n- Welcome the customer\n- Show the product overview\n\n## Main Demo (5 min)\n\n- Walk through the key feature\n- Show a real example\n\n## Closing (2 min)\n\n- Recap what they saw\n- Discuss next steps"} />
            <p className="text-emerald-400"># Demo Script</p>
            <p className="text-emerald-400 mt-2">## Opening (2 min)</p>
            <p className="text-gray-400">- Welcome the customer</p>
            <p className="text-gray-400">- Show the product overview</p>
            <p className="text-emerald-400 mt-2">## Main Demo (5 min)</p>
            <p className="text-gray-400">- Walk through the key feature</p>
            <p className="text-gray-400">- Show a real example</p>
            <p className="text-emerald-400 mt-2">## Closing (2 min)</p>
            <p className="text-gray-400">- Recap what they saw</p>
            <p className="text-gray-400">- Discuss next steps</p>
          </div>
          <div className="space-y-3 text-xl text-gray-300">
            <p><span className="text-emerald-400 font-semibold">5.</span> Commit message: <span className="text-gray-400">"Add demo script"</span></p>
            <p><span className="text-emerald-400 font-semibold">6.</span> Click <span className="text-emerald-400 font-semibold">"Commit new file"</span></p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-5-edit-file',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 5: Edit the demo script</h2>
        <div className="max-w-2xl w-full space-y-6">
          <p className="text-xl text-gray-400">Let's add a tip at the bottom of the demo script:</p>
          <div className="space-y-3 text-xl text-gray-300">
            <p><span className="text-emerald-400 font-semibold">1.</span> Click on <span className="text-emerald-400 font-mono">demo-script.md</span></p>
            <p><span className="text-emerald-400 font-semibold">2.</span> Click the pencil icon</p>
            <p><span className="text-emerald-400 font-semibold">3.</span> Add this at the very bottom:</p>
          </div>
          <div className="code-block text-lg relative">
            <CopyButton text={"\n## Tips\n\n- Keep it under 10 minutes\n- Let the customer ask questions\n- Have a backup plan if the demo breaks"} />
            <p className="text-emerald-400">## Tips</p>
            <p className="text-gray-400 mt-1">- Keep it under 10 minutes</p>
            <p className="text-gray-400">- Let the customer ask questions</p>
            <p className="text-gray-400">- Have a backup plan if the demo breaks</p>
          </div>
          <div className="space-y-3 text-xl text-gray-300">
            <p><span className="text-emerald-400 font-semibold">4.</span> Commit message: <span className="text-gray-400">"Add tips section"</span></p>
            <p><span className="text-emerald-400 font-semibold">5.</span> Click <span className="text-emerald-400 font-semibold">"Commit changes"</span></p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-6-history',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 6: See the history</h2>
        <div className="max-w-2xl w-full space-y-6">
          <div className="space-y-3 text-xl text-gray-300">
            <p><span className="text-emerald-400 font-semibold">1.</span> Go back to the repo main page</p>
            <p><span className="text-emerald-400 font-semibold">2.</span> Click <span className="font-semibold">"4 commits"</span> (near the top)</p>
          </div>
          <div className="mt-6">
            <p className="text-xl text-gray-400 mb-4">You'll see all your saves:</p>
            <div className="code-block text-lg text-left">
              <p className="text-gray-300">Add tips section</p>
              <p className="text-gray-300 mt-2">Add demo script</p>
              <p className="text-gray-300 mt-2">Update README with project description</p>
              <p className="text-gray-300 mt-2">Initial commit</p>
            </div>
          </div>
          <p className="text-xl text-gray-500 text-center">Click any commit to see exactly what changed.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'what-you-learned',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">What you just did</h2>
        <div className="space-y-6 text-2xl max-w-lg text-left">
          <p className="text-gray-300"><span className="text-emerald-400">✓</span> Created a repo (a project home)</p>
          <p className="text-gray-300"><span className="text-emerald-400">✓</span> Wrote a README (the front page)</p>
          <p className="text-gray-300"><span className="text-emerald-400">✓</span> Added a file (demo script)</p>
          <p className="text-gray-300"><span className="text-emerald-400">✓</span> Edited a file (added tips)</p>
          <p className="text-gray-300"><span className="text-emerald-400">✓</span> Saw the history (4 commits)</p>
        </div>
        <p className="text-xl text-gray-500 mt-10 max-w-md">
          Every change is saved forever. You can always go back.
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
          You have a repository on GitHub with a README and a demo script — ready to share.
        </p>
        <p className="text-xl text-gray-600 mt-8">
          No terminal. No installs. Just a browser.
        </p>
      </div>
    ),
  },
]

export default function HandsOnGitHub({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
