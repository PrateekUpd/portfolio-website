import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gatepassImg from "@/public/gatepass.png";
import recipebookImg from "@/public/recipebook.png"
import tictactoeImg from "@/public/tictactoe.png"
import bewebsiteImg from "@/public/bewebsite.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech Graduation",
    location: "Chennai, TN",
    description:
      "I graduated from SRM Chennai with a degree in Computer Science. I immediately found a job as a full stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Engineer",
    location: "Remote",
    description:
      "I worked as a full stack developer for 3 years at BONbLOC. My stack includes Angular, Java EE / Quarkus, TypeScript, Kendo UI, OpenAPI and Oracle DB.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Senior Software Engineer",
    location: "Remote",
    description:
      "I'm currently working as a Senior Software Engineer at BONbLOC. I'm also learning new technologies like React, Next.js, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Gate Pass",
    description:
      "I worked on a gate pass application for a company. It has features like user roles, gate pass creation, approval and printing.",
    tags: ["Angular", "Material", "MongoDB", "Node.js", "Mongoose", "JWT"],
    imageUrl: gatepassImg,
    appUrl: "",
  },
  {
    title: "Recipe Book",
    description:
      "An application to store and share recipes. It has features like recipe creation, editing, deleting and a shopping list",
    tags: ["Angular", "TypeScript", "Firebase Realtime Database", "Firebase Auth", "Bootstrap"],
    imageUrl: recipebookImg,
    appUrl: "https://recipe-book-67429.web.app/auth",
  },
  {
    title: "Business Excellence",
    description:
      "A simple static web application to inform employees about the importance of business excellence and the practices associated with it.",
    tags: ["Angular", "Typescript", "Material"],
    imageUrl: bewebsiteImg,
    appUrl: "https://prateekupd.github.io/be-website/",
  },
  {
    title: "Tic tac toe",
    description:
      "A simple tic tac toe game. The application can be downloaded as a Progressive Web Application(PWA).",
    tags: ["Angular", "Typescript", "Firebase hosting", "Nebular UI"],
    imageUrl: tictactoeImg,
    appUrl: "https://tic-tac-toe-d1165.web.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Java EE",
  "JPA",
  "OpenAPI",
  "Hibernate",
  "PostgreSQL",
  "Node.js",
  "Express",
  "Framer Motion",
] as const;