import { Factory, CheckCircle } from 'lucide-react';

const highlights = [
    "PAB Bearings cover 90% of all bearing range",
    "Products used by State and Central Government sectors",
    "Less delivery time for critical/non-standard products",
    "Manufacturing to End users @ lowest cost",
    "100% customer satisfaction"
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">WHO WE ARE</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Factory className="w-48 h-48 text-blue-600/20" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg text-slate-700 mb-4 leading-relaxed">We are the <strong className="text-blue-700">manufacturers and importers</strong> of complete range of various electromechanical products like PAB Bearings, Load cells, Load cell Indicators, Load cell Controllers, Weighing Scales, Stepper Motors, PMDC Motors, BLDC Motors, BLDC HUB Motors, Servo Motors, AC Spindle Motors, PLC, HMI, Micro Controllers, and Dowel Pins.</p>
                            <p className="text-lg text-slate-700 mb-4 leading-relaxed">Founded by <strong className="text-blue-700">Mr. Venkateshwarlu Gade</strong> in Kushaiguda, Hyderabad, we specialize as an <strong className="text-blue-700">Original Equipment Manufacturer (OEM)</strong> with technical tie-ups with local and overseas manufacturers for Design, Development, and Marketing of latest Technology Products.</p>
                            <p className="text-lg text-slate-700 mb-6 leading-relaxed">All our products are <strong>ISO certified 9001:2008</strong>. We work on ODM Concept and get products manufactured as per customer requirements and add value to the End Product.</p>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                                <h3 className="font-bold text-xl text-slate-800 mb-4">Wide Coverage:</h3>
                                <ul className="space-y-3">
                                    {highlights.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center py-8 px-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl">
                        <p className="text-xl md:text-2xl text-white font-light italic">&quot;Quality is no coincidence, but the sum of many single bricks, fitted perfectly together&quot;</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
