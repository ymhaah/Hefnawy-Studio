// import Image from "next/image";
import Button from "@ui/Button";

import icon from "@icon/arrow-small-right.svg";

async function mockLoadingDelay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
    await mockLoadingDelay(3000); // ? simulate loading time to show loading page design

    return (
        <main className="h-[500vh] w-full">
            <div className="Container">
                {/* <Button>test</Button> */}
                <p>
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
                </h1>
            </div>
        </main>
    );
}

// // TODO: loader
// TODO: font sizes
// TODO: button
// TODO: footer
