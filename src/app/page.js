import Image from "next/image";
import NavBar from '../components/NavBar'
import About from "@/components/About";

let Home = () => {
    return (
        <>
            <NavBar/>
            <div className="container">
                <div className="circle"></div>
                <div className="text-over-circle border w-100">
                    <About></About>
                </div>
            </div>
        </>
    )
}

export default Home;
