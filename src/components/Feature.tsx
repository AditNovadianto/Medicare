import smartConsult from "../images/smart-consult.png";
import ehealtRecord from "../images/eHealt-record.png";
import medilinkSync from "../images/medilink-sync.png";
import pharmacyManagement from "../images/pharmacy-management.png";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const features = [
    {
        image: smartConsult,
        title: "smartConsult",
        description: "memungkinkan pasien untuk melakukan konsultasi secara digital dengan tenaga medis profesional. Konsultasi bisa dilakukan secara langsung melalui aplikasi, baik dengan chat, video call, maupun voice call, tanpa harus datang ke fasilitas kesehatan."
    },
    {
        image: ehealtRecord,
        title: "eHealth Record",
        description: "sebagai rekam medis elektronik yang tersimpan secara aman di cloud. Semua riwayat kesehatan pasien, termasuk hasil pemeriksaan, diagnosa, resep, dan catatan medis lainnya terdokumentasi dalam satu tempat yang mudah diakses."
    },
    {
        image: medilinkSync,
        title: "Medilink Sync",
        description: "MediLink Sync adalah fitur integrasi data kesehatan antar layanan kesehatan, seperti rumah sakit, klinik, apotek, dan laboratorium. Dengan fitur ini, informasi pasien dapat disinkronkan dengan aman untuk memastikan kesinambungan perawatan."
    },
    {
        image: pharmacyManagement,
        title: "Pharmacy Management",
        description: "mendukung manajemen resep dan pengobatan secara digital. Pasien dapat menerima resep secara elektronik dan langsung memesan obat ke apotek rekanan. Informasi tentang dosis dan jadwal konsumsi juga disediakan."
    }
]

const Feature = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // durasi animasi dalam ms
            once: true,     // animasi hanya dijalankan sekali
        });
    }, []);

    return (
        <div id="feature" className="py-10 px-5 lg:px-20 min-h-screen flex flex-col items-center justify-center">
            <div>
                <div data-aos="fade-up">
                    <p className="text-3xl mt-20 lg:mt-0 font-bold text-gray-900">Fitur Keunggulan Kami</p>

                    <p className="text-gray-500 text-xl font-semibold mt-10">Kami menghadirkan teknologi sebagai solusi untuk meningkatkan akses dan kualitas layanan kesehatan yang mudah dijangkau, kapan pun dan di mana pun Anda berada.</p>
                </div>

                <div className="mt-10 lg:mt-0 flex flex-col xl:flex-row gap-10">
                    {features.map((feature, index) => (
                        <div data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={index} className="flex p-10 bg-white rounded-lg shadow-lg flex-col gap-10 items-start w-full mt-0 lg:mt-10">
                            <img className="w-14" src={feature.image} alt={feature.title} />

                            <div>
                                <p className="text-2xl font-bold text-gray-900">{feature.title}</p>

                                <p className="text-gray-500 text-xl font-semibold mt-5">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feature