"use client";
import React from "react";
import Image from "next/image";
import Html from "../../public/assets/skills/html.png";
import Css from "../../public/assets/skills/css.png";
import Javascript from "../../public/assets/skills/javascript.png";
import ReactImg from "../../public/assets/skills/react.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import Github from "../../public/assets/skills/github1.png";
import Firebase from "../../public/assets/skills/firebase.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import Typescript from "../../public/assets/skills/typescript.svg";
// import ReactNative from "../../public/assets/skills/react-native.png";
import NodeJS from "../../public/assets/skills/NodeJs.png";
import AWS from "../../public/assets/skills/aws.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  const skills = [
    { name: "HTML", image: Html },
    { name: "CSS", image: Css },
    {
      name: isSmallScreen ? "JS" : "JavaScript",
      image: Javascript,
      width: 58,
      height: 58,
    },
    { name: isSmallScreen ? "TS" : "TypeScript", image: Typescript },
    { name: "React", image: ReactImg },
    { name: "React Native", image: ReactImg },
    { name: "Tailwind", image: Tailwind },
    { name: "Firebase", image: Firebase },
    { name: "Github", image: Github },
    { name: "Next.js", image: NextJS },
    {
      name: "Node.js",
      image: NodeJS,
      width: 64,
      height: 84,
    },
    { name: "AWS", image: AWS },
  ];

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 409);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div id="skills" className="w-full p-4 lg:h-screen">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center lg:px-16">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        {/* Cards container */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              key={skill.name}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/20"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-cyan-500/20 opacity-0 transition-all duration-500 group-hover:opacity-100" />

              {/* Content */}
              <motion.div
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  y: -4,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="relative flex flex-col items-center gap-4"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />

                <p className="text-sm font-medium text-gray-700">
                  {skill.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

// text-[#5651e5]
