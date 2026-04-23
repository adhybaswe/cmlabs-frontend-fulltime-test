import { fetchCategories } from '@/services/mealService';
import { MainLayout } from '@/components/templates/MainLayout';
import { CategoryList } from '@/components/organisms/CategoryList';

export default async function CategoriesPage() {
  // SSR: Mengambil data langsung di server sebelum render
  const categories = await fetchCategories();

  return (
    <MainLayout>
      <CategoryList categories={categories} />
    </MainLayout>
  );
}
