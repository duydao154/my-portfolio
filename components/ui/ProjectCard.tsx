import { Project } from "@/type";
import React from "react";

import { Card, CardHeader } from "@/components/ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./badge";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className=" mt-4 mb-4 group overflow-hidden relative ">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertirary dark:bg-secondary/40 xl:bg-inherit ">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            alt={project.name}
            width={247}
            height={250}
            priority
          />
          <div className="flex gap-x-5">
            {project.link !== "" && (
              <Link target="_blank" href={project.link}>
                <Link2Icon className="bg-slate-950 w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 text-white " />
              </Link>
            )}
            {project.github !== "" && (
              <Link target="_blank" href={project.github}>
                <Github className="bg-slate-950 w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 text-white " />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
