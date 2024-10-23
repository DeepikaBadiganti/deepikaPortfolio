"use client";

import Image from "next/image";
import bg from "../../../../public/background/contact-bg.png";
import Form from "@/components/contact/Form";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid"; // Import your desired icon




export default function contact() {
 
  return (
    <div className="w-full min-h-[80vh] relative flex flex-col items-center justify-center">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="z-0 fixed w-full top-0 left-0 h-full object-cover object-center opacity-35"
      />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:*:w-3/4">
          <div className="flex items-center justify-center space-x-4">
            <ChatBubbleLeftRightIcon className="w-8 h-8 text-cyan-400" />{" "}
            {/* Add the icon */}
            <h1 className="text-cyan-400 font-semibold text-center text-3xl md:text-4xl capitalize">
              Let’s Connect
            </h1>
          </div>
          <p className="text-center font-light text-sm xs:text-base">
            I’m always open to new opportunities and collaborations. Feel free
            to reach out with any inquiries or just to say hello. Let's make
            something great together!
          </p>
        </div>
        <Form />
      </article>
    </div>
  );
}
