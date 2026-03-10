import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-white">MAROTT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative py-2 transition-colors ${
                isActive("/") && location.pathname === "/"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Home
              {isActive("/") && location.pathname === "/" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
              )}
            </Link>
            <Link
              to="/production"
              className={`relative py-2 transition-colors ${
                isActive("/production")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Production
              {isActive("/production") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
              )}
            </Link>
            <Link
              to="/articles"
              className={`relative py-2 transition-colors ${
                isActive("/articles")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Articles
              {isActive("/articles") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
              )}
            </Link>
            <Link
              to="/about"
              className={`relative py-2 transition-colors ${
                isActive("/about")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
              )}
            </Link>
            <Link
              to="/contact"
              className={`relative py-2 transition-colors ${
                isActive("/contact")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors ${
                  isActive("/") && location.pathname === "/"
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                Home
              </Link>
              <Link
                to="/production"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors ${
                  isActive("/production") ? "text-white" : "text-gray-400"
                }`}
              >
                Production
              </Link>
              <Link
                to="/articles"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors ${
                  isActive("/articles") ? "text-white" : "text-gray-400"
                }`}
              >
                Articles
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors ${
                  isActive("/about") ? "text-white" : "text-gray-400"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors ${
                  isActive("/contact") ? "text-white" : "text-gray-400"
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}