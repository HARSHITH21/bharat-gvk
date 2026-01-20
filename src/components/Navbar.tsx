'use client';

import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'PRODUCTS', href: '/products' },
    { label: 'ACHIEVEMENTS', href: '/achievements' },
    { label: 'SERVICES', href: '/services' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'CONTACT US', href: '/contact' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-2">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4 text-white">
                        <a href="tel:+919246558934" className="flex items-center space-x-2 hover:text-blue-200 transition">
                            <Phone className="w-4 h-4" />
                            <span className="hidden sm:inline">040-49503330 / +91 81796 90597</span>
                            <span className="sm:hidden">Call Us</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:info@bharatgvk.com" className="hover:text-blue-200 transition">info@bharatgvk.com</a>
                    </div>
                </div>
            </div>

            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <Image
                            src="/images/logo.png"
                            alt="Bharat GVK Technologies Logo"
                            width={56}
                            height={56}
                            className="object-contain transition-transform group-hover:scale-105"
                        />
                        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                            Bharat GVK Technologies
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${isActive(item.href)
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 animate-fade-in-up">
                        <div className="flex flex-col space-y-2 mt-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-lg font-medium transition-all ${isActive(item.href)
                                            ? 'bg-blue-600 text-white'
                                            : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
