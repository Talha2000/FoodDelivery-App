import React from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeGrid() {
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-10">
      {/* <p className="text-3xl font-bold underline underline-offset-2">Most Popular</p> */}
      {/* <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-[auto]
      gap-8"> */}
      <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-8">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
}
