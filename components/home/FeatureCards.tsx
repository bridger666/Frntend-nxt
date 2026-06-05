'use client';

import { useRef, useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useGsapStackCards } from '@/hooks/useGsapStackCards';

/* ─── Card Data ─── */
const cards = [
  {
    step: 'DISCOVER',
    title: 'AI Readiness Deep Diagnostic',
    description:
      'Not a generic quiz. A structured multi-phase analysis across your business objective, data readiness, and constraints — so you know exactly where you stand before building anything.',
    visual: 'diagnostic',
  },
  {
    step: 'DESIGN',
    title: 'AI System Blueprint',
    description:
      'Aivory™ turns your diagnostic into a readiness score with KPI targets and a recommended AI architecture built specifically for your business — your score, your gaps, your next move.',
    visual: 'blueprint',
  },
  {
    step: 'PLAN',
    title: 'AI Roadmap',
    description:
      'Month by month. Milestone by milestone. With KPI targets and sequenced actions so your team knows exactly what to do next — a plan built to be executed, not just presented.',
    visual: 'roadmap',
  },
  {
    step: 'BUILD',
    title: 'Workflow Builder',
    description:
      'Tell the builder what you want to automate in plain language. It generates the entire flow, connects your tools, and outputs it ready to export or deploy — no coding required.',
    visual: 'workflow',
  },
  {
    step: 'DEPLOY',
    title: 'AI Agent',
    description:
      'Purpose-built agents for email, customer service, sales, and more. Deploy to Telegram, Slack, or wherever your team works — the right agent, everywhere you need it.',
    visual: 'agent',
  },
  {
    step: 'ACCELERATE',
    title: 'Automation Template Library',
    description:
      'Start with proven workflows instead of building from scratch. Choose from a growing library of ready-to-use automations for sales, operations, support, marketing, and more—then customize them to fit your business.',
    visual: 'templates',
  },
  {
    step: 'AI CONSOLE',
    title: 'Chat, plan, and run your AI in one place',
    description:
      'Chat, monitor, navigate, and follow up in one continuous flow, with full visibility from start to finish.\n\nNothing gets missed. Nothing moves without your awareness. You stay clear, confident, and in control throughout.',
    visual: 'console',
  },
];

