import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { ToolCard } from './components/ToolCard';
import { EduLayout } from './components/EduLayout';
import { AiWorkspace } from './components/AiWorkspace';
import { PHASES, Tool } from './constants';
import { Settings, Cpu, Maximize, Layers, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('arch');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  
  // Global AI Settings
  const [imageSize, setImageSize] = useState('1K');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [selectedModel, setSelectedModel] = useState('gemini-2.5-flash-image');

  const currentPhase = PHASES.find((p) => p.id === activeTab);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSelectedTool(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-white">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="flex-grow">
        {/* Global AI Settings Bar - Always Visible */}
        <div className="max-w-[98%] mx-auto px-6 pt-8">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-wrap items-center justify-center gap-8 shadow-2xl">
            <div className="flex items-center gap-2 pr-4 border-r border-white/10">
              <Settings size={18} className="text-accent-cyan animate-spin-slow" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Cấu hình AI</span>
            </div>

            {/* Model Selection */}
            <div className="flex items-center gap-3">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-tight flex items-center gap-1">
                <Cpu size={12} className="text-accent-purple" />
                Model
              </label>
              <div className="flex bg-white/5 p-1 rounded-lg border border-white/5">
                {[
                  { id: 'gemini-2.5-flash-image', label: 'V2.5', name: 'Flash' },
                  { id: 'gemini-3-pro-image-preview', label: 'V3', name: 'Pro' },
                  { id: 'gemini-3.1-flash-image-preview', label: 'V3.1', name: '3.1' }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m.id)}
                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all ${
                      selectedModel === m.id 
                        ? 'bg-accent-cyan text-white shadow-lg' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    title={m.name}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Size */}
            <div className="flex items-center gap-3">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-tight flex items-center gap-1">
                <Maximize size={12} className="text-accent-cyan" />
                Size
              </label>
              <div className="flex bg-white/5 p-1 rounded-lg border border-white/5">
                {['1K', '2K', '4K'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setImageSize(size)}
                    disabled={selectedModel === 'gemini-2.5-flash-image'}
                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all ${
                      imageSize === size 
                        ? 'bg-accent-cyan text-white shadow-lg' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    } disabled:opacity-20 disabled:cursor-not-allowed`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Aspect Ratio */}
            <div className="flex items-center gap-3">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-tight flex items-center gap-1">
                <Layers size={12} className="text-accent-purple" />
                Ratio
              </label>
              <div className="flex bg-white/5 p-1 rounded-lg border border-white/5 overflow-x-auto max-w-[400px] no-scrollbar">
                {[
                  { id: '1:1', label: '1:1' },
                  { id: '16:9', label: '16:9' },
                  { id: '9:16', label: '9:16' },
                  { id: '4:3', label: '4:3' },
                  { id: '3:4', label: '3:4' },
                  { id: '3:2', label: '3:2' },
                  { id: '2:3', label: '2:3' },
                  { id: '2:1', label: '2:1' },
                  { id: '1:2', label: '1:2' },
                  { id: '21:9', label: '21:9' },
                  { id: '1:4', label: '1:4' },
                  { id: '1:8', label: '1:8' },
                  { id: '4:1', label: '4:1' },
                  { id: '8:1', label: '8:1' }
                ].map((ratio) => (
                  <button
                    key={ratio.id}
                    onClick={() => setAspectRatio(ratio.id)}
                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all whitespace-nowrap ${
                      aspectRatio === ratio.id 
                        ? 'bg-accent-purple text-white shadow-lg' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {ratio.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-white/10">
              <Sparkles size={14} className="text-accent-cyan animate-pulse" />
              <span className="text-[10px] text-gray-500 italic">Áp dụng cho tất cả tác vụ</span>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {selectedTool ? (
            <motion.div
              key="workspace"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full p-6"
            >
              <AiWorkspace 
                tool={selectedTool} 
                onClose={() => setSelectedTool(null)} 
                globalSettings={{ imageSize, aspectRatio, selectedModel }}
              />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Phase Header */}
              {currentPhase?.layout !== 'edu' && (
                <section className="pt-16 pb-12 px-6 text-center">
                  <div className="max-w-[98%] mx-auto">
                    <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-2 uppercase">
                      {currentPhase?.id === 'arch' ? (
                        <>MYRA - <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">ARCHIGEN</span> AI</>
                      ) : currentPhase?.id === 'arch2' ? (
                        <>ARCH 2 <span className="text-accent-cyan">PRO</span> STUDIO</>
                      ) : currentPhase?.id === 'photo' ? (
                        <>PHOTO <span className="text-accent-purple">MAGIC</span> STUDIO</>
                      ) : currentPhase?.id === 'brand' ? (
                        <>BRAND <span className="text-pro-gold">STUDIO</span></>
                      ) : currentPhase?.id === 'video' ? (
                        <>VEO 3.1 <span className="text-accent-cyan">CINEMA</span></>
                      ) : currentPhase?.id === 'car' ? (
                        <>CAR <span className="text-red-500">TUNING</span> PRO</>
                      ) : (
                        currentPhase?.title
                      )}
                    </h1>
                    {currentPhase?.id === 'arch' && (
                      <p className="text-sm text-accent-cyan font-bold uppercase tracking-[0.3em] mb-4">Phạm Hoài Mỹ</p>
                    )}
                    <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto">
                      {currentPhase?.subtitle}
                    </p>
                  </div>
                </section>
              )}

              {/* Layout Switcher */}
              <div className="px-6 pb-20">
                {currentPhase?.layout === 'edu' ? (
                  <EduLayout />
                ) : currentPhase?.layout === 'sections' ? (
                  <div className="max-w-[98%] mx-auto space-y-16">
                    {currentPhase.sections?.map((section, idx) => (
                      <div key={idx} className="space-y-6">
                        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-3">
                          <div className={`w-1 h-4 rounded-full ${section.title.includes('Xu Hướng') ? 'bg-red-500' : 'bg-accent-cyan'}`} />
                          {section.title}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {section.tools.map((tool) => (
                            <ToolCard key={tool.id} tool={tool} onClick={() => setSelectedTool(tool)} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : currentPhase?.layout === 'centered' ? (
                  <div className="max-w-[98%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
                    {currentPhase.tools?.map((tool) => (
                      <ToolCard key={tool.id} tool={tool} onClick={() => setSelectedTool(tool)} />
                    ))}
                  </div>
                ) : (
                  <div className={`max-w-[98%] mx-auto grid gap-4 ${
                    currentPhase?.id === 'arch2' 
                      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5' 
                      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                  }`}>
                    {currentPhase?.tools?.map((tool) => (
                      <ToolCard key={tool.id} tool={tool} onClick={() => setSelectedTool(tool)} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-8 px-6 border-t border-white/5 text-center bg-black/20">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-2">
          MYRA - ARCHIGEN AI • Innovation • Design • Intelligence
        </p>
        <p className="text-[10px] text-gray-700">
          © 2026 MYRA - ARCHIGEN AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
