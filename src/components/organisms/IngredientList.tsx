'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SearchBar } from '@/components/molecules/SearchBar';

interface IngredientListProps {
  ingredients: any[];
}

export const IngredientList = ({ ingredients }: IngredientListProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIngredients = ingredients?.filter((ing: any) =>
    ing.strIngredient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Ingredients
        </h1>
        <p className="text-gray-600 mb-8 text-lg">Explore and find recipes by ingredients (SSR Powered)</p>
        <SearchBar 
          value={searchTerm} 
          onChange={setSearchTerm} 
          placeholder="Search ingredients (e.g. Chicken, Beef)..." 
        />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredIngredients?.map((ingredient: any) => (
          <Link
            key={ingredient.idIngredient}
            href={`/ingredients/${ingredient.strIngredient}`}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-200 transition-all text-center bg-white group"
          >
            <h2 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{ingredient.strIngredient}</h2>
            <p className="text-sm text-gray-400 line-clamp-2 mt-2">
              {ingredient.strDescription || 'Explore recipes with this ingredient'}
            </p>
          </Link>
        ))}
      </div>
      
      {filteredIngredients?.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No ingredients found matching "{searchTerm}"
        </div>
      )}
    </>
  );
};