/* ─── SVG Visuals ─── */
function DiagnosticVisual() {
  return (
    <svg width="380" height="160" viewBox="0 0 380 160" fill="none" style={{ maxWidth: '100%' }}>
      <rect x="8" y="8" width="130" height="28" fill="rgba(255,255,255,0.03)" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <text x="73" y="26" fontSize="9" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.06em">BUSINESS OBJECTIVE</text>
      <rect x="8" y="44" width="130" height="28" fill="rgba(255,255,255,0.03)" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <text x="73" y="62" fontSize="9" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.06em">DATA READINESS</text>
      <rect x="8" y="80" width="130" height="28" fill="rgba(255,255,255,0.03)" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <text x="73" y="98" fontSize="9" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.06em">CONSTRAINT</text>
      <rect x="8" y="116" width="130" height="28" fill="rgba(255,255,255,0.03)" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <text x="73" y="134" fontSize="9" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.06em">RISK + CHALLENGE</text>
      {/* Converging lines */}
      <path d="M138 22 C180 22 200 80 230 80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      <path d="M138 58 C180 58 200 80 230 80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      <path d="M138 94 C180 94 200 80 230 80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      <path d="M138 130 C180 130 200 80 230 80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      <path d="M230 80 L270 80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      {/* Teal pulse */}
      <path d="M138 22 C180 22 200 80 230 80" stroke="#0ae8af" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="18 180" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="198" to="0" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M138 58 C180 58 200 80 230 80" stroke="#0ae8af" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="18 180" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="198" to="0" dur="3s" repeatCount="indefinite" begin="0.5s" />
      </path>
      <path d="M138 94 C180 94 200 80 230 80" stroke="#0ae8af" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="18 180" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="198" to="0" dur="3s" repeatCount="indefinite" begin="1s" />
      </path>
      <path d="M138 130 C180 130 200 80 230 80" stroke="#0ae8af" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="18 180" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="198" to="0" dur="3s" repeatCount="indefinite" begin="1.5s" />
      </path>
      <line x1="230" y1="80" x2="270" y2="80" stroke="#0ae8af" strokeWidth="1" strokeLinecap="round" strokeDasharray="18 50" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="68" to="0" dur="1s" repeatCount="indefinite" begin="2s" />
      </line>
      {/* Score Gauge */}
      <g transform="translate(320,80)">
        <circle cx="0" cy="0" r="48" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1">
          {Array.from({ length: 36 }, (_, i) => (
            <line key={i} x1="0" y1="-44" x2="0" y2="-40" transform={`rotate(${i * 6} 0 0)`} />
          ))}
        </g>
        <g strokeWidth="1.5">
          {Array.from({ length: 15 }, (_, i) => (
            <line key={i} x1="0" y1="-44" x2="0" y2="-39" transform={`rotate(${216 + i * 6} 0 0)`} stroke="#ff4d5a" opacity="0.7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin={`${i * 0.1}s`} />
            </line>
          ))}
        </g>
        <circle cx="0" cy="0" r="34" fill="rgba(255,255,255,0.15)" />
        <circle cx="0" cy="0" r="30" fill="rgba(255,255,255,0.1)" />
        <circle cx="0" cy="0" r="26" fill="#111" />
        <text x="0" y="-4" fontSize="7" fill="#aaa" fontFamily="'Doto','Courier New',monospace" fontWeight="300" textAnchor="middle" letterSpacing="0.1em">score</text>
        <text x="0" y="12" fontSize="18" fill="#fff" fontFamily="'Doto','Courier New',monospace" fontWeight="300" textAnchor="middle">
          33
          <animate attributeName="opacity" values="0.8;1;0.7;1;0.9" dur="3s" repeatCount="indefinite" />
        </text>
        <ellipse cx="0" cy="-42" rx="2.5" ry="5" fill="#e63946">
          <animateTransform attributeName="transform" type="rotate" values="300;298;303;299;301;300" dur="4s" repeatCount="indefinite" />
        </ellipse>
      </g>
    </svg>
  );
}

function BlueprintVisual() {
  return (
    <svg width="380" height="140" viewBox="0 0 380 140" fill="none" style={{ maxWidth: '100%' }}>
      <rect x="8" y="50" width="90" height="40" fill="rgba(255,255,255,0.03)" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <text x="53" y="66" fontSize="7" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.04em">DEEP DIAGNOSTIC</text>
      <text x="53" y="78" fontSize="7" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.04em">SCORE</text>
      <rect x="155" y="25" width="80" height="30" fill="rgba(255,255,255,0.03)" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <text x="195" y="44" fontSize="7" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.04em">KPI TARGET</text>
      <rect x="155" y="85" width="80" height="30" fill="rgba(255,255,255,0.03)" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <text x="195" y="104" fontSize="7" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.04em">AI ARCHITECTURE</text>
      {/* Right box - dark style matching AI Agent hub */}
      <rect className="agent-hub-rect" x="290" y="40" width="82" height="60" rx="6" fill="#111" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x="331" y="65" fontSize="8.5" fill="rgba(255,255,255,0.9)" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.03em">
        AI SYSTEM
      </text>
      <text x="331" y="79" fontSize="8.5" fill="rgba(255,255,255,0.9)" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.03em">
        BLUEPRINT
      </text>
      {/* Connecting lines */}
      <path d="M98 65 C120 65 135 40 155 40" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      <path d="M98 75 C120 75 135 100 155 100" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      <path d="M235 40 C255 40 270 60 290 60" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      <path d="M235 100 C255 100 270 80 290 80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      {/* Teal pulse */}
      <path d="M98 65 C120 65 135 40 155 40" stroke="#0ae8af" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="18 150" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="168" to="0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M98 75 C120 75 135 100 155 100" stroke="#0ae8af" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="18 150" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="168" to="0" dur="2s" repeatCount="indefinite" begin="0.3s" />
      </path>
      <path d="M235 40 C255 40 270 60 290 60" stroke="#0ae8af" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="18 150" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="168" to="0" dur="2s" repeatCount="indefinite" begin="1.2s" />
      </path>
      <path d="M235 100 C255 100 270 80 290 80" stroke="#0ae8af" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="18 150" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="168" to="0" dur="2s" repeatCount="indefinite" begin="1.5s" />
      </path>
    </svg>
  );
}

