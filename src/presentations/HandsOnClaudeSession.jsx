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
          A typical session — you talk, Claude Code handles Git
        </p>
      </div>
    ),
  },

  {
    id: 'the-idea',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">The idea</h2>
        <p className="text-2xl text-gray-300 max-w-xl mb-8">
          Everything you learned — init, add, commit, push, branch, .gitignore — Claude Code does it all for you.
        </p>
        <p className="text-2xl text-gray-400 max-w-xl">
          You just describe what you want in English.
        </p>
      </div>
    ),
  },

  {
    id: 'step-1',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Start a project</h2>
        <p className="text-xl text-gray-400 mb-6 text-center">Open your terminal:</p>
        <div className="code-block text-2xl relative max-w-2xl w-full space-y-3">
          <CopyButton text={"mkdir product-demo\ncd product-demo\nclaude"} />
          <p className="text-emerald-400 font-mono">mkdir product-demo</p>
          <p className="text-emerald-400 font-mono">cd product-demo</p>
          <p className="text-emerald-400 font-mono">claude</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center">
          Claude Code starts. You're in a conversation.
        </p>
      </div>
    ),
  },

  {
    id: 'step-2',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Build something</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Create a simple product page with an index.html, style.css, and a README. The page should show 3 products with names and prices. Dark theme. Make it look nice."} />
          <p className="text-gray-200 italic">"Create a simple product page with an index.html,</p>
          <p className="text-gray-200 italic">style.css, and a README. The page should show</p>
          <p className="text-gray-200 italic">3 products with names and prices. Dark theme.</p>
          <p className="text-gray-200 italic">Make it look nice."</p>
        </div>
        <p className="text-xl text-gray-500 mt-8 text-center">
          Claude Code creates all the files. Wait for it to finish.
        </p>
      </div>
    ),
  },

  {
    id: 'step-3',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 3: Push to GitHub</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Create a private GitHub repo called product-demo, add a .gitignore, commit everything, and push."} />
          <p className="text-gray-200 italic">"Create a private GitHub repo called product-demo,</p>
          <p className="text-gray-200 italic">add a .gitignore, commit everything, and push."</p>
        </div>
        <div className="mt-8 max-w-xl text-center">
          <p className="text-xl text-gray-400 mb-4">Claude Code does:</p>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-emerald-400">✓</span> git init</p>
            <p><span className="text-emerald-400">✓</span> creates .gitignore</p>
            <p><span className="text-emerald-400">✓</span> git add . && git commit</p>
            <p><span className="text-emerald-400">✓</span> gh repo create --private</p>
            <p><span className="text-emerald-400">✓</span> git push</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-4',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 4: Make a change</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Add a fourth product called 'Premium Headphones' for $299. Commit and push."} />
          <p className="text-gray-200 italic">"Add a fourth product called 'Premium Headphones'</p>
          <p className="text-gray-200 italic">for $299. Commit and push."</p>
        </div>
        <p className="text-xl text-gray-500 mt-8 text-center">
          Claude Code edits the HTML, commits with a message, pushes.
        </p>
      </div>
    ),
  },

  {
    id: 'step-5',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 5: Create a customer branch</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Create a branch called customer/acme. Change the page title to 'ACME Corp Store' and update the products to office supplies. Commit and push the branch."} />
          <p className="text-gray-200 italic">"Create a branch called customer/acme. Change the</p>
          <p className="text-gray-200 italic">page title to 'ACME Corp Store' and update the</p>
          <p className="text-gray-200 italic">products to office supplies. Commit and push</p>
          <p className="text-gray-200 italic">the branch."</p>
        </div>
        <div className="mt-8 max-w-xl text-center">
          <p className="text-xl text-gray-400 mb-4">Claude Code does:</p>
          <div className="space-y-2 text-lg text-gray-300">
            <p><span className="text-emerald-400">✓</span> git checkout -b customer/acme</p>
            <p><span className="text-emerald-400">✓</span> edits the files</p>
            <p><span className="text-emerald-400">✓</span> git add . && git commit</p>
            <p><span className="text-emerald-400">✓</span> git push -u origin customer/acme</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'step-6',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 6: Switch back</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Switch back to main."} />
          <p className="text-gray-200 italic">"Switch back to main."</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          Claude Code runs <span className="text-emerald-400 font-mono">git checkout main</span>.<br />
          Your files are back to the original products.
        </p>
      </div>
    ),
  },

  {
    id: 'step-7',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 7: Invite a colleague</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Add elvira-demo as a collaborator to this repo."} />
          <p className="text-gray-200 italic">"Add elvira-demo as a collaborator to this repo."</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          Claude Code runs the GitHub CLI command to invite her.<br />
          She gets an email.
        </p>
      </div>
    ),
  },

  {
    id: 'step-8',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 8: Undo if needed</h2>
        <div className="code-block text-xl relative max-w-2xl w-full">
          <CopyButton text={"Undo the last commit and push."} />
          <p className="text-gray-200 italic">"Undo the last commit and push."</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          Claude Code reverts it. Your safety net still works.
        </p>
      </div>
    ),
  },

  {
    id: 'recap',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">What you said vs. what happened</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl w-full">
          <div className="card text-left">
            <h3 className="text-lg font-bold text-gray-200 mb-3">You said</h3>
            <div className="space-y-2 text-sm text-gray-300 italic">
              <p>"Create a product page..."</p>
              <p>"Create a repo and push"</p>
              <p>"Add a product, commit and push"</p>
              <p>"Create a branch for ACME..."</p>
              <p>"Switch back to main"</p>
              <p>"Add a collaborator"</p>
              <p>"Undo the last commit"</p>
            </div>
          </div>
          <div className="card text-left">
            <h3 className="text-lg font-bold text-gray-200 mb-3">Claude Code did</h3>
            <div className="space-y-2 text-sm text-gray-400 font-mono">
              <p>created 3 files</p>
              <p>git init, .gitignore, commit, gh repo create, push</p>
              <p>edited HTML, git add, commit, push</p>
              <p>checkout -b, edit, commit, push branch</p>
              <p>git checkout main</p>
              <p>gh repo add-collaborator</p>
              <p>git revert, push</p>
            </div>
          </div>
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
          You built a project, pushed it, branched it, shared it, and undid a mistake — all by talking.
        </p>
        <p className="text-xl text-gray-600 mt-6 max-w-md">
          Same Git concepts. Zero commands to remember.
        </p>
      </div>
    ),
  },
]

export default function HandsOnClaudeSession({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
