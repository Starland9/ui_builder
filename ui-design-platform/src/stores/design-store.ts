import { create } from 'zustand';

interface DesignState {
  prompt: string;
  generatedHtml: string | null;
  isGenerating: boolean;
  setPrompt: (prompt: string) => void;
  setGeneratedHtml: (html: string | null) => void;
  setIsGenerating: (isGenerating: boolean) => void;
}

export const useDesignStore = create<DesignState>((set) => ({
  prompt: '',
  generatedHtml: null,
  isGenerating: false,
  setPrompt: (prompt) => set({ prompt }),
  setGeneratedHtml: (html) => set({ generatedHtml: html }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
}));
