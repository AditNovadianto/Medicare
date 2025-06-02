import { Link } from "react-router-dom";
import hero from "../images/heroDashboard.png";
import { CalendarDays, HeartPulse, Thermometer } from "lucide-react";

interface DashboardProps {
    dataDashboard: any;
}

const Dashboard: React.FC<DashboardProps> = ({ dataDashboard }) => {
    console.log(dataDashboard)

    function formatTanggalIndonesia(tanggal: String) {
        if (!tanggal || typeof tanggal !== "string") return "-"; // atau bisa "" / "Tanggal tidak valid"

        const bulan = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        const [tahun, bulanStr, hari] = tanggal.split("-");

        return `${parseInt(hari)} ${bulan[parseInt(bulanStr) - 1]} ${tahun}`;
    }

    return (
        <div className="mt-10">
            <p className="text-lg text-gray-500">Dashboard Saya</p>

            <div className="flex flex-col md:flex-row items-center justify-between mt-5 w-full bg-[#0E45B7] rounded-lg p-5">
                <div>
                    <p className="text-2xl tracking-wide text-gray-200">👋 Hello <span className="font-semibold text-white">{dataDashboard?.namaPasien}</span>,</p>

                    <p className="mt-5 text-gray-200 tracking-wide leading-7">Semoga harimu sehat! Jangan lupa check <br /> jadwal kontrol dan minum obat tepat waktu.</p>

                    <Link to={"/panel"} className="block mt-5 text-green-500 font-semibold">Tips Kesehatan {">"} </Link>
                </div>

                <img src={hero} className="w-[50%] md:w-[20%] mt-10 md:mt-0" alt="" />
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-start gap-5 justify-between">
                <div className="flex flex-col lg:flex-row w-full gap-5">
                    <div className="p-5 rounded-lg min-h-[150px] bg-white shadow-md flex items-center w-full gap-5">
                        <div className="p-3 w-16 min-w-16 h-16 min-h-16 flex items-center justify-center text-white rounded-full bg-[#0E45B7]">
                            <HeartPulse size={35} />
                        </div>

                        <div>
                            <p className="text-lg font-semibold">{dataDashboard?.dataTerkini?.tekananDarah} mmHg</p>

                            <p>Tekanan Darah Terakhir</p>
                        </div>
                    </div>

                    <div className="p-5 rounded-lg min-h-[150px] bg-white shadow-md flex items-center w-full gap-5">
                        <div className="p-3 w-16 min-w-16 h-16 min-h-16 flex items-center justify-center text-white rounded-full bg-[#0E45B7]">
                            <Thermometer size={35} />
                        </div>

                        <div>
                            <p className="text-lg font-semibold">{dataDashboard?.dataTerkini?.suhuTubuh} °C</p>

                            <p>Suhu Tubuh Terakhir</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full gap-5">
                    <div className="p-5 rounded-lg min-h-[150px] bg-white shadow-md flex items-center w-full gap-5">
                        <div className="p-3 w-16 min-w-16 h-16 min-h-16 flex items-center justify-center text-white rounded-full bg-[#0E45B7]">
                            <CalendarDays size={35} />
                        </div>

                        <div>
                            <p className="text-lg font-semibold">{formatTanggalIndonesia(dataDashboard?.dataTerkini?.tanggalPemeriksaanTerakhir)}</p>

                            <p>Tanggal Pemeriksaan Terakhir</p>
                        </div>
                    </div>

                    <div className="p-5 rounded-lg min-h-[150px] bg-[#0E45B7] shadow-md w-full">
                        <div className="text-white">
                            <p>Riwayat Penyakit Utama:</p>

                            {dataDashboard?.riwayatPenyakitUtama?.length > 0 ? (
                                <ul className="list-disc ml-5 mt-2">
                                    {dataDashboard?.riwayatPenyakitUtama?.map((penyakit: { diagnosa: string }, index: number) => (
                                        <li key={index} className="text-sm">{penyakit?.diagnosa}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm">Tidak ada riwayat penyakit utama.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard