import { useState } from 'react'

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-gray-200 text-xs transition-colors"
      title="Copy to clipboard"
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  )
}
