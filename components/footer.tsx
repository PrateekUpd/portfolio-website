import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">&copy; 2024 Prateek Upadhyay, All rights reserved.</small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> {" "}
        built with <a href="https://react.dev">React</a> &{" "}
        <a href="https://nextjs.org/">Next.js</a> (App router & Server Actions), {" "}
        <a href="https://www.typescriptlang.org">TypeScript</a>, {" "}
        <a href="https://tailwindcss.com">Tailwind CSS</a>,  {" "}
        <a href="https://framer.com/motion">Framer Motion</a>,  {" "}
        <a href="https://react.email">React Email</a> & <a href="https://resend.com">Resend</a>, {" "}
        deployed with <a href="https://vercel.com">Vercel</a>
      </p>
    </footer>
  );
}
