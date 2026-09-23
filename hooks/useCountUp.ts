"use client";

import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
    target: number;
    duration?: number;
    start: boolean;
}

function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
}

export function useCountUp({ target, duration = 1600, start }: UseCountUpOptions) {
    const [value, setValue] = useState(0);
    const startedRef = useRef(false);

    useEffect(() => {
        if (!start || startedRef.current) return;
        startedRef.current = true;

        const startTime = performance.now();
        let frame = 0;

        const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setValue(Math.round(easeOutCubic(progress) * target));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [start, target, duration]);

    return value;
}
