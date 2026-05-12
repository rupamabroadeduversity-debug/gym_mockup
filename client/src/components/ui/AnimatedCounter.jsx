import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 1.8, ease: "easeOut" });
    return controls.stop;
  }, [count, isInView, value]);

  return (
    <div ref={ref} className="glass rounded-lg p-5 text-center">
      <div className="text-3xl font-black text-white sm:text-4xl">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-semibold text-[color:var(--muted)]">{label}</p>
    </div>
  );
}
