"use client";

import { useEffect, useState } from "react";

export default function useLowEndDevice() {
    const [isLowEnd, setIsLowEnd] = useState<boolean | null>(null);

    useEffect(() => {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const cores = navigator.hardwareConcurrency ?? 2;
        const memory =
            (navigator as Navigator & { deviceMemory?: number }).deviceMemory ??
            2;

        setIsLowEnd(isMobile || cores < 4 || memory < 4);
    }, []);

    return isLowEnd;
}
