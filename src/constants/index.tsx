import {
  Bath,
  Bone,
  BriefcaseMedical,
  CalendarDays,
  HeartHandshake,
  MapPin,
  Salad,
  Scissors,
  ShieldPlus,
  Phone,
  Sparkles,
  Syringe,
} from "lucide-react";
import { Service, Question } from "../types";

export const A = "/assets/";

export const nav = [
  ["About", "#about-us"],
  ["Services", "#services"],
  ["How it works", "#how-it-works"],
  ["Review", "#reviews"],
];

export const features: Service[] = [
  {
    icon: <HeartHandshake />,
    title: "Tailored Wellness Plans",
    body: "Comprehensive checkups, vaccinations, and preventive care designed to keep your pet healthy, active, and thriving year-round.",
  },
  {
    icon: <Scissors />,
    title: "Professional Grooming",
    body: "Expert grooming, bathing, and coat care that leaves your pet looking clean, feeling comfortable, and smelling fresh very single time",
  },
  {
    icon: <Salad />,
    title: "Nutritional Guidance",
    body: "Customized meal plans and expert nutrition advice to support your pet's overall health, energy, and long-term wellness.",
  },
  {
    icon: <ShieldPlus />,
    title: "Emergency Care",
    body: "Fast, reliable medical attention when your pet needs urgent support, ensuring quick assessment and prompt treatment. We handle very pet with care",
  },
  {
    icon: <Phone />,
    title: "Behavioral Support",
    body: "Personalized training and behavior consultations that help your pet feel confident, well-behaved, and emotionally balanced.",
  },
  {
    icon: <Bone />,
    title: "Dental Health",
    body: "Thorough dental cleanings and oral care services to maintain and promote strong teeth, healthy gums, and fresh breath always.",
  },
];

export const services: Service[] = [
  {
    icon: <Bath />,
    title: "Pet Grooming & Spa",
    body: "Treat your pet to a refreshing grooming experience, including gentle bathing, coat trimming, nail care, and soothing treatments.",
  },
  {
    icon: <BriefcaseMedical />,
    title: "Veterinary Checkups",
    body: "Support your pet's long-term health with routine exams, vaccinations, and preventive care designed to keep them active.",
  },
  {
    icon: <Bone />,
    title: "Dental Care",
    body: "Promote your pet's oral health with thorough cleanings, plaque removal, that ensure fresh breath and a healthy smile.",
  },
  {
    icon: <Salad />,
    title: "Nutritional Counseling",
    body: "Receive personalized dietary guidance tailored to your pet's needs, helping them stay energized, healthy, and nourished.",
  },
  {
    icon: <Syringe />,
    title: "Emergency Care",
    body: "Get fast, dependable medical support when urgent health concerns arise, ensuring your pet receives immediate treatment.",
  },
];

export const steps = [
  {
    icon: <CalendarDays />,
    title: "Book an Appointment",
    body: "Choose a convenient time and tell us about your pet's grooming or wellness needs.",
  },
  {
    icon: <MapPin />,
    title: "Stop by Our Clinic",
    body: "Visit with your pet and let our experienced team provide gentle, professional treatment.",
  },
  {
    icon: <Sparkles />,
    title: "Leave With a Happy Pet",
    body: "Pick up a relaxed, healthy, and fresh-looking companion ready for more good days.",
  },
];

export const faqs: Question[] = [
  {
    q: "How often should my pet get a wellness checkup?",
    a: "It's recommended that most pets receive a wellness checkup at least once a year. Regular visits help us catch potential issues early, keep vaccinations up to date, and ensure your pet stays healthy and comfortable.",
  },
  {
    q: "What services do you offer for pets?",
    a: "We provide grooming, routine veterinary checkups, dental care, nutrition support, behavioral guidance, and urgent care for unexpected needs.",
  },
  {
    q: "Do I need an appointment before visiting the clinic?",
    a: "Appointments help us give your pet the calmest experience, but urgent visits are welcome when your pet needs quick care.",
  },
  {
    q: "Do you provide grooming for all pet sizes and breeds?",
    a: "Yes. Our team adjusts the grooming routine, tools, and pace to match your pet's breed, coat, size, age, and comfort level.",
  },
  {
    q: "What should I bring for my pet's first visit?",
    a: "Bring any recent health records, vaccination details, favorite treats, and notes about allergies, behavior, or special routines.",
  },
];

export const gallery = [
  { src: "GU81p9JS7M3FMdMpEsjCig6zWMA.webp", alt: "Happy fluffy golden retriever puppy running on grass" },
  { src: "byJ2TaGAeh1Uu7C1KOrW8Mt3YA.webp", alt: "Close-up portrait of a cute pug puppy tilting its head" },
  { src: "rS2n6W6YIOjOr1b6p9vjOhIgY.webp", alt: "Groomed white poodle puppy sitting upright on a table" },
  { src: "bhe1ahOyfno7QTwsUPUmwzHAxtY.webp", alt: "Small brown terrier dog playing with a tennis ball" },
  { src: "v9TDXJWDeXZJz8gIuzlQQtpNE8.webp", alt: "Cute tiny chihuahua wearing a colorful knitted sweater" },
];
