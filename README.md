Tracks Adventure — dynamic Next.js + Sanity scaffold

What changed:
- Index and package pages are now dynamic:
  - Each page tries to fetch data from Sanity.
  - If Sanity isn't connected, pages fall back to the uploaded HTML files for exact visual parity.

How to run locally:
1. cd nextjs-app
2. npm install
3. Set env vars (optional):
   - NEXT_PUBLIC_SANITY_PROJECT_ID (if using Sanity)
   - NEXT_PUBLIC_SANITY_DATASET (production)
   - NEXT_PUBLIC_SANITY_API_VERSION (2023-10-01)
   - SANITY_TOKEN (if write operations needed)
4. npm run dev
5. Visit http://localhost:3000

Deploy to Vercel:
- Push repo to GitHub and import to Vercel.
- Add env vars in Vercel Project Settings (same names above).
- Deploy.

Next steps I can do for you:
- Wire up GROQ queries and transform the HTML into React components.
- Add image URL builders and Sanity image component.
- Hook booking form to Sanity or email service.
