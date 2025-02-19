import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "framer-motion": "framer-motion",
      "react-icons/md": "react-icons/md",
      "react-icons/fa": "react-icons/fa",
      "react-icons/io5": "react-icons/io5",
    },
  },
});
