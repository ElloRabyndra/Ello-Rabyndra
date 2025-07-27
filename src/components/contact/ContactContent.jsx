import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "./Schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ErrorMessage from "./ErrorMessage";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import AnimatedContent from "../ui/AnimatedContent";
const ContactContent = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const user_id = import.meta.env.VITE_USER_ID;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const template_params = {
      from_name: data.from_name,
      email: data.email,
      message: data.message,
    };
    try {
      const res = await emailjs.send(
        service_id,
        template_id,
        template_params,
        user_id
      );
      // const res;
      if (res.status === 200) {
        toast.success("Message sent successfully!", {
          className: "shadow-inner",
        });
        reset(); // reset
      } else {
        console.error("Email sending error:", res);
        toast.error("Failed to send message. Please try again.", {
          className: "shadow-inner",
        });
      }
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Something went wrong. Please try again later.", {
        className: "shadow-inner",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedContent
      distance={50}
      direction="vertical"
      reverse={false}
      duration={1}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0}
      delay={0.4}
    >
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="lg:max-w-5xl mx-auto"
      >
        <div className="flex flex-col gap-6 p-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              autoComplete="off"
              {...register("email")}
            />
            {errors.email && (
              <ErrorMessage ErrorMessage={errors.email.message} />
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="from_name">Name</Label>
            <Input
              type="name"
              id="from_name"
              placeholder="Your Name"
              autoComplete="off"
              {...register("from_name")}
            />
            {errors.from_name && (
              <ErrorMessage ErrorMessage={errors.from_name.message} />
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows="4"
              placeholder="Your message..."
              autoComplete="off"
              className="min-h-28"
              {...register("message")}
            ></Textarea>
            {errors.message && (
              <ErrorMessage ErrorMessage={errors.message.message} />
            )}
          </div>
          <Button className="text-white gray-gradient border flex items-center hover:shadow-inner transition-all duration-200 rounded-xl cursor-pointer">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </AnimatedContent>
  );
};

export default ContactContent;
