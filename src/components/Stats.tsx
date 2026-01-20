'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Factory, Users, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
    number: string;
    label: string;
    icon: LucideIcon;
}

const stats: Stat[] = [
    { number: "1705", label: "Million Revenue", icon: TrendingUp },
    { number: "9687", label: "Machineries", icon: Factory },
    { number: "79409", label: "Happy Customers", icon: Users },
    { number: "307", label: "Locations", icon: MapPin }
];

export default function Stats() {
    const [statsCounted, setStatsCounted] = useState(false);

    const animateStats = () => {
        const targets = [1705, 9687, 79409, 307];
        const durations = [2000, 2000, 3000, 1500];

        targets.forEach((target, index) => {
            const duration = durations[index];
            const element = document.getElementById(`stat-${index}`);
            if (element) {
                let current = 0;
                const increment = target / (duration / 16);

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    element.textContent = Math.floor(current).toLocaleString();
                }, 16);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsCounted) {
                    setStatsCounted(true);
                    animateStats();
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.getElementById('stats');
        if (statsSection) {
            observer.observe(statsSection);
        }

        return () => {
            if (statsSection) observer.unobserve(statsSection);
        };
    }, [statsCounted]);

    return (
        <section id="stats" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                                        <Icon className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                                        <div id={`stat-${index}`} className="text-4xl md:text-5xl font-bold text-white mb-2">0</div>
                                        <div className="text-blue-200 font-medium text-sm md:text-base">{stat.label}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
