import React from 'react';
import { Home, Search, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const { user, signIn, signOut } = useAuth();
  const navItems = [
    { id: 'edu', label: 'EDU' },
    { id: 'arch2', label: 'ARCH 2' },
    { id: 'arch', label: 'ARCH' },
    { id: 'photo', label: 'PHOTO' },
    { id: 'brand', label: 'BRAND' },
    { id: 'video', label: 'VIDEO' },
    { id: 'car', label: 'CAR' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* User Info / Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onTabChange('arch')}>
          <div className="w-10 h-10 bg-accent-cyan rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-transform group-hover:scale-110">
            <Home size={20} className="text-brand-bg" />
          </div>
          <div className="flex flex-col hidden md:flex">
            <span className="font-sans font-bold text-[14px] leading-tight text-white uppercase tracking-tight">
              MYRA - ARCHIGEN AI
            </span>
            <span className="text-[10px] text-gray-400 font-medium mt-0.5">
              Phạm Hoài Mỹ
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTab === item.id 
                  ? 'bg-accent-cyan/20 text-accent-cyan shadow-[0_0_10px_rgba(0,242,255,0.1)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions / Profile */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};
