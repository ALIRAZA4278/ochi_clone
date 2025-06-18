import { AiFillCloseSquare, AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ["Services", "Our Work", "About us", "Insights"];

    return (
   <div className='fixed z-50 w-full py-8 flex justify-between items-center font-["Neue_Montreal"] md:px-20 px-4 bg-zinc-900/50 backdrop-blur-md'>


            {/* Logo */}
            <div className="text-white ">
              <img src="Logo.svg" alt="" />
            </div>

            {/* Desktop Links */}
            <div className="Links hidden md:flex 2xl:gap-10 gap-5">
                {navLinks.map((item, index) => (
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="font-['Neue_Montreal'] link block text-lg font-light capitalize">
                        {item}
                    </a>
                ))}
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden flex gap-5">
                <AiOutlineMenuFold className='text-3xl' onClick={() => setIsMenuOpen(true)} />
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute font-['Neue_Montreal'] top-0 left-0 bottom-0 bg-zinc-900 h-screen w-screen text-center flex flex-col justify-center z-50">
                    {[...navLinks, "Contact Us"].map((item, index) => (
                        <a
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            key={index}
                            className="font-['Neue_Montreal'] link text-2xl pb-6 font-light capitalize"
                        >
                            {item}
                        </a>
                    ))}
                    <div className="absolute top-5 left-[95%]">
                        <AiFillCloseSquare className="text-3xl" onClick={() => setIsMenuOpen(false)} />
                    </div>
                </div>
            )}

            {/* Desktop Contact Us */}
            <div className="md:flex hidden link text-lg font-light capitalize font-['Neue_Montreal']">Contact Us</div>
        </div>
    );
};

export default Header;
