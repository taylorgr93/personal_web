# Code Standard Review

Review the code I just wrote or modified against the conventions of this project and fix any issues found.

## What to check and enforce

### 1. React Components
- Functional components only — no class components
- One component per file (small sub-components in the same file are OK if they are only used locally)
- Component file names in **PascalCase** (e.g. `MyComponent.jsx`)
- Use `.jsx` extension for files that contain JSX
- Extract constants and helper functions outside the component to avoid re-creation on every render
- Avoid inline arrow functions as event handlers when they cause unnecessary re-renders

### 2. Imports order (top to bottom)
1. React and hooks (`react`, `react-dom`)
2. Third-party libraries (`framer-motion`, `react-router-dom`, `react-icons`, etc.)
3. Internal contexts (`../../context/...`)
4. Internal hooks (`../../hooks/...`)
5. Internal components (`../components/...`)
6. Internal data (`../data/...`)
7. Assets (images, fonts)
8. Styles (CSS)

### 3. TailwindCSS conventions
- Always include the dark mode counterpart when setting a visual property:
  - ✅ `className="bg-secondary-light dark:bg-primary-dark"`
  - ❌ `className="bg-secondary-light"` (missing dark variant)
- Use the project's custom color tokens — never hardcode raw colors like `bg-[#0D2438]`:
  - Light: `primary-light`, `secondary-light`, `ternary-light`
  - Dark: `primary-dark`, `secondary-dark`, `ternary-dark`
- Use the `font-general-*` utility classes for typography (`font-general-medium`, `font-general-semibold`, etc.)
- Prefer responsive utility classes (`sm:`, `md:`, `lg:`) over custom CSS

### 4. SEO
- Every page in `src/pages/` **must** include the `<SEO />` component at the top of its return
- Always pass `title`, `description`, and `path` props — never rely only on defaults
- Descriptions should be between 120–160 characters
- Titles should follow the pattern: `"Section | Taylor - Software Engineer"`
- Example:
  ```jsx
  <SEO
    title="Skills | Taylor - Software Engineer"
    description="Technical skills of Taylor: JavaScript, React, Node.js, TypeScript, Docker, AWS and more with 6+ years of experience."
    path="/skills"
  />
  ```

### 5. Data files (`src/data/`)
- All static content must live in a data file — no hardcoded strings inside components
- Data files export named constants (e.g. `export const skills = [...]`)
- Do not add business logic to data files — keep them as plain data

### 6. Context
- Only use Context for state shared across multiple unrelated components
- Keep context files in `src/context/`
- Provide a custom hook to consume context when reused in more than two places

### 7. General code quality
- No `console.log` left in production code
- Remove unused imports and variables
- No `/*eslint-disable*/` comments unless absolutely justified — fix the actual issue instead
- Prefer early returns over deeply nested conditionals
- Keep components focused — if a component exceeds ~150 lines, consider splitting it

### 8. Accessibility
- All interactive elements (`button`, `a`) must have an `aria-label` when the text content is not descriptive enough
- Images must have meaningful `alt` attributes
- Use semantic HTML elements (`nav`, `main`, `section`, `article`) where appropriate

---

### 9. Git commits
- Never add `Co-Authored-By: Claude` or any AI co-author trailer to commit messages.

After reviewing, report:
1. Issues found with file and line number reference
2. Fixes applied
3. Any remaining items that need manual attention (e.g. missing `og-image.png`, inconsistent copy)
