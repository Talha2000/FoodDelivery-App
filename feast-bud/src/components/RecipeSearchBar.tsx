'use client';

import { SearchIcon } from 'lucide-react';
import React, { useState } from 'react';

export default function RecipeSearchBar() {
  const [searchValue, setSearchValue] = useState('');
  // const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setSearchValue(newSearch);
  };
  console.log('new search val', searchValue);

  return (
    // <div className="relative flex">
    <div className="flex items-center border rounded-xl">
      <button type="button" className="p-3 h-full text-black hover:bg-gray-200">
        <SearchIcon />
      </button>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search Recipe..."
        className="w-full p-3 bg-white text-black"
      />
    </div>
  );
}
