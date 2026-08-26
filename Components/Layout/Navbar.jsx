import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faGraduationCap,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../firebase/config";
// import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ---- Firebase Auth state (uncomment when firebase is wired up) ----
  const [user, setUser] = useState(null); // { name, role: "admin" | "student" } | null
  // const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
  //     if (firebaseUser) {
  //       // fetch role from Firestore "users" collection
  //       setUser({ name: firebaseUser.displayName, role: "student" });
  //     } else {
  //       setUser(null);
  //     }
  //   });
  //   return () => unsub();
  // }, []);

  const handleLogout = () => {
    // signOut(auth).then(() => navigate("/login"));
    setUser(null);
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "shadow-sm border-b border-gray-100" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black">
            <FontAwesomeIcon icon={faGraduationCap} style={{ color: "#ffffff", fontSize: "18px" }} />
          </div>
          <span
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-lg font-semibold tracking-tight text-black"
          >
            EduPrime
          </span>
        </a>

        {/* Desktop nav links */}
        <ul
          style={{ fontFamily: "Inter, sans-serif" }}
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-black/70 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: auth buttons (desktop) */}
        <div
          style={{ fontFamily: "Inter, sans-serif" }}
          className="hidden items-center gap-3 md:flex"
        >
          {user ? (
            <>
              <a
                href={user.role === "admin" ? "/admin" : "/dashboard"}
                className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-black transition-colors hover:border-gray-400"
              >
                <FontAwesomeIcon icon={faUser} style={{ fontSize: "16px" }} />
                {user.role === "admin" ? "Admin Panel" : "My Dashboard"}
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85"
              >
                <FontAwesomeIcon icon={faRightFromBracket} style={{ fontSize: "16px" }} />
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100"
              >
                Login
              </a>
              <a
                href="/signup"
                className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85"
              >
                Sign Up
              </a>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-black md:hidden"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} style={{ fontSize: "26px" }} />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          style={{ fontFamily: "Inter, sans-serif" }}
          className="border-t border-gray-100 bg-white px-4 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-black/80 hover:bg-gray-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4">
            {user ? (
              <>
                <a
                  href={user.role === "admin" ? "/admin" : "/dashboard"}
                  className="flex items-center justify-center gap-2 rounded-full border border-gray-200 px-4 py-3 text-sm font-medium text-black"
                >
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: "16px" }} />
                  {user.role === "admin" ? "Admin Panel" : "My Dashboard"}
                </a>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-medium text-white"
                >
                  <FontAwesomeIcon icon={faRightFromBracket} style={{ fontSize: "16px" }} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="rounded-full border border-gray-200 px-4 py-3 text-center text-sm font-medium text-black"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="rounded-full bg-black px-4 py-3 text-center text-sm font-medium text-white"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}