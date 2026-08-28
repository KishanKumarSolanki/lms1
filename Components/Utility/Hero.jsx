import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faStar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white text-gray-900">

      <div className="max-w-4xl px-4 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 text-xs bg-gray-100 border border-gray-200 rounded-full text-violet-600">
          <FontAwesomeIcon icon={faStar} />
          #1 Learning Platform
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
          Develop your skills in a{" "}
          <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
            smarter modern way
          </span>
        </h1>

        {/* Text */}
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Build real-world projects, learn from experts, and grow your career faster with modern tools and practical learning.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold hover:scale-105 transition">
            Enroll Now
            <FontAwesomeIcon icon={faArrowRight} />
          </button>

          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <FontAwesomeIcon icon={faCirclePlay} className="text-violet-600" />
            Watch Demo
          </button>
        </div>

        {/* Rating */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} />
            ))}
          </div>
          <p className="text-sm text-gray-500">4.9/5 from 2,000+ students</p>
        </div>

      </div>
    </section>
  );
};

export default Hero;