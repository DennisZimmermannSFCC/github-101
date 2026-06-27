import SlideViewer from '../components/SlideViewer'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🤝</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
          GitHub 104
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Share your private repos with colleagues
        </p>
        <div className="card max-w-md">
          <p className="text-gray-400 text-lg">Invite people, control access, collaborate</p>
          <p className="text-gray-500 mt-2">All on github.com — no terminal needed</p>
        </div>
      </div>
    ),
  },

  {
    id: 'why-private',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Why private repos?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-amber-400 font-semibold text-lg mb-3">Private = only invited people</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Demo scripts with pricing info</li>
              <li>• Customer-specific configurations</li>
              <li>• Internal talk tracks</li>
              <li>• API keys in .env.example</li>
              <li>• Competitive positioning notes</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-amber-400 font-semibold text-lg mb-3">You control who sees what</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Add colleagues one by one</li>
              <li>• Or create a team with shared access</li>
              <li>• Remove access anytime</li>
              <li>• See who viewed or changed files</li>
            </ul>
          </div>
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center">
            <span className="text-amber-400 font-semibold">Rule of thumb:</span> Start private. You can always make it public later — but you can't un-share something that was public.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'invite-collaborator',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-mono">Step 1</span>
          <h2 className="text-3xl font-bold">Invite a collaborator</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="card mb-4">
              <h3 className="text-amber-400 font-semibold text-lg mb-3">What we do</h3>
              <p className="text-gray-300">Add a colleague to your private repo so they can see and edit files.</p>
            </div>
            <div className="card">
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">Why we do it</h3>
              <p className="text-gray-400">Until you invite someone, a private repo is invisible to them. They can't find it, clone it, or see that it exists.</p>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along on github.com</h3>
            <ol className="space-y-3 text-gray-300 text-sm">
              <li><span className="text-amber-400 font-semibold">1.</span> Go to your repo</li>
              <li><span className="text-amber-400 font-semibold">2.</span> Click <span className="font-semibold">Settings</span> (top tab)</li>
              <li><span className="text-amber-400 font-semibold">3.</span> Click <span className="font-semibold">Collaborators</span> (left sidebar)</li>
              <li><span className="text-amber-400 font-semibold">4.</span> Click <span className="text-emerald-400 font-semibold">"Add people"</span></li>
              <li><span className="text-amber-400 font-semibold">5.</span> Search their GitHub username or email</li>
              <li><span className="text-amber-400 font-semibold">6.</span> Click "Add collaborator"</li>
            </ol>
            <div className="mt-4 bg-gray-900 rounded-lg p-3 text-sm text-gray-400">
              They'll receive an email invitation. Once they accept, they can clone, push, and create branches.
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'what-they-can-do',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-mono">Step 2</span>
          <h2 className="text-3xl font-bold">What your colleague does next</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-amber-400 font-semibold text-lg mb-3">They accept the invite</h3>
          <p className="text-gray-400 mb-3">They'll get an email or see a notification on GitHub. One click to accept.</p>
        </div>
        <div className="card mb-6">
          <h3 className="text-gray-200 font-semibold mb-3">Then they can</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex gap-2"><span className="text-emerald-400">✓</span> See the repo on github.com</p>
              <p className="flex gap-2"><span className="text-emerald-400">✓</span> Clone it to their machine</p>
              <p className="flex gap-2"><span className="text-emerald-400">✓</span> Edit files in the browser</p>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex gap-2"><span className="text-emerald-400">✓</span> Create branches</p>
              <p className="flex gap-2"><span className="text-emerald-400">✓</span> Open pull requests</p>
              <p className="flex gap-2"><span className="text-emerald-400">✓</span> Push changes</p>
            </div>
          </div>
        </div>
        <div className="card">
          <p className="text-gray-400 text-center text-sm">
            They clone it with: <code className="bg-gray-700 px-2 py-0.5 rounded">git clone https://github.com/YOU/commerce-agent-demo</code>
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'share-link',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-mono">Tip</span>
          <h2 className="text-3xl font-bold">Sharing the repo link</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-amber-400 font-semibold text-lg mb-3">Just send the URL</h3>
          <div className="code-block text-lg">
            <p className="text-amber-400">https://github.com/YOUR-NAME/commerce-agent-demo</p>
          </div>
          <p className="text-gray-500 text-sm mt-3">They can only access it if you've already added them as a collaborator.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-2">What they need</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• A GitHub account</li>
              <li>• Your invite accepted</li>
              <li>• That's it</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-2">What to include in your message</h3>
            <div className="bg-gray-900 rounded-lg p-3 text-sm text-gray-300">
              <p>"Here's our demo repo:</p>
              <p className="text-amber-400 mt-1">[link]</p>
              <p className="mt-2">Clone it, run npm install && npm start.</p>
              <p>The README has all the details."</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'teams',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-mono">Step 3</span>
          <h2 className="text-3xl font-bold">Use a GitHub Organization (optional)</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-amber-400 font-semibold text-lg mb-3">When you have many repos and many people</h3>
          <p className="text-gray-400">Instead of inviting people to each repo individually, create an Organization and add everyone once.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-3">Without an org</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Invite Sarah to repo A</li>
              <li>• Invite Sarah to repo B</li>
              <li>• Invite Sarah to repo C</li>
              <li>• Invite Marcus to repo A...</li>
            </ul>
            <p className="text-gray-500 text-xs mt-2">Gets tedious fast.</p>
          </div>
          <div className="card">
            <h3 className="text-gray-200 font-semibold mb-3">With an org</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Create org "your-team-demos"</li>
              <li>• Add Sarah and Marcus to the org</li>
              <li>• All repos in the org → they have access</li>
            </ul>
            <p className="text-gray-500 text-xs mt-2">Add once, access everything.</p>
          </div>
        </div>
        <div className="card mt-6">
          <p className="text-gray-400 text-center text-sm">
            Create an org: github.com → "+" icon → "New organization" → Free plan is fine.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 'remove-access',
    content: () => (
      <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-mono">Step 4</span>
          <h2 className="text-3xl font-bold">Remove access when needed</h2>
        </div>
        <div className="card mb-6">
          <h3 className="text-amber-400 font-semibold text-lg mb-3">What we do</h3>
          <p className="text-gray-300">If someone leaves the team or shouldn't have access anymore, remove them in seconds.</p>
        </div>
        <div className="card mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-200">Follow along</h3>
          <ol className="space-y-2 text-gray-300 text-sm">
            <li><span className="text-amber-400 font-semibold">1.</span> Repo → Settings → Collaborators</li>
            <li><span className="text-amber-400 font-semibold">2.</span> Find the person</li>
            <li><span className="text-amber-400 font-semibold">3.</span> Click "Remove"</li>
          </ol>
        </div>
        <div className="card">
          <h3 className="text-cyan-400 font-semibold mb-2">Why this matters</h3>
          <p className="text-gray-400 text-sm">With email attachments, once you send it, you've lost control. With GitHub, you can revoke access instantly. The files stay in your repo — they just can't see them anymore.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'summary',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="text-6xl mb-6">🤝</div>
        <h2 className="text-4xl font-bold mb-6">Sharing, controlled</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-lg">
          Private repos keep your work safe. Collaborators let you share it with exactly the right people.
        </p>
        <div className="grid md:grid-cols-3 gap-4 max-w-2xl mb-8">
          <div className="card !p-4">
            <p className="text-xl mb-1">🔒</p>
            <p className="text-amber-400 font-semibold text-xs">Private by default</p>
            <p className="text-gray-500 text-xs">Only you can see it</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">➕</p>
            <p className="text-amber-400 font-semibold text-xs">Invite people</p>
            <p className="text-gray-500 text-xs">They clone and contribute</p>
          </div>
          <div className="card !p-4">
            <p className="text-xl mb-1">🚫</p>
            <p className="text-amber-400 font-semibold text-xs">Revoke anytime</p>
            <p className="text-gray-500 text-xs">You stay in control</p>
          </div>
        </div>
        <div className="card max-w-lg">
          <p className="text-gray-400 text-sm">
            No more emailing ZIP files. No more "which version?" questions. One repo, invited collaborators, full history.
          </p>
        </div>
      </div>
    ),
  },
]

export default function GitHub104({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
