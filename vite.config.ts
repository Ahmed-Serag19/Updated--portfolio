import { rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The CV contains phone and email, so it must not ship in the Upwork build.
function stripCvForUpwork(mode: string): Plugin {
  return {
    name: 'strip-cv-for-upwork',
    apply: 'build',
    closeBundle() {
      if (mode === 'upwork') rmSync(resolve('dist/Ahmed_Mohamed_Frontend_Developer.pdf'), { force: true })
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), stripCvForUpwork(mode)],
}))
