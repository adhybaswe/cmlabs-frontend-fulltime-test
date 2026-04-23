import Link from 'next/link';
import Image from 'next/image';

interface MealCardProps {
  id: string;
  name: string;
  thumbnail: string;
}

export const MealCard = ({ id, name, thumbnail }: MealCardProps) => {
  return (
    <Link
      href={`/meals/${id}`}
      className="group block border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
    >
      <div className="relative aspect-video">
        <Image
          src={thumbnail}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
          {name}
        </h2>
      </div>
    </Link>
  );
};
