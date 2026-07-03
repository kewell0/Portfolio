"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import CalebImg from "../../public/assets/calebO.png";

const About = () => {
  return (
    <div id="about" className="flex w-full items-center p-2 py-12 lg:px-16">
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Software Developer with hands-on experience building scalable web
            applications and interactive user interfaces across multiple
            industries, including EventTech, AgriTech, EdTech, and HealthTech.
            Proficient in JavaScript, React, Next.js, React Native, HTML5, CSS,
            and Node.js, with experience delivering responsive, accessible, and
            maintainable applications. Skilled at collaborating with
            cross-functional teams to translate design concepts into functional,
            high-quality products while continuously improving application
            performance and user experience. Passionate about building
            intuitive, user-centric solutions using modern web technologies and
            writing clean, maintainable code.
          </p>

          <LinkScroll
            activeClass="active"
            to="projects"
            spy
            smooth
            offset={-50}
            duration={500}
            className="group inline-block cursor-pointer"
          >
            <p className="relative inline-block py-2 font-semibold text-gray-600 transition-colors duration-300 group-hover:text-[#5651e5]">
              Check out some of my latest projects.
              <span className="absolute left-0 -bottom-[2px] h-[1.5px] w-full origin-left scale-x-0 bg-[#5651e5] transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </p>
          </LinkScroll>
        </div>
        <div className="m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105">
          <Image src={CalebImg} className="rounded-xl" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default About;
