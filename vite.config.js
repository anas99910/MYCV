import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  // Check if running on Vercel
  const isVercel = process.env.VERCEL === '1';

  return {
    plugins: [react()],
    // If on Vercel, use root path. If not (GitHub Pages), use /MYCV/
    base: isVercel ? '/' : '/MYCV/',
  }
})
