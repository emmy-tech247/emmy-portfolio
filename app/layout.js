import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emmanuel Alao — Full Stack Web Developer",
  description: "Portfolio of Emmanuel Alao, a Full Stack Web Developer specializing in React, Next.js, and TypeScript.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-brand selection:text-white`}>
        {children}
      </body>
    </html>
  );
}