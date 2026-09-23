"use client";

import { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { getRevealStyle } from '@/components/animation/revealStyle';
import { formatStatValue } from './formatStatValue';

interface StatCardProps {
    icon: ReactNode;
    value: number;
    suffix: string;
    label: { en: string; ne: string };
    lang: 'en' | 'ne';
    delay?: number;
}

export default function StatCard({ icon, value, suffix, label, lang, delay = 0 }: StatCardProps) {
    const { ref, isVisible } = useReveal();
    const count = useCountUp({ target: value, duration: 1600, start: isVisible });
    const style = getRevealStyle({ isVisible, direction: 'up', delay });

    return (
        <div ref={ref} style={style} className="flex flex-col items-center p-4 sm:p-6 hover:scale-105 transition">
            <span className="bg-[#071a33]/10 text-[#071a33] p-3 sm:p-4 mb-2 sm:mb-4">
                {icon}
            </span>
            <div className="text-2xl sm:text-3xl md:text-4xl text-[#071a33] mb-1 sm:mb-2">
                {formatStatValue(count, lang)}{suffix}
            </div>
            <div className="text-gray-600 text-center text-sm sm:text-base">
                {label[lang]}
            </div>
        </div>
    );
}
