import {
  Activity,
  Apple,
  BadgeCheck,
  Bike,
  CalendarCheck,
  Dumbbell,
  Flame,
  HeartPulse,
  Medal,
  ShieldCheck,
  Sparkles,
  Timer,
  Trophy,
  Users,
  Waves,
  Zap
} from "lucide-react";
import { image, images as imageSet } from "../utils/images.js";

export const images = imageSet;

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Equipments", path: "/equipments" },
  { label: "Gallery", path: "/gallery" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" }
];

export const stats = [
  { value: 12, suffix: "+", label: "Years coaching" },
  { value: 4800, suffix: "+", label: "Member transformations" },
  { value: 42, suffix: "+", label: "Weekly classes" },
  { value: 98, suffix: "%", label: "Goal completion" }
];

export const programs = [
  { title: "Strength Training", icon: Dumbbell, image: images.strength, text: "Progressive lifting plans with form coaching and recovery tracking." },
  { title: "Weight Loss", icon: Flame, image: image("photo-1605296867424-35fc25c9212a", 900, 700), text: "Nutrition, conditioning, and accountability designed for sustainable fat loss." },
  { title: "CrossFit", icon: Zap, image: image("photo-1517836357463-d25dfeac3438", 900, 700), text: "High-skill functional sessions that build capacity and confidence." },
  { title: "Cardio", icon: Bike, image: images.cardio, text: "Zone-based endurance training with measurable weekly progress." },
  { title: "Personal Training", icon: Medal, image: images.trainer, text: "Private coaching blocks tailored around your goals and schedule." },
  { title: "Yoga", icon: Waves, image: images.yoga, text: "Mobility, breathwork, and strength flows for resilient movement." }
];

export const whyChooseUs = [
  { title: "Certified Trainers", icon: BadgeCheck, text: "Every coach is certified, insured, and trained in habit-based coaching." },
  { title: "Modern Equipment", icon: Dumbbell, text: "Elite racks, selectorized machines, sled lanes, and recovery tools." },
  { title: "Flexible Membership", icon: CalendarCheck, text: "Pause, upgrade, or switch programs without friction." },
  { title: "Nutrition Guidance", icon: Apple, text: "Simple macro targets, meal templates, and weekly check-ins." }
];

export const memberships = [
  { name: "Basic", price: 39, tag: "Start strong", features: ["Open gym access", "2 group classes monthly", "BMI assessment", "Locker access"] },
  { name: "Standard", price: 69, tag: "Most popular", featured: true, features: ["Unlimited gym access", "Unlimited group classes", "Monthly body scan", "Nutrition templates"] },
  { name: "Premium", price: 119, tag: "Peak coaching", features: ["Everything in Standard", "4 PT sessions monthly", "Priority recovery zone", "Custom meal strategy"] }
];

export const trainers = [
  { name: "Maya Torres", role: "Strength Coach", image: image("photo-1594381898411-846e7d193883", 700, 800), specialty: "Powerlifting and mobility" },
  { name: "Arjun Mehta", role: "Transformation Lead", image: image("photo-1567013127542-490d757e51fc", 700, 800), specialty: "Fat loss and conditioning" },
  { name: "Nina Park", role: "Yoga Instructor", image: image("photo-1544005313-94ddf0286df2", 700, 800), specialty: "Mobility and breathwork" }
];

export const testimonials = [
  { quote: "The coaching is sharp, personal, and incredibly motivating. I dropped 18 kg without feeling lost once.", name: "Rhea S.", result: "18 kg fat loss" },
  { quote: "ApexFit feels premium but not intimidating. The trainers fixed my deadlift and my confidence.", name: "Daniel K.", result: "2x strength gain" },
  { quote: "The classes are electric. The tracking, nutrition, and recovery guidance made the difference.", name: "Priya N.", result: "Marathon ready" }
];

export const services = [
  { title: "Personal Training", icon: Users, price: "From $49/session", benefits: ["Goal audit", "Custom plan", "Weekly progress review"] },
  { title: "Group Classes", icon: Activity, price: "Included in Standard", benefits: ["Strength circuits", "Metcon blocks", "Community energy"] },
  { title: "Nutrition Plans", icon: Apple, price: "From $79/month", benefits: ["Macro targets", "Meal swaps", "Coach feedback"] },
  { title: "HIIT", icon: Timer, price: "$18/drop-in", benefits: ["Fat loss", "VO2 max", "Fast sessions"] },
  { title: "Bodybuilding", icon: Dumbbell, price: "From $89/month", benefits: ["Hypertrophy splits", "Pose practice", "Body scans"] },
  { title: "Yoga", icon: Waves, price: "$15/drop-in", benefits: ["Mobility", "Recovery", "Stress relief"] },
  { title: "Functional Training", icon: Zap, price: "From $59/month", benefits: ["Sled work", "Loaded carries", "Core power"] },
  { title: "Zumba", icon: Sparkles, price: "$12/drop-in", benefits: ["Dance cardio", "Coordination", "Community"] }
];

