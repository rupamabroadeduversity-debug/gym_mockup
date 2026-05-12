import FeatureCard from "../components/ui/FeatureCard.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { achievements, images, timeline, trainers } from "../data/siteData.js";
import SEO from "../seo/SEO.jsx";

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Meet ApexFit Performance Club, a premium gym built around expert coaching, modern equipment, transformation programs, and community." path="/about" />
      <section className="section-pad pt-32">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h1 className="mt-4 text-4xl font-black sm:text-6xl">A performance club built for focused transformation.</h1>
            <p className="mt-6 leading-8 text-[color:var(--muted)]">ApexFit started as a small strength studio and grew into a full-service club where coaching, nutrition, and recovery live under one roof. Our mission is to make elite training approachable without diluting the standard.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-lg p-5"><h2 className="font-black">Mission</h2><p className="mt-2 text-[color:var(--muted)]">Help members build strength, stamina, and identity through structured coaching.</p></div>
              <div className="glass rounded-lg p-5"><h2 className="font-black">Vision</h2><p className="mt-2 text-[color:var(--muted)]">Become the most trusted performance club for sustainable lifestyle change.</p></div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img className="rounded-lg object-cover shadow-glow" src={images.team} alt="ApexFit trainers coaching members in a gym" />
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-white/[0.03]">
        <div className="container-shell">
          <SectionHeading eyebrow="Founder message" title="We coach the person, not just the workout." text="The best program is the one that respects your life, challenges your limits, and gives you visible evidence of progress every week." align="center" />
          <div className="grid gap-5 md:grid-cols-3">
            {achievements.map((item) => <FeatureCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Timeline" title="A decade of stronger standards." />
          <div className="grid gap-4 md:grid-cols-4">
            {timeline.map((item) => <div className="glass rounded-lg p-5" key={item.year}><p className="text-3xl font-black text-flame">{item.year}</p><p className="mt-3 font-bold">{item.title}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white/[0.03]">
        <div className="container-shell">
          <SectionHeading eyebrow="Team" title="Meet the coaches behind the results." align="center" />
          <div className="grid gap-5 md:grid-cols-3">
            {trainers.map((trainer) => <FeatureCard key={trainer.name} title={trainer.name} text={`${trainer.role} - ${trainer.specialty}`} image={trainer.image} />)}
          </div>
        </div>
      </section>
    </>
  );
}
