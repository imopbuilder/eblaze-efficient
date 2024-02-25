import { create } from 'zustand';

type State = {
  selectedLink: { isActive: boolean; index: number };
  open: boolean;
};

type Action = {
  updateSelectedLink: (selectedLink: State['selectedLink']) => void;
  setOpen: () => void;
};

// Create your store, which includes both state and (optionally) actions
export const useNav = create<State & Action>((set) => ({
  selectedLink: { isActive: false, index: 0 },
  open: false,
  updateSelectedLink: (selectedLink) => set(() => ({ selectedLink: selectedLink })),
  setOpen: () => set((state) => ({ open: !state.open })),
}));
