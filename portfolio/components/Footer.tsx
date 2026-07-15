export default function Footer() {
  return (
    <footer className="mt-12 bg-slate-950 py-6 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-300 sm:px-6 lg:px-8">
        <p>Copyright &copy; {new Date().getFullYear()} | Sacrament Meeting Planner | All Rights Reserved</p>
      </div>
    </footer>
  );
}

