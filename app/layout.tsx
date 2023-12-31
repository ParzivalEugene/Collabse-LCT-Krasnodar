import { ReduxCustomProvider } from "@/components/redux/Provider";
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
    <ReduxCustomProvider>
      <html lang="en" className={`h-full ${inter.className}`}>
        <body className="h-full flex">{children}</body>
      </html>
    </ReduxCustomProvider>
  );
}
