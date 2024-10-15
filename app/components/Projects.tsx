import Image from "next/image";
import Link from "next/link";
import React from "react";

import movieLand from "../../public/assets/projects/movie-land.png";
import barter from "../../public/assets/projects/Barter-app.png";
import imacare from "../../public/assets/projects/imacare.png";
import fehcs from "../../public/assets/projects/fehcs.png";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:px-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Project
            title="Health Care Service"
            backgroundImg={fehcs}
            projectUrl="https://fehcs.vercel.app/"
            tech="NextJS, TailwindCss, Framer Motion"
          />
          <Project
            title="Hospital Management System"
            backgroundImg={imacare}
            projectUrl="https://imacare.vercel.app"
            tech="React JS, Material UI, Redux-Toolkit"
          />
          <Project
            title="Movie-land"
            backgroundImg={movieLand}
            projectUrl="https://movie-land11.netlify.app"
            tech="React JS"
          />
          <Project
            title="Barter-right"
            backgroundImg={barter}
            projectUrl="https://barter-right.vercel.app/"
            tech="HTML, CSS, JavaScript"
          />

          {/* <Project
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
