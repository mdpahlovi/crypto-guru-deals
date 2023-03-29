import { footer_data } from "./Data";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="bg-accent text-background">
            <div className="container py-12 grid grid-cols-2">
                <div>
                    <h1>
                        <span className="text-secondary">CRYPTO</span> GURU DEALS
                    </h1>
                    <p className="mt-3.5 font-bold">© 2023 Crypto Guru Deals. All rights reserved</p>
                    <div className="mt-9 flex items-center gap-9">
                        <SlSocialFacebook size={26} />
                        <SlSocialTwitter size={26} />
                        <CiLinkedin size={26} />
                        <SlSocialInstagram size={26} />
                        <SlSocialYoutube size={26} />
                    </div>
                </div>
                <div className="flex gap-20">
                    {footer_data.map(({ category, menus }, index) => (
                        <div key={index} className={category !== "Tools & Social Media" && category !== "Contact Us" ? "hidden lg:block" : ""}>
                            <h3 className="mb-6">{category}</h3>
                            <div className="space-y-0.5">
                                {menus.map((menu, index) => (
                                    <p key={index}>{menu}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
