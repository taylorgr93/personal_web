# CLAUDE.md — Personal Web / Portfolio

Personal portfolio of **Christopher Taylor Gonzalez Rivera** (`taylorgr93`).
Production URL: `https://taylorgr93.com`

## Tech Stack

- **Framework**: React 18 (Vite)
- **Routing**: React Router v6
- **Styles**: TailwindCSS v3 + custom CSS (`src/css/App.css`)
- **Animations**: Framer Motion
- **SEO**: react-helmet-async (`src/components/SEO.jsx`)
- **Icons**: react-icons
- **Scroll**: react-scroll (smooth scrolling)
- **Counters**: react-countup (animated number counters)
- **Styled Components**: styled-components (used in select components)
- **Testing**: Vitest + React Testing Library + jsdom

## Main Commands

```bash
npm run dev        # Development server (port 3000)
npm run build      # Production build (Vite, output: build/)
npm run preview    # Preview production build
npm test           # Run tests (Vitest)
```

## Project Structure

```
src/
  pages/           # Route-level views (Home, AboutMe, Skills, Experience, Projects, Contact, ProjectSingle)
  components/
    SEO.jsx        # Shared SEO/meta component (react-helmet-async)
    Loading.jsx    # Suspense fallback spinner
    NotFound.jsx   # 404 page
    HireMeModal.jsx # Hire-me contact modal
    ScrollToTop.jsx # Scrolls to top on route change
    BackToTop.jsx  # Back-to-top utility
    shared/        # AppHeader, AppFooter, AppBanner, AppFooterCopyright
    about/         # AboutMeBio, AboutClients, AboutClientSingle, AboutCounter, CounterItem
    projects/      # ProjectsGrid, ProjectsFilter, ProjectSingle, ProjectHeader, ProjectInfo, ProjectGallery, ProjectRelatedProjects
    skills/        # SkillsYears, SoftSkills
    experience/    # ExperienceComponent
    contact/       # ContactForm, ContactDetails
    reusable/      # Button, FormInput
  data/            # Static content source of truth (see Data section)
  context/         # ProjectsContext, SingleProjectContext, AboutMeContext
  hooks/           # useThemeSwitcher, useScrollToTop
  css/             # App.css (GeneralSans fonts), tailwind.css, Loading.css, NotFound.css
  fonts/           # GeneralSans font files (variable + static weights, all formats)
  images/          # Project screenshots and brand logos
  __tests__/       # Test files (Modal.test.jsx, Banner.test.jsx)
```

## Application Routes

| Route | Component |
|-------|-----------|
| `/` | `Home` (single-page with all sections) |
| `/about` | `AboutMe` |
| `/skills` | `Skills` |
| `/experience` | `Experience` |
| `/projects` | `Projects` |
| `/projects/single-project/:id` | `ProjectSingle` |
| `/contact` | `Contact` |
| `*` | `NotFound` (404 catch-all) |

## Data Files (`src/data/`)

All site content lives here. To update personal information, **edit only these files**:

| File | Content |
|------|---------|
| `aboutMeData.js` | Bio, highlights (years of experience, projects, stack) |
| `skillsData.js` | Technical skills with years of experience |
| `softSkillsData.js` | Soft skills |
| `otherSkillsData.js` | Other skills |
| `experienceData.js` | Work history (company, position, dates, responsibilities) |
| `projects.js` | Projects list (id, title, URL, category, image) |
| `singleProjectData.jsx` / `singleProjectDataArray.jsx` | Individual project details (`.jsx` because they contain react-icons) |
| `clientsData.js` | Clients / logos |

## Design System (TailwindCSS)

### Custom Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary-light` | `#F7F8FC` | Main light background |
| `secondary-light` | `#FFFFFF` | Secondary light background |
| `ternary-light` | `#f6f7f8` | Tertiary light background |
| `primary-dark` | `#0D2438` | Main dark background |
| `secondary-dark` | `#102D44` | Secondary dark background |
| `ternary-dark` | `#1E3851` | Tertiary dark background |

### Dark Mode

