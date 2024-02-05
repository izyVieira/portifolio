import Image from "next/image";
import NavBar from '../components/NavBar'
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

let Home = () => {
    return (
        <>
            <NavBar/>
                <div className="flex items-center justify-center"> 
                    <div className="container border" style={{maxWidth: "80%", margin: "auto"}}> 
                        <div className="circle"></div>
                        <About/>
                        <Experience/>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Home;
