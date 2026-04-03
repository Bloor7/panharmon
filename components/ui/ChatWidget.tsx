"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "assistant" | "user";
  text: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: "assistant",
    text: "Chào bạn, tôi là Aether — trợ lý giải mã giấc mơ của Panharmon. Hãy kể cho tôi nghe giấc mơ bạn vừa trải qua.",
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const send = () => {
    const text = input.trim();
    if (!text || thinking) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Tôi đang phân tích biểu tượng trong giấc mơ của bạn... Hãy ghé thăm mục Giải Mã để nhận báo cáo chi tiết từ AI của chúng tôi.",
        },
      ]);
      setThinking(false);
    }, 1400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {open && (
        <div className="w-80 bg-abyss border border-veil flex flex-col shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-veil bg-deep">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-star uppercase">Aether AI</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-lavender hover:text-gold transition-colors text-lg leading-none"
              aria-label="Đóng chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 max-h-72">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 text-sm font-body leading-relaxed ${
                    msg.role === "user"
                      ? "bg-mist text-star"
                      : "bg-veil text-lavender border-l-2 border-gold"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="flex justify-start">
                <div className="bg-veil border-l-2 border-gold px-3 py-2">
                  <span className="font-mono text-xs text-iris tracking-widest">đang suy ngẫm...</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-veil">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Kể về giấc mơ của bạn..."
              className="flex-1 bg-transparent px-4 py-3 font-body text-sm text-ghost placeholder:text-lavender/40 outline-none"
            />
            <button
              onClick={send}
              disabled={!input.trim() || thinking}
              className="px-4 py-3 text-gold hover:text-gold-light transition-colors disabled:opacity-30"
              aria-label="Gửi"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8L14 2L10 8L14 14L2 8Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 bg-gold hover:bg-gold-light transition-colors flex items-center justify-center shadow-lg"
        aria-label="Mở chat AI"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4L16 16M16 4L4 16" stroke="#07050f" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#07050f" strokeWidth="1.2" />
            <ellipse cx="12" cy="12" rx="9" ry="5" stroke="#07050f" strokeWidth="0.8" opacity="0.5" />
            <circle cx="12" cy="12" r="3.5" fill="#07050f" opacity="0.9" />
            <circle cx="13" cy="11" r="1.3" fill="rgba(255,255,255,0.7)" />
          </svg>
        )}
      </button>
    </div>
  );
}
