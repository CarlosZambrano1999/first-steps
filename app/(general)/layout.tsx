import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
    <main className="flex felx-col items-center p-24">
      <span className="text-lg">Hola Mundo</span>
      {children}{" "}
    </main>
    </>
  );
}
