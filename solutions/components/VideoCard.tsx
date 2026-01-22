import React from "react";

type Props = {
  ytId: string;
  title: string;
  caption?: string;
};

export default function VideoCard({ ytId, title, caption }: Props) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-black/40">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      {caption && (
        <figcaption className="px-4 py-3 text-sm text-white/80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
