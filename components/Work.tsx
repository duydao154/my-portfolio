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
    image: "/work/work1.png",
    category: "reactjs",
    name: "Flamazone",
    description:
      " is a sleek e-commerce app programmed using React and Next.js, offering a seamless shopping experience akin to Amazon. Browse an extensive range of products, enjoy personalized recommendations, and shop securely with PrimePlace.",
    link: "https://flamazone-sqk4.vercel.app/",
    github: "https://github.com/duydao154/flamazone",
  },
  {
    image: "/work/4.png",
    category: "DEMO",
    name: "This is a demo Project Card",
    description: "The project will comme soon",
    link: "",
    github: "",
  },
  {
    image: "/work/1.png",
    category: "DEMO",
    name: "This is a demo Project Card",
    description: "The project will comme soon",
    link: "",
    github: "",
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
