import Navbar from '@/components/Navbar';
import Achievements from '@/components/Achievements';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Achievements | Bharat GVK Technologies',
    description: 'Over 32 years of excellence in electromechanical manufacturing. ISO 9001:2008 certified.',
};

export default function AchievementsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-4">
                <Stats />
                <Achievements />
            </main>
            <Footer />
        </div>
    );
}
