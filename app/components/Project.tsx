"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  tech: string;
  image: StaticImageData;
  link: string;
  description: string;
};

export default function Project({
  title,
  tech,
  image,
  link,
  description,
}: Props) {
  return (
    <motion.div
      // href={link}
      // target="_blank"
      // rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-[180px] sm:h-[260px] w-full overflow-hidden bg-gray-100">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            priority
          />
        </motion.div>

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        {/* Tech stack */}
        <p className="mt-3 text-xs font-medium tracking-wide text-[#5651e5]">
          {tech}
        </p>

        {/* CTA */}
        <a  href={link}
      target="_blank"
      rel="noopener noreferrer" className="mt-auto w-fit pt-4 flex items-center gap-1 text-sm font-medium text-gray-700 transition group-hover:text-gray-900 animate-pulse">
          View project
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
}