import { Link } from "react-router-dom"
import heroHome from "../images/hero-home.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // durasi animasi dalam ms
            once: true,     // animasi hanya dijalankan sekali
        });
    }, []);

    return (
        <div className="min-h-screen overflow-hidden flex flex-col justify-center items-center bg-gradient-to-r from-20% from-white to-gray-500 text-white p-5">
            <div className="flex flex-col lg:flex-row relative items-center gap-10 justify-evenly w-full">
                <div data-aos="fade-up">
                    <p className="text-blue-800 text-3xl font-bold mt-40 lg:mt-0">Selamat Datang</p>

                    <p className="text-3xl lg:text-5xl font-bold mt-10 text-gray-900 leading-snug">
                        Konsultasi Mudah, <br />
                        Rekam Medis Aman, <br />
                        Kesehatan Terjamin.
                    </p>

                    <div className="flex flex-col lg:flex-row items-center gap-5 mt-10">
                        <Link to={"/signUp"} className="block px-10 w-full text-center font-semibold cursor-pointer py-3 rounded-lg transition-all bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 bg-[length:200%_200%] animate-gradient-x hover:scale-[1.05] text-white">
                            Daftar Sekarang
                        </Link>

                        <Link to={"/signIn"} className="px-10 text-nowrap w-full py-3 border-2 cursor-pointer border-blue-800 hover:bg-blue-800 hover:text-white transition-all rounded-lg text-blue-800">Masuk Sebagai Tenaga Kesehatan</Link>
                    </div>
                </div>

                <img data-aos="fade-up" data-aos-delay="300" className="w-[80%] lg:w-[40%]" src={heroHome} alt="" />
            </div>
        </div>
    )
}

export default Home