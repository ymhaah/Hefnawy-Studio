import { ReactNode } from "react";

/**
 * SocialLinks component renders a list of social media links.
 * @returns {ReactNode} Rendered social media links.
 */
function SocialLinks(): ReactNode {
    const socialLinks = [
        {
            href: "#",
            siteName: "Instagram",
        },
        {
            href: "#",
            siteName: "Twitter",
        },
        {
            href: "#",
            siteName: "Linkedin",
        },
    ];

    return (
        <ul className="social-links flex justify-start items-center flex-row flex-grow">
            {socialLinks.map((link, index) => (
                <li key={index} className="pr-4">
                    <a
                        href={link.href}
                        className="focus p"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.siteName}
                    </a>
                </li>
            ))}
        </ul>
    );
}
export default SocialLinks;
