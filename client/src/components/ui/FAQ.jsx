import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  ["Can beginners join ApexFit?", "Yes. Every new member starts with a movement screen, goal audit, and recommended program path."],
  ["Do you offer free trials?", "Yes. You can book a coached trial class or a gym floor orientation before choosing a plan."],
  ["Can I pause my membership?", "Standard and Premium members can pause memberships for travel, recovery, or schedule changes."],
  ["Is nutrition coaching included?", "Basic members receive templates. Standard and Premium members get deeper check-ins and strategy."],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map(([question, answer], index) => (
        <div className="glass rounded-lg" key={question}>
          <button
            className="flex w-full items-center justify-between gap-4 p-5 text-left font-extrabold"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {question}
            <ChevronDown className={`shrink-0 transition ${open === index ? "rotate-180 text-flame" : ""}`} size={20} />
          </button>
          {open === index ? <p className="px-5 pb-5 leading-7 text-[color:var(--muted)]">{answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
