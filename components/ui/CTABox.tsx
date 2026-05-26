import React from 'react';
import { Button } from './Button';
import { LucideIcon } from 'lucide-react';

interface CTABoxProps {
  icon: any;
  text: string;
  ctaText: string;
  href: string;
}

export const CTABox = ({ icon: Icon, text, ctaText, href }: CTABoxProps) => {
  return (
    <div className="my-12 p-6 border border-[#00FF94] bg-neutral-900/50 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_15px_rgba(0,255,148,0.1)]">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-[#00FF94]/10 rounded-lg">
          <Icon className="w-6 h-6 text-[#00FF94]" />
        </div>
        <p className="text-neutral-200 text-lg font-medium max-w-xl">
          {text}
        </p>
      </div>
      <Button 
        href={href} 
        className="bg-[#00FF94] text-black hover:bg-[#00dd85] font-bold px-6 py-3 rounded-lg transition-all whitespace-nowrap"
      >
        {ctaText}
      </Button>
    </div>
  );
};
