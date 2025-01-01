/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="w-full h-[620px] text-center pt-20">
      <div className="max-w-[1240px] w-full h-full  mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="text-sm tracking-widest text-gray-600">LET'S BUILD SOMETHING TOGETHER</p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Caleb</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Developer</h1>

          {/* <p className="text-md tracking-widest text-gray-600 max-w-[75%] m-auto">
            I specialize in building exceptional digital user experiences. Currently focused on building responsive
            front-end applications while learning back-end technologies.
          </p> */}
          <p className="text-md tracking-widest text-gray-600 max-w-[75%] m-auto">
            I specialize in creating seamless digital experiences with a focus on responsive front-end development,
            while expanding my skills in back-end technologies.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
            <a
              href="https://drive.google.com/file/d/1gLY6INPnwlKVlfqyq1ITHNu8PeNh2hyF/view?usp=sharing"
              target={"_blank"}
            >
              <div className="rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
            <a href="https://github.com/kewell0" target={"_blank"}>
              <div className="rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:Owatahcaleb@gmail.com" target="_blank">
              <div className="rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/caleb-owatah/" target={"_blank"}>
              <div className="rounded-full shadow-gray-400 shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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
