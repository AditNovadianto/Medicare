import heroHome from "../images/hero-home.png"

const Home = () => {
    return (
        <div className="h-screen overflow-hidden flex flex-col justify-center items-center bg-gradient-to-r from-20% from-white to-gray-500 text-white">
            <div className="flex items-center gap-10 justify-evenly w-full">
                <div>
                    <p className="text-blue-800 text-3xl font-bold">Selamat Datang</p>

                    <p className="text-5xl font-bold mt-10 text-gray-900 leading-snug">
                        Konsultasi Mudah, <br />
                        Rekam Medis Aman, <br />
                        Kesehatan Terjamin.
                    </p>

                    <div className="flex items-center gap-10 mt-10">
                        <button className="px-10 font-semibold cursor-pointer py-3 bg-blue-800 rounded-lg">Daftar Sekarang</button>

                        <button className="px-10 py-3 border-2 cursor-pointer border-blue-800 rounded-lg text-blue-800">Masuk Sebagai Tenaga Kesehatan</button>
                    </div>
                </div>

                <img className="w-[40%]" src={heroHome} alt="" />
            </div>
        </div>
    )
}

export default Home