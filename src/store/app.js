// Utilities
import { defineStore } from 'pinia'
import resume from '@/assets/resume.json'

export const useAppStore = defineStore('app', {
  state: () => ({
    resume: resume
  }),
})
