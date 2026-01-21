'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
    "BLDC Motors & Hub Motors",
    "Stepper & PMDC Motors",
    "Load Cells & Indicators",
    "PAB Bearings",
    "PLC & HMI Systems",
    "Servo & Spindle Motors"
];

const features = [
    { image: "/images/feature-oem.png", title: "OEM Manufacturing", desc: "Direct from Factory" },
    { image: "/images/feature-loadcells.png", title: "Load Cells", desc: "Precision Weighing" },
    { image: "/images/feature-automation.png", title: "Industrial Automation", desc: "Complete Solutions" },
    { image: "/images/feature-controls.png", title: "Control Systems", desc: "PLC & HMI" },
];

export default function Hero() {
    return (
        <section className="bg-white">
            {/* Hero Image - Pinned to Top */}
            <div className="relative h-64 md:h-80 lg:h-96 w-full">
                <Image
                    src="/images/hero-bg.png"
                    alt="Industrial manufacturing"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>

                {/* ISO Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-green-600 font-bold text-sm">✓ ISO 9001:2008 Certified</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 lg:py-16">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Tagline */}
                    <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                        Trusted Since 1992 | 32+ Years of Excellence
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                        Your Partner in{' '}
                        <span className="text-blue-600">Electromechanical Solutions</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        <strong className="text-slate-800">Bharat GVK Technologies</strong>, founded by{' '}
                        <span className="text-blue-600 font-medium">Mr. Venkateshwarlu Gade</span> in Hyderabad,
                        is a leading OEM manufacturer and importer of precision electromechanical products.
                        We deliver quality components directly from factory to end users at competitive prices.
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-8 py-6">
                        <div className="text-center px-6">
                            <div className="text-4xl font-bold text-blue-600">32+</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wide">Years</div>
                        </div>
                        <div className="w-px bg-slate-200 hidden sm:block"></div>
                        <div className="text-center px-6">
                            <div className="text-4xl font-bold text-blue-600">1000+</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wide">Clients</div>
                        </div>
                        <div className="w-px bg-slate-200 hidden sm:block"></div>
                        <div className="text-center px-6">
                            <div className="text-4xl font-bold text-blue-600">50+</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wide">Products</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href="/products"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl"
                        >
                            <span>View Products</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/services"
                            className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-all border border-slate-200"
                        >
                            <span>Our Services</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Product List */}
                <div className="mt-12 py-8 border-t border-slate-100">
                    <p className="text-center text-sm text-slate-500 uppercase tracking-wide mb-6">Our Product Range</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {products.map((product, index) => (
                            <div key={index} className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-full">
                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                <span className="text-sm text-slate-700">{product}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Grid with Images */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-slate-50 hover:bg-slate-100 rounded-2xl overflow-hidden transition-all group cursor-pointer shadow-sm hover:shadow-lg">
                            <div className="relative h-40 w-full">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-bold text-slate-800 mb-1">{feature.title}</h3>
                                <p className="text-sm text-slate-500">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
