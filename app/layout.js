import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: "CareerPilot AI - Your Career Companion",
  description: "AI-powered career guidance and job preparation platform",
  icons: {
    // Prefer the uploaded favicon.ico for all platforms; keep a single source of truth
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    // If a dedicated Apple touch icon PNG is added later (e.g., /apple-touch-icon.png), we can point to it here
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: '#3b82f6',
          colorBackground: '#ffffff',
          colorText: '#1f2937',
        },
        elements: {
          card: 'shadow-xl rounded-xl',
          headerTitle: 'text-2xl font-bold',
          formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
        }
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
        </head>
        <body>
          <Providers>
              <div className="flex flex-col min-h-screen">
                <NavBar />
                <main className="flex-grow">{children}</main>
                <Footer />
                <ChatBot />
              </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
