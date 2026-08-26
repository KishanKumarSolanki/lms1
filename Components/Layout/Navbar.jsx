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
        <div className="fixed inset-x-0 top-0 z-50" style={{ padding: "10px" }}>
            <header
                className={`fixed top-5 left-20 right-20 mx-auto rounded-2xl border border-white/40 bg-white/50 backdrop-blur-xl transition-shadow ${scrolled
                        ? "shadow-[0_8px_32px_rgba(124,58,237,0.15)]"
                        : "shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                    }`}
                style={{
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                }}
            >
                <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <div
                            className="flex h-9 w-9 items-center justify-center rounded-xl"
                            style={{ background: "linear-gradient(135deg, #7c3aed, #d946ef)" }}
                        >
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
                        className="hidden items-center gap-1 rounded-full bg-white/40 p-1 md:flex"
                    >
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block rounded-full px-4 py-2 text-sm font-medium text-black/70 transition-colors hover:bg-white/70 hover:text-black"
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
                                    className="flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/80"
                                >
                                    <FontAwesomeIcon icon={faUser} style={{ fontSize: "16px" }} />
                                    {user.role === "admin" ? "Admin Panel" : "My Dashboard"}
                                </a>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                                    style={{ background: "linear-gradient(135deg, #7c3aed, #d946ef)" }}
                                >
                                    <FontAwesomeIcon icon={faRightFromBracket} style={{ fontSize: "16px" }} />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <a
                                    href="/login"
                                    className="rounded-full px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/60"
                                >
                                    Login
                                </a>
                                <a
                                    href="/signup"
                                    className="rounded-full px-5 py-2 text-sm font-medium text-white shadow-md transition-opacity hover:opacity-90"
                                    style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899)" }}
                                >
                                    Sign Up
                                </a>
                            </>
                        )}
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/50 text-black md:hidden"
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} style={{ fontSize: "20px" }} />
                    </button>
                </nav>

                {/* Mobile menu panel */}
                {menuOpen && (
                    <div
                        style={{
                            fontFamily: "Inter, sans-serif",
                            backdropFilter: "blur(20px) saturate(180%)",
                            WebkitBackdropFilter: "blur(20px) saturate(180%)",
                        }}
                        className="mx-3 mb-3 rounded-xl border border-white/40 bg-white/60 px-3 pb-4 pt-2 md:hidden"
                    >
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block rounded-lg px-3 py-3 text-base font-medium text-black/80 hover:bg-white/70"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-3 flex flex-col gap-2 border-t border-white/50 pt-3">
                            {user ? (
                                <>
                                    <a
                                        href={user.role === "admin" ? "/admin" : "/dashboard"}
                                        className="flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-3 text-sm font-medium text-black"
                                    >
                                        <FontAwesomeIcon icon={faUser} style={{ fontSize: "16px" }} />
                                        {user.role === "admin" ? "Admin Panel" : "My Dashboard"}
                                    </a>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white"
                                        style={{ background: "linear-gradient(135deg, #7c3aed, #d946ef)" }}
                                    >
                                        <FontAwesomeIcon icon={faRightFromBracket} style={{ fontSize: "16px" }} />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a
                                        href="/login"
                                        className="rounded-full border border-black/60 bg-white/40 px-4 py-3 text-center text-sm font-medium text-black"
                                    >
                                        Login
                                    </a>
                                    <a
                                        href="/signup"
                                        className="rounded-full px-4 py-3 text-center text-sm font-medium text-white"
                                        style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899)" }}
                                    >
                                        Sign Up
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}