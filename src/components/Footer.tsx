import { ReactNode } from "react";

import Link from "next/link";

import SocialLinks from "@ui/SocialLinks";
import LocalTime from "@ui/LocalTime";

/**
 * Footer component renders the footer with various link sections.
 * @returns {React.ReactNode} The rendered footer component.
 */
function Footer(): ReactNode {
    // ? each object in footerLinks array is a column the footer that contains a title and links
    const footerLinks = [
        {
            title: "Buyers",
            links: [
                { href: "#", text: "Authentication", outside: false },
                { href: "#", text: "User Management", outside: false },
                { href: "#", text: "Lead Generation", outside: false },
                { href: "#", text: "Connected Apps", outside: false },
            ],
        },
    ];

    return (
        <footer
            className="main-footer w-full overflow-hidden"
            aria-label="main site footer"
        >
            <div className="Container flex flex-col relative">
                <section
                    className="footer__main w-full flex flex-row"
                    aria-label="main site footer"
                >
                    <div className="Logo logo_main">
                        <h2 className="">
                            <Link href="/" className="focus">
                                <span aria-hidden="true">حَفْناوِيّ</span>
                                <span className="sr-only">hefnawy studio</span>
                            </Link>
                        </h2>
                        <p className="small">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate, provident officiis deleniti impedit
                            debitis voluptatibus?
                        </p>
                    </div>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, provident officiis deleniti impedit debitis
                        voluptatibus?
                    </div>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, provident officiis deleniti impedit debitis
                        voluptatibus?
                    </div>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, provident officiis deleniti impedit debitis
                        voluptatibus?
                    </div>
                </section>
                {/* {footerLinks.map((item, index) => (
                    <nav key={index} aria-label="secondary Navigation">
                        <h2 className="footer__title">{item.title}</h2>
                        <ul>
                            {item.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="small focus"
                                        rel={
                                            link.outside
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        target={
                                            link.outside ? "_blank" : undefined
                                        }
                                    >
                                        {link.text}
                                        {link.outside && (
                                        <img
                                            src={north_east}
                                            alt=""
                                            role="presentation"
                                        />
                                    )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
                {footerLinks.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start justify-start gap-4"
                    >
                        <h2 className="text-base font-medium capitalize text-txt-clr-900">
                            {item.title}
                        </h2>
                        <ul>
                            {item.links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="flex flex-row items-center justify-start gap-2 text-base font-normal capitalize text-txt-clr-900"
                                    >
                                        {link.text}
                                        {link.outside && (
                                            <img
                                                src={north_east}
                                                alt=""
                                                role="presentation"
                                                className="h-[0.5em]"
                                            />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))} */}

                <section
                    className="footer_bottom w-full flex justify-between gap-4 items-center flex-row "
                    aria-label="Site Info & Links"
                >
                    <div className="footer_info flex justify-start items-center flex-row ">
                        <div className="flex flex-col">
                            <h2 className="small">Version</h2>
                            <p>2025 © Edition</p>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="small">Local time</h2>
                            <LocalTime />
                        </div>
                    </div>
                    <nav
                        className="flex items-start flex-col "
                        aria-label="social media links"
                    >
                        <h2 className="small">Socials</h2>
                        <SocialLinks />
                    </nav>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
