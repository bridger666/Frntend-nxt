'use client';

import { useState, useEffect, useRef } from 'react';

// Product data with simplified context
const showcaseProducts = [
  {
    id: 'diagnostic',
    step: '01. DISCOVER',
    title: 'Deep Diagnostic',
    description:
      'We audit your current operations, constraints, and data accessibility. Rather than offering templates, we map out a customized assessment to establish a realistic readiness baseline before you write code or deploy models.',
    features: ['Operational Gaps Audit', 'Infrastructure Readiness', 'Constraint & Risk Check'],
  },
  {
    id: 'blueprint',
    step: '02. DESIGN',
    title: 'AI System Blueprint',
    description:
      'Aivory maps your diagnostic results into a recommended system architecture. This blueprint defines how data, processing layers, and automation models interface, creating a clear architectural blueprint tailored to your bottlenecks.',
    features: ['Data Pipeline Mapping', 'Integration Layers', 'Orchestration Blueprint'],
  },
  {
    id: 'roadmap',
    step: '03. PLAN',
    title: 'Implementation Roadmap',
    description:
      'A sequenced, phased plan designed to target your high-impact bottlenecks first. We split the implementation into manageable waves, ensuring each deployment phase reaches specific, measurable milestones.',
    features: ['Phased Deployment Waves', 'Milestone Checkpoints', 'Actionable Targets'],
  },
  {
    id: 'console',
    step: '04. CONTROL',
    title: 'AI Console',
    description:
      'A unified strategic interface. Query your systems, review diagnostic assessments, track operational telemetry, and instruct automated agents, keeping you in complete control from start to finish.',
    features: ['Conversational Consultation', 'System Telemetry', 'Agent Dispatch Control'],
  },
  {
    id: 'workflow',
    step: '05. BUILD',
    title: 'Workflow Builder',
    description:
      'Orchestrate operations visually. Link trigger conditions, processing layers, and applications together. The builder maps language commands into executable flows, automating tasks across your software stack.',
    features: ['Visual Flow Canvas', 'Multi-app Connections', 'Natural Language Translation'],
  },
];

