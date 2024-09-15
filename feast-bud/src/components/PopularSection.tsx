import React from 'react';
import RecipeGrid from './RecipeGrid';

export default function PopularSection() {
  return (
    <div className="mx-4 sm:mx-12">
      <div className="relative flex p-12 justify-center items-center">
        <h2 className="text-4xl font-bold underline underline-offset-2">
          Popular Recipes
        </h2>
      </div>
      <RecipeGrid />
    </div>
  );
}
