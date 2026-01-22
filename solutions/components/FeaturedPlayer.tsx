export default function FeaturedPlayer({
  ytId,
  title,
}: { ytId: string; title: string }) {
  return (
    <section className="py-10">
      <h2 className="mb-3 text-xl font-semibold text-white/90">Ouça</h2>
      <p className="mb-6 text-white/60">Lançamentos e registros de performance ao vivo.</p>

      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl">
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
      </div>
    </section>
  );
}
