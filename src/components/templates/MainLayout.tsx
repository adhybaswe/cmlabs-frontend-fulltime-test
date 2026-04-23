import { ReactNode } from 'react';
import { Header } from '../organisms/Header';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="max-w-7xl mx-auto p-4 md:p-8 pt-32 md:pt-36 flex-1 w-full">
        {children}
      </main>
      <footer className="border-t border-gray-100 bg-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-xl font-black text-gray-300 mb-4 tracking-tighter">mealapp.</div>
          <div className="text-gray-400 text-xs uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
