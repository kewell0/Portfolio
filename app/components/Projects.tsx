"use client";

import React from "react";
import { motion } from "framer-motion";

import movieLand from "../../public/assets/projects/movie-land.png";
import barter from "../../public/assets/projects/Barter-app.png";
import imacare from "../../public/assets/projects/imacare.png";
import fehcs from "../../public/assets/projects/fehcs.png";
import teeketing from "../../public/assets/projects/teeketing.png";

import Project from "./Project";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-white py-28 px-6">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xl uppercase tracking-widest text-[#5651e5]">
            Selected Work
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-gray-900">
            Projects
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <Project
            title="Event Management System"
            tech="Next.js · MongoDB · AWS"
            image={teeketing}
            link="https://www.teeketing.com/"
          />

          <Project
            title="Healthcare Platform"
            tech="Next.js · Tailwind · Framer-motion"
            image={fehcs}
            link="https://www.fehomecareservices.com/"
          />

          <Project
            title="Hospital System"
            tech="React · Redux"
            image={imacare}
            link="https://imacare.vercel.app"
          />

          <Project
            title="Movie App"
            tech="React · imdb-API"
            image={movieLand}
            link="https://movie-land11.netlify.app"
          />

          <Project
            title="Barter Platform"
            tech="HTML · CSS · JS"
            image={barter}
            link="https://barter-right.vercel.app/"
          />
        </motion.div>
      </div>
    </section>
  );
}
