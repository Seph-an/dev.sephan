const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-950 to-[#0a1224] text-white">
      <div className="w-full bg-white/5 px-6 py-4 text-center text-sm font-medium text-white/80">
        © {currentYear} Sephan | With ❤️ from Kenya
      </div>
    </footer>
  );
}
