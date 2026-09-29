<div align="center">

# 👋 devprofile

### Ganesh Bhadra's Developer Profile

**A personal, single-page portfolio built to showcase my work as a Product Developer** — highlighting my experience, projects, skills, certifications, and GitHub activity in one focused, modern web app.

[![Deploy to GitHub Pages](https://github.com/hunk7/devprofile/actions/workflows/deploy.yml/badge.svg)](https://github.com/hunk7/devprofile/actions/workflows/deploy.yml)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-Personal_Project-lightgrey)

🔗 **[View Live Site →](https://hunk7.github.io/devprofile/)**

</div>

---

## 📑 Table of Contents

- [✨ What is this?](#-what-is-this)
- [🧩 How it's structured](#-how-its-structured)
- [🛠️ Tech stack](#️-tech-stack)
- [🚀 Getting started](#-getting-started)
- [📦 Deployment](#-deployment)
- [📄 License](#-license)

---

## ✨ What is this?

This repo powers my personal dev profile — think of it as a living, curated résumé that lives on the web instead of a PDF. Instead of a static page, it's a fully interactive React app that pulls together everything a recruiter, collaborator, or fellow engineer would want to know about me:

- Who I am and what I do
- Where I've worked and what I've shipped
- The skills and tech stack I use day-to-day
- Certifications and education
- Real-time GitHub activity, pulled directly from my profile
- Ways to get in touch

The goal was to build something that feels **curated, not generated** — every section is hand-authored content backed by strongly-typed data, rendered through clean, reusable components, with light/dark theming and subtle motion to make it feel alive.

## 🧩 How it's structured

The app is composed of independent, content-driven sections so each part of my profile can evolve without touching the others:

| Section | Purpose |
| --- | --- |
| `Hero` | Name, role, and an animated introduction |
| `About` | A quick narrative on who I am as an engineer |
| `ExperienceTimeline` | Career history across companies |
| `Projects` | Selected work worth showcasing |
| `TechBadges` | Tools and technologies I work with |
| `Certifications` | Professional certifications |
| `Education` | Academic background |
| `ImpactMetrics` | Quantifiable highlights of my impact |
| `GitHubStatus` | Live snapshot of my GitHub activity |

All the actual content (bio, roles, projects, skills, etc.) lives in typed data files under [`src/content`](src/content), decoupled from the presentation layer in [`src/sections`](src/sections) and [`src/components`](src/components). This keeps the app easy to update — new job, new project, new certification — without rewriting UI code.

---

## 🛠️ Tech stack

- **[React 19](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)** — component-driven UI with full type safety
- **[Vite](https://vitejs.dev/)** — fast dev server and optimized production builds
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first styling with a custom light/dark theme
- **[Vitest](https://vitest.dev/) + Testing Library** — unit tests for components and providers
- **[Playwright](https://playwright.dev/)** — end-to-end and accessibility (axe-core) testing
- **GitHub Actions** — CI/CD pipeline that builds, tests, and deploys automatically to **GitHub Pages**

---

## 🚀 Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check the project
npm run typecheck

# run unit tests
npm run test:unit

# run end-to-end tests
npm run test:e2e

# build for production
npm run build
```

---

## 📦 Deployment

Every push to `main` triggers a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that type-checks, tests, builds, and publishes the app to **GitHub Pages** at [hunk7.github.io/devprofile](https://hunk7.github.io/devprofile/).

---

## 📄 License

This is a personal portfolio project. Feel free to use it as inspiration for your own dev profile — just make it yours! 🚀

<div align="center">

---

Built with ❤️ by [Ganesh Bhadra](https://github.com/hunk7)

</div>