export function InteractiveShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section is in middle of viewport
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="showcase" className="relative bg-black text-white py-16 md:py-32 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Sticky Scroll Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* Left Column: Scrollable Description Blocks */}
          <div className="lg:col-span-6 flex flex-col gap-[30vh] lg:pb-[20vh]">
            <div className="lg:min-h-[40vh] flex flex-col justify-center">
              <h2 className="text-[#939393] uppercase tracking-widest text-xs font-semibold mb-3">
                Operational Framework
              </h2>
              <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-6 leading-tight">
                From Assessment<br />to Staged Autonomy
              </h3>
              <p className="text-white/60 max-w-lg font-light leading-relaxed">
                We take you step-by-step from auditing bottlenecks to running customized, automated system workflows. Explore the core product layers.
              </p>
            </div>

            {showcaseProducts.map((product, idx) => (
              <div
                key={product.id}
                ref={(el) => {
                  sectionRefs.current[idx] = el;
                }}
                className={`flex flex-col justify-center min-h-[50vh] transition-all duration-500 ${
                  activeIndex === idx ? 'opacity-100 scale-100' : 'opacity-30 scale-95 lg:opacity-20'
                }`}
              >
                <span className="text-[#939393] text-xs font-medium tracking-[0.2em] mb-4 uppercase" style={{ fontFamily: "'Doto', 'Courier New', monospace" }}>
                  {product.step}
                </span>
                <h4 className="text-3xl font-light mb-6 text-white">{product.title}</h4>
                <p className="text-white/70 text-base font-light mb-8 leading-relaxed max-w-lg">
                  {product.description}
                </p>
                <ul className="space-y-3.5">
                  {product.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm font-light text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#939393]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Mockup Visualizer Area */}
          <div className="lg:col-span-6 lg:sticky lg:top-[12vh] flex items-center justify-center z-20 mx-auto w-full max-w-[720px] aspect-[4/3]">
            <div className="w-full h-full bg-[#181818] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden shadow-2xl">
              
              {/* Showcase Screen Layers */}
              <div className="flex-1 relative w-full h-full">
                
                {/* 01. Diagnostic Visualizer */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between transition-all duration-500 ease-in-out ${
                    activeIndex === 0 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div key={`diag-${activeIndex === 0 ? 'active' : 'inactive'}`} className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Ring score */}
                    <div className="flex flex-col items-center justify-center p-5 bg-[#111111] border border-white/5 rounded-2xl h-full shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                          <circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="6"
                            strokeDasharray={264}
                            strokeDashoffset={264}
                            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                            style={{ animation: 'draw-circle-78 1.5s ease-out 0.6s forwards' }}
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
                          <span className="text-4xl font-light text-white" style={{ fontFamily: "'Doto', 'Courier New', monospace" }}>78</span>
                          <span className="text-[10px] text-white/50 uppercase tracking-wider font-light mt-1">readiness</span>
                        </div>
                      </div>
                      <span className="text-sm text-white/70 font-light opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>Maturity: Builder</span>
                    </div>

                    {/* Radar Chart Lines */}
                    <div className="flex flex-col justify-center p-5 bg-[#111111] border border-white/5 rounded-2xl h-full shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                      <div className="space-y-6 w-full">
                        <div className="text-[10px] text-white/40 uppercase tracking-widest font-light opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', fontFamily: "'Doto', 'Courier New', monospace" }}>
                          Assessment Dimensions
                        </div>
                        <div className="space-y-4">
                          {[
                            { label: 'Strategy', val: 80, delay: '1.0s' },
                            { label: 'Data Readiness', val: 75, delay: '1.2s' },
                            { label: 'Process Audit', val: 90, delay: '1.4s' },
                            { label: 'Governance', val: 60, delay: '1.6s' },
                          ].map((dim) => (
                            <div key={dim.label} className="text-xs space-y-2 opacity-0 animate-fade-in" style={{ animationDelay: dim.delay }}>
                              <div className="flex justify-between text-xs text-white/70">
                                <span>{dim.label}</span>
                                <span style={{ fontFamily: "'Doto', 'Courier New', monospace" }} className="text-[#939393]">{dim.val}%</span>
                              </div>
                              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                                <div className="absolute left-0 top-0 h-full bg-[#939393] w-0" style={{ animation: `fill-bar-width 1s ease-out ${parseFloat(dim.delay)+0.2}s forwards`, '--target-width': `${dim.val}%` } as React.CSSProperties} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-white/30 text-center uppercase tracking-widest mt-6 font-light">
                    * Simplified indicators demonstrating composite score breakdown.
                  </div>
                </div>

                {/* 02. Blueprint Visualizer */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between transition-all duration-500 ease-in-out ${
                    activeIndex === 1 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div key={`blue-${activeIndex === 1 ? 'active' : 'inactive'}`} className="flex-1 flex flex-col justify-center items-center w-full h-full opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="w-full bg-[#111111] border border-white/5 rounded-2xl p-8 relative shadow-lg">
                      <div className="text-[10px] text-white/40 uppercase tracking-widest text-center font-light mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', fontFamily: "'Doto', 'Courier New', monospace" }}>
                        System Architecture Pipeline
                      </div>
                      
                      {/* Visual pipeline stages */}
                      <div className="flex justify-between items-center relative w-full px-4">
                        {/* Connector Line Background */}
                        <div className="absolute top-[24px] left-[15%] right-[15%] h-[1px] bg-white/10 -z-10" />
                        {/* Active Connector Line Glow */}
                        <div className="absolute top-[24px] left-[15%] right-[15%] h-[1px] bg-[#939393]/30 -z-10 overflow-hidden">
                          <div className="h-full w-24 bg-[#939393] animate-[laser-right_4s_ease-in-out_infinite]" />
                        </div>

                        {[
                          { label: 'Data Ingest', desc: 'Sources', delay: '0.8s' },
                          { label: 'Processing', desc: 'Analysis', delay: '1.2s' },
                          { label: 'Engine', desc: 'Logic', delay: '1.6s' },
                          { label: 'Execution', desc: 'Actions', delay: '2.0s' },
                        ].map((node, i) => (
                          <div key={node.label} className="flex flex-col items-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: node.delay }}>
                            <div className="w-12 h-12 rounded-xl bg-[#080808] border border-white/10 flex items-center justify-center text-[#939393]">
                              <span style={{ fontFamily: "'Doto', 'Courier New', monospace", fontSize: '14px' }}>0{i+1}</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                              <span className="text-[11px] text-white/80 font-medium">{node.label}</span>
                              <span className="text-[9px] text-white/40 font-light">{node.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-white/30 text-center uppercase tracking-widest mt-6 font-light">
                    * Schematic mapping how databases interface with automation layers.
                  </div>
                </div>

                {/* 03. Roadmap Visualizer */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between transition-all duration-500 ease-in-out ${
                    activeIndex === 2 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div key={`road-${activeIndex === 2 ? 'active' : 'inactive'}`} className="flex-1 flex flex-col justify-center space-y-8 w-full h-full opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {/* Top nodes */}
                    <div className="flex items-center justify-between w-full mx-auto relative px-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                      <div className="absolute top-1/2 left-12 right-12 h-[1px] bg-white/10 -translate-y-1/2 -z-10" />
                      <div className="absolute top-1/2 left-12 w-[33%] h-[1px] bg-[#939393] -translate-y-1/2 -z-10 origin-left opacity-0 animate-scale-x" style={{ animationDelay: '1.2s' }} />

                      {[
                        { num: 'W1', name: 'Setup', active: true, delay: '0.8s' },
                        { num: 'W2', name: 'Automations', active: true, delay: '1.4s' },
                        { num: 'W3', name: 'Scale', active: false, delay: '1.8s' },
                      ].map((wave) => (
                        <div key={wave.name} className="flex flex-col items-center gap-2 opacity-0 animate-fade-in-up" style={{ animationDelay: wave.delay }}>
                          <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs ${
                            wave.active ? 'border-[#939393] bg-[#939393]/10 text-[#939393] font-semibold' : 'border-white/10 bg-[#111111] text-white/40'
                          }`} style={{ fontFamily: "'Doto', 'Courier New', monospace" }}>
                            {wave.num}
                          </div>
                          <span className="text-[10px] text-white/50 font-light">{wave.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Deliverables list */}
                    <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 mx-auto w-full max-w-md space-y-4 shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '2.0s' }}>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest font-light" style={{ fontFamily: "'Doto', 'Courier New', monospace" }}>
                        Wave 1 Milestone Action List
                      </div>
                      <div className="space-y-3">
                        {[
                          { text: 'Finalize Diagnostic Baseline Parameters', done: true, delay: '2.2s' },
                          { text: 'Map Centralized Data Storage Schema', done: true, delay: '2.4s' },
                          { text: 'Establish Slack / Email Communication Links', done: false, delay: '2.6s' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 text-xs text-white/80 font-light opacity-0 animate-fade-in-up" style={{ animationDelay: item.delay }}>
                            <span className={`w-5 h-5 rounded border flex items-center justify-center text-[10px] transition-colors ${
                              item.done ? 'border-[#939393] text-[#939393] bg-[#939393]/10' : 'border-white/10 text-transparent'
                            }`}>
                              ✓
                            </span>
                            <span className={item.done ? 'line-through text-white/40' : ''}>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-white/30 text-center uppercase tracking-widest mt-6 font-light">
                    * Phased wave system mapping out operational integrations step-by-step.
                  </div>
                </div>

                {/* 04. Conversational Consultation Visualizer */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between transition-all duration-500 ease-in-out ${
                    activeIndex === 3 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div key={`chat-${activeIndex === 3 ? 'active' : 'inactive'}`} className="flex-1 flex flex-col font-light w-full h-full justify-between">
                    <div className="flex flex-col gap-4 w-full">
                      {/* User Message - Right Aligned */}
                      <div className="flex justify-end opacity-0 animate-fade-in-up" style={{ animationDelay: '3.3s' }}>
                        <div className="bg-[#2A2A2A] border border-white/5 rounded-2xl px-5 py-3.5 text-white/90 text-[13px] sm:text-sm leading-relaxed shadow-sm max-w-[85%]">
                          Can you analyze my current lead generation process?
                        </div>
                      </div>
                      
                      {/* Grok-style Agents Thinking */}
                      <div className="flex flex-col gap-4 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '4.0s' }}>
                        
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
                            <div key={i} className="flex flex-col gap-1.5 opacity-0 animate-fade-in-up" style={{ animationDelay: `${4.5 + i * 0.3}s` }}>
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
                    </div>

                    {/* Bottom Search Bar */}
                    <div className="w-full mt-4 bg-[#1D1D1D] border border-white/5 rounded-full px-4 py-3 flex items-center justify-between shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <div className="flex items-center gap-3 text-white/40 flex-1 h-5 overflow-hidden">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                        </svg>
                        
                        <div className="relative flex-1 h-full flex items-center text-sm">
                          {/* Placeholder */}
                          <div className="absolute inset-0 flex items-center text-white/40" style={{ animation: 'fade-out 0.1s forwards 0.8s, fade-in 0.1s forwards 3.0s' }}>
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
                  <div className="text-[10px] text-white/30 text-center uppercase tracking-widest mt-6 font-light">
                    * Conversational interface for strategic operational insights.
                  </div>
                </div>

                {/* 05. Workflow Visualizer */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between transition-all duration-500 ease-in-out ${
                    activeIndex === 4 ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div key={`wf-${activeIndex === 4 ? 'active' : 'inactive'}`} className="w-full flex flex-col gap-4 h-full justify-center">
                    {/* Chat Prompt for Workflow */}
                    <div className="bg-[#111111] border border-white/5 rounded-2xl p-4 flex gap-4 items-center shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <div className="w-9 h-9 rounded-full bg-[#1e1e1e] flex-shrink-0 flex items-center justify-center text-sm font-medium text-white/80 border border-white/5 shadow-sm">U</div>
                      <div className="text-white/90 text-sm flex-1 font-light leading-relaxed">
                        Create an automation workflow to extract email leads and send them to Slack.
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-white/10 border-t-[#939393] flex-shrink-0 animate-spin opacity-0" style={{ animation: 'fade-in 0.1s ease-out 0.8s forwards, spin 1s linear infinite, fade-out 0.2s ease-in 2.5s forwards' }} />
                    </div>

                    {/* Generated Flow */}
                    <div className="w-full bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden shadow-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '2.5s' }}>
                      <div className="absolute inset-0 bg-[#939393]/5 opacity-0" style={{ animation: 'fade-in 1s ease-out 3s forwards, pulse 3s ease-in-out infinite alternate 4s' }} />
                      <div className="text-[10px] text-white/40 uppercase tracking-widest text-center font-light z-10" style={{ fontFamily: "'Doto', 'Courier New', monospace" }}>
                        Workflow Generated
                      </div>

                      <div className="flex items-center justify-between w-full max-w-sm mx-auto z-10 relative">
                        {/* Connecting Lines */}
                        <div className="absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-white/5 -translate-y-1/2 -z-10" />
                        <div className="absolute top-1/2 left-[15%] right-[50%] h-[2px] bg-[#939393] -translate-y-1/2 -z-10 origin-left opacity-0 animate-scale-x" style={{ animationDelay: '3.2s' }} />
                        <div className="absolute top-1/2 left-[50%] right-[15%] h-[2px] bg-[#939393] -translate-y-1/2 -z-10 origin-left opacity-0 animate-scale-x" style={{ animationDelay: '4.0s' }} />

                        {/* Node 1: Trigger */}
                        <div className="px-4 py-3 bg-[#080808] border border-white/10 rounded-xl text-xs font-light text-white flex flex-col items-center shadow-lg min-w-[80px] opacity-0 animate-fade-in-up" style={{ animationDelay: '2.8s' }}>
                          <span className="text-[9px] text-white/40 uppercase mb-1 tracking-wider">Trigger</span>
                          <span className="font-medium text-sm">Email</span>
                        </div>
                        
                        {/* Node 2: Agent */}
                        <div className="px-4 py-3 bg-[#080808] border border-[#939393]/40 rounded-xl text-xs font-light text-white flex flex-col items-center relative min-w-[80px] opacity-0 animate-fade-in-up" style={{ animationDelay: '3.6s' }}>
                          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#939393] animate-ping opacity-80" />
                          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#939393]" />
                          <span className="text-[9px] text-[#939393] uppercase font-medium mb-1 tracking-wider">AI Agent</span>
                          <span className="font-medium text-sm text-[#939393]">Extract</span>
                        </div>

                        {/* Node 3: Action */}
                        <div className="px-4 py-3 bg-[#080808] border border-white/10 rounded-xl text-xs font-light text-white flex flex-col items-center shadow-lg min-w-[80px] opacity-0 animate-fade-in-up" style={{ animationDelay: '4.4s' }}>
                          <span className="text-[9px] text-white/40 uppercase mb-1 tracking-wider">Action</span>
                          <span className="font-medium text-sm">Slack</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-white/30 text-center uppercase tracking-widest mt-6 font-light">
                    * Natural language command translated into execution nodes.
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
