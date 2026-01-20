import { Building, Factory as IndustrialIcon, Fuel, Gauge, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
    icon: LucideIcon;
    title: string;
    desc: string;
}

const services: Service[] = [
    { icon: Building, title: "Building Installation", desc: "Professional installation services for industrial equipment" },
    { icon: IndustrialIcon, title: "Industrial Services", desc: "Comprehensive industrial maintenance and support" },
    { icon: Fuel, title: "Fuel Supply and Management", desc: "Efficient fuel management solutions" },
    { icon: Gauge, title: "Industrial Control", desc: "Advanced industrial control systems" }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">OUR SERVICES</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">Comprehensive industrial services tailored to your needs</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden">
                                    <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                        <Icon className="w-16 h-16 text-white" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                                        <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center space-x-1">
                                            <span>Read More</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
