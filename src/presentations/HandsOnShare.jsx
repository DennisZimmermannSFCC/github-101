import SlideViewer from '../components/SlideViewer'
import CopyButton from '../components/CopyButton'

const slides = [
  {
    id: 'title',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
          Share Your Project
        </h1>
        <p className="text-2xl text-gray-400">
          Give a colleague access to your repo
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
            <p className="text-lg text-gray-400 mt-2">You own the repo.</p>
          </div>
          <div className="card text-center">
            <p className="text-5xl mb-4">👩</p>
            <h3 className="text-2xl font-bold text-cyan-400">Elvira</h3>
            <p className="text-lg text-gray-400 mt-2">She wants to see and use it.</p>
          </div>
        </div>
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
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 1: Invite Elvira</h2>
        <div className="max-w-2xl w-full space-y-4 text-xl text-gray-300">
          <p><span className="text-emerald-400 font-semibold">1.</span> Go to your repo on github.com</p>
          <p><span className="text-emerald-400 font-semibold">2.</span> Click <span className="font-semibold">Settings</span></p>
          <p><span className="text-emerald-400 font-semibold">3.</span> Click <span className="font-semibold">Collaborators</span></p>
          <p><span className="text-emerald-400 font-semibold">4.</span> Click <span className="text-emerald-400 font-semibold">"Add people"</span></p>
          <p><span className="text-emerald-400 font-semibold">5.</span> Search for Elvira's GitHub username</p>
          <p><span className="text-emerald-400 font-semibold">6.</span> Click "Add collaborator"</p>
        </div>
        <p className="text-lg text-gray-500 mt-8 text-center">Elvira gets an email.</p>
      </div>
    ),
  },

  {
    id: 'step-2-accept',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 2: Elvira accepts</h2>
        <p className="text-xl text-gray-300 text-center max-w-md">
          She clicks the link in the email and accepts the invitation.
        </p>
        <p className="text-xl text-gray-500 mt-8 text-center">
          She can now see the repo on GitHub.
        </p>
      </div>
    ),
  },

  {
    id: 'step-3-clone',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">👩</span>
          <span className="text-cyan-400 font-semibold text-lg">Elvira</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">Step 3: Elvira downloads it</h2>
        <div className="code-block text-xl relative max-w-2xl w-full space-y-3">
          <CopyButton text={"git clone https://github.com/YOUR-USERNAME/my-website.git\ncd my-website"} />
          <p className="text-cyan-400 font-mono">git clone https://github.com/YOUR-USERNAME/my-website.git</p>
          <p className="text-cyan-400 font-mono">cd my-website</p>
        </div>
        <p className="text-xl text-gray-400 mt-8 text-center max-w-xl">
          She now has the full project on her computer.<br />
          All files, all history — an exact copy.
        </p>
      </div>
    ),
  },

  {
    id: 'thats-it',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">That's sharing</h2>
        <div className="max-w-md space-y-6 text-2xl text-left">
          <p className="text-gray-300"><span className="text-emerald-400">🧑</span> You invite</p>
          <p className="text-gray-300"><span className="text-cyan-400">👩</span> They accept</p>
          <p className="text-gray-300"><span className="text-cyan-400">👩</span> They clone</p>
          <p className="text-gray-300"><span className="text-emerald-400">✓</span> They have everything</p>
        </div>
        <p className="text-xl text-gray-500 mt-10 max-w-md">
          No ZIP files. No email attachments.<br />Just a link and a clone.
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
          Elvira has your project. She can open the files, run the demo, see the full history.
        </p>
        <p className="text-xl text-gray-600 mt-6 max-w-md">
          Next: learn how to collaborate — both people making changes to the same repo.
        </p>
      </div>
    ),
  },
]

export default function HandsOnShare({ onHome }) {
  return <SlideViewer slides={slides} onHome={onHome} />
}
