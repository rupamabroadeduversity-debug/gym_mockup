import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";
import AnimatedCounter from "../components/ui/AnimatedCounter.jsx";
import BMICalculator from "../components/ui/BMICalculator.jsx";
import Button from "../components/ui/Button.jsx";
import FAQ from "../components/ui/FAQ.jsx";
import FeatureCard from "../components/ui/FeatureCard.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { blogs, images, memberships, programs, stats, testimonials, trainers, whyChooseUs } from "../data/siteData.js";
import SEO from "../seo/SEO.jsx";

export default function Home() {
  const [popup, setPopup] = useState(false);
  const [testimonial, setTestimonial] = useState(0);

  return (
    <>
      <SEO title="Premium Gym and Fitness Center" description="Join ApexFit Performance Club for strength training, HIIT, yoga, personal coaching, nutrition guidance, and premium gym facilities." />
      <section className="relative min-h-screen overflow-hidden pt-20">
        <img className="absolute inset-0 h-full w-full object-cover" src={images.hero} alt="Premium dark gym interior with athletes training" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/76 to-black/25" />
        <div className="container-shell relative z-10 flex min-h-[calc(100vh-80px)] items-center py-16">
          <div className="max-w-3xl">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>Performance coaching for real life</motion.p>
            <motion.h1 className="mt-5 text-5xl font-black tracking-normal text-white sm:text-6xl lg:text-7xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Build a body that performs under pressure.
            </motion.h1>
            <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-white/76" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Premium coaching, elite equipment, and high-energy classes for strength, fat loss, athletic conditioning, and lasting confidence.
            </motion.p>
            <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Button to="/contact">Join Now</Button>
              <Button to="/contact" variant="secondary">Book Free Trial</Button>
            </motion.div>
            <div className="mt-10 grid gap-3 sm:grid-cols-4">
              {stats.map((stat) => <AnimatedCounter key={stat.label} {...stat} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Featured programs" title="Train with structure, intensity, and expert eyes." text="Choose a focused path or combine programs as your fitness evolves." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => <Reveal key={program.title} delay={index * 0.04}><FeatureCard {...program} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/[0.03]">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Why choose us" title="A sharper gym experience from check-in to cooldown." text="Our coaching systems make progress measurable while the space keeps training premium, focused, and energizing." />
            <div className="grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item) => <FeatureCard key={item.title} {...item} />)}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BMICalculator />
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Transformations" title="Before-and-after energy, backed by process." text="Members pair coaching, nutrition, recovery, and consistency to create sustainable change." align="center" />
          <div className="grid gap-5 md:grid-cols-3">
            {["Fat loss", "Strength rebuild", "Athletic conditioning"].map((title, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="glass rounded-lg p-5">
                  <div className="grid grid-cols-2 gap-3">
                    <img className="h-48 w-full rounded-md object-cover grayscale" src={programs[index].image} alt={`${title} before training phase`} loading="lazy" />
                    <img className="h-48 w-full rounded-md object-cover" src={programs[index + 2].image} alt={`${title} after training phase`} loading="lazy" />
                  </div>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-2 text-[color:var(--muted)]">12-week coached path with performance benchmarks and weekly habit reviews.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/[0.03]">
        <div className="container-shell">
          <SectionHeading eyebrow="Memberships" title="Pick the access level that matches your ambition." align="center" />
          <div className="grid gap-5 lg:grid-cols-3">
            {memberships.map((plan) => (
              <div key={plan.name} className={`glass rounded-lg p-6 ${plan.featured ? "border-ember shadow-glow" : ""}`}>
                <p className="eyebrow">{plan.tag}</p>
                <h3 className="mt-3 text-2xl font-black">{plan.name}</h3>
                <p className="mt-5 text-5xl font-black">${plan.price}<span className="text-base text-[color:var(--muted)]">/mo</span></p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li className="flex gap-3 text-[color:var(--muted)]" key={feature}><Check className="mt-1 text-flame" size={18} />{feature}</li>
                  ))}
                </ul>
                <Button className="mt-7 w-full" onClick={() => setPopup(true)}>Choose Plan</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="Member stories" title="Coaching that feels personal and performs at scale." text="Real feedback from members who built strength, habits, and momentum." />
          <div className="glass rounded-lg p-7">
            <p className="text-2xl font-bold leading-10">"{testimonials[testimonial].quote}"</p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-black">{testimonials[testimonial].name}</p>
                <p className="text-sm text-flame">{testimonials[testimonial].result}</p>
              </div>
              <div className="flex gap-2">
                {testimonials.map((item, index) => (
                  <button key={item.name} className={`h-3 w-3 rounded-full ${index === testimonial ? "bg-ember" : "bg-white/30"}`} onClick={() => setTestimonial(index)} aria-label={`Show testimonial ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/[0.03]">
        <div className="container-shell">
          <SectionHeading eyebrow="Trainers" title="Specialists who know when to push and when to refine." align="center" />
          <div className="grid gap-5 md:grid-cols-3">
            {trainers.map((trainer) => <FeatureCard key={trainer.name} title={trainer.name} text={`${trainer.role} - ${trainer.specialty}`} image={trainer.image} />)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Latest blogs" title="Training knowledge for better decisions." />
            <div className="grid gap-4">
              {blogs.slice(0, 3).map((blog) => (
                <article className="glass flex gap-4 rounded-lg p-4" key={blog.slug}>
                  <img className="h-24 w-28 rounded-md object-cover" src={blog.image} alt={blog.title} loading="lazy" />
                  <div>
                    <p className="text-sm font-bold text-flame">{blog.category} - {blog.readTime}</p>
                    <h3 className="mt-1 font-black">{blog.title}</h3>
                    <p className="mt-1 text-sm text-[color:var(--muted)]">{blog.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="FAQ" title="Clear answers before your first session." />
            <FAQ />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell glass rounded-lg p-8 text-center sm:p-12">
          <p className="eyebrow">Ready when you are</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Book your free strategy session today.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--muted)]">Tour the gym, meet a coach, and leave with a plan you can start immediately.</p>
          <Button to="/contact" className="mt-7">Start Training</Button>
        </div>
      </section>

      <AnimatePresence>
        {popup ? (
          <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="glass w-full max-w-md rounded-lg p-6" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}>
              <button className="ml-auto grid h-10 w-10 place-items-center rounded-md border border-white/15" onClick={() => setPopup(false)} aria-label="Close popup"><X size={18} /></button>
              <p className="eyebrow">Membership inquiry</p>
              <h2 className="mt-3 text-3xl font-black">Claim a free trial and plan consult.</h2>
              <p className="mt-3 text-[color:var(--muted)]">Our team will help you pick the right plan after a quick goal audit.</p>
              <Button to="/contact" className="mt-6 w-full" onClick={() => setPopup(false)}>Continue</Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
