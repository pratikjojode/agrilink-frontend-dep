import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listens on all network interfaces
    port: 5173, // optional: set your desired port
  },
});
