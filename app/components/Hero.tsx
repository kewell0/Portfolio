/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CV } from "../utils/links";

const Hero = () => {
  return (
    <div id="home" className="h-[620px] w-full pt-20 text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <p className="text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Caleb</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Developer</h1>

          {/* <p className="text-md tracking-widest text-gray-600 max-w-[75%] m-auto">
            I specialize in building exceptional digital user experiences. Currently focused on building responsive
            front-end applications while learning back-end technologies.
          </p> */}
          <p className="text-md m-auto max-w-[75%] tracking-widest text-gray-600">
            I specialize in creating seamless digital experiences with a focus
            on responsive front-end development, while expanding my skills in
            back-end technologies.
          </p>

          <div className="m-auto flex max-w-[330px] items-center justify-between py-6">
            <a href={CV} target={"_blank"}>
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <BsFillPersonLinesFill />
              </div>
            </a>
            <a href="https://github.com/kewell0" target={"_blank"}>
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:Owatahcaleb@gmail.com" target="_blank">
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <AiOutlineMail />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/caleb-owatah/"
              target={"_blank"}
            >
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <FaLinkedinIn />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
