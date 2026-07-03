/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CV } from "../utils/links";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const iconContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, y: 16, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const TAGLINE = "LET'S BUILD SOMETHING TOGETHER";
// Icons stagger in starting at ~0.4s and take ~0.4s to finish;
// start typing shortly after that.
const TYPE_START_DELAY = 900; // ms
const TYPE_SPEED = 45; // ms per character

const Hero = () => {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    let typingInterval: ReturnType<typeof setInterval>;

    const startTimeout = setTimeout(() => {
      typingInterval = setInterval(() => {
        i += 1;
        setTyped(TAGLINE.slice(0, i));
        if (i >= TAGLINE.length) {
          clearInterval(typingInterval);
        }
      }, TYPE_SPEED);
    }, TYPE_START_DELAY);

    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(typingInterval);
      clearInterval(cursorBlink);
    };
  }, []);

  return (
    <div id="home" className="h-[620px] w-full pt-20 text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <motion.div variants={container} initial="hidden" animate="show">
          <p className="min-h-[20px] text-sm tracking-widest text-gray-600">
            {typed}
            <span
              className={`ml-[2px] inline-block w-[2px] ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            >
              |
            </span>
          </p>
          
          <motion.h1 variants={fadeUp} className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Caleb</span>
          </motion.h1>

          <motion.h1 variants={fadeUp} className="py-2 text-gray-700">
            A Front-End Developer
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-md m-auto max-w-[75%] tracking-widest text-gray-600"
          >
            I specialize in creating seamless digital experiences with a focus
            on responsive front-end development, while expanding my skills in
            back-end technologies.
          </motion.p>

          <motion.div
            variants={iconContainer}
            initial="hidden"
            animate="show"
            className="m-auto flex max-w-[330px] items-center justify-between py-6"
          >
            <motion.a
              variants={iconItem}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href={CV}
              target={"_blank"}
            >
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 transition-shadow duration-300 ease-in hover:shadow-xl">
                <BsFillPersonLinesFill />
              </div>
            </motion.a>

            <motion.a
              variants={iconItem}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/kewell0"
              target={"_blank"}
            >
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 transition-shadow duration-300 ease-in hover:shadow-xl">
                <FaGithub />
              </div>
            </motion.a>

            <motion.a
              variants={iconItem}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:Owatahcaleb@gmail.com"
              target="_blank"
            >
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 transition-shadow duration-300 ease-in hover:shadow-xl">
                <AiOutlineMail />
              </div>
            </motion.a>

            <motion.a
              variants={iconItem}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/caleb-owatah/"
              target={"_blank"}
            >
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 transition-shadow duration-300 ease-in hover:shadow-xl">
                <FaLinkedinIn />
              </div>
            </motion.a>
          </motion.div>

          
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;