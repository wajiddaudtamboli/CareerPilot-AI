import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/',
  '/home',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhook(.*)',
  '/careerplanning(.*)',
  '/learn(.*)',
  '/preparation(.*)',
  '/company(.*)',
  '/mock-interview(.*)',
  '/online-ide(.*)',
  '/ai-code-practice(.*)',
  '/doubt-solving(.*)',
  '/focus-mode(.*)',
  '/grammar-check(.*)',
  '/language-learning(.*)',
  '/q-and-a(.*)',
  '/real-interview(.*)',
  '/api/chat(.*)',
  '/api/gemini(.*)',
  '/api/execute-code(.*)',
  '/api/jobs(.*)',
  '/api/pdf(.*)',
  '/api/scrape(.*)',
  '/api/users(.*)',
  '/api/database(.*)',
]);

export default clerkMiddleware(async (auth, request) => {
  // Protect dashboard and other private routes
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};