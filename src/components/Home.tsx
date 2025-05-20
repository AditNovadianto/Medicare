import heroHome from "../images/hero-home.png"

const Home = () => {
    return (
        <div className="min-h-screen overflow-hidden flex flex-col justify-center items-center bg-gradient-to-r from-20% from-white to-gray-500 text-white p-5">
            <div className="flex flex-col lg:flex-row relative items-center gap-10 justify-evenly w-full">
                <div>
                    <p className="text-blue-800 text-3xl font-bold mt-40 lg:mt-0">Selamat Datang</p>

                    <p className="text-3xl lg:text-5xl font-bold mt-10 text-gray-900 leading-snug">
                        Konsultasi Mudah, <br />
                        Rekam Medis Aman, <br />
                        Kesehatan Terjamin.
                    </p>

                    <div className="flex flex-col lg:flex-row items-center gap-5 mt-10">
                        <button className="px-10 w-full font-semibold cursor-pointer py-3 bg-blue-800 rounded-lg">Daftar Sekarang</button>

                        <button className="px-10 text-nowrap w-full py-3 border-2 cursor-pointer border-blue-800 rounded-lg text-blue-800">Masuk Sebagai Tenaga Kesehatan</button>
                    </div>
                </div>

                <img className="w-[80%] lg:w-[40%]" src={heroHome} alt="" />
            </div>
        </div>
    )
}

export default Home