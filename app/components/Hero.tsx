import fs from "fs";
import path from "path";
import HeroMarquee from "./HeroMarquee";

const SLIDESHOW_DIR = path.join(process.cwd(), "public", "photos", "slideshow");
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/**
 * To add photos to the carousel:
 * Just drop image files into /public/photos/slideshow/
 * Supported formats: jpg, jpeg, png, webp, avif
 */
function getSlideshowImages(): string[] {
  try {
    return fs
      .readdirSync(SLIDESHOW_DIR)
      .filter((f) => SUPPORTED_EXTENSIONS.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/photos/slideshow/${f}`);
  } catch {
    return [];
  }
}

export default function Hero() {
  const images = getSlideshowImages();

  return (
    <section className="pt-20 sm:pt-28">
      <HeroMarquee images={images} />

      {/* ── Motto + Mission text ── */}
      <div className="bg-white border-b border-zinc-100 px-6 py-16 sm:py-20 text-center">
        <h1 className="text-zinc-900 font-black text-4xl sm:text-6xl md:text-7xl leading-none tracking-tight mb-6">
          Go Far.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#dc2626]">
            Enjoy the View.
          </span>
        </h1>
        <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Galavant Multisport exists to inspire movement, and appreciate nature&apos;s beauty every day.
        </p>
      </div>
    </section>
  );
}
