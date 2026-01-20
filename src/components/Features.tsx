import { Clock, Target, DollarSign, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
    icon: LucideIcon;
    title: string;
    desc: string;
}

const features: Feature[] = [
    { icon: Clock, title: "Just In Time Delivery", desc: "Quick turnaround for critical projects" },
    { icon: Target, title: "Zero PPM", desc: "Highest quality standards maintained" },
    { icon: DollarSign, title: "Low Price", desc: "Competitive pricing direct from factory" },
    { icon: CheckCircle, title: "Manufacturing To End Users", desc: "Lowest cost guaranteed" }
];

export default function Features() {
    return (
        <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-blue-600">
                                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                                    <h3 className="font-bold text-lg text-slate-800 mb-2">{feature.title}</h3>
                                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
