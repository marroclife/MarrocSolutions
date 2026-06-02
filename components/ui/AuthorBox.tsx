import React from 'react';
import { Button } from './Button';

interface AuthorBoxProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const AuthorBox = ({ name, role, bio, image }: AuthorBoxProps) => {
  return (
    <div className="mt-20 p-8 border-t border-neutral-800 bg-neutral-900/30 rounded-t-3xl flex flex-col md:flex-row gap-8 items-start">
      {image && (
        <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-[#00FF94]">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <span className="text-xs font-mono text-[#00FF94] border border-[#00FF94]/30 px-2 py-0.5 rounded uppercase tracking-widest">
            Autoridade
          </span>
        </div>
        <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
          {bio}
        </p>
        <div className="flex gap-4 mt-4">
          <Button href="#cases" variant="outline" className="text-neutral-300 border-neutral-700 hover:border-[#00FF94] hover:text-[#00FF94] transition-colors">
            Ver Cases
          </Button>
          <Button href="https://wa.me/5521990387232" className="bg-[#00FF94] text-black hover:bg-[#00dd85] font-bold">
            Agendar Consultoria
          </Button>
        </div>
      </div>
    </div>
  );
};
