import { fetchMealsByCategory } from '@/services/mealService';
import { MainLayout } from '@/components/templates/MainLayout';
import { MealList } from '@/components/organisms/MealList';

export default async function CategoryDetailPage({ params }: { params: Promise<{ 'category-name': string }> }) {
  const resolvedParams = await params;
  const categoryName = resolvedParams['category-name'];
  const meals = await fetchMealsByCategory(categoryName);

  return (
    <MainLayout>
      <MealList 
        meals={meals} 
        title={categoryName} 
        backHref="/" 
        backLabel="Back to Categories" 
      />
    </MainLayout>
  );
}
