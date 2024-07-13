"use client";
import React from "react";

import { Button } from "./ui/button";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ui/ProjectCard";
import { Project } from "@/type";

const projectData: Project[] = [
  {
    image: "/work/flamazone.png",
    category: "reactjs",
    name: "Flamazone",
    description:
      " is a sleek e-commerce app programmed using React and Next.js, offering a seamless shopping experience akin to Amazon.",
    link: "https://flamazone-sqk4.vercel.app/",
    github: "https://github.com/duydao154/flamazone",
  },
  {
    image: "/work/SocialApp.png",
    category: "MERN",
    name: "Sociopedia",
    description: "This is a social app for people to connect",
    link: "",
    github: "https://github.com/duydao154/Social-App",
  },
  {
    image: "/work/Uber.png",
    category: "React Native",
    name: "Uber Eats Clone",
    description: "This is a clone Application of Uber Eats",
    link: "",
    github: "https://github.com/duydao154/uber-clone",
  },

  {
    image: "/work/gym-management.jpg",
    category: "C#",
    name: "Gym Management",
    description: "This Software helps Manager to manage their gym",
    link: "",
    github: "https://github.com/duydao154/uber-clone",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 ">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">My Projects</h2>
          <p className="mb-8">
            Explore some of my latest projects and endeavors. From web
            development to creative ventures, dive into the work that fuels my
            passion and creativity.
          </p>
          {/* <Link href="/my-projects">
            <Button
              variant="default"
              className="bg-red-400 rounded-full dark:bg-red-400"
            >
              All Projects
            </Button>
          </Link>*/}
        </div>
        {/* slider */}

        <div className="xl:max-w-[900px] xl:absolute right-0 top-0 ">
          {/**/}
          <Swiper
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0.3).map((project: Project, index: number) => {
              return (
                <SwiperSlide key={index} className="relative">
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
