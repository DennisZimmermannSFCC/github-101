import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Share Your Project<br />with a Colleague
        </h1>
        <p className="text-2xl text-gray-400">
          Invite someone, they clone it, make a change, you get it
        </p>
      </div>
    ),
  },

  {
    id: 'the-cast',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Two people</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl w-full">
          <div className="card text-center">
            <p className="text-5xl mb-4">🧑</p>
            <h3 className="text-2xl font-bold text-emerald-400">You</h3>
            <p className="text-lg text-gray-400 mt-2">You created the project.<br />You own the repo.</p>
          </div>
          <div className="card text-center">
            <p className="text-5xl mb-4">👩</p>
            <h3 className="text-2xl font-bold text-cyan-400">Sarah</h3>
            <p className="text-lg text-gray-400 mt-2">Your colleague.<br />She wants to use and improve it.</p>
          </div>
        </div>
        <p className="text-xl text-gray-500 mt-10">Let's walk through the full flow.</p>
      </div>
    ),
  },

  {
    id: 'step-1-invite',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🧑</span>
          <span className="text-emerald-400 font-semibold text-lg">You</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Invite Sarah</h2>
        <div className="max-w-2xl w-full space-y-6">
          <p className="text-xl text-gray-400 text-center">On github.com, go to your repo:</p>
          <div className="space-y-3 text-xl text-gray-300">
            <p><span className="text-emerald-400 font-semibold">1.</span> Click <span className="font-semibold">Settings</span> (top tab)</p>
            <p><span className="text-emerald-400 font-semibold">2.</span> Click <span className="font-semibold">Collaborators</span> (left sidebar)</p>
            <p><span className="text-emerald-400 font-semibold">3.</span> Click <span className="text-emerald-400 font-semibold">"Add people"</span></p>
            <p><span className="text-emerald-400 font-semibold">4.</span> Search for Sarah's GitHub username</p>
            <p><span className="text-emerald-400 font-semibold">5.</span> Click "Add collaborator"</p>
          </div>
          <p className="text-lg text-gray-500 text-center">Sarah gets an email invitation.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-2-accept',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Sarah</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Sarah accepts</h2>
        <div className="max-w-xl w-full text-center">
          <p className="text-xl text-gray-300 mb-6">Sarah clicks the link in the email (or the notification on GitHub).</p>
          <p className="text-xl text-gray-300">She clicks <span className="text-emerald-400 font-semibold">"Accept invitation"</span>.</p>
          <p className="text-xl text-gray-500 mt-8">That's it. She can now see the repo.</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-3-clone',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Sarah</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 3: Sarah clones the repo</h2>
        <div className="code-block text-xl relative max-w-2xl w-full space-y-3">
          <CopyButton text={"git clone https://github.com/YOUR-USERNAME/my-website.git\ncd my-website"} />
          <p className="text-cyan-400 font-mono">git clone https://github.com/YOUR-USERNAME/my-website.git</p>
          <p className="text-cyan-400 font-mono">cd my-website</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          She now has the full project on her computer — all files, all history.
        </p>
      </div>
    ),
  },

  {
    id: 'step-4-sarah-edits',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Sarah</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 4: Sarah makes a change</h2>
        <p className="text-xl text-gray-400 mb-6 text-center">She opens index.html and adds a line:</p>
        <div className="code-block text-lg relative max-w-2xl w-full">
          <CopyButton text={"  <p>Updated by Sarah — added contact info.</p>"} />
          <p className="text-cyan-400">  {"<p>Updated by Sarah — added contact info.</p>"}</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center">Then she saves, commits, and pushes:</p>
        <div className="code-block text-xl relative max-w-2xl w-full mt-4 space-y-3">
          <CopyButton text={"git add .\ngit commit -m \"Add contact info\"\ngit push"} />
          <p className="text-cyan-400 font-mono">git add .</p>
          <p className="text-cyan-400 font-mono">git commit -m "Add contact info"</p>
          <p className="text-cyan-400 font-mono">git push</p>
        </div>
      </div>
    ),
  },

  {
    id: 'step-5-you-pull',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">🧑</span>
          <span className="text-emerald-400 font-semibold text-lg">You</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 5: You pull her changes</h2>
        <div className="code-block text-2xl relative max-w-2xl w-full">
          <CopyButton text={"git pull"} />
          <p className="text-emerald-400 font-mono">git pull</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          Open index.html — Sarah's line is there.<br />
          You didn't copy any files. It just appeared.
        </p>
      </div>
    ),
  },

  {
    id: 'the-flow',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">The sharing flow</h2>
        <div className="max-w-2xl w-full space-y-3">
          {[
            { who: '🧑 You', action: 'Invite Sarah to the repo', color: 'text-emerald-400' },
            { who: '👩 Sarah', action: 'Accepts, clones the repo', color: 'text-cyan-400' },
            { who: '👩 Sarah', action: 'Edits, commits, pushes', color: 'text-cyan-400' },
            { who: '🧑 You', action: 'Pulls — gets her changes instantly', color: 'text-emerald-400' },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center gap-4 text-xl bg-gray-800/50 border border-gray-700/50 rounded-lg px-5 py-3">
                <span className={`font-semibold w-24 shrink-0 ${item.color}`}>{item.who}</span>
                <span className="text-gray-300">{item.action}</span>
              </div>
              {i < 3 && <div className="text-center text-gray-700 text-lg">↓</div>}
            </div>
          ))}
        </div>
        <p className="text-xl text-gray-500 mt-8">No emails. No ZIPs. No "which version?"</p>
      </div>
    ),
  },

  {
    id: 'both-ways',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">It works both ways</h2>
        <div className="max-w-xl w-full space-y-6 text-xl text-left">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🧑</span>
            <p className="text-gray-300">You push a change → Sarah runs <span className="text-emerald-400 font-mono">git pull</span> → she has it</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">👩</span>
            <p className="text-gray-300">Sarah pushes a change → you run <span className="text-emerald-400 font-mono">git pull</span> → you have it</p>
          </div>
        </div>
        <p className="text-2xl text-gray-400 mt-10 max-w-lg">
          GitHub is the meeting point. Push sends. Pull receives.
        </p>
      </div>
    ),
  },

  {
    id: 'cheatsheet',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white text-center">Cheat Sheet</h2>
        <div className="space-y-4 text-xl max-w-3xl w-full">
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-mono w-48 shrink-0">git push</span>
            <span className="text-gray-400">= send your changes to GitHub</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-mono w-48 shrink-0">git pull</span>
            <span className="text-gray-400">= get changes from GitHub</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-mono w-48 shrink-0">git clone URL</span>
            <span className="text-gray-400">= download a repo for the first time</span>
          </div>
        </div>
        <div className="card mt-10 max-w-md">
          <p className="text-gray-400 text-center">
            <span className="text-emerald-400 font-semibold">push</span> = upload.
            <span className="text-cyan-400 font-semibold ml-4">pull</span> = download.
            <span className="text-amber-400 font-semibold ml-4">clone</span> = first download.
          </p>
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
          You and Sarah are now collaborating. One repo, two people, always in sync.
        </p>
        <p className="text-xl text-gray-600 mt-6">
          Add more colleagues the same way. It scales.
        </p>
      </div>
    ),
  },
]

export default function HandsOnShare({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
