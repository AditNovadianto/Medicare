interface ResepAndObatProps {
    dataResepAndObat: any;
}

const ResepAndObat: React.FC<ResepAndObatProps> = ({ dataResepAndObat }) => {
    console.log(dataResepAndObat);

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
            <p className="text-lg text-gray-500">Resep & Obat Saya</p>

            <div>
                <p className="mt-5 text-gray-500">Hasil</p>

                <div className="bg-[#0E45B7] rounded-lg p-5 mt-3">
                    {dataResepAndObat.map((item: any, index: number) => (
                        <div key={index} className="text-white">
                            <p className="font-semibold">No. Resep</p>

                            <p className="mt-2 font-semibold">{item.no_resep}</p>

                            <p className="mt-2 font-semibold">{formatTanggal(item.tanggal_resep)}</p>

                            <div className="p-3 rounded-lg bg-white mt-3">
                                <p className="font-semibold text-gray-800 text-lg">{item.nama_dokter}</p>

                                <p className="mt-1 text-gray-500">{item.nama_fasilitas}</p>

                                <p className="mt-1 text-gray-500">{item.spesialis}</p>
                            </div>

                            <div className="w-full h-[1px] rounded-full bg-gray-200 my-3"></div>

                            <p>Status: {item.status} - Belum Ditebus</p>

                            <div>
                                {item.obat_resep.map((obat: any, index: number) => (
                                    <div key={index} className="mt-3 p-3 rounded-lg bg-white">
                                        <p className="font-semibold text-gray-800">{obat.nama_obat}</p>

                                        <ul className="text-gray-500 mt-1">
                                            <li className="list-disc ml-10">Jumlah: {obat.jumlah} {obat.satuan}</li>

                                            <li className="list-disc ml-10">Aturan Pakai: {obat.aturan_pakai}</li>

                                            <li className="list-disc ml-10">Lama Penggunaan: {obat.lama_penggunaan}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ResepAndObat