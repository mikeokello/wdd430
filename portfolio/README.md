# wdd430-portfolio

## Links
- Vercel Deployment URL: https://vercel.app/your-url-here
- GitHub Repository URL: https://github.com/your-username/wdd430-portfolio

## Custom Component
- **SkillCard.tsx** — displays a skill name and proficiency level in a styled card.

## Reflection Questions
1. **What is the purpose of app/layout.tsx in the Next.js App Router?**
   `app/layout.tsx` defines the root layout that wraps every page (via `children`) and provides shared UI such as navigation and global structure.

2. **Why are the components in this assignment Server Components rather than Client Components?**
   Components are Server Components by default in the App Router so they can render on the server without `use client`, improving performance and reducing unnecessary client-side JavaScript.

