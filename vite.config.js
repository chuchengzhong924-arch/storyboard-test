import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite dev server already serves BrowserRouter SPA fallback.
// For static hosting, configure the host to rewrite all paths to /index.html.
export default defineConfig({
  base: '/storyboard-test/',
  plugins: [react()],
});
