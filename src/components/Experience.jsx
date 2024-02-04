import React from "react";
import {FaHtml5}  from "react-icons/fa"

let Experience = () => {

    return (
        <div className="border
            flex flex-col sm:flex-row items-center sm:space-x-4
            md:space-x-8 lg:space-x-12 xl:space-x-40 ml-2 sm:ml-4 
            md:ml-8 lg:ml-16 xl:ml-40 container-about justify-center " style={{maxWidth: "65%"}}>
            <div className="flex items-center justify-center border space-x-24">
                <div className="grid grid-cols-3 gap-3 border ms-28"> 

                    <div className="flex items-center justify-center w-20% h-20% flex-col"> 
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0 border-radius-50% align-items-center"> {/* Adicionei as classes flex-1, flex-shrink-0, border-radius-50% e align-items-center */}
                            <FaHtml5/>
                        </div>
                        <p className="text-white text-center text-xs p-1">HTML</p> 
                    </div>

                    <div className="flex items-center justify-center w-20% h-20% flex-col"> 
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0 border-radius-50% align-items-center"> 
                            <img src="https://fontawesome.com/icons/css3-alt?style=brands" alt="CSS3 icon" />
                        </div>
                        <p className="text-white text-center text-xs p-1">CSS</p>
                    </div>

                    <div className="flex items-center justify-center w-20% h-20% flex-col"> 
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0 border-radius-50% align-items-center"> 
                            <img src="https://fontawesome.com/icons/react?style=brands" alt="React icon"  />
                        </div>
                        <p className="text-white text-center text-xs p-1">React</p>
                    </div>

                    <div className="flex items-center justify-center w-20% h-20% flex-col"> 
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0 border-radius-50% align-items-center"> 
                            <img src="https://fontawesome.com/icons/node-js?style=brands" alt="Node.js icon" />
                        </div>
                        <p className="text-white text-center text-xs p-1">Node.js</p>
                    </div>

                    <div className="flex items-center justify-center w-20% h-20% flex-col"> 
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0 border-radius-50% align-items-center"> 
                            <img src="https://fontawesome.com/icons/js-square?style=brands" alt="JavaScript icon" />
                        </div>
                        <p className="text-white text-center text-xs p-1">JavaScript</p>
                    </div>

                    <div className="flex items-center justify-center w-20% h-20% flex-col"> 
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0 border-radius-50% align-items-center"> 
                            <img src="https://fontawesome.com/icons/database?style=solid" alt="MongoDB icon" />
                        </div>
                        <p className="text-white text-center text-xs p-1">MongoDB</p>
                    </div>
                </div>

                <div>
                    <div className="rentagulo-degrade p-6 rounded-lg">
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
