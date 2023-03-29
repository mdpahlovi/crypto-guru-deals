import Link from "next/link";
import { nav_links, top_links } from "./Data";

const Menu = () => {
    return (
        <>
            {nav_links.map(({ link, text }, i) => (
                <Link key={i} href={link}>
                    {text}
                </Link>
            ))}
        </>
    );
};

const TopMenu = () => {
    return (
        <>
            {top_links.map(({ type, text, icon }, i) => (
                <a key={i} href={type === "mail" ? `mailto:${text}` : `tel:${text}`} className="flex items-center gap-1.5">
                    {icon}
                    {text}
                </a>
            ))}
        </>
    );
};

export { Menu, TopMenu };
