'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  url?: string;
  className?: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ title, url, className = '' }) => {
  const [copied, setCopied] = useState(false);
  
  const handleShare = async () => {
    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

    // Mobile native share (Instagram stories/direct often appear here on mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Confira este artigo do Marroc: ${title}`,
          url: shareUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Desktop fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`group flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-gold-500 text-zinc-300 hover:text-gold-400 transition-all duration-300 rounded-sm text-xs font-medium uppercase tracking-wider ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span>Copiado</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          <span>Compartilhar</span>
        </>
      )}
    </button>
  );
};
