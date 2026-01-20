import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Applications from '@/components/Applications';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gallery | Bharat GVK Technologies',
    description: 'A glimpse into our manufacturing excellence. View our products, applications, and valued clients.',
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-4">
                <Gallery />
                <Applications />
                <Clients />
            </main>
            <Footer />
        </div>
    );
}
