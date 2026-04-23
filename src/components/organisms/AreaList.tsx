'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SearchBar } from '@/components/molecules/SearchBar';

interface AreaListProps {
  areas: any[];
}

export const AreaList = ({ areas }: AreaListProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = areas?.filter((area: any) =>
    area.strArea.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Local Culinary
        </h1>
        <p className="text-gray-600 mb-8 text-lg">Discover recipes by their country of origin (SSR Powered)</p>
        <SearchBar 
          value={searchTerm} 
          onChange={setSearchTerm} 
          placeholder="Search areas (e.g. Italian, Japanese)..." 
        />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredAreas?.map((area: any) => (
          <Link
            key={area.strArea}
            href={`/local-culinary/${area.strArea}`}
            className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl hover:border-blue-200 transition-all text-center bg-white group flex flex-col items-center justify-center aspect-square"
          >
            <div className="w-16 h-1 bg-blue-500 mb-4 rounded-full group-hover:w-24 transition-all"></div>
            <h2 className="font-black text-2xl group-hover:text-blue-600 transition-colors">{area.strArea}</h2>
            <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">Origin</span>
          </Link>
        ))}
      </div>
    </>
  );
};
