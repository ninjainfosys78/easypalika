"use client";

import { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { getRevealStyle, RevealDirection } from './revealStyle';

interface RevealProps {
    children: ReactNode;
    direction?: RevealDirection;
    delay?: number;
    duration?: number;
    distance?: number;
    immediate?: boolean;
    className?: string;
}

export default function Reveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 1200,
    distance,
    immediate = false,
    className = '',
}: RevealProps) {
    const { ref, isVisible } = useReveal({ triggerOnMount: immediate });
    const style = getRevealStyle({ isVisible, direction, delay, duration, distance });

    return (
        <div ref={ref} className={className} style={style}>
            {children}
        </div>
    );
}
