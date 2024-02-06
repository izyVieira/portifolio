'use client'
import React, { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";

let Experience = () => {

    let [descricaoAtiva, setDescricaoAtiva] = useState(null);

    let linguagens = [
        { nome: "HTML", descricao: 'teste', icone: <FaHtml5 size="2em" style={{ color: 'white' }} /> },
        { nome: "CSS",  descricao: 'teste2', icone: <FaCss3Alt size="2em" style={{ color: 'white' }} /> },
        { nome: "React",  descricao: 'teste3', icone: <FaReact size="2em" style={{ color: 'white' }} /> },
        { nome: "Node.js",  descricao: 'teste4', icone: <FaNodeJs size="2em" style={{ color: 'white' }} /> },
        { nome: "JavaScript",  descricao: 'teste5', icone: <IoLogoJavascript size="2em" style={{ color: 'white' }} /> },
        { nome: "MongoDB",  descricao: 'teste6', icone: <BiLogoMongodb size="2em" style={{ color: 'white' }} /> },
    ]

    return (
        <div className="mt-8 ">

            <div className="flex items-center justify-center">

                <div className="p-6 rounded-lg mt-10 " style={{ width: "65%" }}>

                    <h3 className="text-white text-3xl mb-4 ">Experiencia</h3>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">

                        <div className="flex flex-wrap  items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8 ">

                            <div className="grid grid-cols-3">
                                {linguagens.map((linguagem, index) => (
                                    <div key={index} className="flex items-center justify-center flex-col text-center"
                                        onMouseEnter={() => setDescricaoAtiva(index)}
                                        onMouseLeave={() => setDescricaoAtiva(null)}>
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
                                            }}
                                        >
                                            {linguagem.icone}
                                        </div>
                                        <p className="text-white text-xs mt-2">{linguagem.nome}</p>
                                    </div>
                                    
                                ))
                                
                                }
                            </div>
                            
                            <div className="me-8  space-between">
                                <div className="bg-gradient-to-r from-fuchsia-500 p-6 rounded-lg">
                                    <p>Dual7 Teconologia em Sistemas</p>
                                    <p><strong>2021 - Atual</strong></p>
                                    <span>Desenvolvedora Pleno Full-Stack</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Experience;
