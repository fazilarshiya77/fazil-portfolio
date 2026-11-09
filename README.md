# Fazil Arshiya — Portfolio & Commercial Showcase

A modern, high-performance portfolio website for **Fazil Arshiya** — UI/UX Designer & Frontend Developer based in Bengaluru, India. 

Designed and engineered to present live client production websites, an interactive admin/CRM architecture demonstration, a 4-step UI/UX engineering process, and a comprehensive technical stack.

---

## 🚀 Live Projects Showcased

| # | Project | Category | Live URL | Focus Area |
|---|---|---|---|---|
| 01 | **Sarakki Homes** | Real Estate | [sarakkihomes.com](https://www.sarakkihomes.com/) | Luxury property discovery, builder partnerships & WhatsApp consultation |
| 02 | **Winter Cab Service** | Business & Services | [wintercabservice.com](https://wintercabservice.com/) | 24/7 ride booking, quick quote calculator & fleet showcase |
| 03 | **SID Events Management** | Business & Services | [sideventsmanagement.com](https://www.sideventsmanagement.com/) | Custom wedding package builder & luxury celebratory event showcase |
| 04 | **The Property Agent** | Real Estate | [thepropertyagent.in](https://thepropertyagent.in/) | Multi-category property search, farmland, residential & commercial listings |
| 05 | **Taj Tours & Travels** | Travel & Hospitality | [tours-and-travels-xi-six.vercel.app](https://tours-and-travels-xi-six.vercel.app/) | Outstation rate calculator, transparent vehicle choice & rapid booking |

---

## 🛠️ Tech Stack & Architecture

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 8](https://vite.dev/) with Rolldown/ESBuild fast builds and HMR
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) using `@theme` design tokens, custom font pairings, and glassmorphic utilities
- **Motion & Interactions**: [Framer Motion v14](https://motion.dev/) for page transitions, tab switches, and modal interactions
- **Icons**: [Lucide React](https://lucide.dev/) + custom vector SVG components
- **Linter**: [Oxlint](https://oxc.rs/) for sub-50ms static analysis
- **State & Theme**: Custom React Context with system preference detection and persistent dark/light theme switching

---

## ✨ Features

- **Interactive Hero**: Features an interactive 3-tab inspector (Design Philosophy, Frontend Code, AI Workflows) and live availability status.
- **Filterable Work Grid**: Browse live projects across *Real Estate*, *Business & Services*, and *Travel & Hospitality* with detailed modal deep-dives.
- **Behind-The-Scenes Admin & CRM Demo**: Interactive demonstration dashboard with real-time lead status triage, search filtering, and operational capability breakdown.
- **Technical Stack Matrix**: Visual breakdown across UI/UX, Frontend, Backend & Integration, AI Workflows (Claude, ChatGPT, Gemini, Google Antigravity), and Delivery.
- **4-Step Engineering Process**: Clear narrative detailing *Understand*, *Structure*, *Design & Build*, and *Refine & Deliver*.
- **Contact Channels**: Instant email copy-to-clipboard, inquiry mailto generator, and verified LinkedIn/GitHub links.
- **Accessible & Responsive**: Keyboard navigable, mobile drawer menu with scroll lock, and reduced-motion support.

---

## 📁 Project Structure

```
fazil_portfolio/
├── public/
│   ├── assets/projects/     # High-resolution client project imagery
│   └── favicon.svg           # Branded vector favicon
├── src/
│   ├── assets/               # Brand SVGs and hero assets
│   ├── components/           # Modular UI components
│   │   ├── AboutSection.tsx
│   │   ├── AdminShowcase.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── SkillsSection.tsx
│   │   └── SocialIcons.tsx
│   ├── context/              # Theme provider & custom hook
│   │   ├── theme.ts
│   │   └── ThemeContext.tsx
│   ├── data/                 # Strongly-typed data models
│   │   ├── adminData.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── App.tsx               # Main application container
│   ├── index.css             # Tailwind v4 theme tokens & styles
│   └── main.tsx              # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

```bash
# Clone the repository
git clone https://github.com/fazilarshiya77/fazil_portfolio.git

# Navigate into the project directory
cd fazil_portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Runs the application locally at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Performs TypeScript type checking (`tsc -b`) and generates production bundles in `dist/`.

### Linting

```bash
npm run lint
```

Runs [Oxlint](https://oxc.rs/) to check for code quality and syntax issues.

---

## 📄 License

Private portfolio. All rights reserved © Fazil Arshiya.
