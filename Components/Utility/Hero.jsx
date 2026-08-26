import {PlayCircle, BookOpen, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-6">
          {/* Left: heading + text + CTAs */}
          <div>
            <h1
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-4xl font-semibold leading-tight text-black sm:text-5xl"
            >
              Develop your skills in a new and unique way
            </h1>
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="mt-5 max-w-md text-base leading-relaxed text-black/60"
            >
              Explore a transformative approach to skill development on our online
              learning platform. Discover a new realm of learning experiences and
              elevate your expertise in unique ways.
            </p>

            <div
              style={{ fontFamily: "Inter, sans-serif" }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="/courses"
                className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Enroll Now
              </a>
              <a
                href="/about"
                className="flex items-center gap-2 text-sm font-semibold text-black transition-opacity hover:opacity-70"
              >
                <PlayCircle size={20} className="text-violet-600" />
                What's EduPrime
              </a>
            </div>
          </div>

          {/* Right: image with floating stat badges */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-dashed border-violet-300 p-2">
              <img
                src="/assets/hero-student.jpg"
                alt="Student learning online"
                className="h-[420px] w-full rounded-[2rem] object-cover"
              />
            </div>

            {/* Floating badge: courses */}
            <div
              style={{ fontFamily: "Inter, sans-serif" }}
              className="absolute -left-6 top-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                <BookOpen size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-black leading-none">50+</p>
                <p className="text-xs text-black/50 leading-none mt-1">Online Courses</p>
              </div>
            </div>

            {/* Floating badge: students */}
            <div
              style={{ fontFamily: "Inter, sans-serif" }}
              className="absolute -right-4 top-1/3 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                <Users size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-black leading-none">10k+</p>
                <p className="text-xs text-black/50 leading-none mt-1">Online Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}