export const equipmentCategories = [
  { title: "Cardio Machines", image: images.cardio, muscle: "Heart, lungs, legs", items: ["Assault bikes", "Curved treadmills", "Rowers"] },
  { title: "Strength Machines", image: images.equipment, muscle: "Chest, back, shoulders, legs", items: ["Hack squat", "Cable stations", "Plate-loaded press"] },
  { title: "Free Weights", image: images.strength, muscle: "Full body", items: ["Olympic bars", "Dumbbells to 60 kg", "Competition plates"] },
  { title: "Functional Training", image: image("photo-1599058917765-a780eda07a3e", 900, 700), muscle: "Core, glutes, conditioning", items: ["Sled track", "Kettlebells", "Battle ropes"] },
  { title: "Recovery Equipment", image: images.recovery, muscle: "Mobility and recovery", items: ["Compression boots", "Massage guns", "Stretch zone"] }
];

export const galleryImages = [
  { src: images.interior, alt: "Premium gym interior with strength machines" },
  { src: images.strength, alt: "Athlete lifting dumbbells during strength workout" },
  { src: images.cardio, alt: "Trainer coaching cardio session" },
  { src: images.yoga, alt: "Yoga class inside modern studio" },
  { src: images.boxing, alt: "Boxing conditioning workout" },
  { src: image("photo-1517963879433-6ad2b056d712", 900, 1100), alt: "Group fitness class training together" },
  { src: image("photo-1609899464726-209befaac5c3", 900, 700), alt: "Gym event with athletes warming up" },
  { src: image("photo-1534258936925-c58bed479fcb", 900, 1100), alt: "Personal trainer supporting client" }
];

export const blogs = [
  { title: "Best Workout Routines for Busy Professionals", slug: "best-workout-routines", category: "Training", readTime: "6 min", author: "Maya Torres", image: images.strength, excerpt: "A practical weekly split that balances strength, conditioning, and recovery when time is limited." },
  { title: "Muscle Gain Tips That Actually Move the Needle", slug: "muscle-gain-tips", category: "Strength", readTime: "7 min", author: "Arjun Mehta", image: image("photo-1581009146145-b5ef050c2e1e", 900, 700), excerpt: "How progressive overload, protein targets, and sleep compound into visible size." },
  { title: "Fat Loss Guide Without Crash Dieting", slug: "fat-loss-guide", category: "Nutrition", readTime: "8 min", author: "Nina Park", image: image("photo-1490645935967-10de6ba17061", 900, 700), excerpt: "Build a sustainable calorie deficit while keeping performance and mood intact." },
  { title: "Gym Diet Plans for Beginners", slug: "gym-diet-plans", category: "Nutrition", readTime: "5 min", author: "ApexFit Team", image: image("photo-1512621776951-a57141f2eefd", 900, 700), excerpt: "Simple meal templates for training days, rest days, and high-protein snacks." },
  { title: "Beginner Fitness Tips Before Your First Month", slug: "beginner-fitness-tips", category: "Beginner", readTime: "4 min", author: "ApexFit Team", image: image("photo-1574680096145-d05b474e2155", 900, 700), excerpt: "What to track, what to ignore, and how to make the gym feel familiar fast." }
];

export const timeline = [
  { year: "2014", title: "First performance studio opened" },
  { year: "2018", title: "Expanded into full strength and conditioning club" },
  { year: "2021", title: "Launched nutrition and transformation coaching" },
  { year: "2026", title: "Serving members across hybrid in-gym and digital programs" }
];

export const achievements = [
  { icon: Trophy, title: "Best Local Fitness Club", text: "Awarded three years running by city wellness readers." },
  { icon: HeartPulse, title: "98% Member Satisfaction", text: "Measured through quarterly coaching and facility surveys." },
  { icon: ShieldCheck, title: "Safety First", text: "Daily equipment checks and coached movement standards." }
];
