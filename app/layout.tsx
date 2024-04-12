import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/hooks/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "AuthorVerse",
  description: "The place where authors and readers meet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="text-black dark:bg-gray-900 dark:text-white ">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen flex flex-col items-center">
            {children}
          </main>
          <ThemeSwitcher className="fixed bottom-4 right-4" />
        </ThemeProvider>
      </body>
    </html>
  );
}
