import Button from "@ui/Button";

import { Rocket } from "lucide-react";

function Hero() {
    return (
        <section
            className="Hero | h-fit w-full pb-10 max-sm:min-h-[60svh]"
            style={{ minHeight: "calc(80svh - 100px)" }}
        >
            <div className="Container relative flex flex-col items-center justify-center">
                <h1 className="h1 fs-xl mb-4 text-center">
                    Let&apos;s create cool Website for your brand.
                </h1>
                <p className="p max-w-[57ch] text-center">
                    Clean design, smooth interactions, and scalable code —
                    crafted to turn your online presence into a powerful brand
                    asset.
                </p>
                <div className="mt-6 flex w-full justify-center gap-4 max-sm:flex-col">
                    <Button
                        className="btn-mono-dark"
                        as="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://freelancerprofilenuxt.mesh.prod.platform.usw2.upwork/freelancers/~01acd8e5370e5646aa?mp_source=share"
                    >
                        Start Bulding
                        <span className="ml-2 flex items-center">
                            <Rocket size={18} />
                        </span>
                    </Button>
                    <Button
                        className="btn-skeleton"
                        target="_blank"
                        rel="noopener noreferrer"
                        as="a"
                        href="https://calendly.com/ymhaah250/website-planning-consultation"
                    >
                        Book a Call
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
