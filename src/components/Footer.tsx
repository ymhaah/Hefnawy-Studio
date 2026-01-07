import type { ReactNode } from "react";

import Link from "next/link";

import TextPressure from "./ui/TextPressure";
import SocialLinks from "./ui/SocialLinks";
import LocalTime from "./ui/LocalTime";

import useLowEndDevice from "../hooks/useIsLowEndDevice";

/**
 * Footer component renders the footer with various link sections.
 * @returns {React.ReactNode} The rendered footer component.
 */
function Footer(): ReactNode {
    const enabled = useLowEndDevice();
    return (
        <footer
            className="main-footer w-full overflow-hidden"
            aria-label="main site footer"
        >
            <div className="Container-full relative flex flex-col">
                <section className="footer_header flex w-full flex-row justify-between gap-10 pb-5 pt-20 max-md:flex-col-reverse">
                    <div className="header_info flex flex-col">
                        <Link href="/" className="focus no-underline">
                            <h1 aria-hidden="true" className="Logo logo_main">
                                حَفْناوِيٍّ
                            </h1>
                            <span className="sr-only">hefnawy studio</span>
                        </Link>
                        <small className="md:max-w-[50ch]">
                            Hefnawy Studio is a design studio that focuses on
                            creating innovative and visually stunning websites
                            and applications.
                        </small>
                    </div>
                </section>
                <section className="footer_bottom flex w-full flex-row justify-between gap-5 pb-5 pt-16 max-sm:flex-col-reverse">
                    <div className="footer_info flex flex-grow justify-start gap-5 max-sm:w-full max-sm:flex-wrap max-sm:items-start max-sm:justify-between">
                        <div className="flex flex-col">
                            <h2 className="small mb-5">Version</h2>
                            <p>2025 © Edition</p>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="small mb-5">Local time</h2>
                            <LocalTime />
                        </div>
                    </div>
                    <span className="Line mt-5 h-[0.5px] w-full opacity-25 sm:hidden"></span>
                    <nav
                        className="flex flex-col items-start max-sm:w-full"
                        aria-label="social media links"
                    >
                        <h2 className="small mb-5">Socials</h2>
                        <SocialLinks />
                    </nav>
                </section>
                {enabled ? null : <TextPressure text="Hefnawy Studio" />}
            </div>
        </footer>
    );
}

export default Footer;
