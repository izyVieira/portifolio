import React from "react";
import { FaGithub } from "react-icons/fa";

let Footer = () => {
    return (
        <footer className="footer text-white py-4 fixed bottom-0 w-full flex justify-center space-y-4">

            <h2>Contate-me</h2>
            <ul className="list-none flex justify-center space-y-4">
                <li>
                    <a href="https://www.linkedin.com/in/seu-nome" 
                        target="_blank" 
                        className="hover:text-gray-300 transition duration-300">
                        <FaGithub/>
                    </a>
                </li>
                
                <li>
                    <a href="https://www.linkedin.com/in/seu-nome" 
                        target="_blank" 
                        className="hover:text-gray-300 transition duration-300">
                        <FaGithub/>
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/seu-nome" 
                        target="_blank" 
                        className="hover:text-gray-300 transition duration-300">
                        <FaGithub/>
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/seu-nome" 
                        target="_blank" 
                        className="hover:text-gray-300 transition duration-300">
                        <FaGithub/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
