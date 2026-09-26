"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import PageHero from "@/components/PageHero";
import { insightsPageContent } from "@/content/insights-content";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InsightsPageClient() {
  const { hero, categories, featured, articles } = insightsPageContent;
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const articlesRef = useRef(null);
  const isInView = useInView(articlesRef, { once: true, margin: "-80px" });

  const allArticles = [featured, ...articles];

  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        heading={hero.heading}
        description={hero.description}
      />

      {/* Featured Article */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--vcmv-charcoal)" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-12 lg:py-16 lg:py-12 md:py-10 md:py-12 lg:py-16 lg:py-20">
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 md:gap-8 lg:gap-12 items-center"
            style={{
              borderLeft: "4px solid var(--vcmv-gold)",
              paddingLeft: "2.5rem",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="px-3 py-1 text-xs tracking-[0.14em] uppercase"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    color: "var(--vcmv-charcoal)",
                    backgroundColor: "var(--vcmv-gold)",
                  }}
                >
                  Featured
                </span>
                <span
                  className="px-3 py-1 text-xs tracking-[0.14em] uppercase"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    color: "var(--vcmv-gold)",
                    border:
                      "1px solid color-mix(in srgb, var(--vcmv-gold) 40%, transparent)",
                  }}
                >
                  {featured.category}
                </span>
              </div>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                  fontWeight: 600,
                  color: "var(--vcmv-ivory)",
                  lineHeight: 1.18,
                  letterSpacing: "-0.01em",
                }}
              >
                {featured.title}
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.9rem",
                  color:
                    "color-mix(in srgb, var(--vcmv-cream) 60%, transparent)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-6">
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-inter)",
                    color:
                      "color-mix(in srgb, var(--vcmv-cream) 40%, transparent)",
                    fontWeight: 300,
                  }}
                >
                  Published: {featured.date}
                </span>
                <Link
                  href={featured.href}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    color: "var(--vcmv-gold)",
                    textDecoration: "none",
                  }}
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Large decorative date */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex flex-col items-end"
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "8rem",
                  fontWeight: 700,
                  color:
                    "color-mix(in srgb, var(--vcmv-gold) 10%, transparent)",
                  lineHeight: 0.9,
                }}
              >
                2025
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters + Articles */}
      <section
        ref={articlesRef}
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--vcmv-ivory)" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 lg:py-28">
          {/* Search + Filter row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-12"
          >
            {/* Search */}
            <div
              className="relative flex items-center"
              style={{ minWidth: "280px" }}
            >
              <Search
                className="absolute left-4 w-4 h-4"
                style={{
                  color:
                    "color-mix(in srgb, var(--vcmv-gold) 50%, transparent)",
                }}
              />
              <input
                type="search"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 text-sm outline-none transition-all duration-200"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  color: "var(--vcmv-charcoal)",
                  backgroundColor: "transparent",
                  border:
                    "1px solid color-mix(in srgb, var(--vcmv-gold) 30%, transparent)",
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--vcmv-gold)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "color-mix(in srgb, var(--vcmv-gold) 30%, transparent)";
                }}
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 text-xs tracking-[0.1em] uppercase transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: activeCategory === cat ? 500 : 400,
                    color:
                      activeCategory === cat
                        ? "var(--vcmv-charcoal)"
                        : "var(--vcmv-taupe)",
                    backgroundColor:
                      activeCategory === cat
                        ? "var(--vcmv-gold)"
                        : "transparent",
                    border:
                      activeCategory === cat
                        ? "1px solid var(--vcmv-gold)"
                        : "1px solid color-mix(in srgb, var(--vcmv-gold) 25%, transparent)",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Note about dates */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 text-xs"
            style={{
              fontFamily: "var(--font-inter)",
              color: "color-mix(in srgb, var(--vcmv-taupe) 60%, transparent)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Note: Articles carry their original publication dates. Tax rates,
            thresholds and deadlines change—always verify current figures before
            relying on them.
          </motion.p>

          {/* Articles grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  className="group flex flex-col"
                  style={{
                    border:
                      "1px solid color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
                    transition:
                      "border-color 0.3s ease, background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "color-mix(in srgb, var(--vcmv-gold) 45%, transparent)";
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "color-mix(in srgb, var(--vcmv-gold) 3%, transparent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)";
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }}
                >
                  {/* Top accent */}
                  <div
                    className="h-0.5 w-full transition-all duration-300 group-hover:opacity-100 opacity-0"
                    style={{ backgroundColor: "var(--vcmv-gold)" }}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category + Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs tracking-[0.12em] uppercase"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 500,
                          color: "var(--vcmv-gold)",
                        }}
                      >
                        {article.category}
                      </span>
                      <time
                        dateTime={article.date}
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-inter)",
                          color:
                            "color-mix(in srgb, var(--vcmv-taupe) 70%, transparent)",
                          fontWeight: 300,
                        }}
                      >
                        {article.date}
                      </time>
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-3 flex-1"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        color: "var(--vcmv-charcoal)",
                        lineHeight: 1.3,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className="mb-6"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.85rem",
                        color: "var(--vcmv-taupe)",
                        lineHeight: 1.7,
                        fontWeight: 300,
                      }}
                    >
                      {article.excerpt}
                    </p>

                    {/* CTA */}
                    <Link
                      href={article.href}
                      className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase mt-auto transition-all duration-200"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 500,
                        color: "var(--vcmv-charcoal)",
                        textDecoration: "none",
                        paddingBottom: "2px",
                        borderBottom:
                          "1px solid color-mix(in srgb, var(--vcmv-gold) 40%, transparent)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--vcmv-gold)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "var(--vcmv-gold)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--vcmv-charcoal)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "color-mix(in srgb, var(--vcmv-gold) 40%, transparent)";
                      }}
                    >
                      Read Article
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="py-12 md:py-10 md:py-12 lg:py-16 lg:py-20 text-center">
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  color: "var(--vcmv-taupe)",
                  fontWeight: 400,
                }}
              >
                No articles found for this filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs tracking-[0.12em] uppercase"
                style={{
                  fontFamily: "var(--font-inter)",
                  color: "var(--vcmv-gold)",
                  fontWeight: 500,
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
