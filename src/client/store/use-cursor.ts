import { create } from 'zustand';

type State = {
  isHover: boolean;
};

type Action = {
  setIsHover: (isHover: State['isHover']) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useCursor = create<State & Action>((set) => ({
  isHover: false,
  setIsHover: (isHover) => set(() => ({ isHover: isHover })),
}));
