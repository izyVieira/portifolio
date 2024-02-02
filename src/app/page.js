import Image from "next/image";
import NavBar from '../components/NavBar'
import About from "@/components/About";

let Home = () => {
    return (
        <>
            <NavBar/>
            <div className="container">
                <div className="circle"></div>
                <About/>
                
            </div>
        </>
    )
}

export default Home;
