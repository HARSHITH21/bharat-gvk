import Image from 'next/image';

const clients = [
    { name: "VR Engineers", image: "/images/client-vrengineers.png", link: "https://www.vrengineers.net/" },
    { name: "Client 1", image: "/images/image6.svg", link: null },
    { name: "Client 2", image: "/images/image8.svg", link: null },
    { name: "Client 3", image: "/images/image9.svg", link: null },
    { name: "Client 4", image: "/images/image1.svg", link: null },
    { name: "Client 5", image: "/images/image2.svg", link: null },
    { name: "Client 6", image: "/images/image3.svg", link: null },
    { name: "Client 7", image: "/images/image4.svg", link: null },
    { name: "Client 8", image: "/images/image5.svg", link: null },
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

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {clients.map((client, index) => {
                            const content = (
                                <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-32 hover:bg-gray-100 hover:shadow-md transition-all relative">
                                    <Image
                                        src={client.image}
                                        alt={client.name}
                                        fill
                                        className="object-contain p-4"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />
                                </div>
                            );

                            return client.link ? (
                                <a key={index} href={client.link} target="_blank" rel="noopener noreferrer" className="block">
                                    {content}
                                </a>
                            ) : (
                                <div key={index}>{content}</div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
