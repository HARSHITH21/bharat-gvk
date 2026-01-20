import Image from 'next/image';

const applications = [
    "imag1", "imag2", "imag3", "imag4", "imag5", "imag6",
    "imag7", "imag8", "imag9", "imag10", "imag11", "imag12",
    "imag14", "imag15"
];

export default function Applications() {
    return (
        <section id="applications" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">APPLICATIONS</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">Our products serve diverse industrial applications</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {applications.map((app, index) => (
                            <div key={index} className="aspect-square bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden relative">
                                <Image
                                    src={`/images/${app}.svg`}
                                    alt={`Application ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
