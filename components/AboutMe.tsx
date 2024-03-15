"use client";

import React from "react";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  Calendar,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { title } from "process";

const infoData = [
  {
    icon: <User2 size={30} className="stroke-red-400" />,
    text: "Anh Duy Dao",
  },
  {
    icon: <PhoneCall size={30} className="stroke-red-400" />,
    text: "+49 14222328383",
  },
  {
    icon: <MailIcon size={30} className="stroke-red-400" />,
    text: "duydao1504@gmail.com",
  },
  {
    icon: <Calendar size={30} className="stroke-red-400" />,
    text: "Born on 15 April, 2000",
  },

  {
    icon: <HomeIcon size={30} className="stroke-red-400" />,
    text: "Freistattstr. 16, 45141 Essen",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Gymnasium Meerane",
        qualification: "Abitur",
        years: "2015 - 2019",
      },
      {
        university: "University Duisburg-Essen",
        qualification: "Bachelor of Science",
        years: "2019 - now",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Monday Rocks GMBH",
        role: "Werkstudent in Website-Entwicklung",
        years: "03/2021- 09/2023",
      },
      {
        company: "Startup Vietnam Foundation",
        role: "Praktikant in Website-Entwicklung",
        years: "08/2018-10/2020",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      { name: "HTML, CSS" },
      { name: "Front-end Development: Angular, Vuejs, React" },
      { name: "Java, Javascript, Typescript" },
      { name: "Back-end Development: nodejs, nextjs" },
    ],
  },
  {
    title: "tools",
    data: [{ imgPath: "/tools/figma.svg" }, { imgPath: "/tools/vscode.svg" }],
  },
];

const AboutMe2 = () => {
  const getData = (arr: any, title: any) => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:pb-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Images */}
          <div className="hidden xl:flex flex-1 relative">
            <Image
              src={"/about-image.png"}
              alt="about"
              width={505}
              height={505}
              className="bg-no-repeat relative rounded-full"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1 justify-evenly">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8 3">
                <TabsContent value="personal">
                  <div className=" text-center xl:text-left">
                    <h3 className="h3 mb-6">
                      Welcome to my personal corner of the web, where you can
                      learn more about me and my passions.
                    </h3>
                    <p className="max-w-xl mx-auto xl:mx-0">
                      My fascination with technology isn&apos;t just about
                      writing code; it&apos;s about leveraging it as a powerful
                      tool to empower others. I envision using my skills to
                      create platforms and applications that enable individuals
                      and organizations to connect with the world in meaningful
                      ways
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12 mt-4">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div>{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary text-red-400 ">
                        Language Skill
                      </div>
                      <div className="border-b border-border"></div>
                      <div>English, Deutsch, Vietnamese</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      {" "}
                      My Awesome Journey
                    </h3>
                    <div>
                      <div className="grid md:grid-cols-2 gap-y-8 justify-items-center">
                        <div className="flex flex-col gap-y-4">
                          <div className="flex gap-x-4 items-center text-[22px] text-red-400">
                            <Briefcase />
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, "experience").title}
                            </h4>
                          </div>
                          <div className="flex flex-col gap-y-4">
                            {getData(qualificationData, "experience").data.map(
                              (item: any, index: any) => {
                                const { company, role, years } = item;

                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    <div className="h-[84px] w-[1px] bg-red-300 relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-red-500 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {company}
                                      </div>
                                      <div className="text-lg text-muted leading-none mb-2">
                                        {role}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col gap-y-4">
                          <div className="flex gap-x-4 items-center text-[22px] text-red-400">
                            <GraduationCap size={28} />
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, "education").title}
                            </h4>
                          </div>
                          <div className="flex flex-col gap-y-4">
                            {getData(qualificationData, "education").data.map(
                              (item: any, index: any) => {
                                const { university, qualification, years } =
                                  item;

                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    <div className="h-[84px] w-[1px] bg-red-300 relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-red-500 absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {university}
                                      </div>
                                      <div className="text-lg text-muted leading-none mb-2">
                                        {qualification}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2 ">Skills </h4>
                      <div className="border-b border-border mb4"></div>
                      {/*skill list */}
                      <div>
                        {getData(skillsData, "skills").data.map(
                          (item: any, index: number) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 xl:w-full"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/*tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "tools").data.map(
                          (item: any, index: number) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  alt="tool"
                                  width={48}
                                  height={48}
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe2;
