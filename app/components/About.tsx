"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import CalebImg from "../../public/assets/calebO.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-12 lg:px-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile-responsive applications that seamlessly connect with backend technologies
            via APIs. Proficient in HTML, CSS, JavaScript, React, Next.js and ReactNative, I adapt quickly to new tech
            stacks to deliver efficient solutions tailored to project requirements. With a keen eye for design and a
            commitment to staying updated, I strive to exceed user expectations and drive business success.
          </p>
          {/* <p className="py-2 text-gray-600">
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p> */}
          <LinkScroll activeClass="active" to={"projects"} spy={true} smooth={true} offset={-50} duration={500}>
            <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
          </LinkScroll>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={CalebImg} className="rounded-xl" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default About;
