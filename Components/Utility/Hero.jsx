import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBookOpen,
  faUsers,
  faStar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";


export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white h-[100vh]">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-10">
          {/* Left: heading + text + CTAs */}
          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 font-['Inter',sans-serif] text-xs font-semibold text-violet-700">
              <FontAwesomeIcon icon={faStar} className="text-violet-500" style={{ fontSize: "11px" }} />
              #1 Rated Online Learning Platform
            </div>

            <h1
              style={{ fontFamily: "'Lora', serif" }}
              className="mt-5 text-[34px] font-extrabold leading-[1.15] text-black sm:text-[52px]"
            >
              Develop your skills in a{" "}
              <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                new and unique
              </span>{" "}
              way
            </h1>

            <p
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mt-5 max-w-md text-[15px] font-medium leading-relaxed text-black/60"
            >
              Explore a transformative approach to skill development on our online
              learning platform. Discover a new realm of learning experiences and
              elevate your expertise in unique ways.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 font-['Inter',sans-serif]">
              <a
                href="/courses"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-300/50 transition-all hover:shadow-xl hover:shadow-violet-300/60 hover:-translate-y-0.5"
              >
                Enroll Now
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ fontSize: "13px" }}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="/about"
                className="flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-black transition-colors hover:border-violet-300 hover:bg-violet-50"
              >
                <FontAwesomeIcon icon={faCirclePlay} style={{ fontSize: "18px" }} className="text-violet-600" />
                Watch Demo
              </a>
            </div>

            {/* Rating / social proof */}
            <div className="mt-8 flex items-center gap-4 font-['Inter',sans-serif]">
              <div className="flex -space-x-3">
                {["a", "b", "c", "d"].map((s, i) => (
                  <div
                    key={s}
                    className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-violet-300 to-pink-300"
                    style={{ zIndex: 4 - i }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <FontAwesomeIcon key={n} icon={faStar} style={{ fontSize: "12px" }} />
                  ))}
                  <span className="ml-1 text-xs font-semibold text-black">4.9/5</span>
                </div>
                <p className="text-xs text-black/50">from 2,000+ happy students</p>
              </div>
            </div>
          </div>

          {/* Right: image with floating stat badges */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2.5rem] bg-gradient-to-br from-violet-500 to-pink-500 opacity-20 blur-xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-gradient-to-br from-violet-100 to-pink-100 p-2 shadow-2xl shadow-violet-200/70">
              <img
                src="hero.png"
                alt="Student learning online"
                className="h-[420px] w-full rounded-[2rem] object-cover"
              />
            </div>

            {/* Floating badge: courses */}
            <div className="absolute -left-6 top-10 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl shadow-violet-200/60 backdrop-blur-sm font-['Inter',sans-serif]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                <FontAwesomeIcon icon={faBookOpen} style={{ fontSize: "18px" }} />
              </div>
              <div>
                <p className="text-sm font-bold leading-none text-black">50+</p>
                <p className="mt-1 text-xs leading-none text-black/50">Online Courses</p>
              </div>
            </div>

            {/* Floating badge: students */}
            <div className="absolute -right-4 top-1/3 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl shadow-pink-200/60 backdrop-blur-sm font-['Inter',sans-serif]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                <FontAwesomeIcon icon={faUsers} style={{ fontSize: "18px" }} />
              </div>
              <div>
                <p className="text-sm font-bold leading-none text-black">10k+</p>
                <p className="mt-1 text-xs leading-none text-black/50">Online Students</p>
              </div>
            </div>

            {/* Floating badge: satisfaction (bottom) */}
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-4 py-2.5 shadow-xl shadow-violet-200/60 backdrop-blur-sm font-['Inter',sans-serif]">
              <div className="flex items-center gap-1 text-amber-400">
                <FontAwesomeIcon icon={faStar} style={{ fontSize: "12px" }} />
              </div>
              <p className="text-xs font-semibold text-black">98% Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}