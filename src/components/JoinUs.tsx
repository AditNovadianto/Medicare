import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const JoinUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // durasi animasi dalam ms
            once: true,     // animasi hanya dijalankan sekali
        });
    }, []);

    return (
        <div id="contactUs" className="my-48 px-5 lg:px-20 flex flex-col items-center justify-center">
            <div data-aos="fade-up">
                <p className="text-4xl font-bold tracking-wider uppercase text-center">Join Us</p>

                <p className="text-lg text-center text-gray-500 font-semibold mt-10">Problems trying to resolve the conflict between the two major realms of classical physics. Newtonian Mechanics</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="w-full md:max-w-[600px] mt-10 flex items-center h-14">
                <input type="email" className="w-full px-5 py-3 h-full border border-black rounded-l-lg" placeholder="Your Email" />

                <button className="h-full px-5 cursor-pointer rounded-r-lg bg-black text-white">Subscribe</button>
            </div>
        </div>
    )
}

export default JoinUs