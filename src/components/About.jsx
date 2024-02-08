import React from "react";
import Image from "next/image";
import foto2 from '../../public/foto2.jpg'
import foto1 from '../../public/foto1.jpg'

let About = () => {

    let linkWpp = "https://api.whatsapp.com/send?phone=5518996937347&text=Ola,%20achei%20seu%20portf%C3%B3lio%20interessante,%20podemos%20conversar?"
    
    return (
        <>
            <div 
                className="
                    flex flex-col sm:flex-row items-center sm:space-x-4 
                    md:space-x-8 lg:space-x-12 xl:space-x-40 ml-2 sm:ml-4 
                    md:ml-8 lg:ml-16 xl:ml-40 container-about justify-center">

                <div className="mb-4 sm:mb-0">
                    <Image className=" rounded-full"
                        src={foto2}
                        width='250'
                        height='250'
                    />
                </div>

                <div>
                    <h1 className="text-4xl sm:text-5xl">
                        Oie, eu sou Isis Vieira
                    </h1>

                    <p className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-96 mt-3" 
                        style={{
                            fontSize: '20px'
                        }}>
                        Sou desenvolvedora {/*full-stack*/} com 2 anos de
                        experiência usando React e NodeJS.
                    </p>
                    
                    <a href={linkWpp} target="_blank" rel="noopener noreferrer">
                        <button 
                            className="hover:bg-purple-950 text-white font-bold 
                                py-2 px-4 rounded-full mt-8"
                            style={{
                                background: '#A12AAB'
                            }}>
                            Contate-me
                        </button>
                    </a>
                    

                </div>

            </div>

            <div className="flex items-center justify-center">

                <div className="bg-black bg-opacity-50 p-6 rounded-lg mt-10" style={{ maxWidth: "65%" }}>

                    <h3 className="text-white text-3xl mb-4">Sobre mim</h3>

                    <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-12">

                       {/* { <div className="mb-4 sm:mb-0">
                            <Image className="rounded-full"
                                src={foto1}
                                width='250'
                                height='250'
                            />
                        </div>} */}

                        <div className="bg-gradient-to-r from-fuchsia-700 p-6 rounded-lg h-auto">
                            <p className="text-white">Especialização em Desenvolvimento Web:
                            Proficiência em front-end e back-end.
                            Tecnologias dominadas: Node.js, JavaScript, HTML/CSS, React, Next.js, MongoDB e MySQL.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </>
        
    )
}

export default About;
