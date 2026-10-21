"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-white text-black px-8 py-2 mt-10"
    >
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <Image
          src="/daniella.jpeg"
          alt="Daniella"
          width={256}
          height={256}
          className="rounded-sm object-cover border-4 md:h-96 w-96"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-12 text-center md:text-left">
        {" "}
        <h2 className="text-4xl font-bold mb-6 bg-black bg-clip-text text-transparent">
          {" "}
          ABOUT ME{" "}
        </h2>{" "}
        <p className="text-lg leading-relaxed mb-6">
          {" "}
          I'm a Full Stack Developer based in Lagos, building secure,
          user-focused web and mobile apps with React, Node.js and Spring Boot, plus mobile
          apps with Flutter.{" "}
        </p>{" "}
        <p className="text-lg leading-relaxed mb-6">
          {" "}
          I've built and deployed projects including a Java quiz platform with
          OTP email verification, an online voting system, an auction app and a
          smart home app. I've worked in teams of four to five, and I'm now
          adding AI features to my apps, starting with the AI assistant in
          HarvestHub. I'm open to junior developer, internship and contract
          roles where I can build impactful products with a strong engineering
          team.{" "}
        </p>{" "}
      </div>
    </section>
  );
}
