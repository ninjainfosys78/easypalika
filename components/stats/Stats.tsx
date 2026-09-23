"use client";

import { ReactNode } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getStaggerDelay } from '@/components/animation/stagger';
import StatCard from './StatCard';

const GRID_COLUMNS = 4;

interface StatDefinition {
    id: string;
    icon: ReactNode;
    value: number;
    suffix: string;
    label: { en: string; ne: string };
}

const STATS: StatDefinition[] = [
    {
        id: 'local-levels',
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 13h10M7 17h10M7 9h10M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
            </svg>
        ),
        value: 70,
        suffix: ' +',
        label: { en: 'Service-providing Local Levels', ne: 'सेवा प्रवाह स्थानीय तह' },
    },
    {
        id: 'citizens',
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 110-8 4 4 0 010 8zm6 8v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        value: 800000,
        suffix: ' +',
        label: { en: 'Beneficiary Citizens', ne: 'लाभान्वित नागरिक' },
    },
    {
        id: 'representatives',
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 17v-2a4 4 0 018 0v2M16 11a4 4 0 110-8 4 4 0 010 8z" />
            </svg>
        ),
        value: 2500,
        suffix: ' +',
        label: { en: 'Beneficiary Representatives', ne: 'लाभान्वित प्रतिनिधिहरु' },
    },
    {
        id: 'recipients',
        icon: (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4a5 5 0 100-10 5 5 0 000 10z" />
            </svg>
        ),
        value: 300,
        suffix: ' +',
        label: { en: 'Happy Service Recipients', ne: 'खुसी सेवाग्राहीहरु' },
    },
];

export default function Stats() {
    const { lang } = useLanguage();
    const active = lang === 'ne' ? 'ne' : 'en';

    return (
        <section className="pt-6 sm:pt-8 md:pt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
                    {STATS.map((stat, index) => (
                        <StatCard
                            key={stat.id}
                            icon={stat.icon}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            lang={active}
                            delay={getStaggerDelay(index, GRID_COLUMNS, 100)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
