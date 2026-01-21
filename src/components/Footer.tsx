import Link from 'next/link';

const footerLinks = [
    { href: '/', label: 'HOME' },
    { href: '/products', label: 'PRODUCTS' },
    { href: '/achievements', label: 'ACHIEVEMENTS' },
    { href: '/services', label: 'SERVICES' },
    { href: '/applications', label: 'APPLICATIONS' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/contact', label: 'CONTACT US' }
];

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-blue-400">ABOUT US</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                We are the manufacturers and importers of complete range of various electromechanical products.
                                All our products are ISO certified 9001:2008 and manufactured using Innovative Technology.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-blue-400">CONTACT</h3>
                            <div className="text-slate-400 text-sm space-y-2">
                                <p>Shed No 7/B, Third Floor, EC Complex</p>
                                <p>Kushaiguda, Hyderabad-062</p>
                                <p>Telangana, India</p>
                                <p className="mt-2 text-white font-medium">+91 92465 58934</p>
                                <p className="text-blue-400">bharatgvktechnologies@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-700 pt-8">
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                {footerLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-slate-500 text-sm mt-8">
                        <p>Copyright © 2006 - {new Date().getFullYear()}. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
