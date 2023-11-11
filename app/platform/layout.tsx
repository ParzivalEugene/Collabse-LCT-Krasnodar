import { Navbar, Sidebar } from "@/components";

export const metadata = {
  title: "EasyBoard",
  description:
    "EasyBoard is a simple, easy to use, and free kanban board for onboarding new hires.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main className="ml-60 w-full bg-bg h-fit min-h-screen flex-col">
        <Navbar />
        {children}
      </main>
    </>
  );
}
