import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gallery | Bharat GVK Technologies',
    description: 'A glimpse into our manufacturing excellence. View our products and facilities.',
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-4">
                <Gallery />
            </main>
            <Footer />
        </div>
    );
}
