import { fetchIngredients } from '@/services/mealService';
import { MainLayout } from '@/components/templates/MainLayout';
import { IngredientList } from '@/components/organisms/IngredientList';

export default async function IngredientsPage() {
  const ingredients = await fetchIngredients();

  return (
    <MainLayout>
      <IngredientList ingredients={ingredients} />
    </MainLayout>
  );
}
