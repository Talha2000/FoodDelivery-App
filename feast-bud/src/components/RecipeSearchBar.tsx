"use client";

import { SearchIcon } from "lucide-react";
import React, { FormEvent, useState } from "react";

export default function RecipeSearchBar() {
  const [searchValue, setSearchValue] = useState("");
  // const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setSearchValue(newSearch);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchValue.trim();
    window.location.href = query
      ? `/recipes?search=${encodeURIComponent(query)}`
      : "/recipes";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center rounded-xl border border-orange-200 bg-background shadow-sm dark:border-[#45413d] dark:bg-[#302c28]"
    >
      <label htmlFor="recipe-search" className="sr-only">
        Search recipes
      </label>
      <button
        type="submit"
        className="p-3 text-foreground hover:bg-muted"
        aria-label="Search recipes"
      >
        <SearchIcon />
      </button>
      <input
        type="text"
        id="recipe-search"
        value={searchValue}
        onChange={handleSearch}
        placeholder={'Try "biryani", "lemon", or "vegetable"'}
        className="w-full bg-transparent p-3 text-foreground outline-none placeholder:text-muted-foreground"
      />
    </form>
  );
}
