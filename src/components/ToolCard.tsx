import React from 'react';
import { motion } from 'motion/react';
import { Tool } from '../constants';

interface ToolCardProps {
  tool: Tool;
  onClick?: () => void;
}

export const ProBadge: React.FC = () => (
  <div className="absolute top-0 left-0 bg-gradient-to-r from-accent-purple to-accent-cyan px-3 py-1 rounded-br-xl rounded-tl-2xl text-[10px] font-bold text-white tracking-wider shadow-lg z-10 flex items-center gap-1">
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
    PRO 4K
  </div>
);

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  const Icon = tool.icon;
  const isRed = tool.theme === 'red';

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02, backgroundColor: 'var(--color-card-hover)' }}
      whileTap={{ scale: 0.98 }}
      className={`relative group p-6 rounded-2xl bg-card-bg border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center text-center ${
        tool.isPro 
          ? 'border-accent-purple/30 shadow-[0_0_20px_rgba(138,43,226,0.1)]' 
          : isRed 
            ? 'border-red-500/20 hover:border-red-500/40' 
            : 'border-white/5'
      }`}
    >
      {/* PRO 4K Badge at top-left corner */}
      {tool.isPro && <ProBadge />}

      {/* Other Badges */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1 items-end">
        {tool.isNew && (
          <div className="bg-red-600 px-2 py-0.5 rounded-md text-[9px] font-black text-white tracking-tighter shadow-lg animate-pulse">
            NEW
          </div>
        )}
      </div>

      {/* Icon Container */}
      <div className={`mb-4 p-4 rounded-xl transition-colors duration-300 ${
        tool.isPro 
          ? 'bg-accent-purple/10 text-accent-purple group-hover:bg-accent-purple/20' 
          : isRed
            ? 'bg-red-500/10 text-red-500 group-hover:bg-red-500/20'
            : 'bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan/20'
      }`}>
        <Icon size={32} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3 className={`text-sm font-semibold mb-2 group-hover:text-white transition-colors ${
        isRed ? 'text-red-500/90' : 'text-gray-200'
      }`}>
        {tool.title}
      </h3>
      
      {tool.description && (
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
          {tool.description}
        </p>
      )}

      {/* Hover Effect Background */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
        isRed ? 'bg-gradient-to-br from-red-500/5 to-transparent' : 'bg-gradient-to-br from-white/5 to-transparent'
      }`} />
    </motion.div>
  );
};
