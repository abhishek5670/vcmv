import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Standard search engines ──────────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
      },

      // ── AI answer engines (explicitly allowed for GEO / citation) ────
      // OpenAI — ChatGPT browsing & search
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },

      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },

      // Anthropic — Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },

      // Google — Gemini / AI Overview
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },

      // Meta — Llama / AI features
      {
        userAgent: "meta-externalagent",
        allow: "/",
      },

      // Cohere AI
      {
        userAgent: "cohere-ai",
        allow: "/",
      },

      // You.com
      {
        userAgent: "YouBot",
        allow: "/",
      },

      // Brave Search AI
      {
        userAgent: "Brave",
        allow: "/",
      },
    ],
    sitemap: "https://vcmv.in/sitemap.xml",
    host: "https://vcmv.in",
  };
}
