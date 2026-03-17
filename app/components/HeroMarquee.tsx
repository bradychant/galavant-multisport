"use client";

/**
 * Infinite auto-scrolling photo strip.
 * To add photos: drop image files into /public/photos/slideshow/
 * Supported: jpg, jpeg, png, webp, avif
 */

interface Props {
  images: string[];
}

export default function HeroMarquee({ images }: Props) {
  if (images.length === 0) {
    return (
      <div className="w-full h-[350px] bg-zinc-100 flex items-center justify-center">
        <p className="text-zinc-400 text-xs tracking-widest uppercase">
          Add photos to /public/photos/slideshow/
        </p>
      </div>
    );
  }

  // Duplicate so the second copy seamlessly follows the first.
  // The animation translates -50% (one full set width) then loops.
  const doubled = [...images, ...images];

  return (
    <div className="marquee-container w-full h-[350px] overflow-hidden">
      <div className="marquee-track flex h-full gap-2 w-max">
        {doubled.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt={`Slideshow photo ${(i % images.length) + 1}`}
            className="h-full w-auto block flex-shrink-0"
            loading={i < images.length ? "eager" : "lazy"}
          />
        ))}
      </div>
    </div>
  );
}
