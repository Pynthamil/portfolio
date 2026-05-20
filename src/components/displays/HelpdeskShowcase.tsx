"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inbox, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export default function HelpdeskShowcase() {
  const [tickets, setTickets] = useState([
    { id: "T-892", title: "Cannot access production DB", status: "urgent", time: "2m ago" },
    { id: "T-891", title: "Update billing details", status: "normal", time: "1h ago" },
    { id: "T-890", title: "SSO Login failing for new users", status: "high", time: "3h ago" },
  ]);

  const resolveTicket = (id: string) => {
    setTickets(tickets.filter(t => t.id !== id));
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-xl font-sans text-sm">
      <div className="bg-[#f8f9fa] border-b border-neutral-200 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-semibold text-neutral-800">
          <Inbox size={18} className="text-blue-500" /> Inbox Queue
        </div>
        <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200">
          {tickets.length} Active
        </div>
      </div>
      
      <div className="p-4 bg-neutral-50 min-h-[300px]">
        <AnimatePresence>
          {tickets.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex flex-col items-center justify-center h-[250px] text-neutral-400 gap-3"
            >
              <CheckCircle2 size={48} className="text-emerald-400" />
              <p>Inbox zero achieved.</p>
            </motion.div>
          ) : (
            tickets.map((ticket) => (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
                className="bg-white border border-neutral-200 p-4 rounded-xl mb-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${
                    ticket.status === 'urgent' ? 'bg-rose-500' : 
                    ticket.status === 'high' ? 'bg-amber-500' : 'bg-blue-500'
                  }`} />
                  <div>
                    <h4 className="font-semibold text-neutral-800">{ticket.title}</h4>
                    <div className="flex items-center gap-3 mt-1 text-xs text-neutral-500">
                      <span className="font-mono text-[10px] bg-neutral-100 px-2 py-0.5 rounded">{ticket.id}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {ticket.time}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => resolveTicket(ticket.id)}
                  className="px-4 py-2 bg-neutral-100 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 border border-transparent rounded-lg text-xs font-semibold text-neutral-600 transition-colors"
                >
                  Resolve
                </button>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
