"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function BlogPage() {
  const { blogs } = portfolioData;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-card-border/40">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">Blog & Articles</h1>
          <p className="text-sm text-text-muted mt-1">Thoughts, tutorials, and development insights</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-text-muted">
          <DynamicIcon name="Search" className="h-4 w-4" />
        </div>
        <input
          type="text"
          placeholder="Search articles by title, keywords or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-card-border bg-card/40 focus:bg-card focus:border-accent-purple outline-none text-sm transition-all duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-3 flex items-center text-text-muted hover:text-foreground cursor-pointer"
          >
            <DynamicIcon name="X" className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Blog list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBlogs.map((blog) => (
          <Card
            key={blog.id}
            className="group relative flex flex-col justify-between p-6 hover:border-accent-purple/20"
          >
            <div className="space-y-4">
              {/* Meta information */}
              <div className="flex items-center gap-3 text-xs font-semibold text-text-muted">
                <span>{blog.date}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-card-border" />
                <span>{blog.readTime}</span>
              </div>

              {/* Title & Excerpt */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent-purple transition-colors duration-200">
                  <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 mt-4 border-t border-card-border/40">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-card-border/40 text-text-muted border border-card-border/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read More button */}
              <Button
                href={`/blog/${blog.slug}`}
                variant="secondary"
                className="!px-3 !py-1.5 !rounded-lg !text-xs !shadow-none hover:bg-card-hover font-bold text-accent-purple"
              >
                Read Article
                <DynamicIcon name="ChevronRight" className="h-3.5 w-3.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-16 border border-dashed border-card-border rounded-2xl">
          <p className="text-sm text-text-muted">No articles found matching your query.</p>
        </div>
      )}
    </div>
  );
}
