# Product Requirements Document (PRD)
## Meal & Recipe Explorer

---

## 1. Project Overview
Aplikasi web interaktif yang memungkinkan pengguna untuk:
- Mengeksplorasi direktori bahan makanan (ingredients)
- Mencari daftar makanan berdasarkan bahan tertentu
- Melihat detail resep dan instruksi memasak
- Menonton video tutorial memasak

---

## 2. Tech Stack & Architecture

- **Framework**: Next.js (App Router direkomendasikan)
- **State Management & Data Fetching**: React Query (TanStack Query) + Axios
- **Styling**: Tailwind CSS
- **Component Pattern**: Atomic Design Pattern

---

## 3. Data Fetching & Services Architecture

Struktur folder:

src/
 └── services/
      ├── api.ts
      ├── mealService.ts
      └── mealQueries.ts

### 3.1. Standardisasi Services

#### api.ts
- Konfigurasi instance Axios
- Base URL:
https://www.themealdb.com/api/json/v1/1

#### mealService.ts
Berisi fungsi async:
- fetchIngredients()
- fetchMealsByIngredient(ingredient)
- fetchMealDetail(mealId)

#### mealQueries.ts
Custom hooks React Query:
- useIngredients()
- useMealsByIngredient(ingredient)
- useMealDetail(mealId)

---

## 4. API Reference (TheMealDB)

| Endpoint | URL | Parameter | Deskripsi |
|----------|-----|----------|----------|
| List Ingredients | /list.php?i=list | - | Mengambil semua bahan |
| Filter by Ingredient | /filter.php?i={ingredient} | ingredient | Makanan berdasarkan bahan |
| Meal Detail | /lookup.php?i={id} | meal-id | Detail lengkap makanan |

---

## 5. Page Requirements

### 5.1. Ingredients Page (Index)

- Route: /
- Data Source: useIngredients()

Fitur:
- Menampilkan daftar bahan makanan
- Search ingredients (client-side)
- Navigasi ke detail ingredient

---

### 5.2. Ingredient Detail Page

- Route: /ingredients/[ingredient-name]
- Data Source: useMealsByIngredient(ingredientName)

Fitur:
- Menampilkan daftar makanan
- Search meal (client-side)
- Navigasi ke detail meal

---

### 5.3. Meal Detail Page

- Route: /meals/[meal-id]
- Data Source: useMealDetail(mealId)

Fitur:
- Parsing dynamic fields (strIngredientX, strMeasureX)
- Menampilkan instruksi memasak
- Embed video YouTube

---

## 6. Non-Functional Requirements (NFR)

### 6.1. Responsiveness & UI/UX

Mobile: 1 kolom, full width  
Tablet: 2–3 kolom  
Desktop: 4–5 kolom, gunakan max-w-7xl mx-auto  

---

### 6.2. Component Architecture (Atomic Design)

Atoms: Button, Input, Spinner  
Molecules: SearchBar, MealCard  
Organisms: Grid, Header  
Templates: Layout  

---

### 6.3. Error & Loading Handling

Loading: isLoading === true  
Error: isError === true  

---

## 7. Additional Notes

- Gunakan clean code
- Optimalkan caching React Query
- Gunakan reusable components
