"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = [
    { id: "default", color: "#c9a86a" }, // Gold
    { id: "green", color: "#5FB88A" }, // Green
    { id: "slate", color: "#9CA3AF" }, // Slate
  ];

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-2 rounded-full shadow-lg border backdrop-blur-md"
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        borderColor: "var(--border)",
      }}
    >
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={cn(
            "w-6 h-6 rounded-full transition-transform duration-200 border-2",
            theme === t.id ? "scale-110" : "scale-100 hover:scale-110 opacity-70 hover:opacity-100",
          )}
          style={{
            backgroundColor: t.color,
            borderColor: theme === t.id ? "var(--foreground)" : "transparent",
          }}
          aria-label={`Switch to ${t.id} theme`}
        />
      ))}
    </div>
  );
}
