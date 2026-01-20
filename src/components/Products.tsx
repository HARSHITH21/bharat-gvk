import Image from 'next/image';

const products = [
    // Motors - BLDC
    { title: "BLDC Drives", image: "/images/bldc-drives.png", desc: "High-performance brushless DC motor controllers" },
    { title: "BLDC Hub Motors", image: "/images/bldc-hub-motors.png", desc: "In-wheel motors for electric vehicles" },
    { title: "BLDC Industrial Motors", image: "/images/bldc-industrial.png", desc: "Heavy-duty industrial brushless motors" },

    // Motors - PMDC
    { title: "PMDC Motors", image: "/images/pmdc-motors.png", desc: "Permanent magnet DC motors" },
    { title: "PMDC Motor Drives", image: "/images/pmdc-drives.png", desc: "Speed controllers for DC motors" },

    // Stepper Motors
    { title: "Stepper Motors", image: "/images/stepper-motors.png", desc: "Precision stepper motors for automation" },
    { title: "Stepper Motor Drives", image: "/images/bldc-drives.png", desc: "Digital stepper motor controllers" },

    // Weighing Equipment
    { title: "Load Cells", image: "/images/loadcells.png", desc: "Industrial weighing sensors" },
    { title: "Weighing Indicators", image: "/images/weighing-indicator.png", desc: "Digital weight display units" },
    { title: "Crane Scales", image: "/images/crane-scales.png", desc: "Heavy-duty hanging scales" },
    { title: "Weighbridge", image: "/images/weighbridge.png", desc: "Truck and vehicle weighing platforms" },
    { title: "Weigh Scales", image: "/images/load-cells.png", desc: "Platform and bench weighing scales" },
    { title: "4-20mA Converter", image: "/images/plc-hmi.png", desc: "Signal conversion modules" },
    { title: "Force Control Systems", image: "/images/plc-hmi.png", desc: "Tension and force monitoring" },

    // Servo Motors
    { title: "Servo Motors", image: "/images/servo-motors.png", desc: "High-precision servo motors" },
    { title: "Servo Motor Drives", image: "/images/servo-motors.png", desc: "Servo amplifiers and controllers" },

    // Spindle & Synchronous
    { title: "AC Spindle Motors", image: "/images/bldc-industrial.png", desc: "CNC spindle motors" },
    { title: "Synchronous Motors", image: "/images/bldc-industrial.png", desc: "Constant speed AC motors" },

    // Automation Controls
    { title: "PLC", image: "/images/plc-hmi.png", desc: "Programmable Logic Controllers" },
    { title: "HMI", image: "/images/plc-hmi.png", desc: "Human Machine Interface panels" },

    // Other Components
    { title: "PAB Bearings", image: "/images/pab-bearings.png", desc: "Precision ball bearings" },
    { title: "Dowel Pins", image: "/images/pab-bearings.png", desc: "Industrial fastening pins" },
    { title: "AC Induction Motors", image: "/images/bldc-industrial.png", desc: "Geared induction motors" },
];

export default function Products() {
    return (
        <section id="products" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2">Complete Product Range</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Products</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Comprehensive range of electromechanical products - OEM manufactured and imported with precision engineering
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group">
                                <div className="h-48 relative overflow-hidden bg-slate-100">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-bold text-slate-800 mb-1">{product.title}</h3>
                                    <p className="text-slate-500 text-sm">{product.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
