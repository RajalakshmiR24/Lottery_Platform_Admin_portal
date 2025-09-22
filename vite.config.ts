import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 👇 Rename fingerprint.js to avoid adblockers blocking it
      'lucide-react/dist/esm/icons/fingerprint.js': 
        'lucide-react/dist/esm/icons/fingerprint.js?vite',
    },
  },
});
