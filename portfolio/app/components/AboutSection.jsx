"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        id: "skills",
        title: "Skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Django</li>
                <li>Pandas|Scikit|Matplotlib|Numpy</li>
                <li>Python</li>
                <li>Spring Boot</li>
                <li>Maven | JUnit</li>
                <li>Java</li>
                <li>Git|Github</li>
                <li>PostgreSQL</li>
            </ul>
        )
    },
    {
        id: "education",
        title: "Education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelor of Computer Science - University of Sao Paulo (2022 - Current)</li>
            </ul>
        )
    },
    {
        id: "experience",
        title: "Experience",
        content: (
            <ul>
                <li className="list-disc pl-2">Data Science and ML Engineering - USP (2024)</li>
                <p>
                        Modelling, training and evaluation of a regression machine learning model for the Faculty of Dentistry of Ribeirão Preto.
                        The project consisted of creating a machine learning model to automate facial prosthesis pigmentation.
                        The model was trained on a dataset containing research participant data.

                </p>
                <li className="list-disc pl-2" >Data Science and ML Engineering - USP (2023)</li>
                <p>
                    Modelling, training and evaluation of a classification machine learning model for the Department of Computation and Mathematics.
                    The project consisted of creating a machine learning model to classify movies by genre using movies' audio and video data.
                    The model was trained on a proprietary dataset containing public library movies of 4 different genres.
                </p>
            </ul>
        )
    },
];


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    
    return (
        <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/placeholder_aboutme.png" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">
                I am a Computer Science student with a major focus on data science, ML and AI technologies.
                I have experience working with Python (Django|Pandas|Scikit|Numpy|Matplotlib), PostgreSQL,
                Java (Spring Boot framework), and Git|Github. I'm also proficient in mathematical data analysis techniques,
                as well as many machine learning and AI modelling techniques.
            </p>
            <div className="flex flex-row justify-start mt-8">
                <TabButton selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}> 
                {" "}
                Skills{" "}
                </TabButton>
                <TabButton selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}> 
                {" "}
                Education{" "}
                </TabButton>
                <TabButton selectTab={() => handleTabChange("experience")} 
                            active={tab === "experience"}> 
                {" "}
                Experience{" "}
                </TabButton>
            </div>
            <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}
            </div>
            </div>
        </div>
        </section>
  );
};

export default AboutSection;
