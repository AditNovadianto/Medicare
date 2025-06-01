import { Facebook, Instagram, Twitter } from "lucide-react"
import erick from "../images/erick.jpeg"
import jacob from "../images/jacob.jpeg"
import julian from "../images/julian.jpeg"
import liana from "../images/liana.jpeg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const datas = [
    {
        images: erick,
        name: 'Erick Johnson',
        profession: 'Profession'
    },
    {
        images: jacob,
        name: 'Jacob Smith',
        profession: 'Profession'
    },
    {
        images: julian,
        name: 'Julian Brown',
        profession: 'Profession'
    },
    {
        images: liana,
        name: 'Liana White',
        profession: 'Profession'
    }
]

const OurTeam = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // durasi animasi dalam ms
            once: true,     // animasi hanya dijalankan sekali
        });
    }, []);

    return (
        <div className="px-5 lg:px-20 mt-32 mb-10">
            <div data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Team</h2>

                <p className='text-gray-500 text-xl font-semibold mt-10 text-center'>Di balik setiap solusi inovatif yang kami tawarkan, terdapat tim profesional berdedikasi yang ahli di bidangnya. Kami adalah kombinasi dari para developer, analis, dan tenaga kesehatan yang memiliki satu tujuan: menciptakan sistem terbaik untuk mendukung layanan kesehatan Anda. Bersama, kami bekerja untuk menjawab kebutuhan Anda dengan teknologi yang tepat dan layanan yang optimal.</p>
            </div>

            <div className="mt-10 flex items-center gap-5 flex-wrap md:flex-nowrap">
                {datas.map((data, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100} className="bg-white w-max rounded-lg overflow-hidden shadow-lg">
                        <img src={data.images} className="w-full md:max-w-[500px] h-[400px] md:h-[250px] object-cover" alt="" />

                        <div className="p-5 text-center font-semibold text-gray-800">
                            <p className="text-xl">{data.name}</p>

                            <p className="mt-5 text-gray-500">{data.profession}</p>

                            <div className="flex items-center gap-5 m-auto w-max mt-10">
                                <Facebook />

                                <Instagram />

                                <Twitter />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurTeam