import Hero from "../components/Hero";
import CoolThing1 from "../components/CoolThing1";
import Features from "../components/Features";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

import GradualBlur from "../components/GradualBlur";

// import icon from "@icon/arrow-small-right.svg";

// import SmoothScroll from "../components/LenisScroll";

export default async function Home() {
    return (
        // <SmoothScroll>
        // </SmoothScroll>
        <main className="w-full">
            <Hero />
            <CoolThing1 />
            <Features />
            <Projects />
            <Testimonials />
            <Contact />
            <GradualBlur
                target="page"
                position="bottom"
                height="4rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
            />
        </main>
    );
}

// // TODO: loader
// TODO: font sizes
// TODO: button
// TODO: testimonials
// // TODO: footer
