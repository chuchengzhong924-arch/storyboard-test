import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Emit relative asset URLs so the static build works from either a domain root
// or a repository subdirectory (for example GitHub Pages).
export default defineConfig({
  base: './',
  plugins: [react()],
});
