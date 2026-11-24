"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface MessageAction {
  label: string;
  url?: string;
  href?: string;
  icon?: string;
  isExternal?: boolean;
  copyText?: string;
}

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  actions?: MessageAction[];
  highlightBadge?: string;
}

const DEFAULT_SUGGESTIONS = [
  "Apps apa ini sebenarnya?",
  "Berapa nomor kontak Admin?",
  "Bagaimana cara curhat anonim?",
  "Berapa biaya konsultasi psikolog?",
  "Apakah privasi saya terjamin aman?",
];

export default function ChatAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "ai",
      text: "Halo! Saya Asisten Teduh. Kamu bisa tanya apa saja seputar aplikasi RuangTeduh, fitur curhat anonim, jadwal psikolog, atau meminta kontak WhatsApp Admin kami. Ada yang ingin kamu ketahui?",
      timestamp: "Baru saja",
      highlightBadge: "Asisten RuangTeduh",
      actions: [
        {
          label: "Tentang RuangTeduh",
          copyText: "Apps apa ini sebenarnya?",
          icon: "info",
        },
        {
          label: "Kontak Admin",
          copyText: "Berapa nomor kontak Admin?",
          icon: "support_agent",
        },
      ],
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const getAIResponse = (userQuery: string): { text: string; actions?: MessageAction[]; badge?: string } => {
    const q = userQuery.toLowerCase().trim();

    // 1. Inquiries about what the app is
    if (
      q.includes("apa") && (q.includes("apps") || q.includes("aplikasi") || q.includes("ruangteduh") || q.includes("ini") || q.includes("fungsi")) ||
      q.includes("tentang") ||
      q.includes("kegunaan") ||
      q.includes("layanan")
    ) {
      return {
        badge: "Tentang RuangTeduh",
        text: "**RuangTeduh** adalah aplikasi ruang aman kesehatan mental untuk mahasiswa dan dewasa muda Indonesia.\n\nLayanan utama kami:\n1. **Curhat Anonim** | Cerita tanpa nama, bebas dari penghakiman\n2. **Komunitas Sebaya** | Diskusi terarah seputar skripsi, karir, dan adaptasi\n3. **Konsultasi Psikolog** | Sesi privat dengan psikolog berlisensi (SIPP) dengan subsidi mahasiswa\n\nSemua data kamu aman dan terenkripsi.",
        actions: [
          {
            label: "Curhat Anonim",
            href: "/curhat",
            icon: "favorite",
          },
          {
            label: "Jelajahi Komunitas",
            href: "/komunitas",
            icon: "groups",
          },
          {
            label: "Jadwal Psikolog",
            href: "/konsultasi",
            icon: "psychology",
          },
        ],
      };
    }

    // 2. Inquiries about Admin Number / WhatsApp / Customer Service
    if (
      q.includes("admin") ||
      q.includes("nomer") ||
      q.includes("nomor") ||
      q.includes("wa") ||
      q.includes("whatsapp") ||
      q.includes("kontak") ||
      q.includes("hubungi") ||
      q.includes("cs") ||
      q.includes("customer service") ||
      q.includes("helpdesk")
    ) {
      return {
        badge: "Kontak Admin",
        text: "Berikut kontak resmi Admin RuangTeduh:\n\n📱 **WhatsApp:** `+62 812-3456-7890` (0812-RUANG-TEDUH)\n⏰ **Jam Layanan:** 08:00 – 22:00 WIB\n✉️ **Email:** `halo@ruangteduh.id`\n\nAdmin kami siap bantu seputar info subsidi, jadwal konsultasi, atau kendala akun.",
        actions: [
          {
            label: "Chat WhatsApp Admin",
            url: "https://wa.me/6281234567890?text=Halo%20Admin%20RuangTeduh%2C%20saya%20ingin%20bertanya...",
            icon: "chat",
            isExternal: true,
          },
          {
            label: "Salin Nomor",
            copyText: "+6281234567890",
            icon: "content_copy",
          },
        ],
      };
    }

    // 3. Curhat anonim specific
    if (q.includes("curhat") || q.includes("anonim") || q.includes("rahasia")) {
      return {
        badge: "Curhat Anonim",
        text: "Curhat di RuangTeduh **100% anonim**. Nama asli kamu tidak ditampilkan dan diganti kode pseudonim (misal: *Kawan #412*), sehingga kamu bisa bebas bercerita tanpa cemas.",
        actions: [
          {
            label: "Tulis Curhat",
            href: "/curhat/buat",
            icon: "edit_note",
          },
          {
            label: "Baca Curhat Lain",
            href: "/curhat",
            icon: "forum",
          },
        ],
      };
    }

    // 4. Konsultasi & Biaya
    if (q.includes("biaya") || q.includes("bayar") || q.includes("harga") || q.includes("psikolog") || q.includes("konsul")) {
      return {
        badge: "Konsultasi Psikolog",
        text: "Sesi konseling ditangani psikolog klinis berlisensi **SIPP**. Tersedia **subsidi biaya s/d 50%** khusus mahasiswa.\n\nSesi privat online via video call atau chat terenkripsi.",
        actions: [
          {
            label: "Pilih Psikolog",
            href: "/konsultasi",
            icon: "psychology",
          },
          {
            label: "Tanya Subsidi ke Admin",
            url: "https://wa.me/6281234567890?text=Halo%20Admin%2C%20saya%20mau%20tanya%20subsidi%20mahasiswa...",
            icon: "chat",
            isExternal: true,
          },
        ],
      };
    }

    // 5. Emergency / Krisis
    if (q.includes("darurat") || q.includes("krisis") || q.includes("bunuh") || q.includes("mati") || q.includes("tolong") || q.includes("bahaya")) {
      return {
        badge: "Bantuan Darurat",
        text: "Jika kamu sedang dalam krisis atau butuh bantuan segera, hubungi layanan darurat bebas pulsa 24 jam:\n\n📞 **Kemenkes Darurat:** `119 ext 8`\n📞 **KemenPPPA:** `129`\n\nKamu tidak sendirian. Tolong hubungi nomor di atas segera.",
        actions: [
          {
            label: "Panggil 119 ext 8",
            url: "tel:119",
            icon: "call",
            isExternal: true,
          },
        ],
      };
    }

    // 6. Default Fallback
    return {
      badge: "Panduan Bantuan",
      text: `Terima kasih sudah bertanya!\n\nUntuk pertanyaan kamu mengenai "${userQuery}", kamu bisa menjelajahi fitur utama kami atau menghubungi Admin resmi RuangTeduh di nomor WhatsApp **+62 812-3456-7890** untuk penjelasan lebih lanjut.`,
      actions: [
        {
          label: "Hubungi WhatsApp Admin",
          url: "https://wa.me/6281234567890",
          icon: "chat",
          isExternal: true,
        },
        {
          label: "Kembali ke Beranda",
          href: "/home",
          icon: "home",
        },
      ],
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const responseData = getAIResponse(query);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: responseData.text,
        timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
        actions: responseData.actions,
        highlightBadge: responseData.badge,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleResetChat = () => {
    if (confirm("Mulai percakapan baru dengan Asisten Teduh?")) {
      setMessages([
        {
          id: `welcome-${Date.now()}`,
          sender: "ai",
          text: "Percakapan baru telah dimulai. Apa yang ingin kamu tanyakan hari ini seputar RuangTeduh atau kontak admin?",
          timestamp: "Baru saja",
          highlightBadge: "Asisten RuangTeduh",
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-[412px] mx-auto bg-surface relative select-none">
      {/* Toast Notification for Copy */}
      {copiedText && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#17251D] text-white text-label-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
          <span>Nomor admin disalin ke clipboard!</span>
        </div>
      )}

      {/* App Bar / Header with Modern Glass Header */}
      <header className="sticky top-0 z-40 glass-header px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/home"
            aria-label="Kembali ke Beranda"
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="relative w-10 h-10 rounded-2xl bg-secondary-container text-primary flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                smart_toy
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface absolute -bottom-0.5 -right-0.5"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-headline-sm text-[16px] font-bold text-on-surface leading-tight">
                  Asisten Teduh
                </h1>
                <span className="bg-primary/10 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full border border-primary/20">
                  DEMO
                </span>
              </div>
              <span className="text-label-sm text-primary flex items-center gap-1.5 leading-tight font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Tersedia untuk menjawab
              </span>
            </div>
          </div>
        </div>

        {/* Action: Reset */}
        <button
          onClick={handleResetChat}
          title="Reset Percakapan"
          aria-label="Reset Percakapan"
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">refresh</span>
        </button>
      </header>

      {/* Chat Messages Body */}
      <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4 no-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} transition-all`}
          >
            {/* Sender / Badge row */}
            {msg.sender === "ai" && msg.highlightBadge && (
              <span className="text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-1 flex items-center gap-1 border border-primary/20">
                <span className="material-symbols-outlined text-[13px]">verified</span>
                {msg.highlightBadge}
              </span>
            )}

            <div className="flex items-start gap-2 max-w-[88%]">
              {msg.sender === "ai" && (
                <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0 mt-1 shadow-xs">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    spa
                  </span>
                </div>
              )}

              <div
                className={`p-3.5 rounded-2xl text-body-md leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-primary text-white rounded-tr-xs shadow-xs"
                    : "glass-card text-on-surface rounded-tl-xs border border-white/80 shadow-xs"
                }`}
              >
                {/* Message text with bold & line break parsing */}
                <div className="whitespace-pre-line space-y-1">
                  {msg.text.split("\n\n").map((paragraph, i) => (
                    <p key={i}>
                      {paragraph.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/).map((segment, j) => {
                        if (segment.startsWith("**") && segment.endsWith("**")) {
                          return (
                            <strong key={j} className={msg.sender === "user" ? "text-white" : "text-primary font-semibold"}>
                              {segment.slice(2, -2)}
                            </strong>
                          );
                        }
                        if (segment.startsWith("*") && segment.endsWith("*")) {
                          return <em key={j}>{segment.slice(1, -1)}</em>;
                        }
                        if (segment.startsWith("`") && segment.endsWith("`")) {
                          return (
                            <code
                              key={j}
                              className={`px-1.5 py-0.5 rounded font-mono text-xs ${
                                msg.sender === "user"
                                  ? "bg-white/20 text-white"
                                  : "bg-surface-container text-primary font-semibold"
                              }`}
                            >
                              {segment.slice(1, -1)}
                            </code>
                          );
                        }
                        return segment;
                      })}
                    </p>
                  ))}
                </div>

                {/* Action buttons if available */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-outline-variant/30 flex flex-wrap gap-2">
                    {msg.actions.map((action, idx) => {
                      if (action.copyText) {
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              if (action.copyText?.startsWith("+62")) {
                                handleCopy(action.copyText);
                              } else {
                                handleSend(action.copyText);
                              }
                            }}
                            className="bg-white/80 text-primary hover:bg-white px-3 py-1.5 rounded-xl text-label-sm font-semibold flex items-center gap-1.5 active:scale-95 transition-all shadow-xs border border-outline-variant/30 min-h-[36px]"
                          >
                            {action.icon && (
                              <span className="material-symbols-outlined text-[16px]">
                                {action.icon}
                              </span>
                            )}
                            <span>{action.label}</span>
                          </button>
                        );
                      }

                      if (action.url) {
                        return (
                          <a
                            key={idx}
                            href={action.url}
                            target={action.isExternal ? "_blank" : undefined}
                            rel={action.isExternal ? "noopener noreferrer" : undefined}
                            className="bg-primary text-white hover:bg-[#1B5E43] px-3 py-1.5 rounded-xl text-label-sm font-semibold flex items-center gap-1.5 active:scale-95 transition-all shadow-xs min-h-[36px]"
                          >
                            {action.icon && (
                              <span className="material-symbols-outlined text-[16px]">
                                {action.icon}
                              </span>
                            )}
                            <span>{action.label}</span>
                            {action.isExternal && (
                              <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                            )}
                          </a>
                        );
                      }

                      if (action.href) {
                        return (
                          <Link
                            key={idx}
                            href={action.href}
                            className="bg-white/80 text-primary hover:bg-white px-3 py-1.5 rounded-xl text-label-sm font-semibold flex items-center gap-1.5 active:scale-95 transition-all shadow-xs border border-outline-variant/30 min-h-[36px]"
                          >
                            {action.icon && (
                              <span className="material-symbols-outlined text-[16px]">
                                {action.icon}
                              </span>
                            )}
                            <span>{action.label}</span>
                          </Link>
                        );
                      }

                      return null;
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Timestamp */}
            <span
              className={`text-[10px] text-outline mt-1 px-1 ${
                msg.sender === "user" ? "text-right" : "text-left ml-9"
              }`}
            >
              {msg.timestamp}
            </span>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-2 max-w-[80%]">
            <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[16px]">smart_toy</span>
            </div>
            <div className="glass-card px-4 py-3 rounded-2xl rounded-tl-xs border border-white/80 flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-bounce"></span>
              <span
                className="w-2 h-2 rounded-full bg-primary animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></span>
              <span
                className="w-2 h-2 rounded-full bg-primary animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </main>

      {/* Suggested Quick Prompt Chips with Modern Glass Pill Styling */}
      <div className="px-4 py-2 border-t border-outline-variant/20 glass-nav overflow-x-auto no-scrollbar flex items-center gap-2">
        <span className="text-label-sm text-outline shrink-0 flex items-center gap-1">
          <span className="material-symbols-outlined text-[15px] text-primary">tips_and_updates</span>
          Coba:
        </span>
        {DEFAULT_SUGGESTIONS.map((suggestion, idx) => (
          <button
            key={idx}
            disabled={isTyping}
            onClick={() => handleSend(suggestion)}
            className="text-label-sm font-medium glass-pill hover:bg-white text-on-surface px-3 py-1.5 rounded-full border border-white/70 shrink-0 whitespace-nowrap active:scale-95 transition-all shadow-xs disabled:opacity-50"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Bottom Message Input Bar with Glass Nav */}
      <footer className="p-3 glass-nav border-t border-white/80">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <div className="flex-1 relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya info atau kontak Admin..."
              className="w-full glass-input rounded-2xl py-3 pl-4 pr-10 text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-white shadow-xs transition-all"
            />
            {input.trim() && (
              <button
                type="button"
                onClick={() => setInput("")}
                className="absolute right-3 text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            aria-label="Kirim Pesan"
            className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1B5E43] active:scale-95 transition-all shadow-xs shrink-0"
          >
            <span className="material-symbols-outlined text-[22px]">send</span>
          </button>
        </form>
      </footer>
    </div>
  );
}
