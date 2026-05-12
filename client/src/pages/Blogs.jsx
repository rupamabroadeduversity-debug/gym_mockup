import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { blogs } from "../data/siteData.js";
import SEO from "../seo/SEO.jsx";

export default function Blogs() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];
  const filtered = useMemo(() => blogs.filter((blog) => (category === "All" || blog.category === category) && blog.title.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const featured = blogs[0];

  return (
    <>
      <SEO title="Fitness Blogs" description="Read SEO-friendly ApexFit fitness blogs about workout routines, muscle gain, fat loss, gym diets, and beginner fitness tips." path="/blogs" type="blog" />
      <section className="section-pad pt-32">
        <div className="container-shell">
          <SectionHeading eyebrow="Blogs" title="Fitness guidance that respects your time." text="Evidence-informed training, nutrition, and recovery articles from the ApexFit coaching team." />
          <article className="glass mb-8 grid overflow-hidden rounded-lg lg:grid-cols-2">
            <img className="h-full min-h-80 w-full object-cover" src={featured.image} alt={featured.title} />
            <div className="p-7">
              <p className="eyebrow">Featured article</p>
              <h2 className="mt-3 text-3xl font-black">{featured.title}</h2>
              <p className="mt-4 leading-8 text-[color:var(--muted)]">{featured.excerpt}</p>
              <p className="mt-5 text-sm font-bold text-flame">{featured.author} - {featured.readTime}</p>
            </div>
          </article>
          <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
            <label className="glass flex items-center gap-3 rounded-lg px-4">
              <Search size={19} className="text-[color:var(--muted)]" />
              <input className="min-h-12 flex-1 bg-transparent outline-none" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" aria-label="Search articles" />
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => <button className={`rounded-md px-4 py-3 text-sm font-bold ${category === item ? "bg-ember text-white" : "glass"}`} key={item} onClick={() => setCategory(item)}>{item}</button>)}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((blog) => (
              <article className="glass overflow-hidden rounded-lg" key={blog.slug}>
                <img className="h-56 w-full object-cover" src={blog.image} alt={blog.title} loading="lazy" />
                <div className="p-5">
                  <p className="text-sm font-bold text-flame">{blog.category} - {blog.readTime}</p>
                  <h3 className="mt-2 text-xl font-black">{blog.title}</h3>
                  <p className="mt-3 leading-7 text-[color:var(--muted)]">{blog.excerpt}</p>
                  <p className="mt-4 text-sm font-bold">By {blog.author}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
