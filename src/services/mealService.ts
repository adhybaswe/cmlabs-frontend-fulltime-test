import api from './api';

export const fetchIngredients = async () => {
  const response = await api.get('/list.php?i=list');
  return response.data.meals;
};

export const fetchCategories = async () => {
  const response = await api.get('/categories.php');
  return response.data.categories;
};

export const fetchAreas = async () => {
  const response = await api.get('/list.php?a=list');
  return response.data.meals;
};

export const fetchMealsByIngredient = async (ingredient: string) => {
  const response = await api.get(`/filter.php?i=${ingredient}`);
  return response.data.meals;
};

export const fetchMealsByCategory = async (category: string) => {
  const response = await api.get(`/filter.php?c=${category}`);
  return response.data.meals;
};

export const fetchMealsByArea = async (area: string) => {
  const response = await api.get(`/filter.php?a=${area}`);
  return response.data.meals;
};

export const fetchMealsByName = async (name: string) => {
  const response = await api.get(`/search.php?s=${name}`);
  return response.data.meals;
};

export const fetchMealDetail = async (mealId: string) => {
  const response = await api.get(`/lookup.php?i=${mealId}`);
  return response.data.meals?.[0];
};
