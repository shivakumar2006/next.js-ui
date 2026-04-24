# Accredian Enterprise — Landing Page

A pixel-perfect, fully responsive landing page inspired by the Accredian Enterprise website. Built with **Next.js App Router**, **React**, and **Tailwind CSS** — structured for scalability, clarity, and clean component architecture.

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://next-js-ui-one.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/shivakumar2006/next.js-ui)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 🌐 Live Demo

🔗 **[https://next-js-ui-one.vercel.app/](https://next-js-ui-one.vercel.app/)**

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 18, Functional Components + Hooks |
| Styling | Tailwind CSS |
| Language | JavaScript |
| Mock Backend | Next.js API Routes |
| Deployment | Vercel |

---

## ✨ Features

- **Fully Responsive** — Works seamlessly across mobile, tablet, and desktop
- **Modular Architecture** — Every section is an independent, reusable component
- **Interactive FAQ** — Accordion with category-based filtering
- **Testimonials Section** — Clean card-based layout
- **Lead Capture CTA** — Form connected to a mock API endpoint
- **Mock API Integration** — `/api/lead` route handler simulates backend behavior
- **Optimized Images** — Next.js `<Image />` component for performance
- **SEO Friendly** — Metadata configured via App Router conventions
- **Smooth Scrolling** — Native scroll behavior across sections

---

## 🧩 Component Structure

```
app/
├── page.js                  # Root page — composes all sections
├── api/
│   └── lead/
│       └── route.js         # Mock API — captures lead email
└── layout.js                # Root layout + metadata

components/
├── Navbar.jsx               # Sticky navigation with smooth scroll
├── Hero.jsx                 # Above-the-fold hero section
├── Stats.jsx                # Key metrics / social proof numbers
├── Edge.jsx                 # Why Accredian Enterprise section
├── Domain.jsx               # Domain / industry verticals
├── Course.jsx               # Course catalog cards
├── Cat.jsx                  # Category listing
├── HowItWorks.jsx           # Step-by-step process section
├── FAQ.jsx                  # Accordion FAQ with categories
├── Testimonials.jsx         # User testimonials carousel
├── CTA.jsx                  # Call-to-action with lead form
├── LeadForm.jsx             # Controlled form component
└── Footer.jsx               # Footer with links
```

---

## 🔌 API Integration

A mock API is implemented using Next.js App Router route handlers:

**Endpoint:** `POST /api/lead`

```js
// app/api/lead/route.js
export async function POST(req) {
  const { email } = await req.json();
  console.log("Lead captured:", email);
  return Response.json({ success: true, message: "Lead received" });
}
```

**What it does:**
- Accepts `email` from the CTA form
- Validates and logs the submission
- Returns a JSON success response
- Designed to be swapped with a real DB or CRM integration later

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- yarn

### Setup

```bash
# Clone the repo
git clone https://github.com/shivakumar2006/next.js-ui.git
cd next.js-ui

# Install dependencies
yarn install

# Run dev server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
# Production build
yarn build

# Start production server
yarn start
```

---

## 🏗️ Project Architecture

```
next.js-ui/
├── app/
│   ├── layout.js            # Root layout + SEO metadata
│   ├── page.js              # Home page — assembles all components
│   └── api/
│       └── lead/
│           └── route.js     # Lead capture API route
├── components/              # All reusable UI components
├── public/                  # Static assets (images, icons)
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 📐 Design Decisions

**App Router over Pages Router** — Used Next.js 13+ App Router for modern file-based routing, nested layouts, and built-in API route handlers without a separate backend.

**Component-first approach** — Every section of the page is isolated into its own component, making it easy to update, test, or reorder sections independently.

**Tailwind over CSS Modules** — Utility-first styling keeps component files self-contained and eliminates context switching between files.

**Mock API with Route Handlers** — Instead of a hardcoded form, the lead form hits an actual API endpoint — making it trivial to replace with a real database or email service later.

---

## ⚠️ Challenges & Solutions

| Challenge | Solution |
|---|---|
| Consistent responsiveness across all sections | Used Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) systematically |
| Image issues on Vercel deployment | Configured `next.config.js` with correct `remotePatterns` and used `public/` folder correctly |
| FAQ accordion state management | Used `useState` with category-based active tracking |
| Layout alignment in complex blocks | Used CSS Grid + Flexbox combination via Tailwind |

---

## 🔮 Future Improvements

- Real backend integration (Supabase / Firebase) for lead storage
- Scroll-based animations (Framer Motion)
- Improved accessibility — ARIA roles, keyboard navigation
- Toast notifications on form submission
- Unit tests for components (Jest + React Testing Library)

---

## 🚀 Deployment

Deployed on **Vercel** with automatic CI/CD from the `main` branch.

Every push to `main` triggers an automatic build and deployment.

🔗 **[https://next-js-ui-one.vercel.app/](https://next-js-ui-one.vercel.app/)**

---

## 🤖 AI Usage Disclosure

AI tools (ChatGPT, Claude) were used to:
- Scaffold component structure and architecture
- Improve Tailwind styling and responsive layouts
- Implement FAQ accordion interaction logic
- Assist with debugging edge cases

**Manual work done on top:**
- Full UI/UX refinement and layout consistency
- Responsiveness tuning across breakpoints
- Component integration and data flow
- Form submission logic and API wiring
- Spacing, alignment, and visual hierarchy polish

---

## 📜 Declaration

I confirm this project is my own work. I understand the code and implementation used throughout the project.

---

## 🙌 Acknowledgements

Design inspired by the [Accredian Enterprise](https://accredian.com/enterprise) website.

Built with ❤️ using Next.js + Tailwind CSS.