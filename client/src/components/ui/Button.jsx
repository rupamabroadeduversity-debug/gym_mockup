import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const styles = {
  primary: "bg-ember text-white shadow-glow hover:bg-flame",
  secondary: "border border-white/15 bg-white/8 text-white hover:border-volt/60 hover:bg-volt/10",
  ghost: "text-white hover:text-flame"
};

export default function Button({ to, href, children, variant = "primary", icon = true, className = "", ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-extrabold transition ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight size={18} aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
