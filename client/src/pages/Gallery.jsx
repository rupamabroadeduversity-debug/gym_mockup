import { X } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { galleryImages } from "../data/siteData.js";
import SEO from "../seo/SEO.jsx";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <>
      <SEO title="Gallery" description="View ApexFit gym interiors, workout sessions, trainers, member events, strength areas, cardio zones, and yoga studio images." path="/gallery" />
      <section className="section-pad pt-32">
        <div className="container-shell">
          <SectionHeading eyebrow="Gallery" title="Inside the ApexFit training floor." text="A closer look at the spaces, sessions, coaches, and member energy." />
          <div className="masonry">
            {galleryImages.map((item, index) => (
              <button className="w-full overflow-hidden rounded-lg text-left" key={item.src} onClick={() => setActive(index)}>
                <img className="w-full rounded-lg object-cover transition duration-500 hover:scale-[1.02]" src={item.src} alt={item.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>
      {active !== null ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-4" role="dialog" aria-modal="true">
          <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-md border border-white/20 text-white" onClick={() => setActive(null)} aria-label="Close image preview"><X /></button>
          <img className="max-h-[82vh] rounded-lg object-contain" src={galleryImages[active].src} alt={galleryImages[active].alt} />
        </div>
      ) : null}
    </>
  );
}
