import { useState } from "react";
import { Menu, X, Shield, ClipboardList, CheckCircle, Phone, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#10182c]  border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <a
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-xl font-bold text-white hover:text-emerald-400 transition-colors duration-300"
          >
            <Shield className="w-6 h-6" />
            SafeSpeak
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <a
              href="/status"
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all duration-300"
            >
              Status
            </a>
            <a
              href="/contact-us"
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all duration-300"
            >
              Contact
            </a>
            <a
              href="/admin-login"
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all duration-300"
            >
              Admin
            </a>
            <a
              href="/department-login"
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all duration-300"
            >
              Department
            </a>
            <a
              href="/whistleblower-login"
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all duration-300"
            >
              whistleblower
            </a>
            <a
              href="/about-us"
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all duration-300"
            >
              About us
            </a>
            <a
              href="/report"
              className="ml-2 px-6 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300"
            >
              Report Issue
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-2 py-4 border-t border-white/10">
            <a
              href="/status"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all duration-300"
            >
              <CheckCircle className="w-5 h-5" /> Status
            </a>
            <a
              href="/contact"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all duration-300"
            >
              <Phone className="w-5 h-5" /> Contact
            </a>
            <a
              href="/admin-login"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all duration-300"
            >
              <User className="w-5 h-5" /> Admin
            </a>
            <a
              href="/department-login"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all duration-300"
            >
              <User className="w-5 h-5" /> Department
            </a>
            <a
              href="/whistleblower-login"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-all duration-300"
            >
              <User className="w-5 h-5" /> whistleblower
            </a>
            <a
              href="/report"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300"
            >
              <ClipboardList className="w-5 h-5" /> Report Issue
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;