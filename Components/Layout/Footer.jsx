import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faEnvelope,
    faPhone,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const year = new Date().getFullYear();

    const quickLinks = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    const courseLinks = [
        { label: "Web Development", href: "/courses?category=web-development" },
        { label: "Data Science", href: "/courses?category=data-science" },
        { label: "UI/UX Design", href: "/courses?category=design" },
        { label: "Digital Marketing", href: "/courses?category=marketing" },
    ];

    const socials = [
        { icon: faFacebook, href: "#", label: "Facebook" },
        { icon: faInstagram, href: "#", label: "Instagram" },
        { icon: faLinkedin, href: "#", label: "LinkedIn" },
        { icon: faXTwitter, href: "#", label: "Twitter" },
    ];

    return (
        <footer className="w-full border-t border-gray-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    {/* Brand + about */}
                    <div className="md:col-span-1">
                        <a href="/" className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black">
                                <FontAwesomeIcon icon={faGraduationCap} style={{ color: "#ffffff" }} />
                            </div>
                            <span
                                style={{ fontFamily: "Poppins, sans-serif" }}
                                className="text-lg font-semibold tracking-tight text-black"
                            >
                                EduPrime
                            </span>
                        </a>
                        <p
                            style={{ fontFamily: "Inter, sans-serif" }}
                            className="mt-4 text-sm leading-relaxed text-black/60"
                        >
                            Learn in-demand skills with expert-led courses, hands-on projects, and a
                            community that helps you grow — anytime, anywhere.
                        </p>

                        {/* Socials */}
                        <div className="mt-5 flex items-center gap-3">
                            {socials.map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-black/70 transition-colors hover:border-black hover:text-black"
                                >
                                    <FontAwesomeIcon icon={icon} style={{ fontSize: "16px" }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3
                            style={{ fontFamily: "Poppins, sans-serif" }}
                            className="text-sm font-semibold text-black"
                        >
                            Quick Links
                        </h3>
                        <ul style={{ fontFamily: "Inter, sans-serif" }} className="mt-4 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-black/60 transition-colors hover:text-black"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Course categories */}
                    <div>
                        <h3
                            style={{ fontFamily: "Poppins, sans-serif" }}
                            className="text-sm font-semibold text-black"
                        >
                            Top Categories
                        </h3>
                        <ul style={{ fontFamily: "Inter, sans-serif" }} className="mt-4 space-y-3">
                            {courseLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-black/60 transition-colors hover:text-black"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3
                            style={{ fontFamily: "Poppins, sans-serif" }}
                            className="text-sm font-semibold text-black"
                        >
                            Get in Touch
                        </h3>
                        <ul style={{ fontFamily: "Inter, sans-serif" }} className="mt-4 space-y-3">
                            <li className="flex items-start gap-2 text-sm text-black/60">
                                <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "16px", marginTop: "2px" }} className="shrink-0" />
                                <span>New Delhi, India</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-black/60">
                                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "16px" }} className="shrink-0" />
                                <a href="mailto:support@eduprime.com" className="hover:text-black">
                                    support@eduprime.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-black/60">
                                <FontAwesomeIcon icon={faPhone} style={{ fontSize: "16px" }} className="shrink-0" />
                                <a href="tel:+911234567890" className="hover:text-black">
                                    +91 12345 67890
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{ fontFamily: "Inter, sans-serif" }}
                    className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row"
                >
                    <p className="text-sm text-black/50">
                        © {year} EduPrime. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="/privacy" className="text-sm text-black/50 hover:text-black">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="text-sm text-black/50 hover:text-black">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}