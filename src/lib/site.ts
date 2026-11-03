export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://lydiagrozaweb.com");

// Google Analytics 4 measurement ID. Set in .github/workflows/deploy.yml;
// analytics and its cookie banner stay off without it.
export const gaId = process.env.NEXT_PUBLIC_GA_ID;
