import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import notFound from "../images/notFound.png"

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-5">
            <img src={notFound} alt="" />

            <p className="text-2xl font-semibold text-gray-800 mb-2">Halaman Tidak Ditemukan</p>

            <p className="text-gray-600 mb-6">
                Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
            </p>

            <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                <ArrowLeft size={18} />

                <p>Kembali ke Beranda</p>
            </button>
        </div>
    );
};

export default NotFound;
