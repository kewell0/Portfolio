import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../../public/assets/projects/property.jpg";
import cryptoImg from "../../public/assets/projects/crypto.jpg";
import netflixImg from "../../public/assets/projects/netflix.jpg";
import twitchImg from "../../public/assets/projects/twitch.jpg";

import movieLand from "../../public/assets/projects/movie-land.png";
import barter from "../../public/assets/projects/Barter-app.png";
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
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          /> */}
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
