import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Plane, MapPin, Calendar, Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Accueil", icon: null },
    { to: "/reserver-vol", label: "Vols", icon: <Plane className="w-4 h-4" /> },
    { to: "/reserver-hebergement", label: "Hébergements", icon: <MapPin className="w-4 h-4" /> },
    { to: "/planification-voyage", label: "Planifier", icon: <Calendar className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setMenuOpen(false)}>
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">HEAVENLY</span>
              <span className="text-sm text-secondary">TRAVEL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label, icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(to) ? "text-primary" : "text-foreground"
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Button
            onClick={() => window.open("https://wa.me/212649621442", "_blank")}
            className="btn-gold hidden md:flex"
          >
            Contactez-nous
          </Button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-primary hover:bg-muted transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            {navLinks.map(({ to, label, icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(to)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
            <div className="pt-2">
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  window.open("https://wa.me/212649621442", "_blank");
                }}
                className="btn-gold w-full"
              >
                Contactez-nous
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
