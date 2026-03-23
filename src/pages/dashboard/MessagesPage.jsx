import { useState } from 'react'
import { Send, Search, Paperclip, MoreHorizontal } from 'lucide-react'

const conversations = [
  {
    id: 1, client: 'James Osei', company: 'Solaris Energy', initials: 'JO', color: 'from-amber-400 to-orange-500',
    lastMessage: 'Looks great! Can we also adjust the secondary colour to be slightly warmer?',
    time: '10:24 AM', unread: 2, online: true,
    messages: [
      { id: 1, from: 'client', text: 'Hi Amara, just had a chance to review the first round of concepts.', time: '9:00 AM' },
      { id: 2, from: 'me', text: 'Great! I\'m excited to hear your thoughts. The three directions explore different positions for the brand.', time: '9:05 AM' },
      { id: 3, from: 'client', text: 'I really love Concept B — the geometric mark feels very strong and professional.', time: '9:20 AM' },
      { id: 4, from: 'me', text: 'Concept B is my favourite too. It\'s the most distinctive and will scale well across formats.', time: '9:45 AM' },
      { id: 5, from: 'client', text: 'Looks great! Can we also adjust the secondary colour to be slightly warmer?', time: '10:24 AM' },
    ],
  },
  {
    id: 2, client: 'Sarah Mitchell', company: 'Kente Digital', initials: 'SM', color: 'from-emerald-400 to-teal-600',
    lastMessage: 'The social assets for this week are ready — uploading them now.', time: 'Yesterday', unread: 0, online: false,
    messages: [
      { id: 1, from: 'me', text: 'Hi Sarah, the March social kit is complete. I\'ve included 12 posts across 3 formats.', time: 'Yesterday 3:00 PM' },
      { id: 2, from: 'client', text: 'Perfect! The quality keeps getting better every month. We\'re very happy.', time: 'Yesterday 3:30 PM' },
      { id: 3, from: 'me', text: 'The social assets for this week are ready — uploading them now.', time: 'Yesterday 4:00 PM' },
    ],
  },
  {
    id: 3, client: 'Chidi Okafor', company: 'Pula Fintech', initials: 'CO', color: 'from-purple-400 to-purple-700',
    lastMessage: 'I\'ve filled in the brief form. Looking forward to seeing the first concepts!', time: 'Mar 20', unread: 1, online: true,
    messages: [
      { id: 1, from: 'client', text: 'Hi! We found you through the Phos explore page. We need a logo for our fintech startup.', time: 'Mar 20 11:00 AM' },
      { id: 2, from: 'me', text: 'Hi Chidi! Thanks for reaching out. I\'d love to work on this. Could you fill in the brief form so I can understand the project better?', time: 'Mar 20 11:30 AM' },
      { id: 3, from: 'client', text: 'I\'ve filled in the brief form. Looking forward to seeing the first concepts!', time: 'Mar 20 2:00 PM' },
    ],
  },
]

export default function MessagesPage() {
  const [activeConv, setActiveConv] = useState(conversations[0])
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')

  function sendMessage(e) {
    e.preventDefault()
    if (!input.trim()) return
    setInput('')
    // In production: push to Supabase realtime channel
  }

  const filtered = conversations.filter(c =>
    !search || c.client.toLowerCase().includes(search.toLowerCase()) || c.company.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="h-[calc(100vh-65px)] flex">
      {/* Sidebar */}
      <div className="w-72 shrink-0 bg-white border-r border-ink-100 flex flex-col">
        <div className="p-4 border-b border-ink-100">
          <h1 className="font-bold text-ink-900 mb-3">Messages</h1>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
            <input type="text" placeholder="Search conversations..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 bg-ink-50 border border-ink-200 rounded-lg text-xs text-ink-700 focus:outline-none focus:border-phos-400" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-ink-50">
          {filtered.map(conv => (
            <button key={conv.id} onClick={() => setActiveConv(conv)}
              className={`w-full flex items-start gap-3 p-4 text-left transition-colors ${activeConv.id === conv.id ? 'bg-phos-50' : 'hover:bg-ink-50'}`}>
              <div className="relative shrink-0">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${conv.color} flex items-center justify-center text-white font-bold text-xs`}>
                  {conv.initials}
                </div>
                {conv.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-sm font-semibold text-ink-900 truncate">{conv.client}</span>
                  <span className="text-xs text-ink-400 shrink-0 ml-2">{conv.time}</span>
                </div>
                <p className="text-xs text-ink-500 truncate">{conv.lastMessage}</p>
              </div>
              {conv.unread > 0 && (
                <span className="w-5 h-5 bg-phos-600 text-white text-xs rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">
                  {conv.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      {activeConv ? (
        <div className="flex-1 flex flex-col bg-ink-50">
          {/* Chat header */}
          <div className="bg-white border-b border-ink-100 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${activeConv.color} flex items-center justify-center text-white font-bold text-xs`}>
                  {activeConv.initials}
                </div>
                {activeConv.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full" />}
              </div>
              <div>
                <div className="font-semibold text-ink-900 text-sm">{activeConv.client}</div>
                <div className="text-xs text-ink-500">{activeConv.company} · {activeConv.online ? 'Online' : 'Offline'}</div>
              </div>
            </div>
            <button className="p-2 text-ink-400 hover:text-ink-700 hover:bg-ink-100 rounded-lg transition-colors">
              <MoreHorizontal size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {activeConv.messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md ${msg.from === 'me' ? 'order-1' : ''}`}>
                  <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === 'me'
                      ? 'bg-phos-600 text-white rounded-tr-sm'
                      : 'bg-white text-ink-800 border border-ink-200 rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                  <p className={`text-xs text-ink-400 mt-1 ${msg.from === 'me' ? 'text-right' : 'text-left'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="bg-white border-t border-ink-100 p-4">
            <form onSubmit={sendMessage} className="flex items-center gap-3">
              <button type="button" className="p-2 text-ink-400 hover:text-ink-700 transition-colors">
                <Paperclip size={18} />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-ink-50 border border-ink-200 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-phos-400 transition-colors"
              />
              <button type="submit"
                className="w-10 h-10 bg-phos-600 hover:bg-phos-700 text-white rounded-xl flex items-center justify-center transition-colors shrink-0 disabled:opacity-40"
                disabled={!input.trim()}>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-ink-50">
          <p className="text-ink-400">Select a conversation</p>
        </div>
      )}
    </div>
  )
}
