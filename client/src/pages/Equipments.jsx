import FeatureCard from "../components/ui/FeatureCard.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { equipmentCategories } from "../data/siteData.js";
import SEO from "../seo/SEO.jsx";

export default function Equipments() {
  return (
    <>
      <SEO title="Equipments" description="Explore ApexFit's modern gym equipment including cardio machines, strength machines, free weights, functional training tools, and recovery equipment." path="/equipments" />
      <section className="section-pad pt-32">
        <div className="container-shell">
          <SectionHeading eyebrow="Equipment" title="Elite tools for strength, conditioning, and recovery." text="Our floor is organized by training outcome so members can move efficiently and safely." />
          <div className="grid gap-5 md:grid-cols-2">
            {equipmentCategories.map((category) => (
              <FeatureCard key={category.title} title={category.title} image={category.image} text={`Muscle groups: ${category.muscle}`}>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => <span className="rounded-md bg-white/10 px-3 py-2 text-sm font-bold" key={item}>{item}</span>)}
                </div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
