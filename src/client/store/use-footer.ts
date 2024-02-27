import { create } from 'zustand';

type State = {
  showFooter: boolean;
};

type Action = {
  setShowFooter: (showFooter: State['showFooter']) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useFooter = create<State & Action>((set) => ({
  showFooter: true,
  setShowFooter: (showFooter) => set(() => ({ showFooter: showFooter })),
}));
