# wdd430

## Custom Component
- **SkillCard.tsx** — displays a skill name and proficiency level in a styled card and is rendered on the About page.

## Reflection Questions
1. **What is the purpose of app/layout.tsx in the Next.js App Router?**
	app/layout.tsx defines the root layout that wraps every page via the `children` prop and provides shared UI (navigation, footer, metadata) and global styles.

2. **Why are the components in this assignment Server Components rather than Client Components?**
	Components default to Server Components in the App Router so they render on the server (reducing client JS), improve performance, and only use `use client` when client-side interactivity is required.
