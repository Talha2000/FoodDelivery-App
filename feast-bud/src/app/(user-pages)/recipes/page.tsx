import Link from "next/link";
import RecipeCard from "@/src/components/RecipeCard";
import { featuredRecipes } from "@/src/lib/recipes";

type RecipesPageProps = {
  searchParams: Promise<{ search?: string }>;
};

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const { search = "" } = await searchParams;
  const normalizedSearch = search.trim().toLowerCase();
  const recipes = normalizedSearch
    ? featuredRecipes.filter(({ title, description, category }) =>
        `${title} ${description} ${category}`
          .toLowerCase()
          .includes(normalizedSearch),
      )
    : featuredRecipes;

  return (
    <main className="min-h-screen bg-[#fffaf2] px-6 py-16 text-foreground dark:bg-[#0a0a0a] sm:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-400">
          The collection
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">All recipes</h1>
        <p className="mt-3 text-muted-foreground">
          {normalizedSearch
            ? `Results for “${search}”`
            : "Browse the FeastBud table."}
        </p>
        {recipes.length ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                postID={recipe.id}
                title={recipe.title}
                description={recipe.description}
                time={recipe.time}
                difficulty={recipe.category}
                imageUrl={recipe.imageUrl}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-border bg-card p-8">
            <p className="font-semibold">No recipes found.</p>
            <p className="mt-2 text-muted-foreground">
              Try another ingredient, dish, or category.
            </p>
            <Link
              href="/recipes"
              className="mt-5 inline-flex font-semibold text-orange-700 hover:underline dark:text-orange-400"
            >
              View all recipes
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
