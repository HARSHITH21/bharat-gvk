import Image from 'next/image';

const galleryImages = [
    "imag1", "imag2", "imag3", "imag4", "imag5", "imag6", "imag7", "imag8"
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">GALLERY</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">A glimpse into our manufacturing excellence</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="aspect-square bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer relative">
                                <Image
                                    src={`/images/${img}.svg`}
                                    alt={`Gallery ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
