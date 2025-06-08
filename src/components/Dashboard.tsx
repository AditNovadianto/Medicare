import { Link } from "react-router-dom";
import hero from "../images/heroDashboard.png";
import { CalendarDays, CheckCircle, HeartPulse, Thermometer } from "lucide-react";
import profilePicture from "../images/user.png"
import CalendarBar from "./CalendarBar";

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

            <div className="mt-10 flex items-start gap-5 justify-between">
                <div className="w-[65%]">
                    <div className="p-5 rounded-lg bg-[#0E45B7] shadow-md">
                        <p className="font-semibold text-lg text-white">Catatan Medis</p>

                        <div className="mt-5 p-5 rounded-lg bg-white flex items-center justify-around gap-10">
                            <div className="rounded-full bg-[#38CB89]/20 w-10 h-10 flex items-center justify-center">
                                <img src={profilePicture} alt="" />
                            </div>

                            <div>
                                <p className="font-bold">{dataDashboard?.catatanMedisTerbaru?.dokter}</p>

                                <p className="font-semibold">{dataDashboard?.catatanMedisTerbaru?.rekomendasi}</p>

                                <p>Status: Dianjurkan 1 jam lalu</p>
                            </div>

                            <button className="px-5 py-3 bg-[#38CB89]/20 text-[#377DFF] rounded-lg font-semibold">Lebih Lengkap</button>
                        </div>
                    </div>

                    <div className="mt-5 flex items-center gap-5 w-full">
                        <div className="p-5 w-full bg-white rounded-lg shadow-md min-h-[400px] max-h-[500px] overflow-y-auto">
                            <p className="text-gray-500 text-lg font-semibold">Resep Aktif</p>

                            <div>
                                {dataDashboard?.resepAktif.map((resep: any, index: number) => (
                                    <div key={index} className="mt-5 p-5 bg-[#0E45B7] rounded-lg flex flex-col gap-3 shadow-md">
                                        <p className="text-white font-semibold">{resep?.nama_obat}</p>

                                        <p className="text-gray-200">Jadwal Minum: {resep?.frekuensi}</p>

                                        <p className="text-gray-200">Sisa Durasi: {resep?.lama_penggunaan} lagi</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-5 w-full bg-white rounded-lg shadow-md min-h-[400px] max-h-[500px] overflow-y-auto">
                            <p className="text-gray-500 text-lg font-semibold">Pengingat Hari Ini</p>

                            <div className="p-5 rounded-lg bg-[#0E45B7] mt-5 flex flex-col gap-3">
                                {dataDashboard?.resepAktif.map((resep: any, index: number) => (
                                    <div className="flex items-center gap-2" key={index}>
                                        <CheckCircle size={20} className="text-white" />

                                        <p className="text-white font-semibold">{resep?.nama_obat}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[35%] p-5 bg-[#0E45B7] rounded-lg shadow-md ">
                    <p className="font-semibold text-white text-lg">Jadwal Pemeriksaan</p>

                    <div>
                        {dataDashboard?.jadwalPemeriksaan?.map((jadwal: any, index: number) => {
                            const [, month, day] = jadwal?.tanggal.split("-");
                            const isToday = new Date().toISOString().slice(0, 10) === jadwal?.tanggal;

                            return (
                                <div
                                    key={index}
                                    className="mt-5 px-4 py-3 bg-white rounded-lg flex items-center justify-between shadow-md"
                                >
                                    {/* Tanggal */}
                                    <div className="w-14 h-14 flex items-center justify-center bg-[#0E45B7] text-white font-semibold rounded-md text-sm">
                                        {`${day}/${month}`}
                                    </div>

                                    {/* Info Dokter */}
                                    <div className="flex-1 ml-5">
                                        <p className="font-semibold text-base">{jadwal?.tenaga_medis?.nama_lengkap}</p>
                                        <p className="text-sm text-gray-600">{jadwal?.tenaga_medis?.spesialis}</p>
                                        <p className="text-sm text-[#0E45B7] underline mt-1">{jadwal?.rumah_sakit || "RS MMC"}</p>
                                    </div>

                                    {/* Jam dan status */}
                                    <div className="flex flex-col items-end gap-1 text-sm">
                                        <p className="text-gray-500 font-medium">{jadwal?.jam || "10:00 WIB"}</p>
                                        {isToday && <p className="text-red-600 font-semibold">Hari Ini</p>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <CalendarBar jadwalPemeriksaan={dataDashboard?.jadwalPemeriksaan || []} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard