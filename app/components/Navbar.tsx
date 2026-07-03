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
import logo1 from "../../public/assets/MyLogo.png";

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
          ? "fixed z-[900] h-20 w-full bg-[#ecf0f3] shadow-xl"
          : "fixed z-[900] h-20 w-full bg-[#ecf0f3]"
      }
    >
      <div className="flex h-full w-full items-center justify-between px-4 xl:px-16">
        <div className="relative -left-8 flex h-[80px] items-center sm:-left-0 sm:h-[90px]">
          <Image
            src={logo1}
            alt="logo"
            width={148}
            height={90}
            className="h-full w-auto cursor-pointer"
          />
        </div>
        <div>
          <ul className="mr-[70px] hidden sm:flex">
            <LinkScroll
              activeClass="active"
              to={"about"}
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-gray-300">
                About
              </li>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to={"skills"}
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-gray-300">
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
              <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-gray-300">
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
              <li className="ml-10 border-b-2 border-[#ecf0f3] text-sm uppercase hover:border-b-2 hover:border-gray-300">
                Contact
              </li>
            </LinkScroll>
          </ul>
        </div>
        {/* Hamburger */}
        <div onClick={handleNav} className="cursor-pointer sm:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        onClick={() => setNav(false)}
        className={
          nav
            ? "fixed left-0 top-0 min-h-full w-full bg-black/70 md:hidden"
            : ""
        }
      >
        <div
          className={
            nav
              ? "md:[45%] fixed left-0 top-0 h-full w-[75%] bg-[#ecf0f3] p-5 duration-500 ease-in sm:w-[60%] sm:p-10"
              : "fixed left-[-100%] top-0 p-5 duration-500 ease-in sm:p-10"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <LinkScroll
                activeClass="active"
                to={"home"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Image
                  src={logo1}
                  className="relative -left-6 cursor-pointer"
                  alt="logo"
                  width="90"
                  height="60"
                  onClick={() => setNav(false)}
                />
              </LinkScroll>
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-300"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[80%] py-4 md:w-[90%]">
                Let's build something together
              </p>
            </div>
          </div>
          {/* Mobile Menu items */}
          <div className="flex flex-col py-4">
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
              <div className="my-4 flex w-full items-center gap-5 sm:w-[75%] sm:gap-10">
                <Link
                  href="https://drive.google.com/file/d/1_dwSXivTj0S7EzVVEI_l9EWGWcQSnB6A/view?usp=sharing"
                  target="_blank"
                >
                  <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>

                <Link href="https://github.com/kewell0" target="_blank">
                  <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                    <FaGithub />
                  </div>
                </Link>

                <Link href="mailto:Owatahcaleb@gmail.com" target="_blank">
                  <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/caleb-owatah/"
                  target={"_blank"}
                >
                  <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
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
