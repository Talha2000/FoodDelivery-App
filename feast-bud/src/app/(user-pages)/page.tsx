import RecipeSearchBar from "@/src/components/RecipeSearchBar";
import "./home.css";
import { Button } from "@/src/components/ui/button";
import PopularSection from "@/src/components/PopularSection";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="relative min-h-[680px] w-full custom-bg lg:min-h-[800px]">
        <div className="relative mx-0 max-w-none px-6 pb-48 pt-20 text-white sm:px-10 sm:pt-28 lg:px-14">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-orange-200">
              A table full of possibilities
            </p>
            <h1 className="max-w-2xl pb-6 text-4xl font-extrabold leading-[1.08] md:text-6xl">
              Recipes for the way you really eat.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/90 sm:text-xl">
              From quick drinks and weeknight soups to slow, celebratory dishes,
              find something worth putting on the table.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
              <span className="rounded-full border border-white/30 bg-black/20 px-4 py-2">
                Quick and slow recipes
              </span>
              <span className="rounded-full border border-white/30 bg-black/20 px-4 py-2">
                Comfort food classics
              </span>
              <span className="rounded-full border border-white/30 bg-black/20 px-4 py-2">
                Ideas for every appetite
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 w-full max-w-3xl -translate-x-1/2 px-4 sm:px-6">
          <div className="relative space-y-4 rounded-3xl border border-orange-200 bg-orange-50/95 p-5 shadow-2xl shadow-black/30 backdrop-blur dark:border-[#45413d] dark:bg-[#24211e]/95 sm:p-6">
            <div>
              <p className="text-lg font-bold text-foreground">
                What are you in the mood for?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Search the collection by dish, ingredient, or occasion.
              </p>
            </div>
            <RecipeSearchBar />
            <Button
              asChild
              variant="viewBtn"
              className="w-full bg-orange-700 shadow-sm hover:bg-orange-800 dark:bg-orange-500 dark:text-black dark:hover:bg-orange-400"
            >
              <Link href="/recipes">Explore the collection</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="min-h-screen overflow-clip bg-[#fffaf2] pt-12 text-foreground dark:bg-[#0a0a0a]">
        <PopularSection />
      </section>
    </>
  );
}
