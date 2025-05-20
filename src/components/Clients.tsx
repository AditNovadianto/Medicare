import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Swiper as SwiperType } from 'swiper'

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
        <div className="py-16 px-4 bg-gray-50">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Happy Clients</h2>

            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
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
                    <SwiperSlide key={index} className="bg-white p-6 shadow-md rounded-lg">
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
                    className="bg-[#0d1b2a] text-white p-4 rounded-md hover:bg-[#1b263b] transition-all"
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    ref={nextRef}
                    className="bg-[#0d1b2a] text-white p-4 rounded-md hover:bg-[#1b263b] transition-all"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    )
}

export default Clients
