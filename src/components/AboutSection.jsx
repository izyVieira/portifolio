"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";

let AboutSection = () => {

    let linguagens = [
        { nome: "HTML",  porc: '65%' },
        { nome: "CSS", porc: '55%' },
        { nome: "React", porc: '70%' },
        { nome: "Next.js", porc: '75%' },
        { nome: "Node.js",  porc: undefined },
        { nome: "JavaScript",  porc: '80%' },
        { nome: "MongoDB",  porc: '57%' },
        { nome: "Figma",  porc: '48%' },
        { nome: "Tailwindcss",  porc: '40%' },
    ];

    let TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
                content: (
                    <>
                        <ul className="list-disc pl-2">
                            {linguagens.map((linguagem, index) => (
                                <div key={index} className="">
                                    <li>{linguagem.nome}</li>
                                </div>
                            ))}
                        </ul>
                        <div className="border-t border-gray-400 mt-4 pt-4">
                            {linguagens.map((linguagem, index) => (
                                linguagem.porc && (
                                    <div  key={index} className="mt-2 bg-gray-600 rounded-full">
                                        <div className="text-xs font-medium bg-purple-600 text-center p-0.5 leading-none rounded-full" 
                                            style={{width: linguagem?.porc}}>
                                            {linguagem.nome} - {linguagem.porc}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </>
                    
                ),
        },
        {
            title: "Education",
            id: "education",
            content: (
            <ul className="list-disc pl-2">
                <li>IFSP - Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus Birigui</li>
            </ul>
            ),
        },
    ];

    let [tab, setTab] = useState("skills");
    let [isPending, startTransition] = useTransition();

    let handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

                <Image 
                    src="/images/imgfoto.jpg" 
                    width={500} 
                    height={200} 
                />

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

                    <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>

                    <p className="text-base lg:text-lg">
                        Especialização em Desenvolvimento Web: Proficiência em front-end e back-end. 
                        Tecnologias dominadas: Node.js, JavaScript, HTML/CSS, React, Next.js, MongoDB e MySQL.
                    </p>
                    
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                            >
                            {" "}
                            Skills{" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                            >
                            {" "}
                            Education{" "}
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
