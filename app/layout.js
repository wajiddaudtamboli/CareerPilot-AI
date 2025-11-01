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
    // Use user-provided PNG favicons (synced to /public via prebuild script) and keep .ico as fallback
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: '/apple-touch-icon.png',
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
