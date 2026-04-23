'use client';

import { useCategories } from '@/services/mealQueries';
import Link from 'next/link';
import { useState } from 'react';
import { Spinner } from '@/components/atoms/Spinner';
import { SearchBar } from '@/components/molecules/SearchBar';
import { MainLayout } from '@/components/templates/MainLayout';
import Image from 'next/image';

export default function CategoriesPage() {
  const { data: categories, isLoading, isError } = useCategories();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories?.filter((cat: any) =>
    cat.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <MainLayout><Spinner /></MainLayout>;
  if (isError) return <MainLayout><div className="text-center text-red-500">Error fetching categories</div></MainLayout>;

  return (
    <MainLayout>
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Food Categories
        </h1>
        <p className="text-gray-600 mb-8 text-lg">Browse meals by their type</p>
        <SearchBar 
          value={searchTerm} 
          onChange={setSearchTerm} 
          placeholder="Search categories (e.g. Seafood, Dessert)..." 
        />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCategories?.map((category: any) => (
          <Link
            key={category.idCategory}
            href={`/categories/${category.strCategory}`}
            className="group relative bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 overflow-hidden"
          >
            <div className="relative w-full aspect-[4/3] mb-6">
              <Image
                src={category.strCategoryThumb}
                alt={category.strCategory}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h2 className="font-black text-2xl mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              {category.strCategory}
            </h2>
            <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
              {category.strCategoryDescription}
            </p>
          </Link>
        ))}
      </div>
      
      {filteredCategories?.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No categories found matching "{searchTerm}"
        </div>
      )}
    </MainLayout>
  );
}
