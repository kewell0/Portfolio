"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  tech: string;
  image: StaticImageData;
  link: string;
};

export default function Project({ title, tech, image, link }: Props) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-[260px] w-full overflow-hidden bg-gray-100">
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* soft overlay */}
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/[0.03]" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <p className="mt-1 text-sm text-gray-500">{tech}</p>

        <div className="mt-4 flex items-center gap-1 text-sm text-gray-600">
          View project
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.a>
  );
}
