import { CSSProperties } from 'react';

export type RevealDirection = 'up' | 'left' | 'right';

const DEFAULT_DISTANCE: Record<RevealDirection, number> = {
    up: 36,
    left: 56,
    right: 56,
};

// A gentle deceleration curve that spreads motion across the full duration
// instead of front-loading it, which is what made the earlier expo-out
// curve feel like an instant snap rather than a smooth glide.
const EASING = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

function getOffset(direction: RevealDirection, distance: number) {
    if (direction === 'up') return `translateY(${distance}px)`;
    return `translateX(${direction === 'left' ? -distance : distance}px)`;
}

interface RevealStyleOptions {
    isVisible: boolean;
    direction?: RevealDirection;
    delay?: number;
    duration?: number;
    distance?: number;
}

export function getRevealStyle({
    isVisible,
    direction = 'up',
    delay = 0,
    duration = 1200,
    distance,
}: RevealStyleOptions): CSSProperties {
    const offset = getOffset(direction, distance ?? DEFAULT_DISTANCE[direction]);

    return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : offset,
        transition: `opacity ${duration}ms ${EASING} ${delay}ms, transform ${duration}ms ${EASING} ${delay}ms`,
        willChange: 'opacity, transform',
    };
}
