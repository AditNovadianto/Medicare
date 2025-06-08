import { useEffect, useState } from "react";

// Format tanggal menjadi { day: "Mon", date: 11, fullDate: "2025-06-11" }
const getWeekDates = () => {
    const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Senin sebagai awal minggu

    return Array.from({ length: 7 }).map((_, i) => {
        const d = new Date(startOfWeek);
        d.setDate(d.getDate() + i);
        return {
            day: days[d.getDay()],
            date: d.getDate(),
            fullDate: d.toISOString().split("T")[0], // format: "2025-06-11"
        };
    });
};

const CalendarBar = ({ jadwalPemeriksaan }: { jadwalPemeriksaan: any[] }) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [weekDates,] = useState(getWeekDates());

    useEffect(() => {
        setSelectedDate(new Date().toISOString().split("T")[0]); // default hari ini
    }, []);

    const markedDates = jadwalPemeriksaan.map((j: any) => j.tanggal); // "2025-06-11"

    return (
        <div className="mt-5 bg-[#94B4D4] rounded-xl p-4 text-white">
            {/* Header Bulan */}
            <div className="flex items-center justify-between mb-3 px-1">
                <p className="font-semibold text-white text-lg">
                    {new Date().toLocaleString("id-ID", { month: "long" })}
                </p>
                <span className="text-white">▼</span>
            </div>

            {/* Hari dan Tanggal */}
            <div className="grid grid-cols-7 gap-2 text-center">
                {weekDates.map((item, index) => (
                    <div key={index}>
                        <p className="text-sm font-medium text-white">{item.day}</p>
                        <div
                            onClick={() => setSelectedDate(item.fullDate)}
                            className={`relative mt-1 w-9 h-9 mx-auto flex items-center justify-center rounded-full cursor-pointer ${selectedDate === item.fullDate ? "bg-[#5A5A89] text-white" : "text-white/80"
                                }`}
                        >
                            {item.date}
                            {markedDates.includes(item.fullDate) && (
                                <span className="absolute bottom-[2px] w-1.5 h-1.5 bg-white rounded-full"></span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarBar;
