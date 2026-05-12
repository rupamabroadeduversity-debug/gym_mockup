import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, text, image, children }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="glass group overflow-hidden rounded-lg"
    >
      {image ? (
        <div className="aspect-[4/3] overflow-hidden">
          <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={image} alt={title} loading="lazy" />
        </div>
      ) : null}
      <div className="p-6">
        {Icon ? (
          <div className="mb-5 grid h-11 w-11 place-items-center rounded-md bg-ember/15 text-flame">
            <Icon size={22} aria-hidden="true" />
          </div>
        ) : null}
        <h3 className="text-xl font-black">{title}</h3>
        {text ? <p className="mt-3 leading-7 text-[color:var(--muted)]">{text}</p> : null}
        {children}
      </div>
    </motion.article>
  );
}
