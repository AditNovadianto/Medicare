const JoinUs = () => {
    return (
        <div id="contactUs" className="my-48 px-5 lg:px-20 flex flex-col items-center justify-center">
            <p className="text-4xl font-bold tracking-wider uppercase">Join Us</p>

            <p className="text-lg text-center text-gray-500 font-semibold mt-10">Problems trying to resolve the conflict between the two major realms of classical physics. Newtonian Mechanics</p>

            <div className="w-full md:max-w-[600px] mt-10 flex items-center h-14">
                <input type="email" className="w-full px-5 py-3 h-full border border-black rounded-l-lg" placeholder="Your Email" />

                <button className="h-full px-5 cursor-pointer rounded-r-lg bg-black text-white">Subscribe</button>
            </div>
        </div>
    )
}

export default JoinUs