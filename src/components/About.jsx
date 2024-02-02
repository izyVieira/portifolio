import react from "react";

let About = () => {
    return (
        <div 
            className="
                flex flex-col sm:flex-row flex-wrap space-x-4 sm:space-x-8 
                md:space-x-16 lg:space-x-28 xl:space-x-96 ml-2 sm:ml-4 
                md:ml-8 lg:ml-16 xl:ml-40 container-about">

            <div className="mb-8 m-4">
                <img src='public/foto2.jpg' alt="AAAAAAAAAAA" />
                <h1>TETSEEEE</h1>
            </div>

            <div>
                <h1 className="text-4xl sm:text-5xl">
                    Oie, eu sou a Isis
                </h1>

                <p className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-96" style={{fontSize: '20px'}}>
                    Sou desenvolvedora full-stack com 2 anos de
                    experiência usando React e NodeJS.
                </p>

                <button 
                    className="bg-purple-500 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded-full mt-2"
                    onClick={{}}>
                    Contate-me
                </button>

            </div>

        </div>
        
    )
}

export default About;
