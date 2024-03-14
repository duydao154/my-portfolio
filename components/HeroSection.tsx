import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-24 xl:py-24 h-[90vh] xl:pt28 flex md:items-center">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:ml-0 xl:text-left gap-y-7 ">
            <h1 className="h1">Hello I&apos;m Duy</h1>
            <p className="text-primary text-sm uppercase font-semibold lg:text-xl sm:text-lg">
              I&apos;m a dedicated university student with a deep-seated passion
              for web and software development. Throughout my academic journey,
              I&apos;ve delved into the intricacies of programming languages,
              design principles, and emerging technologies, driven by a desire
              to make a meaningful impact.
            </p>
            <div className="flex items-start gap-x-3 xl:mx-0 mb-12">
              <Link href="/contact">
                <Button
                  variant="default"
                  className="bg-red-400 dark:bg-red-400"
                >
                  Contact Me
                  <Send className="h-4 w-4 ml-1" />{" "}
                </Button>
              </Link>
              <Button variant="secondary">
                Download CV
                <Download className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
          <div className="hidden xl:flex relative">
            <div className="bg-blob_light dark:bg-blob_dark w-[550px] h-[500px] bg-no-repeat absolute -top-1/3 -right-1/2 bg-bottom">
              <Image
                src="/person.png"
                alt="image"
                width={400}
                height={400}
                className="absolute transform -translate-x-1/2 -translate-y-1/3 top-1/2 left-1/2 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
