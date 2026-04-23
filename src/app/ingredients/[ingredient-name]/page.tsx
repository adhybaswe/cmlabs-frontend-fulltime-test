import { fetchMealsByIngredient } from '@/services/mealService';
import { MainLayout } from '@/components/templates/MainLayout';
import { MealList } from '@/components/organisms/MealList';

export default async function IngredientDetailPage({ params }: { params: Promise<{ 'ingredient-name': string }> }) {
  const resolvedParams = await params;
  const ingredientName = resolvedParams['ingredient-name'];
  const meals = await fetchMealsByIngredient(ingredientName);

  return (
    <MainLayout>
      <MealList 
        meals={meals} 
        title={ingredientName} 
        backHref="/ingredients" 
        backLabel="Back to Ingredients" 
      />
    </MainLayout>
  );
}
