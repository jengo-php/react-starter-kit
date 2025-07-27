import { Head, Link } from "@inertiajs/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head title="Home" />

      <header className="flex justify-between p-8 bg-base-300">
        <div className="flex gap-5 items-center">
          <h1 className="text-3xl font-bold">Jengo React Starter Kit</h1>
        </div>

        <div className="flex items-center space-x-2.5">
          <Link href={"/"}>Home</Link>
        </div>
      </header>

      <section className="max-w-7xl mx-auto mt-6">{children}</section>
    </div>
  );
}
