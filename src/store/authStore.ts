// src/store/authStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Role = 'admin' | 'dm' | 'instructor'

interface AuthState {
  user: { id: string; name: string; email: string; role: Role } | null
  login: (user: AuthState['user']) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login:  (user) => set({ user }),
      logout: ()     => set({ user: null }),
    }),
    { name: 'trainops-auth' }
  )
)