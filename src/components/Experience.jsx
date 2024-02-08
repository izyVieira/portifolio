'use client'
import React, { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

let Experience = () => {

    let linguagens = [
        { nome: "HTML", icone: <FaHtml5 size="2em" />, porc: '65%'},
        { nome: "CSS", icone: <FaCss3Alt size="2em" />, porc: '55%' },
        { nome: "React", icone: <FaReact size="2em" />, porc: '70%' },
        { nome: "Next.js", icone: <TbBrandNextjs size="2em" />, porc: '75%' },
        { nome: "Node.js", icone: <FaNodeJs size="2em" />, porc: undefined },
        { nome: "JavaScript", icone: <IoLogoJavascript size="2em" />, porc: '80%' },
        { nome: "MongoDB", icone: <BiLogoMongodb size="2em" />, porc:'57%' },
        { nome: "Figma", icone: <FaFigma size="2em" />, porc: '48%'},
        { nome: "Tailwindcss", icone: <SiTailwindcss size="2em" />, porc: '40%' },
    ]

    

    return (
        <div className="mt-8 ">

            <div className="flex items-center justify-center">

                <div className="p-6 rounded-lg mt-10 " style={{ width: "65%" }}>

                    <h3 className="text-white text-3xl mb-4 ">Experiencia</h3>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">

                        <div className="border w-full flex flex-wrap  items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8 ">

                            <div className="grid grid-cols-3">
                                {linguagens.map((linguagem, index) => (
                                    <div key={index} className="flex items-center justify-center flex-col text-center">
                                        <div
                                            className="rounded-full bg-fuchsia-500 flex-shrink-0"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}>
                                                
                                            {linguagem.icone}
                                        </div>
                                        <p className="text-white text-xs mt-2">{linguagem.nome}</p>
                                    </div>
                                    
                                ))
                                
                                }
                            </div>

                            <div className='w-96 border'>

                                {linguagens.map((linguagem, index) => (
                                    linguagem.porc
                                    ?
                                    <div  key={index} className="cor-detalhes mt-2 rounded-full">
                                        <div className="cor-detalhes1 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" 
                                            style={{width: linguagem?.porc}}>
                                            {linguagem.nome} - {linguagem.porc}
                                        </div>
                                    </div>
                                    :
                                    <></>
                                ))}
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Experience;
