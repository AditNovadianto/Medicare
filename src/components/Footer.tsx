import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="w-full p-5 md:p-20 flex flex-col md:flex-row items-start justify-between gap-10">
                <div className="flex justify-between md:justify-around w-full gap-10">
                    <div>
                        <p className="font-semibold text-black">Company Info</p>

                        <div className="mt-10 text-gray-500 font-semibold flex flex-col gap-5">
                            <Link to={"/"}>About Us</Link>
                            <Link to={"/"}>Carrier</Link>
                            <Link to={"/"}>We are hiring</Link>
                            <Link to={"/"}>Blog</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-black">Legal</p>

                        <div className="mt-10 text-gray-500 font-semibold flex flex-col gap-5">
                            <Link to={"/"}>About Us</Link>
                            <Link to={"/"}>Carrier</Link>
                            <Link to={"/"}>We are hiring</Link>
                            <Link to={"/"}>Blog</Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between md:justify-around w-full mt-10 md:mt-0 gap-10">
                    <div>
                        <p className="font-semibold text-black">Features</p>

                        <div className="mt-10 text-gray-500 font-semibold flex flex-col gap-5">
                            <Link to={"/"}>Business Marketing</Link>
                            <Link to={"/"}>User Analytic</Link>
                            <Link to={"/"}>Live Chat</Link>
                            <Link to={"/"}>Unlimited Support</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-black">Resourches</p>

                        <div className="mt-10 text-gray-500 font-semibold flex flex-col gap-5">
                            <Link to={"/"}>IOS & Andorid</Link>
                            <Link to={"/"}>Watch a Demo</Link>
                            <Link to={"/"}>Customers</Link>
                            <Link to={"/"}>API</Link>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-10 md:mt-0">
                    <p className="font-semibold text-black">Get In Touch</p>

                    <div className="mt-10 text-gray-500 font-semibold flex flex-col gap-5">
                        <div className="flex items-center gap-2">
                            <Phone className="min-w-max text-blue-500" />

                            <p>(+62) 85938158151</p>
                        </div>

                        <div className="flex items-start gap-2">
                            <MapPin className="min-w-max text-blue-500" />

                            <p className="text-wrap">Bakrie Tower, Jl. Epicentrum Utama Raya No.2 40 42rd Floor, RT.2/RW.5, Kuningan, Karet, Kecamatan Setiabudi, Kuningan, Daerah Khusus Ibukota Jakarta 12940</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Mail className="min-w-max text-blue-500" />

                            <p>medicare@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-100 px-5 py-10 md:py-10 md:px-20 flex flex-col gap-10 md:flex-row items-center justify-between">
                <p className="text-center font-semibold">Made With ❤️ By Medicare+ All Right Reserved</p>

                <div className="text-blue-500 flex items-center gap-5">
                    <Link to={"/"}><Facebook /></Link>
                    <Link to={"/"}><Instagram /></Link>
                    <Link to={"/"}><Twitter /></Link>
                </div>
            </div>
        </>
    )
}

export default Footer