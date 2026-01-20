import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | Bharat GVK Technologies',
    description: 'Comprehensive industrial services including building installation, industrial maintenance, fuel management, and control systems.',
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-4">
                <Features />
                <Services />
            </main>
            <Footer />
        </div>
    );
}