function RoadmapVisual() {
  return (
    <svg width="380" height="160" viewBox="0 0 380 160" fill="none" style={{ maxWidth: '100%' }}>
      <rect x="8" y="55" width="100" height="40" rx="18" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <text x="58" y="80" fontSize="10" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.08em">ROADMAP</text>
      <rect x="270" y="10" width="100" height="32" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <text x="320" y="31" fontSize="9" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.06em">PHASE 1</text>
      <rect x="270" y="60" width="100" height="32" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <text x="320" y="81" fontSize="9" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.06em">PHASE 2</text>
      <rect x="270" y="110" width="100" height="32" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <text x="320" y="131" fontSize="9" fill="#d1d5db" fontFamily="Manrope,sans-serif" fontWeight="300" textAnchor="middle" letterSpacing="0.06em">PHASE 3</text>
      {/* Branching lines */}
      <path d="M108 75 C170 75 200 26 270 26" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      <path d="M108 75 C170 75 200 76 270 76" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      <path d="M108 75 C170 75 200 126 270 126" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
      {/* Teal pulse */}
      <path d="M108 75 C170 75 200 26 270 26" stroke="#0ae8af" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="20 200" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="220" to="0" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M108 75 C170 75 200 76 270 76" stroke="#0ae8af" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="20 200" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="220" to="0" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
      </path>
      <path d="M108 75 C170 75 200 126 270 126" stroke="#0ae8af" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="20 200" opacity="0.85">
        <animate attributeName="stroke-dashoffset" from="220" to="0" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
      </path>
    </svg>
  );
}

