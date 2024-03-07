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
    image: "/work/3.png",
    category: "reactjs",
    name: "Some name web",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquam nesciunt nemo eligendi incidunt suscipit, doloremque perspiciatis? Et numquam iure ex aut quod id, minus nostrum mollitia veritatis minima officiis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "reactjs",
    name: "Some name web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis impedit laudantium eligendi sed commodi hic. Rem ipsam porro repellat corrupti. Rerum impedit ad veritatis blanditiis beatae. Expedita magni illum rerum.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Some name web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis impedit laudantium eligendi sed commodi hic. Rem ipsam porro repellat corrupti. Rerum impedit ad veritatis blanditiis beatae. Expedita magni illum rerum.",
    link: "/",
    github: "/",
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            eveniet quos aut reiciendis vero adipisci, molestiae eos possimus
            amet facilis nemo, quibusdam quidem, deleniti quisquam. Facilis
            officiis hic soluta tempora?
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
