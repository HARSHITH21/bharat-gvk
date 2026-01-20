import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Bharat GVK Technologies',
    description: 'Get in touch with Bharat GVK Technologies for customized electromechanical solutions. Request a quote today.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-4">
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
