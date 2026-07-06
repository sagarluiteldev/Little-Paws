# 🐾 Little Paws - Pet Care Clinic Landing Page

A modern, premium landing page designed for a boutique pet care clinic. This application features rich visual interactions, smooth scrolling, and immersive animations designed to provide a high-end web experience.

---

## 🚀 Tech Stack

- **Core**: [React 18](https://react.dev/) & [TypeScript 5](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Animations**: [GSAP 3](https://gsap.com/) (GreenSock Animation Platform) with ScrollTrigger
- **Scrolling**: [Lenis 1.3](https://lenis.darkroom.engineering/) (Smooth scroll library)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with a responsive fluid design and custom keyframe animations

---

## 📂 Project Structure

Following modern frontend practices, the codebase is structured into self-contained components, modular types, constants, and hooks:

```
src/
├── components/
│   ├── layout/            # Core layout wrappers (Header, Footer, etc.)
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── sections/          # Page sections represented as components
│   │   ├── AboutUs.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── IntroSection.tsx
│   │   ├── Reviews.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChoose.tsx
│   │   └── WhyUsCards.tsx
│   └── ui/                # Shared reusable UI elements
│       ├── Kicker.tsx
│       └── PawButton.tsx
├── constants/             # Static configurations, arrays and site data
│   └── index.tsx
├── hooks/                 # Custom React hooks (logic & side-effects)
│   └── usePageAnimations.ts
├── types/                 # Shared TypeScript interfaces
│   └── index.ts
├── App.tsx                # Main application entry point & section orchestrator
├── main.tsx               # DOM mounting entry point
└── styles.css             # Main stylesheet & custom utility styles
```

---

## ⚙️ Local Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) and a package manager like `npm`.

### 2. Setup
Clone the repository and install all dependencies:
```bash
npm install
```

### 3. Development Server
Start the local development server with hot-module replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To generate a production-ready bundle (compiles TypeScript and builds optimized static assets into the `/dist` directory):
```bash
npm run build
```

### 5. Preview Production Build
To preview the compiled assets locally:
```bash
npm run preview
```

---

## 🎨 UI/UX Features

- **Interactive Animations**: Entrance effects, letter stagger splits, and fluid element pop-ins utilizing GSAP.
- **Parallax Effects**: Multi-layered background scrolls and depth offsets for hero illustrations and collage displays.
- **Custom Interactive Components**:
  - Smooth Accordion FAQs (collapsible paw-indicators).
  - Fade-transition Reviews Carousel.
  - Interactive Hover CTA buttons with responsive mini-dog animation overlays.
  - Full mobile navigation sidebar.
- **Lenis Smooth Scroll**: Eliminates browser default scroll jumps for a consistent, premium feel.
# Little-Paws
