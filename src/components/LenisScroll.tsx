"use client";
import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";

import { ReactLenis, useLenis } from "lenis/react";

function SmoothScroll({ children }: { children: ReactNode }) {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        console.log(scroll);
    });

    const lenisRef = useRef<any>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => gsap.ticker.remove(update);
    }, []);

    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScroll;
