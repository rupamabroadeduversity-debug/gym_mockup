import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import { navLinks } from "../data/siteData.js";

export default function MainLayout({ darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-bold transition ${isActive ? "bg-ember text-white" : "text-white/78 hover:bg-white/10 hover:text-white"}`;

  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
        <nav className="container-shell flex h-20 items-center justify-between" aria-label="Main navigation">
          <NavLink to="/" className="flex items-center gap-3 font-black" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-md bg-ember text-white shadow-glow">AF</span>
            <span className="text-lg">ApexFit</span>
          </NavLink>
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <button className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white" onClick={onToggleTheme} aria-label="Toggle theme">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button to="/contact" icon={false}>Join Now</Button>
          </div>
          <button className="grid h-11 w-11 place-items-center rounded-md border border-white/15 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open ? (
          <div className="border-t border-white/10 bg-ink p-4 lg:hidden">
            <div className="container-shell grid gap-2">
              {navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className={linkClass} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              ))}
              <Button to="/contact" className="mt-2" onClick={() => setOpen(false)}>Book Free Trial</Button>
            </div>
          </div>
        ) : null}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-white/10 bg-black/40 py-12">
        <div className="container-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-2xl font-black">ApexFit Performance Club</p>
            <p className="mt-4 max-w-md leading-7 text-[color:var(--muted)]">A premium strength, conditioning, and transformation club for people who train with intent.</p>
          </div>
          <div>
            <p className="font-black">Visit</p>
            <p className="mt-3 text-[color:var(--muted)]">88 Velocity Avenue<br />Downtown, CA 94016</p>
          </div>
          <div>
            <p className="font-black">Hours</p>
            <p className="mt-3 text-[color:var(--muted)]">Mon-Fri 5:00-22:00<br />Sat-Sun 7:00-20:00</p>
          </div>
        </div>
      </footer>
      <a className="fixed bottom-5 right-5 z-40 rounded-full bg-green-500 px-5 py-3 text-sm font-black text-white shadow-lg" href="https://wa.me/15550174" aria-label="Chat on WhatsApp">
        WhatsApp
      </a>
    </div>
  );
}
