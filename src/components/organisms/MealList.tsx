'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/molecules/SearchBar';
import { MealCard } from '@/components/molecules/MealCard';
import { BackButton } from '@/components/molecules/BackButton';

interface MealListProps {
  meals: any[];
  title: string;
  backHref: string;
  backLabel: string;
}

export const MealList = ({ meals, title, backHref, backLabel }: MealListProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeals = meals?.filter((meal: any) =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header className="mb-12">
        <BackButton href={backHref} label={backLabel} />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-4xl font-extrabold">{decodeURIComponent(title)} Recipes</h1>
          <div className="w-full md:w-72">
            <SearchBar 
              value={searchTerm} 
              onChange={setSearchTerm} 
              placeholder="Search meals..." 
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredMeals?.map((meal: any) => (
          <MealCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            thumbnail={meal.strMealThumb}
          />
        ))}
      </div>

      {filteredMeals?.length === 0 && (
        <div className="text-center py-20 text-gray-500 font-medium">
          No meals found matching "{searchTerm}"
        </div>
      )}
    </>
  );
};
