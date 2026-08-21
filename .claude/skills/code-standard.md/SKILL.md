---
name: code-standard
description: >
  Code standards and conventions for this React/Vite portfolio project. Enforces
  React component patterns, TailwindCSS dark mode conventions, SEO requirements,
  Framer Motion animation patterns, data file structure, accessibility rules, and
  Git commit conventions. Use this skill whenever writing, reviewing, refactoring,
  or generating code in this project. Also trigger when the user asks about coding
  style, naming conventions, component structure, or best practices. This skill
  applies even if the user doesn't explicitly mention "standards" — any code
  generation or review task should follow these conventions.
---

# Code Standard Review

Review the code I just wrote or modified against the conventions of this project and fix any issues found.

## What to check and enforce

### 1. React Components
- Functional components only — no class components
- One component per file (small sub-components in the same file are OK if only used locally)
- File names in **PascalCase** (e.g. `MyComponent.jsx`)
- Use `.jsx` extension for any file that contains JSX — including data files and tests
- Extract constants and helper functions outside the component body
- Prefer early returns over deeply nested conditionals
- Keep components focused — if a component exceeds ~150 lines, consider splitting

### 2. Import order (top to bottom)
1. React and hooks (`react`, `react-dom`)
2. Third-party libraries (`framer-motion`, `react-router-dom`, `react-icons`, etc.)
3. Internal contexts (`../../context/...`)
4. Internal hooks (`../../hooks/...`)
5. Internal components (`../components/...`)
6. Internal data (`../data/...`)
7. Assets (images, fonts)
8. Styles (CSS)

### 3. Standalone vs Embedded Page Detection
Pages rendered both inside `Home.jsx` and as standalone routes must use `useLocation` to detect context:
```jsx
const location = useLocation();
const isStandalonePage = location.pathname === "/skills";

return (
  <>
    {isStandalonePage ? (
      <SEO title="..." description="..." path="/skills" noindex={true} />
    ) : (
      <div className="text-center pt-20 sm:pt-30 pb-8 mt-20">
        <h2 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Section Title
        </h2>
      </div>
    )}
    {/* Main content always renders */}
  </>
);
```
- Never use `useState` + `useEffect` + `window.location.href` for this — use `useLocation().pathname`
- SEO only on standalone pages; section heading only when embedded in Home
- Use `<h2>` for section headings, not `<p>`

### 4. Framer Motion Animations
Standard animation pattern used across the project:
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    ease: "easeInOut",
    duration: 0.5,   // range: 0.5–0.9
    delay: 0.1,      // range: 0.1–0.3, increment for staggered reveals
  }}
>
```
- Always use `ease: "easeInOut"` — no other easing functions
- Duration between 0.5–0.9 seconds
- Stagger delays in increments of 0.05–0.1s between sibling elements
- Transform animations (`y`, `x`) only for special cases like banners or modals

### 5. TailwindCSS Conventions
- **Dark mode is mandatory**: always include the `dark:` counterpart for every visual property
  - `bg-secondary-light dark:bg-primary-dark`
- Use the project's **custom color tokens only** — never hardcode raw colors like `bg-[#0D2438]`:
  - Light: `primary-light`, `secondary-light`, `ternary-light`
  - Dark: `primary-dark`, `secondary-dark`, `ternary-dark`
- Use `font-general-*` utility classes for typography (`font-general-regular`, `font-general-medium`, `font-general-semibold`, `font-general-bold`)
- Prefer responsive utilities (`sm:`, `md:`, `lg:`) over custom CSS
- Pair light/dark classes on the same logical line for readability
- Standard link styling: `underline text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer duration-300`

### 6. SEO
- Every page in `src/pages/` **must** include the `<SEO />` component at the top of its return
- Always pass `title`, `description`, and `path` props — never rely only on defaults
- Titles follow the pattern: `"Section | Taylor - Software Engineer"`
- Descriptions must be between 120–160 characters
- Subpages use `noindex={true}` — only Home is indexed

### 7. Links and Contact Fields
External links must always include security attributes:
```jsx
<a href={url} target="_blank" rel="noopener noreferrer" aria-label="...">
```
Contact field types have specific URL schemes:
- **Website**: `href={url}` with `target="_blank" rel="noopener noreferrer"`
- **Email**: `href={`mailto:${email}`}`
- **Phone**: `href={`tel:${number}`}`
- **WhatsApp**: `href={`https://wa.me/${number.replace(/[\s\-+()]/g, "")}`}` with `target="_blank"`
- **SMS**: `href={`sms:${number}`}`

### 8. Context Providers
- Use Context only for state shared across multiple unrelated components
- Keep context files in `src/context/`
- Export the provider component and the context separately (`export const Provider` + `export default Context`)
- Computed/filtered data should be calculated inside the provider, not in consuming components
- Providers that depend on route params (`useParams`) must validate data and render `<NotFound />` for invalid IDs
- Components consuming context must check for null/undefined data before rendering:
  ```jsx
  if (!singleProjectData || !singleProjectData.ProjectInfo) {
    return <></>;
  }
  ```

### 9. Data Files (`src/data/`)
- All static content must live in a data file — no hardcoded strings inside components
- Data files export named constants (e.g. `export const skills = [...]`)
- No business logic in data files — keep them as plain data
- Images are imported as ES6 modules at the top of the file, then referenced in data objects
- Data files containing JSX (e.g. react-icons) must use `.jsx` extension
- Data structure should mirror the component consumption hierarchy

### 10. Image Handling
- Import images as ES6 modules — never use raw URL strings
- Store image references in data objects/arrays in `src/data/`
- Components access images via destructured properties from data
- All `<img>` tags must have meaningful `alt` attributes

### 11. Testing (Vitest + React Testing Library)
- Test files use `.test.jsx` extension (not `.test.js`) when they contain JSX
- Create reusable setup functions to avoid repeating `render()`:
  ```jsx
  const setup = () => render(<Component />);
  
  function setupUserEvent(jsx) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    };
  }
  ```
- Use regex patterns for case-insensitive text matching: `screen.getByText(/some text/i)`
- Access elements via visible text (`getByText`, `getByRole`) — avoid CSS selectors
- Use `async/await` for user interaction tests
- Test behavior, not implementation — no mocking internal state

### 12. Accessibility
- All interactive elements (`button`, `a`) must have `aria-label` when text content is not descriptive enough
- Images must have meaningful `alt` attributes
- Use semantic HTML elements (`nav`, `main`, `section`, `article`, `h2`) where appropriate
- Section headings in pages use `<h2>`, not `<p>`

### 13. General Code Quality
- No `console.log` in production code
- Remove unused imports and variables
- No `/*eslint-disable*/` comments — fix the actual issue instead
- No commented-out code blocks — delete them
- Prefer early returns over deeply nested conditionals

### 14. Git Commits
- Use conventional commit format: `type(scope): description`
- Never add `Co-Authored-By: Claude` or any AI co-author trailer
- Separate commits for unrelated changes

---

## After reviewing, report:
1. Issues found with file path and line number
2. Fixes applied
3. Any remaining items that need manual attention
