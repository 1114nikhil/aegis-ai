import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "shell",

      remotes: {
        workspace: {
          type: "module",
          name: "workspace",
          entry: "http://localhost:4174/assets/remoteEntry.js",
        },
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
    port: 4173,
    strictPort: true,
  },

  preview: {
    port: 4173,
    strictPort: true,
  },

  build: {
    target: "esnext",
  },
});