import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset paths relative, so the build works on GitHub Pages
// under /FanKiing/ as well as on a custom domain.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
