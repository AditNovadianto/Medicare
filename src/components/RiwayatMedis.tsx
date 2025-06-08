interface RiwayatMedisProps {
    dataRiwayatMedis: any;
}

const RiwayatMedis: React.FC<RiwayatMedisProps> = ({ dataRiwayatMedis }) => {
    console.log(dataRiwayatMedis);

    const formatTanggal = (tanggalString: string) => {
        const bulanIndonesia = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];

        const tanggalObj = new Date(tanggalString);
        const hari = tanggalObj.getDate();
        const bulan = bulanIndonesia[tanggalObj.getMonth()];
        const tahun = tanggalObj.getFullYear();

        return `${hari} ${bulan} ${tahun}`;
    };

    return (
        <div className="mt-10">
            <p className="text-lg text-gray-500">Riwayat Medis Saya</p>

            <div>
                <p className="text-gray-500 mt-5">Hasil</p>

                <div className="bg-[#93B0C8] rounded-lg p-5 mt-3">
                    {dataRiwayatMedis.map((item: any, index: number) => (
                        <div key={index} className="p-5 rounded-lg bg-[#0E45B7] text-white flex flex-col gap-2">
                            <p className="text-lg font-semibold">Tangga: {formatTanggal(item.tanggal_periksa)} - {item.tenaga_medis.nama_lengkap}</p>

                            <p>RS MMC</p>

                            <p>Diagnosis: {item.diagnosa}</p>

                            <p>Keluhan: {item.keluhan}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RiwayatMedis