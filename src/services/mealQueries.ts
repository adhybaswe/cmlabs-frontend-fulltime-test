import { useQuery } from '@tanstack/react-query';
import { 
  fetchIngredients, 
  fetchCategories, 
  fetchAreas, 
  fetchMealsByIngredient, 
  fetchMealsByCategory,
  fetchMealsByArea,
  fetchMealsByName,
  fetchMealDetail 
} from './mealService';

export const useIngredients = () => {
  return useQuery({
    queryKey: ['ingredients'],
    queryFn: fetchIngredients,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};

export const useAreas = () => {
  return useQuery({
    queryKey: ['areas'],
    queryFn: fetchAreas,
  });
};

export const useMealsByIngredient = (ingredient: string) => {
  return useQuery({
    queryKey: ['meals', 'ingredient', ingredient],
    queryFn: () => fetchMealsByIngredient(ingredient),
    enabled: !!ingredient,
  });
};

export const useMealsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['meals', 'category', category],
    queryFn: () => fetchMealsByCategory(category),
    enabled: !!category,
  });
};

export const useMealsByArea = (area: string) => {
  return useQuery({
    queryKey: ['meals', 'area', area],
    queryFn: () => fetchMealsByArea(area),
    enabled: !!area,
  });
};

export const useSearchMeals = (query: string) => {
  return useQuery({
    queryKey: ['meals', 'search', query],
    queryFn: () => fetchMealsByName(query),
    enabled: !!query,
  });
};

export const useMealDetail = (mealId: string) => {
  return useQuery({
    queryKey: ['meal', mealId],
    queryFn: () => fetchMealDetail(mealId),
    enabled: !!mealId,
  });
};
