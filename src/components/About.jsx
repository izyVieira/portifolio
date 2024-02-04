import React from "react";
import Image from "next/image";
import foto2 from '../../public/foto2.jpg'

let About = () => {

    return (
        <>
            <div 
                className=" border
                    flex flex-col sm:flex-row items-center sm:space-x-4 // Adicionei items-center aqui
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
                        Oie, eu sou a Isis
                    </h1>

                    <p className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-96 mt-3" 
                        style={{
                            fontSize: '20px'
                        }}>
                        Sou desenvolvedora full-stack com 2 anos de
                        experiência usando React e NodeJS.
                    </p>

                    <button 
                        className="
                            bg-purple-500 hover:bg-purple-950 text-white font-bold 
                            py-2 px-4 rounded-full mt-8"
                        onClick={{}}>
                        Contate-me
                    </button>

                </div>

            </div>

            <div className="flex items-center justify-center border"> 
                <div className="bg-black bg-opacity-50 p-6 rounded-lg  mt-10" 
                    style={{maxWidth: "65%"}}>
                    <h3 className="text-white text-3xl mb-4">Sobre mim</h3>
                    <p className="text-white">
                        Sou uma desenvolvedora web especializada em tecnologias de front-end e back-end, 
                        como Node.js, JavaScript, HTML/CSS, React, Next.js, MongoDB e MySQL. 
                        Busco soluções criativas e de qualidade para os desafios do desenvolvimento de software. 
                        Sou um especialista em desenvolvimento web comprometido e versátil, pronto para contribuir para o sucesso 
                        do seu projeto. Entre em contato para saber como posso impulsionar seus resultados com soluções de software 
                        eficientes e confiáveis.
                    </p>
                </div>
            </div>

        </>
        
    )
}

export default About;
