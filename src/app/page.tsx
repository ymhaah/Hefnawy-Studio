// import Image from "next/image";
import { Button } from "@ui/Button";

async function mockLoadingDelay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
    await mockLoadingDelay(3000); // ? simulate loading time to show loading page design

    return (
        <main className="h-[500vh] w-full">
            <div className="Container">
                <Button>test</Button>
            </div>
        </main>
    );
}

// // TODO: loader
// TODO: font sizes
// TODO: button
// TODO: footer
