"use client";

import React, { useState, useRef } from "react";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../../public/assets/contact.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CV } from "../utils/links";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    };

    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9+()\-\s]{7,20}$/.test(phone)) {
      newErrors.phone = "Enter a valid phone number";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const service_ID = "service_k4x1cph";
    const template_ID = "template_ciobmdd";
    const public_key = "PD92TtfFHhRLAIyZl";

    try {
      await emailjs.sendForm(
        service_ID,
        template_ID,
        e.currentTarget,
        public_key,
      );

      toast.success("Message sent successfully!");

      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");

      setErrors({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen lg:px-16">
      <div className="m-auto w-full max-w-[1240px] px-2 py-16">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="col-span-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  className="rounded-xl duration-300 ease-in hover:scale-105"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Caleb Owatah</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect With Me</p>
                <div className="flex items-center gap-6 py-4">
                  <Link href={CV} target={"_blank"}>
                    <>
                      <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                        <BsFillPersonLinesFill />
                      </div>
                    </>
                  </Link>
                  <Link href="https://github.com/kewell0" target="_blank">
                    <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      <FaGithub />
                    </div>
                  </Link>

                  <a href="mailto:Owatahcaleb@gmail.com" target="_blank">
                    <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <Link
                    href="https://www.linkedin.com/in/caleb-owatah/"
                    target={"_blank"}
                  >
                    <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
            <div className="p-4">
              <form
                // ref={form}
                onSubmit={sendEmail}
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className={`flex rounded-lg border-2 p-3 ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrors((prev) => ({ ...prev, name: "" }));
                      }}
                    />

                    {errors.name && (
                      <span className="mt-1 text-sm text-red-500">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className={`flex rounded-lg border-2 p-3 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setErrors((prev) => ({ ...prev, phone: "" }));
                      }}
                    />

                    {errors.phone && (
                      <span className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className={`flex rounded-lg border-2 p-3 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }}
                  />

                  {errors.email && (
                    <span className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className={`flex rounded-lg border-2 p-3 ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      setErrors((prev) => ({ ...prev, subject: "" }));
                    }}
                  />

                  {errors.subject && (
                    <span className="mt-1 text-sm text-red-500">
                      {errors.subject}
                    </span>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className={`rounded-lg border-2 p-3 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setErrors((prev) => ({ ...prev, message: "" }));
                    }}
                  />

                  {errors.message && (
                    <span className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#5651e5] p-4 text-gray-100 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg
                        className="mr-2 h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <LinkScroll
            to={"home"}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <>
              <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </>
          </LinkScroll>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Contact;
