import ContactForm from "@/components/ContactForm";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text illu */}
        <div className="grid sm:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24  sm:gap-y-8">
          <div className="flex flex-col mb-9">
            <div className="flex items-center gap-x-4 text-red-400 text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-red-400 "> </span>
              <div> Say Hello 👋</div>
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Work Together</h1>
            <p className="max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus at sequi repudiandae.
            </p>
          </div>
          <div className="flex justify-center flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
