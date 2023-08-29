/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [boxShadow, setBoxShadow] = useState(false);

  useEffect(() => {
    const handleBoxshadow = () => {
      if (window.scrollY >= 60) {
        setBoxShadow(true);
      } else {
        setBoxShadow(false);
      }
    };

    window.addEventListener("scroll", handleBoxshadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
    console.log("clicked");
  };

  return (
    <nav
      className={
        boxShadow
          ? "fixed w-full h-20 shadow-xl z-[900] bg-[#ecf0f3]"
          : "fixed w-full h-20  z-[900] bg-[#ecf0f3]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Image
          src="/../public/assets/navLogo.png"
          alt="logo"
          width="80"
          height="50"
        />
        <div>
          <ul className="hidden sm:flex mr-[70px]">
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href={"/#about"}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href={"/#skills"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href={"/#projects"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            {/* <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Resume</li>
            </Link> */}
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          {/* Hamburger */}
          <div onClick={handleNav} className="sm:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Image
                src="/../public/assets/navLogo.png"
                alt="logo"
                width="70"
                height="35"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-gray-300 shadow-lg p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[80%] md:w-[90%] py-4">
                Let's build something together
              </p>
            </div>
          </div>
          {/* Mobile Menu items */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href={"/"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href={"/"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href={"/"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href={"/"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              {/* <Link href={"/"}>
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Resume</li>
              </Link> */}
              <Link href={"/"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="tracking-widest text-[#5651e5]">LET'S CONNECT</p>
              <div className="flex justify-between items-center my-4 w-full sm:w-[75%]">
                <div className="rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
