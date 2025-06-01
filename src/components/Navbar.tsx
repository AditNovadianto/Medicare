import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../images/logo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-transparent backdrop-blur-xl shadow-md p-5 z-20">
            <a href="#" className="curspor-pointer">
                <img src={logo} className="w-40" alt="logo" />
            </a>

            {/* Hamburger Button */}
            <button
                onClick={() => setIsSidebarOpen(true)}
                className="block lg:hidden z-30"
            >
                <Menu className={`${isSidebarOpen ? 'hidden' : 'block'} scale-[1.5] cursor-pointer`} />
            </button>

            {/* Sidebar */}
            <div
                className={`
                    fixed top-0 right-0 h-screen w-[80%] bg-[#E6F6FE] shadow-lg z-20
                    transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <div className="flex justify-end p-5">
                    <button onClick={() => setIsSidebarOpen(false)}>
                        <X className="scale-[1.5] cursor-pointer" />
                    </button>
                </div>

                <div className="flex flex-col gap-6 p-6 font-semibold text-gray-800">
                    <a href="#">Home</a>
                    <a href="#aboutus">About Us</a>
                    <a href="#feature">Feature</a>
                    <a href="#product">Product</a>
                    <a href="#clients">Clients</a>
                    <a href="#contactUs">Contact Us</a>

                    <Link to={"/signin"} className="border-2 border-blue-800 py-3 block px-5 rounded-lg text-center">Login</Link>

                    <Link to={"/signup"} className="bg-blue-800 px-7 py-3 rounded-lg text-white text-center">Join Us</Link>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex font-semibold gap-10 text-gray-900">
                <a href="#">Home</a>
                <a href="#aboutus">About Us</a>
                <a href="#feature">Feature</a>
                <a href="#product">Product</a>
                <a href="#clients">Clients</a>
                <a href="#contactUs">Contact Us</a>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex font-semibold text-blue-800 gap-5">
                <Link to={"/signin"} className="border-2 border-blue-800 hover:bg-blue-800 hover:text-white transition-all py-3 block px-5 rounded-lg">Login</Link>

                <Link to={"/signup"} className="bg-blue-800 hover:bg-blue-700 transition-all px-7 py-3 rounded-lg text-white">Join Us</Link>
            </div>
        </div>
    )
}

export default Navbar
