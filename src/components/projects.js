"use client";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "HarvestHub",
      tagline: "Agricultural Marketplace Application",
      stack: ["Flutter, Firebase, Provider"],
      highlights: [
        "Cross-platform marketplace connecting farmers and customers, with role-based access for customers, farmers, and admins",
        "Implemented Firebase authentication, plus product browsing, cart, wishlist, and order management using Provider state management",
        "Integrated an AI shopping assistant for customers",
      ],
      frontImage: "/hatvesthub.png",
      backImage: "/harvesthub2.png",
      demoLink: "https://harvest-hub-d7d24.web.app/",
      githubLink: "https://github.com/daniella-alagwu/HarvestHub",
    },
    {
      title: "JavaJolt",
      tagline: "Java quiz platform with OTP-verified accounts. Team of four.",
      stack: ["Spring Boot", "MySQL", "Docker"],
      highlights: [
        "OTP email verification, login and password reset",
        "Brevo API emails with dynamic HTML templates",
        "Randomised questions with instant answer validation",
      ],
      frontImage: "/javajolt.png",
      backImage: "/javajolt2.png",
      demoLink: "https://javajolt.onrender.com/",
      githubLink: "https://github.com/daniella-alagwu/JavaJolt",
    },
    {
      title: "WeVote",
      tagline: "Online voting system for transparent elections. Team of five.",
      stack: ["Java", "MySQL", "Docker"],
      highlights: [
        "Voter authentication with session-based verification",
        "Duplicate-vote prevention",
        "Email reminders for election deadlines",
      ],
      frontImage: "/wevote.png",
      backImage: "/wevote2.png",
      demoLink: "https://wevote-xceg.onrender.com/",
      githubLink: "https://github.com/daniella-alagwu/voting-system",
    },
    {
      title: "BidSpeed",
      tagline: "Online auction app for bidding on items.",
      stack: ["React", "Express.js", "JSON Schema"],

      highlights: [
        "Browse auction items and place bids",
        "Express API with JSON Schema request validation",
      ],
      frontImage: "/bidspeed2.png",
      backImage: "/bidspeed.png",
      demoLink: "https://bidspeed-auctions.vercel.app/",
      githubLink: "https://github.com/daniella-alagwu/BidSpeed",
    },
    {
      title: "HomFlow",
      tagline: "Smart home app to control and monitor connected devices.",
      stack: ["Flask", "Python", "SQLite"],
      highlights: [
        "Remote control and monitoring of devices from one interface",
        "Integrates multiple smart TV brands",
      ],
      frontImage: "/homflow.png",
      backImage: "/homflow2.png",
      demoLink: "https://homflow.onrender.com/",
      githubLink: "https://github.com/daniella-alagwu/HomFlow",
    },
  ].filter((project) => !project.draft);

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8 bg-white" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group">
              {/* Flip Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-xl shadow-lg border border-gray-200 cursor-pointer">
                <img
                  src={project.frontImage}
                  alt={`${project.title} front`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:rotate-y-180 group-hover:scale-95 backface-hidden"
                />
                <img
                  src={project.backImage}
                  alt={`${project.title} back`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] rotate-y-180 group-hover:rotate-y-0 group-hover:scale-95 backface-hidden"
                />
              </div>

              {/* Title and tagline */}
              <p className="text-black font-bold text-xl md:text-2xl text-center mt-4">
                {project.title}
              </p>
              <p className="text-gray-500 text-sm text-center mt-2">
                {project.tagline}
              </p>

              {/* Stack chips */}
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="mt-3 list-disc space-y-1 pl-5 text-left text-sm text-gray-600">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              {/* Links */}
              <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--blue)] hover:text-[var(--green)] underline underline-offset-4 transition-colors duration-300"
                  >
                    View Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-[var(--pink-dark)] underline underline-offset-4 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
