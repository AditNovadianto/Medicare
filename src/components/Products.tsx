import { CircleCheck } from "lucide-react"
import free from "../images/free.png"
import growth from "../images/growth.png"
import professional from "../images/professional.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const datas = [
    {
        image: free,
        title: "Starter (Gratis)",
        fee: ["Rp 0"],
        benefits: [
            "Maksimal 2 pengguna",
            "Akses histori data selama 7 hari",
            "Penyimpanan data terbatas (50 MB)",
            "Fitur dasar"
        ]
    },
    {
        image: growth,
        title: "Growth",
        fee: ["Rp 149.000 / bulan (normal Rp 249.000)", "Rp 1.490.000 / tahun (hemat 2 bulan)"],
        benefits: [
            "Maksimal 5 pengguna",
            "Akses histori data tanpa batas",
            "Penyimpanan data hingga 5 GB",
            "Fitur lanjutan"
        ]
    },
    {
        image: professional,
        title: "Professional",
        fee: ["Rp 199.000 / bulan (normal Rp 289.000)", "Rp 1.990.000 / tahun (hemat 2 bulan)"],
        benefits: [
            "Pengguna tanpa batas",
            "Akses histori dan data tanpa batas",
            "Penyimpanan cloud tanpa batas",
            "Fitur lengkap"
        ]
    }
]

const Products = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // durasi animasi dalam ms
            once: true,     // animasi hanya dijalankan sekali
        });
    }, []);

    return (
        <div id="product" className="md:py-32 py-10 px-5 lg:px-20 min-h-screen flex flex-col">
            <div data-aos="fade-up">
                <p className="mt-20 lg:mt-0 text-3xl font-bold text-gray-900">Our products</p>

                <p className="text-gray-500 text-xl font-semibold mt-10">Kami menyediakan berbagai pilihan paket layanan yang fleksibel dan terjangkau, mulai dari fasilitas dasar hingga fitur lengkap untuk klinik, puskesmas, hingga rumah sakit. Semua demi memudahkan pencatatan medis digital Anda.</p>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row items-start gap-10">
                {datas.map((data, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100} className="min-h-[650px] flex flex-col gap-5 justify-between bg-[#E6F6FE] w-full p-5 rounded-lg">
                        <div>
                            <img src={data.image} className="w-20" alt="" />

                            <div className="mt-5 min-h-[150px] xl:min-h-[100px]">
                                <p className="font-semibold text-xl text-[#011632]">{data.title}</p>

                                <p className="mt-3 text-lg text-[#011632]">{data.fee[0]}</p>

                                <p className="text-lg text-[#011632]">{data.fee[1]}</p>
                            </div>

                            <div className="w-full h-1 my-5 bg-[#011632] rounded-full"></div>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-start gap-2">
                                    <CircleCheck className="min-w-max" />

                                    <p className="font-semibold text-lg text-[#011623]">Maksimal 2 Pengguna</p>
                                </div>

                                <div className="flex items-start gap-2">
                                    <CircleCheck className="min-w-max" />

                                    <p className="font-semibold text-lg text-[#011623]">Akses histori data selama 7 hari</p>
                                </div>

                                <div className="flex items-start gap-2">
                                    <CircleCheck className="min-w-max" />

                                    <p className="font-semibold text-lg text-[#011623]">Penyimpanan data terbatas (50 MB)</p>
                                </div>

                                <div className="flex gap-2">
                                    <CircleCheck className="min-w-max" />

                                    <div>
                                        <p className="font-semibold text-lg text-[#011623]">Fitur dasar</p>

                                        <div className="">
                                            <p>+ Pendaftaran Pasien</p>
                                            <p>+ Jadwal Dokter</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="font-semibold cursor-pointer text-white w-full py-4 mt-10 rounded-full bg-[#011623] hover:bg-gray-800 transition-all">Self Care</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products