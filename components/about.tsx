"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {

  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After school, I decided to pursue my passion for programming {" "}
        and graduated with a degree in{" "}
        <span className="font-medium">Computer Science</span>. 
        In university, I was a member of a techinal club, where I
        learned <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is building {" "} 
        something new while using the latest tools and practices. 
        I <span className="underline">love</span> the
        feeling of creating a project from scratch. My core stack
        is{" "}
        <span className="font-medium">
          Angular, Spring Boot, and PostgreSQL
        </span>
        . I am also familiar with React, Next.js TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, working out, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to cook.
      </p>
    </motion.section>
  );
}
