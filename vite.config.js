import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Gera robots.txt e sitemap.xml na hora do build, usando VITE_SITE_URL
function seoFiles(siteUrl) {
  const url = siteUrl.replace(/\/$/, "");
  const today = new Date().toISOString().slice(0, 10);
  return {
    name: "seo-files",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          `  <url><loc>${url}/</loc><lastmod>${today}</lastmod></url>\n` +
          `</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [react(), seoFiles(env.VITE_SITE_URL || "https://SEU-SITE.netlify.app")],
  };
});
