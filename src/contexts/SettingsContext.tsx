import React, { createContext, useContext, useEffect, useState } from 'react';

interface SettingsContextType {
  geminiApiKey: string | null;
  setGeminiApiKey: (key: string | null) => void;
  getApiKey: () => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const STORAGE_KEY = 'gemini_api_key';

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [geminiApiKey, setGeminiApiKeyState] = useState<string | null>(() => {
    return sessionStorage.getItem(STORAGE_KEY);
  });

  const setGeminiApiKey = (key: string | null) => {
    setGeminiApiKeyState(key);
    if (key) {
      sessionStorage.setItem(STORAGE_KEY, key);
    } else {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  };

  const getApiKey = () => {
    // Check state/sessionStorage first
    if (geminiApiKey) return geminiApiKey;
    
    // Fallback to env (for local dev with VITE_ prefix)
    const envKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (envKey) return envKey;

    throw new Error("Missing Gemini API Key");
  };

  return (
    <SettingsContext.Provider value={{ geminiApiKey, setGeminiApiKey, getApiKey }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
