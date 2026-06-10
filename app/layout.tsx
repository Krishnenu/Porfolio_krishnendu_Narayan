import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sections/Sidebar";
import Navbar from "@/components/sections/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishnendu Narayan | Full Stack Developer Portfolio",
  description:
    "I build exceptional digital experiences and scalable web applications that solve real world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground transition-colors duration-300">
        <div className="min-h-screen flex flex-col lg:flex-row">
          {/* Desktop Sidebar */}
          <Sidebar />

          {/* Mobile Top Navbar & Drawer */}
          <Navbar />

          {/* Main Workspace Content */}
          <main className="flex-1 lg:pl-64 min-h-screen flex flex-col">
            <div className="flex-1 px-6 py-8 sm:px-8 lg:px-12 w-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
