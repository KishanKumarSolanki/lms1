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
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#1a1235] to-[#2a0d3a] text-white">
      
      {/* 🔥 Glow Background */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 -right-40 h-[500px] w-[500px] rounded-full bg-pink-500/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-violet-300">
              <FontAwesomeIcon icon={faStar} />
              #1 Rated Learning Platform
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Develop your skills in a{" "}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                modern way
              </span>
            </h1>

            {/* Text */}
            <p className="mt-5 max-w-lg text-white/70">
              Upgrade your skills with interactive courses, real-world projects,
              and expert mentors. Build your future faster.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              
              <a className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105">
                Enroll Now
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition" />
              </a>

              <a className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
                <FontAwesomeIcon icon={faCirclePlay} className="text-violet-300" />
                Watch Demo
              </a>
            </div>

            {/* Rating */}
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-[#0f0c29] bg-gradient-to-br from-violet-400 to-pink-400"
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-400 text-sm">
                  {[1,2,3,4,5].map((i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                  <span className="ml-1 text-white text-xs font-semibold">4.9/5</span>
                </div>
                <p className="text-xs text-white/50">2,000+ students</p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-sm">

            {/* Glow */}
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-500 to-pink-500 opacity-30 blur-2xl" />

            {/* Glass Card */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(124,58,237,0.4)] transition hover:scale-[1.03]">
              <img
                src="hero.png"
                alt="student"
                className="h-[420px] w-full object-cover"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-6 top-10 flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-3 shadow-lg">
              <FontAwesomeIcon icon={faBookOpen} className="text-violet-300" />
              <div>
                <p className="text-sm font-bold">50+</p>
                <p className="text-xs text-white/60">Courses</p>
              </div>
            </div>

            <div className="absolute -right-6 top-1/3 flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-3 shadow-lg">
              <FontAwesomeIcon icon={faUsers} className="text-pink-300" />
              <div>
                <p className="text-sm font-bold">10k+</p>
                <p className="text-xs text-white/60">Students</p>
              </div>
            </div>

            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 shadow-lg">
              <FontAwesomeIcon icon={faStar} className="text-amber-400 text-xs" />
              <p className="text-xs font-semibold">98% Satisfaction</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}