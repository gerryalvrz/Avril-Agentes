"use client";

import React, { useState } from "react";
import { Send, Paperclip, Command, Lightbulb, Workflow, Calendar, Target, ChevronDown } from "lucide-react";

export function AnimatedAiChat() {
  const [activeTab, setActiveTab] = useState<"form" | "chat">("form");

  return (
    <div className="bg-[#050505] font-sans text-neutral-200 select-none flex flex-col items-center justify-start min-h-[600px] w-full rounded-xl overflow-hidden relative pb-10">
      
      {/* Background ambient glow matching the image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#5b3af5]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center mt-12 mb-6 z-10 relative">
        {/* Fake Metallic Avril Logo Text */}
        <h1 className="text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-600 mb-2 font-heading">
          Avril
        </h1>
        <h2 className="text-2xl font-medium tracking-tight text-white mb-6">
          What do you want to ship?
        </h2>

        {/* Toggle Switch */}
        <div className="flex items-center gap-1 bg-neutral-900/80 border border-neutral-800 p-0.5 rounded-full backdrop-blur-md">
          <button
            onClick={() => setActiveTab("form")}
            className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === "form" 
                ? "bg-[#2e266a]/60 text-white border border-[#5b3af5]/30 shadow-sm" 
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            Form
          </button>
          <button
            onClick={() => setActiveTab("chat")}
            className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === "chat" 
                ? "bg-[#2e266a]/60 text-white border border-[#5b3af5]/30 shadow-sm" 
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            Chat
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-2xl px-4 z-10 flex flex-col items-center flex-1">
        {activeTab === "form" ? <FormView /> : <ChatView />}

        {/* Common Bottom Area (Folder) */}
        <div className="mt-auto pt-16 flex flex-col justify-end items-center pointer-events-none w-full relative">
          {/* Tagline above folder */}
          <div className="text-[10px] text-neutral-500 mb-6 font-medium tracking-wide">
            Quick start — tap a card for an instant agent brief
          </div>
          
          <div className="relative flex justify-center items-end bottom-0 z-10">
            {/* Folder Cards */}
            {activeTab === "chat" && (
              <div className="absolute bottom-16 flex justify-center items-center perspective-[800px] w-0">
                 {/* Left Card */}
                 <div className="absolute w-[140px] h-[100px] bg-neutral-100 rounded-lg shadow-2xl border border-neutral-300 transform -rotate-[15deg] -translate-x-16 translate-y-4 flex items-center justify-center p-3 opacity-95 transition-all duration-700 hover:-translate-y-2 hover:rotate-[-10deg] pointer-events-auto cursor-pointer z-[1]">
                    <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest text-center">Conservative</span>
                 </div>
                 
                 {/* Right Card */}
                 <div className="absolute w-[140px] h-[100px] bg-neutral-100 rounded-lg shadow-2xl border border-neutral-300 transform rotate-[15deg] translate-x-16 translate-y-4 flex items-center justify-center p-3 opacity-95 transition-all duration-700 hover:-translate-y-2 hover:rotate-[10deg] pointer-events-auto cursor-pointer z-[1]">
                    <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest text-center">Balanced</span>
                 </div>

                 {/* Center Card */}
                 <div className="absolute w-[160px] h-[120px] bg-white rounded-xl shadow-2xl border border-neutral-200 transform translate-y-0 flex items-center justify-center p-3 z-[2] transition-all duration-700 hover:-translate-y-4 pointer-events-auto cursor-pointer">
                    <span className="text-[10px] font-bold text-neutral-800 uppercase tracking-widest text-center">Ambitious</span>
                 </div>
              </div>
            )}

            {/* Folder Front and Back Graphics */}
            <div className={`relative z-[3] transition-transform duration-700 ease-out origin-bottom ${activeTab === "chat" ? "scale-y-95 translate-y-2" : "scale-100 translate-y-0"}`}>
               <div className="w-[120px] h-4 bg-[#6f51f5] rounded-t-xl ml-4 opacity-95" />
               <div className="w-[300px] h-[180px] bg-[#5b3af5] rounded-xl rounded-tl-none shadow-[0_-10px_60px_rgba(91,58,245,0.4)] relative flex items-center justify-center overflow-hidden border-t border-white/10">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormView() {
  return (
    <div className="w-full flex flex-col justify-center animate-in fade-in zoom-in-95 duration-500">
      <div className="w-full max-w-lg mx-auto">
        {/* Main Form Box */}
        <div className="bg-[#0b0914] border border-[#2e266a]/60 rounded-xl p-8 backdrop-blur-xl shadow-2xl w-full">
          {/* Progress Indicator */}
          <div className="flex items-center gap-0 mb-8 px-2">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-[#5b3af5] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(91,58,245,0.6)] z-10">
                <div className="h-2 w-2 bg-white rounded-full" />
              </div>
            </div>
            <div className="h-[2px] bg-neutral-800/80 flex-1 -mx-1 z-0" />
            
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-[#110e1a] border border-neutral-700 flex items-center justify-center shrink-0 text-[10px] font-medium text-neutral-500 z-10">2</div>
            </div>
            <div className="h-[2px] bg-neutral-800/80 flex-1 -mx-1 z-0" />

            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-[#110e1a] border border-neutral-700 flex items-center justify-center shrink-0 text-[10px] font-medium text-neutral-500 z-10">3</div>
            </div>
            <div className="h-[2px] bg-neutral-800/80 flex-1 -mx-1 z-0" />

            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-[#110e1a] border border-neutral-700 flex items-center justify-center shrink-0 text-[10px] font-medium text-neutral-500 z-10">4</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">What are you building?</h3>
          <p className="text-xs text-neutral-400 mb-8">Describe your idea, who it's for, and the pain it solves.</p>

          <div className="space-y-5">
            <div>
              <label className="text-[10px] font-semibold tracking-wide text-neutral-400 mb-2 block">Your idea</label>
              <input 
                type="text" 
                placeholder="e.g. AI-powered bookkeeping for freelancers" 
                className="w-full bg-[#151221] border border-neutral-800/80 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#5b3af5]/60 focus:ring-1 focus:ring-[#5b3af5]/30 transition-all shadow-inner"
              />
            </div>
            
            <div>
              <label className="text-[10px] font-semibold tracking-wide text-neutral-400 mb-2 block">Problem it solves</label>
              <input 
                type="text" 
                placeholder="e.g. Freelancers spend 5+ hrs/wk on invoices" 
                className="w-full bg-[#151221] border border-neutral-800/80 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#5b3af5]/60 focus:ring-1 focus:ring-[#5b3af5]/30 transition-all shadow-inner"
              />
            </div>

            <div>
              <label className="text-[10px] font-semibold tracking-wide text-neutral-400 mb-2 block">Target user / ICP</label>
              <input 
                type="text" 
                placeholder="e.g. Solo freelancers earning $50-200k/yr" 
                className="w-full bg-[#151221] border border-neutral-800/80 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#5b3af5]/60 focus:ring-1 focus:ring-[#5b3af5]/30 transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-[#3b2d91] hover:bg-[#5b3af5] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors border border-[#5b3af5]/40 shadow-lg group flex items-center gap-2">
              Continue
            </button>
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="mt-3">
          <button className="w-full flex items-center justify-between bg-transparent border border-[#2e266a]/30 rounded-lg px-5 py-3.5 text-xs text-neutral-400 hover:text-white hover:bg-[#151221] transition-all">
            <span className="font-medium">Advanced Settings</span>
            <ChevronDown size={14} className="opacity-70" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ChatView() {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center animate-in fade-in zoom-in-95 duration-500 pb-10">
      <div className="text-center mb-6">
        <p className="text-xs text-neutral-500 mb-4 font-medium tracking-wide">Model: Venice</p>
        <p className="text-[11px] text-neutral-500 leading-relaxed max-w-md mx-auto">
          Paste or generate an Agent brief, then <strong className="text-neutral-300 font-medium">Send</strong>. 
          When ignition is ready, use <strong className="text-neutral-300 font-medium">Send to OpenClaw</strong> — runtime gets <strong className="text-neutral-300 font-medium">3 swarm guardrails</strong> (not 40+ agents).
        </p>
      </div>

      <div className="w-full flex-1 mb-6">
        <div className="bg-[#0f0a20]/80 border border-[#2e266a]/50 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-md relative mb-6 transition-all focus-within:border-[#5b3af5]/80 focus-within:shadow-[0_0_30px_rgba(91,58,245,0.15)] flex flex-col">
          
          {/* Loading/Status banner inside chat bubble top */}
          <div className="bg-[#1b1535]/80 px-5 py-3 border-b border-[#2e266a]/40">
            <p className="text-[10px] text-neutral-400 font-medium tracking-wide">Venice</p>
            <p className="text-[13px] text-white mt-1 leading-snug">
              Generating your Conservative agent brief — it will appear in the input box so you can edit before sending.
            </p>
          </div>

          {/* Chat text area */}
          <div className="p-5 flex-1 min-h-[140px]">
             <textarea 
               className="w-full h-full bg-transparent border-none focus:outline-none text-sm text-neutral-200 placeholder:text-neutral-600 resize-none font-mono leading-relaxed"
               defaultValue={"# Agent brief - Conservative\n\n## Vision and Ideal Customer Profile"}
             />
          </div>
          
          {/* Chat Tools Row */}
          <div className="px-5 pb-3 flex items-center justify-between border-t border-[#2e266a]/30 pt-4 bg-black/20">
            <div className="flex items-center gap-5">
               <button className="flex items-center justify-between gap-3 bg-[#000] border border-neutral-800 rounded-md px-3 py-1.5 flex items-center hover:bg-neutral-800 transition-colors group">
                 <span className="text-[11px] text-neutral-400 group-hover:text-neutral-200">Venice</span>
                 <ChevronDown size={12} className="text-neutral-500" />
               </button>
               <button className="text-neutral-500 hover:text-neutral-300 transition-colors">
                  <Paperclip size={16} />
               </button>
               <button className="text-neutral-500 hover:text-neutral-300 transition-colors">
                  <Command size={16} />
               </button>
            </div>
            
            <button className="bg-white hover:bg-neutral-200 text-black text-[13px] font-semibold pl-4 pr-5 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
              <Send size={14} className="text-black" />
              Send
            </button>
          </div>
        </div>

        {/* Default tags under chat */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-800 bg-[#0a0a0a] hover:bg-neutral-800/80 hover:border-neutral-700 transition-all text-[11px] font-medium text-neutral-400 hover:text-neutral-200 shadow-sm">
            <Lightbulb size={12} className="opacity-70" />
            Validate Idea
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-800 bg-[#0a0a0a] hover:bg-neutral-800/80 hover:border-neutral-700 transition-all text-[11px] font-medium text-neutral-400 hover:text-neutral-200 shadow-sm">
            <Workflow size={12} className="opacity-70" />
            Agent Workflow
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-800 bg-[#0a0a0a] hover:bg-neutral-800/80 hover:border-neutral-700 transition-all text-[11px] font-medium text-neutral-400 hover:text-neutral-200 shadow-sm">
            <Calendar size={12} className="opacity-70" />
            90-Day Plan
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-800 bg-[#0a0a0a] hover:bg-neutral-800/80 hover:border-neutral-700 transition-all text-[11px] font-medium text-neutral-400 hover:text-neutral-200 shadow-sm">
            <Target size={12} className="opacity-70" />
            Find My Niche
          </button>
        </div>
      </div>
    </div>
  );
}
