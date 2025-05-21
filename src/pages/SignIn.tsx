import { useState } from "react";
import background from "../images/background-signin.png";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const navigate = useNavigate();

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError("Format email tidak valid.");
            return;
        }

        setEmailError("");
        setIsLoading(true);
        setSubmitError("");

        try {
            const response = await fetch("http://localhost:3000/auth/signInPasien", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("user", JSON.stringify(data.user));
                navigate("/dashboard");
            } else {
                const errorData = await response.json();
                setSubmitError(errorData.error || "Gagal masuk. Coba lagi.");
            }
        } catch (error) {
            setSubmitError("Terjadi kesalahan jaringan.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="bg-cover bg-no-repeat h-screen p-20 flex items-center justify-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="bg-white rounded-lg shadow-lg p-10 w-[80%]">
                <div className="w-full text-center">
                    <img src={logo} className="w-[350px] m-auto" alt="Logo" />

                    <form className="mt-10" onSubmit={handleSubmit}>
                        <div className="mb-4 text-left">
                            <input
                                // type="email"
                                placeholder="Email"
                                className="w-full p-2 border-2 border-blue-300 rounded"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (emailError) setEmailError("");
                                }}
                            />

                            {emailError && (
                                <p className="text-red-500 text-sm mt-1">{emailError}</p>
                            )}
                        </div>

                        <div className="mb-4 text-left">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-2 border-2 border-blue-300 rounded"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {submitError && (
                            <div className="fixed bg-black/50 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <div className="bg-white p-5 rounded-lg">
                                    <p className="font-semibold text-xl text-red-600">{submitError}</p>

                                    <button onClick={() => setSubmitError("")} className="w-full mt-5 bg-red-300 px-5 py-3 cursor-pointer rounded-lg">Close</button>
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            className={`${isLoading ? "bg-blue-400" : "bg-blue-700 hover:bg-blue-800"
                                } text-white py-2 px-4 rounded w-full transition duration-200 flex justify-center`}
                        >
                            {isLoading ? (
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8z"
                                    />
                                </svg>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    <p className="mt-5 font-semibold">Tidak punya Akun? <Link to={"/signUp"} className="text-blue-500">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
