import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Products | Bharat GVK Technologies',
    description: 'Explore our comprehensive range of electromechanical products including BLDC Motors, Load Cells, Stepper Motors, and more.',
};

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-4">
                <Products />
            </main>
            <Footer />
        </div>
    );
}
