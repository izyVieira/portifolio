import React from "react";

let Experience = () => {
    
    return (
        <>
            <div className="mt-16">
                <div className="grid grid-cols-3 gap-3"> {/* Removi a classe col-span-2 */}

                    <div className="flex items-center justify-center w-24 h-24 flex-col"> {/* Adicionei a classe flex-col */}
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0"> {/* Adicionei as classes flex-1 e flex-shrink-0 */}
                            <img src="https://fontawesome.com/icons/html5?style=brands" alt="HTML5 icon"/>
                        </div>
                        <p className="text-white text-center text-xs p-1">HTML</p> 
                    </div>

                    <div className="flex items-center justify-center w-24 h-24 flex-col"> 
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0"> 
                            <img src="https://fontawesome.com/icons/css3-alt?style=brands" alt="CSS3 icon" />
                        </div>
                        <p className="text-white text-center mt-2">CSS</p>
                    </div>

                    <div className="flex items-center justify-center w-24 h-24 flex-col"> 
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0"> 
                            <img src="https://fontawesome.com/icons/react?style=brands" alt="React icon"  />
                        </div>
                        <p className="text-white text-center mt-2">React</p>
                    </div>

                    <div className="flex items-center justify-center w-24 h-24 flex-col"> 
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0"> 
                            <img src="https://fontawesome.com/icons/node-js?style=brands" alt="Node.js icon" />
                        </div>
                        <p className="text-white text-center mt-2">Node.js</p>
                    </div>

                    <div className="flex items-center justify-center w-24 h-24 flex-col"> 
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0"> 
                            <img src="https://fontawesome.com/icons/js-square?style=brands" alt="JavaScript icon" />
                        </div>
                        <p className="text-white text-center mt-2">JavaScript</p>
                    </div>

                    <div className="flex items-center justify-center w-24 h-24 flex-col"> 
                        <div className="rounded-full bg-purple-500 flex-1 flex-shrink-0"> 
                            <img src="https://fontawesome.com/icons/database?style=solid" alt="MongoDB icon" />
                        </div>
                        <p className="text-white text-center mt-2">MongoDB</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;
