# 🍲 mealapp. - Meal & Recipe Explorer

Aplikasi penjelajah resep makanan modern yang interaktif, dibangun dengan Next.js 15, Tailwind CSS v4, dan React Query. Pengguna dapat mengeksplorasi ribuan resep berdasarkan kategori makanan, bahan-bahan, maupun asal negara (kuliner lokal).

**🔗 Live Demo:** [https://adib-cmlabs-test.netlify.app/](https://adib-cmlabs-test.netlify.app/)

---

## ✨ Fitur Utama

- **Home Food**: Penjelajahan berdasarkan kategori jenis makanan (Seafood, Dessert, Vegan, dll).
- **Ingredients Explorer**: Cari resep berdasarkan bahan dasar yang Anda miliki.
- **Local Culinary**: Temukan cita rasa khas dari berbagai belahan dunia (Italian, Japanese, Indonesian, dll).
- **Cinematic Meal Details**: Detail resep yang imersif dengan instruksi bertahap, daftar bahan yang presisi, dan video tutorial YouTube.
- **Smart Floating Navbar**: Navigasi responsif dengan efek *glassmorphism* yang otomatis berubah menjadi *floating* saat halaman di-*scroll*.
- **Client-side Filtering**: Pencarian instan pada setiap kategori untuk pengalaman pengguna yang cepat.

---

## 🚀 Teknologi (Tech Stack)

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (New CSS-first configuration)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest) & [Axios](https://axios-http.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Pattern**: Atomic Design (Atoms, Molecules, Organisms, Templates)
- **API Source**: [TheMealDB API](https://www.themealdb.com/api.php)

---

## 🛠️ Cara Setup Project

Ikuti langkah-langkah di bawah ini untuk menjalankan project di lingkungan lokal Anda:

### 1. Prasyarat
Pastikan Anda sudah menginstal **Node.js (versi 18.x atau terbaru)** dan **npm**.

### 2. Instalasi
Clone repository atau unduh project, lalu masuk ke direktori utama:

```bash
npm install
```

### 3. Menjalankan Mode Pengembangan
Jalankan perintah berikut untuk membuka aplikasi di [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

### 4. Build untuk Produksi
Untuk membuat versi produksi yang teroptimasi:

```bash
npm run build
npm run start
```

---

## 📂 Struktur Folder

```text
src/
 ├── app/              # Routing & Pages (App Router)
 ├── components/       # UI Components (Atomic Design)
 │    ├── atoms/       # Input, Spinner
 │    ├── molecules/   # SearchBar, MealCard, BackButton
 │    ├── organisms/   # Header
 │    └── templates/   # MainLayout
 ├── providers/        # React Query Provider
 └── services/         # API Configuration & Hooks (Axios + React Query)
```

---

## 📝 Catatan Penting
- Aplikasi ini menggunakan **Tailwind CSS v4** terbaru, sehingga tidak ada file `tailwind.config.js`. Konfigurasi dilakukan langsung di `src/app/globals.css`.
- Navigasi menggunakan sistem *smart transition* antara mode statis dan melayang berdasarkan posisi scroll.
