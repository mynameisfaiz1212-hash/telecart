import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">

            {/* ICON */}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base md:text-lg">
                B
              </span>
            </div>

            {/* TEXT */}
            <span className="text-3xl md:text-4xl font-bold text-foreground">
              BookDemo
            </span>

          </Link>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            <a href="#hero" className="text-lg md:text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>

            <a href="#categories" className="text-lg md:text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
              Categories
            </a>

            <a href="#offers" className="text-lg md:text-xl font-medium text-muted-foreground hover:text-foreground transition-colors">
              Offers
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden ml-auto p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-3">
          <a href="#hero" className="block text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>
            Home
          </a>

          <a href="#categories" className="block text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>
            Categories
          </a>

          <a href="#offers" className="block text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>
            Offers
          </a>
        </div>
      )}
    </header>
  );
}
