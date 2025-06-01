import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Swiper as SwiperType } from 'swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'

import thomas from "../images/thomas.png"
import alena from "../images/alena.png"
import edison from "../images/edison.png"
import jacelyn from "../images/jacelyn.jpg"
import lana from "../images/lana.jpeg"
import john from "../images/john.jpeg"

const datas = [
    { image: thomas, name: 'Thomas Daniel', totalStar: 5, description: "Exceptional service and friendly staff. Highly recommended!" },
    { image: alena, name: 'Alena Alex', totalStar: 5, description: "A wonderful experience from start to finish." },
    { image: edison, name: 'Thomas Edison', totalStar: 5, description: "Professional, efficient, and caring. Will use again." },
    { image: jacelyn, name: 'Jacelyn Smith', totalStar: 5, description: "Truly exceeded my expectations in every way." },
    { image: lana, name: 'Lana Del Rey', totalStar: 5, description: "The team was attentive and very knowledgeable." },
    { image: john, name: 'John Doe', totalStar: 5, description: "I felt valued and well taken care of throughout." },
]

const Clients = () => {
    const prevRef = useRef<HTMLButtonElement | null>(null)
    const nextRef = useRef<HTMLButtonElement | null>(null)
    const swiperRef = useRef<SwiperType | null>(null)

    useEffect(() => {
        AOS.init({
            duration: 1000, // durasi animasi dalam ms
            once: true,     // animasi hanya dijalankan sekali
        });
    }, []);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            typeof swiperRef.current.params.navigation === 'object' &&
            swiperRef.current.params.navigation !== null &&
            prevRef.current &&
            nextRef.current
        ) {
            (swiperRef.current.params.navigation as any).prevEl = prevRef.current;
            (swiperRef.current.params.navigation as any).nextEl = nextRef.current;
            swiperRef.current.navigation.init()
            swiperRef.current.navigation.update()
        }
    }, [])

    return (
        <div id='clients' className="py-32 px-5 lg:px-20 bg-gray-50">
            <div data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Happy Clients</h2>

                <p className='text-gray-500 text-xl font-semibold mt-10 text-center'>Kami bangga telah dipercaya oleh berbagai fasilitas kesehatan di seluruh Indonesia. Kepuasan klien adalah motivasi kami untuk terus menghadirkan layanan terbaik dan solusi digital yang membantu mempermudah operasional mereka. Dari klinik, puskesmas, hingga rumah sakit. inilah cerita kesuksesan bersama mereka.</p>
            </div>

            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
                data-aos="fade-up"
                data-aos-delay="300"
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {datas.map((data, index) => (
                    <SwiperSlide key={index} className="bg-white mt-10 p-6 shadow-md rounded-lg">
                        <div className="flex items-center gap-5">
                            <img src={data.image} alt={data.name} className="w-24 h-24 rounded-full" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{data.name}</h3>
                                <p className="text-yellow-500 mt-2">{'⭐'.repeat(data.totalStar)}</p>
                            </div>
                        </div>

                        <p className="text-gray-600 mt-5">{data.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex justify-center gap-5 mt-8">
                <button
                    ref={prevRef}
                    className="bg-[#0d1b2a] text-white p-4 cursor-pointer rounded-md hover:bg-[#1b263b] transition-all"
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    ref={nextRef}
                    className="bg-[#0d1b2a] text-white p-4 cursor-pointer rounded-md hover:bg-[#1b263b] transition-all"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    )
}

export default Clients
