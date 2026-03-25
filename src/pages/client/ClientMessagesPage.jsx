import { useState } from 'react'
import { Send } from 'lucide-react'

const conversations = [
  {
    id: 1, name: 'Amara Diallo', project: 'Brand Identity Package', avatar: 'AD',
    preview: "I've uploaded the revised logo concepts. Let me know what you think!",
    time: '2h ago', unread: 2,
    messages: [
      { from: 'them', text: "Hi! I've started working on the moodboard. Any reference styles you like?", time: '10:00 AM' },
      { from: 'me', text: 'I love the minimalist approach with strong typography. Think Swiss style.', time: '10:15 AM' },
      { from: 'them', text: "Perfect! That aligns well with the brief. I'll have concepts ready by Thursday.", time: '10:17 AM' },
      { from: 'them', text: "I've uploaded the revised logo concepts. Let me know what you think!", time: '12:45 PM' },
    ],
  },
  {
    id: 2, name: 'Kofi Mensah', project: 'Website Redesign', avatar: 'KM',
    preview: 'The staging site is ready for your review at the shared link.',
    time: 'Yesterday', unread: 1,
    messages: [
      { from: 'me', text: 'Hey Kofi, how is the homepage coming along?', time: 'Yesterday 2:00 PM' },
      { from: 'them', text: "Almost done! I'm just finishing the animations. The staging site is ready for your review at the shared link.", time: 'Yesterday 4:30 PM' },
    ],
  },
  {
    id: 3, name: 'Zara Okonkwo', project: 'Social Media Kit', avatar: 'ZO',
    preview: 'All files have been delivered. Thanks for the great collab!',
    time: 'Mar 15', unread: 0,
    messages: [
      { from: 'them', text: 'All files have been delivered. Thanks for the great collab!', time: 'Mar 15' },
      { from: 'me', text: 'Amazing work, Zara! Will definitely work with you again.', time: 'Mar 15' },
    ],
  },
]

export default function ClientMessagesPage() {
  const [active, setActive] = useState(conversations[0])
  const [text, setText] = useState('')
  const [allConvos, setAllConvos] = useState(conversations)

  function send() {
    if (!text.trim()) return
    setAllConvos(prev => prev.map(c =>
      c.id === active.id
        ? { ...c, messages: [...c.messages, { from: 'me', text: text.trim(), time: 'Just now' }], preview: text.trim(), unread: 0 }
        : c
    ))
    setActive(prev => ({ ...prev, messages: [...prev.messages, { from: 'me', text: text.trim(), time: 'Just now' }] }))
    setText('')
  }

  return (
    <div className="flex gap-0 h-[calc(100vh-10rem)] bg-white rounded-xl border border-ink-100 overflow-hidden">
      {/* Conversation list */}
      <div className="w-72 border-r border-ink-100 flex flex-col shrink-0">
        <div className="px-4 py-4 border-b border-ink-100">
          <h1 className="text-base font-semibold text-ink-900">Messages</h1>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-ink-100">
          {allConvos.map(c => (
            <button key={c.id} onClick={() => setActive(c)}
              className={`w-full text-left px-4 py-3.5 hover:bg-ink-50 transition-colors ${active.id === c.id ? 'bg-phos-50 border-r-2 border-phos-500' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-ink-800 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {c.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-ink-900 truncate">{c.name}</p>
                    <span className="text-xs text-ink-400 shrink-0 ml-2">{c.time}</span>
                  </div>
                  <p className="text-xs text-ink-400 truncate mt-0.5">{c.preview}</p>
                </div>
                {c.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-phos-500 flex items-center justify-center text-xs font-bold text-ink-950 shrink-0">
                    {c.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="px-6 py-4 border-b border-ink-100">
          <p className="text-sm font-semibold text-ink-900">{active.name}</p>
          <p className="text-xs text-ink-400">{active.project}</p>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {active.messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2.5 rounded-2xl text-sm ${
                m.from === 'me' ? 'bg-phos-500 text-ink-950 rounded-br-md' : 'bg-ink-100 text-ink-800 rounded-bl-md'
              }`}>
                <p>{m.text}</p>
                <p className={`text-xs mt-1 ${m.from === 'me' ? 'text-ink-700' : 'text-ink-400'}`}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-ink-100">
          <div className="flex gap-3">
            <input
              value={text} onChange={e => setText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Write a message…"
              className="flex-1 px-4 py-2.5 border border-ink-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-phos-300 focus:border-phos-400 text-ink-800 placeholder-ink-400"
            />
            <button onClick={send} className="px-4 py-2.5 bg-phos-500 hover:bg-phos-600 rounded-xl text-ink-950 transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
