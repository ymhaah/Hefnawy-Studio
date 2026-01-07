"use client";

import { useEffect, useState } from "react";

type LowEndReason = "mobile" | "cpu" | "memory";

interface UseLowEndOptions {
    reasons?: LowEndReason[]; // أسباب التقييم
    minCores?: number;
    minMemory?: number;
}

export default function useLowEndDevice(options: UseLowEndOptions = {}) {
    const {
        reasons = ["mobile", "cpu", "memory"],
        minCores = 4,
        minMemory = 4,
    } = options;

    const [isLowEnd, setIsLowEnd] = useState<boolean | null>(null);

    useEffect(() => {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const cores = navigator.hardwareConcurrency ?? 2;
        const memory =
            (navigator as Navigator & { deviceMemory?: number }).deviceMemory ??
            2;

        const checks: Record<LowEndReason, boolean> = {
            mobile: isMobile,
            cpu: cores < minCores,
            memory: memory < minMemory,
        };

        setIsLowEnd(reasons.some((reason) => checks[reason]));
    }, [reasons, minCores, minMemory]);

    return isLowEnd;
}
