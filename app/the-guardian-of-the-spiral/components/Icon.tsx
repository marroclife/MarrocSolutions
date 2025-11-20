import React from 'react';

interface IconProps {
  name: 'Feather' | 'Camera' | 'Film' | 'BookOpen' | 'Sparkles';
  className?: string;
}

const FeatherIcon = () => (
  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9" />
);

const CameraIcon = () => (
  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
);

// CORREÇÃO AQUI: Adicionado <> e </> para agrupar o rect e o path
const FilmIcon = () => (
  <>
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5" />
  </>
);

const BookOpenIcon = () => (
  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
);

const SparklesIcon = () => (
  <path d="M9.5 2.5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM14.5 2.5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM2.5 9.5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM2.5 14.5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM9.5 20.5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zM20.5 9.5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zM14.5 20.5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zM20.5 14.5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1z" />
);

const icons = {
  Feather: FeatherIcon,
  Camera: CameraIcon,
  Film: FilmIcon,
  BookOpen: BookOpenIcon,
  Sparkles: SparklesIcon,
};

const Icon: React.FC<IconProps> = ({ name, className = 'w-6 h-6' }) => {
  const IconComponent = icons[name];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <IconComponent />
    </svg>
  );
};

export default Icon;