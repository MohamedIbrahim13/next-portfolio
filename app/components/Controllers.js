"use client";
import Link from "next/link";
import { useState } from "react";

export default function Controllers() {
  const paths = [
    { path: "/", icon: "fas fa-home", id: "home" },
    { path: "projects", icon: "fas fa-laptop-code", id: "projects" },
    {
      path: "skills-experience",
      icon: "fas fa-briefcase",
      id: "skills-experience",
    },
    { path: "blog", icon: "far fa-newspaper", id: "blogs" },
    { path: "contact", icon: "fas fa-envelope-open", id: "contact" },
  ];
  const [active, setActive] = useState(null);
  const handleActive = idx => {
    setActive(idx);
  };

  return (
    <div className="controlls">
      {paths.map((path, index) => {
        return (
          <Link
            className={`control control-1 ${
              active === index ? "active-btn" : ""
            }`}
            href={path.path}
            data-id={path.id}
            onClick={() => handleActive(index)}
            key={index}
          >
            <i className={path.icon}></i>
          </Link>
        );
      })}
    </div>
  );
}
