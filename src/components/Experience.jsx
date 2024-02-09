import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const Experience = () => {
    const linguagens = [
        { nome: "HTML", icone: <FaHtml5 size="2em" />, porc: '65%' },
        { nome: "CSS", icone: <FaCss3Alt size="2em" />, porc: '55%' },
        { nome: "React", icone: <FaReact size="2em" />, porc: '70%' },
        { nome: "Next.js", icone: <TbBrandNextjs size="2em" />, porc: '75%' },
        { nome: "Node.js", icone: <FaNodeJs size="2em" />, porc: undefined },
        { nome: "JavaScript", icone: <IoLogoJavascript size="2em" />, porc: '80%' },
        { nome: "MongoDB", icone: <BiLogoMongodb size="2em" />, porc: '57%' },
        { nome: "Figma", icone: <FaFigma size="2em" />, porc: '48%' },
        { nome: "Tailwindcss", icone: <SiTailwindcss size="2em" />, porc: '40%' },
    ];

    return (
        <div className="mt-8 flex justify-center">
            <div className="border p-6 rounded-lg mx-auto md:mx-0 md:w-2/3 lg:w-1/2">
                <h3 className="text-white text-3xl mb-4">Experiencia</h3>
                <div className="flex flex-wrap justify-center md:justify-start">
                    {linguagens.map((linguagem, index) => (
                        <div key={index} className="flex items-center justify-center flex-col mr-8 mb-4">
                            <div className="rounded-full bg-fuchsia-500 w-16 h-16 flex items-center justify-center mb-2">
                                {linguagem.icone}
                            </div>
                            <p className="text-white text-xs">{linguagem.nome}</p>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-400 mt-4 pt-4">
                    {linguagens.map((linguagem, index) => (
                        linguagem.porc && (
                            <div  key={index} className="cor-detalhes mt-2 rounded-full">
                                <div className="cor-detalhes1 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" 
                                    style={{width: linguagem?.porc}}>
                                    {linguagem.nome} - {linguagem.porc}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;
