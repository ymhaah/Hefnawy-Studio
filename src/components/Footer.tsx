import { ReactNode } from "react";

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
            className="main-footer w-full py-8"
            aria-label="main site footer"
        >
            <div className="Container">
                {/* <div className="footer__main">
                    <h2 className="footer__title">
                        <a href="/index.html" className="main-logo focus">
                        Shubham
                    </a>
                    </h2>
                    <p className="small">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, provident officiis deleniti impedit debitis
                        voluptatibus?
                    </p>
                </div>
                {footerLinks.map((item, index) => (
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
                ))}
                <nav aria-label="social media links">
                    <h2 className="footer__title">Follow My On</h2>
                    <SocialLinks />
                </nav> */}
                <section
                    className="w-full flex justify-between items-center flex-row "
                    aria-label="Site Info & Links"
                >
                    <div className="flex justify-start items-center flex-row flex-grow">
                        <div className="">
                            <h2 className="footer__title fs-sm">Version</h2>
                            <p>2025 © Edition</p>
                        </div>
                        <div>
                            <h2 className="footer__title fs-sm">Local time</h2>
                            <LocalTime />
                        </div>
                    </div>
                    <nav
                        className="flex justify-end items-center flex-row flex-grow"
                        aria-label="social media links"
                    >
                        <h2 className="footer__title fs-sm">Socials</h2>
                        <SocialLinks />
                    </nav>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
