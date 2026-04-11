'use client';

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
    id: string;
    role: 'user' | 'ai';
    content: string;
}

const suggestions = [
  { title: "Fix my error", subtitle: "she can fix it" },
  { title: "Explain my error", subtitle: "ask for explaination" },
  { title: "Log my error", subtitle: "keep a note" },
]

export default function LumaChat() {
    const [inputValue, setInputValue] = useState('')
    const [messages, setMessages] = useState<Message[]>([])
    const scrollRef = useRef<HTMLDivElement>(null)
    const messageIdCounter = useRef(0)

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = (text?: string) => {
        const messageToSend = text || inputValue;
        if (!messageToSend.trim()) return;

        messageIdCounter.current += 1;
        const userMsg: Message = {
            id: `user-${messageIdCounter.current}`,
            role: 'user',
            content: messageToSend
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        // Simulate AI response
        setTimeout(() => {
            messageIdCounter.current += 1;
            const aiMsg: Message = {
                id: `ai-${messageIdCounter.current}`,
                role: 'ai',
                content: `hey hey 👋✨\nwhat are we building today...\nanother iconic UI moment or\nchaos for the plot 😌💻`
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 800);
    }

    const isChatting = messages.length > 0;

    return (
        <div className="relative w-full h-full overflow-hidden bg-white flex flex-col font-sans">
            {/* Background layers */}
            <AnimatePresence>
                {!isChatting && (
                    <motion.div
                        key="initial-bg"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(135deg, #EBFDDD 0%, #A2FE9B 50%, #9FFAB4 75%, #B5F2F5 100%)',
                            }}
                        />
                        <svg
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none' }}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <filter id="noise">
                                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                                <feColorMatrix type="saturate" values="0" />
                            </filter>
                            <rect width="100%" height="100%" filter="url(#noise)" />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {isChatting && (
                <div className="absolute inset-0 bg-[#FAFAFA] z-0" />
            )}

            {/* Header / Status bar area */}
            <div className="relative z-10 shrink-0">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 28px 0' }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', letterSpacing: -0.3 }}>9:41</span>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                            <rect x="0" y="6" width="3" height="6" rx="1" fill="#1a1a1a" />
                            <rect x="4.5" y="4" width="3" height="8" rx="1" fill="#1a1a1a" />
                            <rect x="9" y="2" width="3" height="10" rx="1" fill="#1a1a1a" />
                            <rect x="13.5" y="0" width="3" height="12" rx="1" fill="#1a1a1a" />
                        </svg>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                            <path d="M8 9.5C8.8 9.5 9.5 10.2 9.5 11C9.5 11.8 8.8 12.5 8 12.5C7.2 12.5 6.5 11.8 6.5 11C6.5 10.2 7.2 9.5 8 9.5Z" fill="#1a1a1a" />
                            <path d="M4.5 7C5.8 5.7 7.3 5 8 5C8.7 5 10.2 5.7 11.5 7" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" />
                            <path d="M2 4.5C4 2.5 6.2 1.5 8 1.5C9.8 1.5 12 2.5 14 4.5" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                            <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#1a1a1a" strokeOpacity="0.35" />
                            <rect x="2" y="2" width="17" height="8" rx="2" fill="#1a1a1a" />
                            <path d="M23 4V8C23.8 7.6 24 7 24 6C24 5 23.8 4.4 23 4Z" fill="#1a1a1a" fillOpacity="0.4" />
                        </svg>
                    </div>
                </div>

                <div style={{ padding: '20px 25px 0' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                            <rect width="20" height="2.5" rx="1.25" fill="#1a1a1a" />
                            <rect y="5.75" width="14" height="2.5" rx="1.25" fill="#1a1a1a" />
                            <rect y="11.5" width="20" height="2.5" rx="1.25" fill="#1a1a1a" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div
                ref={scrollRef}
                style={{
                    flex: 1,
                    padding: '20px 25px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    overflowY: 'auto',
                    zIndex: 2,
                    scrollbarWidth: 'none',
                }}
            >
                {!isChatting ? (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ fontSize: 40, fontWeight: 750, color: 'white', lineHeight: 1.1, letterSpacing: -0.5, maxWidth: 300 }}
                        >
                            Relax. I already found the problem.
                        </motion.h1>
                    </div>
                ) : (
                    messages.map((msg) => (
                        <div key={msg.id} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', alignItems: 'flex-end' }}>
                            <div style={{ maxWidth: '80%', padding: '12px 16px', borderRadius: '18px', fontSize: '15px', fontWeight: 450, color: '#1a1a1a', lineHeight: '1.4', whiteSpace: 'pre-line', background: msg.role === 'user' ? '#B7FFA2' : '#F2F2F2', borderBottomRightRadius: msg.role === 'user' ? '4px' : '18px', borderBottomLeftRadius: msg.role === 'ai' ? '4px' : '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                                {msg.content}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Bottom Input Section */}
            <div style={{ position: 'relative', zIndex: 10, padding: '12px 0 24px 0', width: '100%', flexShrink: 0 }}>
                {/* Suggestions Row */}
                {!isChatting && (
                    <div style={{ display: 'flex', gap: 12, padding: '0 25px 16px', overflowX: 'auto', scrollbarWidth: 'none' }}>
                        {suggestions.map((s, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSend(s.title)}
                                style={{
                                    flexShrink: 0,
                                    background: 'rgba(255,255,255,0.9)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 16,
                                    padding: '12px 16px',
                                    textAlign: 'left',
                                    border: 'none',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                    minWidth: 156,
                                }}
                            >
                                <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 2 }}>{s.title}</div>
                                <div style={{ fontSize: 11, color: '#1a1a1a', opacity: 0.5 }}>{s.subtitle}</div>
                            </button>
                        ))}
                    </div>
                )}

                <div style={{ margin: '0 25px', background: 'white', borderRadius: 26, height: 52, display: 'flex', alignItems: 'center', padding: '0 12px 0 16px', gap: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                    <button style={{ width: 36, height: 36, borderRadius: '50%', background: '#F7F8FA', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <rect x="6.08" y="0" width="1.84" height="14" rx="0.92" fill="black" />
                            <rect x="0" y="6.08" width="14" height="1.84" rx="0.92" fill="black" />
                        </svg>
                    </button>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask her anything..."
                        style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px', color: '#1a1a1a', background: 'transparent', fontFamily: 'inherit', letterSpacing: -0.1, height: '100%', padding: 0 }}
                    />
                    <button
                        onClick={() => handleSend()}
                        style={{ width: 36, height: 36, borderRadius: '50%', background: '#B7FFA2', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                    >
                        {inputValue.trim() ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>
                            </svg>
                        ) : (
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                                <rect x="5.5" y="0.5" width="5" height="10" rx="2.5" fill="black" />
                                <path d="M1 9C1 12.3137 4.13401 15 8 15C11.866 15 15 12.3137 15 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                <line x1="8" y1="15" x2="8" y2="19" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
                    <div style={{ width: 134, height: 5, background: 'rgba(0,0,0,0.1)', borderRadius: 3 }} />
                </div>
            </div>
        </div>
    )
}
