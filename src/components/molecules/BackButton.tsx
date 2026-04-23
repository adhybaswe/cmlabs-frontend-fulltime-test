import Link from 'next/link';

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Link 
      href={href} 
      className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 font-semibold transition-all group mb-6"
    >
      <div className="p-2 rounded-full bg-white border border-gray-100 shadow-sm group-hover:border-blue-100 group-hover:bg-blue-50 transition-all">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="group-hover:-translate-x-1 transition-transform"
        >
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </div>
      <span className="text-sm tracking-wide uppercase">{label}</span>
    </Link>
  );
};
