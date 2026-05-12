import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Button from "../components/ui/Button.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import SEO from "../seo/SEO.jsx";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5050";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "Free Trial", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      setStatus(data.message || "Request received.");
      if (response.ok) setForm({ name: "", email: "", phone: "", interest: "Free Trial", message: "" });
    } catch {
      setStatus("Could not reach the server. Please try again.");
    }
  };

  return (
    <>
      <SEO title="Contact Us" description="Book a free trial, contact ApexFit Performance Club, view gym location, business hours, and connect with our coaching team." path="/contact" />
      <section className="section-pad pt-32">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Book your free trial session." text="Tell us your goal and our coaching team will help you choose the right starting point." />
            <div className="grid gap-4">
              {[["Visit", "88 Velocity Avenue, Downtown", MapPin], ["Call", "+1 (555) 0174", Phone], ["Email", "hello@apexfit.example", Mail], ["Hours", "Mon-Fri 5:00-22:00, Sat-Sun 7:00-20:00", Clock]].map(([title, text, Icon]) => (
                <div className="glass flex gap-4 rounded-lg p-5" key={title}>
                  <Icon className="text-flame" />
                  <div><p className="font-black">{title}</p><p className="text-[color:var(--muted)]">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <form className="glass rounded-lg p-6" onSubmit={submit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required className="rounded-md border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-flame" placeholder="Name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
              <input required type="email" className="rounded-md border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-flame" placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
              <input required className="rounded-md border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-flame" placeholder="Phone" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
              <select className="rounded-md border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-flame" value={form.interest} onChange={(event) => setForm({ ...form, interest: event.target.value })}>
                <option>Free Trial</option>
                <option>Personal Training</option>
                <option>Membership</option>
                <option>Nutrition Plan</option>
              </select>
            </div>
            <textarea required className="mt-4 min-h-36 w-full rounded-md border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-flame" placeholder="Your goal" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
            <Button className="mt-5 w-full">Submit Inquiry</Button>
            {status ? <p className="mt-4 text-sm font-bold text-flame" role="status">{status}</p> : null}
          </form>
        </div>
      </section>
      <section className="pb-20">
        <div className="container-shell overflow-hidden rounded-lg">
          <iframe
            title="ApexFit map"
            className="h-96 w-full border-0 grayscale"
            loading="lazy"
            src="https://www.google.com/maps?q=San%20Francisco%20gym&output=embed"
          />
        </div>
      </section>
    </>
  );
}
