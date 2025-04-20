// import Image from "next/image";
import Button from "@ui/Button";

import icon from "@icon/arrow-small-right.svg";

import SmoothScroll from "@/components/LenisScroll";

async function mockLoadingDelay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
    await mockLoadingDelay(3000); // ? simulate loading time to show loading page design

    return (
        <SmoothScroll>
            <main className="h-[500vh] w-full">
                <div className="Container">
                    <Button className="btn-mono-light rou">Click Me</Button>
                    <Button className="btn-mono-dark">Click Me</Button>
                    <Button className="btn-primary">Click Me</Button>
                    <Button className="">Click Me</Button>
                    {/* <p>
                    Lorem ipsum dolor sit amet, consectetur{" "}
                    <a href="#" className="Link">
                        this is a link{" "}
                        <img src={icon.src} alt="" className="arrow Icon" />
                    </a>
                    adipisicing elit.
                </p>
                <h1 className="fs-md">
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    consectetur{" "}
                    <a href="#" className="Link">
                        this is a link{" "}
                        <img src={icon.src} alt="" className="Icon arrow" />
                    </a>
                    adipisicing elit.
                </h1> */}
                </div>
            </main>
        </SmoothScroll>
    );
}

// // TODO: loader
// TODO: font sizes
// TODO: button
// TODO: footer
