import React from "react";
import { OrbitingCircles } from "./OrbitingCircles";
export function Frameworks() {
    const skills = [
        "java",
        "javascript",
        "css3",
        "git",
        "github",
        "mongodb",
        "mysql",
        "nodejs",
        "php",
        "react",
        "tailwindcss",
        "express",
        "html5",
    ];
    return (
        <div className="relative flex h-[15rem] w-full flex-col  items-center justify-center ">
            <OrbitingCircles iconSize={40}>
                {skills.map((skill, index) => (
                    <Icon key={index} src={`/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
            <OrbitingCircles
                iconSize={30}
                radius={100}
                reverse speed={2}>
                {skills.map((skill, index) => (
                    <Icon key={index} src={`/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" alt="icon" />
)
