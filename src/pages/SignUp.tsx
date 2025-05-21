import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../images/background-signin.png";

const SignUp = () => {
    const [form, setForm] = useState({
        nama_lengkap: "",
        nik: "",
        jenis_kelamin: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.nama_lengkap) newErrors.nama_lengkap = "Nama lengkap wajib diisi";
        if (!form.nik || form.nik.length !== 16) newErrors.nik = "NIK harus 16 digit";
        if (!form.jenis_kelamin) newErrors.jenis_kelamin = "Jenis kelamin wajib dipilih";
        if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Format email tidak valid";
        if (!form.password || form.password.length < 6) newErrors.password = "Password minimal 6 karakter";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);
        setSubmitError("");

        try {
            const response = await fetch("http://localhost:3000/auth/signUpPasien", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Sign up success", data);
                navigate("/signIn");
            } else {
                const errorData = await response.json();
                setSubmitError(errorData.error || "Gagal mendaftar.");
            }
        } catch (error) {
            setSubmitError("Terjadi kesalahan server.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-cover bg-no-repeat h-screen p-20 flex items-center justify-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-10 w-full max-w-xl space-y-4"
            >
                <h1 className="text-2xl font-bold text-center mb-4">Daftar Pasien</h1>

                <div>
                    <input placeholder="Nama Lengkap" name="nama_lengkap" className="input border-2 border-blue-300 rounded-lg p-2 w-full" onChange={handleChange} />
                    {errors.nama_lengkap && <p className="text-red-500 text-sm">{errors.nama_lengkap}</p>}
                </div>

                <div>
                    <input name="nik" placeholder="NIK" maxLength={16} className="input border-2 border-blue-300 rounded-lg p-2 w-full" onChange={handleChange} />
                    {errors.nik && <p className="text-red-500 text-sm">{errors.nik}</p>}
                </div>

                <div>
                    <label className="block mb-1 text-gray-700">Jenis Kelamin</label>
                    <select
                        name="jenis_kelamin"
                        value={form.jenis_kelamin}
                        onChange={handleChange}
                        className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Pilih</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                    {errors.jenis_kelamin && (
                        <p className="text-red-500 text-sm">{errors.jenis_kelamin}</p>
                    )}
                </div>

                <div>
                    <input name="email" placeholder="Email" type="email" className="input border-2 border-blue-300 rounded-lg p-2 w-full" onChange={handleChange} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                    <input name="password" placeholder="Password" type="password" className="input border-2 border-blue-300 rounded-lg p-2 w-full" onChange={handleChange} />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                {submitError && <p className="text-red-600 text-center">{submitError}</p>}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
                >
                    {isLoading ? "Loading..." : "Daftar"}
                </button>
            </form>
        </div>
    );
};

export default SignUp;
