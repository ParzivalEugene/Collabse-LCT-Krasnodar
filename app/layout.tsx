import { Navbar, Sidebar } from "@/components";
import { ReduxCustomProvider } from "@/components/redux/Provider";
import { ChakraProvider } from "@chakra-ui/react";
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
        <ChakraProvider>
          <body className="h-full flex">
            <Sidebar />
            <main className="ml-60 w-full bg-bg h-fit min-h-screen">
              <Navbar />
              {children}
            </main>
          </body>
        </ChakraProvider>
      </html>
    </ReduxCustomProvider>
  );
}
