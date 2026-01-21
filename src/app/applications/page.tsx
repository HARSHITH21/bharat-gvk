import Navbar from '@/components/Navbar';
import Applications from '@/components/Applications';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Applications | Bharat GVK Technologies',
    description: 'Discover the diverse industrial applications of our electromechanical products across various sectors.',
};

export default function ApplicationsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-4">
                <Applications />
                <Clients />
            </main>
            <Footer />
        </div>
    );
}
