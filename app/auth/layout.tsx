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
    <div className="grid w-screen h-screen items-center justify-center">
      {children}
    </div>
  );
}
