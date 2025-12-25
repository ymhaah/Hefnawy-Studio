// import Image from "next/image";
import Button from "@ui/Button";

import { ConfettiButton } from "@ui/Confetti";

import Hero from "@comp/Hero";
import CoolThing1 from "@comp/CoolThing1";
import Features from "@comp/Features";
import Testimonials from "@comp/Testimonials";

import GradualBlur from "@comp/GradualBlur";

// import icon from "@icon/arrow-small-right.svg";

import SmoothScroll from "@/components/LenisScroll";

async function mockLoadingDelay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
    await mockLoadingDelay(3000); // ? simulate loading time to show loading page design

    return (
        <SmoothScroll>
            <main className="w-full">
                <Hero />
                <CoolThing1 />
                <Features />
                <Testimonials />
                <GradualBlur
                    target="page"
                    position="bottom"
                    height="3rem"
                    strength={2}
                    divCount={5}
                    curve="bezier"
                    exponential={true}
                    opacity={1}
                />
            </main>
        </SmoothScroll>
    );
}

// // TODO: loader
// TODO: font sizes
// TODO: button
// TODO: testimonials
// // TODO: footer
