import { useEffect, useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../index.css';

interface JadwalMedisProps {
    dataJadwalMedis: {
        tanggal: string;
        jam: string;
        nama_dokter: string;
        lokasi: string;
    }[];
}

const JadwalMedis: React.FC<JadwalMedisProps> = ({ dataJadwalMedis }) => {
    const [value, setValue] = useState<Date | undefined>(undefined);
    const [markedDates, setMarkedDates] = useState<Date[]>([]);

    useEffect(() => {
        if (dataJadwalMedis?.length > 0) {
            const tanggalList = dataJadwalMedis.map((item) => {
                const tgl = new Date(item.tanggal);
                return new Date(tgl.getFullYear(), tgl.getMonth(), tgl.getDate());
            });
            setMarkedDates(tanggalList);
            setValue(tanggalList[0]); // Atur default tanggal awal
        }
    }, [dataJadwalMedis]);

    const handleChange: CalendarProps['onChange'] = (val) => {
        if (val instanceof Date) {
            setValue(val);
        }
    };

    // Format jam ke 12 jam
    const formatTo12Hour = (timeStr: string) => {
        const [hour, minute] = timeStr.split(':');
        const h = parseInt(hour, 10);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const hour12 = h % 12 === 0 ? 12 : h % 12;
        return `${hour12.toString().padStart(2, '0')}:${minute} ${ampm}`;
    };

    // Format tanggal ke dd-Bulan-yyyy
    const formatTanggal = (tanggalStr: string) => {
        const bulanIndonesia = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
        const tanggal = new Date(tanggalStr);
        const tanggalHari = tanggal.getDate().toString().padStart(2, '0');
        const bulan = bulanIndonesia[tanggal.getMonth()];
        const tahun = tanggal.getFullYear();
        return `${tanggalHari}-${bulan}-${tahun}`;
    };

    // Filter jadwal sesuai tanggal yang dipilih
    const jadwalFiltered = dataJadwalMedis?.filter((item) => {
        if (!value) return false;
        const tanggalItem = new Date(item.tanggal);
        return (
            tanggalItem.getFullYear() === value.getFullYear() &&
            tanggalItem.getMonth() === value.getMonth() &&
            tanggalItem.getDate() === value.getDate()
        );
    });

    return (
        <div>
            {dataJadwalMedis === null && (
                <p className="text-lg text-gray-500 mt-10">Tidak ada jadwal medis yang ditemukan.</p>
            )}

            {dataJadwalMedis !== null && (
                <div>
                    <Calendar
                        onChange={handleChange}
                        value={value}
                        className="w-full max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg p-5"
                        showDoubleView={true}
                        tileClassName={({ date, view }) => {
                            if (view === 'month') {
                                const isMarked = markedDates.some(d =>
                                    d.getFullYear() === date.getFullYear() &&
                                    d.getMonth() === date.getMonth() &&
                                    d.getDate() === date.getDate()
                                );
                                return isMarked ? 'highlight' : null;
                            }
                            return null;
                        }}
                    />

                    <div className="p-5 w-full bg-[#0E45B7] rounded-lg mt-5">
                        <p className="text-4xl font-bold text-white">Cek Pertemuan Terdekat</p>
                        <p className="text-lg font-semibold text-white mt-3">Janji Temu</p>

                        {jadwalFiltered.length > 0 ? (
                            jadwalFiltered.map((item, index) => (
                                <div
                                    className="flex items-center gap-5 w-full justify-between bg-white p-5 rounded-lg mt-3"
                                    key={index}
                                >
                                    <div>
                                        <p className="text-lg font-semibold">{item?.nama_dokter}</p>
                                        <p className="text-lg">{item?.lokasi}</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <p className="font-semibold text-lg">{formatTo12Hour(item?.jam)}</p>
                                        <p>{formatTanggal(item?.tanggal)}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-white mt-3">Tidak ada janji temu pada tanggal ini.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default JadwalMedis;
