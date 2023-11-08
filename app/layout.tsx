import { Navbar, Sidebar } from "@/components";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "EasyBoard",
  description:
    "EasyBoard is a simple, easy to use, and free kanban board for onboarding new hires.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${inter.className}`}>
      <body className="h-full flex">
        <Sidebar />
        <main className="ml-60 w-full bg-bg">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
