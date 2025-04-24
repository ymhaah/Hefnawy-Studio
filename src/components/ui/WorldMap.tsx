"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

// import { useTheme } from "next-themes";

interface MapProps extends React.HTMLAttributes<HTMLDivElement> {
    dots?: Array<{
        start: { lat: number; lng: number; label?: string };
        end: { lat: number; lng: number; label?: string };
    }>;
    lineColor?: string;
}

function WorldMap({
    dots = [],
    lineColor = "#3b82f6",
    ...nativeProps
}: MapProps) {
    const svgRef = useRef<SVGSVGElement>(null);

    // ? Initialize the DottedMap with height (more like dots density) and grid style
    const map = new DottedMap({ height: 80, grid: "diagonal" });

    // const { theme } = useTheme();

    // const svgMap = map.getSVG({
    //   radius: 0.22,
    //   color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    //   shape: "circle",
    //   backgroundColor: theme === "dark" ? "black" : "white",
    // });

    // ? Get the SVG string from the map
    const svgMap = map.getSVG({
        radius: 0.22,
        color: "#00000040", // dot color
        shape: "circle",
        backgroundColor: "var(--bg-clr)",
    });

    // ? Converts latitude/longitude to x/y positions on the SVG
    const projectPoint = (lat: number, lng: number) => {
        const x = (lng + 180) * (800 / 360);
        const y = (90 - lat) * (400 / 180);
        return { x, y };
    };

    // ? Creates a curved SVG path between two points
    const createCurvedPath = (
        start: { x: number; y: number },
        end: { x: number; y: number }
    ) => {
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - 50; // lift curve above points
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    return (
        <div
            aria-label="Dotted world map of customer locations"
            {...nativeProps}
            className={`w-[120%] ${nativeProps.className}`}
        >
            <div className="relative aspect-[2/1] w-full">
                {/* Render the background map image */}
                <Image
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                    className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_40%,white_70%,transparent)]"
                    alt="world map"
                    height="495"
                    width="1056"
                    draggable={false}
                />

                {/* SVG overlay for paths and points */}
                <svg
                    ref={svgRef}
                    viewBox="0 0 800 400"
                    className="pointer-events-none absolute inset-0 h-full w-full select-none"
                >
                    {/* Animated curved paths between start and end points */}
                    {dots.map((dot, i) => {
                        const startPoint = projectPoint(
                            dot.start.lat,
                            dot.start.lng
                        );
                        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
                        return (
                            <g key={`path-group-${i}`}>
                                <motion.path
                                    d={createCurvedPath(startPoint, endPoint)}
                                    fill="none"
                                    stroke="url(#path-gradient)"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.5 * i,
                                        ease: "easeOut",
                                    }}
                                    key={`start-upper-${i}`}
                                />
                            </g>
                        );
                    })}

                    {/* Gradient definition used for path stroke */}
                    <defs>
                        <linearGradient
                            id="path-gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="white"
                                stopOpacity="0"
                            />
                            <stop
                                offset="5%"
                                stopColor={lineColor}
                                stopOpacity="1"
                            />
                            <stop
                                offset="95%"
                                stopColor={lineColor}
                                stopOpacity="1"
                            />
                            <stop
                                offset="100%"
                                stopColor="white"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>

                    {/* Animated circles for start and end points */}
                    {dots.map((dot, i) => (
                        <g key={`points-group-${i}`}>
                            {/* Start point with pulsating animation */}
                            <g key={`start-${i}`}>
                                <circle
                                    cx={
                                        projectPoint(
                                            dot.start.lat,
                                            dot.start.lng
                                        ).x
                                    }
                                    cy={
                                        projectPoint(
                                            dot.start.lat,
                                            dot.start.lng
                                        ).y
                                    }
                                    r="2"
                                    fill={lineColor}
                                />
                                <circle
                                    cx={
                                        projectPoint(
                                            dot.start.lat,
                                            dot.start.lng
                                        ).x
                                    }
                                    cy={
                                        projectPoint(
                                            dot.start.lat,
                                            dot.start.lng
                                        ).y
                                    }
                                    r="2"
                                    fill={lineColor}
                                    opacity="0.5"
                                >
                                    <animate
                                        attributeName="r"
                                        from="2"
                                        to="8"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        from="0.5"
                                        to="0"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </g>

                            {/* End point with same pulsating animation */}
                            <g key={`end-${i}`}>
                                <circle
                                    cx={
                                        projectPoint(dot.end.lat, dot.end.lng).x
                                    }
                                    cy={
                                        projectPoint(dot.end.lat, dot.end.lng).y
                                    }
                                    r="2"
                                    fill={lineColor}
                                />
                                <circle
                                    cx={
                                        projectPoint(dot.end.lat, dot.end.lng).x
                                    }
                                    cy={
                                        projectPoint(dot.end.lat, dot.end.lng).y
                                    }
                                    r="2"
                                    fill={lineColor}
                                    opacity="0.5"
                                >
                                    <animate
                                        attributeName="r"
                                        from="2"
                                        to="8"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        from="0.5"
                                        to="0"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </g>
                        </g>
                    ))}
                </svg>
            </div>
        </div>
    );
}

export default WorldMap;
