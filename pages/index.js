import Arrow from "@/components/Common/Arrow";
import Blogs from "@/components/Home/Blogs/Blogs";
import Brands from "@/components/Home/Brands/Brands";
import Contact from "@/components/Home/Contact/Contact";
import Hero from "@/components/Home/Hero";
import Partner from "@/components/Home/Partner";
import Products from "@/components/Home/Products/Products";
import Main from "@/layouts/Main";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const brand_logo = ["/brand_logo/image0.png", "/brand_logo/image1.png", "/brand_logo/image2.png", "/brand_logo/image3.png"];
const best_brands = [
    "/best_brands/image0.png",
    "/best_brands/image1.png",
    "/best_brands/image2.png",
    "/best_brands/image3.png",
    "/best_brands/image4.png",
    "/best_brands/image5.png",
];

export default function Home() {
    return (
        <Main>
            <Hero />
            <Brands />
            <Products />
            <div className="container section-gap grid grid-cols-2 items-center">
                <h1>
                    Built by <span className="gradient-text">experts</span> <br /> and backed by <br /> investors
                </h1>
                <div className="grid grid-cols-2 gap-8">
                    {brand_logo.map((logo, i) => (
                        <Image key={i} src={logo} alt="" width={320} height={112} />
                    ))}
                </div>
            </div>
            <Partner />
            <div className="section-gap space-y-12">
                <h1 className="text-center">
                    BEST SELLER BRANDS <Arrow />
                </h1>
                <Marquee>
                    {best_brands.map((logo, i) => (
                        <Image key={i} src={logo} alt="" width={320} height={112} />
                    ))}
                </Marquee>
            </div>
            <Contact />
            <Blogs />
        </Main>
    );
}
