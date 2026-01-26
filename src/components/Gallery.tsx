'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, X } from 'lucide-react';

const galleryImages = [
    { src: "/images/gallery-motors.png", title: "Electric Motors Collection" },
    { src: "/images/gallery-loadcells.png", title: "Weighing Equipment" },
    { src: "/images/gallery-plc.png", title: "PLC & Control Systems" },
    { src: "/images/gallery-bearings.png", title: "PAB Bearings" },
    { src: "/images/gallery-factory.png", title: "Manufacturing Facility" },
    { src: "/images/gallery-conveyor.png", title: "Conveyor Systems" },
    { src: "/images/gallery-packaging.png", title: "Packaging Machinery" },
    { src: "/images/gallery-drives.png", title: "Motor Drives & VFDs" },
];

export default function Gallery() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

    return (
        <>
            <section id="gallery" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">GALLERY</h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                            <p className="text-lg text-slate-600">A glimpse into our manufacturing excellence</p>
                        </div>

                        {/* Video Thumbnail */}
                        <div className="mb-12 flex justify-center">
                            <div
                                className="relative w-80 h-48 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                                onClick={() => setIsVideoOpen(true)}
                            >
                                <Image
                                    src="/images/hero-bg.png"
                                    alt="Factory Video"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <p className="text-white text-sm font-medium">Watch Our Factory Tour</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {galleryImages.map((img, index) => (
                                <div
                                    key={index}
                                    className="aspect-square bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer relative shadow-md hover:shadow-xl"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                                        <p className="text-white text-sm font-medium p-4">{img.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fullscreen Video Modal */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-50"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <X className="w-10 h-10" />
                    </button>
                    <div
                        className="w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            controls
                            autoPlay
                            className="w-full rounded-lg shadow-2xl"
                        >
                            <source src="/images/factory-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

            {/* Fullscreen Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-10 h-10" />
                    </button>
                    <div
                        className="relative w-full max-w-4xl h-[80vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            fill
                            className="object-contain"
                        />
                        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-medium bg-black/50 px-4 py-2 rounded-lg">
                            {selectedImage.title}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
