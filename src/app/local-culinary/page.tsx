import { fetchAreas } from '@/services/mealService';
import { MainLayout } from '@/components/templates/MainLayout';
import { AreaList } from '@/components/organisms/AreaList';

export default async function LocalCulinaryPage() {
  const areas = await fetchAreas();

  return (
    <MainLayout>
      <AreaList areas={areas} />
    </MainLayout>
  );
}
