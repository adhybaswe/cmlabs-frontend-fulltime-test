import { fetchMealsByArea } from '@/services/mealService';
import { MainLayout } from '@/components/templates/MainLayout';
import { MealList } from '@/components/organisms/MealList';

export default async function AreaDetailPage({ params }: { params: Promise<{ 'area-name': string }> }) {
  const resolvedParams = await params;
  const areaName = resolvedParams['area-name'];
  const meals = await fetchMealsByArea(areaName);

  return (
    <MainLayout>
      <MealList 
        meals={meals} 
        title={areaName} 
        backHref="/local-culinary" 
        backLabel="Back to Local Culinary" 
      />
    </MainLayout>
  );
}
