import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

/**
 * @fileoverview Configuración de Vite optimizada para despliegue en GitHub Pages.
 * @see {@link https://vitejs.dev/config/}
 */
export default defineConfig({
  // 'base' debe coincidir con el nombre de tu repositorio en GitHub
  base: "/hotel-management-system/", 
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      /** Alias para rutas modulares según la Guía Maestra [cite: 18] */
      "@": path.resolve(__dirname, "./src"),
    },
  },
});