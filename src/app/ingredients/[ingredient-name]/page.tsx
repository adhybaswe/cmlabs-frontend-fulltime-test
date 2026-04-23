'use client';

import { useMealsByIngredient } from '@/services/mealQueries';
import { use, useState } from 'react';
import { Spinner } from '@/components/atoms/Spinner';
import { SearchBar } from '@/components/molecules/SearchBar';
import { MealCard } from '@/components/molecules/MealCard';
import { BackButton } from '@/components/molecules/BackButton';
import { MainLayout } from '@/components/templates/MainLayout';

export default function IngredientDetailPage({ params }: { params: Promise<{ 'ingredient-name': string }> }) {
  const resolvedParams = use(params);
  const ingredientName = resolvedParams['ingredient-name'];
  const { data: meals, isLoading, isError } = useMealsByIngredient(ingredientName);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeals = meals?.filter((meal: any) =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <MainLayout><Spinner /></MainLayout>;
  if (isError) return <MainLayout><div className="text-center text-red-500">Error fetching meals</div></MainLayout>;

  return (
    <MainLayout>
      <header className="mb-12">
        <BackButton href="/ingredients" label="Back to Ingredients" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-4xl font-extrabold">{decodeURIComponent(ingredientName)} Recipes</h1>
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
    </MainLayout>
  );
}
