import Button from "../components/ui/Button.jsx";
import FeatureCard from "../components/ui/FeatureCard.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { services } from "../data/siteData.js";
import SEO from "../seo/SEO.jsx";

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Explore ApexFit services including personal training, group classes, nutrition plans, HIIT, bodybuilding, yoga, functional training, and Zumba." path="/services" />
      <section className="section-pad pt-32">
        <div className="container-shell">
          <SectionHeading eyebrow="Services" title="Premium training services for every goal." text="Each service combines expert coaching, clear pricing, measurable outcomes, and smart progression." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.03}>
                <FeatureCard icon={service.icon} title={service.title}>
                  <p className="mt-3 font-black text-flame">{service.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                    {service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
                  </ul>
                  <Button to="/contact" className="mt-6 w-full" variant="secondary">Book</Button>
                </FeatureCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
