import { fileURLToPath, URL } from "node:url";
import { copyFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/notes-page/" : "/",
  plugins: [
    tailwindcss(),
    react(),
    {
      name: "github-pages-spa",
      apply: "build",
      closeBundle() {
        const dist = fileURLToPath(new URL("./dist", import.meta.url));
        copyFileSync(`${dist}/index.html`, `${dist}/404.html`);
      },
    },
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
