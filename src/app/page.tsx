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
                <h2>this is a heading</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum nam atque sed illo itaque voluptate quisquam
                    harum amet. Illo, praesentium dolorem. Voluptate corporis
                    omnis architecto cumque quis deserunt labore illum.
                </p>
            </div>
        </main>
    );
}

// // TODO: loader
// TODO: font sizes
// TODO: button
// TODO: footer
