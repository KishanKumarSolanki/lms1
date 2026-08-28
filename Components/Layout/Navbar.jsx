import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faGraduationCap,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-3">
      
      <div
        className={`mx-auto max-w-7xl rounded-2xl bg-white/80 backdrop-blur-xl transition-all ${
  scrolled ? "shadow-lg" : "shadow-md"
}`}
      >
        <nav className="flex items-center justify-between px-4 py-3">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-pink-500">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white" />
            </div>
            <span className="font-semibold text-lg text-black">EduPrime</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <button className="px-4 py-2 rounded-full border">
                  Dashboard
                </button>
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white">
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="text-sm">Login</a>
                <a
                  href="/logout"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm"
                >
                  Logout
                </a>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-700 py-2 border-b"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2">
              {user ? (
                <>
                  <button className="py-2 border rounded-full">
                    Dashboard
                  </button>
                  <button className="py-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="py-2 text-center border rounded-full">
                    Login
                  </Link>
                  <Link to="/logout" className="py-2 text-center rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white">
                    Logout
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;