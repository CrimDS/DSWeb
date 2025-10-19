import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-cyan-400/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="absolute inset-0.5 bg-background rounded-md flex items-center justify-center">
              <span className="text-cyan-400 font-bold font-mono text-lg">◆</span>
            </div>
          </div>
          <span className="hidden sm:inline font-bold text-lg glow-text">VOID</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#lore"
              className="text-sm text-foreground/70 hover:text-cyan-400 transition-colors font-mono"
            >
              LORE
            </a>
            <a
              href="#universe"
              className="text-sm text-foreground/70 hover:text-cyan-400 transition-colors font-mono"
            >
              UNIVERSE
            </a>
            <a
              href="#mysteries"
              className="text-sm text-foreground/70 hover:text-cyan-400 transition-colors font-mono"
            >
              MYSTERIES
            </a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-400/20 to-violet-500/20 border border-cyan-400/50 rounded-lg text-cyan-400 hover:from-cyan-400/30 hover:to-violet-500/30 transition-all font-mono text-sm font-bold">
            ENTER
          </button>
        </div>
      </nav>
    </header>
  );
}
