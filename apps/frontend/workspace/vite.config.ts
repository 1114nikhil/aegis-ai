import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "workspace",

      filename: "remoteEntry.js",

      exposes: {
        "./App": "./src/App.tsx",
      },

      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-dom/": {
          singleton: true,
        },
      },
    }),
  ],

  server: {
    port: 4174,
    strictPort: true,
  },

  preview: {
    port: 4174,
    strictPort: true,
  },

  build: {
    target: "esnext",
  },
});