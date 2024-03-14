"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  message: z.string(),
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setLoading(true);
      await axios.post(`/api/contact/`, data);
      router.push("/");
      router.refresh();
      toast.success("Email sended successfully.");
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="md:w-full flex flex-col gap-y-6"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="relative flex items-center">
        <User className="absolute right-6" size={20} />
        <Input
          type="name"
          id="name"
          placeholder="Name"
          {...form.register("name")}
        />
      </div>
      <div className="relative flex items-center">
        <MailIcon className="absolute right-6" size={20} />
        <Input
          type="email"
          id="email"
          placeholder="Email"
          {...form.register("email")}
        />
      </div>
      <div className="relative flex items-center">
        <MessageSquare className="absolute right-6 top-4" size={20} />
        <Textarea
          id="message"
          placeholder="Leave me a message"
          {...form.register("message")}
        />
      </div>
      <Button
        variant="default"
        className="bg-red-400 rounded-full flex items-center max-w-[166px] dark:bg-red-400"
        type="submit"
        disabled={loading}
      >
        Lets talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default ContactForm;
