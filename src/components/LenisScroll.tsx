"use client";
import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";

/**
 * Global scroll state
 * single source of truth
 */
export const scrollState = {
    velocity: 0,
};

function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<any>(null);

    useLenis(({ velocity }) => {
        scrollState.velocity = velocity;
    });

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);
        return () => gsap.ticker.remove(update);
    }, []);

    return (
        <ReactLenis
            root
            ref={lenisRef}
            options={{
                autoRaf: false,
                smoothWheel: true,
            }}
        >
            {children}
        </ReactLenis>
    );
}

export default SmoothScroll;
