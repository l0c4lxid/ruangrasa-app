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
      text: "Halo, Kawan Rasa! 🌿\n\nSaya **Asisten Teduh AI**, asisten cerdas yang siap membantu dan menemani kamu di RuangTeduh.\n\nKamu bisa bertanya tentang cara kerja aplikasi ini, fitur-fitur yang tersedia, atau meminta kontak Admin resmi kami jika butuh bantuan langsung. Ada yang ingin kamu tanyakan?",
      timestamp: "Baru saja",
      highlightBadge: "AI Pendamping Ramah",
      actions: [
        {
          label: "Tentang RuangTeduh",
          copyText: "Apps apa ini sebenarnya?",
          icon: "info",
        },
        {
          label: "Minta Nomor Admin",
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

    // 1. Inquiries about what the app is ("apps apa ini", "apa itu ruangteduh", "tentang aplikasi", "penjelasan")
    if (
      q.includes("apa") && (q.includes("apps") || q.includes("aplikasi") || q.includes("ruangteduh") || q.includes("ini") || q.includes("fungsi")) ||
      q.includes("tentang") ||
      q.includes("kegunaan") ||
      q.includes("layanan")
    ) {
      return {
        badge: "Tentang RuangTeduh",
        text: "**RuangTeduh (RuangRasa)** adalah platform ruang aman kesehatan mental yang dirancang khusus untuk mahasiswa dan dewasa muda Indonesia dengan pendekatan berjenjang (*Stepped-Care*).\n\nBerikut 3 pilar layanan utama kami:\n\n1. **Curhat Anonim** — Tuangkan unek-unek tanpa nama dan dapatkan dukungan hangat sesama kawan.\n2. **Komunitas Lingkar Sebaya** — Ruang diskusi seputar topik skripsi, quarter-life crisis, rantau, hingga keluarga.\n3. **Konsultasi Psikolog Profesional** — Sesi privat online bersama psikolog berlisensi (SIPP) dengan subsidi s/d 50% untuk mahasiswa.\n\nSemua data kamu dilindungi dengan prinsip UU PDP & privasi ketat.",
        actions: [
          {
            label: "Mulai Curhat Anonim",
            href: "/curhat",
            icon: "favorite",
          },
          {
            label: "Jelajahi Komunitas",
            href: "/komunitas",
            icon: "groups",
          },
          {
            label: "Cari Jadwal Psikolog",
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
        badge: "Kontak Resmi Admin",
        text: "Tentu! Kamu bisa langsung menghubungi tim Admin & Layanan Pengguna RuangTeduh melalui saluran berikut:\n\n📱 **WhatsApp Admin Resmi:**\n`+62 812-3456-7890` (0812-RUANG-TEDUH)\n\n⏰ **Jam Layanan:**\nSetiap hari, pukul 08:00 – 22:00 WIB\n\n✉️ **Email Resmi:**\n`halo@ruangteduh.id`\n\n*Catatan: Admin kami siap membantu kendala teknis, reservasi psikolog, informasi subsidi, dan kerja sama kampus.*",
        actions: [
          {
            label: "Chat WhatsApp Admin",
            url: "https://wa.me/6281234567890?text=Halo%20Admin%20RuangTeduh%2C%20saya%20ingin%20bertanya%20mengenai%20layanan...",
            icon: "chat",
            isExternal: true,
          },
          {
            label: "Salin Nomor (+62 812-3456-7890)",
            copyText: "+6281234567890",
            icon: "content_copy",
          },
        ],
      };
    }

    // 3. Curhat anonim specific
    if (q.includes("curhat") || q.includes("anonim") || q.includes("rahasia")) {
      return {
        badge: "Fitur Curhat Anonim",
        text: "Curhat di RuangTeduh **100% anonim**! Identitas aslimu tidak akan pernah ditampilkan ke publik.\n\nSistem akan otomatis memberikanmu kode pseudonim (misal: *P24* atau *Kawan Rasa*) sehingga kamu bisa bebas mencurahkan isi hati tanpa rasa takut dihakimi.",
        actions: [
          {
            label: "Tulis Curhat Baru",
            href: "/curhat/buat",
            icon: "edit_note",
          },
          {
            label: "Baca Cerita Kawan",
            href: "/curhat",
            icon: "forum",
          },
        ],
      };
    }

    // 4. Konsultasi & Biaya
    if (q.includes("biaya") || q.includes("bayar") || q.includes("harga") || q.includes("psikolog") || q.includes("konsul")) {
      return {
        badge: "Layanan Psikolog Berlisensi",
        text: "RuangTeduh bekerjasama dengan psikolog klinis tersertifikasi **SIPP**. Khusus mahasiswa dan dewasa muda berpenghasilan pemula, kami menyediakan **subsidi biaya s/d 50%**.\n\nJadwal konsultasi sangat fleksibel (pagi, sore, maupun malam) dan sesi berlangsung secara privat via video/chat terenkripsi.",
        actions: [
          {
            label: "Lihat Daftar Psikolog",
            href: "/konsultasi",
            icon: "psychology",
          },
          {
            label: "Tanya Syarat Subsidi ke Admin",
            url: "https://wa.me/6281234567890?text=Halo%20Admin%2C%20saya%20mau%20tanya%20syarat%20subsidi%20konsultasi%20mahasiswa...",
            icon: "chat",
            isExternal: true,
          },
        ],
      };
    }

    // 5. Emergency / Krisis
    if (q.includes("darurat") || q.includes("krisis") || q.includes("bunuh") || q.includes("mati") || q.includes("tolong") || q.includes("bahaya")) {
      return {
        badge: "Bantuan Darurat Krisis",
        text: "Kawan, jika kamu atau orang terdekat sedang berada dalam krisis emosional atau membutuhkan pertolongan mendesak, mohon segera hubungi hotline kesehatan mental nasional:\n\n📞 **Hotline Kemenkes Darurat:** `119 ext 8` (Bebas pulsa, 24 Jam)\n📞 **KemenPPPA Sahabat Perempuan & Anak:** `129`\n\nKamu sangat berharga, dan kamu tidak harus menanggung ini sendirian.",
        actions: [
          {
            label: "Panggil 119 ext 8 Sekarang",
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
      text: `Terima kasih sudah bertanya! 😊\n\nUntuk pertanyaan kamu mengenai "${userQuery}", kamu bisa menjelajahi fitur utama kami atau menghubungi Admin resmi RuangTeduh di nomor WhatsApp **+62 812-3456-7890** untuk penjelasan lebih lanjut.`,
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
          text: "Halo kembali! Percakapan baru telah dimulai. Ada hal lain seputar RuangTeduh atau kontak Admin yang ingin kamu ketahui?",
          timestamp: "Baru saja",
          highlightBadge: "Sesi Baru",
          actions: [
            {
              label: "Tentang RuangTeduh",
              copyText: "Apps apa ini sebenarnya?",
              icon: "info",
            },
            {
              label: "Minta Nomor Admin",
              copyText: "Berapa nomor kontak Admin?",
              icon: "support_agent",
            },
          ],
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-[412px] mx-auto bg-surface relative select-none">
      {/* Toast Notification for Copy */}
      {copiedText && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#17251D] text-white text-label-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-[18px] text-primary-fixed">check_circle</span>
          <span>Nomor admin disalin ke clipboard!</span>
        </div>
      )}

      {/* App Bar / Header */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md px-4 py-3 shadow-sm border-b border-outline-variant/30 flex items-center justify-between">
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
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container border-2 border-surface absolute -bottom-0.5 -right-0.5"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-headline-sm text-[16px] font-bold text-on-surface leading-tight">
                  Asisten Teduh AI
                </h1>
                <span className="bg-primary/10 text-primary text-[10px] font-semibold px-1.5 py-0.5 rounded-md">
                  DEMO
                </span>
              </div>
              <span className="text-label-sm text-primary flex items-center gap-1 leading-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Online • Bantuan Cepat
              </span>
            </div>
          </div>
        </div>

        {/* Action: Reset */}
        <button
          onClick={handleResetChat}
          title="Reset Percakapan"
          className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">refresh</span>
        </button>
      </header>

      {/* Chat Messages Body */}
      <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4 no-scrollbar">
        {/* Intro notice banner */}
        <div className="bg-surface-container-low p-3 rounded-2xl border border-outline-variant/30 flex items-center gap-2.5 text-body-sm text-outline">
          <span className="material-symbols-outlined text-primary text-[20px]">lock</span>
          <span>Percakapan ini bersifat simulasi interaktif demo RuangTeduh. Privasi terjaga.</span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} transition-all`}
          >
            {/* Sender / Badge row */}
            {msg.sender === "ai" && msg.highlightBadge && (
              <span className="text-[11px] font-medium text-primary bg-secondary-container/60 px-2.5 py-0.5 rounded-full mb-1 flex items-center gap-1">
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
                    ? "bg-primary text-on-primary rounded-tr-xs shadow-xs"
                    : "bg-surface-container-lowest text-on-surface rounded-tl-xs border border-outline-variant/50 custom-shadow-resting"
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
                                  : "bg-surface-container text-primary font-bold"
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
                            className="bg-surface-container text-primary hover:bg-secondary-container px-3 py-1.5 rounded-xl text-label-sm font-semibold flex items-center gap-1.5 active:scale-95 transition-all shadow-2xs"
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
                            className="bg-primary text-on-primary hover:bg-primary/90 px-3 py-1.5 rounded-xl text-label-sm font-semibold flex items-center gap-1.5 active:scale-95 transition-all shadow-2xs"
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
                            className="bg-surface-container-high text-primary hover:bg-secondary-container px-3 py-1.5 rounded-xl text-label-sm font-semibold flex items-center gap-1.5 active:scale-95 transition-all shadow-2xs"
                          >
                            {action.icon && (
                              <span className="material-symbols-outlined text-[16px]">
                                {action.icon}
                              </span>
                            )}
                            <span>{action.label}</span>
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
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
            <div className="bg-surface-container-lowest px-4 py-3 rounded-2xl rounded-tl-xs border border-outline-variant/40 flex items-center gap-1.5 shadow-xs">
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

      {/* Suggested Quick Prompt Chips */}
      <div className="px-4 py-2 border-t border-outline-variant/20 bg-surface/80 backdrop-blur-sm overflow-x-auto no-scrollbar flex items-center gap-2">
        <span className="text-label-sm text-outline shrink-0 flex items-center gap-1">
          <span className="material-symbols-outlined text-[15px] text-primary">tips_and_updates</span>
          Coba:
        </span>
        {DEFAULT_SUGGESTIONS.map((suggestion, idx) => (
          <button
            key={idx}
            disabled={isTyping}
            onClick={() => handleSend(suggestion)}
            className="text-label-sm font-medium bg-surface-container-lowest hover:bg-secondary-container text-on-surface px-3 py-1.5 rounded-full border border-outline-variant/40 shrink-0 whitespace-nowrap active:scale-95 transition-all shadow-2xs disabled:opacity-50"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Bottom Message Input Bar */}
      <footer className="p-3 bg-surface border-t border-outline-variant/30">
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
              placeholder="Ketik pertanyaan seputar RuangTeduh / Admin..."
              className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-2xl py-3 pl-4 pr-10 text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-xs transition-all"
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
            className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 active:scale-95 transition-all shadow-sm shrink-0"
          >
            <span className="material-symbols-outlined text-[22px]">send</span>
          </button>
        </form>
      </footer>
    </div>
  );
}
