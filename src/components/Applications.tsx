import { Package, ArrowLeftRight, Scale, Layers, Droplets, Building2, Vibrate, Factory, Cog } from 'lucide-react';

const applications = [
    { name: "Packaging Machines", icon: Package, desc: "Automated packaging solutions" },
    { name: "Conveyor Belts", icon: ArrowLeftRight, desc: "Material handling systems" },
    { name: "Weighing Machines", icon: Scale, desc: "Industrial weighing equipment" },
    { name: "Patti Machines", icon: Layers, desc: "Strip processing equipment" },
    { name: "Hydraulics", icon: Droplets, desc: "Hydraulic power systems" },
    { name: "Lifts & Elevators", icon: Building2, desc: "Vertical transport systems" },
    { name: "Shaker Machines", icon: Vibrate, desc: "Vibration & screening" },
    { name: "Manufacturing", icon: Factory, desc: "Production machinery" },
    { name: "Automation", icon: Cog, desc: "Industrial automation" },
];

export default function Applications() {
    return (
        <section id="applications" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">APPLICATIONS</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">Our products power diverse industrial applications</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {applications.map((app, index) => {
                            const Icon = app.icon;
                            return (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-blue-100 group-hover:bg-blue-600 p-4 rounded-xl transition-colors">
                                            <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 text-lg">{app.name}</h3>
                                            <p className="text-slate-500 text-sm">{app.desc}</p>
                                        </div>
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
