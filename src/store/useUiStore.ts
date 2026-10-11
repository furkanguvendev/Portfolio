import { create } from 'zustand'

type UIState = {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((s) => ({ isMenuOpen: !s.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}))