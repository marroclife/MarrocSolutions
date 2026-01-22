import React from "react";

type Video = { id: string; title: string; alt: string };

type VideoGridProps = {
  videos: Video[];
  className?: string; // Allow custom styling for the grid
};

export const VideoGrid: React.FC<VideoGridProps> = ({ videos, className = "" }) => (
  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
    {videos.length > 0 ? (
      videos.map((v) => (
        <div
          key={v.id}
          className="rounded-2xl overflow-hidden bg-ink/60 ring-1 ring-off/10 shadow"
          aria-labelledby={`video-title-${v.id}`}
        >
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${v.id}`}
              title={v.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div id={`video-title-${v.id}`} className="p-4 text-off/90 text-sm">
            {v.title}
          </div>
        </div>
      ))
    ) : (
      <p className="text-off/80 text-center col-span-full">No videos available.</p>
    )}
  </div>
);
