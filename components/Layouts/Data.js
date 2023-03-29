import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";

export const nav_links = [
    {
        link: "/",
        text: "Home",
    },
    {
        link: "/shop",
        text: "Shop",
    },
    {
        link: "/about",
        text: "Who we are",
    },
    {
        link: "/faqs",
        text: "FAQS",
    },
    {
        link: "/blog",
        text: "Blogs",
    },
    {
        link: "/contact",
        text: "Contact Us",
    },
];

export const top_links = [
    { type: "number", text: "+86-13530796464", icon: <IoCallOutline size={20} /> },
    { type: "number", text: "+1-806-305-3242", icon: <IoCallOutline size={20} /> },
    { type: "mail", text: "deficoincapital@gmail.com", icon: <IoMailOpenOutline size={20} /> },
];

export const footer_data = [
    { category: "Information", menus: ["My Account", "Affiliates Home", "Affiliate Login", "Affiliate Register", "Contact Us"] },
    { category: "Company Policy", menus: ["Privacy Policy", "Shipping And Returns", "Frequently Asked", "Questions", "Terms and Conditions"] },
    { category: "Navigation", menus: ["About Us", "Blog", "Clients", "Brands", "Careers"] },
];
