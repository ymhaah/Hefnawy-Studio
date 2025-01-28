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
                <h1 className="h1 fs-xxxl">
                    H1 Heading - The Biggest Title H1 Heading - The Biggest
                    Title
                </h1>
                <h2 className="h1">H2 Heading - Secondary Title</h2>
                <h3 className="h3">H3 Heading - Section Title</h3>
                <h4 className="h4 fs-md">H4 Heading - Subsection Title</h4>
                <p className="p fs-base">
                    This is a paragraph of text using the <code>p</code> class.
                    It should display the base font size and line height for
                    body text. This is a paragraph of text using the{" "}
                    <code>p</code> class. It should display the base font size
                    and line height for body text. This is a paragraph of text
                    using the <code>p</code> class. It should display the base
                    font size and line height for body text. This is a paragraph
                    of text using the <code>p</code> class. It should display
                    the base font size and line height for body text.
                </p>
                <p className="p fs-base ">
                    You can also test inline elements like{" "}
                    <strong>bold text</strong>, <em>italic text</em>,{" "}
                    <a href="#test">links</a>, and <code>code snippets</code>.
                </p>
                <small className="small fs-sm">
                    Small Text: This is for smaller, less emphasized text.
                </small>
                <div style={{ marginTop: "2rem" }}>
                    <h3 className="h3">Font Size Utilities</h3>
                    <p className="fs-sm font-normal">
                        This text uses <code>.fs-sm</code>.
                    </p>
                    <p className="fs-base font-normal">
                        This text uses <code>.fs-base</code>.
                    </p>
                    <p className="fs-md font-medium">
                        This text uses <code>.fs-md</code>.
                    </p>
                    <p className="fs-lg font-bold">
                        This text uses <code>.fs-lg</code>.
                    </p>
                    <p className="fs-xl font-bold">
                        This text uses <code>.fs-xl</code>.
                    </p>
                    <p className="fs-xxl font-bold">
                        This text uses <code>.fs-xxl</code>.
                    </p>
                    <p className="fs-xxxl font-bold">
                        This text uses <code>.fs-xxxl</code>.
                    </p>
                </div>
            </div>
        </main>
    );
}

// // TODO: loader
// TODO: font sizes
// TODO: button
// TODO: footer
