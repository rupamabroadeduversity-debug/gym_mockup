import { useMemo, useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const bmi = useMemo(() => weight / ((height / 100) ** 2), [height, weight]);
  const category = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Balanced" : bmi < 30 ? "Overweight" : "High";

  return (
    <div className="glass rounded-lg p-6">
      <h3 className="text-2xl font-black">BMI Calculator</h3>
      <div className="mt-6 space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-[color:var(--muted)]">Height: {height} cm</span>
          <input className="w-full accent-ember" type="range" min="130" max="220" value={height} onChange={(event) => setHeight(Number(event.target.value))} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-[color:var(--muted)]">Weight: {weight} kg</span>
          <input className="w-full accent-ember" type="range" min="35" max="180" value={weight} onChange={(event) => setWeight(Number(event.target.value))} />
        </label>
      </div>
      <div className="mt-6 rounded-lg bg-black/30 p-5">
        <p className="text-sm font-bold uppercase text-[color:var(--muted)]">Your BMI</p>
        <p className="mt-1 text-4xl font-black text-flame">{bmi.toFixed(1)}</p>
        <p className="mt-2 font-bold">{category}</p>
      </div>
    </div>
  );
}
