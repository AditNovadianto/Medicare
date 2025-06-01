import heroAboutUs from "../images/hero-abous-us.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // durasi animasi dalam ms
            once: true,     // animasi hanya dijalankan sekali
        });
    }, []);

    return (
        <div id="aboutus" className="py-10 px-5 lg:px-20 min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col lg:flex-row items-center gap-10 justify-evenly w-full">
                <div data-aos="fade-up">
                    <p className="text-3xl font-bold text-gray-900">Tentang Kami</p>

                    <p className="text-gray-500 text-xl font-semibold mt-10">MediCare+ adalah sebuah platform layanan kesehatan digital yang dirancang untuk menghadirkan solusi cerdas dalam mengakses layanan kesehatan di era modern. Kami menghubungkan pasien dengan tenaga medis profesional melalui sistem yang aman, cepat, dan terintegrasi. <br /> <br /> Kami Memberikan kemudah berupa:</p>

                    <div>
                        <ul className="list-disc list-inside mt-5 text-gray-500 font-semibold text-xl">
                            <li>Konsultasi kesehatan secara online.</li>
                            <li>Pencatatan rekam medis elektronik.</li>
                            <li>Sinkronisasi data antar fasilitas kesehatan.</li>
                            <li>Dan manajemen resep yang efisien.</li>
                        </ul>
                    </div>

                    <p className="mt-5 text-gray-500 font-semibold text-xl">Kami percaya bahwa teknologi dapat menjadi jembatan untuk meningkatkan kualitas layanan kesehatan bagi semua orang, kapan saja dan di mana saja.</p>
                </div>

                <img data-aos="fade-up" data-aos-delay="300" src={heroAboutUs} alt="" />
            </div>
        </div>
    )
}

export default AboutUs