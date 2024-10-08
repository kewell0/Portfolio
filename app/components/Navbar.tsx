/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../../public/assets/logo1.png";

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
        <LinkScroll
          activeClass="active"
          to={"home"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Image
            src={logo}
            className="cursor-pointer"
            alt="logo"
            width="80"
            height="50"
          />
        </LinkScroll>
        <div>
          <ul className="hidden sm:flex mr-[70px]">
            
            <LinkScroll
              activeClass="active"
              to={"about"}
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase  hover:border-b-2  hover:border-gray-300 ">About</li>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to={"skills"}
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b-2  hover:border-gray-300 ">Skills</li>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to={"projects"}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b-2  hover:border-gray-300 ">
                Projects
              </li>
            </LinkScroll>
            {/* <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Resume</li>
            </Link> */}
            <LinkScroll
              activeClass="active"
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase border-b-2 border-[#ecf0f3]  hover:border-b-2 hover:border-gray-300 ">
                Contact
              </li>
            </LinkScroll>
          </ul>
          {/* Hamburger */}
          <div onClick={handleNav} className="sm:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        onClick={() => setNav(false)}
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full min-h-full bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-full bg-[#ecf0f3] p-5 sm:p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-5 sm:p-10  ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <LinkScroll
                activeClass="active"
                to={"home"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Image
                  src={logo}
                  className="cursor-pointer"
                  alt="logo"
                  width="70"
                  height="35"
                  onClick={() => setNav(false)}
                />
              </LinkScroll>
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
              {/* <LinkScroll
                activeClass="active"
                to={"home"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </LinkScroll> */}
              <LinkScroll
                activeClass="active"
                to={"about"}
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to={"skills"}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to={"projects"}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </LinkScroll>
              {/* <Link href={"/"}>
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Resume</li>
              </Link> */}
              <LinkScroll
                activeClass="active"
                to={"contact"}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </LinkScroll>
            </ul>
            <div className="mt-16">
              <p className="tracking-widest text-[#5651e5]">LET'S CONNECT</p>
              <div className="flex gap-5  sm:gap-10 items-center my-4 w-full sm:w-[75%]">
                <Link
                  href="https://drive.google.com/file/d/1_dwSXivTj0S7EzVVEI_l9EWGWcQSnB6A/view?usp=sharing"
                  target="_blank"
                >
                  <div className="rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>

                <Link href="https://github.com/kewell0" target="_blank">
                  <div className="rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>

                <Link href="mailto:Owatahcaleb@gmail.com" target="_blank">
                  <div className="rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/caleb-owatah/"
                  target={"_blank"}
                >
                  <div className="rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
