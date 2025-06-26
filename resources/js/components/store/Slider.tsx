"use client";

import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        title: "مجموعات تخفيضات الصيف",
        description: "تخفيضات تصل إلى 50٪!",
        img: "/men/linen-data.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "مجموعات تخفيضات الشتاء",
        description: "تخفيضات تصل إلى 50٪!",
        img: "/Womens-Clothing.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "مجموعات تخفيضات الربيع",
        description: "تخفيضات تصل إلى 50٪!",
        img: "/men/pexels-pixabay-267301.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden relative dark:text-black text-right">
            <div
                className="w-max h-full flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div
                        className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                        key={slide.id}
                    >
                        {/* حاوية النص */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                                {slide.description}
                            </h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                                {slide.title}
                            </h1>
                            <a href={slide.url}>
                                <button className="rounded-md bg-black text-white py-3 px-4">
                                    تسوّق الآن
                                </button>
                            </a>
                        </div>
                        {/* حاوية الصورة */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <img
                                src={slide.img}
                                alt=""
                                sizes="100%"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {slides.map((slide, index) => (
                    <div
                        className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
                            current === index ? "scale-150" : ""
                        }`}
                        key={slide.id}
                        onClick={() => setCurrent(index)}
                    >
                        {current === index && (
                            <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