function WorkflowVisual() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div key={key} className="w-full flex flex-col gap-3 h-full justify-center max-w-[346px]">
      {/* Chat Prompt for Workflow */}
      <div className="bg-[#111111] border border-white/5 rounded-[13px] p-3 flex gap-3 items-center shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="w-8 h-8 rounded-full bg-[#1e1e1e] flex-shrink-0 flex items-center justify-center text-xs font-medium text-white/80 border border-white/5 shadow-sm">U</div>
        <div className="text-white/90 text-xs flex-1 font-light leading-relaxed">
          Create an automation workflow to extract email leads and send them to Slack.
        </div>
        <div className="w-5 h-5 rounded-full border-[1.5px] border-white/10 border-t-[#939393] flex-shrink-0 animate-spin opacity-0" style={{ animation: 'fade-in 0.1s ease-out 0.8s forwards, spin 1s linear infinite, fade-out 0.2s ease-in 2.5s forwards' }} />
      </div>

      {/* Generated Flow */}
      <div className="w-full bg-[#111111] border border-white/5 rounded-[13px] p-5 flex flex-col gap-5 relative overflow-hidden shadow-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '2.5s' }}>
        <div className="absolute inset-0 bg-[#939393]/5 opacity-0" style={{ animation: 'fade-in 1s ease-out 3s forwards, pulse 3s ease-in-out infinite alternate 4s' }} />
        <div className="text-[9px] text-white/40 uppercase tracking-widest text-center font-light z-10" style={{ fontFamily: "'Doto', 'Courier New', monospace" }}>
          Workflow Generated
        </div>

        <div className="flex items-center justify-between w-full max-w-[288px] mx-auto z-10 relative">
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-white/5 -translate-y-1/2 -z-10" />
          <div className="absolute top-1/2 left-[15%] right-[50%] h-[2px] bg-[#939393] -translate-y-1/2 -z-10 origin-left opacity-0 animate-scale-x" style={{ animationDelay: '3.2s' }} />
          <div className="absolute top-1/2 left-[50%] right-[15%] h-[2px] bg-[#939393] -translate-y-1/2 -z-10 origin-left opacity-0 animate-scale-x" style={{ animationDelay: '4.0s' }} />

          {/* Node 1: Trigger */}
          <div className="px-4 py-3 bg-[#080808] border border-white/10 rounded-lg font-light text-white flex flex-col items-center shadow-lg min-w-[72px] opacity-0 animate-fade-in-up" style={{ animationDelay: '2.8s' }}>
            <span className="text-[8px] text-white/40 uppercase mb-1 tracking-wider">Trigger</span>
            <span className="font-medium text-xs">Email</span>
          </div>
          
          {/* Node 2: Agent */}
          <div className="px-4 py-3 bg-[#080808] border border-[#939393]/40 rounded-lg font-light text-white flex flex-col items-center relative min-w-[72px] opacity-0 animate-fade-in-up" style={{ animationDelay: '3.6s' }}>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#939393] animate-ping opacity-80" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#939393]" />
            <span className="text-[8px] text-[#939393] uppercase font-medium mb-1 tracking-wider">AI Agent</span>
            <span className="font-medium text-xs text-[#939393]">Extract</span>
          </div>

          {/* Node 3: Action */}
          <div className="px-4 py-3 bg-[#080808] border border-white/10 rounded-lg font-light text-white flex flex-col items-center shadow-lg min-w-[72px] opacity-0 animate-fade-in-up" style={{ animationDelay: '4.4s' }}>
            <span className="text-[8px] text-white/40 uppercase mb-1 tracking-wider">Action</span>
            <span className="font-medium text-xs">Slack</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentVisual() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => (p + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const platforms = [
    {
      name: 'Slack',
      icon: '/integrations/icons/slack.svg',
      bg: '#1a1a2e',
      headerBg: '#2D2D3F',
      channel: '#sales-leads',
      messages: [
        { from: 'user', text: 'New lead from contact form — urgent' },
        { from: 'agent', text: 'Lead triaged. Priority: High. CRM updated, Slack alert sent to sales team.' },
      ],
    },
    {
      name: 'WhatsApp',
      icon: '/integrations/icons/whatsapp.svg',
      bg: '#0b141a',
      headerBg: '#1F2C33',
      channel: 'Customer Support',
      messages: [
        { from: 'user', text: 'Hi, I need help with my order #4821' },
        { from: 'agent', text: 'Order #4821 found. Status: shipped. ETA: Tomorrow. Tracking link sent.' },
      ],
    },
    {
      name: 'Telegram',
      icon: '/integrations/icons/telegram.svg',
      bg: '#17212b',
      headerBg: '#242F3D',
      channel: 'Ops Notifications',
      messages: [
        { from: 'user', text: 'Schedule a follow-up with prospect ABC Corp' },
        { from: 'agent', text: 'Follow-up scheduled for tomorrow 2PM. Calendar invite sent. Email draft ready.' },
      ],
    },
  ];

  const current = platforms[phase];

  return (
    <div style={{ width: '100%', maxWidth: '367px' }}>
      <div
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
          transition: 'all 0.7s ease',
        }}
      >
        {/* Platform Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '14px 19px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            backgroundColor: current.headerBg,
            transition: 'background-color 0.7s ease',
          }}
        >
          <div
            style={{
              width: '27px',
              height: '27px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.icon} alt={current.name} width={19} height={19} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)', fontWeight: 500, fontFamily: "'Manrope', sans-serif" }}>{current.name}</span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: "'Manrope', sans-serif" }}>{current.channel}</span>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '7px' }}>
            {platforms.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === phase ? '19px' : '7px',
                  height: '7px',
                  borderRadius: '4px',
                  backgroundColor: i === phase ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)',
                  transition: 'all 0.5s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div
          key={phase}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            padding: '19px',
            backgroundColor: current.bg,
            transition: 'background-color 0.7s ease',
            minHeight: '149px',
          }}
        >
          {current.messages.map((msg, i) => (
            <div
              key={`${phase}-${i}`}
              className="opacity-0 animate-fade-in-up"
              style={{
                display: 'flex',
                justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
                animationDelay: `${i * 0.6 + 0.3}s`,
                animationFillMode: 'forwards',
              }}
            >
              <div
                style={{
                  maxWidth: '85%',
                  padding: '11px 16px',
                  borderRadius: msg.from === 'user' ? '16px 16px 5px 16px' : '16px 16px 16px 5px',
                  fontSize: '15px',
                  lineHeight: '1.5',
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 300,
                  color: msg.from === 'user' ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
                  background: msg.from === 'user' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                  border: msg.from === 'agent' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                {msg.from === 'agent' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '5px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Aivory Agent</span>
                  </div>
                )}
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TemplatesVisual() {
  const categories = [
    { label: 'Email', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg> },
    { label: 'Sales', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
    { label: 'Support', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 18.72a9.094 9.094 0 003.741-4.066A9.002 9.002 0 0012 3a9 9 0 00-9.741 11.654A9.094 9.094 0 006 18.72"/><path d="M12 21a3 3 0 01-3-3v-2a3 3 0 016 0v2a3 3 0 01-3 3z"/></svg> },
    { label: 'Reports', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 16V12"/><path d="M12 16V8"/><path d="M16 16v-5"/></svg> },
    { label: 'Schedule', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/></svg> },
    { label: '+ More', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg> },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
      {/* 50+ badge top-right */}
      <div
        style={{
          position: 'absolute',
          top: '-24px',
          right: '0',
          color: '#afafaf',
          fontSize: '28px',
          fontWeight: 300,
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        50+
      </div>
      {/* 3x2 icon grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginTop: '16px',
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '16px 8px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            {cat.icon}
            <span
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 300,
              }}
            >
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsoleVisual() {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimKey(prev => prev + 1);
    }, 6000); // Loops perfectly after the 5.1s animations finish
    return () => clearInterval(timer);
  }, []);

  return (
    <div key={animKey} className="w-full flex items-center justify-center p-2 relative overflow-hidden h-full" style={{ minHeight: '320px' }}>
      <div style={{ transform: 'scale(0.85)', transformOrigin: 'top center', width: '460px', marginTop: '10px' }} className="flex flex-col gap-4 font-light">
        {/* User Message - Right Aligned */}
        <div className="flex justify-end opacity-0 animate-fade-in-up" style={{ animationDelay: '3.3s', animationFillMode: 'forwards' }}>
          <div className="bg-[#2A2A2A] border border-white/5 rounded-2xl px-5 py-3.5 text-white/90 text-[13px] sm:text-sm leading-relaxed shadow-sm max-w-[85%]">
            Can you analyze my current lead generation process?
          </div>
        </div>
        
        {/* Grok-style Agents Thinking */}
        <div className="flex flex-col gap-4 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '4.0s', animationFillMode: 'forwards' }}>
          
          {/* Header: Circles + Text */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-[#556B2F] border-2 border-[#181818] relative z-30" />
              <div className="w-5 h-5 rounded-full bg-[#6B8E23] border-2 border-[#181818] relative z-20" />
              <div className="w-5 h-5 rounded-full bg-[#9ACD32] border-2 border-[#181818] relative z-10" />
            </div>
            <div className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-[10px] font-medium tracking-wider">
              +12
            </div>
            <div className="text-white/80 text-sm font-medium flex items-center gap-2">
              Agents analyzing <span className="text-white/40">·</span> <span className="text-white/40">5s</span>
            </div>
          </div>

          {/* Search Results List */}
          <div className="flex flex-col gap-4 pl-1">
            {[
              { source: 'Queried CRM', query: 'lead response time operations data', results: '520 records', avatars: ['C', 'D'] },
              { source: 'Analyzed Logs', query: 'email triage flow delay analysis', results: '12 bottlenecks', avatars: ['E', 'T'] },
              { source: 'Computed Metric', query: 'sales team average response time', results: 'Avg >24h', avatars: ['M', 'R'] },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1.5 opacity-0 animate-fade-in-up" style={{ animationDelay: `${4.5 + i * 0.3}s`, animationFillMode: 'forwards' }}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>{item.source}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-[11px]">
                    <span>{item.results}</span>
                    <div className="flex -space-x-1">
                      {item.avatars.map((av, avIdx) => (
                        <div key={avIdx} className="w-4 h-4 rounded-full bg-[#2F5BEA] border border-[#181818] flex items-center justify-center text-[8px] text-white font-bold relative z-10">
                          {av}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pl-5 font-mono text-[11px] sm:text-xs text-white/70">
                  {item.query}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Search Bar */}
        <div className="w-full mt-4 bg-[#1D1D1D] border border-white/5 rounded-full px-4 py-3 flex items-center justify-between shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-3 text-white/40 flex-1 h-5 overflow-hidden">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
            
            <div className="relative flex-1 h-full flex items-center text-sm">
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center text-white/40" style={{ animation: 'fade-out 0.1s forwards 0.8s, fade-in 0.1s forwards 5.8s' }}>
                What do you want to know?
              </div>
              
              {/* Typed text */}
              <div className="absolute left-0 top-0 bottom-0 flex items-center text-white/90 opacity-0 max-w-0 overflow-hidden whitespace-nowrap border-r-[2px] border-white pr-1" style={{ animation: 'fade-in 0.1s forwards 0.9s, type-text 1.5s steps(40, end) forwards 1.0s, fade-out 0.1s forwards 3.0s' }}>
                Can you analyze my current lead generation process?
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-white/40 text-sm hover:text-white/70 cursor-pointer transition-colors">
              <span>Search</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <svg className="w-4 h-4 text-white/40 hover:text-white/70 cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/90 transition-colors">
              <div className="w-2.5 h-2.5 bg-black rounded-[2px]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function getVisual(type: string) {
  switch (type) {
    case 'diagnostic': return <DiagnosticVisual />;
    case 'blueprint': return <BlueprintVisual />;
    case 'roadmap': return <RoadmapVisual />;
    case 'workflow': return <WorkflowVisual />;
    case 'agent': return <AgentVisual />;
    case 'templates': return <TemplatesVisual />;
    case 'console': return <ConsoleVisual />;
    default: return null;
  }
}

/* ─── Main Component ─── */
export default function FeatureCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: animRef, isVisible } = useScrollAnimation();

  // GSAP stacking card parallax + batch animate
  useGsapStackCards(containerRef);

  return (
    <div ref={animRef} className={`animate-on-scroll ${isVisible ? 'is-visible' : ''} w-full py-24 relative`} id="features" style={{ background: 'transparent', zIndex: 1 }}>

      <div className="relative z-[1]" style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section heading */}
        <div style={{ marginBottom: '20px' }}>
          <h2
            className="text-white mb-3"
            style={{
              fontSize: '3.5rem',
              fontWeight: 400,
              fontFamily: "'Manrope', sans-serif",
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Turn your AI Confusion<br />Into AI Execution
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#b2b2b2',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Aivory™ helps organizations discover where AI creates value,<br />
            design the right systems, and deploy AI with confidence
          </p>
        </div>

        {/* Sticky Card Stack */}
        <div ref={containerRef} className="gsap-card-container">
          {cards.map((card, i) => (
            <div
              key={card.step}
              className="gsap-card"
              style={{ zIndex: i + 1 }}
            >
              <div className="gsap-card-text-area">
                <span className="fc-step-v">{card.step}</span>
                <div className="fc-title-v">{card.title}</div>
                <div className="fc-desc-v">{card.description}</div>
              </div>
              <div className="gsap-card-visual-area">
                {getVisual(card.visual)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
