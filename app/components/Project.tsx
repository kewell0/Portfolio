import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  backgroundImg: any;
  tech: string;
  projectUrl: any;
};

const Project = ({ title, backgroundImg, tech, projectUrl }: Props) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] z-[3]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="image"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl} target="_blank">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Project;
