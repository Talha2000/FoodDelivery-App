import React from "react";
import RecipeGrid from "./RecipeGrid";

export default function PopularSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 sm:px-12">
      <div className="relative mb-10 overflow-hidden rounded-3xl border border-orange-200 bg-orange-50 px-6 py-8 dark:border-orange-900/80 dark:bg-[#2b2119] sm:px-10 sm:py-9">
        <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full border-[20px] border-orange-200/60 dark:border-orange-900/50" />
        <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-400">
              From the FeastBud table
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Something for every kind of craving
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Explore recipes that move with your day, whether you have 35
              minutes or a whole afternoon to make it special.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2 text-xs font-semibold text-orange-800 dark:text-orange-200">
            <span className="rounded-full bg-orange-200/70 px-3 py-2 dark:bg-orange-900/70">
              Sweet
            </span>
            <span className="rounded-full bg-orange-200/70 px-3 py-2 dark:bg-orange-900/70">
              Savory
            </span>
            <span className="rounded-full bg-orange-200/70 px-3 py-2 dark:bg-orange-900/70">
              Fresh
            </span>
          </div>
        </div>
      </div>
      <RecipeGrid />
    </div>
  );
}
