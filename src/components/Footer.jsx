import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"

let Footer = () => {
    return (
        <footer className="footer text-white py-4 bottom-0 w-full flex justify-center">

            <div className="flex justify-center w-full space-x-16">
                <div className="justify-center">
                    <ul className="list-none flex flex-col items-start">
                        <li className="text-lg mb-2 flex items-center">
                            <MdEmail className="mr-2"/>
                            <a href="mailto:issisbta8@gmail.com" target="_blank" rel="noopener noreferrer">
                                <span>issisbta8@gmail.com</span>
                            </a>
                        </li>

                        <li className="text-lg mb-2 flex items-center">
                            <FaGithub className="mr-2"/>
                            <a href="https://github.com/izyVieira" target="_blank" rel="noopener noreferrer">
                                <span>github.com/izyVieira</span>
                            </a>
                        </li>

                        <li className="text-lg mb-2 flex items-center">
                            <FaLinkedin className="mr-2"/>
                            <a href="https://www.linkedin.com/in/isisvieira/" target="_blank" rel="noopener noreferrer">
                                <span>linkedin.com/in/isisvieira</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;
