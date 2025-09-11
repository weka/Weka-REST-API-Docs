import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  server: {
    port: 5000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "terser",
  },
  preview: {
    port: 4173,
    open: true,
  },
  css: {
    devSourcemap: true,
  },
  optimizeDeps: {
    include: ["buffer"],
  },
  resolve: {
    alias: {
      buffer: "buffer",
    },
  },
  define: {
    "process.env": {},
  },
});
