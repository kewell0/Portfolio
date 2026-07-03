"use client";

import React from "react";
import { motion } from "framer-motion";

import movieLand from "../../public/assets/projects/movie-land.png";
import barter from "../../public/assets/projects/Barter-app.png";
import imacare from "../../public/assets/projects/imacare.png";
import fehcs from "../../public/assets/projects/fehcs.png";
import teeketing from "../../public/assets/projects/teeketing.png";
import velocity from "../../public/assets/projects/velocity.png";
import certify from "../../public/assets/projects/Certifytrusts.png";

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
            Some projects
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
            title="Teeketing"
             description="An event management platform that enables users to create, manage, and purchase tickets for events."
            tech="Next.js · MongoDB · AWS"
            image={teeketing}
            link="https://www.teeketing.com/"
          />

          <Project
            title="Velocity Africa"
              description="A venture capital platform featuring a content-managed blog, portfolio showcase, and investment resources powered by Strapi CMS."
              tech="Next.js · TypeScript · Tailwind CSS · Strapi "
            image={velocity}
            link="https://velocity.africa/"
          />

          <Project
            title="Certifytrusts"
              description="A certificate issuance and verification platform that enables organizations to securely create, manage, and validate digital certificates."
              tech="Next.js · TypeScript · Tailwind CSS · Express · MongoDB  "
            image={certify}
            link="https://www.certifytrusts.com/"
          />

          <Project
            title="FE Home Care Services"
              description="A professional healthcare service website that showcases home care offerings, allowing clients to explore services, learn about caregivers, and request care support online."
            tech="Next.js · Tailwind · Framer-motion"
            image={fehcs}
            link="https://www.fehomecareservices.com/"
          />

          <Project
            title="Imacare"
            description="A hospital management system UI"
            tech="React · Redux"
            image={imacare}
            link="https://imacare.vercel.app"
          />

          <Project
            title="MovieLand"
            description=""
            tech="React · imdb-API"
            image={movieLand}
            link="https://movie-land11.netlify.app"
          />

          <Project
            title="Barter"
            description=""
            tech="HTML · CSS · JS"
            image={barter}
            link="https://barter-right.vercel.app/"
          />
        </motion.div>
      </div>
    </section>
  );
}
