import Hero from "../components/Hero";
import CoolThing1 from "../components/CoolThing1";
import Features from "../components/Features";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

// import icon from "@icon/arrow-small-right.svg";

import SmoothScroll from "../components/LenisScroll";

export default async function Home() {
    return (
        <SmoothScroll>
            <main className="w-full">
                <Hero />
                <CoolThing1 />
                <Features />
                <Projects />
                <Testimonials />
                <Contact />
            </main>
        </SmoothScroll>
    );
}

// // TODO: loader
// TODO: font sizes
// TODO: button
// TODO: testimonials
// // TODO: footer
