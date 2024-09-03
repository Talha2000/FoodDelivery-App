import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeGrid() {
  
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-[auto] gap-10">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  )
}
