import Image from 'next/image';

const clients = [
    "image6", "image8", "image9", "image1", "image2", "image3", "image4", "image5"
];

export default function Clients() {
    return (
        <section id="clients" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">OUR VALUED CLIENTS</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">Trusted by leading industries across India</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {clients.map((client, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-8 flex items-center justify-center h-32 hover:bg-gray-100 transition-colors relative">
                                <Image
                                    src={`/images/${client}.svg`}
                                    alt={`Client ${index + 1}`}
                                    fill
                                    className="object-contain p-4"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
