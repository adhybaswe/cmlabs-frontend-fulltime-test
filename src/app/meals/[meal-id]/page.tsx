'use client';

import { useMealDetail } from '@/services/mealQueries';
import { use } from 'react';
import Image from 'next/image';
import { Spinner } from '@/components/atoms/Spinner';
import { BackButton } from '@/components/molecules/BackButton';
import { MainLayout } from '@/components/templates/MainLayout';

export default function MealDetailPage({ params }: { params: Promise<{ 'meal-id': string }> }) {
  const resolvedParams = use(params);
  const mealId = resolvedParams['meal-id'];
  const { data: meal, isLoading, isError } = useMealDetail(mealId);

  if (isLoading) return <MainLayout><Spinner /></MainLayout>;
  if (isError) return <MainLayout><div className="text-center text-red-500 py-20 font-bold">Error fetching meal details</div></MainLayout>;
  if (!meal) return <MainLayout><div className="text-center py-20">Meal not found</div></MainLayout>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        name: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <BackButton href="/" label="Back to Recipes" />
        
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest ring-1 ring-blue-100">{meal.strCategory}</span>
            <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest ring-1 ring-indigo-100">{meal.strArea}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
            {meal.strMeal}
          </h1>
          <div className="h-2 w-24 bg-blue-600 rounded-full"></div>
        </header>

        {/* Hero Image - Extra Large */}
        <div className="relative aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl ring-1 ring-gray-200">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Ingredients Column */}
          <aside className="lg:col-span-5">
            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-xl sticky top-28">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-xl text-lg italic font-serif">i</span>
                Ingredients
              </h2>
              <ul className="space-y-4">
                {ingredients.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0 group">
                    <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">{item.name}</span>
                    <span className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-lg ring-1 ring-blue-100">{item.measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Instructions Column */}
          <article className="lg:col-span-7">
            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-xl">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                Cooking Instructions
              </h2>
              <div className="space-y-6">
                {meal.strInstructions.split('\r\n').filter((step: string) => step.trim()).map((step: string, index: number) => (
                  <div key={index} className="flex gap-6 group">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 font-black text-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {index + 1}
                    </span>
                    <p className="text-gray-600 leading-relaxed text-lg pt-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* Full-Width Video Section */}
        {meal.strYoutube && (
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black mb-4">Video Tutorial</h2>
              <p className="text-gray-500">Watch the step-by-step process of making {meal.strMeal}</p>
            </div>
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl ring-4 ring-white ring-offset-4 ring-offset-blue-50">
              <iframe
                src={meal.strYoutube.replace('watch?v=', 'embed/')}
                title="YouTube video player"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        )}
      </div>
    </MainLayout>
  );
}
