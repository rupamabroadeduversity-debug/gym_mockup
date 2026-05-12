export default function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black tracking-normal sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-[color:var(--muted)] sm:text-lg">{text}</p> : null}
    </div>
  );
}
