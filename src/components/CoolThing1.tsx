"use client";

import { useEffect, useState } from "react";
import Ballpit from "./Ballpit";

function IsLowEndDevice() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const cores = navigator.hardwareConcurrency ?? 2;
    const memory =
        (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 2;

    return isMobile || cores < 4 || memory < 4;
}

function CoolThing1() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (IsLowEndDevice()) {
            setEnabled(true);
        }
    }, []);

    if (!enabled) return null;

    return (
        <section
            className="CoolThing1 | relative flex h-[60vh] w-full items-center justify-center"
            aria-label="play with my Balls"
        >
            <div className="shadow-3xl h-[90%] w-[75%] overflow-hidden rounded-[2rem] bg-white max-sm:w-[90%]">
                <Ballpit
                    count={200}
                    gravity={1}
                    friction={0.8}
                    wallBounce={1.2}
                    followCursor={false}
                    colors={[
                        "hsl(232, 79%, 59%)",
                        "hsl(231, 65%, 51%)",
                        "hsl(210, 5%, 92%)",
                        "hsl(192, 3%, 61%)",
                        "hsl(225, 7%, 12%)",
                    ]}
                    ambientColor={0xffffff}
                />
            </div>
        </section>
    );
}

export default CoolThing1;
