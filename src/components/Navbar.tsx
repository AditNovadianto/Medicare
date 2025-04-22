const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-transparent backdrop-blur-xl shadow-md p-5 z-10">
            <h1 className="text-2xl font-semibold">MediCare+</h1>

            <div className="flex font-semibold gap-10 text-gray-900">
                <a href="#">Home</a>

                <a href="#aboutus">About Us</a>

                <a href="#">Feature</a>

                <a href="#">Product</a>

                <a href="#">Pricing</a>

                <a href="#">Contact Us</a>
            </div>

            <div className="flex font-semibold text-blue-800 gap-10">
                <button>Login</button>

                <button className="bg-blue-800 px-7 py-3 rounded-lg text-white">Join Us</button>
            </div>
        </div>
    )
}

export default Navbar