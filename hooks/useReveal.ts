"use client";

import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions {
    threshold?: number;
    triggerOnMount?: boolean;
}

export function useReveal({ threshold = 0.15, triggerOnMount = false }: UseRevealOptions = {}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (triggerOnMount) {
            // Two rAFs guarantee the hidden starting style has actually painted
            // before we flip to visible, otherwise some browsers collapse both
            // states into one frame and the transition never runs.
            let inner = 0;
            const outer = requestAnimationFrame(() => {
                inner = requestAnimationFrame(() => setIsVisible(true));
            });
            return () => {
                cancelAnimationFrame(outer);
                cancelAnimationFrame(inner);
            };
        }

        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, triggerOnMount]);

    return { ref, isVisible };
}
