import { Bell, BookOpen, BriefcaseMedical, CalendarPlus2, ClipboardList, Home, LogOut, Pill, Settings } from "lucide-react"
import logo from "../images/logo.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Breadcrumb from "../components/BreadCrumb";
import Dashboard from "../components/Dashboard";
import profilePicture from "../images/user.png";

const Panel = () => {
    const [section, setSection] = useState("dashboard");
    const [showPopup, setShowPopup] = useState({ status: false, message: "" });
    const [dataDashboard, setDataDashboard] = useState<any>(null);

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setShowPopup({ status: true, message: "Anda harus Sign In terlebih dahulu." });
            return;
        }

        try {
            const decoded = jwtDecode(token);
            const now = Date.now() / 1000;

            if (typeof decoded.exp === "undefined" || decoded.exp < now) {
                // Token expired or exp is missing
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setShowPopup({ status: true, message: "Token Anda telah kedaluwarsa. Silakan Sign In kembali." });
            }
        } catch (err) {
            // Token tidak valid
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/signIn");
        }
    }, [navigate, section]);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                if (!user.nik) return; // Pastikan ada NIK pasien baru fetch

                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/dashboard/${user.nik}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setDataDashboard(data);
                } else {
                    const errorData = await response.json();
                    console.error("Error response:", errorData);
                    // setShowPopup({ status: true, message: errorData.message || "Gagal memuat data dashboard." });
                }
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
                // setShowPopup({ status: true, message: "Gagal memuat data dashboard." });
            }
        };

        fetchDashboard();
    }, [section, user.nik]); // Jangan lupa dependency user.nik

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/signIn");
    };

    return (
        <>
            <div className="flex">
                <div className="min-h-screen flex flex-col justify-between bg-white p-5 min-w-[250px] w-[20%]">
                    <div>
                        <button className="cursor-pointer">
                            <img src={logo} alt="" />
                        </button>

                        <div className="mt-10 flex flex-col gap-7">
                            <button onClick={() => setSection('dashboard')} className={`${section === "dashboard" ? 'bg-[#0E45B7] hover:bg-blue-700 text-white' : 'bg-transparent hover:bg-gray-200'} flex items-center gap-3 w-full p-3 rounded-lg transition-all cursor-pointer`}>
                                <Home />

                                <p>Dashboard</p>
                            </button>

                            <button onClick={() => setSection("riwayat medis")} className={`${section === "riwayat medis" ? 'bg-[#0E45B7] hover:bg-blue-700 text-white' : 'bg-transparent hover:bg-gray-200'} flex items-center gap-3 w-full p-3 rounded-lg transition-all cursor-pointer`}>
                                <BookOpen />

                                <p>Riwayat Medis</p>
                            </button>

                            <button onClick={() => setSection("resep & obat")} className={`${section === "resep & obat" ? 'bg-[#0E45B7] hover:bg-blue-700 text-white' : 'bg-transparent hover:bg-gray-200'} flex items-center gap-3 w-full p-3 rounded-lg transition-all cursor-pointer`}>
                                <Pill />

                                <p>Resep & Obat</p>
                            </button>

                            <button onClick={() => setSection("jadwal medis")} className={`${section === "jadwal medis" ? 'bg-[#0E45B7] hover:bg-blue-700 text-white' : 'bg-transparent hover:bg-gray-200'} flex items-center gap-3 w-full p-3 rounded-lg transition-all cursor-pointer`}>
                                <CalendarPlus2 />

                                <p>Jadwal Medis</p>
                            </button>

                            <button onClick={() => setSection("hasil pemeriksaan")} className={`${section === "hasil pemeriksaan" ? 'bg-[#0E45B7] hover:bg-blue-700 text-white' : 'bg-transparent hover:bg-gray-200'} flex items-center gap-3 w-full p-3 rounded-lg transition-all cursor-pointer`}>
                                <ClipboardList />

                                <p>Hasil Pemeriksaan</p>
                            </button>

                            <button onClick={() => setSection("tenaga medis saya")} className={`${section === "tenaga medis saya" ? 'bg-[#0E45B7] hover:bg-blue-700 text-white' : 'bg-transparent hover:bg-gray-200'} flex items-center gap-3 w-full p-3 rounded-lg transition-all cursor-pointer`}>
                                <BriefcaseMedical />

                                <p>Tenaga Medis Saya</p>
                            </button>
                        </div>
                    </div>

                    <button onClick={handleLogout} className="flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer hover:bg-gray-200">
                        <LogOut />

                        <p>Log Out</p>
                    </button>
                </div>

                <div className="w-full h-full bg-gray-100 min-h-screen px-7 py-10">
                    <div className="w-full flex items-center justify-between">
                        <Breadcrumb currentPage={section} />

                        <div className="flex items-center gap-10">
                            <button className="cursor-pointer">
                                <Bell />
                            </button>

                            <button className="cursor-pointer">
                                <Settings />
                            </button>

                            <button className="w-10 h-10 cursor-pointer rounded-lg bg-gray-200">
                                <img src={profilePicture} className="w-10" alt="" />
                            </button>
                        </div>
                    </div>

                    {section === "dashboard" && <Dashboard dataDashboard={dataDashboard} />}
                </div>
            </div>

            <div>
                {showPopup.status && (
                    <div className="fixed bg-black/50 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                        <div className="bg-white p-5 rounded-lg">
                            <p className="font-semibold text-xl text-red-600">{showPopup.message}</p>

                            <button onClick={() => { setShowPopup({ status: false, message: "" }); navigate("/signIn") }} className="w-full mt-5 bg-red-300 px-5 py-3 cursor-pointer rounded-lg">Close</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Panel