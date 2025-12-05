"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// -------------------------------
// 📌 Props Interface
// -------------------------------
interface ImageCarouselProps {
    images: { src: string; alt: string }[];
    aspectRatio: number; // e.g. 4/5 or 16/9
    maxWidth?: string; // Tailwind class, e.g. "max-w-sm"
    title?: string;
}

// -------------------------------
// 📌 Client-Side Loader (fixes hydration errors)
// -------------------------------
function ClientSideOnly({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) {
        return (
            <div className="space-y-3 h-48 bg-white/50 rounded-2xl animate-pulse"></div>
        );
    }
    return <>{children}</>;
}

// -------------------------------
// 📌 MAIN CAROUSEL COMPONENT
// -------------------------------
const ImageCarousel: React.FC<ImageCarouselProps> = ({
    images,
    aspectRatio,
    maxWidth = "max-w-sm",
    title,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    if (!images || images.length === 0) {
        return (
            <div
                className={`mx-auto w-full ${maxWidth} h-64 flex items-center justify-center rounded-3xl bg-[#A3769F]/50 text-sm text-[#0B4F6C] text-center shadow-inner`}
            >
                <p>No images provided for carousel.</p>
            </div>
        );
    }

    // Aspect ratio math for the frame
    const paddingPercentage = `${100 / aspectRatio}%`;

    // Slide navigation
    const goToPrevious = () =>
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    const goToNext = () =>
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );

    const goToSlide = (index: number) => setCurrentIndex(index);

    return (
        <div className={`mx-auto w-full ${maxWidth} relative`}>
            {/* Optional Title */}
            {title && (
                <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#783B5A] text-center">
                    {title}
                </p>
            )}

            {/* -------------------------------
          📌 Image Frame (Thin Border + Zoom)
      -------------------------------- */}
            <div
                className="relative w-full overflow-hidden rounded-[32px] bg-gradient-to-br from-[#783B5A] via-[#A3769F] to-[#F7C9C9] p-px shadow-xl cursor-zoom-in"
                style={{ paddingTop: paddingPercentage }}
                onClick={() => setIsZoomed(true)}
            >
                {images.map((image, index) => (
                    <div
                        key={image.src}
                        className={`absolute top-px left-px right-px bottom-px transition-opacity duration-500 ease-in-out ${index === currentIndex
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                            }`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-[24px]"
                            sizes="(max-width: 768px) 100vw, 300px"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* -------------------------------
          📌 Navigation Arrows (Main View)
      -------------------------------- */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        className="absolute top-1/2 -left-10 -translate-y-1/2 rounded-full bg-white/70 p-2 text-[#0B4F6C] shadow-md transition hover:bg-white focus:outline-none hidden sm:block"
                        aria-label="Previous slide"
                    >
                        <IoIosArrowBack className="text-xl" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        className="absolute top-1/2 -right-10 -translate-y-1/2 rounded-full bg-white/70 p-2 text-[#0B4F6C] shadow-md transition hover:bg-white focus:outline-none hidden sm:block"
                        aria-label="Next slide"
                    >
                        <IoIosArrowForward className="text-xl" />
                    </button>
                </>
            )}

            {/* -------------------------------
          📌 Dots / Slide Indicators (Main View)
      -------------------------------- */}
            <div className="mt-4 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation();
                            goToSlide(index);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "bg-[#783B5A] w-6"
                            : "bg-[#F7C9C9] hover:bg-[#A3769F] w-2"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* -------------------------------
          📌 Zoom Modal (Smaller + Fit to Screen)
      -------------------------------- */}
            {isZoomed && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    onClick={() => setIsZoomed(false)}
                >
                    <div
                        className="relative w-[90%] max-w-3xl md:w-[70%]"
                        onClick={(e) => e.stopPropagation()} // keep clicks inside from closing
                    >
                        {/* Image wrapper limited to viewport height */}
                        <div className="relative w-full max-h-[70vh] bg-[#111] rounded-[20px] shadow-2xl overflow-hidden flex items-center justify-center p-4">
                            <Image
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt}
                                width={1600}
                                height={1600}
                                className="w-full h-auto max-h-[62vh] object-contain"
                            />

                            {/* Modal arrows */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={goToPrevious}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#0B4F6C] shadow-md hover:bg-white"
                                        aria-label="Previous image"
                                    >
                                        <IoIosArrowBack className="text-xl" />
                                    </button>
                                    <button
                                        onClick={goToNext}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-[#0B4F6C] shadow-md hover:bg-white"
                                        aria-label="Next image"
                                    >
                                        <IoIosArrowForward className="text-xl" />
                                    </button>
                                </>
                            )}

                            {/* Close button */}
                            <button
                                onClick={() => setIsZoomed(false)}
                                className="absolute top-3 right-3 bg-white text-[#0B4F6C] p-2 rounded-full shadow-lg hover:bg-[#F3E7E7]"
                                aria-label="Close zoomed image"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal dots */}
                        {images.length > 1 && (
                            <div className="mt-4 flex justify-center space-x-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? "bg-[#F7C9C9] w-6"
                                            : "bg-white/60 hover:bg-white w-2"
                                            }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;
export { ClientSideOnly };
