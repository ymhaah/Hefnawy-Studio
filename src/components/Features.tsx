"use client";

import { Activity, Map as MapIcon, MessageCircle } from "lucide-react";
import { Area, AreaChart, CartesianGrid } from "recharts";
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "./ui/chart";

import WorldMap from "./ui/WorldMap";

type locationsT = {
    lat: number;
    lng: number;
    label: string;
};

const locations: locationsT[] = [
    {
        lat: 38.9072,
        lng: -77.0369,
        label: "Washington, DC",
    },
    {
        lat: -1.9403,
        lng: 29.8739,
        label: "Rwanda",
    },
    {
        lat: 26.2389,
        lng: 73.0243,
        label: "Jodhpur, India",
    },
];

export default function Features() {
    return (
        <section className="px-4 py-16 md:py-32">
            <div className="Container grid border md:grid-cols-2">
                <div className="col-span-full border-y p-12">
                    <h2 className="fs-lg h1 text-center">Why choose me?</h2>
                </div>
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <MapIcon className="size-4" />
                            Working around the globe
                        </span>

                        <p className="h4 fs-md mt-8">
                            I collaborate with clients worldwide, proving that
                            good work survives time zones and bad Wi-Fi
                        </p>
                    </div>

                    <div aria-hidden className="relative flex items-center">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="z-1 dark:bg-muted relative flex size-fit items-center gap-2 rounded-lg border bg-bg px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                                Building websites for clients worldwide.
                            </div>
                        </div>

                        <WorldMap
                            dots={locations.map((location) => ({
                                start: {
                                    lat: 13.7563,
                                    lng: 31.4913182,
                                    label: "Cairo, Egypt",
                                },
                                end: {
                                    lat: location.lat,
                                    lng: location.lng,
                                    label: location.label,
                                },
                            }))}
                            className="max-md:w-[200%]"
                        />
                    </div>
                </div>
                <div className="rounded-lg bg-white p-6 dark:bg-transparent sm:p-12">
                    <div className="relative z-10">
                        <span className="flex items-center gap-2 text-txt">
                            <MessageCircle className="size-4" />
                            Easy to Reach, Hard to Ignore
                        </span>

                        <p className="h4 fs-md my-8">
                            Email, calls, WhatsApp, carrier pigeon — I’ll get
                            back to you fast
                        </p>
                    </div>
                    <div aria-hidden className="flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground text-xs">
                                    Sat 22 Feb
                                </span>
                            </div>
                            <div className="mt-1.5 w-3/5 max-w-[250px] rounded-lg border bg-bg p-3 text-xs">
                                Hey, I&apos;m having trouble with my website.
                            </div>
                        </div>

                        <div>
                            <div className="mb-1 ml-auto w-3/5 max-w-[250px] rounded-lg bg-blue-600 p-3 text-xs text-white">
                                Never gonna give you up, Never gonna let you
                                down, Never gonna run around and desert you
                            </div>
                            <span className="text-muted-foreground block text-right text-xs">
                                Now
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-full mt-24 min-h-[25svh]">
                    <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <Activity className="size-4" />
                            High performance and SEO
                        </span>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    );
}

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

const chartData = [
    { month: "May", desktop: 56, mobile: 224 },
    { month: "June", desktop: 56, mobile: 224 },
    { month: "January", desktop: 126, mobile: 252 },
    { month: "February", desktop: 205, mobile: 410 },
    { month: "March", desktop: 200, mobile: 126 },
    { month: "April", desktop: 400, mobile: 800 },
];

const MonitoringChart = () => {
    return (
        <ChartContainer
            className="h-120 aspect-auto md:h-96"
            config={chartConfig}
        >
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}
            >
                <defs>
                    <linearGradient
                        id="fillDesktop"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="0%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip
                    active
                    cursor={false}
                    content={<ChartTooltipContent className="dark:bg-muted" />}
                />
                <Area
                    strokeWidth={2}
                    dataKey="mobile"
                    type="stepBefore"
                    fill="url(#fillMobile)"
                    fillOpacity={0.1}
                    stroke="var(--color-mobile)"
                    stackId="a"
                />
                <Area
                    strokeWidth={2}
                    dataKey="desktop"
                    type="stepBefore"
                    fill="url(#fillDesktop)"
                    fillOpacity={0.1}
                    stroke="var(--color-desktop)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    );
};
