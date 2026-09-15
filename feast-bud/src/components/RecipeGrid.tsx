import React from "react";
import RecipeCard from "./RecipeCard";
import { featuredRecipes } from "@/src/lib/recipes";

export default function RecipeGrid() {
  return (
    <div className="relative grid w-full gap-10 sm:left-1/2 sm:w-[calc(100%+6rem)] sm:-translate-x-1/2 lg:w-[calc(100%+8rem)] lg:grid-cols-3">
      {featuredRecipes.map(
        ({ id, title, description, time, category, imageUrl }) => (
          <RecipeCard
            key={title}
            postID={id}
            title={title}
            description={description}
            time={time}
            difficulty={category}
            imageUrl={imageUrl}
          />
        ),
      )}
    </div>
  );
}
