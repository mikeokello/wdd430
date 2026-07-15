import NavLinks from "@/components/NavLinks";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">WDD430</p>
          <div className="text-xl font-semibold">Sacrament Meeting Planner</div>
        </div>
        <NavLinks />
      </nav>
    </header>
  );
}

