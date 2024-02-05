import React from "react";
import {FaHtml5, FaCss3Alt, FaReact, FaNodeJs}  from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { BiLogoMongodb } from "react-icons/bi"

let Experience = () => {

    return (
        <div className="mt-16">
            
            <div className="flex items-center justify-center space-x-28 mb-8">
                <h1 className="text-white">Experiências</h1>
                <div className="grid grid-cols-3 space-y-"> 
                
                    <div className="flex items-center justify-center flex-col text-center">
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
                            <FaHtml5 size="2em" style={{ color: 'white' }} />
                        </div>

                        <p className="text-white text-xs mt-2">HTML</p>
                    </div>

                    <div className="flex items-center justify-center flex-col text-center">
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
                            <FaCss3Alt size="2em" style={{ color: 'white' }} />
                        </div>

                        <p className="text-white text-xs mt-2">CSS</p>
                    </div>

                    <div className="flex items-center justify-center flex-col" display="flex" justifyContent="center" alignItems="center"> 
                        <div className="rounded-full bg-fuchsia-500 flex-1 flex-shrink-0 align-items-center"> 
                            <FaReact size="2em"/>
                        </div>
                        <p className="text-white text-center text-xs p-1">React</p>
                    </div>

                    <div className="flex items-center justify-center flex-col" display="flex" justifyContent="center" alignItems="center"> 
                        <div className="rounded-full bg-fuchsia-500 flex-1 flex-shrink-0 align-items-center"> 
                            <FaNodeJs size="2em"/>
                        </div>
                        <p className="text-white text-center text-xs p-1">Node.js</p>
                    </div>

                    <div className="flex items-center justify-center flex-col" display="flex" justifyContent="center" alignItems="center"> 
                        <div className="rounded-full bg-fuchsia-500 flex-1 flex-shrink-0 align-items-center"> 
                            <IoLogoJavascript size="2em"/>
                        </div>
                        <p className="text-white text-center text-xs p-1">JavaScript</p>
                    </div>

                    <div className="flex items-center justify-center flex-col" display="flex" justifyContent="center" alignItems="center"> 
                        <div className="rounded-full bg-fuchsia-500 flex-1 flex-shrink-0 align-items-center"> 
                            <BiLogoMongodb size="2em"/>
                        </div>
                        <p className="text-white text-center text-xs p-1">MongoDB</p>
                    </div>
                </div>

                <div>
                    <div className="bg-gradient-to-r from-fuchsia-500 p-6 rounded-lg">
                        <p>Dual7 Teconologia em Sistemas</p>
                        <p><strong>2021 - Atual</strong></p>
                        <span>Desenvolvedora Pleno Full-Stack</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