Implemented with `darkMode: "class"` in Tailwind.
The `useThemeSwitcher` hook persists the theme in `localStorage`.
Always use classes like `dark:bg-primary-dark dark:text-ternary-light`.

### Typography

Main font: **GeneralSans** (variable font, defined in `src/css/App.css`).
Utility classes: `font-general-regular`, `font-general-medium`, `font-general-semibold`, `font-general-bold`, etc.

### Tailwind Config Notes

- **Safelist**: Several utility classes are safelisted (`rounded-2xl`, `shadow-2xl`, `ring-1`, dark variants) to prevent purging.
- **Container**: Custom responsive padding defined (`DEFAULT: 1rem`, `sm: 2rem`, `lg: 5rem`, `xl/2xl: 6rem`).
- **Plugin**: `@tailwindcss/forms` is enabled for form element styling.

## SEO

The `SEO` component (`src/components/SEO.jsx`) accepts the following props:

| Prop | Description | Default |
|------|-------------|---------|
| `title` | Page title | `"Taylor \| Software Engineer"` |
| `description` | Meta description | General description |
| `path` | Relative path (e.g. `"/about"`) | `""` |
| `image` | Open Graph image | `"/og-image.png"` |
| `type` | Open Graph type | `"website"` |
| `noindex` | Prevent search engine indexing | `false` |

Use it at the top of every page.

## Git Commits

- Use **conventional commits** format: `type(scope): description`
  - Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `test`, `style`, `perf`, `ci`
  - Scope is optional but recommended (e.g. `feat(projects):`, `fix(seo):`)
- Never add `Co-Authored-By: Claude` or any AI co-author trailer to commit messages.
- When changes span multiple unrelated concerns, create **separate commits** for each — do not squash everything into one.

## Git Branches

- `main` — production and active development (push directly)

## Code Standards

> **These rules apply automatically whenever you create, edit, or refactor any file in this project.**

### React Components
- Functional components only — no class components
- One component per file (small local sub-components in the same file are OK)
- File names in **PascalCase** (e.g. `MyComponent.jsx`), use `.jsx` for files with JSX
- Extract constants and helpers outside the component body

### Import Order
1. React and hooks
2. Third-party libraries (`framer-motion`, `react-router-dom`, `react-icons`, etc.)
3. Internal contexts (`../../context/...`)
4. Internal hooks (`../../hooks/...`)
5. Internal components (`../components/...`)
6. Internal data (`../data/...`)
7. Assets and styles

### TailwindCSS
- Always include the `dark:` counterpart for every visual property — e.g. `bg-secondary-light dark:bg-primary-dark`
- Use the project's custom color tokens only — never hardcode raw colors like `bg-[#0D2438]`
- Use `font-general-*` utility classes for typography
- Prefer responsive utilities (`sm:`, `md:`, `lg:`) over custom CSS

### SEO
- Every page in `src/pages/` must include `<SEO />` at the top of its return
- Always pass `title`, `description`, and `path` — never rely on defaults alone
- Title pattern: `"Section | Taylor - Software Engineer"`
- Description length: 120–160 characters

### Data Files
- All static content must live in `src/data/` — no hardcoded strings inside components
- Data files export named constants only — no business logic

### General Quality
- No `console.log` in production code
- No unused imports or variables
- No `/*eslint-disable*/` unless absolutely justified — fix the root cause instead
- Prefer early returns over deeply nested conditionals

### Accessibility
- All interactive elements must have `aria-label` when text content is not self-descriptive
- Images must have meaningful `alt` attributes
- Use semantic HTML (`nav`, `main`, `section`, `article`) where appropriate

## Important Notes

- `Home.jsx` loads all sections as components within a single page (single-page approach). Individual routes (`/about`, etc.) also exist for direct access.
- `App.jsx` uses `React.lazy` + `Suspense` for code splitting across all pages, with `Loading` as the fallback.
- Vite build outputs to `build/` (not the default `dist/`), configured in `vite.config.js`.
- Project images are imported in `src/data/projects.js` from `src/images/`.
- There is no custom backend; the contact form requires integration with an external service (see `src/components/contact/ContactForm.jsx`).
